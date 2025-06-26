//src\app_front\codegen\cgcontroller.ts

import { Option } from "@/lib/model/base/option";


/**
 * CodeGen Main App Controller
 */
export class ModuleApplicationsConfig {
    
    public static readonly TYPESCRIPT_FORMATS:string = ".ts,.tsx"
    public static readonly SQL_FORMATS:string = ".sql,.txt"

    //module sections
    public static readonly OPT_CREATE_MODELS: Option = new Option
        ("create_models", "Table Models", "create models");

    public static readonly OPT_CREATES_SERVICES: Option = new Option
        ("create_services", "Table Services", "create services");
        
    public static readonly OPT_MODEL_CARDS: Option = new Option
        ("create_cards", "Entity Cards", "create cards");

    public static readonly OPT_MODEL_FOLDER: Option = new Option
        ("create_folders", "Entity Folder", "create folders");

    public static readonly MENU: Option[]=[
        ModuleApplicationsConfig.OPT_CREATE_MODELS,
        ModuleApplicationsConfig.OPT_CREATES_SERVICES,
        ModuleApplicationsConfig.OPT_MODEL_CARDS,
        ModuleApplicationsConfig.OPT_MODEL_FOLDER,
    ];
    public static readonly MENU_ACT_OPTION: Option = ModuleApplicationsConfig.MENU[0];

    //module messages
    public static readonly MSG_EXPORT_SUCCESS: string = "!! export file success. !!";

}//end class


