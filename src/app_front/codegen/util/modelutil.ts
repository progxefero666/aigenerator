//src\app_front\codegen\util\modelutil.ts

import { ModelTable, ModelField, Relation } from "../model/modeltable";

/**
 * class ModelUtil
 */
export class ModelUtil {

    public static getTableCode(table: ModelTable): string {
        let code: string = "";
        
        // Add imports using the common function
        code += ModelUtil.generateImports();
        
        // Generate single table class
        code += ModelUtil.generateSingleTableClass(table);
        
        return code;
    }
    
    private static generateFieldLine(field: ModelField): string {
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
    
    private static capitalize(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    public static getTablesCode(tables: ModelTable[]): string {
        let code: string = "";
        
        // Add imports only once at the beginning
        code += ModelUtil.generateImports();
        
        // Generate all table classes
        for (let i = 0; i < tables.length; i++) {
            const table = tables[i];
            code += ModelUtil.generateSingleTableClass(table);
            
            // Add extra line between classes (except for the last one)
            if (i < tables.length - 1) {
                code += `\n`;
            }
        }
        
        return code;
    }
    
    private static generateImports(): string {
        let imports = "";
        imports += `import { ModelTable, ModelField, Relation } from "@/app_front/codegen/model/modeltable";\n`;
        imports += `import sqlTypesData from "@/app_front/codegen/sql/sqltypes.json";\n\n`;
        return imports;
    }
    
    private static generateSingleTableClass(table: ModelTable): string {
        let classCode = "";
        
        // Generate class name
        const className = `${ModelUtil.capitalize(table.name)}Def`;
        
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
            classCode += ModelUtil.generateFieldLine(field);
        }
        
        classCode += `    }\n\n`;
        
        // Add toJsonString method
        classCode += `    public toJsonString(): string {\n`;
        classCode += `        return JSON.stringify(this, null, 4);\n`;
        classCode += `    }\n\n`;
        
        classCode += `}//end class\n`;
        
        return classCode;
    }

}//end class ModelUtil