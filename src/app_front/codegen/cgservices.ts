//src\app_front\codegen\cgservices.ts

import {HttpConst} from "@/app_front/httpconstants";
import { ModelTable } from "./cgmodel";
import { CodeGenUtil } from "./codegen";
import { TEMPLATE_APICLI_SERVICE } from "./templates/temp_service_text";

/**
 * class CodeGenServices
 *     src\app_front\http\httpconst.ts
 * 
 *          HttpConst.HTTP_GET
 *          HttpConst.HTTP_POST
 *          HttpConst.HTTP_PUT
 *          HttpConst.HTTP_DELETE
 * 
 * class CodeGenServices 
 *  *     Generates FastAapi Db table client service 
 *        for the given table.
 */
export class CodeGenServices {

    //_Table_Service

    /**
     * Generates a service class for the given table model.
     * @param tableModel The model of the table for which to generate the service.
     * @returns The content of the service class as a string.
     */
    public static genFileContentServiceClass(tableModel: ModelTable): string {
        const templateContent = TEMPLATE_APICLI_SERVICE;
        const className = CodeGenUtil.capitalize(tableModel.name) + "Service";
        const pathName  = CodeGenUtil.uncapitalize(tableModel.name);

        let content: string = "";
        return content
    }
    
}//end class