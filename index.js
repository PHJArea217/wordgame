var wordlist = require("./wordlist.json");

exports.callback = function (req, res) {
	/* JSON mode */
	var index = Number(req.query.index);
	if (index > 0) {
		var word = String(wordlist[index - 1]);
		res.set("Cache-Control", "public, max-age=300");
		res.send({word: word});
		return;
	}
	/* Classical mode */
	var wordLeft = Number(req.query.leftIndex);
	var wordRight = Number(req.query.rightIndex);
	if (!(wordLeft > 0)) wordLeft = 1;
	if (!(wordRight > 0)) wordRight = wordlist.length;
	var middleWordIndex = Math.floor((wordLeft + wordRight) / 2);
	var triesCount = Number(req.query.tries);
	if (!(triesCount > 0)) triesCount = 0;
	triesCount++;
	var wordGuess = String(wordlist[middleWordIndex - 1]);
	var htmlOutput = '<!DOCTYPE html><html><head><title>Guess the Word</title>\
	</head><body bgcolor="#a0dfff"><h1>Guess the Word Game</h1><p>Does your \
	word come before or after <span style="font-weight:bold;font-size:24px">';
	htmlOutput += wordGuess + "</span> (#" + middleWordIndex + ") in the ";
	htmlOutput += 'dictionary?</p><p><a href="?tries=' + triesCount +
	"&leftIndex=" + wordLeft + "&rightIndex=" + middleWordIndex + '">Before</a>';
	htmlOutput += ' <a href="?tries=' + triesCount + "&leftIndex=" +
	middleWordIndex + "&rightIndex=" + wordRight + '">After</a>';
	htmlOutput += "</p><p>If this is the word you were thinking of, then I \
	guessed your word in " + triesCount + ' tries.</p><p><a href="?">Reset</a>\
	| <a href="https://www.peterjin.org/gtw.html">Back to Home Page</a></p> \
	</body></html>';
	res.set("X-Robots-Tag", "noindex");
	res.set("Cache-Control", "public, max-age=300");
	res.send(htmlOutput);
};