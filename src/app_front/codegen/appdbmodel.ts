//src\app_front\codegen\appdbmodel.ts

import { ModelTable, ModelField, Relation } from "@/app_front/codegen/model/modeltable";

/**
 * Interface for SQL types configuration
 * This interface defines the structure of 
 * the JSON file that contains the mapping of PostgreSQL types to
 */
import sqlTypesData from "@/app_front/codegen/model/sqltypes.json";
export interface SqlTypes {fieldtypes: {[key:string]:string[];};}
export const SqlFieldtypes = (sqlTypesData as SqlTypes).fieldtypes;
