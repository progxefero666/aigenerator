//src\app\module\page.tsx
"use client";

import { useRouter } from "next/router";
import { Option } from "@/lib/model/base/option";

import { AppConstants } from "@/app_front/appconstants";
import { AppTheme, AppThemeLayout, AppThemeMenus } from "@/app_front/apptheme";
import { Search } from "@/libcomp/search";
import TwDaisyMenu from "@/twdaisy/twdaisymenu";

import { useState, useEffect, useRef } from "react";
import { Module_template_Config } from "./modconfig";
import { ThemeCard } from "@/app_front/comp/themecard";

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

export default function PageModule_template({ }: PageModule_template_Prop) {

    const chargesection = (name: string) => {
    }

    return (
        <div id="cont_root" className={AppThemeLayout.LAYOUT_STYLE} >
            <PageHeader />
            <div className={AppThemeLayout.BODY_STYLE}>
                <PagePrimaryBar />
                <PageMainContent />
                <PageSecondBar />
            </div>
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
    const onSearchSubmit = (value: string): void => { }
    const onButtonClick = (op_name: string): void => { }
    const executeOperation = (op_name: string): void => { }
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
                        onsubmit={onSearchSubmit} />
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
    section?: string;
    chargesection?: (section: string) => void
}
function PagePrimaryBar({ chargesection, section }: PagePrimaryBarProp) {

    const [alertMessage, setAlertMessage] = useState<string>(AppConstants.NOT_DEF);
    const [sections, setSections] = useState<Option[]>(Module_template_Config.SECTIONS);

    const loadsection = (name: string): void => {
        if (chargesection) {
            chargesection(name);
        }
        if (name === Module_template_Config.SECTION_A.name) {
        }
        else if (name === Module_template_Config.SECTION_B.name) {
        }
    }

    return (
        <div className={AppThemeLayout.LAYOUT_PRIMARY_BAR}>
            <TwDaisyMenu onselection={loadsection}
                options={Module_template_Config.SECTIONS}
                optactname={Module_template_Config.ACTIVE_SECTION.name}
                optcolor={AppThemeMenus.MENU_OPT_COLOR}
                optactcolor={AppThemeMenus.MENU_OPT_ACT_COLOR} />
        </div>
    )

}//end comp

/**
 * Page: Main Content
 */
interface PageMainContentProp {
    module?: string;
}
function PageMainContent({ module }: PageMainContentProp) {
    const [alertMessage, setAlertMessage] = useState<string>(AppConstants.NOT_DEF);

    const cardRef = useRef<HTMLDivElement>(null);    
    const execCardAction = (operation:string|null,name:string|null) => {                
    }

    const cardTitle = "Main Content Card";
    const cardData:string = "Main Content Data line 1\n" +
        "Main Content Data line 2\n" +      
        "Main Content Data line 3\n" +
        "Main Content Data line 4\n" ;

    return (
        <div className={AppThemeLayout.BODY_MAINCONTENT_STYLE}>
            <div>Main Content</div>
            <ThemeCard ref={cardRef}
                       title={cardTitle}
                       data={cardData}
                       exec={execCardAction} />
        </div>
    )

}//end comp

/**
 * Page: Second Bar
 */
interface PageSecondBarProp {
    module?: string;
}
function PageSecondBar({ module }: PageSecondBarProp) {

    return (
        <div className = {AppThemeLayout.LAYOUT_SECONDARY_BAR}>
            <div>Second Bar</div>
        </div>

    )

}//end comp