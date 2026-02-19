copier = (caractère) => {
	navigator.clipboard.writeText(caractère.innerHTML).then(
		() => {alert("Caractère « " + caractère.innerHTML + " » copié !");}
	);
};

document.addEventListener(
	"DOMContentLoaded",
	function() {
		éléments = document.querySelectorAll("tr");
		total = éléments.length;
		occurrences = {};
		nombreDeClasses = 0;
		éléments.forEach(
			function (élément) {
				classe = élément.getAttribute("class");
				if (classe) {
					occurrences[classe] = (occurrences[classe] || 0) + 1;
					nombreDeClasses++;
				}
			}
		);
		statistiques.insertRow().insertCell(0).outerHTML = "<th>Classe</th><th>Occurrences</th><th>Proportion</th>";
		nouvelleLigneStatistiques("Défaut", total - nombreDeClasses, total);
		for (classe in occurrences) {nouvelleLigneStatistiques(classe, occurrences[classe], total);}
		nouvelleLigneStatistiques("Total", total, total);
	}
);

function nouvelleLigneStatistiques(classe, occurrences, total) {
	pourcentage = (occurrences / total) * 100;
	ligne = statistiques.insertRow();
	ligne.className = classe;
	ligne.insertCell(0).textContent = classe;
	ligne.insertCell(1).textContent = occurrences;
	ligne.insertCell(2).textContent = pourcentage.toFixed(1).replace(".", ",") + " %";
}

function exporterTexte() {
	blob = new Blob([sortie.innerText], {type: "text/plain"});
	lien = document.createElement("a");
	lien.href = URL.createObjectURL(blob);
	lien.download = "Export.txt";
	lien.click();
	URL.revokeObjectURL(lien.href);
}

