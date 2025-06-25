//src\app_front\comp\themecard.tsx


import React, { forwardRef, useEffect, useRef, useState } from "react";
import { AppCard, AppTheme, AppThemeCard, AppThemeTexts } from "@/app_front/apptheme";
import { Button } from "@/libcomp/button";
import { CodeGenCfg } from "@/app/codegen/modconfig";
import { BarButtons, BarButtonsCfg } from "@/libcomp/barbutton";
import { AppUiConst } from "../appconstants";

/*

const style_component: string = "w-full flex flex-col bg-base-100 p-[10px] rounded-lg border border-zinc-500";


const style_barbuttons: string = "h-auto mr-[6px] my-[6px] flex justify-end";
*/

const style_header: string = "w-full h-auto flex flex-row items-center justify-between rounded-lg border border-sky-500";
const style_header_title: string = "flex flex-row items-center pl-[6px] text-white text-xs flex-1";
const style_title: string = "flex items-center flex-row ml-[12px] text-white text-lg flex-1";
/**
 * JSX Theme Card Component Base
 */
export interface ThemeCardProp {  
    barconfig: BarButtonsCfg;
    exec?: (code:string) => void;
}

export const ThemeCard = forwardRef<HTMLSelectElement,ThemeCardProp>(({barconfig,exec},ref) => {

    const [collapse, setCollapse]   = useState<boolean>(false);    
    const onCollapse = () => {setCollapse(!collapse)};
    
    const onClick = (opId?:string) => {
        
    };

    return (
        <div className={AppThemeCard.CARD_CONTAINER_STYLE}>
                        <div className={style_header}>
     
                <div className={style_header_title}>
                    <div>
                        {collapse ?
                            <Button onclick={onCollapse} 
                                    color="btn-primary"
                                    iconcolor={AppUiConst.ICON_COLLAPSE_COLOR}
                                    icon={AppUiConst.ICON_COLLAPSE_ON} />
                            :
                            <Button onclick={onCollapse} 
                                    color="btn-primary"
                                    iconcolor={AppUiConst.ICON_COLLAPSE_COLOR}                           
                                    icon={AppUiConst.ICON_COLLAPSE_OFF} />
                        }
                    </div>
                    <div className={style_title}>
                        <p className={AppThemeTexts.TEXT_H3_SIZE}>Result</p>                                  
                    </div>
                </div>

     
                <BarButtons classname={CodeGenCfg.style_barbuttons}
                            barconfig={barconfig}
                            onclick={onClick} />
            </div>
            <div className={AppCard.CARD_DATA_STYLE}>
               theme card              
            </div>
        </div>
    )

})//end component
