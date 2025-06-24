//src\app\appeditor\header.tsx

import { Search } from "@/libcomp/search";
import { AppThemifyIcons } from "@/style/appthicons";
import { ButtonOld } from "@/libcomp/button_old";
import { Button } from "@/libcomp/button";
import { AppConstants, AppTexts, AppUiConst } from "@/app_front/appconstants";
import { AppTheme } from "@/app_front/apptheme";
import { InputFiles } from "@/libcomp/inputfiles";
import { useRef } from "react";
import { CodeGenCfg } from "./motor/cgcfg";


/**
 * Ai Manager Projects Header
 */
export interface PageHeaderProp {
    value?:string;
     //onfileloaded?: (file: File) => void;
}
export default function PageHeader({ value }: PageHeaderProp) {
    const inputFilesRef = useRef<HTMLInputElement>(null);

    const maxLen: number = 50;
    const onSearchSubmit = (value:string): void => {
    }

    const onButtonClick = (operation?: string) => {
        
    };
    
    return (

        <div className={CodeGenCfg.HEADER_STYLE}>

            {/*column left */}
            <div className="w-full flex flex-row items-center px-4 top-2">
                <div className="flex-1 flex items-center text-white text-2xl translate-y-[-4px]">
                    Code Gen
                </div>
                <div>                   
                    <Button icon={AppUiConst.ICON_RUN}
                            operation={AppConstants.NAV_BACK}                            
                            onclick={onButtonClick}  />                           
                </div>
            </div>

            {/*column center classname="hidden" */}
            <div className="w-full flex flex-row ">

                <div className="w-[26%] flex flex-items-center" >

                </div>
            </div>

            {/* column right */}
            <div className="w-full flex flex-row">
                
            </div>

        </div>
    )

}//end
