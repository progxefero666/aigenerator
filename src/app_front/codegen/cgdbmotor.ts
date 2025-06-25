//src/app_front/codegen/appdbmotor.ts

import { ModelTable, ModelField, Relation } from "@/app_front/codegen/model/modeltable";

/**
 * Interface for SQL types configuration
 * This interface defines the structure of 
 * the JSON file that contains the mapping of PostgreSQL types to
 */
import sqlTypesData from "@/app_front/codegen/model/sqltypes.json";
export interface SqlTypes {fieldtypes: {[key:string]:string[];};}
export const SqlFieldtypes = (sqlTypesData as SqlTypes).fieldtypes;

/**
 * class App Db Motor Config
 */
export class CodeGenDbMotorConfig {
}//end class


/**
 * class App Db Motor Config
 */
export class CodeGenDbMotor {

    public static readonly CODEGEN_LIB_PATH: string = "@/app_front/codegen/model/modeltable"
    public static readonly SQLTYPES_JSON_PATH: string = "@/app_front/codegen/model/sqltypes.json";

    public static generateImports(): string {
        let imports: string = "";
        imports += `import { ModelTable, ModelField, Relation } from `;
        imports += `"` + CodeGenDbMotor.CODEGEN_LIB_PATH + `;\n"`
        imports += `import sqlTypesData from `;
        imports += `"` + CodeGenDbMotor.SQLTYPES_JSON_PATH + `;\n\n"`
        return imports;
    }

}//end class