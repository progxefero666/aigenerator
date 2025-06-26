//src\app\codegen\primarybar.tsx


import { useEffect, useMemo, useState } from "react";
import { Option } from "@/lib/model/base/option";
import { AppConstants } from "@/app_front/appconstants";
import { AppThemeLayout, AppThemeMenus } from "@/app_front/app_ui/apptheme";
import TwDaisyMenu from "@/libcomp/thememenu";
import { PagePrimaryBarProps } from "@/app_front/apptypes";


export function PagePrimaryBar({sections,chargesection,actsection}: PagePrimaryBarProps) {

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
