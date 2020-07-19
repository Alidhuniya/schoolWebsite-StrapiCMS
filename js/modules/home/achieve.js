import { localhost } from "./../../adminUrl.js";
export const Achieve = async () => {
	try {
		const url = `${localhost}/home-section-5-s`;
		const ftch = await fetch(url);
		const data = await ftch.json();
		const result = data;
        // console.log(result);
        
        document.querySelector(".achieve__h1").textContent = `${result[0].h1}`;
        document.querySelector(".achieve__h3").textContent = `${result[0].achieve[0].heading}`;
        document.querySelector(".achieve__p").textContent = `${result[0].achieve[0].title}`;

        
        document.querySelector(".achieve__h31").textContent = `${result[0].achieve[1].heading}`;
        document.querySelector(".achieve__p1").textContent = `${result[0].achieve[1].title}`

        
        document.querySelector(".achieve__h32").textContent = `${result[0].achieve[2].heading}`;
        document.querySelector(".achieve__p2").textContent = `${result[0].achieve[2].title}`

       
        document.querySelector(".achieve__h33").textContent = `${result[0].achieve[3].heading}`;
        document.querySelector(".achieve__p3").textContent = `${result[0].achieve[3].title}`


	} catch (error) {
		console.log("Failed", error);
	}
};
