//src\app\codegen\primarybar.tsx


import { useEffect, useMemo, useState } from "react";
import { Option } from "@/lib/model/base/option";
import { AppConstants } from "@/app_front/appconstants";
import { AppThemeLayout, AppThemeMenus } from "@/app_front/apptheme";
import TwDaisyMenu from "@/twdaisy/twdaisymenu";

import { CodeGenControl, CodeGenSections } from "@/app_front/codegen/cgcontroller";
import { CodeGenStyle } from "@/app_front/codegen/cgstyle";
import { AppModule } from "@/lib/arquitect/model/appmodule";

interface PagePrimaryBarProp {
    modules: AppModule[];
    actmodule: string;
    chargemodule: (section:string) => void
}
export function PagePrimaryBar({modules, chargemodule, actmodule}: PagePrimaryBarProp) {

    const [alertMessage, setAlertMessage] = useState<string>(AppConstants.NOT_DEF);

    //CodeGenCfg.TYPESCRIPT_FORMATS
    const loadsection = (name: string): void => {
        chargemodule(name);
        if (name === CodeGenSections.OPT_CREATE_MODELS.name) {

        }
        else if (name === CodeGenSections.OPT_CREATES_SERVICES.name) {

        }
    }

    return (
        <div className={AppThemeLayout.LAYOUT_PRIMARY_BAR}>
            <TwDaisyMenu onselection={loadsection}
                options={modules}
                optactname={actmodule}
                optcolor={AppThemeMenus.MENU_OPT_COLOR}
                optactcolor={AppThemeMenus.MENU_OPT_ACT_COLOR} />
        </div>
    )

}//end comp
