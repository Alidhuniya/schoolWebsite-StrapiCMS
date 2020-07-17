


 import { localhost } from "./../../adminUrl.js";
export const Slider = async () => {



    try {

        const url = `${localhost}/sliders`;
        const ftch = await fetch(url);
        const data = await ftch.json();
        const result = data;
        console.log(result);
        // console.log(result[0].imgSlider[0].images[1].formats.large.url);

        document.querySelector(".slider__image1").src = `${localhost}${result[0].imgSlider[0].images[0].formats.large.url}`;
        document.querySelector(".slider__image2").src = `${localhost}${result[0].imgSlider[1].images[0].url}`;
        document.querySelector(".slider__image3").src = `${localhost}${result[0].imgSlider[2].images[0].formats.thumbnail.url}`;



    
}



catch(error) {
    console.log("Failed", error);
}

}


  

