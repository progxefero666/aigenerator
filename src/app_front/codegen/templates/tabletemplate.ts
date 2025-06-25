//src\app_front\dbmodel\table_application.ts

import { AppConstants } from "@/app_front/appconstants";

export type _Table_ = {
    id?: (number | null);
    project: string;
    description: string;
    dtype?: (string | null);
    dcategory?: (string | null);
    content?: (string | null);
    durl?: (string | null);
    dpath?: (string | null);
    updatedate?: Date;
};

