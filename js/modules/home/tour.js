import { localhost } from "./../../adminUrl.js";
export const Tour = async () => {
	try {
		const url = `${localhost}/home-section-6-s`;
		const ftch = await fetch(url);
		const data = await ftch.json();
		const result = data;
        // console.log(result);
        
        document.querySelector(".tour__h1").textContent = `${result[0].heading}`;
        document.querySelector(".tour__desc").textContent = `${result[0].desc}`;
       document.querySelector(".tour__icon").addEventListener("click", ()=> {
           location.href="https://www.youtube.com/watch?v=k7CNBJeTMsM";
       })

        


	} catch (error) {
		console.log("Failed", error);
	}
};
