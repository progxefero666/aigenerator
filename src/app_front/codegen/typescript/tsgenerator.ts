//src\app_front\codegen\typescript\tsfunctions.ts

import { ModelTable, ModelField } from "../model/modeltable";
import { CodeGenFunctions } from "@/app_front/codegen/util/cgfunctions";


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


/**
 * class TypeScripts Functions 
 * TypeScriptsFunctions.genFileContentEntityType
 */
export class TypeScriptsGenerator {

    /**
     * gen File Content Entity Type
     * @param tableModel 
     */
    public static genFileContentEntityType(tableModel: ModelTable): string {
        let content: string = "";        
        const typeName = CodeGenFunctions.capitalize(tableModel.name);
        const fileName = `type_${tableModel.name.toLowerCase()}.ts`;        
        content += `//${fileName}\n\n`;        
        content += `export type ${typeName} = {\n`;        
        //properties
        for (const field of tableModel.fields) {
            const tsType = CodeGenFunctions.mapSqlTypeToTypeScript(field.type);
            content += `    ${field.name}: ${tsType};\n`;
        }        
        content += `};\n`;        
        return content;
    }

    /**
     * gen File Content Entity Class
     * @param tableModel 
     */    
    public static genFileContentEntityClass(tableModel: ModelTable): string {
        let content: string = "";        
        const className = CodeGenFunctions.capitalize(tableModel.name);
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
            const tsType = CodeGenFunctions.mapSqlTypeToTypeScript(field.type);
            const defaultValue = CodeGenFunctions.getDefaultValue(field, tsType);            
            content += `    public ${field.name}: ${tsType} = ${defaultValue};\n`;
        }        
        // Constructor
        content += `\n    constructor(`;
        const constructorParams: string[] = [];
        for (const field of tableModel.fields) {
            const tsType = CodeGenFunctions.mapSqlTypeToTypeScript(field.type);
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
            } else if (CodeGenFunctions.isNumericType(field.type)) {
                // Campos numéricos: calcular dígitos máximos según el tipo
                const maxDigits = CodeGenFunctions.getMaxDigitsForNumericType(field.type);
                content += `        if (fieldName === "${field.name}") {\n`;
                content += `            return ${maxDigits}; // max digits for ${field.type}\n`;
                content += `        }\n`;
            }
        }
        content += `        return 0;\n`;
        content += `    }\n\n`;        
        content += `}//end class\n\n`;        
        // Add type definition based on the class        
        content += CodeGenFunctions.genClassTypeContent(tableModel);        
        return content;
    }
    
}//end class TsFunctions