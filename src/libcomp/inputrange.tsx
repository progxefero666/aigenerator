//src\lib\xuicomp\form\inputrange.tsx

import { forwardRef, useImperativeHandle, useRef, useState } from "react";

export interface InputRangeProps {
    disabled?:boolean;
    name: string;
    classname?: string;
    label?: string;
    defaultvalue: number | string;
    onchange?: (name: string, result: unknown) => void;
    min: number;
    max: number;
    step?: number;
}
export interface InputRangeRef {
    setValue: (value: number) => void;
}
export const InputRange = forwardRef<InputRangeRef, InputRangeProps>(
    ({ name,disabled, onchange, classname, label, defaultvalue, min, max, step }, ref) => {

        const inputRef = useRef<HTMLInputElement>(null);

        const handleOnChange = (value: number) => {
            if (onchange) {
                onchange(name, value)
            }
        }

        useImperativeHandle(ref, () => ({
            setValue: (newValue: number) => {
                if (inputRef.current) {
                    inputRef.current.value = newValue.toString();
                }
            }
        }));


        const renderContent = () => (
            <>
                {label && <label className="w-full">{label}</label>}
                <input name={name}
                    className="range w-full"
                    ref={inputRef}
                    type="range"
                    value={defaultvalue}
                    onChange={(e) => handleOnChange(Number(e.target.value))}
                    step={step}
                    min={min}
                    max={max}
                />
            </>
        );

        // Decide si envolver el contenido en un div con className o no
        return classname ? (
            <div className={classname}>{renderContent()}</div>
        ) : (
            renderContent()
        );
    }
);