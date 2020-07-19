


 import { localhost } from "./../../adminUrl.js";

 export const Notices = async () => {
 
    try {

        const url = `${localhost}/navbars`;
        const ftch = await fetch(url);
        const data = await ftch.json();
        const result = data;
        // console.log(result);

      
    }

    catch(error) {
        console.log("Request Failed", error);
    }
 }
 
 
   
 
 