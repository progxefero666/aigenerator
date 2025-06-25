//src\app_front\comp\themecard.tsx


import React, { forwardRef, useEffect, useRef, useState } from "react";
import { AppCard, AppThemeBars, AppThemeButtons, AppThemeCard, AppThemeTexts } from "@/app_front/apptheme";
import { Button } from "@/libcomp/button";
import { BarButtons, BarButtonsCfg } from "@/libcomp/barbutton";
import { AppConstants, AppUiConst } from "../appconstants";


/**
 * JSX Theme Card Component Base
 */
export interface ThemeCardProp {
    name?: string;
    title?: string;
    data?: string;
    barconfig?: BarButtonsCfg;
    operation?: string,
    exec: (operation?:string) => void,
}

export const ThemeCard = forwardRef<HTMLSelectElement, ThemeCardProp>(
    ({ name, data, title, barconfig, exec }, ref) => {

    const [collapse, setCollapse] = useState<boolean>(false);
    const [collapseIcon, setCollapseIcon] = useState<string>(AppUiConst.ICON_COLLAPSE_OFF);

    const onCollapse = () => {
        const new_collapse = !collapse;
        setCollapse(new_collapse)
        setCollapseIcon(new_collapse ? AppUiConst.ICON_COLLAPSE_ON :
            AppUiConst.ICON_COLLAPSE_OFF);
    };

    const onBarExecute = (opId: string) => {
        exec(opId);
    };

    const onExecute = (opId: string) => {
        exec(opId);
    };

    const renderHeader = () => {
        return (
            <div className={AppThemeCard.HEADER_STYLE}>

                <div className={AppThemeCard.HEADER_CONTENT_STYLE}>
                    <Button onclick={onCollapse}
                        color={AppThemeButtons.BUTTON_COLLAPSE_COLOR}
                        iconcolor={AppThemeButtons.ICON_COLLAPSE_COLOR}
                        icon={collapseIcon} />
                    <div className={AppThemeCard.HEADER_TITLE_STYLE}>
                        <p className={AppThemeTexts.TEXT_H3_SIZE}>{title}</p>
                    </div>
                </div>
                {barconfig ? <BarButtons classname={AppThemeBars.BAR_BUTTONS_STYLE}
                    barconfig={barconfig}
                    onclick={onBarExecute} /> : null}
            </div>
        )
    }

    const renderBody = () => {
        return (
            <div className={AppCard.CARD_DATA_STYLE}>
                {data}
            </div>            
        )
    }

    return (
        <div className={AppThemeCard.CONTAINER_STYLE}>
            {renderHeader()}
            {data ?
                renderBody() :
                <div className={AppCard.CARD_DATA_STYLE}>
                    {AppConstants.NOT_DEF}
                </div>
            }        
        </div>
    )

})//end component


/*
if(barconfig){
for(let idx=0;idx<barconfig.operations.length;idx++) {
    if(opId === barconfig?.operations[idx]) { 
        if(idx === 0) {}
        if(idx === 1) {}
        if(idx === 2) {}
        if(idx === 3) {}
        if(idx === 4) {}
        if(idx === 5) {}
    }   
}
}
*/
