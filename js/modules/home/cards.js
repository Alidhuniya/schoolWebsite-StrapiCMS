import { localhost } from "./../../adminUrl.js";
export const Cards = async () => {
	try {
		const url = `${localhost}/overlay-cards`;
		const ftch = await fetch(url);
		const data = await ftch.json();
		const result = data;
        // console.log(result);
        

        document.querySelector(".cards__h3ele").textContent = `${result[0].card[0].cardInfo}`;
        document.querySelector(".cards__h3ele1").textContent = `${result[0].card[1].cardInfo}`;
        document.querySelector(".cards__h3ele2").textContent = `${result[0].card[2].cardInfo}`;
	} catch (error) {
		console.log("Failed", error);
	}
};
