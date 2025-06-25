//src\app_front\codegen\util\codegenutil.ts

/**
 * class CodeGen Util 
 *  functions  for generate code
 */
export class CodeGenUtil {

    //CodeGenUtil.capitalize

    public static capitalize(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }
     

}//end class