//src\app_front\codegen\sql\sqlprocess.ts

import { ModelTable, ModelField, Relation } from "@/app_front/codegen/model/modeltable";
import { CodeGenFunctions } from "@/app_front/codegen/util/cgfunctions";

/**
 * lass CodeGen Sql Process
 *    info data sQL types:
 *       file: src/app_front/codegen/appdbmotor.ts
 *
 *       import sqlTypesData from "@/app_front/codegen/sql/sqltypes.json";
 *       export interface SqlTypes {fieldtypes: {[key:string]:string[];};}
 *       export const SqlFieldtypes = (sqlTypesData as SqlTypes).fieldtypes; 
 */
export class SqlGenerator {

    /**
     * Implementation function for parse SQL script.
     * @param sqlScript El contenido del script de esquema d la bbdd en SQL.
     * @returns ModelTable Array with the tables included in the script
     *      and store in a single model clases:
     *          Relation
     *          ModelField
     *          ModelTable
     */
    public static getEsquemaTables(sqlScript: string): ModelTable[] {
        const tablesMap = new Map<string, ModelTable>();

        // 1. Step 1: Parsear CREATE TABLE para obtener tablas y campos básicos
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
                const modelType = CodeGenFunctions.mapPgTypeToModelType(fullType);

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

        // 2. Step 2: Parsear PRIMARY KEYs
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

        // 3. Step 3: Parsear campos autogenerados (GENERATED ALWAYS AS IDENTITY)
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

        // 4. Step 4: Parsear FOREIGN KEYs y crear las relaciones
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