/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Task } from '../models/Task';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TasksService {
    /**
     * Getall
     * @returns Task Successful Response
     * @throws ApiError
     */
    public static getallApiTasksGet(): CancelablePromise<Array<Task>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/tasks/',
        });
    }
    /**
     * Create
     * @param requestBody
     * @returns Task Successful Response
     * @throws ApiError
     */
    public static createApiTasksPost(
        requestBody: Task,
    ): CancelablePromise<Task> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/tasks/',
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
     * @returns Task Successful Response
     * @throws ApiError
     */
    public static getApiTasksIdGet(
        id: number,
    ): CancelablePromise<Task> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/tasks/{id}',
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
     * @returns Task Successful Response
     * @throws ApiError
     */
    public static updateApiTasksIdPut(
        id: number,
        requestBody: Task,
    ): CancelablePromise<Task> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/tasks/{id}',
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
     * @returns Task Successful Response
     * @throws ApiError
     */
    public static deleteApiTasksIdDelete(
        id: number,
    ): CancelablePromise<Task> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/tasks/{id}',
            path: {
                'id': id,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
