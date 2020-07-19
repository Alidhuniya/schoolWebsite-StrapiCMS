
 import { localhost } from "./../../adminUrl.js";

 export const Notices = async () => {
 
    try {

        const url = `${localhost}/notices`;
        const ftch = await fetch(url);
        const data = await ftch.json();
        const result = data;
        console.log(result);

     
        document.querySelector(".notices__heading").textContent = "Notice";

        // const containerLists = document.querySelector(".notice__open");
            
        // const leftDiv = document.createElement("div");
        // const rightDiv = document.createElement("div");

        // const day = document.createElement("p");
        // day.textContent = `${result[0].day}`;
        // const monthYr = document.createElement("p");
        // monthYr.textContent = `${result[0].yearmonth}`;

        // const title = document.createElement("h1");
        // title.textContent = `${result[0].title}`;
        // const desc = document.createElement("p");
        // desc.textContent = `${result[0].desc}`;
        // const readmore = document.createElement("p");
        // readmore.textContent = `${result[0].readmore}`;

        // // adding in left div
        // leftDiv.appendChild(day);
        // leftDiv.appendChild(monthYr);

        // // adding in right div
        // rightDiv.appendChild(title);
        // rightDiv.appendChild(desc);
        // rightDiv.appendChild(readmore);

        // containerLists.appendChild(leftDiv);
        // containerLists.appendChild(rightDiv);

        // const containerLists1 = document.querySelector(".notice__open1");
            
        // const leftDiv1 = document.createElement("div");
        // const rightDiv1 = document.createElement("div");

        // const day1 = document.createElement("p");
        // day1.textContent = `${result[1].day}`;
        // const monthYr1 = document.createElement("p");
        // monthYr1.textContent = `${result[1].yearmonth}`;

        // const title1 = document.createElement("h1");
        // title1.textContent = `${result[1].title}`;
        // const desc1 = document.createElement("p");
        // desc1.textContent = `${result[1].desc}`;
        // const readmore1 = document.createElement("p");
        // readmore1.textContent = `${result[1].readmore}`;

        // // adding in left div
        // leftDiv1.appendChild(day1);
        // leftDiv1.appendChild(monthYr1);

        // // adding in right div
        // rightDiv1.appendChild(title1);
        // rightDiv1.appendChild(desc1);
        // rightDiv1.appendChild(readmore1);

        // containerLists1.appendChild(leftDiv1);
        // containerLists1.appendChild(rightDiv1);


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