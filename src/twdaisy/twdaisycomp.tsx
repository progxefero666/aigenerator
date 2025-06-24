//src\twdaisy\twdaisycomp.tsx

import { useEffect, useState } from "react";
import { TwDaisyUtil } from "./twdaisyutil";
import { BarButtonsCfg } from "@/libcomp/model/barbuttonscfg";
import { AppConstants, AppUiConst } from "@/app_front/appconstants";


/**
 * class TwDaisyCompBase.ICON_COLOR_DEF
 * TwDaisyCompBase.OP_NOTDEF
 */
export class TwDaisyCompBase {

    public static OP_NOTDEF :string = "undefined";

    public static BUTTON_SIZE_DEF: string = "md";
    public static BUTTON_COLOR_DEF: string = "btn-primary";

    public static ICON_COLOR_DEF: string = "icon-color-white";
    public static ICON_SIZE_DEF: string = "sm";

    public static readonly BAR_ROW_STYLE: string = "w-auto h-auto flex flex-row gap-3"

    public static readonly ALERTS_SUCCESS_STYLE: string
        = "alert alert-success flex justify-center fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-auto";

    //icon-color-white1
    public static ICON_STYLE_BASE: string = TwDaisyUtil
        .addSpace(TwDaisyCompBase.ICON_COLOR_DEF)
        .concat("ti ti-").concat(TwDaisyCompBase.ICON_SIZE_DEF);

    public static getButtonStyle = (size: string | null, color: string | null): string => {
        const size_apply: string = size ?? TwDaisyCompBase.BUTTON_SIZE_DEF;
        const color_apply: string = color ?? TwDaisyCompBase.BUTTON_COLOR_DEF;

        const style: string = "btn ".concat("btn-").concat(size_apply)
            .concat(" text-").concat(size_apply)
            .concat(" ").concat(color_apply);
        return style;
    }

    public static getIconStyle = (name: string, size: string | null, color: string | null): string => {
        const size_apply: string = size ?? TwDaisyCompBase.ICON_SIZE_DEF;
        const color_apply: string = color ?? TwDaisyCompBase.ICON_COLOR_DEF;
        const style: string = TwDaisyUtil.addSpace(color_apply)
            .concat("ti ti-").concat(size_apply)
            .concat(" ").concat(name);
        return style;
    }

}//end class

/**
 * render JSX Button
 */
export const renderButton = (key: string, operation: string,
    onclick: (operation: string) => void,
    size: string,
    iconsize: string | null,
    iconcolor: string | null,
    disabled: boolean, visibled: boolean,
    text: string,
    color: string,
    icon: string | null) => {
    if (!visibled) { return null }
    return (
        <button key={key} className={TwDaisyCompBase.getButtonStyle(size ?? TwDaisyCompBase.BUTTON_SIZE_DEF, color)}
            disabled={disabled}
            onClick={() => onclick(operation)}>
            {icon ?
                <div className={TwDaisyCompBase.getIconStyle(
                    icon,
                    iconsize ?? TwDaisyCompBase.ICON_SIZE_DEF,
                    iconcolor ?? TwDaisyCompBase.ICON_COLOR_DEF)} />
                : null}
            {text ? text : null}
        </button>
    )

}//end render

/**
 * render JSX Bar Buttons 
 */
export const renderBarButtons = (onclick: (operation: string) => void,
    barconfig: BarButtonsCfg,
    btnsize: string | null,
    iconsize: string | null,
    iconcolor: string | null) => {
    return (
        <div className={TwDaisyCompBase.BAR_ROW_STYLE}>
            {barconfig.operations.map((op: string, index: number) => (
                renderButton(index.toString(),
                    op, onclick,
                    btnsize ?? TwDaisyCompBase.BUTTON_SIZE_DEF,
                    iconsize ?? TwDaisyCompBase.ICON_SIZE_DEF,
                    iconcolor ?? TwDaisyCompBase.ICON_COLOR_DEF,
                    barconfig.disabled[index],
                    barconfig.visibled[index],
                    barconfig.texts[index],
                    barconfig.color[index],
                    barconfig.icons[index])
            ))}
        </div>
    )

}//end render

/**
 * render JSX Option
 */
export const renderOption = (key: string,
    callback: (name: string) => void,
    name: string, text: string,
    color: string, size?: string) => {

    const size_apply: string | null = size ?? null;

    let style: string = TwDaisyUtil.addSpace(TwDaisyCompBase.getButtonStyle(size_apply, color));
    style += color;
    return (
        <button key={key} className={style} onClick={() => callback(name)}>
            {text}
        </button>
    )

} //end render


export const renderAlert = (message: string) => {
    return (
        <div className={TwDaisyCompBase.ALERTS_SUCCESS_STYLE}>
            <div className=
                {TwDaisyCompBase.getIconStyle(AppUiConst.ICON_ACT_SAVE, null, null)} />
            <span>{message}</span>
        </div>
    )
}

/*
export const renderAlert = (type: string, message: string,
    icon: string | null, iconsize: string | null, iconcolor: string | null) => {

let visible: boolean = true;        
    const onClose = () => {
        visible = false;
    }
    const init = () => {
         setTimeout(() => onClose, 3000);
    }
    useEffect(() => {
       init();
    }, []);


    return (
        <>
            {visible ?
                <div className={TwDaisyCompBase.ALERTS_SUCCESS_STYLE}>
                    {icon ?
                        <div className={TwDaisyCompBase.getIconStyle(
                            icon,
                            iconsize ?? TwDaisyCompBase.ICON_SIZE_DEF,
                            iconcolor ?? TwDaisyCompBase.ICON_COLOR_DEF
                        )} />
                        : null}
                    <span>{message}</span>
                </div>
                : null}
        </>
    );
};
*/