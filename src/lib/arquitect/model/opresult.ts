//only server

import { OpCfg } from "./opconfig";


/**
 * class OpResult
 */
export class OpResult {

    static SUCCESS = new OpResult(OpCfg.RES_SUCCESS);
    static ERROR = new OpResult(OpCfg.RES_ERROR);

    public result:string;
    public message:string;

    constructor(result:string,message?:string){
        this.result = result;
        this.message = message ?? OpCfg.RES_UNDEFINED;
    }
    
    public isSuccess():boolean{
        if(this.result === OpCfg.RES_SUCCESS){
            return true;
        }
        return false;
    }

}//end class


