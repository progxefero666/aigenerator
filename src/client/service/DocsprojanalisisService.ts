//src\api_client\DocsprojanalisisService.ts

import type { DocProjAnalisis } from '@/client/models/DocProjAnalisis';
import type { CancelablePromise } from '@/client/core/CancelablePromise';
import { OpenAPI } from '@/client/core/OpenAPI';
import { request as __request } from '@/client/core/request';

/**
 * FastAPI Client Service
 */
export class DocsAppAnalisisService {
    
    /**
     * Getall
     * @returns DocProjAnalisis Successful Response
     * @throws ApiError
     */
    public static getAll(): CancelablePromise<Array<DocProjAnalisis>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/docsprojanalisis/',
        });
    }
    /**
     * Create
     * @param requestBody
     * @returns DocProjAnalisis Successful Response
     * @throws ApiError
     */
    public static insert(
        requestBody: DocProjAnalisis,
    ): CancelablePromise<DocProjAnalisis> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/docsprojanalisis/',
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
     * @returns DocProjAnalisis Successful Response
     * @throws ApiError
     */
    public static getById(
        id: number,
    ): CancelablePromise<DocProjAnalisis> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/docsprojanalisis/{id}',
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
     * @returns DocProjAnalisis Successful Response
     * @throws ApiError
     */
    public static update(
        id: number,
        requestBody: DocProjAnalisis,
    ): CancelablePromise<DocProjAnalisis> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/docsprojanalisis/{id}',
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
     * @returns DocProjAnalisis Successful Response
     * @throws ApiError
     */
    public static delete(
        id: number,
    ): CancelablePromise<DocProjAnalisis> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/docsprojanalisis/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Getbyproject
     * @param project
     * @returns DocProjAnalisis Successful Response
     * @throws ApiError
     */
    public static getbyprojectApiDocsprojanalisisProjectProjectGet(
        project: string,
    ): CancelablePromise<Array<DocProjAnalisis>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/docsprojanalisis/project/{project}',
            path: {
                'project': project,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Getbyname
     * @param name
     * @returns DocProjAnalisis Successful Response
     * @throws ApiError
     */
    public static getbynameApiDocsprojanalisisNameNameGet(
        name: string,
    ): CancelablePromise<Array<DocProjAnalisis>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/docsprojanalisis/name/{name}',
            path: {
                'name': name,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}//end service