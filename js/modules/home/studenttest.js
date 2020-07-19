import { localhost } from "./../../adminUrl.js";
export const studentTestimonials = async () => {
	try {
		const url = `${localhost}/home-section-8-s`;
		const ftch = await fetch(url);
		const data = await ftch.json();
        const result = data;
        // console.log(result[0].studentstestimonials[0].studentImg.url);
        // console.log(result.studentTestimonials[0].studentImg.url);

        document.querySelector(".container9__h1").textContent = `${result[0].testimonialHeading}`;
        document.querySelector(".container9__p0").textContent = `${result[0].testimonialdesc}`;


       for (let y in result[0].studentstestimonials) {
          const container =  document.getElementById("testim-content");

           const divL = document.createElement("div");

          

         const h2 = document.createElement("h2");
         h2.textContent = `${result[0].studentstestimonials[y].status}`;

         const desc = document.createElement("p");
         desc.textContent = `${result[0].studentstestimonials[y].saying}`;
        desc.classList = "quote__desc";
        
         divL.appendChild(h2);
         divL.appendChild(desc);

        container.appendChild(divL);

       }


       'use strict'
var	testim = document.getElementById("testim"),
		testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
		touchStartPos,
		touchEndPos,
		touchPosDiff,
		ignoreTouch = 30;
;



    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");            
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })    

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;
                
            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })
		
		testim.addEventListener("touchstart", function(e) {
				touchStartPos = e.changedTouches[0].clientX;
		})
	
		testim.addEventListener("touchend", function(e) {
				touchEndPos = e.changedTouches[0].clientX;
			
				touchPosDiff = touchStartPos - touchEndPos;
			
				console.log(touchPosDiff);
				console.log(touchStartPos);	
				console.log(touchEndPos);	

			
				if (touchPosDiff > 0 + ignoreTouch) {
						testimLeftArrow.click();
				} else if (touchPosDiff < 0 - ignoreTouch) {
						testimRightArrow.click();
				} else {
					return;
				}
			
		})

        

     
document.querySelector(".app__btn").addEventListener("click", ()=> {
    location.href= "https://play.google.com/store/apps/details?id=com.maxconnect.saiglobalsss&hl=es_UY";
})

	} catch (error) {
		console.log("Failed", error);
	}
};


