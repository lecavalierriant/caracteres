function alphabets() {
	texte = "";
	styles = Object.keys(majuscules);
	for (style of styles) {
		for (caractère of entrée.value) {
			diacritique = "";
			if (caractère in décompositions) {
				diacritique = décompositions[caractère][1];
				caractère = décompositions[caractère][0];
			}
			if (caractère >= "A" && caractère <= "Z") {
				indice = caractère.charCodeAt(0) - "A".charCodeAt(0);
				texte += majuscules[style][indice] ?? caractère;
				texte += diacritique;
			} else if (caractère >= "a" && caractère <= "z") {
				indice = caractère.charCodeAt(0) - "a".charCodeAt(0);
				texte += minuscules[style][indice] ?? caractère;
				texte += diacritique;
			} else if (caractère >= "0" && caractère <= "9") {
				indice = parseInt(caractère);
				texte += chiffres[style][indice] ?? caractère;
				texte += diacritique;
			} else {
				texte += caractère;
				texte += diacritique;
			}
		}
		texte += "<br>";
	}
	sortie.innerHTML = texte
	document.querySelectorAll("button")[1].style.display = "inline";
}

décompositions = {
	"À": ["A", "\u0300",], "à": ["a", "\u0300",],
	"Á": ["A", "\u0301",], "á": ["a", "\u0301",],
	"Â": ["A", "\u0302",], "â": ["a", "\u0302",],
	"Ä": ["A", "\u0308",], "ä": ["a", "\u0308",],
	"Ç": ["C", "\u0327",], "ç": ["c", "\u0327",],
	"È": ["E", "\u0300",], "è": ["e", "\u0300",],
	"É": ["E", "\u0301",], "é": ["e", "\u0301",],
	"Ê": ["E", "\u0302",], "ê": ["e", "\u0302",],
	"Ë": ["E", "\u0308",], "ë": ["e", "\u0308",],
	"Ì": ["I", "\u0300",], "ì": ["i", "\u0300",],
	"Í": ["I", "\u0301",], "í": ["i", "\u0301",],
	"Î": ["I", "\u0302",], "î": ["i", "\u0302",],
	"Ï": ["I", "\u0308",], "ï": ["i", "\u0308",],
	"Ñ": ["N", "\u0303",], "ñ": ["n", "\u0303",],
	"Ò": ["O", "\u0300",], "ò": ["o", "\u0300",],
	"Ó": ["O", "\u0301",], "ó": ["o", "\u0301",],
	"Ô": ["O", "\u0302",], "ô": ["o", "\u0302",],
	"Ö": ["O", "\u0308",], "ö": ["o", "\u0308",],
	"Ù": ["U", "\u0300",], "ù": ["u", "\u0300",],
	"Ú": ["U", "\u0301",], "ú": ["u", "\u0301",],
	"Û": ["U", "\u0302",], "û": ["u", "\u0302",],
	"Ü": ["U", "\u0308",], "ü": ["u", "\u0308",],
	"Ỳ": ["Y", "\u0300",], "ỳ": ["y", "\u0300",],
	"Ý": ["Y", "\u0301",], "ý": ["y", "\u0301",],
	"Ŷ": ["Y", "\u0302",], "ŷ": ["y", "\u0302",],
	"Ÿ": ["Y", "\u0308",], "ÿ": ["y", "\u0308",],
}

majuscules = {"Normal": "ABCDEFGHIJKLMNOPQRSTUVWXYZ"};
minuscules = {"Normal": "abcdefghijklmnopqrstuvwxyz"};
chiffres = {"Normal": "0123456789"};

