//src\app\appeditor\primarybar.tsx

import { useState } from "react";
import { AppConstants } from "@/app_front/appconstants";
import { renderAlert } from "@/twdaisy/twdaisycomp";
import { AppTheme } from "@/app_front/apptheme";
import { CodeGenCfg } from "./motor/cgcfg";
import CodeGenCard from "./cards/codegencard";
import { BarButtonsCfg } from "@/libcomp/model/barbuttonscfg";
import { BARCFG_EXPORT } from "@/app_front/uimodel/uimodelbars";
import { BarButtons } from "@/libcomp/barbutton";


const style_header: string = "w-full h-auto flex flex-row items-center pb-1 justify-between rounded-lg border border-sky-500";
const style_header_title: string = "flex flex-row items-center pl-3 text-white text-xs flex-1";

/**
 * JSX Component layout secondary column
 * Application Editor Tools
 */
export interface PageOutputMonitorProp {
    section: string;
}
export default function PageOutputMonitor({ section }: PageOutputMonitorProp) {

    const [alertMessage, setAlertMessage] = useState<string>(AppConstants.NOT_DEF);

    const [barConfig, setBarConfig] = useState<BarButtonsCfg>(BARCFG_EXPORT);
    const [code, setCode] = useState<string>(AppConstants.NOT_DEF);

    const onexport = () => {
        alert("export");
    }

    const onClick = (opId?: string) => {

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
                    <p className={AppTheme.TEXT_H3_SIZE}>Result</p>
                </div>
                <BarButtons classname={CodeGenCfg.style_barbuttons}
                    barconfig={barConfig}
                    onclick={onClick} />
            </div>

            <div className={AppTheme.BODY_MONITOR_STYLE}>
                {renderMainContent()}
                {(alertMessage !== AppConstants.NOT_DEF) ? renderAlert(alertMessage) : null}
            </div>
        </div>

    )

}//end comp