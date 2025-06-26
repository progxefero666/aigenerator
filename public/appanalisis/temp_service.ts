import { CancelablePromise, OpenAPI } from "@/client";
import { request as __request } from '@/client/core/request';
import { HttpConst } from "@/codegen/httpconstants";


/** 
 # info:
    - Author: Ignacio Sánchez Ramírez
    - Date: 2023-10-01
    - Based on  https://openapi-generator.tech

 # Use app class HttpConst { (all public)
    - static readonly HTTP_GET = "GET";
    - static readonly HTTP_POST = "POST";
    - static readonly HTTP_PUT = "PUT";
    - static readonly HTTP_DELETE = "DELETE";
    - static readonly CONTENT_TYPE_JSON: string = "application/json";

# Description
    - Use this Template file content to generate .
      a table client file FastApi client service.
    - Use type table model that has the same name as the table.

# !!! IMPORTANT !!!
    - replace  "_Table_" with the table type name
    - replace  "_table_" with the table type name
         in lower case  for api client paths

*/

// !!! IMPORTANT !!!
// non include in the final file 
export type _Table_ = {
    id: (number | null);
    name: string;
    description: string;
    dtype: number;
    dcategory: string;
    localdev: boolean;
    updatedate?: Date;
};
export class _Table_Service {

    /**
     * Get all
     * @returns Task Successful Response
     * @throws ApiError
     */
    public static getAll(): CancelablePromise<Array<_Table_>> {
        return __request(OpenAPI, {
            method: HttpConst.HTTP_GET,
            url: '/api/_table_/',
        });
    }
    
    /**
     * insert
     * @param requestBody
     * @returns Task Successful Response
     * @throws ApiError
     */
    public static insert(requestBody:_Table_):CancelablePromise<_Table_> {
        return __request(OpenAPI, {
            method: HttpConst.HTTP_POST,
            url: '/api/_table_/',
            body: requestBody,
            mediaType: HttpConst.CONTENT_TYPE_JSON,
            errors: {422: `Validation Error`}
        });
    }

    /**
     * Update
     * @param id
     * @param requestBody
     * @returns Task Successful Response
     * @throws ApiError
     */
    public static update(id:number,requestBody:_Table_): CancelablePromise<_Table_> {
        return __request(OpenAPI, {
            method: HttpConst.HTTP_PUT,
            url: '/api/_table_/{id}',
            path: {'id': id},
            body: requestBody,
            mediaType: HttpConst.CONTENT_TYPE_JSON,
            errors: {422: `Validation Error`}
        });
    }

    /**
     * Delete
     * @param id
     * @returns Task Successful Response
     * @throws ApiError
     */
    public static delete(id:number):CancelablePromise<_Table_> {
        return __request(OpenAPI, {
            method: HttpConst.HTTP_DELETE,
            url: '/api/_table_/{id}',
            path: {'id': id},
            errors: {422: `Validation Error`}
        });
    }

    /**
     * Get
     * @param id
     * @returns Task Successful Response
     * @throws ApiError
     */
    public static get(id:number):CancelablePromise<_Table_> {
        return __request(OpenAPI, {
            method: HttpConst.HTTP_GET,
            url: '/api/_table_/{id}',
            path: {'id': id},
            errors: {422: `Validation Error`}
        });
    }

    /**
     * Get by other name
     * @param name
     * @returns Task Successful Response
     * @throws ApiError
     */    
    public static getByName(name:string):CancelablePromise<Array<_Table_>> {
        return __request(OpenAPI, {
            method: HttpConst.HTTP_GET,
            url: '/api/_table_/name/{name}',
            path: {'name':name},
            errors: {422: `Validation Error`}
        });
    }
        
    /**
     * Get by other field
     * @param name
     * @returns Task Successful Response
     * @throws ApiError
     */    
    public static getByOther(other:string):CancelablePromise<Array<_Table_>> {
        return __request(OpenAPI, {
            method: HttpConst.HTTP_GET,
            url: '/api/_table_/other/{other}',
            path: {'other':other},
            errors: {422: `Validation Error`}
        });
    }
    
    
}//end service
