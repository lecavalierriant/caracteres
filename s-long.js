function moderniser() {
	sortie.innerHTML = entrée.value.replace(/ſ/g, "s");
	document.querySelectorAll("button")[2].style.display = "inline";
}

function archaïser() {
	texte = entrée.value;
	texte = texte.replace(/ss/g, "ſſ");
	texte = texte.replace(/\b s/g, " ſ");
	texte = texte.replace(/\bs/g, "ſ");
	texte = texte.replace(/s(?=[a-zàâäéèêëîïôöùûüç])/g, "ſ");
	sortie.innerHTML = texte;
	document.querySelectorAll("button")[2].style.display = "inline";
}
