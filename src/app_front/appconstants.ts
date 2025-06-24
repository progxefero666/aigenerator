//src\app_front\appconstants.ts

/**
 * class AppConstants.ICON_RUN
 */
export class AppConstants {

    public static readonly CHAR_SPACE:string = " ";

    public static readonly NOT_DEF:string = "undefined";
    public static readonly NAV_BACK : string = "navigation_back";

    public static readonly ACT_OPEN:string = "open";
    public static readonly ACT_SAVE:string = "save";
    public static readonly ACT_EXPORT:string = "export";

    public static readonly MODE_INSERT:string = "insert";
    public static readonly MODE_EDITION:string = "edit";
    public static readonly MODE_READONLY:string = "read";

    public static readonly ACT_COLLECTION_CLEAR:string = "insert";
    public static readonly ACT_ITEM_INSERT:string = "insert";
    public static readonly ACT_ITEM__UPDATE:string = "update";
    public static readonly ACT_ITEM__DELETE:string = "delete";
   
    public static readonly DISPLAY_ROW:string = "display-row";
    public static readonly DISPLAY_COLUMN:string = "display-col";

    public static readonly INPUT_AUDIO_FORMATS:string = ".wav,.mp3,.aac"
    public static readonly INPUT_IMAGE_FORMATS: string = ".jpg,.png,.jpeg";
    public static readonly INPUT_VIDEO_FORMATS = ".mp4,.avi";  

}//end class

/**
 * class AppUiConst.ICON_COLLAPSE_COLOR
 */
export class AppUiConst {

    public static readonly COLOR_ACT_OPEN:string     = "btn-info";
    public static readonly COLOR_DELETE:string       = "btn-success";
    public static readonly COLOR_MODE_EDITION:string = "btn-success";
    public static readonly COLOR_ACT_SAVE:string     = "btn-warning";
    public static readonly COLOR_EXPORT:string     = "btn-info";
    public static readonly COLOR_RUN:string     = "btn-info";

    
    public static readonly ICON_COLLAPSE_OFF:string = "ti-angle-up"; 
    public static readonly ICON_COLLAPSE_ON:string = "ti-angle-down"; 
    public static readonly ICON_COLLAPSE_COLOR:string = "black"; 

    public static readonly ICON_OPEN:string = "ti-eye";
    public static readonly ICON_DELETE:string = "ti-trash";
    public static readonly ICON_MODE_EDITION:string = "ti-write";
    public static readonly ICON_ACT_SAVE:string = "ti-save";
    public static readonly ICON_RUN:string = "ti-control-play";
    public static readonly ICON_EXPORT:string = "ti-export";
    

}//end class

/**
 * AppTexts.SAVE
 */
export class AppTexts {
    
    public static readonly OPEN : string = "Open";
    public static readonly SAVE : string = "Save";
    public static readonly RUN : string = "Run";
    public static readonly EXPORT: string = "Export";   

}//end class
