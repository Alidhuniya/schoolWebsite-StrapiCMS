import { localhost } from "./../../adminUrl.js";
export const Courses = async () => {
	try {
		const url = `${localhost}/home-section-7-s`;
		const ftch = await fetch(url);
		const data = await ftch.json();
		const result = data;
        // console.log(result);
        
      document.querySelector(".courses__h1").textContent = `${result[0].heading}`;
      document.querySelector(".courses__p").textContent = `${result[0].title}`;

      for (let i in result[0].coursesOffered) {

        const cards = document.querySelector(".courses__cards");

        const divList = document.createElement("div");
        divList.classList = "courses__listDv";

        const h2 = document.createElement("h2");
        h2.textContent = `${result[0].coursesOffered[i].coursetitle}`;
        h2.classList = "courses__h2";
        const p = document.createElement("p");
        p.textContent = `${result[0].coursesOffered[i].coursedesc}`;
        p.classList = "courses__desc";


        divList.appendChild(h2);
        divList.appendChild(p);

        cards.appendChild(divList);


        
      }
        


	} catch (error) {
		console.log("Failed", error);
	}
};
