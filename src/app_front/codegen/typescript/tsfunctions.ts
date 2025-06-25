//src\app_front\codegen\typescript\tsfunctions.ts

import { ModelTable, ModelField } from "../model/modeltable";
import sqlTypesData from "@/app_front/codegen/sql/sqltypes.json";


/**
 * TypeScripts functions for :
 *   1) Generate Entity Class files .ts 
 * 
 * use: Relation,ModelField,ModelTable 
 * class ModelTable {     
     public name:string;    
     public fields:ModelField[];
     constructor(name:string,fields?:ModelField[])
     public addField(field:ModelField)
     public addFields(fields: ModelField[]) 
 }
 */
export class TypeScriptsFunctions {

    //Relation
    //ModelField

    public static genFileContentEntityClass(tableModel: ModelTable): string {
        let content: string = "";
        
        const className = TypeScriptsFunctions.capitalize(tableModel.name);
        const fileName = `table_${tableModel.name.toLowerCase()}.ts`;
        
        // Import statement
        content += `//src\\app_front\\dbmodel\\${fileName}\n\n`;
        content += `import { AppConstants } from "@/app_front/appconstants";\n\n\n`;
        
        // Class documentation
        content += `/**\n`;
        content += ` * Class ${className}\n`;
        content += ` * Represents a ${className} entity with various properties and methods.\n`;
        content += ` * \n`;
        content += ` * @class ${className}\n`;
        content += ` */\n`;
        
        // Class declaration
        content += `export class ${className} {\n\n`;
        
        // Generate properties
        for (const field of tableModel.fields) {
            const tsType = TypeScriptsFunctions.mapSqlTypeToTypeScript(field.type);
            const defaultValue = TypeScriptsFunctions.getDefaultValue(field, tsType);
            
            content += `    public ${field.name}: ${tsType} = ${defaultValue};\n`;
        }
        
        // Constructor
        content += `\n    constructor(`;
        
        // Constructor parameters (ALL WITHOUT initialization)
        const constructorParams: string[] = [];
        for (const field of tableModel.fields) {
            const tsType = TypeScriptsFunctions.mapSqlTypeToTypeScript(field.type);
            // ALL parameters WITHOUT initialization (no = null, no = anything)
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
            } else if (TypeScriptsFunctions.isNumericType(field.type)) {
                // Campos numéricos: calcular dígitos máximos según el tipo
                const maxDigits = TypeScriptsFunctions.getMaxDigitsForNumericType(field.type);
                content += `        if (fieldName === "${field.name}") {\n`;
                content += `            return ${maxDigits}; // max digits for ${field.type}\n`;
                content += `        }\n`;
            }
        }
        content += `        return 0;\n`;
        content += `    }\n\n`;
        
        content += `}//end class\n`;
        
        return content;
    }
    
    private static capitalize(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
    
    private static mapSqlTypeToTypeScript(sqlType: string): string {
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
    
    private static getDefaultValue(field: ModelField, tsType: string): string {
        // ID fields (primary keys) should be null
        if (field.pk || field.name.toLowerCase() === 'id') {
            return 'null';
        }
        
        // Handle different TypeScript types
        if (tsType.includes('number')) {
            return 'null';
        }
        
        if (tsType === 'boolean') {
            return 'false';
        }
        
        if (tsType === 'Date') {
            return 'new Date()';
        }
        
        if (tsType === 'string') {
            return 'AppConstants.NOT_DEF';
        }
        
        return 'null';
    }
    
    private static isNumericType(sqlType: string): boolean {
        const type = sqlType.toLowerCase();
        return type.includes('integer') || type.includes('int') || type.includes('serial') ||
               type.includes('decimal') || type.includes('numeric') || type.includes('real') ||
               type.includes('float') || type.includes('double');
    }
    
    private static getMaxDigitsForNumericType(sqlType: string): number {
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

}//end class TsFunctions