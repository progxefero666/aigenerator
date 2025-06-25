import { ModelTable, ModelField, Relation } from "@/app_front/codegen/cgmodel";
import sqlTypesData from "@/app_front/codegen/sqltypes.json";

/**
 * Table definition class for agent
 * Generated from database schema
 */
export class AgentDef {

    public name: string = "agent";
    public fields: ModelField[] = [];

    constructor() {
        this.fields.push(new ModelField("id", "numeric", true, true, true, null, null, false, null));
        this.fields.push(new ModelField("name", "text", false, false, true, null, 50, false, null));
        this.fields.push(new ModelField("agtype", "text", false, false, true, null, 50, false, null));
        this.fields.push(new ModelField("application", "text", false, false, true, null, 150, false, null));
        this.fields.push(new ModelField("description", "text", false, false, true, null, 255, false, null));
        this.fields.push(new ModelField("config", "text", false, false, true, null, null, false, null));
        this.fields.push(new ModelField("motor", "text", false, false, true, null, 100, false, null));
        this.fields.push(new ModelField("username", "text", false, false, true, null, 50, false, null));
        this.fields.push(new ModelField("userpassword", "text", false, false, true, null, 50, false, null));
        this.fields.push(new ModelField("port", "text", false, false, true, null, 10, false, null));
        this.fields.push(new ModelField("url", "text", false, false, true, null, 250, false, null));
        this.fields.push(new ModelField("scriptstart", "text", false, false, true, null, null, false, null));
        this.fields.push(new ModelField("scriptstop", "text", false, false, true, null, null, false, null));
        this.fields.push(new ModelField("scriptscheck", "text", false, false, true, null, null, false, null));
    }

    public toJsonString(): string {
        return JSON.stringify(this, null, 4);
    }

}//end class

//table_agent.ts

/**
 * Class Agent
 * Represents a Agent entity with various properties and methods.
 * 
 * @class Agent
 */
export class Agent {

    public id: number | null = null;
    public name: string = undefined;
    public agtype: string = undefined;
    public application: string = undefined;
    public description: string = undefined;
    public config: string = undefined;
    public motor: string = undefined;
    public username: string = undefined;
    public userpassword: string = undefined;
    public port: string = undefined;
    public url: string = undefined;
    public scriptstart: string = undefined;
    public scriptstop: string = undefined;
    public scriptscheck: string = undefined;

    constructor(id: number | null,
                name: string,
                agtype: string,
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
                scriptscheck: string) {

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
        if (fieldName === "agtype") {
            return 50;
        }
        if (fieldName === "application") {
            return 150;
        }
        if (fieldName === "description") {
            return 255;
        }
        if (fieldName === "config") {
            return -1; // unlimited length
        }
        if (fieldName === "motor") {
            return 100;
        }
        if (fieldName === "username") {
            return 50;
        }
        if (fieldName === "userpassword") {
            return 50;
        }
        if (fieldName === "port") {
            return 10;
        }
        if (fieldName === "url") {
            return 250;
        }
        if (fieldName === "scriptstart") {
            return -1; // unlimited length
        }
        if (fieldName === "scriptstop") {
            return -1; // unlimited length
        }
        if (fieldName === "scriptscheck") {
            return -1; // unlimited length
        }
        return 0;
    }

}//end class

/**
 * Type definition for Agent entity
 */
export type TypeAgent = {
    id: number | null;
    name: string;
    agtype: string;
    application: string;
    description: string;
    config: string;
    motor: string;
    username: string;
    userpassword: string;
    port: string;
    url: string;
    scriptstart: string;
    scriptstop: string;
    scriptscheck: string;
};

/**
 * Table definition class for application
 * Generated from database schema
 */
export class ApplicationDef {

    public name: string = "application";
    public fields: ModelField[] = [];

