//src\app\appeditor\primarybar.tsx

import { useEffect, useRef, useState } from "react";
import { AppConstants } from "@/app_front/appconstants";
import { renderAlert } from "@/twdaisy/twdaisycomp";
import { AppThemeBars, AppThemeLayout, AppThemeTexts } from "@/app_front/app_ui/apptheme";
import { CodeGenStyle } from "../../codegen/cgstyle";
import CardOutputCode from "../../codegen/codegencard";
import { BARCFG_EXPORT, BARCFG_COPY } from "@/app_front/app_ui/appbars";
import { BarButtons, BarButtonsCfg } from "@/libcomp/barbutton";
import { InputText } from "@/libcomp/inputtext";
import { CodeFormats } from "@/codegen/cgconstants";


/**
 * JSX Component layout secondary column
 * Application Editor Tools
 */
export interface PageOutputMonitorProp {
    onexport: (fileName:string,code:string) => void
    fileName?: string;
    format: string;
    code: string|null;    
}
export default function PageOutputMonitor({onexport,fileName,format,code}: PageOutputMonitorProp) {

    const [alertMessage, setAlertMessage] = useState<string>(AppConstants.NOT_DEF);
    const [mainBarConfig, setMainBarConfig] = useState<BarButtonsCfg>(BARCFG_EXPORT);
    const [monitorBarConfig, setMonitorBarConfig] = useState<BarButtonsCfg>(BARCFG_COPY);
    const [codeCharged, setCodeCharged] = useState<boolean>(false);

    const expNameRef = useRef<HTMLInputElement>(null);
    const [expInputReadOnly, setExpInputReadOnly] = useState<boolean>(true);
    const expFileName: string = fileName ?? AppConstants.NOT_DEF;

    const prepareOutput = () => {
        if(code ==CodeFormats.TYPESCRIPT) {
        }
        else if(code == CodeFormats.SQL) {}
        else if(code == CodeFormats.PYTHON) {}
        else if(code == CodeFormats.JAVASCRIPT) {}
        else if(code == CodeFormats.JSON) {}
        else if(code == CodeFormats.MD) {}
        else if(code == CodeFormats.CSS) {}
        else if(code == CodeFormats.HTML) {}    
    }

    useEffect(() => {
        const init=():void=>{
            if(code && code!==null) {
                prepareOutput();
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

    const renderOutPutBar = () => {
        return (
            <div className={CodeGenStyle.CARD_CODE_HEADER_STYLE}>
                <div className={CodeGenStyle.CARD_CODE_HEADER_TITLE_STYLE}>
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

            <div className={CodeGenStyle.OUTPUT_MON_HEADER_STYLE}>
                <div className={CodeGenStyle.OUTPUT_MON_HEADER_TITLE_STYLE}>
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
                        <CardOutputCode execexport={onFileExport} code={code!} />     
                    </> 
                :null}
              
                {(alertMessage !== AppConstants.NOT_DEF) ? renderAlert(alertMessage) : null}
            </div>

        </div>

    )

}//end comp