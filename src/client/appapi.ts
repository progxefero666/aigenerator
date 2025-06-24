//src\app_front\appapi.ts

import { ApiError } from "@/client/core/ApiError";

/**
 * class AppAPI
 * AppAPI.outputApiError
 */
export class AppAPI {

    public static outputApiError(error:ApiError):void {
        console.log("Status:", error.status);
        console.log("Body:",   error.body);
        console.log("Message:",error.message);
    }

}//end class