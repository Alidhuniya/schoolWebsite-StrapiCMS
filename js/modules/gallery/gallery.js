
 import { localhost } from "./../../adminUrl.js";

 export const Gallery = async () => {
 
    try {

        const url = `${localhost}/galleries?_sort=id:DESC`;
        const ftch = await fetch(url);
        const data = await ftch.json();
        const result = data;
        console.log(result);

        for (let i in result[0].img) {
            const output = document.querySelector(".output");

            const img = document.createElement("img");
            img.src= `${result[0].img[i].galleryimg.url}`;
            img.classList= "galleryImg";

            output.appendChild(img);
        }
        

        
    }
        
    

    
    catch(error) {
        console.log("failed", error);
    }
    }

   