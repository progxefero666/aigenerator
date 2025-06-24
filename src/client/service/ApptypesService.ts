//src\api_client\ApptypesService.ts

import type { CancelablePromise } from '@/client/core/CancelablePromise';
import { OpenAPI } from '@/client/core/OpenAPI';
import { request as __request } from '@/client/core/request';
import type { AppType } from '@/client/models/AppType';

/**
 * FastAPI Client Service
 */
export class ApptypesService {

    /**
     * Getall
     * @returns AppType Successful Response
     * @throws ApiError
     */
    public static getAll(): CancelablePromise<Array<AppType>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/apptypes/',
        });
    }

    public static async getAllNames(): Promise<string[]> {
        const apptypes = await ApptypesService.getAll();
        const names:string[]= [];
        for(let idx=0;idx<apptypes.length;idx++){
            names.push(apptypes[idx].name);
        }        
        return names;
    }    

    public static getCollNames(apptypes:AppType[]): string[] {
        const names:string[]= [];
        for(let idx=0;idx<apptypes.length;idx++){
            names.push(apptypes[idx].name);
        }        
        return names;
    }     
    
    /**
     * Create
     * @param requestBody
     * @returns AppType Successful Response
     * @throws ApiError
     */
    public static insert(
        requestBody: AppType,
    ): CancelablePromise<AppType> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/apptypes/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Get
     * @param id
     * @returns AppType Successful Response
     * @throws ApiError
     */
    public static getById(id:number): CancelablePromise<AppType> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/apptypes/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Update
     * @param id
     * @param requestBody
     * @returns AppType Successful Response
     * @throws ApiError
     */
    public static update(
        id: number,
        requestBody: AppType,
    ): CancelablePromise<AppType> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/apptypes/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    /**
     * Delete
     * @param id
     * @returns AppType Successful Response
     * @throws ApiError
     */
    public static delete(id:number): CancelablePromise<AppType> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/apptypes/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}//end service
