//src\app_front\comp\themecard.tsx


import React, { forwardRef, useEffect, useRef, useState } from "react";
import { AppCard, AppThemeBars, AppThemeCard, AppThemeTexts } from "@/app_front/apptheme";
import { Button } from "@/libcomp/button";
import { BarButtons, BarButtonsCfg } from "@/libcomp/barbutton";
import { AppUiConst } from "../appconstants";

/*

const style_component: string = "w-full flex flex-col bg-base-100 p-[10px] rounded-lg border border-zinc-500";


const style_barbuttons: string = "h-auto mr-[6px] my-[6px] flex justify-end";
*/




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
        <div className={AppThemeCard.CONTAINER_STYLE}>
            <div className={AppThemeCard.HEADER_STYLE}>
     
                <div className = {AppThemeCard.HEADER_CONTENT_STYLE}>
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

                    <div className={AppThemeCard.HEADER_TITLE_STYLE}>
                        <p className={AppThemeTexts.TEXT_H3_SIZE}>Result</p>                                  
                    </div>
                </div>

     
                <BarButtons classname={AppThemeBars.BAR_BUTTONS_STYLE}
                            barconfig={barconfig}
                            onclick={onClick} />
            </div>
            <div className={AppCard.CARD_DATA_STYLE}>
               theme card              
            </div>
        </div>
    )

})//end component
