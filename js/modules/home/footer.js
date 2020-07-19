import { localhost } from "./../../adminUrl.js";
export const Footer = async () => {
	try {
		const url = `${localhost}/home-section-12-s`;
		const ftch = await fetch(url);
		const data = await ftch.json();
        const result = data;
        // console.log(result[0].footerMenus[0].navlinkitem);
		
		document.querySelector(".footer__img").src = `${result[0].footerLogo.url}`;

		
		

		for (let i in result[0].footerMenus) {
			const menus = document.querySelector(".footer__nav");

			const list = document.createElement("div");

			const link = document.createElement("a");
			link.textContent = `${result[0].footerMenus[i].navlinkitem}`;

			list.appendChild(link);
			menus.appendChild(list);

			const contact = document.querySelector(".footer__contact");

			const contactList = document.createElement("div");

			const contactLists = document.createElement("i");
			contactLists.textContent = `${result[0].footerContactlinks[i].contactfooterlink}`;
			contactLists.classList = "footer__contactList";

			contactList.appendChild(contactLists);
			contact.appendChild(contactList);



		}
		


	} catch (error) {
		console.log("Failed", error);
	}
};


