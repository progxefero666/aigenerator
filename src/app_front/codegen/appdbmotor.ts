//src/app_front/codegen/appdbmotor.ts

import { ModelTable, ModelField, Relation } from "@/app_front/codegen/model/modeltable";
import sqlTypesData from "@/app_front/codegen/sql/sqltypes.json";

/**
 * class App Db Motor Config
 */
export class AppDbMotorConfig {



}//end class

/**
 * class App Db Motor Config
 */
export class AppDbMotor {

    public static readonly CODEGEN_LIB_PATH: string = "@/app_front/codegen/model/modeltable"
    public static readonly SQLTYPES_JSON_PATH: string = "@/app_front/codegen/sql/sqltypes.json";

    public static generateImports(): string {
        let imports: string = "";
        imports += `import { ModelTable, ModelField, Relation } from `;
        imports += `"` + AppDbMotor.CODEGEN_LIB_PATH + `;\n"`
        imports += `import sqlTypesData from `;
        imports += `"` + AppDbMotor.SQLTYPES_JSON_PATH + `;\n\n"`
        return imports;
    }

}//end class