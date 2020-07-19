
 import { localhost } from "./../../adminUrl.js";

 export const Notices = async () => {
 
    try {

        const url = `${localhost}/notices?_sort=id:DESC`;
        const ftch = await fetch(url);
        const data = await ftch.json();
        const result = data;
        console.log(result);

     
        document.querySelector(".notices__heading").textContent = "Notice";

        
        for (let i in result) {
             const containerLists = document.querySelector(".notice__open");
            
        const leftDiv = document.createElement("div");
        const rightDiv = document.createElement("div");

        const day = document.createElement("p");
        day.textContent = `${result[i].day}`;
        const monthYr = document.createElement("p");
        monthYr.textContent = `${result[i].yearmonth}`;

        const title = document.createElement("h1");
        title.textContent = `${result[i].title}`;
        const desc = document.createElement("p");
        desc.textContent = `${result[i].desc}`;
        const readmore = document.createElement("p");
        readmore.textContent = `${result[i].readmore}`;

        // adding in left div
        leftDiv.appendChild(day);
        leftDiv.appendChild(monthYr);

        // adding in right div
        rightDiv.appendChild(title);
        rightDiv.appendChild(desc);
        rightDiv.appendChild(readmore);

        containerLists.appendChild(leftDiv);
        containerLists.appendChild(rightDiv);
        }
        
    

    }
    catch(error) {
        console.log("failed", error);
    }
    }