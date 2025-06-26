//src\app\codegen\page.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Option } from "@/lib/model/base/option";
import { AppConstants, AppLayoutConst, AppUiConst } from "@/app_front/appconstants";
import { AppTheme, AppThemeLayout, AppThemeMenus } from "@/app_front/apptheme";
import { AppThemeModule } from "@/app_front/apptheme";
import TwDaisyMenu from "@/twdaisy/twdaisymenu";
import { PagePrimaryBarProps } from "@/app_front/apptypes";
import PageOutputMonitor from "./outputmonitor";
import { CodeGenStyle } from "../../codegen/cgstyle";
import PageInputEditor from "./inputeditor";
import { Button } from "@/libcomp/button";
import { ModuleDbModelToolsConfig } from "@/app_front/mod_dbmodtools/mod_config";
import { CodeFormats } from "@/app_front/codegen/cgconstants";
import { useRouter } from "next/navigation";
import { AppConfig } from "@/app_front/home/appconfig";


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

//const codeGenControl: DbModelToolsControl = new DbModelToolsControl();

export default function PageDbModelTools() {
    const router = useRouter();   
    const execNavToIndex = () => { 
        router.push(AppConfig.INDEX.path);
    }

    const [alertMessage, setAlertMessage] = useState<string>(AppConstants.NOT_DEF);
    const [outputFormat, setOutputFormat] = useState<string>(CodeFormats.TYPESCRIPT);
    const [code, setCode] = useState<string|null>(null);
    const [section, setSection] = useState<string>(ModuleDbModelToolsConfig.MENU_ACT_OPTION.name);



    const chargeSection = (name: string): void => { 
        if(name == ModuleDbModelToolsConfig.OPT_CREATE_MODELS.name){
        }
        else if(name == ModuleDbModelToolsConfig.OPT_CREATES_SERVICES.name) {
        }
        else if(name == ModuleDbModelToolsConfig.OPT_MODEL_CARDS.name) {
        }        
        else if(name == ModuleDbModelToolsConfig.OPT_MODEL_FOLDER.name) {
        }        
        setSection(section); 
    }

    const runGeneration = (data:string) => {        
        setCode(data);
    }

    const exportFileCode = (fileName:string,code:string) => {        
        console.log("Export file: " + fileName + " with code: " + code);

    }

    return (
        <div id = {AppLayoutConst.ROOT_CONTAINER} className={AppThemeLayout.LAYOUT_STYLE} >
            <PageHeader />
            <div className={CodeGenStyle.BODY_STYLE}>
                
                <PagePrimaryBar    
                    sections={ModuleDbModelToolsConfig.MENU}
                    chargesection={chargeSection}
                    actsection={section}  />

                <PageInputEditor    section={section} run = {runGeneration}/>      

                <PageOutputMonitor  key={code} 
                                    onexport={exportFileCode}       
                                    format={outputFormat} code={code} />
                
                <PageSecondaryBar   actsection={section} />                
            </div>
        </div>
    );

}//end 

interface PageHeaderProp {
    value?:string;
     //onfileloaded?: (file: File) => void;
}
function PageHeader({ value }: PageHeaderProp) {
    const router = useRouter(); 
    const execNavToIndex = () => { 
        router.push(AppConfig.INDEX.path);
    }
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


function PagePrimaryBar({sections,chargesection,actsection}: PagePrimaryBarProps) {
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

interface PageSecondaryBarProp {
    actsection: string;
}
function PageSecondaryBar({ actsection }: PageSecondaryBarProp) {

    return (
        <div className = {AppThemeLayout.LAYOUT_SECONDARY_BAR}>
            Editor Tools
        </div>
    )

}//end comp

    /*
    const moduleControl = useRef<DbModelToolsControl>(null); 
    useEffect(() => {
        const init=():void=>{
              moduleControl.current = 
                new DbModelToolsControl(ModuleDbModelToolsConfig.MENU_ACT_OPTION.name);    
        } 
        init();
    }, []);
    */