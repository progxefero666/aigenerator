//src\app_front\manapplications\appeditorcfg.ts

import { Option } from "@/lib/model/base/option";


/**
 * class AppEditorConfig
 */
export class AppEditorCfg {

    public static readonly SECTION_MAIN: Option = new Option
        ("main", "Main", "application entity data");

    public static readonly SECTION_DOCS: Option = new Option
        ("docs", "Documents", "application analisis documents collection");

    public static readonly SECTION_TASKS: Option
        = new Option("task", "Tasks", "application task collections");

    public static readonly SECTIONS: Option[]=[
        AppEditorCfg.SECTION_MAIN,
        AppEditorCfg.SECTION_DOCS,
        AppEditorCfg.SECTION_TASKS
    ];

    public static readonly ACTIVE_SECTION: Option = AppEditorCfg.SECTIONS[0];

}//end class

/**
 * AppEditorMessages.MSG_SAVE_APP_ERROR
 */
export class AppEditorMessages {

    public static readonly MSG_EXPORT_ERROR: string = "export error";
    public static readonly MSG_EXPORT_SUCCESS: string = "!! export success !!"; 


}//end class