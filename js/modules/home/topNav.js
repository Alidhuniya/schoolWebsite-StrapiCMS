// top nav
import { localhost } from "./../../adminUrl.js";
export const topNav = async () => {

    try {

        const url = `${localhost}/topnavs`;
        const ftch = await fetch(url);
        const data = await ftch.json();
        const result = data;
        // console.log(result);

      const msg = document.querySelector(".topHeader__msg").textContent = `${result[0].wlcmMsg}`;
      const number = document.querySelector(".number").textContent = `${result[0].phoneNumber}`;
      const location = document.querySelector(".location").textContent = `${result[0].location}`;
    }

    catch(error) {
        console.log("Request Failed", error);
    }
}

