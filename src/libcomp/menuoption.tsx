//src\lib\xuicards\cardmenuoption.tsx

import React from "react";
import { AppThemifyIcons } from "@/style/appthicons";

export interface CardMenuOptionIfc {
    name: string;
    text: string;
    onselection: (operation: string) => void;
    iconname?: string;
    iconcolor?: string;
    iconsize?: string;
}
export function CardMenuOption({ name, text, onselection, iconname, iconsize, iconcolor }: CardMenuOptionIfc) {

    let iconclass: string = "undefined";
    if (iconname) {
        const icon_size: string = iconsize ?? AppThemifyIcons.DEF_SIZE;
        iconclass = AppThemifyIcons.getIconClass(iconname, icon_size, iconcolor);
    }

    const handleOnClick = () => {
        onselection(name);
    };

    return (
        <div className="card_menuitem w-full cursor-pointer"
             onClick={handleOnClick}>
            <div className="flex flex-row text-left justify-start items-center">
                {iconname ? <div className={iconclass} /> : null}                                
                <div className="ml-2">
                    {text}
                </div>                
                
            </div>
        </div>
    )

} //end component

