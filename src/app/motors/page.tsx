//src\app\motors\page.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Option } from "@/lib/model/base/option";
import { AppThemeLayout } from "@/app_front/app_ui/apptheme";
import { AppConfig } from "@/app_front/app_index/appconfig";
import { AppConstants, AppLayoutConst } from "@/app_front/appconstants";


/**
 * Module: Motors 
 * Main JSX module page component
 * @returns 
 */
export default function PageMotors() {
    const router = useRouter();   
    const execNavToIndex = () => { 
        router.push(AppConfig.INDEX.path);
    }

    const [alertMessage, setAlertMessage] = useState<string>(AppConstants.NOT_DEF);

    return (
        <div id = {AppLayoutConst.ROOT_CONTAINER} className={AppThemeLayout.LAYOUT_STYLE} >
            motors
        </div>
    );

}//end 