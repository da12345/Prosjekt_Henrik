//Sitater og opphavshenriker
const sitater = [["De siste gjester vi fulgte til grinden; farvellets rester tok nattevinden.", "Henrik Ibsen"],
["Divorced, beheaded, died, divorced, beheaded, survived", "Henry VIII of England"],
["Bokhyllen er den stige, hvorved du bliver din overmanns lige.", "Henrik Wergeland"],
["Hjertet styrkes ved å lide", "Henrik Wergeland"],
["Vårt hjerte vet, vårt øye ser, hvor godt og vakkert Norge er", "Henrik Wergeland"],
["Den sterkeste mann i verden, det er han som står mest alene.", "Henrik Ibsen"],
["Jeg må arbeide hvis jeg skal bære livet. Alle mine levedager, så lenge jeg kan minnes, har jeg arbeidet, og det har vært min beste og eneste glede.", "Henrik Ibsen"],
["Men hvilket bunnløst svelg imellom dette - på den ene side ikke å begjære - og på den annen side å begjære og dog forsake.", "Henrik Ibsen"],
["Bruden? Å, ja visst gråter hun litt; men det skal en aldri ense.", "Henrik Ibsen"],
["Men kjæreste beste Nora, du danser jo som om det gikk på livet løs.", "Henrik Ibsen"],
["Inn i natten. Gjennom døden. - Bakom demrer morgenrøden.", "Henrik Ibsen"],
["Døden stryker selv den største regning ut.", "Henrik Ibsen"],
["Those who are not shocked when they first come across quantum theory cannot possibly have understood it.", "Henrik Bohr"], 
["We must be clear that when it comes to atoms, language can be used only as in poetry.", "Henrik Bohr"], 
["An expert is a person who has found out by his own painful experience all the mistakes that one can make in a very narrow field.", "Henrik Bohr"], 
["We are all agreed that your theory is crazy. The question that divides us is whether it is crazy enough to have a chance of being correct.", "Henrik Bohr"], 
["No, no, you are not thinking, you are just being logical.", "Henrik Bohr"]];

//Funksjon som henter frem tilfeldig sitat
function nyttSitat(sitatElem = document.querySelector("#sitat"), kildeElem = document.querySelector("#kilde")){
	let nyttSitat = sitater[Math.floor(Math.random() * sitater.length)];//Velge tilfeldig element fra lista
	if(nyttSitat[0] !== sitatElem.innerHTML){//Hvis det er et annet sitat enn det som er der, sett det inn
		sitatElem.innerHTML = nyttSitat[0];
		kildeElem.innerHTML = "-"+nyttSitat[1];
	}else{//Hvis det er det samme, kall funksjonen igjen, intill den får et nytt sitat.
		window.nyttSitat(sitatElem, kildeElem);
	}
}