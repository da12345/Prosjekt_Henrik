y = document.body.innerHTML = `<header>
		<a id="logoholder" href="index.html"><img id="logo" src="media/images/logo.png" alt="henrik-logo"></a>
		<a href="index.html" class="home" id="home" ><i class="fas fa-home fa-2x"></i></a>
		<a href="javascript:void(0);" class="bars" id="bars" onclick="myFunction()"><i class="fa fa-bars fa-2x"></i></a>
		<a href="javascript:void(0);" class="cross" id="cross" onclick="myFunction()"><i class="fas fa-times fa-2x"></i></a>
		<nav class="topnav" id="myTopnav">
			<a id="nav1" class="nav" href="index.html">Forside</a><div></div>
			<a id="nav2" class="nav" href="etymylogi.html">Etymologi</a><div></div>
			<a id="nav3" class="nav" href="bli_en_henrik.html">Bli en Henrik</a><div></div>
			<a id="nav4" class="nav" href="historiske_henriker.html">Historiske Henriker</a><div></div>
			<a id="nav5" class="nav" href="henrik_or_not.html">Henrik or not?</a><div></div>
			<a id="nav6" class="nav" href="sitater.html">Sitater</a>
		</nav>
	</header>` + document.body.innerHTML + `<footer>
		<p>Nettsiden er produsert av Daniel Jan Axlid, Henrik Ytrehus Ågotnes, Thomas Baugerød, Jakob Lien og Morten Tobias Rinde Sunde</p>
	</footer>`;
	
function myFunction() {
	var x = document.getElementById("myTopnav");
	var a = document.getElementById("nav1");
	var b = document.getElementById("nav2");
	var c = document.getElementById("nav3");
	var d = document.getElementById("nav4");
	var e = document.getElementById("nav5");
	var f = document.getElementById("nav6");

	var bars = document.getElementById("bars")
	var cross = document.getElementById("cross")

	if (bars.style.display === "none") {
		bars.style.display = "block"
		cross.style.display = "none"
	}
	else {
		bars.style.display = "none"
		cross.style.display = "block"
	}
	if (a.style.display = "block") {
		a.style.display = "none"
	}



	if (x.className === "topnav"){
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
	if (a.className === "nav"){
		a.className += " responsive";
	} else {
		a.className = "nav";
	}
	if (b.className === "nav"){
		b.className += " responsive";
	} else {
		b.className = "nav";
	}
	if (c.className === "nav"){
		c.className += " responsive";
	} else {
		c.className = "nav";
	}
	if (d.className === "nav"){
		d.className += " responsive";
	} else {
		d.className = "nav";
	}
	if (e.className === "nav"){
		e.className += " responsive";
	} else {
		e.className = "nav";
	}
	if (f.className === "nav"){
		f.className += " responsive";
	} else {
		f.className = "nav";
	}
}