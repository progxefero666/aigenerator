//src\app_front\hooks\useappready.ts

import { Application } from "@/client_old/models/Application";
import { ApplicationsService } from "@/client/service/ApplicationsService";
import { useState, useEffect } from "react";

/**
 * React Hook: useAppReady
 * @returns 
 */
export function useAppReady(app_id: number) {
    const [appReady, setAppReady] = useState(false);
    const [appLoad, setAppLoad] = useState<Application | null>(null);

    useEffect(() => {
        const init = async () => {
            try {
                const app_load: Application = await ApplicationsService.getById(app_id);
                setAppLoad(app_load);
            }
            catch (error) {
                console.error('Error:', error);
            }
            finally {
                setAppReady(true);
            }
        }
        init();
    }, [app_id]);

    return { appReady, appLoad };
}