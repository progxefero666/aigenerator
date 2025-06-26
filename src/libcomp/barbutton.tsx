//src\libcomp\xuicomp\base\barbutton.tsx

import { renderBarButtons } from "@/libcomp/themecomps";



/**
 * class BarButtonsCfg
 */
export class BarButtonsCfg {

    public operations:string[];
    public texts:string[];
    public color:string[]=[];
    public icons:string[];
    public visibled:boolean[]=[];
    public disabled:boolean[]=[];
    
    constructor(operations:string[],texts:string[],color:string[],icons:string[],disabled?:boolean[],visibled?:boolean[]){
        this.operations = operations;
        this.texts = texts;
        this.color = color;
        this.icons = icons;
        this.disabled = disabled ?? [];
        this.visibled = visibled ?? [];
    }

}//end class

/**
 * JSX Comp BarButtons
 * Tailwind - daisyUI 
 * use: @/twdaisy/twdaisycomp
 */
export interface BarButtonsProps {
    onclick: (operation: string) => void;
    barconfig: BarButtonsCfg;
    btnsize?: string;
    iconsize?: string;
    iconscolor?: string;
    classname?: string;
}
export function BarButtons({classname,onclick,barconfig,btnsize,iconsize,iconscolor}:BarButtonsProps) {
    const renderContent = () => (
        renderBarButtons(onclick,barconfig,btnsize??null,iconsize??null,iconscolor??null)
    );
    return classname ? (<div className={classname}>{renderContent()}</div>) 
                     : (renderContent());

}//end component
