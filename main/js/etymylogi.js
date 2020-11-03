window.playing = false;
function uttal(ord){/*Funksjon kallt når noen hoverer over orda*/
	let audioElem = document.querySelector("#"+ord);/*skaffer det koresponderende audioelementet*/
	let spanElem = document.querySelector("span[onmouseover=\"uttal('"+ord+"')\"]");/*skaffer det span elementet som kalla funksjonen*/
	if(!window.playing){/*Hvis ikkje allerede et audioskipp spiller*/
		spanElem.style.fontWeight = "bold";/*Gjør teksten fet*/
		window.playing = true;/*Registrer at vi starter et lydklipp*/
		audioElem.play();/*Spill av lydklippet*/
		setTimeout(function(){ /*Etter lydklippet er ferdig, slutt å vær fet skrift, og set playing(som registrerer om lydklipp spilles) til false*/
			window.playing = false;
			spanElem.style.fontWeight = "";
		}, audioElem.duration*1000);/*Konvertering fra sekund te millisekund*/
	}
}