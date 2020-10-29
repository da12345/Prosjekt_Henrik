window.playing = false;
function uttal(ord){
	let audioElem = document.querySelector("#"+ord);
	let spanElem = document.querySelector("span[onmouseover=\"uttal('"+ord+"')\"]");
	if(!window.playing){
		spanElem.style.fontWeight = "bold";
		window.playing = true;
		audioElem.play();
		setTimeout(function(){ 
			window.playing = false;
			spanElem.style.fontWeight = "";
		}, audioElem.duration*1000);
	}
}