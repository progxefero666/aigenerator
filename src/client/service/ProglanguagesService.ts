//src\api_client\ProglanguagesService.ts

import type { ProgLanguage } from '@/client/models/ProgLanguage';
import type { CancelablePromise } from '@/client/core/CancelablePromise';
import { OpenAPI } from '@/client/core/OpenAPI';
import { request as __request } from '@/client/core/request';

/**
 * FastAPI Client Service
 */
export class ProgLangCodeService {

    /**
     * Getall
     * @returns ProgLanguage Successful Response
     * @throws ApiError
     */
    public static getAll(): CancelablePromise<Array<ProgLanguage>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/proglanguages/',
        });
    }


    public static async getAllNames(): Promise<string[]> {
        const proglangs = await ProgLangCodeService.getAll();
        const names:string[]= [];
        for(let idx=0;idx<proglangs.length;idx++){
            names.push(proglangs[idx].name);
        }        
        return names;
    }    

    public static async getCollNames(proglangs:ProgLanguage[]): Promise<string[]> {
        const names:string[]= [];
        for(let idx=0;idx<proglangs.length;idx++){
            names.push(proglangs[idx].name);
        }        
        return names;
    } 
    
    /**
     * Create
     * @param requestBody
     * @returns ProgLanguage Successful Response
     * @throws ApiError
     */
    public static insert(
        requestBody: ProgLanguage,
    ): CancelablePromise<ProgLanguage> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/proglanguages/',
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
     * @returns ProgLanguage Successful Response
     * @throws ApiError
     */
    public static getById(
        id: number,
    ): CancelablePromise<ProgLanguage> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/proglanguages/{id}',
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
     * @returns ProgLanguage Successful Response
     * @throws ApiError
     */
    public static update(
        id: number,
        requestBody: ProgLanguage,
    ): CancelablePromise<ProgLanguage> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/proglanguages/{id}',
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
     * @returns ProgLanguage Successful Response
     * @throws ApiError
     */
    public static delete(
        id: number,
    ): CancelablePromise<ProgLanguage> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/proglanguages/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}//end service