majuscules["Ajouré"] = ["𝔸", "𝔹", "ℂ", "𝔻", "𝔼", "𝔽", "𝔾", "ℍ", "𝕀", "𝕁", "𝕂", "𝕃", "𝕄", "ℕ", "𝕆", "ℙ", "ℚ", "ℝ", "𝕊", "𝕋", "𝕌", "𝕍", "𝕎", "𝕏", "𝕐", "ℤ"];
minuscules["Ajouré"] = ["𝕒", "𝕓", "𝕔", "𝕕", "𝕖", "𝕗", "𝕘", "𝕙", "𝕚", "𝕛", "𝕜", "𝕝", "𝕞", "𝕟", "𝕠", "𝕡", "𝕢", "𝕣", "𝕤", "𝕥", "𝕦", "𝕧", "𝕨", "𝕩", "𝕪", "𝕫"];
chiffres["Ajouré"] = ["𝟘", "𝟙", "𝟚", "𝟛", "𝟜", "𝟝", "𝟞", "𝟟", "𝟠", "𝟡"];

majuscules["Mathématique gras"] = ["𝐀", "𝐁", "𝐂", "𝐃", "𝐄", "𝐅", "𝐆", "𝐇", "𝐈", "𝐉", "𝐊", "𝐋", "𝐌", "𝐍", "𝐎", "𝐏", "𝐐", "𝐑", "𝐒", "𝐓", "𝐔", "𝐕", "𝐖", "𝐗", "𝐘", "𝐙"];
minuscules["Mathématique gras"] = ["𝐚", "𝐛", "𝐜", "𝐝", "𝐞", "𝐟", "𝐠", "𝐡", "𝐢", "𝐣", "𝐤", "𝐥", "𝐦", "𝐧", "𝐨", "𝐩", "𝐪", "𝐫", "𝐬", "𝐭", "𝐮", "𝐯", "𝐰", "𝐱", "𝐲", "𝐳"];
chiffres["Mathématique gras"] = ["𝟎", "𝟏", "𝟐", "𝟑", "𝟒", "𝟓", "𝟔", "𝟕", "𝟖", "𝟗"];

majuscules["Mathématique italique"] = ["𝐴", "𝐵", "𝐶", "𝐷", "𝐸", "𝐹", "𝐺", "𝐻", "𝐼", "𝐽", "𝐾", "𝐿", "𝑀", "𝑁", "𝑂", "𝑃", "𝑄", "𝑅", "𝑆", "𝑇", "𝑈", "𝑉", "𝑊", "𝑋", "𝑌", "𝑍"];
minuscules["Mathématique italique"] = ["𝑎", "𝑏", "𝑐", "𝑑", "𝑒", "𝑓", "𝑔", "ℎ", "𝑖", "𝑗", "𝑘", "𝑙", "𝑚", "𝑛", "𝑜", "𝑝", "𝑞", "𝑟", "𝑠", "𝑡", "𝑢", "𝑣", "𝑤", "𝑥", "𝑦", "𝑧"];
chiffres["Mathématique italique"] = chiffres["Normal"];

majuscules["Mathématique italique gras"] = ["𝑨", "𝑩", "𝑪", "𝑫", "𝑬", "𝑭", "𝑮", "𝑯", "𝑰", "𝑱", "𝑲", "𝑳", "𝑴", "𝑵", "𝑶", "𝑷", "𝑸", "𝑹", "𝑺", "𝑻", "𝑼", "𝑽", "𝑾", "𝑿", "𝒀", "𝒁"];
minuscules["Mathématique italique gras"] = ["𝒂", "𝒃", "𝒄", "𝒅", "𝒆", "𝒇", "𝒈", "𝒉", "𝒊", "𝒋", "𝒌", "𝒍", "𝒎", "𝒏", "𝒐", "𝒑", "𝒒", "𝒓", "𝒔", "𝒕", "𝒖", "𝒗", "𝒘", "𝒙", "𝒚", "𝒛"];
chiffres["Mathématique italique gras"] = chiffres["Normal"];

majuscules["Rond"] = ["𝒜", "ℬ", "𝒞", "𝒟", "ℰ", "ℱ", "𝒢", "ℋ", "ℐ", "𝒥", "𝒦", "ℒ", "ℳ", "𝒩", "𝒪", "𝒫", "𝒬", "ℛ", "𝒮", "𝒯", "𝒰", "𝒱", "𝒲", "𝒳", "𝒴", "𝒵"];
minuscules["Rond"] = ["𝒶", "𝒷", "𝒸", "𝒹", "ℯ", "𝒻", "ℊ", "𝒽", "𝒾", "𝒿", "𝓀", "𝓁", "𝓂", "𝓃", "ℴ", "𝓅", "𝓆", "𝓇", "𝓈", "𝓉", "𝓊", "𝓋", "𝓌", "𝓍", "𝓎", "𝓏"];
chiffres["Rond"] = chiffres["Normal"];

