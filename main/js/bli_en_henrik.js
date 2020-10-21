document.onreadystatechange = function(e){
	if (document.readyState === 'interactive'){
		const henrikKjenner = new URLSearchParams(window.location.search).get('henrikKjenner')
		console.log(henrikKjenner)
		if(!(henrikKjenner)){
			let henrik_type = window.confirm("Er du enten en ekte Henrik, eller en Henrik på innsiden\n Trykk \"OK\" for å bekrefte.");
			if(!henrik_type){
				document.body.innerHTML = "<div style='font-family: none;'>403 Forbidden</div>";
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