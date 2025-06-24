//src\app_front\dbmodel\tableagent.ts

import { AppConstants } from "../appconstants";


/**
 * Class Agent
 * Represents an AI Agent with various properties and methods.
 * 
 * @class Agent
 */
export class Agent {

    public id: number|null =null;
    public name: string = AppConstants.NOT_DEF;
    public agtype: string = AppConstants.NOT_DEF;
    public application: string = AppConstants.NOT_DEF;
    public description: string = AppConstants.NOT_DEF;
    public config: string = AppConstants.NOT_DEF;
    public motor: string = AppConstants.NOT_DEF;
    public username: string = AppConstants.NOT_DEF;
    public userpassword: string = AppConstants.NOT_DEF;
    public port: string = AppConstants.NOT_DEF;
    public url: string = AppConstants.NOT_DEF;
    public scriptstart: string = AppConstants.NOT_DEF;
    public scriptstop: string = AppConstants.NOT_DEF;
    public scriptscheck: string = AppConstants.NOT_DEF;

    constructor(id: (number | null) = null,
                name: string,
                agtype: string ,
                application: string,
                description: string,
                config: string,
                motor: string,
                username: string,
                userpassword: string,
                port: string,
                url: string,
                scriptstart: string,
                scriptstop: string,
                scriptscheck: string ) {

        this.id = id;
        this.name = name;
        this.agtype = agtype;
        this.application = application;
        this.description = description;
        this.config = config;
        this.motor = motor;
        this.username = username;
        this.userpassword = userpassword;
        this.port = port;
        this.url = url;
        this.scriptstart = scriptstart;
        this.scriptstop = scriptstop;
        this.scriptscheck = scriptscheck;
    }

}//end class

