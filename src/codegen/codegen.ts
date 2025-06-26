//src\app_front\codegen\util\modelutil.ts

import { ModelTable, ModelField, Relation } from "@/codegen/cgmodel";
import sqlTypesData from "@/codegen/sqltypes.json";

export interface SqlTypes {fieldtypes: {[key:string]:string[];};}
export const SqlFieldtypes = (sqlTypesData as SqlTypes).fieldtypes;

/**
 * class App Db Motor Config
 */
export class CodeGenLibrary {

    public static readonly CODEGEN_LIB_PATH: string 
        = "@/codegen/cgmodel"

    public static readonly SQLTYPES_JSON_PATH: string 
        = "@/codegen/sqltypes.json";

}//end class

/**
 * class CodeGen Util
 */
export class CodeGenUtil {

    public static capitalize(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }//end

    public static uncapitalize(str: string): string {
        return str.charAt(0).toLowerCase() + str.slice(1);
    }//end  

    public static generateImports(): string {
        let imports: string = "";
        imports += `import { ModelTable, ModelField, Relation } from `;
        imports += `"` + CodeGenLibrary.CODEGEN_LIB_PATH + `";\n`;
        imports += `import sqlTypesData from `;
        imports += `"` + CodeGenLibrary.SQLTYPES_JSON_PATH + `";\n\n`;
        return imports;
    }

}//end class


/**
 * CodeGen Sql Process
 *    info data sQL types:
 *       file: src/app_front/codegen/appdbmotor.ts
 *
 *       import sqlTypesData from "@/app_front/codegen/sql/sqltypes.json";
 *       export interface SqlTypes {fieldtypes: {[key:string]:string[];};}
 *       export const SqlFieldtypes = (sqlTypesData as SqlTypes).fieldtypes; 
 *
 * class CodeGen Sql
 */
export class CodeGenSql {

    public static typeMap: Map<string, string> = CodeGenSql.buildTypeMap();

    public static mapSqlTypeToTypeScript(sqlType: string): string {
        const type = sqlType.toLowerCase();
        
        // Check text types
        if (type.includes('text') || type.includes('varchar') || type.includes('character')) {
            return 'string';
        }
        
        // Check numeric types - TODOS los números como number | null
        if (type.includes('integer') || type.includes('int') || type.includes('serial')) {
            return 'number | null';
        }
        
        // Check decimal types - también number | null para consistencia
        if (type.includes('decimal') || type.includes('numeric') || type.includes('real') || 
            type.includes('float') || type.includes('double')) {
            return 'number | null';
        }
        
        // Check date types
        if (type.includes('date') || type.includes('timestamp') || type.includes('time')) {
            return 'Date';
        }
        
        // Check boolean types
        if (type.includes('boolean')) {
            return 'boolean';
        }
        
        // Default to string
        return 'string';
    }//end

    public static buildTypeMap(): Map<string, string> {
        const map = new Map<string, string>();
        for (const genericType in SqlFieldtypes) {
            for (const pgType of SqlFieldtypes[genericType]) {
                const key = pgType.split('(')[0].trim().toUpperCase();
                if (key) {
                    map.set(key, genericType);
                }
            }
        }
        return map;
    }//end


    public static mapPgTypeToModelType(pgType: string): string {
        const normalizedType = pgType.split('(')[0].trim().toUpperCase();
        return CodeGenSql.typeMap.get(normalizedType) || 'unknown';
    }//end

    public static isNumericType(sqlType: string): boolean {
        const type = sqlType.toLowerCase();
        return type.includes('integer') || type.includes('int') || type.includes('serial') ||
               type.includes('decimal') || type.includes('numeric') || type.includes('real') ||
               type.includes('float') || type.includes('double');
    }//end

    public static getMaxDigitsForNumericType(sqlType: string): number {
        const type = sqlType.toLowerCase();
        
        // SMALLINT: -32,768 to 32,767 → 5 dígitos
        if (type.includes('smallint')) {
            return 5;
        }
        
        // INTEGER/INT: -2,147,483,648 to 2,147,483,647 → 10 dígitos
        if (type.includes('integer') || type === 'int') {
            return 10;
        }
        
        // BIGINT: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 → 19 dígitos
        if (type.includes('bigint')) {
            return 19;
        }
        
        // SERIAL (INTEGER): mismo que INTEGER → 10 dígitos
        if (type.includes('serial') && !type.includes('big')) {
            return 10;
        }
        
        // BIGSERIAL: mismo que BIGINT → 19 dígitos
        if (type.includes('bigserial')) {
            return 19;
        }
        
        // DECIMAL/NUMERIC: depende de la precisión, por defecto 15 dígitos
        if (type.includes('decimal') || type.includes('numeric')) {
            return 15;
        }
        
        // REAL: ~7 dígitos significativos
        if (type.includes('real')) {
            return 7;
        }
        
        // DOUBLE PRECISION/FLOAT: ~15 dígitos significativos
        if (type.includes('double') || type.includes('float')) {
            return 15;
        }
        
        // Por defecto
        return 10;
    }//end

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
                const modelType = CodeGenSql.mapPgTypeToModelType(fullType);

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


}//end class CodeGenSql


