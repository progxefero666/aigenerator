//src\app_front\dbmodel\table_application.ts

import { AppConstants } from "@/app_front/appconstants";

export type _Table_ = {
    id: (number | null);
    name: string;
    description: string;
    dtype: number;
    dcategory: string;
    localdev: boolean;
    updatedate?: Date;
};

