//src\app_front\manapplications\appeditorcfg.ts

import { Option } from "@/lib/model/base/option";


/**
 * class CodeGenCfg.EDITOR_STYLE
 */
export class CodeGenCfg {

    public static readonly TYPESCRIPT_FORMATS:string = ".ts,.tsx"

    public static readonly SQL_FORMATS:string = ".sql,.txt"

    public static readonly CREATE_MODEL: Option = new Option
        ("create_typescript_model_from_sql", "Model by SQL", "create typescript model from sql");

    public static readonly SECTION_SERVICE: Option = new Option
        ("create_model_service", "Model Service", "create model service");
        
    public static readonly SECTION_MODEL_CARD: Option = new Option
        ("create_model_card", "Model Card", "create model card");


    public static readonly SECTIONS: Option[]=[
        CodeGenCfg.CREATE_MODEL,
        CodeGenCfg.SECTION_SERVICE
    ];

    public static readonly ACTIVE_SECTION: Option = CodeGenCfg.SECTIONS[0];

    public static readonly BODY_STYLE: string = "w-full h-auto grid grid-cols-[14%_41%_41%_4%]";
    public static readonly HEADER_STYLE: string 
        = "w-full h-auto grid grid-cols-[14%_41%_41%_4%] border-b-1 mb-3 border-b-red-800 py-2";

    public static readonly EDITOR_STYLE: string = "w-full h-auto flex flex-col space-y-2 pr-4 ";
    public static readonly EDITOR_HEADER_STYLE: string 
        = "w-full h-auto flex flex-row p-2 space-x-2  rounded-lg border border-sky-500";
        
    public static readonly EDITOR_AREA_STYLE: string = "w-full h-auto flex flex-col bg-green-450";
    
   

}//end class

/**
 * AppEditorMessages.MSG_SAVE_APP_ERROR
 */
export class CodeGenCfgMessages {

    public static readonly MSG_SAVE_APP_ERROR: string = "!! Files charged correct. !!";


}//end class