    constructor() {
        this.fields.push(new ModelField("id", "numeric", true, false, true, null, null, false, null));
        this.fields.push(new ModelField("name", "text", false, false, true, null, 50, false, null));
        this.fields.push(new ModelField("reference", "text", false, false, true, null, 50, false, null));
        this.fields.push(new ModelField("author", "text", false, false, true, null, 100, false, null));
        this.fields.push(new ModelField("apptype", "text", false, false, true, null, 50, false, null));
        this.fields.push(new ModelField("proglanguage", "text", false, false, true, null, 50, false, null));
        this.fields.push(new ModelField("osystem", "text", false, false, true, null, 100, false, null));
        this.fields.push(new ModelField("appurl", "text", false, false, true, null, 500, false, null));
        this.fields.push(new ModelField("apppath", "text", false, false, true, null, 500, false, null));
        this.fields.push(new ModelField("localdev", "boolean", false, false, true, null, null, false, null));
        this.fields.push(new ModelField("usedocker", "boolean", false, false, true, null, null, false, null));
        this.fields.push(new ModelField("creationdate", "date", false, false, true, null, null, false, null));
        this.fields.push(new ModelField("updatedate", "date", false, false, true, null, null, false, null));
        this.fields.push(new ModelField("description", "text", false, false, true, null, 255, false, null));
        this.fields.push(new ModelField("controlusers", "boolean", false, false, true, null, null, false, null));
        this.fields.push(new ModelField("useui", "boolean", false, false, true, null, null, false, null));
        this.fields.push(new ModelField("useagents", "boolean", false, false, true, null, null, false, null));
        this.fields.push(new ModelField("consumedb", "boolean", false, false, true, null, null, false, null));
        this.fields.push(new ModelField("consumeapi", "boolean", false, false, true, null, null, false, null));
        this.fields.push(new ModelField("consumeai", "boolean", false, false, true, null, null, false, null));
        this.fields.push(new ModelField("exposedb", "boolean", false, false, true, null, null, false, null));
        this.fields.push(new ModelField("exposeapi", "boolean", false, false, true, null, null, false, null));
    }

    public toJsonString(): string {
        return JSON.stringify(this, null, 4);
    }

}//end class

//table_application.ts

/**
 * Class Application
 * Represents a Application entity with various properties and methods.
 * 
 * @class Application
 */
export class Application {

    public id: number | null = null;
    public name: string = undefined;
    public reference: string = undefined;
    public author: string = undefined;
    public apptype: string = undefined;
    public proglanguage: string = undefined;
    public osystem: string = undefined;
    public appurl: string = undefined;
    public apppath: string = undefined;
    public localdev: boolean = false;
    public usedocker: boolean = false;
    public creationdate: Date = new Date();
    public updatedate: Date = new Date();
    public description: string = undefined;
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

/**
 * Type definition for Application entity
 */
export type TypeApplication = {
    id: number | null;
    name: string;
    reference: string;
    author: string;
    apptype: string;
    proglanguage: string;
    osystem: string;
    appurl: string;
    apppath: string;
    localdev: boolean;
    usedocker: boolean;
    creationdate: Date;
    updatedate: Date;
    description: string;
    controlusers: boolean;
    useui: boolean;
    useagents: boolean;
    consumedb: boolean;
    consumeapi: boolean;
    consumeai: boolean;
    exposedb: boolean;
    exposeapi: boolean;
};

/**
 * Table definition class for apptypes
 * Generated from database schema
 */
export class ApptypesDef {

    public name: string = "apptypes";
    public fields: ModelField[] = [];

    constructor() {
        this.fields.push(new ModelField("id", "numeric", true, false, true, null, null, false, null));
        this.fields.push(new ModelField("name", "text", false, false, true, null, 50, false, null));
        this.fields.push(new ModelField("description", "text", false, false, true, null, 255, false, null));
    }

    public toJsonString(): string {
        return JSON.stringify(this, null, 4);
    }

}//end class

//table_apptypes.ts

/**
 * Class Apptypes
 * Represents a Apptypes entity with various properties and methods.
 * 
 * @class Apptypes
 */
export class Apptypes {

    public id: number | null = null;
    public name: string = undefined;
    public description: string = undefined;

    constructor(id: number | null,
                name: string,
                description: string) {

        this.id = id;
        this.name = name;
        this.description = description;
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
        if (fieldName === "description") {
            return 255;
        }
        return 0;
    }

}//end class

/**
 * Type definition for Apptypes entity
 */
export type TypeApptypes = {
    id: number | null;
    name: string;
    description: string;
};

/**
 * Table definition class for doccategory
 * Generated from database schema
 */
export class DoccategoryDef {

    public name: string = "doccategory";
    public fields: ModelField[] = [];

    constructor() {
        this.fields.push(new ModelField("id", "numeric", true, false, true, null, null, false, null));
        this.fields.push(new ModelField("name", "text", false, false, true, null, 50, false, null));
        this.fields.push(new ModelField("description", "text", false, false, true, null, 255, false, null));
    }

