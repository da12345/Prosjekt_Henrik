window.playing = false;
function uttal(ord){
	let audioElem = document.querySelector("#"+ord);
	if(!window.playing){
		window.playing = true;
		audioElem.play();
		setTimeout(function(){ 
			window.playing = false;
		}, audioElem.duration*1000);
	}
}