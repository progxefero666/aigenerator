//src\lib\xuicomp\form\inputdimension.tsx

import { forwardRef, useState, useImperativeHandle } from "react";
import { HtmlCompTypes, InputDimensionProps } from "@/lib/common/html/html";
import { Dimension } from "@/lib/common/model/base/dimension";


export interface InputDimensionRef {
    getDimension: () => Dimension;
    setDimension: (value: Dimension) => void;
}
export const InputDimension = forwardRef<InputDimensionRef, InputDimensionProps>(
    ({ name, collection, classname, label, defaultvalue }, ref) => {

        const [inputdisabled, setInputdisabled] = useState<boolean>(false);
        const [profname, setProfname] = useState<string>(defaultvalue as string);
        const [dimension, setDimension] = useState<Dimension>(Dimension.DEF);

        useImperativeHandle(ref, () => ({
            getDimension: () => dimension,
            setDimension: (value: Dimension) => setDimension(value),
        }));

        const handleSelectChange = (profileName: string) => {
            if (profname == profileName) {return;}
            setDimension(Dimension.DEF);
            setProfname(profileName);
            if (profileName == "PERSONALIZED") { 
                setInputdisabled(false); 
                setTimeout(() => {
                    const element = document.getElementById("dimension-width");
                    element?.focus();
                  }, 0);
            }
            else { setInputdisabled(true); }
        };

        const handleWidthChange = (width: number) => {
            if (Number.isNaN(width)) {width = 0;}
            setDimension(new Dimension(width, dimension.height));
        };

        const handleHeightChange = (height: number) => {
            if (Number.isNaN(height)) {height = 0;}
            setDimension(new Dimension(dimension.width, height));
        };

        const renderContent = () => (
            <>
                {label && <label className="w-full">{label}</label>}
                <div className="grid grid-cols-2 gap-4">

                    <select
                        name={name}
                        className="select w-full mb-2"
                        value={profname}
                        onChange={(e) => handleSelectChange(e.target.value)} >
                        {collection.map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>

                    <div className="w-full flex grow gap-3">

                        <input id="dimension-width" className="input w-[50%]" 
                            type="number"
                            step="1"
                            disabled={inputdisabled}
                            value={dimension.width}
                            onChange={(event) => handleWidthChange(Number(event.target.value))} />

                        <input id="dimension-height" className="input w-[50%]"
                            type="number"
                            step="1"
                            disabled={inputdisabled}
                            value={dimension.height}
                            onChange={(event) => handleHeightChange(Number(event.target.value))} />

                    </div>

                </div>
            </>
        );

        // Comportamiento idéntico al patrón de InputText:
        return classname ? (
            <div className={classname}>{renderContent()}</div>
        ) : (
            renderContent()
        );
    }
);

// Asignamos un displayName al componente para mejorar la depuración
InputDimension.displayName = "InputDimension";