//src\app\appeditor\primarybar.tsx

import { useRef, useState } from "react";
import { AppConstants } from "@/app_front/appconstants";
import { renderAlert } from "@/twdaisy/twdaisycomp";
import { AppTheme, AppThemeBars, AppThemeLayout, AppThemeTexts } from "@/app_front/apptheme";
import { CodeGenCfg } from "./modconfig";
import CodeGenCard from "./cards/codegencard";

import { BARCFG_EXPORT, BARCFG_EXPORT_COPY } from "@/app_front/uimodel/uimodelbars";
import { BarButtons, BarButtonsCfg } from "@/libcomp/barbutton";
import { AppEditorMessages } from "./appeditor";
import { InputText } from "@/libcomp/inputtext";


const style_header: string = "w-full h-auto flex flex-row items-center pb-1 justify-between rounded-lg border border-sky-500";
const style_header_title: string = "flex flex-row items-center pl-3 pr-1 text-white text-xs flex-1";

/**
 * JSX Component layout secondary column
 * Application Editor Tools
 */
export interface PageOutputMonitorProp {
    format?: string;
    code: string;
    fileName?: string;
}
export default function PageOutputMonitor({ format, code, fileName }: PageOutputMonitorProp) {

    const [alertMessage, setAlertMessage] = useState<string>(AppConstants.NOT_DEF);
    const [barConfig, setBarConfig] = useState<BarButtonsCfg>(BARCFG_EXPORT_COPY);

    const expNameRef = useRef<HTMLInputElement>(null);
    const [expInputReadOnly, setExpInputReadOnly] = useState<boolean>(true);
    const expFileName: string = fileName ?? AppConstants.NOT_DEF;

    const onexport = () => {

        let result = true; //CodeGenCfg.exportCode(code);
        if (fileName && fileName !== AppConstants.NOT_DEF) {
            //result = CodeGenCfg.exportCode(code, fileName);
        }

        if (result) {
            setAlertMessage(AppEditorMessages.MSG_EXPORT_SUCCESS);
        }
        else {
            setAlertMessage(AppEditorMessages.MSG_EXPORT_ERROR);
        }
        setTimeout(() => setAlertMessage(AppConstants.NOT_DEF), 3000);
    }

    const onClick = (opId?: string) => {
        if (opId) {
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

        if (format === CodeGenCfg.CREATE_MODEL.name) {
            return (
                <CodeGenCard execexport={onexport} code={code} />
            );
        }
        if (format === CodeGenCfg.SECTION_SERVICE.name) {
            return (
                <CodeGenCard execexport={onexport} code={code} />
            );
        }
    };

    return (
        <div className={CodeGenCfg.EDITOR_STYLE}>

            <div className={style_header}>
                <div className={style_header_title}>
                    <div className = "w-full mr-2 pl-1">
                        {(expFileName == AppConstants.NOT_DEF) ?
                            <InputText name="expFileName"
                                ref={expNameRef}
                                readonly={expInputReadOnly}
                                inline={true} maxlen={50}
                                placeholder="output filename" />
                            :
                            <InputText name="expFileName"
                                ref={expNameRef}
                                defaultvalue={expFileName}
                                readonly={expInputReadOnly}
                                inline={true} maxlen={50} />
                        }                        
                    </div>

                    <BarButtons classname={AppThemeBars.BAR_BUTTONS_STYLE}
                        barconfig={barConfig}
                        onclick={onClick} />
                    </div>
            </div>

            <div className={AppThemeLayout.BODY_MAINCONTENT_STYLE}>
                {renderMainContent()}
                {(alertMessage !== AppConstants.NOT_DEF) ? renderAlert(alertMessage) : null}
            </div>
            
        </div>

    )

}//end comp