    public toJsonString(): string {
        return JSON.stringify(this, null, 4);
    }

}//end class

//table_doccategory.ts

/**
 * Class Doccategory
 * Represents a Doccategory entity with various properties and methods.
 * 
 * @class Doccategory
 */
export class Doccategory {

    public id: number | null = null;
    public name: string = undefined;
    public description: string = undefined;

    constructor(id: number | null,
                name: string,
                description: string) {

        this.id = id;
        this.name = name;
        this.description = description;
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
        if (fieldName === "description") {
            return 255;
        }
        return 0;
    }

}//end class

/**
 * Type definition for Doccategory entity
 */
export type TypeDoccategory = {
    id: number | null;
    name: string;
    description: string;
};

/**
 * Table definition class for docprojanalisis
 * Generated from database schema
 */
export class DocprojanalisisDef {

    public name: string = "docprojanalisis";
    public fields: ModelField[] = [];

    constructor() {
        this.fields.push(new ModelField("id", "numeric", true, false, true, null, null, false, null));
        this.fields.push(new ModelField("project", "text", false, false, true, null, 50, false, null));
        this.fields.push(new ModelField("updatedate", "date", false, false, true, null, null, false, null));
        this.fields.push(new ModelField("dtype", "text", false, false, true, null, 50, false, null));
        this.fields.push(new ModelField("dcategory", "text", false, false, true, null, 50, false, null));
        this.fields.push(new ModelField("content", "text", false, false, true, null, null, false, null));
        this.fields.push(new ModelField("durl", "text", false, false, true, null, 50, false, null));
        this.fields.push(new ModelField("dpath", "text", false, false, true, null, 50, false, null));
    }

    public toJsonString(): string {
        return JSON.stringify(this, null, 4);
    }

}//end class

//table_docprojanalisis.ts

/**
 * Class Docprojanalisis
 * Represents a Docprojanalisis entity with various properties and methods.
 * 
 * @class Docprojanalisis
 */
export class Docprojanalisis {

    public id: number | null = null;
    public project: string = undefined;
    public updatedate: Date = new Date();
    public dtype: string = undefined;
    public dcategory: string = undefined;
    public content: string = undefined;
    public durl: string = undefined;
    public dpath: string = undefined;

    constructor(id: number | null,
                project: string,
                updatedate: Date,
                dtype: string,
                dcategory: string,
                content: string,
                durl: string,
                dpath: string) {

        this.id = id;
        this.project = project;
        this.updatedate = updatedate;
        this.dtype = dtype;
        this.dcategory = dcategory;
        this.content = content;
        this.durl = durl;
        this.dpath = dpath;
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
        if (fieldName === "project") {
            return 50;
        }
        if (fieldName === "dtype") {
            return 50;
        }
        if (fieldName === "dcategory") {
            return 50;
        }
        if (fieldName === "content") {
            return -1; // unlimited length
        }
        if (fieldName === "durl") {
            return 50;
        }
        if (fieldName === "dpath") {
            return 50;
        }
        return 0;
    }

}//end class

/**
 * Type definition for Docprojanalisis entity
 */
export type TypeDocprojanalisis = {
    id: number | null;
    project: string;
    updatedate: Date;
    dtype: string;
    dcategory: string;
    content: string;
    durl: string;
    dpath: string;
};

/**
 * Table definition class for doctype
 * Generated from database schema
 */
export class DoctypeDef {

    public name: string = "doctype";
    public fields: ModelField[] = [];

    constructor() {
        this.fields.push(new ModelField("id", "numeric", true, false, true, null, null, false, null));
        this.fields.push(new ModelField("name", "text", false, false, true, null, 50, false, null));
        this.fields.push(new ModelField("dataformat", "text", false, false, true, null, 50, false, null));
        this.fields.push(new ModelField("description", "text", false, false, true, null, 255, false, null));
    }

    public toJsonString(): string {
        return JSON.stringify(this, null, 4);
    }

}//end class

//table_doctype.ts

/**
 * Class Doctype
 * Represents a Doctype entity with various properties and methods.
 * 
 * @class Doctype
 */
export class Doctype {

    public id: number | null = null;
    public name: string = undefined;
    public dataformat: string = undefined;
    public description: string = undefined;

