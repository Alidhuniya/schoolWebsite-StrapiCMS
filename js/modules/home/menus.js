// top nav
import { localhost } from "./../../adminUrl.js";
export const Menus = async () => {

    try {

        const url = `${localhost}/navbars`;
        const ftch = await fetch(url);
        const data = await ftch.json();
        const result = data;
        // console.log(result);

      document.querySelector(".navbar__img").src=`${result[0].logoImg.url}`;
      
      const home = document.querySelector(".navbar__list0").textContent = `${result[0].navMenus[0].navlink}`;
      const notice = document.querySelector(".navbar__list1").textContent = `${result[0].navMenus[1].navlink}`;
      const resultsection = document.querySelector(".navbar__list2").textContent = `${result[0].navMenus[2].navlink}`;
      const event = document.querySelector(".navbar__list3").textContent = `${result[0].navMenus[3].navlink}`;
      const schoolLife = document.querySelector(".navbar__list4").textContent = `${result[0].navMenus[4].navlink}`;
      const management = document.querySelector(".navbar__list5").textContent = `${result[0].navMenus[5].navlink}`;
      const contact = document.querySelector(".navbar__list6").textContent = `${result[0].navMenus[6].navlink}`;
      const admission = document.querySelector(".navbar__list7span").textContent = `${result[0].navMenus[7].navlink}`;

      

// define all UI variable
const navToggler = document.querySelector('.navbar__toggler');
const navMenu = document.querySelector('.navbar__ul');
const navLinks = document.querySelectorAll('.navbar__list');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}

    }

    catch(error) {
        console.log("Request Failed", error);
    }
}

