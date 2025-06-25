//src\app_front\dbmodel\table_application.ts

import { AppConstants } from "@/app_front/appconstants";


/**
 * generated Class Application
 * Represents a Application entity with various properties and methods.
 * 
 * @class Application
 */
export class Application {

    public id: number | null = null;
    public name: string = AppConstants.NOT_DEF;
    public reference: string = AppConstants.NOT_DEF;
    public author: string = AppConstants.NOT_DEF;
    public apptype: string = AppConstants.NOT_DEF;
    public proglanguage: string = AppConstants.NOT_DEF;
    public osystem: string = AppConstants.NOT_DEF;
    public appurl: string = AppConstants.NOT_DEF;
    public apppath: string = AppConstants.NOT_DEF;
    public localdev: boolean = false;
    public usedocker: boolean = false;
    public creationdate: Date = new Date();
    public updatedate: Date = new Date();
    public description: string = AppConstants.NOT_DEF;
    public controlusers: boolean = false;
    public useui: boolean = false;
    public useagents: boolean = false;
    public consumedb: boolean = false;
    public consumeapi: boolean = false;
    public consumeai: boolean = false;
    public exposedb: boolean = false;
    public exposeapi: boolean = false;

    constructor(id: number | null,
                name: string,
                reference: string,
                author: string,
                apptype: string,
                proglanguage: string,
                osystem: string,
                appurl: string,
                apppath: string,
                localdev: boolean,
                usedocker: boolean,
                creationdate: Date,
                updatedate: Date,
                description: string,
                controlusers: boolean,
                useui: boolean,
                useagents: boolean,
                consumedb: boolean,
                consumeapi: boolean,
                consumeai: boolean,
                exposedb: boolean,
                exposeapi: boolean) {

        this.id = id;
        this.name = name;
        this.reference = reference;
        this.author = author;
        this.apptype = apptype;
        this.proglanguage = proglanguage;
        this.osystem = osystem;
        this.appurl = appurl;
        this.apppath = apppath;
        this.localdev = localdev;
        this.usedocker = usedocker;
        this.creationdate = creationdate;
        this.updatedate = updatedate;
        this.description = description;
        this.controlusers = controlusers;
        this.useui = useui;
        this.useagents = useagents;
        this.consumedb = consumedb;
        this.consumeapi = consumeapi;
        this.consumeai = consumeai;
        this.exposedb = exposedb;
        this.exposeapi = exposeapi;
    }

    /**
     * Returns the minimum length of the field.
     * @param fieldName The name of the field.
     * @returns The minimum length of the field or null if not applicable.
     */
    public minlen(fieldName: string): number | null {
        return 0;
    }

    /**
     * Returns the max length of the field.
     * Returns -1 if has unlimited length.
     * @param fieldName The name of the field.
     * @returns The maximum length of the field or null if not applicable.
     */
    public maxlen(fieldName: string): number | null {
        if (fieldName === "id") {
            return 15; // max digits for numeric
        }
        if (fieldName === "name") {
            return 50;
        }
        if (fieldName === "reference") {
            return 50;
        }
        if (fieldName === "author") {
            return 100;
        }
        if (fieldName === "apptype") {
            return 50;
        }
        if (fieldName === "proglanguage") {
            return 50;
        }
        if (fieldName === "osystem") {
            return 100;
        }
        if (fieldName === "appurl") {
            return 500;
        }
        if (fieldName === "apppath") {
            return 500;
        }
        if (fieldName === "description") {
            return 255;
        }
        return 0;
    }

}//end class