//src\api_client\ApplicationsService.ts

import type { CancelablePromise } from '@/client/core/CancelablePromise';
import { OpenAPI } from '@/client/core/OpenAPI';
import { request as __request } from '@/client/core/request';
import type { Application } from '@/client/models/Application';

/**
 * FastAPI Client Service
 */
export class ApplicationsService {

    // read funciontions
    public static getAll(): CancelablePromise<Array<Application>> {
        
        return __request(OpenAPI, {
            method:     'GET',
            url: '/api/applications/',
        });
    }

    public static getByName(name:string):CancelablePromise<Array<Application>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/applications/name/{name}',
            path: {
                'name': name,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    public static getById(id:number):CancelablePromise<Application> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/applications/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    public static getByProglanguage(proglanguage:string):CancelablePromise<Array<Application>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/applications/proglanguage/{proglanguage}',
            path: {
                'proglanguage': proglanguage,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    public static getByType(apptype: string): CancelablePromise<Array<Application>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/applications/apptype/{apptype}',
            path: {
                'apptype': apptype,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }

    public static getByUseDocker(usedocker:boolean): CancelablePromise<Array<Application>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/applications/usedocker/{usedocker}',
            path: {
                'usedocker': usedocker,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }


    public static insert(requestBody:Application):CancelablePromise<Application> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/applications/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }

    public static update(id: number,requestBody:Application):CancelablePromise<Application> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/applications/{id}',
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
    
    public static delete(id:number):CancelablePromise<Application> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/applications/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }





    

}//end service
