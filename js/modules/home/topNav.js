// top nav
import { localhost } from "./../../adminUrl.js";
export const topNav = async () => {

    try {

        const url = `${localhost}/topnavs`;
        const ftch = await fetch(url);
        const data = await ftch.json();
        const result = data;
        // console.log(result);

        document.getElementById("topNav").innerHTML = `
        <div class="topHeader">

        <div class="topHeader__left">
        <p class="topHeader__msg"> ${result[0].wlcmMsg} </p> 
         </div>

        <div class="topHeader__right"> 
        <p class="topHeader__samStyl"><i  class="fas fa-phone-alt topHeader__samStyl"></i>${result[0].phoneNumber}</p>
        <p class="topHeader__samStyl"><i class="fas fa-map-marker-alt topHeader__samStyl"></i>${result[0].location}</p>
        </div>

        </div>
        `;
    }

    catch(error) {
        console.log("Request Failed", error);
    }
}

