//src\app\appeditor\primarybar.tsx

import { useEffect, useRef, useState } from "react";
import { AppConstants } from "@/app_front/appconstants";
import { renderAlert } from "@/twdaisy/twdaisycomp";
import { AppTheme, AppThemeBars, AppThemeLayout, AppThemeTexts } from "@/app_front/apptheme";
import { CodeGenStyle } from "../../app_front/codegen/cgstyle";
import CodeGenCard from "./cards/codegencard";

import { BARCFG_EXPORT, BARCFG_COPY } from "@/app_front/uimodel/uimodelbars";
import { BarButtons, BarButtonsCfg } from "@/libcomp/barbutton";
import { AppEditorMessages } from "./appeditor";
import { InputText } from "@/libcomp/inputtext";
import { CodeGenControl } from "@/app_front/codegen/cgcontroller";


const style_header: string = "w-full h-auto flex flex-row items-center pb-1 justify-between rounded-lg border border-sky-500";
const style_header_title: string = "flex flex-row items-center pl-3 pr-1 text-white text-xs flex-1";


const style_monitor_header: string 
    = "w-full h-auto flex flex-row items-center pb-1 justify-between rounded-lg border border-neutral-800";

const style_monitor_header_title: string = "flex flex-row items-center pl-3 pr-1 text-white text-xs flex-1";

/**
 * JSX Component layout secondary column
 * Application Editor Tools
 */
export interface PageOutputMonitorProp {
    format?: string;
    code: string|null;
    fileName?: string;
}
export default function PageOutputMonitor({ format, code, fileName }: PageOutputMonitorProp) {

    const [alertMessage, setAlertMessage] = useState<string>(AppConstants.NOT_DEF);
    const [mainBarConfig, setMainBarConfig] = useState<BarButtonsCfg>(BARCFG_EXPORT);
    const [monitorBarConfig, setMonitorBarConfig] = useState<BarButtonsCfg>(BARCFG_COPY);
    const [codeCharged, setCodeCharged] = useState<boolean>(false);

    const expNameRef = useRef<HTMLInputElement>(null);
    const [expInputReadOnly, setExpInputReadOnly] = useState<boolean>(true);
    const expFileName: string = fileName ?? AppConstants.NOT_DEF;


    useEffect(() => {
        const init=():void=>{
            if(code && code!==null) {
                setCodeCharged(true);
                setExpInputReadOnly(false);
            }
        } 
        init();
    }, []);

    const onFileExport = () => {

        let result = true; //CodeGenCfg.exportCode(code);
        if (fileName && fileName !== AppConstants.NOT_DEF) {
            //result = CodeGenCfg.exportCode(code, fileName);
        }

        /*
        if (result) {
            setAlertMessage(AppEditorMessages.MSG_EXPORT_SUCCESS);
        }
        else {
            setAlertMessage(AppEditorMessages.MSG_EXPORT_ERROR);
        }
        setTimeout(() => setAlertMessage(AppConstants.NOT_DEF), 3000);
        */
    }

    const onClick = (opId?: string) => {

        if(!codeCharged) {return;}

        if (opId) {
            switch (opId) {
                case AppConstants.ACT_EXPORT:
                    onFileExport();
                    break;
                case AppConstants.ACT_COPY:
                    navigator.clipboard.writeText(code!);
                    setAlertMessage("Code copied to clipboard");
                    break;
                default:
                    setAlertMessage("Operation not defined");
            }
        }
    };

    const renderMainContent = () => {
        if (format === CodeGenControl.OPT_CREATE_MODELS.name) {
            return (
                <CodeGenCard execexport={onFileExport} code={code!} />
            );
        }
        if (format === CodeGenControl.OPT_CREATES_SERVICES.name) {
            return (
                <CodeGenCard execexport={onFileExport} code={code!} />
            );
        }
    };

    const renderOutPutBar = () => {
        return (
            <div className={style_monitor_header}>

                <div className={style_header_title}>
                    <div className="w-full mr-2 pl-1">
                        <p className={AppThemeTexts.TEXT_SEC_STYLE}>
                            generated code
                        </p>
                    </div>

                    <BarButtons classname={AppThemeBars.BAR_BUTTONS_STYLE}
                        barconfig={monitorBarConfig}
                        onclick={onClick} />
                </div>
            </div>
        )
    }

    return (
        <div className={CodeGenStyle.EDITOR_STYLE}>

            <div className={style_header}>
                <div className={style_header_title}>
                    <div className="w-full mr-2 pl-1">
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
                        barconfig={mainBarConfig}
                        onclick={onClick} />
                </div>
            </div>

            <div className={AppThemeLayout.BODY_MAINCONTENT_STYLE}>
                {codeCharged ?
                    <>
                        {renderOutPutBar()}
                        {renderMainContent()}        
                    </> 
                :null}
              
                {(alertMessage !== AppConstants.NOT_DEF) ? renderAlert(alertMessage) : null}
            </div>

        </div>

    )

}//end comp