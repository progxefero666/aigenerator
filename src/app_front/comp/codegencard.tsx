//src\app\appeditor\cards\appcard.tsx

import React, { useEffect, useRef, useState } from "react";
import { AppCard, AppTheme } from "@/app_front/apptheme";
import { CodeGenStyle } from "@/codegen/cgstyle";


/**
 * src\app_front\manapplications\appeditorcfg.ts
 */
export interface CardOutputCodeProp {  
    code: string;
    execexport?: (code:string) => void;
}
export default function CardOutputCode({code,execexport}: CardOutputCodeProp) {
    
    const onClick = (opId?:string) => {
        execexport
    };

    const codeStyle =
            {whiteSpace: 'pre-wrap',
             fontFamily: 'monospace',
             fontSize: '14px',
             lineHeight: '1.4' };

    return (
        <div className={CodeGenStyle.style_component}>            
            <div className={AppCard.CARD_DATA_STYLE}>
                <code style={codeStyle}>
                    {code}
                </code>                
            </div>
        </div>
    )

} //end component
