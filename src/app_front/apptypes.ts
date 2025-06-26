//src\app_front\apptypes.ts

import { Option } from "@/lib/model/base/option";

export interface PagePrimaryBarProps {
    sections: Option[];
    actsection: string;
    chargesection: (section:string) => void
}