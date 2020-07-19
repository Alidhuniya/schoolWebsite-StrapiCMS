
 import { localhost } from "./../../adminUrl.js";

 export const Notices = async () => {
 
    try {

        const url = `${localhost}/notices`;
        const ftch = await fetch(url);
        const data = await ftch.json();
        const result = data;
        // console.log(result);

        document.querySelector(".notices__heading").textContent = "Notice";

        const containerLists = document.querySelector(".notice__open");
            
        const leftDiv = document.createElement("div");
        const rightDiv = document.createElement("div");

        const day = document.createElement("p");
        day.textContent = `${result[0].day}`;
        const monthYr = document.createElement("p");
        monthYr.textContent = `${result[0].yearmonth}`;

        const title = document.createElement("h1");
        title.textContent = `${result[0].title}`;
        const desc = document.createElement("p");
        desc.textContent = `${result[0].desc}`;
        const readmore = document.createElement("p");
        readmore.textContent = `${result[0].readmore}`;

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
    catch(error) {
        console.log("failed", error);
    }
    }