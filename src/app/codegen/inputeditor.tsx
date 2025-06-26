//src\app\appeditor\primarybar.tsx

import { useRef, useState } from "react";
import { AppConstants, 
         AppUiConst }   from "@/app_front/appconstants";
import { ModelTable }   from "@/app_front/codegen/cgmodel";
import { CodeGenCfg }   from "@/app/codegen/modconfig";
import { CodeGenTsFilesContent, 
        CodeGenSql }    from "@/app_front/codegen/codegen";
import { renderAlert }  from "@/twdaisy/twdaisycomp";
import { InputFiles }   from "@/libcomp/inputfiles";
import { Button }       from "@/libcomp/button";
import { CodeGenServices } from "@/app_front/codegen/services/cgservices";
//import { AppTheme } from "@/app_front/apptheme";


/*
## Operations 

### Operation Base
    _desc:_ get all ModelTables  from sql script squema
    _function:_  ModelTable[] = CodeGenSql.getEsquemaTables(inputCode);

### Operation Esquemas

    1. *** all complete squema *** 
        _desc:_ Generate all typescriopt class in only one file _.ts_ from sql script squema
        _3 elements included by table_  
                - Class Definition
                - Class Table
                - Type Table
        _function:_ CodeGenTsFilesContent.genFileContentEntityArrayClass(tables);
        
    2. *** all table defs *** 
        _desc:_ generate all table defs in the same file
        _function:_ CodeGenTsFilesContent.getTablesDefCode(tables);
        
    3. *** all table api client services *** 
        _desc:_ generate all table api client services in the same file
        _function:_CodeGenServices.genFileContentArrayServiceClass(tables);		
*/

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
    const [inputCode, setInputCode]       = useState<string>(AppConstants.NOT_DEF);
    const [fileName, setFileName]        = useState<string>(AppConstants.NOT_DEF);

    const inputFilesRef = useRef<HTMLInputElement>(null);
    const onFileLoaded = async (name:string,file:File) => {
        if(file){
            setFileName(file.name);         
            const code_file:File = file as File;
            const reader = new FileReader();
                reader.onload = (e) => {
                const text = reader.result!.toString().trim();                
                setInputCode(text);
            }
            reader.readAsText(code_file);           
        }
    }
        

    const runProcess = () => {       
        //const tables: ModelTable[] = CodeGenSql.getEsquemaTables(inputCode);        

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
                <textarea  key={inputCode} 
                           className="textarea textarea-primary w-full min-h-screen "
                           placeholder="(not def)" defaultValue={inputCode} />
            </div>

             {(alertMessage !== AppConstants.NOT_DEF) ? renderAlert(alertMessage) : null}
        </div>
    )

}//end comp

/*        
    //all complete squema
    //const tablesCode:string = 
    //    CodeGenTsFilesContent.genFileContentEntityArrayClass(tables);
    //ondataresult(tablesCode);

    //multiple service class
    //const resultCode:string = CodeGenServices.genFileContentArrayServiceClass(tables);
    //setOutputCode(resultCode);
    //ondataresult(resultCode);

    //single table def
    //const table_code:string = CodeGenTsFilesContent.getTableDefCode(tables[0]);
    //console.log(table_code);        

    // multiple table defs
    //const tablesDefCode:string = CodeGenTsFilesContent.getTablesDefCode(tables);
    //ondataresult(tablesDefCode);

    //single class
    //const tableClassCode:string 
    //    = CodeGenTsFilesContent.genFileContentEntityClass(tables[1]);
    //ondataresult(tableClassCode);

    //single type
    //const tableType:string = CodeGenTsFilesContent.genClassTypeContent(tables[0]);
    //ondataresult(tableType);

    //console.log("process end");
*/        
