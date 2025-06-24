//src\app_front\appconfig.ts

import { AppModule } from "@/lib/arquitect/model/appmodule";

/**
 * Application Configuration
 */
export class AppConfig {
    
    public static readonly MOD_SQLTOOLS: AppModule    = new AppModule("sql_tools","Sql Tools");
    public static readonly MOD_CODE_TYPESCRIPT: AppModule   = new AppModule("code_typescript","Class files");
    public static readonly MOD_COMPONENTS: AppModule  = new AppModule("gen_components","Gen. Comp.");

    public static readonly MODULES: AppModule[] = [
        AppConfig.MOD_SQLTOOLS,
        AppConfig.MOD_CODE_TYPESCRIPT,
        AppConfig.MOD_COMPONENTS
    ]
    public static readonly ACTIVE_MOD: AppModule = AppConfig.MODULES[0];

}//export class AppConfig