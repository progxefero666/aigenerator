//src\app\desktop\primarybar.tsx


import { AppThemeLayout, AppThemeMenus } from "@/app_front/apptheme";
import { Option } from "@/lib/model/base/option";
import TwDaisyMenu from "@/twdaisy/twdaisymenu";

/**
 * Page Index: Primary Bar
 */
interface PagePrimaryBarProps {
    modules: Option[];
    actmodule: string;
    chargemodule: (name: string) => void
}
export function PagePrimaryBar({ modules,chargemodule, actmodule }: PagePrimaryBarProps) {
    //useEffect(() => {}, []);
    return (
        <div className={AppThemeLayout.LAYOUT_PRIMARY_BAR}>
            <TwDaisyMenu onselection={chargemodule}
                options={modules}
                optactname={actmodule}
                optcolor={AppThemeMenus.MENU_OPT_COLOR}
                optactcolor={AppThemeMenus.MENU_OPT_ACT_COLOR} />
        </div>
    )
    /*
    const renderButton = (key:string,moduleName:string,moduleTitle:string) => {
        let buttonColor: string = "btn-primary";
        if (actmodule === moduleName) { buttonColor = "btn-warning"; }
        else { buttonColor = "btn-info"; }
        const buttonStyle: string = "btn btn-md text-md ".concat(buttonColor);
        return (
            <button key={key}
                className={buttonStyle}
                onClick={() => chargemodule(moduleName)}>
                {moduleTitle}
            </button>
        )
    }

    return (
        <div className={AppThemeLayout.LAYOUT_PRIMARY_BAR}>
            <div className="w-full h-auto  flex flex-col px-2 py-[10px] space-y-3 ">
                {modules.map((module, index) => (
                    renderButton(index.toString(), module.name, module.title)
                ))}
            </div>
        </div>
    )
    */
   
}//end
