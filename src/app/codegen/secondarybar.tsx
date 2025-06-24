//src\app\appeditor\paneltools.tsx

import { Option } from "@/lib/common/model/base/option";
import { Application } from "@/client/models/Application";


/**
 * JSX Component layout secondary column
 * Application Editor Tools
 */
export interface PageSecondaryBarProp {
    section: string;
}
export default function PageSecondaryBar({ section }: PageSecondaryBarProp) {

    return (
        <div className="w-full min-h-screen flex flex-col p-2">
            Editor Tools
        </div>
    )

}//end comp