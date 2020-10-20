var slideIndex =0
var slides = document.getElementsByClassName("slides")
// inspired by https://www.w3schools.com/howto/howto_js_slideshow.asp
for (i = 1; i < slides.length; i++) { // hides all slides except henry IV

    slides[i].style.display = "none";
  }
function newSlide(i){ // input is either -1 or +1 for previous or next
    if ( slides.length == slideIndex+i){  // last slide and trying to go right: start at beginning instead
        slides[slideIndex].style.display = "none"  // hide current slide
        slideIndex=0  // change slide index to first image
        slides[slideIndex].style.display = "block"
    }
    else if (slideIndex+i ==-1){  //  first slide and trying to go left: Go to end instead.
        console.log(i, slideIndex)
        slides[slideIndex].style.display = "none"
        slideIndex=6
        slides[slideIndex].style.display = "block"
    }
    else{  // no edge cases to worry about
    slides[slideIndex].style.display = "none"  // hide current, show next slide
    slides[slideIndex+i].style.display = "block"
    slideIndex += i
    }
    
}

// inspired by https://stackoverflow.com/questions/5597060/detecting-arrow-key-presses-in-javascript
document.onkeydown = checkKey;  // On key press, the function below is called with parameter e

function checkKey(e) {
    /*
    e = e || window.event if event parameter is undefined, set e to window.event "It's to make it work on old versions of IE (pre IE9)
     where the event was not passed into the handler function. – Mark Rhodes" 
    */
    e = e || window.event;  

    if (e.keyCode == '37') {  // the event object contains the keycode that triggered the function call. 
        newSlide(-1)
       // '37' is left arrow
    }
    else if (e.keyCode == '39') {
        newSlide(1)
       // '39' is right arrow
    }

}