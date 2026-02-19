diacritiques = {
	0x0:	"\u0300", // ̀ 
	0x1:	"\u0301", // ́ 
	0x2:	"\u0302", // ̂ 
	0x3:	"\u0303", // ̃ 
	0x4:	"\u0304", // ̄ 
	0x5:	"\u0305", // ̅ 
	0x6:	"\u0306", // ̆ 
	0x7:	"\u0307", // ̇ 
	0x8:	"\u0308", // ̈ 
	0xA:	"\u030A", // ̊ 
	0xC:	"\u030C", // ̌ 
	0x27:	"\u0327", // ̧ 
	0x32:	"\u0332", // ̲ 
	0x42:	"\u0342", // ͂ 
};

function fusionner() {
	[caractère, code] = entrée.value.split(" ");
	sortie.innerHTML = caractère + (diacritiques[parseInt(code, 16)] || "");
}

function lettres() {
	lettres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	document.querySelectorAll("td").forEach(
		function(td) {
			td.innerText = lettres[Math.floor(Math.random() * lettres.length)] + td.innerText[1];
		}
	)
}
