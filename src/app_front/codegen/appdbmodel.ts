//src\app_front\codegen\appdbmodel.ts

import { ModelTable, ModelField, Relation } from "@/app_front/codegen/model/modeltable";
import sqlTypesData from "@/app_front/codegen/sql/sqltypes.json";

/**
 * Interface for SQL types configuration
 * This interface defines the structure of 
 * the JSON file that contains the mapping of PostgreSQL types to
 */
export interface SqlTypes {
    fieldtypes: {
        [key: string]: string[];
    };
}

export const fieldtypes = (sqlTypesData as SqlTypes).fieldtypes;
