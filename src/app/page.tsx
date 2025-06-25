//src\app\module\aiprojects\manproyect\page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AppModule } from "@/lib/arquitect/model/appmodule";

import { AppTheme, AppThemeLayout } from "@/app_front/apptheme";
import { Search } from "@/libcomp/search";
import { AppConstants } from "@/app_front/appconstants";
import { Module_template_Config } from "./module/modconfig";
import { AppConfig } from "@/app_front/appconfig";


/**
 *  Index Page JSX
 */
export default function Index() {

    const router = useRouter();
    //useEffect(() => {const init = async () => {};init();}, []);

    return (
        <div id="cont_root" className={AppThemeLayout.LAYOUT_STYLE} >
            <PageHeader  />
            <div className = {AppThemeLayout.BODY_STYLE}>
                <PagePrimaryBar />
                <PageMainContent />
                <PageSecondBar />
            </div>
        </div>
    );

}//end

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
interface PagePrimaryBarProps {
    defmodulename?: () => void;
}
function PagePrimaryBar({ defmodulename }: PagePrimaryBarProps) {
    const router = useRouter();

    const [modules, setModules] = useState<AppModule[]>(AppConfig.MODULES);
    const [actmodule, setActiveModule] = useState<AppModule>(AppConfig.ACTIVE_MOD);

    useEffect(() => {

    }, []);

    const onModuleSelected = (name: string) => {
  
        if (name === AppConfig.MOD_SQLTOOLS.name) {
            //router.push("./aichatbot"); 
            router.push("./codegen"); 
        }
        else if (name === AppConfig.MOD_CODE_TYPESCRIPT.name) {
            router.push("./codegen"); 
        }
        else if (name === AppConfig.MOD_COMPONENTS.name  ) {
            router.push("./codegen"); 
        }
        else if (name === AppConfig.MOD_TEMPLATE.name) {
            router.push("./module"); 
        }        
    };

    const renderButton = (key: string, module: AppModule) => {

        let buttonColor: string = "btn-primary";
        if (actmodule.name === module.name) { buttonColor = "btn-warning"; }
        else { buttonColor = "btn-info"; }
        const buttonStyle: string = "btn btn-md text-md ".concat(buttonColor);

        return (
            <button key={key}
                className={buttonStyle}
                onClick={() => onModuleSelected(module.name)}>
                {module.title}
            </button>
        )
    }

    return (
        <div className="w-full min-h-screen flex flex-col px-2 mb-2">
            <div className="w-full h-auto  flex flex-col px-2 py-[10px] space-y-3 ">
                {modules.map((module, index) => (
                    renderButton(index.toString(), module)
                ))}
            </div>
        </div>
    )

}//end



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