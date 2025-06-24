//src\twdaisy\twdaisyutil.ts


/**
 * class TwDaisyUtil
 * Tailwind Daisy Util functions
 * TwDaisyUtil.addSpace
 */
export class TwDaisyUtil {

    /**
    * Ass empty char space at then end of the string
    */
   static addSpace(str: string): string {
       return str.endsWith(' ') ? str : str + ' ';
   }

   
}//end class