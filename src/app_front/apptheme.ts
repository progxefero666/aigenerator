//src\app_front\apptheme.ts

import { AppConstants } from "./appconstants";

/**
 * Tailwind and DaisyUI lib
 * Themes with DaisyUI
 * Class for define compose class
 * class AppConstants.MODE_EDITION
 */

export enum ThemeColors { //btn-
    PRIMARY = "primary",
    PRIMARY_CONTENT = "primary-content",
    SECONDARY = "secondary",
    SECONDARY_CONTENT = "secondary-content",
    ACCENT = "accent",
    ACCENT_CONTENT = "accent-content",
    NEUTRAL = "neutral",
    NEUTRAL_CONTENT = "neutral-content",
    BASE_100 = "base-100",
    BASE_200 = "base-200",
    BASE_300 = "base-300",
    BASE_CONTENT = "base-content",
    INFO = "info",
    INFO_CONTENT = "info-content",
    SUCCESS = "success",
    SUCCESS_CONTENT = "success-content",
    WARNING = "warning",
    WARNING_CONTENT = "warning-content",
    ERROR = "error",
    ERROR_CONTENT = "error-content"
}

export enum ButtonsColors {
    PRIMARY = "btn-primary",
    PRIMARY_CONTENT = "btn-primary-content",
    SECONDARY = "btn-secondary",
    SECONDARY_CONTENT = "btn-secondary-content",
    ACCENT = "btn-accent",
    ACCENT_CONTENT = "btn-accent-content",
    NEUTRAL = "btn-neutral",
    NEUTRAL_CONTENT = "btn-neutral-content",
    BASE_100 = "btn-base-100",
    BASE_200 = "btn-base-200",
    BASE_300 = "btn-base-300",
    BASE_CONTENT = "btn-base-content",
    INFO = "btn-info",
    INFO_CONTENT = "btn-info-content",
    SUCCESS = "btn-success",
    SUCCESS_CONTENT = "btn-success-content",
    WARNING = "btn-warning",
    WARNING_CONTENT = "btn-warning-content",
    ERROR = "btn-error",
    ERROR_CONTENT = "btn-error-content"
}

export class AppTheme {

    public static readonly LAYOUT_COLOR: string = "bg-gray-900";
    public static readonly LAYOUT_STYLE: string = "w-full h-auto ".concat(AppTheme.LAYOUT_COLOR);

    public static readonly LAYOUT_HEADER_STYLE: string
        = "w-full h-auto grid grid-cols-[17%_65%_17%] border-b-1 mb-3 border-b-red-800 py-2";

    public static readonly BODY_COLOR: string = "bg-base-100";

    public static readonly BODY_STYLE: string = "w-full h-auto grid grid-cols-[17%_65%_17%]"

    public static readonly BODY_MONITOR_STYLE: string = "main_monitor w-full min-h-screen rounded-lg"

    public static readonly TEXT_BASE_COLOR: string = "text-white";
    public static readonly TEXT_BASE_SIZE: string = "text-base";

    public static readonly TEXT_SMALL_COLOR: string = "text-white";
    public static readonly TEXT_SMALL_SIZE: string = "text-sm";

    public static readonly TEXT_BIG_COLOR: string = "text-white";
    public static readonly TEXT_BIG_SIZE: string = "text-lg";

    public static readonly TEXT_H1_SIZE: string = "text-4xl";
    public static readonly TEXT_H2_SIZE: string = "text-3xl";
    public static readonly TEXT_H3_SIZE: string = "text-2xl";
    public static readonly TEXT_H4_SIZE: string = "text-xl";
    public static readonly TEXT_H5_SIZE: string = "text-lg";

    public static readonly TEXT_H1_COLOR: string = "text-white";
    public static readonly TEXT_H2_COLOR: string = "text-white";
    public static readonly TEXT_H3_COLOR: string = "text-white";
    public static readonly TEXT_H4_COLOR: string = "text-white";
    public static readonly TEXT_H5_COLOR: string = "text-white";

    public static readonly MENU_OPT_COLOR: string = "btn-accent";
    public static readonly MENU_OPT_ACT_COLOR: string = "btn-warning";

    public static readonly CARD_BORDER_COLOR: string = "border-zinc-500";
    public static readonly CARD_HEADER_BORDER_COLOR: string = "border-sky-500";

    public static readonly CARD_STYLE: string
        = "w-full flex flex-col bg-base-100 border border-zinc-500 rounded-lg p-2";

    public static readonly CARD_HEADER_BAR_STYLE: string
        = "w-full h-auto grid grid-cols-2 auto-cols-max  rounded-lg border border-sky-500";

    public static readonly CARD_HEADER_STYLE: string =
        "flex flex-row items-center pl-[6px] text-white text-xs"

    public static readonly CARD_TITLE_STYLE: string
        = "w-full flex items-center flex-row ml-[12px] text-white text-lg";

    public static readonly CARD_DATA_STYLE: string = "w-full h-auto p-2 rounded-md";

    public static readonly LIST_IOTEXT_STYLE: string
        = "w-full h-auto flex flex-col space-y-3 mb-4";

    public static readonly GRID_IOELEMS_STYLE: string
        = "w-full h-auto grid grid-cols-[25%_25%_25%_25%] mt-4 space-y-2";

    public static readonly C_CELL_STYLE = "w-full h-auto";

    public static readonly C_EDIT_STYLE: string = "input w-full bg-gray-700 rounded-md";
    public static readonly C_DISABLED_STYLE: string = "input w-full bg-gray-700 rounded-md";
    public static readonly C_READONLY_STYLE: string = "input w-full bg-gray-600 rounded-md";

    public static readonly C_INCLABEL_COL_STYLE: string =
        "w-full h-auto flex flex-col";

    public static readonly C_INCLABEL_ROW_STYLE: string =
        "w-full h-auto flex items-center grid grid-cols-[35%_65%] px-[8px]";

    public static readonly INPUT_CHECK_STYLE: string =
        "checkbox bg-gray-700 checked:bg-amber-500 text-black text-black border border-gray-300"


    public static readonly INPUT_CHECK_DISABLED_STYLE: string =
        "checkbox bg-gray-900 checked:bg-amber-500 text-black text-black border border-gray-300"

    public static readonly C_SELECT_EDIT_STYLE: string = "select w-full bg-gray-700"
    public static readonly C_SELECT_DISABLED_STYLE: string = "select w-full bg-gray-700"
    public static readonly C_SELECT_READONLY_STYLE: string = "select w-full bg-gray-700"

}//end class

/*
        const handleOnChange = (value: boolean) => {
            if (onchange) {

            }
        }

*/
/**
 * AppThemeUtil
 */
export class AppThemeUtil {

    static addSpace(str: string): string {
        return str.endsWith(AppConstants.CHAR_SPACE) ? str : str + AppConstants.CHAR_SPACE;
    }

    static join(style_0: string, style_1: string): string {
        return AppThemeUtil.addSpace(style_0).concat(style_1);;
    }

    static compose(styles: string[]): string {
        let result: string = "";
        for (let idx = 0; idx < styles.length; idx++) {
            if (idx == 0) { result = styles[idx]; }
            else { result = AppThemeUtil.join(result, styles[idx]); }
        }
        return result;
    }

}//end class