/* generated using openapi-typescript-codegen -- do not edit */

import { OpenAPI } from '@/client/core/OpenAPI';
import type { CancelablePromise } from '@/client/core/CancelablePromise';
import { request as __request } from '@/client/core/request';
import type { Server } from '@/client/models/Server';

/**
 * class Db ServersService
 */
export class ServersService {

    public static getAll(): CancelablePromise<Array<Server>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/servers/',
        });
    }

    public static insert(requestBody: Server): CancelablePromise<Server> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/servers/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    public static getById(id: number): CancelablePromise<Server> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/servers/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    public static update(id:number,requestBody:Server): CancelablePromise<Server> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/servers/{id}',
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

    public static delete(id:number): CancelablePromise<Server> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/servers/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    public static getByName(name:string): CancelablePromise<Array<Server>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/servers/name/{name}',
            path: {
                'name': name,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    public static getByType(srvtype:string): CancelablePromise<Array<Server>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/servers/srvtype/{srvtype}',
            path: {
                'srvtype': srvtype,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

}//end service
