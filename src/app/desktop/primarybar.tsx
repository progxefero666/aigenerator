//

import { AppConfig } from "@/app_front/appconfig";
import { AppMessages } from "@/app_front/appconstants";
import { AppThemeLayout } from "@/app_front/apptheme";
import { AppModule } from "@/lib/arquitect/model/appmodule";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

/**
 * Page: Primary Bar
 * AppConfig.MODULES
 */
interface PagePrimaryBarProps {
    modules: AppModule[];
    actmodule?: string;
    chargemodule: (name: string) => void
}
export function PagePrimaryBar({ modules,chargemodule, actmodule }: PagePrimaryBarProps) {
    const router = useRouter();

    useEffect(() => {
    }, []);

    const onModuleSelected = (name: string) => {
        let navigationPath: string|null = AppConfig. getModulePath(name);
        if(navigationPath!== null){
            router.push(navigationPath);
        }
        else {
            alert(AppMessages.ERROR_MODULE_NOTFOUND.concat(name));
        }
    };

    const renderButton = (key:string,moduleName:string,moduleTitle:string) => {
        let buttonColor: string = "btn-primary";
        if (actmodule === moduleName) { buttonColor = "btn-warning"; }
        else { buttonColor = "btn-info"; }
        const buttonStyle: string = "btn btn-md text-md ".concat(buttonColor);
        return (
            <button key={key}
                className={buttonStyle}
                onClick={() => onModuleSelected(moduleName)}>
                {moduleTitle}
            </button>
        )
    }

    return (
        <div className={AppThemeLayout.LAYOUT_PRIMARY_BAR}>

            { /* menu options */}
            <div className="w-full h-auto  flex flex-col px-2 py-[10px] space-y-3 ">
                {modules.map((module, index) => (
                    renderButton(index.toString(), module.name, module.title)
                ))}
            </div>

        </div>
    )

}//end
