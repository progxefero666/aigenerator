//src\app\components\page.tsx

import { Option } from "@/lib/model/base/option";
import { PagePrimaryBarProps } from "@/app_front/apptypes";
import { AppThemeLayout } from "@/app_front/apptheme";
import { useRouter } from "next/navigation";
import { AppConfig } from "@/app_front/appconfig";
import { AppLayoutConst } from "@/app_front/appconstants";


/**
 * Module: Components
 *    - Test new components 
 * Main JSX module page component
 * @returns 
 */
export default function PageComponents() {

    const router = useRouter(); 
    const execNavToIndex = () => { 
        router.push(AppConfig.INDEX.path);
    }
    return (
        <div id = {AppLayoutConst.ROOT_CONTAINER} className={AppThemeLayout.LAYOUT_STYLE} >
            motors
        </div>
    );

}//end 