/**
 * class CodeGen Ts Files Content --> .ts
 */
export class CodeGenTsFilesContent {

    /**
     * gen File Content Entity Class
     * @param tableModel 
     */    
    public static genFileContentEntityClass(tableModel: ModelTable): string {
        let content: string = "";      
        
        content +=  CodeGenTsFilesContent.genFileContentTableDef(tableModel);

        const className = CodeGenUtil.capitalize(tableModel.name);
        const fileName = `table_${tableModel.name.toLowerCase()}.ts`;        
        content += `//${fileName}\n\n`;
        
        // Class info
        content += `/**\n`;
        content += ` * Class ${className}\n`;
        content += ` * Represents a ${className} entity with various properties and methods.\n`;
        content += ` * \n`;
        content += ` * @class ${className}\n`;
        content += ` */\n`;
        content += `export class ${className} {\n\n`;        
        // Generate properties
        for (const field of tableModel.fields) {
            const tsType = CodeGenSql.mapSqlTypeToTypeScript(field.type);
            const defaultValue = CodeGenTsFilesContent.getDefaultValue(field, tsType);            
            content += `    public ${field.name}: ${tsType} = ${defaultValue};\n`;
        }        
        // Constructor
        content += `\n    constructor(`;
        const constructorParams: string[] = [];
        for (const field of tableModel.fields) {
            const tsType = CodeGenSql.mapSqlTypeToTypeScript(field.type);
            constructorParams.push(`${field.name}: ${tsType}`);
        }        
        content += constructorParams.join(',\n                ');
        content += `) {\n\n`;        
        // Constructor assignments
        for (const field of tableModel.fields) {
            content += `        this.${field.name} = ${field.name};\n`;
        }        
        content += `    }\n\n`;
        
        // Generate minlen function
        content += `    /**\n`;
        content += `     * Returns the minimum length of the field.\n`;
        content += `     * @param fieldName The name of the field.\n`;
        content += `     * @returns The minimum length of the field or null if not applicable.\n`;
        content += `     */\n`;
        content += `    public minlen(fieldName: string): number | null {\n`;        
        for (const field of tableModel.fields) {
            if (field.minlen !== null) {
                content += `        if (fieldName === "${field.name}") {\n`;
                content += `            return ${field.minlen};\n`;
                content += `        }\n`;
            }
        }
        content += `        return 0;\n`;
        content += `    }\n\n`;
        
        // Generate maxlen function
        content += `    /**\n`;
        content += `     * Returns the max length of the field.\n`;
        content += `     * Returns -1 if has unlimited length.\n`;
        content += `     * @param fieldName The name of the field.\n`;
        content += `     * @returns The maximum length of the field or null if not applicable.\n`;
        content += `     */\n`;
        content += `    public maxlen(fieldName: string): number | null {\n`;        
        for (const field of tableModel.fields) {
            if (field.maxlen !== null) {
                // Campo con longitud específica definida
                content += `        if (fieldName === "${field.name}") {\n`;
                content += `            return ${field.maxlen};\n`;
                content += `        }\n`;
            } else if (field.type.toLowerCase().includes('text') && field.maxlen === null) {
                // Campos TEXT sin límite específico
                content += `        if (fieldName === "${field.name}") {\n`;
                content += `            return -1; // unlimited length\n`;
                content += `        }\n`;
            } else if (CodeGenSql.isNumericType(field.type)) {
                // Campos numéricos: calcular dígitos máximos según el tipo
                const maxDigits = CodeGenSql.getMaxDigitsForNumericType(field.type);
                content += `        if (fieldName === "${field.name}") {\n`;
                content += `            return ${maxDigits}; // max digits for ${field.type}\n`;
                content += `        }\n`;
            }
        }
        content += `        return 0;\n`;
        content += `    }\n\n`;        
        content += `}//end class\n\n`;        
        // Add type definition based on the class        
        content += CodeGenTsFilesContent.genClassTypeContent(tableModel);        
        return content;
    }
    
    public static genFileContentEntityArrayClass(tableModel: ModelTable[]): string {
        let content: string = "";
        
        // 1. Imports una sola vez al principio
        content += CodeGenUtil.generateImports();
        
        // 2. Para cada tabla, los 3 bloques
        for (let i = 0; i < tableModel.length; i++) {
            const table = tableModel[i];
            
            // Bloque 1: Clase Def (sin imports)
            content += CodeGenTsFilesContent.generateSingleTableDefClass(table);
            content += `\n`;
            
            // Bloque 2: Clase normal (extraer solo la parte sin imports ni Def)
            const fullClassContent = CodeGenTsFilesContent.genFileContentEntityClass(table);
            // Quitar la parte de imports y Def, quedarnos solo con la clase y tipo
            const lines = fullClassContent.split('\n');
            let startIndex = -1;
            for (let j = 0; j < lines.length; j++) {
                if (lines[j].includes('//table_')) {
                    startIndex = j;
                    break;
                }
            }
            if (startIndex >= 0) {
                const classAndTypeContent = lines.slice(startIndex).join('\n');
                content += classAndTypeContent;
            }
            
            // Separador entre tablas (excepto la última)
            if (i < tableModel.length - 1) {
                content += `\n`;
            }
        }
        
        return content;
    }//end

