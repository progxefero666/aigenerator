//src\app\codegen\primarybar.tsx

import { useRef, useState } from "react";
import { Option } from "@/lib/model/base/option";
import { CodeGenCfg } from "./motor/cgcfg";
import { AppConstants } from "@/app_front/appconstants";
import { AppTheme } from "@/app_front/apptheme";
import TwDaisyMenu from "@/twdaisy/twdaisymenu";

/**
 * JSX Component layout secondary column
 * Application Editor Tools
 */
export interface PagePrimaryBarProp {
    section: string;
    chargesection: (section:string) => void
}
export default function PagePrimaryBar({chargesection, section}: PagePrimaryBarProp) {

    const [alertMessage, setAlertMessage] = useState<string>(AppConstants.NOT_DEF);
    const [sections, setSections] = useState<Option[]>(CodeGenCfg.SECTIONS);

    //CodeGenCfg.TYPESCRIPT_FORMATS
    const loadsection = (name: string): void => {
        chargesection(name);
        if (name === CodeGenCfg.CREATE_MODEL.name) {

        }
        else if (name === CodeGenCfg.SECTION_SERVICE.name) {

        }
    }

    return (
        <div className="w-full min-h-screen flex flex-col px-2 mb-2">


            <TwDaisyMenu onselection={loadsection}
                options={CodeGenCfg.SECTIONS}
                optactname={CodeGenCfg.ACTIVE_SECTION.name}
                optcolor={AppTheme.MENU_OPT_COLOR}
                optactcolor={AppTheme.MENU_OPT_ACT_COLOR} />
        </div>
    )

}//end comp