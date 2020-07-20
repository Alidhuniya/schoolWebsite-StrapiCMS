
 import { localhost } from "./../../adminUrl.js";

 export const Blog = async () => {
 
    try {

        const url = `${localhost}/eventsblogs?_sort=id:DESC`;
        const ftch = await fetch(url);
        const data = await ftch.json();
        const result = data;
        //console.log(result[0].content);

     
        for (let i in result) {

            const container = document.querySelector(".blog__container");

            const dv = document.createElement("div");
            dv.classList = "blog__single";
           


            const img = document.createElement("img");
            img.classList = "blog__img"
            img.src= `${result[i].thumbnailimg.url}`;

            
            const heading = document.createElement("h1");
            heading.classList = "blog__heading";
            heading.textContent = `${result[i].title}`;

            const desc = document.createElement("p");
            desc.classList =" description";
            desc.textContent = `${result[i].description}`;

            const date = document.createElement("p");
            date.classList ="date";
            date.textContent = `${result[i].date}`;

           const hrf = document.createElement("a");
           hrf.classList = "below";
           hrf.textContent = "Read More Below:";
          

          
            const readmore = document.createElement("div");
            readmore.classList = "readmore";
            readmore.textContent = `${result[i].content}`;


            const hr = document.createElement("hr");
           
            
           

           
        

           
            dv.appendChild(img);
            dv.appendChild(heading);
            dv.appendChild(desc);
            dv.appendChild(date);
            dv.appendChild(hrf);
            dv.appendChild(readmore);
            dv.appendChild(hr);
           

            container.appendChild(dv);

           
            
     

            
        
        }

    }
        
    

    
    catch(error) {
        console.log("failed", error);
    }
    }

   