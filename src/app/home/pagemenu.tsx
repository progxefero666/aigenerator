//src\app\home\pagemenu.tsx

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AppModule } from "@/lib/arquitect/model/appmodule";
import { AppConfig } from "@/app_front/appconfig";


/**
 * Desktop Menu JSX
 */
export interface IndexMenuProps {
    defmodulename?: () => void;
}
export default function IndexMenu({ defmodulename }: IndexMenuProps) {
    const router = useRouter();

    const [modules, setModules] = useState<AppModule[]>(AppConfig.MODULES);
    const [actmodule, setActiveModule] = useState<AppModule>(AppConfig.ACTIVE_MOD);

    useEffect(() => {

    }, []);

    const onModuleSelected = (name: string) => {
  
        if (name === AppConfig.MOD_SQLTOOLS.name) {
            //router.push("./aichatbot"); 
            router.push("./codegen"); 
        }
        if (name === AppConfig.MOD_CODE_TYPESCRIPT.name) {
            router.push("./codegen"); 
        }
        else if (name === AppConfig.MOD_COMPONENTS.name  ) {
            router.push("./codegen"); 
        }
    };


    const renderButton = (key: string, module: AppModule) => {

        let buttonColor: string = "btn-primary";
        if (actmodule.name === module.name) { buttonColor = "btn-warning"; }
        else { buttonColor = "btn-info"; }
        const buttonStyle: string = "btn btn-md text-md ".concat(buttonColor);

        return (
            <button key={key}
                className={buttonStyle}
                onClick={() => onModuleSelected(module.name)}>
                {module.title}
            </button>
        )
    }


    return (
        <div className="w-full h-auto  flex flex-col px-2 py-[10px] space-y-3 ">
            {modules.map((module, index) => (
                renderButton(index.toString(), module)
            ))}
        </div>
    )

}//end
