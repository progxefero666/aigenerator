//src\lib\xuicomp\common\search.tsx


import { useState } from "react";


import { ThemeColors } from "@/app_front/apptheme";
import { Button } from "../button";


/**
 * JSX Component Search
 *   author: Xefero
 */
export interface FilterIfc {
    disabled?:boolean;
    name: string;
    onchange: (name: string, value: string) => void;
    maxlen: number;
    placeholder: string;
}

export function Filter({name,disabled,onchange,placeholder,maxlen}:FilterIfc) {

    const [filterOn, setFilterOn] = useState<boolean>(true);
    const [iconColor, setIconColor] = useState<string>(ThemeColors.ACCENT);

    const handleOnChange = (value: string) => {
        onchange(name, value);
    }

    const onFilterClick = (operation?: string): void => {
        alert(filterOn);
        const filterValue = !filterOn;
        setFilterOn(filterValue);
        if (filterValue) {
            setIconColor(ThemeColors.NEUTRAL);
        }
        else {
            setIconColor(ThemeColors.ACCENT);
        }
    }
    //translate-y-[-4px]

    return (
        <div className="w-full flex flex-row items-center">

            {/* input text */}
            <div className="w-[200px] h-auto">
                <input  name={name}
                        className="input input-sm w-full bg-gray-400 text-black rounded-md"
                        type="text"
                        placeholder={placeholder}
                        onChange={(e) => handleOnChange(e.target.value)}
                        maxLength={maxlen} />
            </div>
            
            {/* filter button */}
            <div className="w-auto h-auto">
                <Button                    
                    onclick={onFilterClick}
                    operation={"filteron"}
                    icon={"ti-filter"}
                    iconcolor={iconColor} />
            </div>

        </div>
    )

}//end comp
