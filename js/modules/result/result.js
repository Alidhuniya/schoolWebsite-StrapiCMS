
 import { localhost } from "./../../adminUrl.js";

 export const Results = async () => {
 
    try {

        const url = `${localhost}/results?_sort=id:DESC`;
        const ftch = await fetch(url);
        const data = await ftch.json();
        const result = data;
        // console.log(result);

        for (var i = 0; i < result.length; i++) {
            const container = document.querySelector(".result");

            const dv = document.createElement("div");
            dv.classList = "resultDiv";

            const heading = document.createElement("h1");
            heading.textContent = `${result[i].heading}`;
            heading.classList="result__h1";

            const pdf = document.createElement("a");
            pdf.textContent = "Download Result";
            pdf.setAttribute('download', "download");
            pdf.href = `${result[i].pdf[0].url}`;

            dv.appendChild(heading);
            dv.appendChild(pdf);

            container.appendChild(dv);
          }


        }
        
    

    
    catch(error) {
        console.log("failed", error);
    }
    }