majuscules["Rond gras"] = ["𝓐", "𝓑", "𝓒", "𝓓", "𝓔", "𝓕", "𝓖", "𝓗", "𝓘", "𝓙", "𝓚", "𝓛", "𝓜", "𝓝", "𝓞", "𝓟", "𝓠", "𝓡", "𝓢", "𝓣", "𝓤", "𝓥", "𝓦", "𝓧", "𝓨", "𝓩"];
minuscules["Rond gras"] = ["𝓪", "𝓫", "𝓬", "𝓭", "𝓮", "𝓯", "𝓰", "𝓱", "𝓲", "𝓳", "𝓴", "𝓵", "𝓶", "𝓷", "𝓸", "𝓹", "𝓺", "𝓻", "𝓼", "𝓽", "𝓾", "𝓿", "𝔀", "𝔁", "𝔂", "𝔃"];
chiffres["Rond gras"] = chiffres["Normal"];

majuscules["Gothique"] = ["𝔄", "𝔅", "ℭ", "𝔇", "𝔈", "𝔉", "𝔊", "ℌ", "ℑ", "𝔍", "𝔎", "𝔏", "𝔐", "𝔑", "𝔒", "𝔓", "𝔔", "ℜ", "𝔖", "𝔗", "𝔘", "𝔙", "𝔚", "𝔛", "𝔜", "ℨ"];
minuscules["Gothique"] = ["𝔞", "𝔟", "𝔠", "𝔡", "𝔢", "𝔣", "𝔤", "𝔥", "𝔦", "𝔧", "𝔨", "𝔩", "𝔪", "𝔫", "𝔬", "𝔭", "𝔮", "𝔯", "𝔰", "𝔱", "𝔲", "𝔳", "𝔴", "𝔵", "𝔶", "𝔷"];
chiffres["Gothique"] = chiffres["Normal"];

majuscules["Gothique gras"] = ["𝕬", "𝕭", "𝕮", "𝕯", "𝕰", "𝕱", "𝕲", "𝕳", "𝕴", "𝕵", "𝕶", "𝕷", "𝕸", "𝕹", "𝕺", "𝕻", "𝕼", "𝕽", "𝕾", "𝕿", "𝖀", "𝖁", "𝖂", "𝖃", "𝖄", "𝖅"];
minuscules["Gothique gras"] = ["𝖆", "𝖇", "𝖈", "𝖉", "𝖊", "𝖋", "𝖌", "𝖍", "𝖎", "𝖏", "𝖐", "𝖑", "𝖒", "𝖓", "𝖔", "𝖕", "𝖖", "𝖗", "𝖘", "𝖙", "𝖚", "𝖛", "𝖜", "𝖝", "𝖞", "𝖟"];
chiffres["Gothique gras"] = chiffres["Normal"];

majuscules["Encadré"] = ["🄰", "🄱", "🄲", "🄳", "🄴", "🄵", "🄶", "🄷", "🄸", "🄹", "🄺", "🄻", "🄼", "🄽", "🄾", "🄿", "🅀", "🅁", "🅂", "🅃", "🅄", "🅅", "🅆", "🅇", "🅈", "🅉"];
minuscules["Encadré"] = majuscules["Encadré"];
chiffres["Encadré"] = chiffres["Normal"];

majuscules["Encadré noir"] = ["🅰", "🅱", "🅲", "🅳", "🅴", "🅵", "🅶", "🅷", "🅸", "🅹", "🅺", "🅻", "🅼", "🅽", "🅾", "🅿", "🆀", "🆁", "🆂", "🆃", "🆄", "🆅", "🆆", "🆇", "🆈", "🆉"];
minuscules["Encadré noir"] = majuscules["Encadré noir"];
chiffres["Encadré noir"] = chiffres["Normal"];