    constructor(id: number | null,
                name: string,
                dataformat: string,
                description: string) {

        this.id = id;
        this.name = name;
        this.dataformat = dataformat;
        this.description = description;
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
        if (fieldName === "dataformat") {
            return 50;
        }
        if (fieldName === "description") {
            return 255;
        }
        return 0;
    }

}//end class

/**
 * Type definition for Doctype entity
 */
export type TypeDoctype = {
    id: number | null;
    name: string;
    dataformat: string;
    description: string;
};

/**
 * Table definition class for proglanguage
 * Generated from database schema
 */
export class ProglanguageDef {

    public name: string = "proglanguage";
    public fields: ModelField[] = [];

    constructor() {
        this.fields.push(new ModelField("id", "numeric", true, false, true, null, null, false, null));
        this.fields.push(new ModelField("name", "text", false, false, true, null, 50, false, null));
        this.fields.push(new ModelField("description", "text", false, false, true, null, 255, false, null));
    }

    public toJsonString(): string {
        return JSON.stringify(this, null, 4);
    }

}//end class

//table_proglanguage.ts

/**
 * Class Proglanguage
 * Represents a Proglanguage entity with various properties and methods.
 * 
 * @class Proglanguage
 */
export class Proglanguage {

    public id: number | null = null;
    public name: string = undefined;
    public description: string = undefined;

    constructor(id: number | null,
                name: string,
                description: string) {

        this.id = id;
        this.name = name;
        this.description = description;
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
        if (fieldName === "description") {
            return 255;
        }
        return 0;
    }

}//end class

/**
 * Type definition for Proglanguage entity
 */
export type TypeProglanguage = {
    id: number | null;
    name: string;
    description: string;
};

/**
 * Table definition class for server
 * Generated from database schema
 */
export class ServerDef {

    public name: string = "server";
    public fields: ModelField[] = [];

    constructor() {
        this.fields.push(new ModelField("id", "numeric", true, true, true, null, null, false, null));
        this.fields.push(new ModelField("name", "text", false, false, true, null, 50, false, null));
        this.fields.push(new ModelField("srvtype", "text", false, false, true, null, 50, false, null));
        this.fields.push(new ModelField("description", "text", false, false, true, null, 255, false, null));
        this.fields.push(new ModelField("config", "text", false, false, true, null, null, false, null));
        this.fields.push(new ModelField("usedocker", "boolean", false, false, true, null, null, false, null));
        this.fields.push(new ModelField("useclaude", "boolean", false, false, true, null, null, false, null));
        this.fields.push(new ModelField("motor", "text", false, false, true, null, 100, false, null));
        this.fields.push(new ModelField("username", "text", false, false, true, null, 50, false, null));
        this.fields.push(new ModelField("userpassword", "text", false, false, true, null, 50, false, null));
        this.fields.push(new ModelField("application", "text", false, false, true, null, 150, false, null));
        this.fields.push(new ModelField("dbversion", "text", false, false, true, null, 50, false, null));
        this.fields.push(new ModelField("port", "text", false, false, true, null, 10, false, null));
        this.fields.push(new ModelField("url", "text", false, false, true, null, 250, false, null));
        this.fields.push(new ModelField("exposedb", "boolean", false, false, true, null, null, false, null));
        this.fields.push(new ModelField("exposeapi", "boolean", false, false, true, null, null, false, null));
        this.fields.push(new ModelField("scriptstart", "text", false, false, true, null, null, false, null));
        this.fields.push(new ModelField("scriptstop", "text", false, false, true, null, null, false, null));
        this.fields.push(new ModelField("scriptscheck", "text", false, false, true, null, null, false, null));
    }

    public toJsonString(): string {
        return JSON.stringify(this, null, 4);
    }

}//end class

//table_server.ts

/**
 * Class Server
 * Represents a Server entity with various properties and methods.
 * 
 * @class Server
 */
export class Server {

    public id: number | null = null;
    public name: string = undefined;
    public srvtype: string = undefined;
    public description: string = undefined;
    public config: string = undefined;
    public usedocker: boolean = false;
    public useclaude: boolean = false;
    public motor: string = undefined;
    public username: string = undefined;
    public userpassword: string = undefined;
    public application: string = undefined;
    public dbversion: string = undefined;
    public port: string = undefined;
    public url: string = undefined;
    public exposedb: boolean = false;
    public exposeapi: boolean = false;
    public scriptstart: string = undefined;
    public scriptstop: string = undefined;
    public scriptscheck: string = undefined;

