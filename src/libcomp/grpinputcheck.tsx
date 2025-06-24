
//src\libcomp\xuicomp\util\grpinputcheck.tsx

import { forwardRef } from "react";


export interface GroupInputCheckIfc {
    disabled?:boolean;
    name: string;
    classname?: string;
    label?: string;
    values: boolean[];
    onchange?: (name: string, result: unknown) => void;
}
export const GroupInputCheck = forwardRef<HTMLInputElement, GroupInputCheckIfc>(
    ({name,disabled,classname,label,values,onchange},ref) => {

        const handleOnChange = (value: boolean) => {
            if (onchange) {

            }
        }

        const renderContent = () => (
            <div className="flex items-center">
                {label && <label>{label}</label>}
                <input
                    name={name}
                    type="checkbox"
                    className="toggle"
                    ref={ref}
                    defaultChecked={values[0]}
                    onChange={(e) => handleOnChange?.(e.target.checked)} />
            </div>
        );

        return classname ? (
            <div className={classname}>{renderContent()}</div>
        ) : (
            renderContent()
        );
    }
);