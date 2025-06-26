//src\app_front\codegen\cgcontroller.ts

import { Option } from "@/lib/model/base/option";
/**
 * CodeGen Main App Controller
 */
export class CodeGenSections {
    
    public static readonly TYPESCRIPT_FORMATS:string = ".ts,.tsx"

    public static readonly SQL_FORMATS:string = ".sql,.txt"

    public static readonly OPT_CREATE_MODELS: Option = new Option
        ("create_models", "Table Models", "create models");

    public static readonly OPT_CREATES_SERVICES: Option = new Option
        ("create_services", "Table Services", "create services");
        
    public static readonly OPT_MODEL_CARDS: Option = new Option
        ("create_cards", "Entity Cards", "create cards");

    public static readonly OPT_MODEL_FOLDER: Option = new Option
        ("create_folders", "Entity Folder", "create folders");

    public static readonly MENU: Option[]=[
        CodeGenSections.OPT_CREATE_MODELS,
        CodeGenSections.OPT_CREATES_SERVICES,
        CodeGenSections.OPT_MODEL_CARDS,
        CodeGenSections.OPT_MODEL_FOLDER,
    ];

    public static readonly MENU_ACT_OPTION: Option = CodeGenSections.MENU[0];
    public static test(): void {
        return ;
    }

}//end class

/**
 * class CodeGen Messages
 */
export class CodeGenMessages {

    public static readonly MSG_EXPORT_SUCCESS: string = "!! export file success. !!";

}//end class

/**
 * class CodeGen Control
 */
export class CodeGenControl {

    public sections: Option[] = CodeGenSections.MENU;
    public currentSection: string;

    constructor(initSection?: string ) {
        this.currentSection = initSection ? initSection : CodeGenSections.MENU_ACT_OPTION.name;
    }

}//end class