    constructor(id: number | null,
                name: string,
                srvtype: string,
                description: string,
                config: string,
                usedocker: boolean,
                useclaude: boolean,
                motor: string,
                username: string,
                userpassword: string,
                application: string,
                dbversion: string,
                port: string,
                url: string,
                exposedb: boolean,
                exposeapi: boolean,
                scriptstart: string,
                scriptstop: string,
                scriptscheck: string) {

        this.id = id;
        this.name = name;
        this.srvtype = srvtype;
        this.description = description;
        this.config = config;
        this.usedocker = usedocker;
        this.useclaude = useclaude;
        this.motor = motor;
        this.username = username;
        this.userpassword = userpassword;
        this.application = application;
        this.dbversion = dbversion;
        this.port = port;
        this.url = url;
        this.exposedb = exposedb;
        this.exposeapi = exposeapi;
        this.scriptstart = scriptstart;
        this.scriptstop = scriptstop;
        this.scriptscheck = scriptscheck;
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
        if (fieldName === "srvtype") {
            return 50;
        }
        if (fieldName === "description") {
            return 255;
        }
        if (fieldName === "config") {
            return -1; // unlimited length
        }
        if (fieldName === "motor") {
            return 100;
        }
        if (fieldName === "username") {
            return 50;
        }
        if (fieldName === "userpassword") {
            return 50;
        }
        if (fieldName === "application") {
            return 150;
        }
        if (fieldName === "dbversion") {
            return 50;
        }
        if (fieldName === "port") {
            return 10;
        }
        if (fieldName === "url") {
            return 250;
        }
        if (fieldName === "scriptstart") {
            return -1; // unlimited length
        }
        if (fieldName === "scriptstop") {
            return -1; // unlimited length
        }
        if (fieldName === "scriptscheck") {
            return -1; // unlimited length
        }
        return 0;
    }

}//end class

/**
 * Type definition for Server entity
 */
export type TypeServer = {
    id: number | null;
    name: string;
    srvtype: string;
    description: string;
    config: string;
    usedocker: boolean;
    useclaude: boolean;
    motor: string;
    username: string;
    userpassword: string;
    application: string;
    dbversion: string;
    port: string;
    url: string;
    exposedb: boolean;
    exposeapi: boolean;
    scriptstart: string;
    scriptstop: string;
    scriptscheck: string;
};

/**
 * Table definition class for service
 * Generated from database schema
 */
export class ServiceDef {

    public name: string = "service";
    public fields: ModelField[] = [];

    constructor() {
        this.fields.push(new ModelField("id", "numeric", false, true, true, null, null, false, null));
        this.fields.push(new ModelField("name", "text", false, false, true, null, 50, false, null));
        this.fields.push(new ModelField("stype", "text", false, false, true, null, 50, false, null));
        this.fields.push(new ModelField("application", "text", false, false, true, null, 150, false, null));
        this.fields.push(new ModelField("description", "text", false, false, true, null, 255, false, null));
        this.fields.push(new ModelField("config", "text", false, false, true, null, null, false, null));
        this.fields.push(new ModelField("motor", "text", false, false, true, null, 100, false, null));
        this.fields.push(new ModelField("dbversion", "text", false, false, true, null, 10, false, null));
        this.fields.push(new ModelField("username", "text", false, false, true, null, 50, false, null));
        this.fields.push(new ModelField("userpassword", "text", false, false, true, null, 50, false, null));
        this.fields.push(new ModelField("port", "text", false, false, true, null, 10, false, null));
        this.fields.push(new ModelField("url", "text", false, false, true, null, 250, false, null));
        this.fields.push(new ModelField("scriptstart", "text", false, false, true, null, null, false, null));
        this.fields.push(new ModelField("scriptstop", "text", false, false, true, null, null, false, null));
        this.fields.push(new ModelField("scriptscheck", "text", false, false, true, null, null, false, null));
    }

    public toJsonString(): string {
        return JSON.stringify(this, null, 4);
    }

}//end class

//table_service.ts

/**
 * Class Service
 * Represents a Service entity with various properties and methods.
 * 
 * @class Service
 */
export class Service {

    public id: number | null = null;
    public name: string = undefined;
    public stype: string = undefined;
    public application: string = undefined;
    public description: string = undefined;
    public config: string = undefined;
    public motor: string = undefined;
    public dbversion: string = undefined;
    public username: string = undefined;
    public userpassword: string = undefined;
    public port: string = undefined;
    public url: string = undefined;
    public scriptstart: string = undefined;
    public scriptstop: string = undefined;
    public scriptscheck: string = undefined;

