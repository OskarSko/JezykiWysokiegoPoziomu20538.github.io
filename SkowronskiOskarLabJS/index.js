const fs = require("fs");
//const data = fs.readFileSync('package.json');

console.log("Początek skryptu.");
fs.readFile('package.json', function (err, data) {
	if (err) return console.error(err);
	console.log(data.toString());
});
//console.log(data.toString());
console.log("Koniec skryptu.");
