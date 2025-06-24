//src\api_client\DoctypesService.ts

import type { DocType } from '@/client/models/DocType';
import type { CancelablePromise } from '@/client/core/CancelablePromise';
import { OpenAPI } from '@/client/core/OpenAPI';
import { request as __request } from '@/client/core/request';

/**
 * FastAPI Client Service
 */
export class DocTypesService {
    
    /**
     * Getall
     * @returns DocType Successful Response
     * @throws ApiError
     */
    public static getAll(): CancelablePromise<Array<DocType>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/doctypes/',
        });
    }
    /**
     * Create
     * @param requestBody
     * @returns DocType Successful Response
     * @throws ApiError
     */
    public static insert(
        requestBody: DocType,
    ): CancelablePromise<DocType> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/doctypes/',
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
     * @returns DocType Successful Response
     * @throws ApiError
     */
    public static getById(
        id: number,
    ): CancelablePromise<DocType> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/doctypes/{id}',
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
     * @returns DocType Successful Response
     * @throws ApiError
     */
    public static update(
        id: number,
        requestBody: DocType,
    ): CancelablePromise<DocType> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/doctypes/{id}',
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
     * @returns DocType Successful Response
     * @throws ApiError
     */
    public static delete(
        id: number,
    ): CancelablePromise<DocType> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/doctypes/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}//end service
