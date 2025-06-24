//src\twdaisy\twdaisymenu.tsx


import { Option } from "@/lib/common/model/base/option";
import { renderOption } from "@/twdaisy/twdaisycomp";

/**
 * comp: JSX Menu
 * use:  @/twdaisy/twdaisycomp
 * Libs: Tailwind and daisyUI
 * desc: use options array and callback function
 * 
 * daisy comp:button
 *   https://daisyui.com/components/button/
 * 
 * parameters:
 *      optcolor: example "btn-info"
 *      optactcolor: example "btn-warning"
 *      size: "md"
 *      options: options array
 *      optactname:active option
 *      onselection: callback function
 */
export interface TwDaisyMenuProp {
    size?:string;
    optcolor:string;
    optactcolor:string;
    optactname:string;    
    options:Option[]
    onselection: (name:string) => void;
}
export default function TwDaisyMenu({size, optcolor, optactcolor,
                                     options, optactname, onselection}:TwDaisyMenuProp) {
   
    const renderButton = (key:string,name:string,title:string) => { 
        const color = optactname === name ? optactcolor : optcolor;
        return renderOption(key,onselection,name,title,color,size);
    }

    return (
        <div className="w-full h-auto  flex flex-col px-2 py-[10px] space-y-3 ">
            {options.map((section, index) => (
                renderButton(index.toString(),section.name,section.title)
            ))}
        </div>
    )

}//end
