//src\app\appeditor\primarybar.tsx

import { useState } from "react";
import { AppConstants } from "@/app_front/appconstants";
import { renderAlert } from "@/twdaisy/twdaisycomp";
import { AppTheme, AppThemeBars, AppThemeLayout, AppThemeTexts } from "@/app_front/apptheme";
import { CodeGenCfg } from "./modconfig";
import CodeGenCard from "./cards/codegencard";

import { BARCFG_EXPORT, BARCFG_EXPORT_COPY } from "@/app_front/uimodel/uimodelbars";
import { BarButtons, BarButtonsCfg } from "@/libcomp/barbutton";


const style_header: string = "w-full h-auto flex flex-row items-center pb-1 justify-between rounded-lg border border-sky-500";
const style_header_title: string = "flex flex-row items-center pl-3 text-white text-xs flex-1";

/**
 * JSX Component layout secondary column
 * Application Editor Tools
 */
export interface PageOutputMonitorProp {
    section?: string;
    code: string;
}
export default function PageOutputMonitor({section,code}: PageOutputMonitorProp) {

    const [alertMessage, setAlertMessage] = useState<string>(AppConstants.NOT_DEF);

    const [barConfig, setBarConfig] = useState<BarButtonsCfg>(BARCFG_EXPORT_COPY);
    
    const onexport = () => {
        alert("export");
    }

    const onClick = (opId?: string) => {
        if(opId){
            switch (opId) {
                case AppConstants.ACT_EXPORT:
                    onexport();
                    break;
                case AppConstants.ACT_COPY:
                    navigator.clipboard.writeText(code);
                    setAlertMessage("Code copied to clipboard");
                    break;
                default:
                    setAlertMessage("Operation not defined");
            }
        }
    };

    const renderMainContent = () => {

        if (section === CodeGenCfg.CREATE_MODEL.name) {
            return (
                <CodeGenCard execexport={onexport} code={code} />
            );
        }
        if (section === CodeGenCfg.SECTION_SERVICE.name) {
            return (
                <CodeGenCard execexport={onexport} code={code} />
            );
        }
    };

    return (
        <div className={CodeGenCfg.EDITOR_STYLE}>
            <div className={style_header}>
                <div className={style_header_title}>
                    <p className={AppThemeTexts.TEXT_H3_SIZE}>Result</p>
                </div>
                <BarButtons classname={AppThemeBars.BAR_BUTTONS_STYLE}
                    barconfig={barConfig}
                    onclick={onClick} />
            </div>

            <div className={AppThemeLayout.BODY_MAINCONTENT_STYLE}>
                {renderMainContent()}
                {(alertMessage !== AppConstants.NOT_DEF) ? renderAlert(alertMessage) : null}
            </div>
        </div>

    )

}//end comp