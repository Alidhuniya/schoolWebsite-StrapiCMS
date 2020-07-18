


 import { localhost } from "./../../adminUrl.js";
 export const About = async () => {
 
 
 
     try {
 
         const url = `${localhost}/home-section-2-s`;
         const ftch = await fetch(url);
         const data = await ftch.json();
         const result = data;
        //   console.log(result[0].p1);

        document.querySelector(".aboutSection__h1").textContent = `${result[0].h3}`;
        document.querySelector(".aboutSection__h3").textContent = `${result[0].h1}`;
        document.querySelector(".aboutSection__p0").textContent = `${result[0].p0}`;
        document.querySelector(".aboutSection__p1").textContent = `${result[0].p2}`;
        document.querySelector(".aboutSection__p2").textContent = `${result[0].p1}`;
         document.querySelector(".aboutSection__bannerImg").src = `${result[0].img[0].url}`;

        
 }
 
 
 
 catch(error) {
     console.log("Failed", error);
 }
 
 }
 
 
   
 
 