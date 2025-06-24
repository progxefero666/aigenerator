//src\libcomp\inputfiles.tsx

import { forwardRef, ChangeEvent } from "react";

export interface InputFilesProps {
    disabled?: boolean;
    name: string;
    classname?: string;
    label?: string;
    onchange?: (name: string, result: File) => void;
    formats: string;
    multiple: boolean;
}
export const InputFiles = forwardRef<HTMLInputElement, InputFilesProps>(
                ({name,formats,multiple,classname,label,onchange},ref) => {

    const handleOnChange = async (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files) {
            return;
        }
        if (onchange) {
            const files: FileList = event.target.files;
            if (files && onchange) {
                onchange(name, files[0]);
            }
        }
    };

    const renderContent = () => (
        <>
            {label && <label className="w-full">{label}</label>}
            <input
                name={name}
                id="manolo"
                ref={ref}
                type="file"
                className="file-input w-full"
                multiple={multiple}
                accept={formats}
                onChange={handleOnChange} />
        </>
    );

    return classname ? (
        <div className={classname}>{renderContent()}</div>
    ) : (
        renderContent()
    );

});