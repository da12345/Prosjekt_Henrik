document.onreadystatechange = function(e){
	if (document.readyState === 'interactive'){
		let henrik_type = window.confirm("Er du enten en ekte Henrik, eller en Henrik på innsiden\n Trykk \"OK\" for å bekrefte.");
		if(!henrik_type){
			document.body.innerHTML = "403 Forbidden";
		}
	}
}

function henrikType(){
	let form = document.forms[0];
	if(document.forms[0].fornavn.value === "Henrik"){
		document.forms[0].HenrikType.value = "Ekte Henrik";
	}else{
		document.forms[0].HenrikType.value = "Henrik på innsiden";
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
		alert("Signer Versaitraktaten")
		return false;
	}
	
	return true;
}