/* generated using openapi-typescript-codegen -- do not edit */

import { OpenAPI } from '@/client/core/OpenAPI';
import type { CancelablePromise } from '@/client/core/CancelablePromise';
import { request as __request } from '@/client/core/request';
import type { Agent } from '@/client/models/Agent';

/**
 * class Agents Db Service 
 */
export class AgentsService {
    /**
     * Getall
     * @returns Agent Successful Response
     * @throws ApiError
     */
    public static getall(): CancelablePromise<Array<Agent>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/agents/',
        });
    }
    /**
     * Create
     * @param requestBody
     * @returns Agent Successful Response
     * @throws ApiError
     */
    public static insert(
        requestBody: Agent,
    ): CancelablePromise<Agent> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/agents/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    public static getById(id:number):CancelablePromise<Agent> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/agents/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    public static update(id:number,requestBody:Agent): CancelablePromise<Agent> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/agents/{id}',
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

    public static delete(id:number):CancelablePromise<Agent> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/agents/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    public static getByName(name:string):CancelablePromise<Array<Agent>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/agents/name/{name}',
            path: {
                'name': name,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    public static getByType(agtype:string):CancelablePromise<Array<Agent>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/agents/agtype/{agtype}',
            path: {
                'agtype': agtype,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}//end service
