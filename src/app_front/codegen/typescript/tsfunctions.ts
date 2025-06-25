//src\app_front\codegen\typescript\tsfunctions.ts

import { ModelTable, ModelField } from "../sql/sqlmodel";
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

}//end class TsFunctions