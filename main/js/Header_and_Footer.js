y = document.body.innerHTML = `<header>
		<a id="logoholder" href="index.html"><img id="logo" src="media/images/logo.png" alt="henrik-logo"></a>
		<a href="javascript:void(0);" class="bars" id="bars" onclick="myFunction()"><i class="fa fa-bars fa-2x"></i></a>
		<a href="javascript:void(0);" class="cross" id="cross" onclick="myFunction()"><i class="fas fa-times fa-2x"></i></a>
		<nav class="topnav" id="myTopnav">
			<a class="nav" href="index.html">Forside</a><div></div>
			<a class="nav" href="etymylogi.html">Etymologi</a><div></div>
			<a class="nav" href="bli_en_henrik.html">Bli en Henrik</a><div></div>
			<a class="nav" href="historiske_henriker.html">Historiske Henriker</a><div></div>
			<a class="nav" href="henrik_or_not.html">Henrik or not?</a><div></div>
			<a class="nav" href="sitater.html">Sitater</a>
		</nav>
	</header>` + document.body.innerHTML + `<footer>
		<p>Nettsiden er produsert av Daniel Jan Axlid, Henrik Ytrehus Ågotnes, Thomas Baugerød, Jakob Lien og Morten Tobias Rinde Sunde</p>
	</footer>`;/*Dette setter inn Header og Footer før og etter body*/


function myFunction() {
	var nav = Array.from(document.getElementsByClassName("nav"))
	var x = document.getElementById("myTopnav");
	var bars = document.getElementById("bars");
	var cross = document.getElementById("cross");
	var h = window.innerHeight;
	if (x.className === "topnav"){
		x.className += " responsive";
	} 
	else {
		x.className = "topnav";
	}
	if (bars.className === "bars"){
		bars.className += " responsive"
	}
	else {
		bars.className = "bars";
	}
	if (cross.className === "cross"){
		cross.className += " responsive"
	}
	else {
		cross.className = "cross";
	}
	for (let item of nav) {
		if (item.className === "nav"){
			item.className += " responsive";
		}
	 	else {
			item.className = "nav";
		}
	}
}