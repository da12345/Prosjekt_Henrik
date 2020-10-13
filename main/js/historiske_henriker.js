var slideIndex =1
var slides = document.getElementsByClassName("slides")
// inspired by https://www.w3schools.com/howto/howto_js_slideshow.asp
for (i = 2; i < slides.length; i++) { // hides all slides except henry IV

    slides[i].style.display = "none";
  }
function newSlide(i){ // either -1 or +1
    if ( slides.length == slideIndex+i){  // last slide and trying to go right: start at beginning instead
        slides[slideIndex].style.display = "none"
        slideIndex=1
        slides[slideIndex].style.display = "block"
    }
    else if (slideIndex+i ==0){  //  first slide and trying to go left: Go to end instead.
        console.log(i, slideIndex)
        slides[slideIndex].style.display = "none"
        slideIndex=7
        slides[slideIndex].style.display = "block"
    }
    else{  // no edge cases to worry about
    slides[slideIndex].style.display = "none"  // hide current, show next slide
    slides[slideIndex+i].style.display = "block"
    slideIndex += i
    }
    
}

// inspired by https://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript
document.onkeydown = checkKey;

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