majuscules["Cerclé"] = ["Ⓐ", "Ⓑ", "Ⓒ", "Ⓓ", "Ⓔ", "Ⓕ", "Ⓖ", "Ⓗ", "Ⓘ", "Ⓙ", "Ⓚ", "Ⓛ", "Ⓜ", "Ⓝ", "Ⓞ", "Ⓟ", "Ⓠ", "Ⓡ", "Ⓢ", "Ⓣ", "Ⓤ", "Ⓥ", "Ⓦ", "Ⓧ", "Ⓨ", "Ⓩ"];
minuscules["Cerclé"] = ["ⓐ", "ⓑ", "ⓒ", "ⓓ", "ⓔ", "ⓕ", "ⓖ", "ⓗ", "ⓘ", "ⓙ", "ⓚ", "ⓛ", "ⓜ", "ⓝ", "ⓞ", "ⓟ", "ⓠ", "ⓡ", "ⓢ", "ⓣ", "ⓤ", "ⓥ", "ⓦ", "ⓧ", "ⓨ", "ⓩ"];
chiffres["Cerclé"] = ["⓪", "①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨"];

majuscules["Entre parenthèses"] = ["🄐", "🄑", "🄒", "🄓", "🄔", "🄕", "🄖", "🄗", "🄘", "🄙", "🄚", "🄛", "🄜", "🄝", "🄞", "🄟", "🄠", "🄡", "🄢", "🄣", "🄤", "🄥", "🄦", "🄧", "🄨", "🄩"];
minuscules["Entre parenthèses"] = ["⒜", "⒝", "⒞", "⒟", "⒠", "⒡", "⒢", "⒣", "⒤", "⒥", "⒦", "⒧", "⒨", "⒩", "⒪", "⒫", "⒬", "⒭", "⒮", "⒯", "⒰", "⒱", "⒲", "⒳", "⒴", "⒵"];
chiffres["Entre parenthèses"] = ["0", "⑴", "⑵", "⑶", "⑷", "⑸", "⑹", "⑺", "⑻", "⑼"];

majuscules["Mathématique à chasse fixe"] = ["𝙰", "𝙱", "𝙲", "𝙳", "𝙴", "𝙵", "𝙶", "𝙷", "𝙸", "𝙹", "𝙺", "𝙻", "𝙼", "𝙽", "𝙾", "𝙿", "𝚀", "𝚁", "𝚂", "𝚃", "𝚄", "𝚅", "𝚆", "𝚇", "𝚈", "𝚉"];
minuscules["Mathématique à chasse fixe"] = ["𝚊", "𝚋", "𝚌", "𝚍", "𝚎", "𝚏", "𝚐", "𝚑", "𝚒", "𝚓", "𝚔", "𝚕", "𝚖", "𝚗", "𝚘", "𝚙", "𝚚", "𝚛", "𝚜", "𝚝", "𝚞", "𝚟", "𝚠", "𝚡", "𝚢", "𝚣"];
chiffres["Mathématique à chasse fixe"] = ["𝟶", "𝟷", "𝟸", "𝟹", "𝟺", "𝟻", "𝟼", "𝟽", "𝟾", "𝟿"];

majuscules["Mathématique sans empattement"] = ["𝖠", "𝖡", "𝖢", "𝖣", "𝖤", "𝖥", "𝖦", "𝖧", "𝖨", "𝖩", "𝖪", "𝖫", "𝖬", "𝖭", "𝖮", "𝖯", "𝖰", "𝖱", "𝖲", "𝖳", "𝖴", "𝖵", "𝖶", "𝖷", "𝖸", "𝖹"];
minuscules["Mathématique sans empattement"] = ["𝖺", "𝖻", "𝖼", "𝖽", "𝖾", "𝖿", "𝗀", "𝗁", "𝗂", "𝗃", "𝗄", "𝗅", "𝗆", "𝗇", "𝗈", "𝗉", "𝗊", "𝗋", "𝗌", "𝗍", "𝗎", "𝗏", "𝗐", "𝗑", "𝗒", "𝗓"];
chiffres["Mathématique sans empattement"] = ["𝟢", "𝟣", "𝟤", "𝟥", "𝟦", "𝟧", "𝟨", "𝟩", "𝟪", "𝟫"];

