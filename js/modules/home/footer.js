import { localhost } from "./../../adminUrl.js";
export const Footer = async () => {
	try {
		const url = `${localhost}/home-section-12-s`;
		const ftch = await fetch(url);
		const data = await ftch.json();
        const result = data;
        // console.log(result[0].footerMenus[0].navlinkitem);
		
		document.querySelector(".footer__img").src = `${result[0].footerLogo.url}`;
		document.querySelector(".footer__h4btm").textContent = `${result[0].footercopyright}`;
		document.querySelector(".footer__btmp").textContent = `${result[0].footerdesc}`;


		for (let i in result[0].footerMenus) {
			const menus = document.querySelector(".footer__nav");

			const list = document.createElement("div");
			list.classList = "footer__singleList";

			const link = document.createElement("a");
			link.textContent = `${result[0].footerMenus[i].navlinkitem}`;
			link.classList = "footer__linksHeading";

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


