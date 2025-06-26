//src\app_front\appconfig.ts

import { AppModule } from "@/lib/arquitect/model/appmodule";
import { Option } from "@/lib/model/base/option";


/**
 * AppConfig.getModulesMenu
 */
export class AppConfig {
    
    public static readonly INDEX: AppModule = new AppModule("./","desktop","Home");

    public static readonly MOD_DBMODEL_TOOLS: AppModule 
        = new AppModule("./dbmodeltools","create_dbmodels","Db Model Tools");

    public static readonly MOD_APPLICATIONS_TOOLS: AppModule 
        = new AppModule("./applications","create_applications","App. Generator");

    public static readonly MOD_MOTORS_TOOLS: AppModule 
        = new AppModule("./motors","create_motors","App. Motors");

    public static readonly MOD_COMP_TOOLS: AppModule 
        = new AppModule("./components","create_components","Comp. Creator");
  
    public static readonly MODULES: AppModule[] = [
        AppConfig.INDEX,
        AppConfig.MOD_DBMODEL_TOOLS,
        AppConfig.MOD_APPLICATIONS_TOOLS,
        AppConfig.MOD_MOTORS_TOOLS,
        AppConfig.MOD_COMP_TOOLS
    ]

    public static getModulesMenu():Option[]  {
        let options: Option[] = [];
        for(let idx = 0; idx < AppConfig.MODULES.length; idx++) {
            options.push(new Option(
                AppConfig.MODULES[idx].name,
                AppConfig.MODULES[idx].title));
        }
        return options;
    }

    public static getModulePath(name: string):string|null  {
        let navigationPath: string|null =null;
        if (name === AppConfig.INDEX.name) {
            navigationPath = AppConfig.INDEX.path;
        }
        if (name === AppConfig.MOD_DBMODEL_TOOLS.name) {
            navigationPath = AppConfig.MOD_DBMODEL_TOOLS.path;
        }
        else if (name === AppConfig.MOD_APPLICATIONS_TOOLS.name) {
            navigationPath = AppConfig.MOD_APPLICATIONS_TOOLS.path;
        }
        else if (name === AppConfig.MOD_MOTORS_TOOLS.name  ) {
            navigationPath = AppConfig.MOD_MOTORS_TOOLS.path;
        }
        else if (name === AppConfig.MOD_COMP_TOOLS.name) {
            navigationPath = AppConfig.MOD_COMP_TOOLS.path;
        }   
        return navigationPath;
    }

    
}//export class AppConfig