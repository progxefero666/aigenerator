//src\libcomp\ouputtext.tsx

import { forwardRef, useState } from "react";


const contStyle: string = "w-full h-auto flex items-center grid grid-cols-[35%_65%] px-[8px]";
const cellStyle:string = "w-full h-auto";

export interface OutputTextIfc {
    display?:string;
    value: string;
    label?: string;
    maxlen?: number;
}
export function OutputText({display, value, label }: OutputTextIfc) {
    
    const renderContent = () => (
        <div className="input w-full bg-gray-700 rounded-md">
            <p>{value}</p>
        </div>
    );

    // Decide si envolver el contenido en un div con className o no
    return  (
        <div className="w-full h-auto rounded-md">
            {label && <p className="w-full p-0 mx-0 mt-0 mb-1">{label}</p>}
            {renderContent()}
        </div>
    ) 

}//end comp

