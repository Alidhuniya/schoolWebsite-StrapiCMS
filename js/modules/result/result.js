
 import { localhost } from "./../../adminUrl.js";

 export const Results = async () => {
 
    try {

        const url = `${localhost}/results?_sort=id:DESC`;
        const ftch = await fetch(url);
        const data = await ftch.json();
        const result = data;
        // console.log(result[0].pdf[0].url);

        // for (let i in result) {

        //     const container = document.querySelector(".result__container");

        //     const dv = document.createElement("div");

        //     const heading = document.createElement("h1");
        //     heading.textContent = `${result[i].heading}`;

        //     const pdf = document.createElement("a");
        //     pdf.textContent = "Download Result";
        //     pdf.setAttribute('download', "download");
        //     pdf.href = `${result[i].pdf[i].url}`;

        //     dv.appendChild(heading);
        //     dv.appendChild(pdf);

        //     container.appendChild(dv);

           
        // }

        for (var i = 0; i < result.length; i++) {
            const container = document.querySelector(".result__container");

            const dv = document.createElement("div");

            const heading = document.createElement("h1");
            heading.textContent = `${result[i].heading}`;

            const pdf = document.createElement("a");
            pdf.textContent = "Download Result";
            pdf.setAttribute('download', "download");
            pdf.href = `${result[i].pdf[i].url}`;

            dv.appendChild(heading);
            dv.appendChild(pdf);

            container.appendChild(dv);
          }


        }
        
    

    
    catch(error) {
        console.log("failed", error);
    }
    }