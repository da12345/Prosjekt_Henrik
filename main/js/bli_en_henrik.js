var henrikKjenner = false;
document.onreadystatechange = function(e){
	if (document.readyState === 'interactive'){/*Når nettsiden er lastet inn kjører koden under*/
		henrikKjenner = new URLSearchParams(window.location.search).get('henrikKjenner')/*Sjekker om henrikKjenner er satt i URLen*/
		if(!(henrikKjenner)){
			let henrik_type = window.confirm("Er du enten en ekte Henrik, eller en Henrik på innsiden\n Trykk \"OK\" for å bekrefte.");/*popup confirm box*/
			if(!henrik_type){
				document.body.innerHTML = `<div style='font-family: none;'>403 Forbidden</div>
		<div class="tipBox">
			<p>Psst: Dette er ikke faktisk en http error, bare last inn siden på nytt og trykk ok i stedet for avbryt:)</p>
			<button onclick="this.parentElement.remove()">Ok!</button>
		</div>`;/*Om brukeren trykker avbryt blir heile body erstattet med 403: forbidden*/
			}
		}else{
			document.forms[0].HenrikType.value = "Henrik-Kjenner!";/*Hvis henrikKjenner er satt setter vi feltet i formet*/
		}
	}
}

function henrikType(){
	if(!henrikKjenner){
		let form = document.forms[0];
		if(form.fornavn.value === "Henrik"){/*Hvis brukeren har fyllt inn Henrik som fornavn skal HenrikType erstattes med Ekte Henrik*/
			form.HenrikType.value = "Ekte Henrik";
		}else{
			form.HenrikType.value = "Henrik på innsiden";/*Om ikkje, Henrik på innsiden*/
		}
	}
}

function validateForm(){/*Går gjennom og sjekker at alle felt er fyllt inn*/
	let form = document.forms[0];
	if(form["fornavn"].value === ""){/*Sjekker at fornavn er fyllt inn*/
		alert("Fyll inn fornavnet ditt")
		return false;
	}
	if(form["etternavn"].value === ""){/*Sjekker at etternavn er fyllt inn*/
		alert("Fyll inn etternavnet ditt")
		return false;
	}
	
	if(form["alder"].value === ""){/*Sjekker at alder er fyllt inn*/
		alert("Fyll inn alderen din")
		return false;
	}
	
	if(!(19 <= parseInt(form["alder"].value) && parseInt(form["alder"].value) <= 100)){/*Sjekker at alder er gyldig(mellom 19 og 100)*/
		alert("Sett inn en gyldig alder mellom 19 og 100(begge inklusive)")
		return false;
	}
	
	if(!form["versaiTraktaten"].checked){/*Sjekker at versaillestraktaten er signert*/
		alert("Samtykk til vilkårene i Versaillestraktaten")
		return false;
	}
	
	return true;/*Om koden kommer hit er alt fyllt in korrekt*/
}

function submitForm(){
	if(validateForm()){/*Hvis formet er validert*/
		let form = document.forms[0]/*Mye formateringsgreier nedover her, basicly bare for å få E-Posten til å ikkje sjå dritt ut*/
		let sendStr = "mailto:jakoblien01@gmail.com?subject=Autoutfyllt epost fra Henrik Nettsida&body=Hei ærede Henriker %0d%0aJeg vil gjerne melde meg inn i gruppen, og her er detaljene mine:";
		sendStr += "%0d%0a"+"Jeg har Henrik-type: "+form.HenrikType.value;/*Vi bare legger til på enden hver eneste ting, og "%0d%0a" gjør at den setter newline*/
		sendStr += "%0d%0a"+"Fornavnet mitt er: "+form.fornavn.value;
		sendStr += "%0d%0a"+"Etternavnet mitt er: "+form.etternavn.value;
		sendStr += "%0d%0a"+"Jeg er "+form.alder.value+" år gammel";
		if(form.versaiTraktaten.value === "on"){
			sendStr += "%0d%0a"+"Jeg samtykker til vilkårene i versaitraktaten";
		}else{
			sendStr += "%0d%0a"+"Jeg samtykker ikke til vilkårene i versaitraktaten";
		}
		window.open(sendStr);/*Åpne nytt vidu med mailto url, slik at den bare åpner epostklienten direkte. Dette slik at brukeren bare må trykke send inn en gang*/
	}
}