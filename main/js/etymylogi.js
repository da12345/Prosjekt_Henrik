alert("På denne siden kan du høre uttalen av variantene av navnet ved å holde musepekeren over ordet i teksten.")
function uttal(ord){
	document.querySelector("#"+ord).play();
}