    public static getDefaultValue(field: ModelField, tsType: string): string {    
        if (field.pk || field.name.toLowerCase() === 'id') {return 'null';}        
        if (tsType.includes('number')) {return 'null';}
        
        if (tsType === 'boolean') {return 'false';}        
        if (tsType === 'Date')    {return 'new Date()';}
        if (tsType === 'string')  {return '"undefined"'; }        
        return 'null';
    }//end

    public static genClassTypeContent(tableModel: ModelTable): string {
        const className = CodeGenUtil.capitalize(tableModel.name);
        const typeName = `Type${className}`;
        let content = `/**\n`;
        content += ` * Type definition for ${className} entity\n`;
        content += ` */\n`;
        content += `export type ${typeName} = {\n`;
        for (const field of tableModel.fields) {
            const tsType = CodeGenSql.mapSqlTypeToTypeScript(field.type);
            content += `    ${field.name}: ${tsType};\n`;
        }        
        content += `};\n`;        
        return content;
    }//end

    public static generateSingleTableDefClass(table: ModelTable): string {
        let classCode = "";
        const className = `${CodeGenUtil.capitalize(table.name)}Def`;        
        classCode += `/**\n`;
        classCode += ` * Table definition class for ${table.name}\n`;
        classCode += ` * Generated from database schema\n`;
        classCode += ` */\n`;
        classCode += `export class ${className} {\n\n`;        
        // Class properties
        classCode += `    public name: string = "${table.name}";\n`;
        classCode += `    public fields: ModelField[] = [];\n\n`;        
        // Constructor
        classCode += `    constructor() {\n`;        
        // Add fields to array
        for (const field of table.fields) {
            classCode += CodeGenTsFilesContent.generateTableDefFieldLine(field);
        }        
        classCode += `    }\n\n`;        
        // Add toJsonString method
        classCode += `    public toJsonString(): string {\n`;
        classCode += `        return JSON.stringify(this, null, 4);\n`;
        classCode += `    }\n\n`;        
        classCode += `}//end class\n`;
        
        return classCode;
    }//end
      
    public static genFileContentTableDef(table: ModelTable): string {
        let code: string = "";
        code += CodeGenUtil.generateImports();
        code += CodeGenTsFilesContent.generateSingleTableDefClass(table);        
        return code;
    }//end
    
    public static generateTableDefFieldLine(field: ModelField): string {
        // Build optional parameters
        let optionalParams = "";
        
        // Add fk parameter only if true
        if (field.fk) {
            optionalParams += `, ${field.fk}`;
            
            // Add relations only if they exist
            if (field.relations && field.relations.length > 0) {
                optionalParams += ", [";
                for (let i = 0; i < field.relations.length; i++) {
                    const relation = field.relations[i];
                    optionalParams += `new Relation("${relation.table}", "${relation.field}")`;
                    if (i < field.relations.length - 1) {
                        optionalParams += ", ";
                    }
                }
                optionalParams += "]";
            }
        }
        
        // Generate single line field creation with proper indentation (8 spaces = 2 tabs of 4)
        return `        this.fields.push(new ModelField("${field.name}", "${field.type}", ${field.pk}, ${field.generated}, ${field.required}, ${field.minlen}, ${field.maxlen}${optionalParams}));\n`;
    }//end

    public static getTablesDefCode(tables: ModelTable[]): string {
        let code: string = "";
        code += CodeGenUtil.generateImports();
        for (let i = 0; i < tables.length; i++) {
            const table = tables[i];
            code += CodeGenTsFilesContent.generateSingleTableDefClass(table);
            if (i < tables.length - 1) {
                code += `\n`;
            }
        }        
        return code;
    }//end

    /*
    public static genFileContentEntityType(tableModel: ModelTable): string {
        let content: string = "";        
        const typeName = CodeGenUtil.capitalize(tableModel.name);
        const fileName = `type_${tableModel.name.toLowerCase()}.ts`;        
        content += `//${fileName}\n\n`;        
        content += `export type ${typeName} = {\n`;        
        //properties
        for (const field of tableModel.fields) {
            const tsType = CodeGenSql.mapSqlTypeToTypeScript(field.type);
            content += `    ${field.name}: ${tsType};\n`;
        }        
        content += `};\n`;        
        return content;
    }
    */


}//end class ModelUtil

