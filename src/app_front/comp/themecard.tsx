//src\app_front\comp\themecard.tsx

import React, { forwardRef, useState } from "react";
import { Button } from "@/libcomp/button";
import { BarButtons, BarButtonsCfg } from "@/libcomp/barbutton";
import { AppUiConst } from "@/app_front//appconstants";
import { AppCard, AppThemeBars, AppThemeButtons, AppThemeCard, AppThemeTexts }
    from "@/app_front/apptheme";

/**
 * JSX Theme Card Component Base
 */
export interface ThemeCardProp {
    name?: string;
    title?: string;
    data?: string;
    children?: React.ReactNode;
    barconfig?: BarButtonsCfg;
    operation?: string,
    exec: (operation: string | null, name: string | null) => void,
}

export const ThemeCard = forwardRef<HTMLDivElement, ThemeCardProp>(
    ({ name, children, data, title, barconfig, exec }, ref) => {

    const [collapse, setCollapse] = useState<boolean>(false);
    const [collapseIcon, setCollapseIcon] = useState<string>(AppUiConst.ICON_COLLAPSE_OFF);

    /*
    useEffect(() => {
        const init=():void=>{} 
        init();        
    }, []) 
    */
    const onCollapse = () => {
        const new_collapse = !collapse;
        setCollapse(new_collapse)
        setCollapseIcon(new_collapse ? AppUiConst.ICON_COLLAPSE_ON :
            AppUiConst.ICON_COLLAPSE_OFF);
    };

    const onBarExecute = (opId: string) => {
        if (name) { exec(opId, name); }
        else { exec(opId, null); }
    };

    const onExecute = (opId: string) => {
        exec(opId, null);
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

     const renderMainContent = () => {
        if (children) {
            return children;
        }
        else {
            return (
                <>
                    {data ?
                        <div className={AppCard.CARD_DATA_STYLE}>
                            {data}
                        </div>
                        : 
                        <div className={AppCard.CARD_DATA_STYLE}>
                            No data available
                        </div>
                    }
                </>
            )
        }
    }

    return (
        <div className={AppThemeCard.CONTAINER_STYLE}>
            {renderHeader()}
            {collapse ? null : renderMainContent()}
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
