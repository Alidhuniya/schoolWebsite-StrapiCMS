
 import { localhost } from "./../../adminUrl.js";

 export const HomeNotices = async () => {
 
    try {

        const url = `${localhost}/notices?_sort=id:DESC&_limit=3`;
        const ftch = await fetch(url);
        const data = await ftch.json();
        const result = data;
        // console.log(result[0].postcontent);

     
        document.querySelector(".notices__heading").textContent = "Notice";

        
        for (let i in result) {
        const containerLists = document.querySelector(".notices__lists");
        
        
        const leftDiv = document.createElement("div");
        leftDiv.classList = "leftDvnotice";
        const rightDiv = document.createElement("div");
        rightDiv.classList = "rightDvnotice";

        const day = document.createElement("p");
        day.textContent = `${result[i].day}`;
        day.classList = "noticeSection"
        const monthYr = document.createElement("p");
        monthYr.textContent = `${result[i].yearmonth}`;
        monthYr.classList = "noticeyrmonth";

        const title = document.createElement("h1");
        title.textContent = `${result[i].title}`;
        title.classList = "notice__h1"
        const desc = document.createElement("p");
        desc.textContent = `${result[i].desc}`;
        desc.classList = "notice__parag"
        const readmore = document.createElement("p");
        readmore.classList = "bywho";
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

      
            

          
        

 
            const postDv = document.createElement("div");
            const contents = document.createElement("p");
            contents.textContent = `${result[i].postcontent}`;

            contents.appendChild(postDv);

            containerLists.appendChild(postDv);
      

    

        }
        
    

    }
    catch(error) {
        console.log("failed", error);
    }
    }