//src\app\codegen\primarybar.tsx


import { useEffect, useMemo, useState } from "react";
import { Option } from "@/lib/model/base/option";
import { AppConstants } from "@/app_front/appconstants";
import { AppThemeLayout, AppThemeMenus } from "@/app_front/apptheme";
import TwDaisyMenu from "@/twdaisy/twdaisymenu";

import { DbModelToolsControl, ModuleDbModelToolsConfig } from "@/app_front/codegen/cgcontroller";
import { CodeGenStyle } from "@/app_front/codegen/cgstyle";
import { AppModule } from "@/lib/arquitect/model/appmodule";

interface PagePrimaryBarProp {
    sections: Option[];
    actsection: string;
    chargesection: (section:string) => void
}
export function PagePrimaryBar({sections,chargesection,actsection}: PagePrimaryBarProp) {

    return (
        <div className={AppThemeLayout.LAYOUT_PRIMARY_BAR}>
            <TwDaisyMenu onselection={chargesection}
                options={sections}
                optactname={actsection}
                optcolor={AppThemeMenus.MENU_OPT_COLOR}
                optactcolor={AppThemeMenus.MENU_OPT_ACT_COLOR} />
        </div>
    )

}//end comp
