//src\app\home\pagemain.tsx


import { useState } from "react";
import { AppConstants } from "@/app_front/appconstants";


/**
 * Page Desktop Main Content
 */
export interface IndexMainContentProp {
    module:string;
}
export default function IndexMainContent({module}: IndexMainContentProp) {
    const [alertMessage, setAlertMessage] = useState<string>(AppConstants.NOT_DEF);

    return(
        <div>asd</div>
    )

}//end comp