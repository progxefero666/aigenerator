//src\app\appeditor\primarybar.tsx

import { useRef, useState } from "react";
import { AppConstants, AppUiConst } from "@/app_front/appconstants";
import { renderAlert } from "@/twdaisy/twdaisycomp";
import { AppTheme } from "@/app_front/apptheme";
import { CodeGenCfg } from "./motor/cgcfg";
import CodeGenCard from "./cards/codegencard";
import { InputFiles } from "@/libcomp/inputfiles";
import { Button } from "@/libcomp/button";
import { ModelTable } from "./motor/sql/sqlmodel";
import { CodeGenSqlProcess } from "./motor/sql/sqlprocess";



/**
 * JSX Component layout secondary column
 * Application Editor Tools
 */
export interface PageInputEditorProp {
    section:string;
    onfileloaded: (file: File) => void;
}
export default function PageInputEditor({ section,onfileloaded }: PageInputEditorProp) {
    
    const [alertMessage, setAlertMessage] = useState<string>(AppConstants.NOT_DEF);
    const inputFilesRef = useRef<HTMLInputElement>(null);
    const [code, setCode] = useState<string>(AppConstants.NOT_DEF);


    const onFileLoaded = async (name:string,file:File) => {
        if(file){
            const code_file:File = file as File;
            const reader = new FileReader();
                reader.onload = (e) => {
                const text = reader.result!.toString().trim();
                console.log(text);
                setCode(text);
            }
            reader.readAsText(code_file);           
        }
    }
        
    const runProcess = () => {
        alert("run process");       
        const tables: ModelTable[] = CodeGenSqlProcess.getEsquemaTables(code)
        console.log(tables);
        alert("process end");
    };


    const onexport = () => {
        alert("export");
    }

    return (
        <div className={CodeGenCfg.EDITOR_STYLE}>
            <div className={CodeGenCfg.EDITOR_HEADER_STYLE}>
                    <Button text="run"
                            icon={AppUiConst.ICON_RUN}
                            onclick={runProcess} />    

                <InputFiles name="codefile"
                            ref={inputFilesRef}                            
                            formats={CodeGenCfg.SQL_FORMATS}
                            multiple={false}
                            onchange={onFileLoaded} />
            </div>
            
            <div className={CodeGenCfg.EDITOR_AREA_STYLE}>
                <textarea  key={code} 
                           className="textarea textarea-primary w-full min-h-screen "
                           placeholder="(not def)" defaultValue={code} />
            </div>

             {(alertMessage !== AppConstants.NOT_DEF) ? renderAlert(alertMessage) : null}
        </div>
    )

}//end comp