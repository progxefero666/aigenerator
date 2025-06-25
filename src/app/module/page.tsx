//src\app\module\page.tsx

import { useRouter } from "next/router";
import { Option } from "@/lib/model/base/option";

import { AppConstants } from "@/app_front/appconstants";
import { AppTheme, AppThemeLayout } from "@/app_front/apptheme";
import { AppModule } from "@/lib/arquitect/model/appmodule";
import { Search } from "@/libcomp/search";
import TwDaisyMenu from "@/twdaisy/twdaisymenu";

import { useState, useEffect } from "react";
import { Module_template_Config } from "./modconfig";

/**
 * author: ignacio sánchez ramírez
 * date: 2023-10-01
 * 
 * For codegen use:
 *  Template App Modulo for create fast app modules
 * 
 * Module Index Page. default includes:
 *  - header
 *  - lateral bars
 *  - main content
 */

export interface PageModule_template_Prop {
    value?: string;
}

export default function PageModule_template({}: PageModule_template_Prop) {
    
    const chargesection = (name: string) => {
    }

    return (
        <div className="w-full min-h-screen flex flex-col px-2">
            <h1 className="text-2xl font-bold mb-4">Module Template</h1>
        </div>
    )

}//end comp


/**
 * Page: Header
 */
interface PageHeaderProps {
     ontest?: () => void;
}
function PageHeader({ ontest }: PageHeaderProps) {
    const maxLen: number = 50;
    const onSearchSubmit    = (value:string): void => {}
    const onButtonClick     = (op_name:string): void => {}
    const executeOperation  = (op_name: string): void => { }
    //useEffect(() => {const init = async () => {};init();}, []);
    
    return (

        <div className={AppThemeLayout.LAYOUT_HEADER_STYLE}>
            {/*column left */}
            <div className="w-full flex flex-row items-center px-2 top-2">
                <div className="flex-1 flex items-center text-white text-2xl translate-y-[-4px]">
                    AI Projects
                </div>
            </div>
            {/*column center */}
            <div className="w-full flex flex-row pl-[6px]">
                <div className="w-[26%] flex flex-items-center" >
                    <Search placeholder="find" maxlen={maxLen}
                               onsubmit={onSearchSubmit}/>
                </div>
            </div>
            {/* column right */}
            <div className="w-full flex flex-row">
                config - user - about
            </div>
        </div>
    )
}//end


/**
 * Page: Primary Bar
 */
interface PagePrimaryBarProp {
     section: string;
     chargesection: (section:string) => void
 }
 function PagePrimaryBar({chargesection, section}: PagePrimaryBarProp) {
 
     const [alertMessage, setAlertMessage] = useState<string>(AppConstants.NOT_DEF);
     const [sections, setSections] = useState<Option[]>(Module_template_Config.SECTIONS);
 
     //CodeGenCfg.TYPESCRIPT_FORMATS
     const loadsection = (name: string): void => {
         chargesection(name);
         if (name === Module_template_Config.SECTION_A.name) {
 
         }
         else if (name === Module_template_Config.SECTION_B.name) {
 
         }
     }
 
     return (
         <div className="w-full min-h-screen flex flex-col px-2 mb-2">
 
 
             <TwDaisyMenu onselection={loadsection}
                 options={Module_template_Config.SECTIONS}
                 optactname={Module_template_Config.ACTIVE_SECTION.name}
                 optcolor={AppTheme.MENU_OPT_COLOR}
                 optactcolor={AppTheme.MENU_OPT_ACT_COLOR} />
         </div>
     )
 
 }//end comp

/**
 * Page: Main Content
 */
interface PageMainContentProp {
    module?:string;
}
function PageMainContent({module}: PageMainContentProp) {
    const [alertMessage, setAlertMessage] = useState<string>(AppConstants.NOT_DEF);

    return(
        <div className={AppThemeLayout.BODY_MAINCONTENT_STYLE}>
            <div>Main Content</div>
        </div>
        
    )

}//end comp

/**
 * Page: Second Bar
 */
interface PageSecondBarProp {
    module?:string;
}
function PageSecondBar({module}: PageSecondBarProp) {

    return(
        <div className="w-full min-h-screen flex flex-col p-2">
            <div>Second Bar</div>
        </div>
        
    )

}//end comp