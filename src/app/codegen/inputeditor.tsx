//src\app\appeditor\primarybar.tsx

import { useRef, useState } from "react";
import { AppConstants, AppUiConst } from "@/app_front/appconstants";
import { renderAlert } from "@/twdaisy/twdaisycomp";
import { AppTheme } from "@/app_front/apptheme";
import { CodeGenCfg } from "./modconfig";
import { InputFiles } from "@/libcomp/inputfiles";
import { Button } from "@/libcomp/button";
import { ModelTable } from "../../app_front/codegen/model/modeltable";
import { SqlGenerator } from "../../app_front/codegen/generator/sqlgenerator";
import { TypeScriptsGenerator } from "@/app_front/codegen/generator/tsgenerator";
import { CodeGenFunctions } from "@/app_front/codegen/cgfunctions";



/**
 * JSX Component layout secondary column
 * Application Editor Tools
 */
export interface PageInputEditorProp {
    section:string;
    ondataresult: (data:string) => void;
}
export default function PageInputEditor({ section,ondataresult }: PageInputEditorProp) {
    
    const [alertMessage, setAlertMessage] = useState<string>(AppConstants.NOT_DEF);
    const inputFilesRef = useRef<HTMLInputElement>(null);
    const [code, setCode] = useState<string>(AppConstants.NOT_DEF);


    const onFileLoaded = async (name:string,file:File) => {
        if(file){
            const code_file:File = file as File;
            const reader = new FileReader();
                reader.onload = (e) => {
                const text = reader.result!.toString().trim();
                //console.log(text);
                setCode(text);
            }
            reader.readAsText(code_file);           
        }
    }
        
    
    const runProcess = () => {
        console.log("run process");       
        const tables: ModelTable[] = SqlGenerator.getEsquemaTables(code);
        
        const table_code:string = CodeGenFunctions.getTableDefCode(tables[0]);
        //console.log(table_code);        

        const tablesDefCode:string = CodeGenFunctions.getTablesDefCode(tables);
        ondataresult(tablesDefCode);

        //const tableClassCode:string = TypeScriptsFunctions.genFileContentEntityClass(tables[1]);
        //ondataresult(tableClassCode);
        //console.log("process end");
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