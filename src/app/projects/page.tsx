//src\app\projects\page.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Option } from "@/lib/model/base/option";
import { AppThemeLayout } from "@/app_front/apptheme";
import { AppConfig } from "@/app_front/appconfig";
import { AppConstants } from "@/app_front/appconstants";


/**
 * Main View JSX module: AI Applications
 */
export default function PageAiApplications() {
    const router = useRouter();   

    const [alertMessage, setAlertMessage] = useState<string>(AppConstants.NOT_DEF);
    
    const execNavToIndex = () => { 
        router.push(AppConfig.INDEX.path);
    }

    return (
        <div id="cont_root" className={AppThemeLayout.LAYOUT_STYLE} >
            motors
        </div>
    );

}//end 