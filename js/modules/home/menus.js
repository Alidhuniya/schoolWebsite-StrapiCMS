// top nav
import { localhost } from "./../../adminUrl.js";
export const Menus = async () => {

    try {

        const url = `${localhost}/navbars`;
        const ftch = await fetch(url);
        const data = await ftch.json();
        const result = data;
        // console.log(result[0].navMenus[0].navlink);

        document.getElementById("nav").innerHTML = `
       
        
  <div class="navbar">
    <div class="navbar__container">
      <nav class="navbar__block">
     
        <a href="#"class="navbar__logo"><img  src="${localhost}${result[0].logoImg.url}" /></a>

        
        <ul class="navbar__ul">
  <li><a class="navbar__list" href="#">${result[0].navMenus[0].navlink}</a></li>
  <li><a class="navbar__list" href="#">${result[0].navMenus[1].navlink}</a></li>
  <li><a class="navbar__list" href="#">${result[0].navMenus[2].navlink}</a></li>
  <li><a class="navbar__list" href="#">${result[0].navMenus[3].navlink}</a></li>
  <li><a class="navbar__list" href="#">${result[0].navMenus[4].navlink}</a></li>
  <li><a class="navbar__list" href="#">${result[0].navMenus[5].navlink}</a></li>
  <li><a class="navbar__list" href="#">${result[0].navMenus[6].navlink}</a></li>
  <li><a class="navbar__list" href="#">${result[0].navMenus[7].navlink}</a></li>

</ul>
       
        <button class="navbar__toggler">
          <span></span>
        </button>
      </nav>
    </div>
  </div>
        `;
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

