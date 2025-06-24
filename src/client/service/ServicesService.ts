/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Service } from '../models/Service';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ServicesService {
    /**
     * Getall
     * @returns Service Successful Response
     * @throws ApiError
     */
    public static getallApiServicesGet(): CancelablePromise<Array<Service>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/services/',
        });
    }
    /**
     * Create
     * @param requestBody
     * @returns Service Successful Response
     * @throws ApiError
     */
    public static createApiServicesPost(
        requestBody: Service,
    ): CancelablePromise<Service> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/services/',
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
     * @returns Service Successful Response
     * @throws ApiError
     */
    public static getApiServicesIdGet(
        id: number,
    ): CancelablePromise<Service> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/services/{id}',
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
     * @returns Service Successful Response
     * @throws ApiError
     */
    public static updateApiServicesIdPut(
        id: number,
        requestBody: Service,
    ): CancelablePromise<Service> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/services/{id}',
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
     * @returns Service Successful Response
     * @throws ApiError
     */
    public static deleteApiServicesIdDelete(
        id: number,
    ): CancelablePromise<Service> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/services/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
