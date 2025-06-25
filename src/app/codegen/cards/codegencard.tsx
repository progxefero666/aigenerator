//src\app\appeditor\cards\appcard.tsx

import React, { useEffect, useRef, useState } from "react";
import { AppCard, AppTheme } from "@/app_front/apptheme";

const style_component: string 
= "w-full flex flex-col bg-base-100 p-[10px] rounded-lg border border-zinc-500";


/**
 * src\app_front\manapplications\appeditorcfg.ts
 */
export interface CodeGenCardProp {  
    code: string;
    execexport?: (code:string) => void;
}
export default function CodeGenCard({code,execexport}: CodeGenCardProp) {

    //const [barConfig, setBarConfig] = useState<BarButtonsCfg>(BARCFG_EXPORT);
    //const [collapse, setCollapse]   = useState<boolean>(false);    
    //const onCollapse = () => {setCollapse(!collapse)};
    
    const onClick = (opId?:string) => {
        execexport
    };

    return (
        <div className={style_component}>
            
            <div className={AppCard.CARD_DATA_STYLE}>
                <code style={{ 
                    whiteSpace: 'pre-wrap',
                    fontFamily: 'monospace',
                    fontSize: '14px',
                    lineHeight: '1.4'
                }}>
                    {code}
                </code>                
            </div>
        </div>
    )

} //end component


/*
    const renderHeader = () => {
        return (
            <div className={style_header}>
     
                <div className={style_header_title}>
                    <div>
                        {collapse ?
                            <Button onclick={onCollapse} 
                                    color="btn-primary"
                                    iconcolor={AppUiConst.ICON_COLLAPSE_COLOR}
                                    icon={AppUiConst.ICON_COLLAPSE_ON} />
                            :
                            <Button onclick={onCollapse} 
                                    color="btn-primary"
                                    iconcolor={AppUiConst.ICON_COLLAPSE_COLOR}                           
                                    icon={AppUiConst.ICON_COLLAPSE_OFF} />
                        }
                    </div>
                    <div className={style_title}>
                        <p className={AppTheme.TEXT_H3_SIZE}>Result</p>                                  
                    </div>
                </div>

     
                <BarButtons classname={CodeGenCfg.style_barbuttons}
                            barconfig={barConfig}
                            onclick={onClick} />
            </div>
        )
    };
   {renderHeader()}
*/