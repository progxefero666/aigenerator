//src\libcomp\xuicomp\base\outputcheck.tsx


import { FieldWrapper } from "./fieldwrapper";


export interface OutputCheckIfc {
    chequed: boolean;
    label?: string;
}
export function OutputCheck({ chequed, label }: OutputCheckIfc) {

    const renderContent = () => {
        if (!label) {
            if (chequed) {
                return (
                    <div className="flex items-center">✅ </div>
                )
            }
            else {
                return (
                    <div className="flex items-center">❌</div>
                )
            }

        }
        else {
            if (chequed) {
                return (
                    <FieldWrapper label={label!}>✅</FieldWrapper>
                )
            }
            else {
                return (
                    <FieldWrapper label={label!}>❌</FieldWrapper>
                )
            }

        }
    }
    return (
        renderContent()
    );

}//end component