majuscules["Mathématique gras sans empattement"] = ["𝗔", "𝗕", "𝗖", "𝗗", "𝗘", "𝗙", "𝗚", "𝗛", "𝗜", "𝗝", "𝗞", "𝗟", "𝗠", "𝗡", "𝗢", "𝗣", "𝗤", "𝗥", "𝗦", "𝗧", "𝗨", "𝗩", "𝗪", "𝗫", "𝗬", "𝗭"];
minuscules["Mathématique gras sans empattement"] = ["𝗮", "𝗯", "𝗰", "𝗱", "𝗲", "𝗳", "𝗴", "𝗵", "𝗶", "𝗷", "𝗸", "𝗹", "𝗺", "𝗻", "𝗼", "𝗽", "𝗾", "𝗿", "𝘀", "𝘁", "𝘂", "𝘃", "𝘄", "𝘅", "𝘆", "𝘇"];
chiffres["Mathématique gras sans empattement"] = ["𝟬", "𝟭", "𝟮", "𝟯", "𝟰", "𝟱", "𝟲", "𝟳", "𝟴", "𝟵"];

majuscules["Mathématique italique sans empattement"] = ["𝘈", "𝘉", "𝘊", "𝘋", "𝘌", "𝘍", "𝘎", "𝘏", "𝘐", "𝘑", "𝘒", "𝘓", "𝘔", "𝘕", "𝘖", "𝘗", "𝘘", "𝘙", "𝘚", "𝘛", "𝘜", "𝘝", "𝘞", "𝘟", "𝘠", "𝘡"];
minuscules["Mathématique italique sans empattement"] = ["𝘢", "𝘣", "𝘤", "𝘥", "𝘦", "𝘧", "𝘨", "𝘩", "𝘪", "𝘫", "𝘬", "𝘭", "𝘮", "𝘯", "𝘰", "𝘱", "𝘲", "𝘳", "𝘴", "𝘵", "𝘶", "𝘷", "𝘸", "𝘹", "𝘺", "𝘻"];
chiffres["Mathématique italique sans empattement"] = chiffres["Normal"];

majuscules["Mathématique italique gras sans empattement"] = ["𝘼", "𝘽", "𝘾", "𝘿", "𝙀", "𝙁", "𝙂", "𝙃", "𝙄", "𝙅", "𝙆", "𝙇", "𝙈", "𝙉", "𝙊", "𝙋", "𝙌", "𝙍", "𝙎", "𝙏", "𝙐", "𝙑", "𝙒", "𝙓", "𝙔", "𝙕"];
minuscules["Mathématique italique gras sans empattement"] = ["𝙖", "𝙗", "𝙘", "𝙙", "𝙚", "𝙛", "𝙜", "𝙝", "𝙞", "𝙟", "𝙠", "𝙡", "𝙢", "𝙣", "𝙤", "𝙥", "𝙦", "𝙧", "𝙨", "𝙩", "𝙪", "𝙫", "𝙬", "𝙭", "𝙮", "𝙯"];
chiffres["Mathématique italique gras sans empattement"] = chiffres["Normal"];

majuscules["Vieil italique"] = ["𐌀", "𐌁", "𐌂", "𐌃", "𐌄", "𐌅", "𐌂", "𐌇", "𐌉", "𐌉", "𐌊", "𐌋", "𐌌", "𐌍", "𐌏", "𐌐", "𐌒", "𐌓", "𐌔", "𐌕", "𐌖", "𐌖", "𐌖𐌖", "𐌗", "𐌖", "𐌆"];
minuscules["Vieil italique"] = majuscules["Vieil italique"];
chiffres["Vieil italique"] = chiffres["Normal"];
