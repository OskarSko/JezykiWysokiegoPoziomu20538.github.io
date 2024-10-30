let Currency = function(pln){
	this.pln = pln;
}

Currency.prototype.usdToPL = function(pln){
	return pln*4;
}

Currency.prototype.euroToPL = function(pln){
	return pln*4.33;
}

Currency.prototype.gbpToPL = function(pln){
	return pln*5.19;
}

Currency.prototype.chfToPL = function(pln){
	return pln*4.62;
}

Currency.prototype.jpyToPL = function(pln){
	return pln*37.78;
}
module.exports = Currency;
