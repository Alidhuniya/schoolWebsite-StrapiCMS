


 import { localhost } from "./../../adminUrl.js";
 export const Principal = async () => {
 
 
 
     try {
 
         const url = `${localhost}/home-section-3-s`;
         const ftch = await fetch(url);
         const data = await ftch.json();
         const result = data;
        //   console.log(result[0].imgPrincipal.url);

        document.querySelector(".principalSection__p0").textContent = `${result[0].p0}`;
        document.querySelector(".principalSection__h1").textContent = `${result[0].h1}`;
        document.querySelector(".principalSection__p1").textContent = `${result[0].p1}`;
        
        document.querySelector(".principalSection__Img").src = `${result[0].imgPrincipal.url}`;

        
 }
 
 
 
 catch(error) {
     console.log("Failed", error);
 }
 
 }
 
 
   
 
 