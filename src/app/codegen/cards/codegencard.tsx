//src\app\appeditor\cards\appcard.tsx

import React, { useEffect, useRef, useState } from "react";
import { AppThemifyIcons } from "@/style/appthicons";

import { FieldWrapper } from "@/libcomp/fieldwrapper";
import { BarButtons } from "@/libcomp/barbutton";
import { Application } from "@/client/models/Application";
import { ButtonOld } from "@/libcomp/button_old";

import { ProgLangCodeService } from "@/client/service/ProglanguagesService";
import { ApptypesService } from "@/client/service/ApptypesService";


import { InputCheck } from "@/libcomp/inputcheck";
import { AppDef } from "@/app_front/manapplications/applicationdef";
import { InputText } from "@/libcomp/inputtext";
import { InputSelect } from "@/libcomp/inputselect";


import { MdPreview } from 'md-editor-rt';
import 'md-editor-rt/lib/preview.css';
import 'md-editor-rt/lib/style.css';
import 'md-editor-rt/lib/preview.css';
import { BarButtonsCfg } from "@/libcomp/model/barbuttonscfg";
import { AppConstants, AppUiConst } from "@/app_front/appconstants";
import { BARCFG_EXPORT, BARCFG_EDITION } from "@/app_front/uimodel/uimodelbars";
import { AppTheme } from "@/app_front/apptheme";
import { OutputText } from "@/libcomp/ouputtext";
import { Button } from "@/libcomp/button";
import { CodeGenCfg } from "../motor/cgcfg";

const style_component: string = "w-full flex flex-col bg-base-100 p-[10px] rounded-lg border border-zinc-500";


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
            <div className={AppTheme.CARD_DATA_STYLE}>
                <code>
                    <p>{code}</p>
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