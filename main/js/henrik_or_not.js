var slideIndex = 0
var slides = document.getElementsByClassName("formsection")
var button = document.getElementById("henrikkjenner")
var previous = document.getElementById("previous")
var next = document.getElementById("next")


for (i = 1; i < slides.length; i++) { // hides all slides except one
    slides[i].style.display = "none";
}

function newSlide(i){ // either -1 or +1
    console.log(slideIndex)
    if (slideIndex+i == -1){  //  first slide and trying to go left: Go to end instead.
        previous.style.display = "none"
    }
    else if (slides.length == slideIndex+i){  // last slide and trying to go right: start at beginning instead
        previous.style.display = "none"
    }
    else{  // no edge cases to worry about
        slides[slideIndex].style.display = "none"  // hide current, show next slide
        slides[slideIndex+i].style.display = "block"
        slideIndex += i
    }
    
}

  /*  slides[slideIndex].style.display = "none"  // hide current, show next slide
    if (slideIndex<5) {
        slides[slideIndex+i].style.display = "block"
        slideIndex += i
    }
}*/

document.onkeydown = checkKey;

// inspired by https://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript
function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '37') {
        newSlide(-1)
       // left arrow
    }
    else if (e.keyCode == '39') {
        newSlide(1)
       // right arrow
    }
}


/*const fasitenVÅR = []
function sjekkSvar(){
	
}*/

	
