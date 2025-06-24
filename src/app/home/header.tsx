//src\app\home\pageheader.tsx


import { Search } from "@/libcomp/search";
import { AppTheme } from "@/app_front/apptheme";


/**
 * Ai Manager Projects Header
 */
export interface IndexHeaderProps {
     ontest?: () => void;
}
export default function IndexHeader({ ontest }: IndexHeaderProps) {

    const maxLen: number = 50;
    const onSearchSubmit = (value:string): void => {
    }

    const executeOperation = (op_id?: string): void => {
    }

    const onButtonAddClick = () => {
        
    };

    return (

        <div className={AppTheme.LAYOUT_HEADER_STYLE}>

            {/*column left */}
            <div className="w-full flex flex-row items-center px-2 top-2">
                <div className="flex-1 flex items-center text-white text-2xl translate-y-[-4px]">
                    AI Projects
                </div>
            </div>

            {/*column center */}
            <div className="w-full flex flex-row pl-[6px]">


                <div className="w-[26%] flex flex-items-center" >
                    <Search placeholder="find" maxlen={maxLen}
                               onsubmit={onSearchSubmit}/>
                </div>

            </div>

            {/* column right */}
            <div className="w-full flex flex-row">
                config - user - about
            </div>

        </div>
    )

}//end
