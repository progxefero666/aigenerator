//src\libcomp\xuicomp\base\barbutton.tsx

import { renderBarButtons } from "@/twdaisy/twdaisycomp";
import { BarButtonsProps } from "./types/interfaces";


/**
 * JSX Comp BarButtons
 * Tailwind - daisyUI 
 * use: @/twdaisy/twdaisycomp
 */
export function BarButtons({classname,onclick,barconfig,btnsize,iconsize,iconscolor}:BarButtonsProps) {
    const renderContent = () => (
        renderBarButtons(onclick,barconfig,btnsize??null,iconsize??null,iconscolor??null)
    );
    return classname ? (<div className={classname}>{renderContent()}</div>) 
                     : (renderContent());

}//end component
