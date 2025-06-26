//src\app_front\manapplications\appeditorcfg.ts


/**
 * class CodeGenStyle.CARD_CODE_HEADER_STYLE
 */
export class CodeGenStyle {

    public static readonly BODY_STYLE: string = "w-full h-auto grid grid-cols-[14%_41%_41%_4%]";
    public static readonly HEADER_STYLE: string 
        = "w-full h-auto grid grid-cols-[14%_41%_41%_4%] border-b-1 mb-3 border-b-red-800 py-2";

    public static readonly EDITOR_STYLE: string = "w-full h-auto flex flex-col space-y-2 pr-4 ";
    public static readonly EDITOR_HEADER_STYLE: string 
        = "w-full h-auto flex flex-row p-2 space-x-2  rounded-lg border border-sky-500";
        
    public static readonly EDITOR_AREA_STYLE: string = "w-full h-auto flex flex-col bg-green-450";
    
    public static readonly  style_component: string 
        = "w-full flex flex-col bg-base-100 p-[10px] rounded-lg border border-zinc-500";

    public static readonly OUTPUT_MON_HEADER_STYLE: string = "w-full h-auto flex flex-row items-center pb-1 justify-between rounded-lg border border-sky-500";

    public static readonly  OUTPUT_MON_HEADER_TITLE_STYLE: string = "flex flex-row items-center pl-3 pr-1 text-white text-xs flex-1";

    public static readonly CARD_CODE_HEADER_STYLE: string 
        = "w-full h-auto flex flex-row items-center pb-1 justify-between rounded-lg border border-neutral-800";
    
        public static readonly CARD_CODE_HEADER_TITLE_STYLE: string 
        = "flex flex-row items-center pl-3 pr-1 text-white text-xs flex-1";



}//end class

