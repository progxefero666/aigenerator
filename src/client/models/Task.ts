/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type Task = {
    id?: (number | null);
    workflow_id?: (number | null);
    name: string;
    wtype: string;
    description?: (string | null);
    files?: (string | null);
    folders?: (string | null);
    task_order: number;
    is_final_task?: boolean;
};

