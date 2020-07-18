


 import { localhost } from "./../../adminUrl.js";
 export const Admission = async () => {
 
 
 
     try {
 
         const url = `${localhost}/home-section-1-s`;
         const ftch = await fetch(url);
         const data = await ftch.json();
         const result = data;
        //  console.log(result[0].h1);

        document.querySelector(".admissionSection__h1").textContent = `${result[0].h1}`;
        document.querySelector(".admissionSection__p0").textContent = `${result[0].p0}`;
        document.querySelector(".admissionSection__h3").textContent = `${result[0].h2}`;
        document.querySelector(".admissionSection__h4").textContent = `${result[0].h3}`;
        document.querySelector(".admissionSection__p1").textContent = `${result[0].p1}`;
        document.querySelector(".admissionSection__number").textContent = `${result[0].phoneNumber}`;
        document.querySelector(".admissionSection__bannerImg").src = `${result[0].img.formats.small.url}`;
        
 }
 
 
 
 catch(error) {
     console.log("Failed", error);
 }
 
 }
 
 
   
 
 