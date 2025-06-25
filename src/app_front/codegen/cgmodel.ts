//src\app_front\codegen\cgmodel.ts

/**
 * class Field
 */
export class Relation {
    public table: string = "undefined";
    public field: string = "undefined";    
    constructor(table: string, field: string) {
        this.table = table;
        this.field = field;
    }
}//end 


/**
 * class Field
 */
export class ModelField {
    public name: string;
    public type: string;
    public required: boolean;
    public generated: boolean;
    public pk: boolean;
    public fk: boolean;
    public minlen: number | null;
    public maxlen: number | null;
    public relations: Relation[] | null = null;

    constructor(name: string, type: string,
        pk: boolean, generated: boolean,
        required: boolean, minlen: number | null, maxlen: number | null,
        fk?: boolean, relations?: Relation[]) {
        this.name = name;
        this.type = type;
        this.pk = pk;
        this.generated = generated;
        this.required = required;
        this.minlen = minlen;
        this.maxlen = maxlen;
        this.fk = fk ?? false;
        this.relations = relations ?? null;
    }
}//end 

export class ModelTable {
    public name: string;
    public fields: ModelField[];
    constructor(name: string, fields?: ModelField[]) {
        this.name = name;
        this.fields = fields ?? [];
    }

    public addField(field: ModelField) {
        this.fields.push(field);
    }

    public addFields(fields: ModelField[]) {
        this.fields.push(...fields);
    }

}//end class