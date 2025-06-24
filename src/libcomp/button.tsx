//src\libcomp\button.tsx

import { TwDaisyCompBase } from "@/twdaisy/twdaisycomp"




/**
 * Component Input List
 *  author: xefero
 */
/*
            disabled={disabled}
            onClick={() => onclick(operation)}>
            {icon ?
                <div className={TwDaisyCompBase.getIconStyle(
                    icon,
                    iconsize ?? TwDaisyCompBase.ICON_SIZE_DEF,
                    iconcolor ?? TwDaisyCompBase.ICON_COLOR_DEF)} />
                : null}
            {text ? text : null}

*/
export interface ButtonProps {
    key?: string,
    visibled?: boolean,
    disabled?: boolean,
    operation?: string,
    onclick: (operation?: string) => void,
    text?: string,
    icon?: string,
    size?: string,
    color?: string,
    iconsize?: string | null,
    iconcolor?: string | null,
}
export const Button = ({ key, visibled, disabled, operation, onclick,
                         text, icon, size, color, iconsize, iconcolor }: ButtonProps) => {
    if (visibled!=null && visibled==true) {return null;}

    const operationId:string = operation ?? TwDaisyCompBase.OP_NOTDEF;
    const getButtonStyle = () => {
        if(text){
            return TwDaisyCompBase
                .getButtonStyle(size ?? TwDaisyCompBase.BUTTON_SIZE_DEF, color!);
        }
        else {
            return TwDaisyCompBase
                .getButtonStyle(size ?? TwDaisyCompBase.BUTTON_SIZE_DEF, color!);
        }        
    }

    const getIconStyle = () => {       
        if(text){
            return TwDaisyCompBase.getIconStyle(icon!,
                                        iconsize ?? TwDaisyCompBase.ICON_SIZE_DEF,
                                        iconcolor ?? TwDaisyCompBase.ICON_COLOR_DEF);
        }
        else {
             //btn-square
            return TwDaisyCompBase.getIconStyle(icon!,
                                        iconsize ?? TwDaisyCompBase.ICON_SIZE_DEF,
                                        iconcolor ?? TwDaisyCompBase.ICON_COLOR_DEF);
        }
    }
    
    return (        
        <button key={key} 
                className = {getButtonStyle()}                 
                onClick={() => onclick(operationId)}
                disabled={disabled}>                    
            {icon ? <span className={getIconStyle()} />:null}
            {text ? text : null}
        </button>
    )

}//end comp