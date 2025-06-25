//src\app\module\model\table_template_.ts


import { ModelTable, ModelField, Relation } from "@/app_front/codegen/model/modeltable";
import sqlTypesData from "@/app_front/codegen/sql/sqltypes.json";


/**
 * Table Template Model for Module Template
 */
export class TableTemplate_ {

    public static readonly NAME: string = "template";
    public static readonly TITLE: string = "Entity Template";
    public static readonly DESCRIPTION: string = "Db Table Entity Class";

    public static readonly FIELDS: string[] = [
        "id", "name", "title", "description", "created_at", "updated_at"
    ];

    public static readonly DEFAULT_SORT: string = "id";
    public static readonly DEFAULT_ORDER: string = "asc";
    public static readonly PAGE_SIZE: number = 10;

}//end class