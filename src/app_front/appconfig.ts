//src\app_front\appconfig.ts

import { AppModule } from "@/lib/arquitect/model/appmodule";

/**
 * Application Configuration
 */
export class AppConfig {
    
    public static readonly INDEX: AppModule = new AppModule("desktop","Home");

    public static readonly MOD_DBMODEL_TOOLS: AppModule = new AppModule("ts_models_tools","Db Model Tools");
    public static readonly MOD_APP_FOLDERS: AppModule = new AppModule("create_motors_folders","App. Modules");
    public static readonly MOD_CREATE_COMP: AppModule = new AppModule("create_components","Comp. Creator");
  
    public static readonly MODULES: AppModule[] = [
        AppConfig.INDEX,
        AppConfig.MOD_DBMODEL_TOOLS,
        AppConfig.MOD_APP_FOLDERS,
        AppConfig.MOD_CREATE_COMP
    ]


}//export class AppConfig