import { ModelTable, ModelField, Relation } from "./sqlmodel";
// Se importa directamente desde el JSON, tal y como solicitaste.
import sqlTypesData from "./sqltypes.json";

// Interfaz para el contenido del JSON para mayor seguridad de tipos
interface SqlTypes {
    fieldtypes: {
        [key: string]: string[];
    };
}

// Se asume que el JSON importado tiene la estructura de la interfaz SqlTypes
const fieldtypes = (sqlTypesData as SqlTypes).fieldtypes;

export class CodeGenSqlProcess {

    // Mapa de tipos construido una sola vez para eficiencia.
    public static typeMap: Map<string, string> = this.buildTypeMap();

    /**
     * Construye un mapa para una búsqueda rápida de tipos de PostgreSQL a tipos de modelo genéricos.
     */
    public static buildTypeMap(): Map<string, string> {
        const map = new Map<string, string>();
        for (const genericType in fieldtypes) {
            for (const pgType of fieldtypes[genericType]) {
                const key = pgType.split('(')[0].trim().toUpperCase();
                if (key) {
                    map.set(key, genericType);
                }
            }
        }
        return map;
    }
    
    /**
     * Mapea un tipo de dato de PostgreSQL (ej. 'character varying(50)') a un tipo genérico del modelo (ej. 'text').
     */
    public static mapPgTypeToModelType(pgType: string): string {
        const normalizedType = pgType.split('(')[0].trim().toUpperCase();
        return this.typeMap.get(normalizedType) || 'unknown';
    }

    /**
     * Implementación de la función que parsea el script SQL.
     * La firma de la función es exactamente la que se espera, sin parámetros adicionales.
     * @param sqlScript El contenido del script SQL.
     * @returns Un array de ModelTable con la estructura de la BBDD.
     */
    public static getEsquemaTables(sqlScript: string): ModelTable[] {
        const tablesMap = new Map<string, ModelTable>();

        // 1. PASO 1: Parsear CREATE TABLE para obtener tablas y campos básicos
        const createTableRegex = /CREATE TABLE public\.(\w+)\s*\(([\s\S]*?)\);/g;
        let tableMatch;
        while ((tableMatch = createTableRegex.exec(sqlScript)) !== null) {
            const tableName = tableMatch[1];
            const fieldsBlock = tableMatch[2];
            
            const table = new ModelTable(tableName);
            
            const fieldLines = fieldsBlock.split('\n').filter(line => line.trim() && !line.trim().startsWith('--'));

            for (const line of fieldLines) {
                const trimmedLine = line.trim().replace(/,$/, '');
                const fieldRegex = /^(\w+)\s+((?:character varying|timestamp without time zone|[\w]+)(?:\(\d+\))?)/;
                const fieldMatch = trimmedLine.match(fieldRegex);

                if (!fieldMatch) continue;

                const fieldName = fieldMatch[1];
                const fullType = fieldMatch[2];

                const required = trimmedLine.toUpperCase().includes('NOT NULL');
                const modelType = this.mapPgTypeToModelType(fullType);

                let maxlen: number | null = null;
                const maxlenMatch = fullType.match(/\((\d+)\)/);
                if (maxlenMatch) {
                    maxlen = parseInt(maxlenMatch[1], 10);
                }
                
                const field = new ModelField(
                    fieldName, modelType,
                    false, false, // pk, generated (se determinan después)
                    required,
                    null, maxlen,
                    false // fk (se determina después)
                );
                table.addField(field);
            }
            tablesMap.set(tableName, table);
        }

        // 2. PASO 2: Parsear PRIMARY KEYs
        const pkRegex = /ALTER TABLE ONLY public\.(\w+)\s+ADD CONSTRAINT \w+_pkey PRIMARY KEY \((\w+)\);/g;
        let pkMatch;
        while ((pkMatch = pkRegex.exec(sqlScript)) !== null) {
            const tableName = pkMatch[1];
            const pkFieldName = pkMatch[2];
            const table = tablesMap.get(tableName);
            if (table) {
                const field = table.fields.find(f => f.name === pkFieldName);
                if (field) field.pk = true;
            }
        }

        // 3. PASO 3: Parsear campos autogenerados (GENERATED ALWAYS AS IDENTITY)
        const generatedRegex = /ALTER TABLE public\.(\w+) ALTER COLUMN (\w+) ADD GENERATED ALWAYS AS IDENTITY/g;
        let genMatch;
        while ((genMatch = generatedRegex.exec(sqlScript)) !== null) {
            const tableName = genMatch[1];
            const fieldName = genMatch[2];
            const table = tablesMap.get(tableName);
            if (table) {
                const field = table.fields.find(f => f.name === fieldName);
                if (field) field.generated = true;
            }
        }

        // 4. PASO 4: Parsear FOREIGN KEYs y crear las relaciones
        const fkRegex = /ALTER TABLE ONLY public\.(\w+)\s+ADD CONSTRAINT \w+_fkey FOREIGN KEY \((\w+)\) REFERENCES public\.(\w+)\((\w+)\)/g;
        let fkMatch;
        while ((fkMatch = fkRegex.exec(sqlScript)) !== null) {
            const [_, localTableName, localFieldName, foreignTableName, foreignFieldName] = fkMatch;
            
            const table = tablesMap.get(localTableName);
            if (table) {
                const field = table.fields.find(f => f.name === localFieldName);
                if (field) {
                    field.fk = true;
                    if (!field.relations) field.relations = [];
                    field.relations.push(new Relation(foreignTableName, foreignFieldName));
                }
            }
        }

        return Array.from(tablesMap.values());
    }

}//end class