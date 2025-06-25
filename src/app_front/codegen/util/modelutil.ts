//src\app_front\codegen\util\modelutil.ts

import { ModelTable, ModelField, Relation } from "../model/modeltable";

/**
 * class ModelUtil
 */
export class ModelUtil {

    public static getTableCode(table: ModelTable): string {
        let code: string = "";
        
        // Imports
        code += `import { ModelTable, ModelField, Relation } from "@/app_front/codegen/model/modeltable";\n`;
        code += `import sqlTypesData from "@/app_front/codegen/sql/sqltypes.json";\n\n`;
        
        // Generate table constant/function
        const tableName = ModelUtil.capitalize(table.name);
        const constName = `TABLE_${table.name.toUpperCase()}`;
        
        code += `/**\n`;
        code += ` * Table definition for ${tableName}\n`;
        code += ` * Generated from database schema\n`;
        code += ` */\n`;
        code += `export const ${constName} = (): ModelTable => {\n\n`;
        
        // Create table instance
        code += `    const table = new ModelTable("${table.name}");\n\n`;
        
        // Add fields
        for (const field of table.fields) {
            code += ModelUtil.generateFieldCode(field);
        }
        
        code += `    return table;\n`;
        code += `};\n\n`;
        
        // Add export of the table instance
        code += `export const ${table.name}Table = ${constName}();\n`;
        
        return code;
    }
    
    private static generateFieldCode(field: ModelField): string {
        let fieldCode = "";
        
        // Generate relations array if exists
        let relationsCode = "null";
        if (field.relations && field.relations.length > 0) {
            relationsCode = "[\n";
            for (const relation of field.relations) {
                relationsCode += `        new Relation("${relation.table}", "${relation.field}"),\n`;
            }
            relationsCode += "    ]";
        }
        
        // Generate field creation
        fieldCode += `    // Field: ${field.name}\n`;
        fieldCode += `    table.addField(new ModelField(\n`;
        fieldCode += `        "${field.name}",\n`;
        fieldCode += `        "${field.type}",\n`;
        fieldCode += `        ${field.pk},\n`;
        fieldCode += `        ${field.generated},\n`;
        fieldCode += `        ${field.required},\n`;
        fieldCode += `        ${field.minlen},\n`;
        fieldCode += `        ${field.maxlen},\n`;
        fieldCode += `        ${field.fk},\n`;
        fieldCode += `        ${relationsCode}\n`;
        fieldCode += `    ));\n\n`;
        
        return fieldCode;
    }
    
    private static capitalize(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    //public static getTablesCode(tables: ModelTable[]): string {return "";}

}//end class ModelUtil