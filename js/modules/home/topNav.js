// top nav

export const topNav = async () => {

    try {

        const url = "http://localhost:1337/topnavs";
        const ftch = await fetch(url);
        const data = await ftch.json();
        const result = data;
        // console.log(result);

        document.getElementById("topNav").innerHTML = `
        <div class="topHeader">

        <div class="topHeader__left">
        <p class="topHeader__msg"> ${result[0].msg} </p> 
         </div>

        <div class="topHeader__right"> 
        <p class="topHeader__samStyl"><i  class="fas fa-phone-alt topHeader__samStyl"></i>${result[0].topAddress[0].phoneNumber}</p>
        <p class="topHeader__samStyl"><i class="fas fa-map-marker-alt topHeader__samStyl"></i>${result[0].topAddress[0].location}</p>
        </div>

        </div>
        `;
    }

    catch(error) {
        console.log("Request Failed", error);
    }
}

