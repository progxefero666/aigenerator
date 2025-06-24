//src\libcomp\model\barbuttonscfg.ts

/**
 * class Template
 */
export class BarButtonsCfg {

    public operations:string[];
    public texts:string[];
    public color:string[]=[];
    public icons:string[];
    public visibled:boolean[]=[];
    public disabled:boolean[]=[];
    
    constructor(operations:string[],texts:string[],color:string[],icons:string[],disabled?:boolean[],visibled?:boolean[]){
        this.operations = operations;
        this.texts = texts;
        this.color = color;
        this.icons = icons;
        this.disabled = disabled ?? [];
        this.visibled = visibled ?? [];
    }

}//end class