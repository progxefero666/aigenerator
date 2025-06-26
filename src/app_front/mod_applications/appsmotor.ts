//src\app_front\mod_applications\apptypes.ts



/**
 * class AppType
 */
export class AppType {

    public name: string;
    public description: string;
    public icon: string | null = null;

    constructor(name:string,description:string,icon:string|null) {
        this.name = name;
        this.description = description;
        if (icon!== null || icon !== "undefined") {
            this.icon = icon;
        }
    }

}//end class

/**
 * AppType_cloudclient
 *      "cloudclient"-"Client-cloud application"
 */
export class AppType_cloudclient extends AppType {

    constructor(name:string,description:string,icon:string|null) {
        super(name,description,icon);
        this.name = "cloudclient";
        this.description = "Client-cloud application";
        this.icon = "ti ti-cloud";
    }
    
}//end class

/**
 * AppType_cloudserver
 *      "cloudserver"-"Server-cloud application"
 */
export class AppType_cloudserver extends AppType {

    constructor(name:string,description:string,icon:string|null) {
        super(name,description,icon);
        this.name = "cloudclient";
        this.description = "Client-cloud application";
        this.icon = "ti ti-cloud";
    }
    
}//end class

/**
 * AppType_cloudhybrid
 *      "cloudhybrid"-"Hybrid-cloud application"
 */
export class AppType_cloudhybrid extends AppType {

    constructor(name:string,description:string,icon:string|null) {
        super(name,description,icon);
        this.name = "cloudclient";
        this.description = "Client-cloud application";
        this.icon = "ti ti-cloud";
    }
    
}//end class


/**
 * AppType_desktopclient
 *      "desktopclient"-"Client-side desktop application"
 */
export class AppType_desktopclient extends AppType {

    constructor(name:string,description:string,icon:string|null) {
        super(name,description,icon);
        this.name = "cloudclient";
        this.description = "Client-cloud application";
        this.icon = "ti ti-cloud";
    }
    
}//end class

/**
 * AppType_desktopserver
 *      "desktopserver"-"Server-side desktop application"
 */
export class AppType_desktopserver extends AppType {

    constructor(name:string,description:string,icon:string|null) {
        super(name,description,icon);
        this.name = "cloudclient";
        this.description = "Client-cloud application";
        this.icon = "ti ti-cloud";
    }
    
}//end class

/**
 * AppType_desktophybrid
 *      "desktophybrid"-"Hybrid desktop application"
 */
export class AppType_desktophybrid extends AppType {

    constructor(name:string,description:string,icon:string|null) {
        super(name,description,icon);
        this.name = "cloudclient";
        this.description = "Client-cloud application";
        this.icon = "ti ti-cloud";
    }
    
}//end class
