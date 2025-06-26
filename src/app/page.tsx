//src\app\module\aiprojects\manproyect\page.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AppThemeLayout, AppThemeMenus } from "@/app_front/app_ui/apptheme";
import TwDaisyMenu from "@/libcomp/thememenu";
import { Search } from "@/libcomp/search";
import { AppConstants, AppMessages, AppLayoutConst } from "@/app_front/appconstants";
import { AppConfig } from "@/app_front/app_index/appconfig";

import { PagePrimaryBarProps,PageSecondaryBarProps } from "@/app_front/apptypes";

/**
 *  Index Page JSX
 *  
 */
export default function Index() {

    /**
     * charge ApplicationModule
     */
    const router = useRouter();    
    const chargeModule = (name: string): void => {        
        let navigationPath: string|null = AppConfig.getModulePath(name);
        if(navigationPath!== null){ router.push(navigationPath);}
        else {alert(AppMessages.ERROR_MODULE_NOTFOUND.concat(name));}
    }

    /**
     * View JSX
     */    
    return (
        <div id = {AppLayoutConst.ROOT_CONTAINER} className={AppThemeLayout.LAYOUT_STYLE} >
            <PageHeader  />
            <div className = {AppThemeLayout.BODY_STYLE}>
                <PagePrimaryBar  sections={AppConfig.getModulesMenu()} 
                                 actsection={AppConfig.INDEX.name}
                                 chargesection={chargeModule}/>
                <PageMainContent />
                <PageSecondBar actsection={AppConfig.INDEX.name}/>
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


function PagePrimaryBar({ sections: modules,chargesection: chargemodule, actsection: actmodule }: PagePrimaryBarProps) {
    //useEffect(() => {}, []);
    return (
        <div className={AppThemeLayout.LAYOUT_PRIMARY_BAR}>
            <TwDaisyMenu onselection={chargemodule}
                options={modules}
                optactname={actmodule}
                optcolor={AppThemeMenus.MENU_OPT_COLOR}
                optactcolor={AppThemeMenus.MENU_OPT_ACT_COLOR} />
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
function PageSecondBar({actsection}: PageSecondaryBarProps) {
    return(
        <div className = {AppThemeLayout.LAYOUT_SECONDARY_BAR}>
            <div>Second Bar</div>
        </div>
        
    )

}//end comp