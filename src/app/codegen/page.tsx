//src\app\codegen\page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { AppTheme, AppThemeLayout } from "@/app_front/apptheme";

//page layout jsx components
import PageHeader from "./header";
import PageOutputMonitor from "./outputmonitor";
import PagePrimaryBar from "./primarybar";
import PageSecondaryBar from "./secondarybar";
import { CodeGenCfg } from "./motor/cgcfg";
import PageInputEditor from "./inputeditor";

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