var henrikKjenner = false;
document.onreadystatechange = function(e){
	if (document.readyState === 'interactive'){
		henrikKjenner = new URLSearchParams(window.location.search).get('henrikKjenner')
		if(!(henrikKjenner)){
			let henrik_type = window.confirm("Er du enten en ekte Henrik, eller en Henrik på innsiden\n Trykk \"OK\" for å bekrefte.");
			if(!henrik_type){
				document.body.innerHTML = `<div style='font-family: none;'>403 Forbidden</div>
		<div class="tipBox">
			<p>Psst: Dette er ikke faktisk en http error, bare last inn siden på nytt og trykk ok i stedet for avbryt:)</p>
			<button onclick="this.parentElement.remove()">Ok!</button>
		</div>`;
			}
		}else{
			document.forms[0].HenrikType.value = "Henrik-Kjenner!";
		}
	}
}

function henrikType(){
	if(!henrikKjenner){
		let form = document.forms[0];
		if(form.fornavn.value === "Henrik"){
			form.HenrikType.value = "Ekte Henrik";
		}else{
			form.HenrikType.value = "Henrik på innsiden";
		}
	}
}

function validateForm(){
	let form = document.forms[0];
	if(form["fornavn"].value === ""){
		alert("Fyll inn fornavnet ditt")
		return false;
	}
	if(form["etternavn"].value === ""){
		alert("Fyll inn etternavnet ditt")
		return false;
	}
	
	if(form["alder"].value === ""){
		alert("Fyll inn alderen din")
		return false;
	}
	
	if(!form["versaiTraktaten"].checked){
		alert("Samtykk til vilkårene i Versaillestraktaten")
		return false;
	}
	
	return true;
}

function submitForm(){
	if(validateForm()){
		let form = document.forms[0]
		let sendStr = "mailto:jakoblien01@gmail.com?subject=Autoutfyllt epost fra Henrik Nettsida&body=Hei ærede Henriker %0d%0aJeg vil gjerne melde meg inn i gruppen, og her er detaljene mine:";
		sendStr += "%0d%0a"+"Jeg har Henrik-type: "+form.HenrikType.value;
		sendStr += "%0d%0a"+"Fornavnet mitt er: "+form.fornavn.value;
		sendStr += "%0d%0a"+"Etternavnet mitt er: "+form.etternavn.value;
		sendStr += "%0d%0a"+"Jeg er "+form.alder.value+" år gammel";
		if(form.versaiTraktaten.value === "on"){
			sendStr += "%0d%0a"+"Jeg samtykker til vilkårene i versaitraktaten";
		}else{
			sendStr += "%0d%0a"+"Jeg samtykker ikke til vilkårene i versaitraktaten";
		}
		window.open(sendStr);
	}
}