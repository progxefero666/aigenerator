//src\app\codegen\page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { Option } from "@/lib/model/base/option";
import { AppConstants, AppUiConst } from "@/app_front/appconstants";
import { AppTheme, AppThemeLayout } from "@/app_front/apptheme";
import { AppThemeModule } from "@/app_front/apptheme";
import TwDaisyMenu from "@/twdaisy/twdaisymenu";
//page layout jsx components
import PageOutputMonitor from "./outputmonitor";
import { CodeGenCfg } from "./modconfig";
import PageInputEditor from "./inputeditor";
import { Button } from "@/libcomp/button";

/**
 * Page Index JSX Client
 * start command:
 *  npx openapi-typescript-codegen --input http://localhost:8000/openapi.json --output ./src/client --client axios
 *  ManApplicationUtil.getFormEntity
 *  
 *  ApplicationEditor
 *  src\app_front\manapplications\appeditorcfg.ts
 */
export const CODEGEN_PATH: string = "./codegen";


export default function CodeGenerator() {

    const [section, setSection] = useState<string>(CodeGenCfg.CREATE_MODEL.name);
    const chargeSection = (section: string): void => { setSection(section); }

    /*
    useEffect(() => {const init=():void=>{} init();}, []);
    */

    const onfileloaded = async (file: File) => {        
        const file_content = await file.arrayBuffer();
        console.log(file_content);
    }

    return (
        <div id="cont_root" className={AppThemeLayout.LAYOUT_STYLE} >
            <PageHeader />

            <div className={CodeGenCfg.BODY_STYLE}>
                <PagePrimaryBar     section={section} chargesection={chargeSection} />
                <PageInputEditor    section={section} onfileloaded = {onfileloaded}/>                
                <PageOutputMonitor  section={section} />
                <PageSecondaryBar   section={section} />                
            </div>
        </div>
    );

}//end 

interface PageHeaderProp {
    value?:string;
     //onfileloaded?: (file: File) => void;
}
function PageHeader({ value }: PageHeaderProp) {

    const maxLen: number = 50;
    const onSearchSubmit = (value:string): void => { }
    const onButtonClick = (operation?: string) => { };
    
    return (

        <div className={AppThemeModule.MODULE_HEADER_STYLE}>

            {/*column left */}
            <div className="w-full h-auto flex flex-row items-center px-4 top-2">
                <div className="flex-1 flex items-center text-white text-2xl translate-y-[-4px]">
                    Code Gen
                </div>
                <div>                   
                    <Button icon={AppUiConst.ICON_RUN}
                            operation={AppConstants.NAV_BACK}                            
                            onclick={onButtonClick}  />                           
                </div>
            </div>

            {/*column center */}
            <div className="w-full h-auto flex flex-row ">
                <div className="w-[26%] flex flex-items-center" >
                </div>
            </div>

            {/* column right */}
            <div className="w-full h-auto flex flex-row">
                right
            </div>

        </div>
    )

}//end

interface PagePrimaryBarProp {
    section: string;
    chargesection: (section:string) => void
}
function PagePrimaryBar({chargesection, section}: PagePrimaryBarProp) {

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
        <div className={AppThemeLayout.LAYOUT_PRIMARY_BAR}>
            <TwDaisyMenu onselection={loadsection}
                options={CodeGenCfg.SECTIONS}
                optactname={CodeGenCfg.ACTIVE_SECTION.name}
                optcolor={AppTheme.MENU_OPT_COLOR}
                optactcolor={AppTheme.MENU_OPT_ACT_COLOR} />
        </div>
    )

}//end comp

interface PageSecondaryBarProp {
    section: string;
}
function PageSecondaryBar({ section }: PageSecondaryBarProp) {

    return (
        <div className = {AppThemeLayout.LAYOUT_SECONDARY_BAR}>
            Editor Tools
        </div>
    )

}//end comp