    constructor(id: number | null,
                name: string,
                stype: string,
                application: string,
                description: string,
                config: string,
                motor: string,
                dbversion: string,
                username: string,
                userpassword: string,
                port: string,
                url: string,
                scriptstart: string,
                scriptstop: string,
                scriptscheck: string) {

        this.id = id;
        this.name = name;
        this.stype = stype;
        this.application = application;
        this.description = description;
        this.config = config;
        this.motor = motor;
        this.dbversion = dbversion;
        this.username = username;
        this.userpassword = userpassword;
        this.port = port;
        this.url = url;
        this.scriptstart = scriptstart;
        this.scriptstop = scriptstop;
        this.scriptscheck = scriptscheck;
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
        if (fieldName === "stype") {
            return 50;
        }
        if (fieldName === "application") {
            return 150;
        }
        if (fieldName === "description") {
            return 255;
        }
        if (fieldName === "config") {
            return -1; // unlimited length
        }
        if (fieldName === "motor") {
            return 100;
        }
        if (fieldName === "dbversion") {
            return 10;
        }
        if (fieldName === "username") {
            return 50;
        }
        if (fieldName === "userpassword") {
            return 50;
        }
        if (fieldName === "port") {
            return 10;
        }
        if (fieldName === "url") {
            return 250;
        }
        if (fieldName === "scriptstart") {
            return -1; // unlimited length
        }
        if (fieldName === "scriptstop") {
            return -1; // unlimited length
        }
        if (fieldName === "scriptscheck") {
            return -1; // unlimited length
        }
        return 0;
    }

}//end class

/**
 * Type definition for Service entity
 */
export type TypeService = {
    id: number | null;
    name: string;
    stype: string;
    application: string;
    description: string;
    config: string;
    motor: string;
    dbversion: string;
    username: string;
    userpassword: string;
    port: string;
    url: string;
    scriptstart: string;
    scriptstop: string;
    scriptscheck: string;
};

/**
 * Table definition class for tasktype
 * Generated from database schema
 */
export class TasktypeDef {

    public name: string = "tasktype";
    public fields: ModelField[] = [];

    constructor() {
        this.fields.push(new ModelField("id", "numeric", true, false, true, null, null, false, null));
        this.fields.push(new ModelField("name", "text", false, false, true, null, 100, false, null));
        this.fields.push(new ModelField("description", "text", false, false, false, null, null, false, null));
    }

    public toJsonString(): string {
        return JSON.stringify(this, null, 4);
    }

}//end class

//table_tasktype.ts

/**
 * Class Tasktype
 * Represents a Tasktype entity with various properties and methods.
 * 
 * @class Tasktype
 */
export class Tasktype {

    public id: number | null = null;
    public name: string = undefined;
    public description: string = undefined;

    constructor(id: number | null,
                name: string,
                description: string) {

        this.id = id;
        this.name = name;
        this.description = description;
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
            return 100;
        }
        if (fieldName === "description") {
            return -1; // unlimited length
        }
        return 0;
    }

}//end class

/**
 * Type definition for Tasktype entity
 */
export type TypeTasktype = {
    id: number | null;
    name: string;
    description: string;
};

/**
 * Table definition class for task
 * Generated from database schema
 */
export class TaskDef {

    public name: string = "task";
    public fields: ModelField[] = [];

    constructor() {
        this.fields.push(new ModelField("id", "numeric", true, false, true, null, null, false, null));
        this.fields.push(new ModelField("workflow_id", "numeric", false, false, false, null, null, true, [new Relation("workflow", "id")]));
        this.fields.push(new ModelField("name", "text", false, false, true, null, 255, false, null));
        this.fields.push(new ModelField("wtype", "text", false, false, true, null, 100, false, null));
        this.fields.push(new ModelField("description", "text", false, false, false, null, null, false, null));
        this.fields.push(new ModelField("files", "text", false, false, false, null, null, false, null));
        this.fields.push(new ModelField("folders", "text", false, false, false, null, null, false, null));
        this.fields.push(new ModelField("task_order", "numeric", false, false, true, null, null, false, null));
        this.fields.push(new ModelField("is_final_task", "boolean", false, false, false, null, null, false, null));
    }

    public toJsonString(): string {
        return JSON.stringify(this, null, 4);
    }

}//end class

