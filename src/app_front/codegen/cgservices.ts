//src\app_front\codegen\cgservices.ts


import { ModelTable } from "./cgmodel";
import { CodeGenUtil } from "./codegen";
import { TEMPLATE_APICLI_SERVICE } from "./templates/temp_service_text";

/**
 * # class CodeGenServices 
 *      - Generates FastAapi Db table client service 
 *        for the given table.
 *      - use TEMPLATE_APICLI_SERVICE string template
 */
export class CodeGenServices {

    //_Table_Service

    /**
     * Generates a service class for the given table model.
     * Example for table user : 
     *      Class name: UserService in Pascal case
     *      item in paths name: user in lower case
     * @param tableModel The model of the table for which to generate the service.
     * @returns The content of the service class as a string.
     */
    public static genFileContentServiceClass(tableModel: ModelTable): string {
        const className = CodeGenUtil.capitalize(tableModel.name) + "Service";
        const pathName  = CodeGenUtil.uncapitalize(tableModel.name);

        let content: string = TEMPLATE_APICLI_SERVICE;
        content = content.replace(/_Table_/g, className);
        content = content.replace(/_table_/g, pathName);
        return content
    }
    
}//end class