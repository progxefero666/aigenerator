//src\app_front\appconfig.ts

import { AppModule } from "@/lib/arquitect/model/appmodule";
import { Option } from "@/lib/model/base/option";


/**
 * AppConfig.getModulesMenu
 */
export class AppConfig {
    
    public static readonly INDEX: AppModule = new AppModule("./","desktop","Home");

    public static readonly MOD_DBMODEL_TOOLS: AppModule 
        = new AppModule("./dbmodeltools","ts_models_tools","Db Model Tools");

    public static readonly MOD_CREATE_PROJECTS: AppModule 
        = new AppModule("./projects","create_applications","App. Generator");

    public static readonly MOD_APP_MOTORS: AppModule 
        = new AppModule("./motors","create_motors_folders","App. Modules");

    public static readonly MOD_CREATE_COMP: AppModule 
        = new AppModule("./components","create_components","Comp. Creator");
  
    public static readonly MODULES: AppModule[] = [
        AppConfig.INDEX,
        AppConfig.MOD_DBMODEL_TOOLS,
        AppConfig.MOD_CREATE_PROJECTS,
        AppConfig.MOD_APP_MOTORS,
        AppConfig.MOD_CREATE_COMP
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
        else if (name === AppConfig.MOD_CREATE_PROJECTS.name) {
            navigationPath = AppConfig.MOD_CREATE_PROJECTS.path;
        }
        else if (name === AppConfig.MOD_APP_MOTORS.name  ) {
            navigationPath = AppConfig.MOD_APP_MOTORS.path;
        }
        else if (name === AppConfig.MOD_CREATE_COMP.name) {
            navigationPath = AppConfig.MOD_CREATE_COMP.path;
        }   
        return navigationPath;
    }

    
}//export class AppConfig