//table_task.ts

/**
 * Class Task
 * Represents a Task entity with various properties and methods.
 * 
 * @class Task
 */
export class Task {

    public id: number | null = null;
    public workflow_id: number | null = null;
    public name: string = undefined;
    public wtype: string = undefined;
    public description: string = undefined;
    public files: string = undefined;
    public folders: string = undefined;
    public task_order: number | null = null;
    public is_final_task: boolean = false;

    constructor(id: number | null,
                workflow_id: number | null,
                name: string,
                wtype: string,
                description: string,
                files: string,
                folders: string,
                task_order: number | null,
                is_final_task: boolean) {

        this.id = id;
        this.workflow_id = workflow_id;
        this.name = name;
        this.wtype = wtype;
        this.description = description;
        this.files = files;
        this.folders = folders;
        this.task_order = task_order;
        this.is_final_task = is_final_task;
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
        if (fieldName === "workflow_id") {
            return 15; // max digits for numeric
        }
        if (fieldName === "name") {
            return 255;
        }
        if (fieldName === "wtype") {
            return 100;
        }
        if (fieldName === "description") {
            return -1; // unlimited length
        }
        if (fieldName === "files") {
            return -1; // unlimited length
        }
        if (fieldName === "folders") {
            return -1; // unlimited length
        }
        if (fieldName === "task_order") {
            return 15; // max digits for numeric
        }
        return 0;
    }

}//end class

/**
 * Type definition for Task entity
 */
export type TypeTask = {
    id: number | null;
    workflow_id: number | null;
    name: string;
    wtype: string;
    description: string;
    files: string;
    folders: string;
    task_order: number | null;
    is_final_task: boolean;
};

/**
 * Table definition class for workflow
 * Generated from database schema
 */
export class WorkflowDef {

    public name: string = "workflow";
    public fields: ModelField[] = [];

    constructor() {
        this.fields.push(new ModelField("id", "numeric", true, false, true, null, null, false, null));
        this.fields.push(new ModelField("name", "text", false, false, true, null, 255, false, null));
        this.fields.push(new ModelField("context_codelang", "text", false, false, false, null, 50, false, null));
        this.fields.push(new ModelField("context_main", "text", false, false, false, null, 255, false, null));
        this.fields.push(new ModelField("context_app", "text", false, false, false, null, 255, false, null));
        this.fields.push(new ModelField("context_folder", "text", false, false, false, null, 255, false, null));
        this.fields.push(new ModelField("context_libs", "text", false, false, false, null, null, false, null));
        this.fields.push(new ModelField("created_at", "unknown", false, false, false, null, null, false, null));
        this.fields.push(new ModelField("updated_at", "unknown", false, false, false, null, null, false, null));
    }

    public toJsonString(): string {
        return JSON.stringify(this, null, 4);
    }

}//end class

//table_workflow.ts

/**
 * Class Workflow
 * Represents a Workflow entity with various properties and methods.
 * 
 * @class Workflow
 */
export class Workflow {

    public id: number | null = null;
    public name: string = undefined;
    public context_codelang: string = undefined;
    public context_main: string = undefined;
    public context_app: string = undefined;
    public context_folder: string = undefined;
    public context_libs: string = undefined;
    public created_at: string = undefined;
    public updated_at: string = undefined;

    constructor(id: number | null,
                name: string,
                context_codelang: string,
                context_main: string,
                context_app: string,
                context_folder: string,
                context_libs: string,
                created_at: string,
                updated_at: string) {

        this.id = id;
        this.name = name;
        this.context_codelang = context_codelang;
        this.context_main = context_main;
        this.context_app = context_app;
        this.context_folder = context_folder;
        this.context_libs = context_libs;
        this.created_at = created_at;
        this.updated_at = updated_at;
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
            return 255;
        }
        if (fieldName === "context_codelang") {
            return 50;
        }
        if (fieldName === "context_main") {
            return 255;
        }
        if (fieldName === "context_app") {
            return 255;
        }
        if (fieldName === "context_folder") {
            return 255;
        }
        if (fieldName === "context_libs") {
            return -1; // unlimited length
        }
        return 0;
    }

}//end class

/**
 * Type definition for Workflow entity
 */
export type TypeWorkflow = {
    id: number | null;
    name: string;
    context_codelang: string;
    context_main: string;
    context_app: string;
    context_folder: string;
    context_libs: string;
    created_at: string;
    updated_at: string;
};