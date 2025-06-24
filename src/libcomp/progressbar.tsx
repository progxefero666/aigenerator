//src\lib\xuicomp\common\progressbar.tsx


/**
 * Xefero JSX Component
 */
export interface ProgressBarIfc {
    value: string;
    label?: string;
    classname?: string;
}
export function ProgressBar({ value, classname, label }: ProgressBarIfc) {

    const progressBarWidth = `${value}%`;
    const containerClassName = `w-full rounded-full inset-shadow-sm inset-shadow-gray-500`;
    const barClassName = `rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 h-full shadow-md`;
    
    const renderContent = () => (
        <>
            {label && <label className="w-full">{label}</label>}
            <div className={containerClassName} style={{ height: '2.0rem' }}>
                <div
                    className={barClassName}
                    style={{ width: progressBarWidth, height: '1.9rem' }}
                ></div>
            </div>
        </>
    );
    return classname ?
        (<div className={classname}>{renderContent()}</div>)
        : (renderContent());
}

