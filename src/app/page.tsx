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
import { PagePrimaryBar } from "./codegen/primarybar";


/**
 *  Index Page JSX
 */
export default function Index() {

    const router = useRouter();
    //useEffect(() => {const init = async () => {};init();}, []);

    const chargeModule = (name: string): void => {
    }
    return (
        <div id="cont_root" className={AppThemeLayout.LAYOUT_STYLE} >
            <PageHeader  />
            <div className = {AppThemeLayout.BODY_STYLE}>
                <PagePrimaryBar  modules={AppConfig.MODULES} 
                                 actmodule={AppConfig.INDEX.name}
                                 chargemodule={chargeModule}/>
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
        <div className = {AppThemeLayout.LAYOUT_SECONDARY_BAR}>
            <div>Second Bar</div>
        </div>
        
    )

}//end comp