//src\app\module\aiprojects\manproyect\page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AppTheme } from "@/app_front/apptheme";

import IndexHeader from "@/app/home/header";
import IndexMenu from "./home/pagemenu";



/**
 *  start: npx openapi-typescript-codegen --input http://localhost:8000/openapi.json --output ./src/client --client axios
 *        npx openapi-typescript-codegen --input http://164.90.225.196:8000/openapi.json --output ./src/client --client axios
 *       node fix-dates.js
 * 
 *  Main Page JSX: Applications Manager
 */
export default function Index() {

    const router = useRouter();

    /*
    useEffect(() => {
        const init = async () => {};
        init();
    }, []);
    */


    return (
        <div id="cont_root" className={AppTheme.LAYOUT_STYLE} >

            {/* header */}
            <IndexHeader  />

            {/* body */}
            <div className = {AppTheme.BODY_STYLE}>

                {/* column left */}
                <div className="w-full min-h-screen flex flex-col px-2 mb-2">
                    <IndexMenu />
                </div>

                {/* column center */}
                <div className={AppTheme.BODY_MONITOR_STYLE}>
                    render Main Content 
                </div>

                {/* column right */}
                <div className="w-full min-h-screen flex flex-col p-2">
                    Right Panel
                </div>

            </div>

        </div>
    );

}//end

/*
ManApplicationUtil.getFormEntity()
const [progLangs, setProgLangs] = useState<string[]>([]);
const [appTypes, setAppTypes] = useState<string[]>([]);
const [listAppsNames, setListAppsNames] = useState<string[]>([]);
const appColls: ManCmmCollections = new ManCmmCollections();
const manApps: ManagerAplications = new ManagerAplications();     
setProgLangs(appColls.codelangsNames);
setAppTypes(appColls.apptypesNames);
setListApps(manApps.listapps);
setListAppsNames(manApps.listappsNames);
if(manApps.appSel){
    setAppSelected(manApps.appSel);
}    
*/

