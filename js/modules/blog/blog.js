
 import { localhost } from "./../../adminUrl.js";

 export const Blog = async () => {
 
    try {

        const url = `${localhost}/eventsblogs?_sort=id:DESC`;
        const ftch = await fetch(url);
        const data = await ftch.json();
        const result = data;
        // console.log(result[0].postcontent);

     
        
        }
        
    

    
    catch(error) {
        console.log("failed", error);
    }
    }