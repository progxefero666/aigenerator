//src\api_client\DoccategoriesService.ts

import type { CancelablePromise } from '@/client/core/CancelablePromise';
import { OpenAPI } from '@/client/core/OpenAPI';
import { request as __request } from '@/client/core/request'
import type { DocCategory } from '@/client/models/DocCategory';

/**
 * FastAPI Client Service
 */
export class DocCategoriesService {
    /**
     * Getall
     * @returns DocCategory Successful Response
     * @throws ApiError
     */
    public static getAll(): CancelablePromise<Array<DocCategory>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/doccategories/',
        });
    }
    /**
     * Create
     * @param requestBody
     * @returns DocCategory Successful Response
     * @throws ApiError
     */
    public static insert(
        requestBody: DocCategory,
    ): CancelablePromise<DocCategory> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/doccategories/',
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
     * @returns DocCategory Successful Response
     * @throws ApiError
     */
    public static getById(
        id: number,
    ): CancelablePromise<DocCategory> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/doccategories/{id}',
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
     * @returns DocCategory Successful Response
     * @throws ApiError
     */
    public static update(
        id: number,
        requestBody: DocCategory,
    ): CancelablePromise<DocCategory> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/doccategories/{id}',
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
     * @returns DocCategory Successful Response
     * @throws ApiError
     */
    public static delete(
        id: number,
    ): CancelablePromise<DocCategory> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/doccategories/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}//end service