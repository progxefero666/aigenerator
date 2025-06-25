//src\app\module\modconfig.ts

import { Option } from "@/lib/model/base/option";

//import {sections} from "./modconfig.json";

/**
 * Module_template_Config
 */
export class Module_template_Config {

    public static readonly MODULE_NAME: string = "Module Template";
    public static readonly SECTION_A: Option = new Option
        ("section_a", "Section A", "module template section description");
        
    public static readonly SECTION_B: Option = new Option
        ("section_a", "Section A", "module template section description");
        
    public static readonly SECTIONS: Option[]=[
        Module_template_Config.SECTION_A,
        Module_template_Config.SECTION_A
    ];


}//end class Module_template_Config