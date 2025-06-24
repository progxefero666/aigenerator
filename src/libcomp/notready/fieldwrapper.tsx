//src\libcomp\xuicomp\base\fieldwrapper.tsx

import { AppTheme } from "@/app_front/apptheme";


//cell_style?: string;
//className?: string;
interface FieldWrapperIfc {
    children: React.ReactNode;    
    label: string;    
}
export const FieldWrapper = (({ children,label }: FieldWrapperIfc) => {


    return (
        <div className={AppTheme.C_INCLABEL_ROW_STYLE}>
            <div className={AppTheme.C_CELL_STYLE}>
                {label}
            </div>
            <div className={AppTheme.C_CELL_STYLE}>
                {children}
            </div>
        </div>
    );

});
