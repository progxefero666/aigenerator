//src\libcomp\inputselect.tsx

import { AppTheme } from "@/app_front/apptheme";
import { forwardRef, useEffect, useState } from "react";


interface InputSelectProps {
    name: string;
    inline?: boolean;
    readonly?: boolean;
    disabled?: boolean;
    collection: string[];
    label?: string;
    placeholder?: string;
    defaultvalue?: string;
    maxlen?: number;
    autofocus?: boolean; 
    onchange?: (value: string) => void;
}
export const InputSelect = forwardRef<HTMLSelectElement, InputSelectProps>(({
                           name,collection, label,placeholder,defaultvalue,
                           inline, readonly, disabled, 
                           maxlen, autofocus, onchange }, ref) => {

        const showInline:boolean = inline ?? false;
        const isReadOnly:boolean = readonly ?? false;
        const isDisabled:boolean = disabled ?? false;

        const handleOnChange = (value: string) => {
            if (onchange) {
                onchange(value);
            }
        }

        const renderReadComp = () => {
            return (
                <div className={AppTheme.C_READONLY_STYLE}>
                    <p>{defaultvalue}</p>
                </div>          
            )  
        }

        const renderEditComp = () => {
            let cell_style:string = "";
            if(isDisabled){cell_style = AppTheme.C_SELECT_DISABLED_STYLE;}
            else          {cell_style = AppTheme.C_SELECT_EDIT_STYLE;}

            return (
                <select className={cell_style}
                        name={name} 
                        ref={ref!} 
                        defaultValue={defaultvalue}
                        disabled={disabled}
                        onChange={(e) => handleOnChange(e.target.value)} >
                            
                    {collection.map((item, index) => (
                        <option key={index} value={item}>
                            {item}
                        </option>
                    ))}
                </select>              
            ) 
        }

        const renderRowSimpleContent = () => {
            return (
                <div className={AppTheme.C_CELL_STYLE}>
                    {isReadOnly ? renderReadComp() : 
                                  renderEditComp() }
                </div>
            )            
        }
        
        const renderRowLabelContent = () => { 
            return (
                <div className={AppTheme.C_INCLABEL_ROW_STYLE}>
                    <div className={AppTheme.C_CELL_STYLE}>
                        {label}
                    </div>
                    {renderRowSimpleContent()}
                </div>
            )        
        }
 
        const renderColSimpleContent = () => {
            return (            
                <div className={AppTheme.C_CELL_STYLE}>
                    {isReadOnly ? renderReadComp() : 
                                  renderEditComp() }                        
                </div>
            )             
        }

        const renderColLabelContent = () => {
            return (
                <div className={AppTheme.C_INCLABEL_COL_STYLE}>
                    {label}      
                    {renderColSimpleContent()}                                       
                </div>
            )        
        }        

        return (
            <>
            {showInline?
                label ? renderRowLabelContent() :
                        renderRowSimpleContent()
            :
                label ? renderColLabelContent() :
                        renderColSimpleContent()
            }                      
            </>
        )
    }

)//end component

/*
            <>
            {showInline}?
                {label? renderRowLabelContent() :
                        renderRowSimpleContent()}
            :
                {label? renderColLabelContent() :
                        renderColSimpleContent()}            
            </>
{label && <p className="w-full p-0 mx-0 mt-0 mb-1">{label}</p>}
            <input
                ref={ref}
                type="text"                            
                name={name}
                className={AppTheme.C_CELL_STYLE}
                placeholder={placeholder}
                defaultValue={defaultvalue}
                onChange={(e) => handleOnChange(e.target.value)}
                maxLength={maxlen}
                disabled={disabled}
                autoFocus={autofocus}  />            
        }
*/
        /*
        const renderColContent = () => {
 
            if(readonly && readonly ==true){
                return (
                    <></>
                )
            }
            else if(disabled && disabled ==true){
                return (
                    <></>
                )                
            }
            return (
                <>
                </>
            )
        }
        */