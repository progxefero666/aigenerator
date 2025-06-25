//src\app_front\codegen\util\modelutil.ts

import { CodeGenDbMotor } from "./cgdbmotor";
import { ModelTable, ModelField, Relation } from "./model/modeltable";
import { SqlFieldtypes } from "@/app_front/codegen/cgdbmotor";


/**
 * class CodeGenFunctions
 */
export class CodeGenFunctions {

    public static typeMap: Map<string, string> = CodeGenFunctions.buildTypeMap();

    public static capitalize(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

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
    }

    public static isNumericType(sqlType: string): boolean {
        const type = sqlType.toLowerCase();
        return type.includes('integer') || type.includes('int') || type.includes('serial') ||
               type.includes('decimal') || type.includes('numeric') || type.includes('real') ||
               type.includes('float') || type.includes('double');
    }

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
    }

    public static getDefaultValue(field: ModelField, tsType: string): string {    
        if (field.pk || field.name.toLowerCase() === 'id') {return 'null';}        
        if (tsType.includes('number')) {return 'null';}
        
        if (tsType === 'boolean') {return 'false';}        
        if (tsType === 'Date')    {return 'new Date()';}
        if (tsType === 'string')  {return 'undefined'; }        
        return 'null';
    }

    public static genClassTypeContent(tableModel: ModelTable): string {
        const className = CodeGenFunctions.capitalize(tableModel.name);
        const typeName = `Type${className}`;
        let content = `/**\n`;
        content += ` * Type definition for ${className} entity\n`;
        content += ` */\n`;
        content += `export type ${typeName} = {\n`;
        for (const field of tableModel.fields) {
            const tsType = CodeGenFunctions.mapSqlTypeToTypeScript(field.type);
            content += `    ${field.name}: ${tsType};\n`;
        }        
        content += `};\n`;        
        return "";
    }

    public static generateSingleTableDefClass(table: ModelTable): string {
        let classCode = "";
        const className = `${CodeGenFunctions.capitalize(table.name)}Def`;        
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
            classCode += CodeGenFunctions.generateTableDefFieldLine(field);
        }        
        classCode += `    }\n\n`;        
        // Add toJsonString method
        classCode += `    public toJsonString(): string {\n`;
        classCode += `        return JSON.stringify(this, null, 4);\n`;
        classCode += `    }\n\n`;        
        classCode += `}//end class\n`;
        
        return classCode;
    }
    
    
    public static getTableDefCode(table: ModelTable): string {
        let code: string = "";
        code += CodeGenDbMotor.generateImports();
        code += CodeGenFunctions.generateSingleTableDefClass(table);        
        return code;
    }
    
    public static generateTableDefFieldLine(field: ModelField): string {
        // Generate relations array in one line if exists
        let relationsCode = "null";
        if (field.relations && field.relations.length > 0) {
            relationsCode = "[";
            for (let i = 0; i < field.relations.length; i++) {
                const relation = field.relations[i];
                relationsCode += `new Relation("${relation.table}", "${relation.field}")`;
                if (i < field.relations.length - 1) {
                    relationsCode += ", ";
                }
            }
            relationsCode += "]";
        }        
        // Generate single line field creation with proper indentation (8 spaces = 2 tabs of 4)
        return `        this.fields.push(new ModelField("${field.name}", "${field.type}", ${field.pk}, ${field.generated}, ${field.required}, ${field.minlen}, ${field.maxlen}, ${field.fk}, ${relationsCode}));\n`;
    }
    


    public static getTablesDefCode(tables: ModelTable[]): string {
        let code: string = "";
        code += CodeGenDbMotor.generateImports();
        for (let i = 0; i < tables.length; i++) {
            const table = tables[i];
            code += CodeGenFunctions.generateSingleTableDefClass(table);
            if (i < tables.length - 1) {
                code += `\n`;
            }
        }        
        return code;
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
    }

    /**
     * Mapea un tipo de dato de PostgreSQL (ej. 'character varying(50)') a un tipo genérico del modelo (ej. 'text').
     */
    public static mapPgTypeToModelType(pgType: string): string {
        const normalizedType = pgType.split('(')[0].trim().toUpperCase();
        return CodeGenFunctions.typeMap.get(normalizedType) || 'unknown';
    }

}//end class ModelUtil