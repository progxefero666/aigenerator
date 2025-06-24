//src\lib\common\collection\ctrlcollectionbyid.ts

/**
 * class CtrlCollectionByKey
 */
export class CtrlCollectionByKey<T extends { [key: number]: any }> {

    public elements: Array<T> = [];

    // Constructor
    constructor() {
    }

    // crud operations
    //..........................................................................................

    public insert(element:T): boolean {
        if (element) {
            this.elements.push(element);
            return true;
        }
        return false;
    }

    public update(id:number,element:T): boolean {
        const index = this.findIndexById(id);
        if (index !== -1) {
            this.elements[index] = element;
            return true;
        }
        return false;
    }

    public delete(id:number): boolean {
        const index = this.findIndexById(id);
        if (index !== -1) {
            this.elements.splice(index, 1);
            return true;
        }
        return false;
    }

    public deleteAll(): boolean {
        this.elements = [];
        return true;
    }

    // read operations
    //..........................................................................................
    public getAll(): Array<T> {
        return this.elements; // Returns the original array
    }

    private findIndexById(id: number): number {
        return this.elements.findIndex((element) => element[id] === id);
    }

    public getById(id: number): T {
        const index = this.findIndexById(id);
        return this.elements[index]; 
    }

 
}//end class


/*

    // Adds new elements to the end of the collection
    public addElements(newElements: Array<T>): boolean {
        if (newElements && newElements.length > 0) {
            this.elements.push(...newElements);
            return true;
        }
        return false;
    }
    // Inserts new elements at a specific position in the collection
    public insertElements(newElements: Array<T>, insertIndex: number): boolean {
        if (!newElements || newElements.length === 0) return false;

        // Adjust the index if it's out of range
        if (insertIndex < 0) {
            insertIndex = 0;
        } else if (insertIndex > this.elements.length) {
            insertIndex = this.elements.length;
        }

        this.elements.splice(insertIndex, 0, ...newElements);
        return true;
    }        
*/