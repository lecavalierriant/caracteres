function exporterTexte() {
	blob = new Blob([sortie.innerText], {type: "text/plain"});
	lien = document.createElement("a");
	lien.href = URL.createObjectURL(blob);
	lien.download = "Export.txt";
	lien.click();
	URL.revokeObjectURL(lien.href);
}

function moderniser() {
	sortie.innerHTML = entrée.value.replace(/ſ/g, "s");
	document.querySelectorAll("button")[2].style.display = "inline";
}

function archaïser() {
	texte = entrée.value;
	texte = texte.replace(/ss/g, "ſſ"); // double s
	texte = texte.replace(/\b s/g, " ſ"); // après espace
	texte = texte.replace(/\bs/g, "ſ"); // début absolu
	texte = texte.replace(/s(?=[a-zàâäéèêëîïôöùûüç])/g, "ſ"); // s suivi d'une lettre
	sortie.innerHTML = texte;
	document.querySelectorAll("button")[2].style.display = "inline";
}
