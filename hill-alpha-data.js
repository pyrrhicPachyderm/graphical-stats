var numSpecies = 6;
var maxRawAbundance = 100;
var rawAbundances = [];

function getRandomRawAbundance() {
	return Math.floor(Math.random() * maxRawAbundance);
}

function getRandomRawAbundances() {
	var ret = [];
	for (var i = 0; i < numSpecies; i++) {
		ret.push(getRandomRawAbundance());
	}
	return ret;
};

function getRawAbundances() {
	if(rawAbundances.length != numSpecies) {
		rawAbundances = getRandomRawAbundances();
	}
	return rawAbundances;
}
