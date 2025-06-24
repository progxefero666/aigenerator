//src\lib\common\model\base\option.ts

/**
 * class Section
 */
export class Option {

    public name: string;
    public title: string;
    public logo: string;
    public description: string;

    constructor(name: string, title: string,description?:string,logo?:string) {
        this.name = name;
        this.title = title;
        this.logo = logo ?? "undefined";
        this.description = description  ?? "undefined";
    }

    public toJsonString(): string {
        return JSON.stringify(this, null, 4);
    }

    public static build(jsonString: string): Option {
        const obj = JSON.parse(jsonString);
        return new Option(obj.name, obj.title, obj.logo, obj.description);
    }

}//end class