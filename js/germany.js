var corner1 = L.latLng(56.121060, 0.739669), 
corner2 = L.latLng(46.920255, 17.747588), 
bounds = L.latLngBounds(corner1, corner2);

var stateMode = true;
var federalLevel = true;
var CSUFederalSeats = 0;;

var map = L.map('map', {
	center: [51.5, 8],
	zoom: 6,
	maxBounds: bounds,
zoomControl:  false
});


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 12,
	minZoom: 5,
	attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>, ' +
			'Data Provided by <a href="https://europeelects.eu/data/">Europe Elects</a>',
	id: 'mapbox/light-v9'
}).addTo(map);


prevSPDVoteShare = 20.5;
prevCDUVoteShare = 32.9;
prevAfDVoteShare = 12.6;
prevFDPVoteShare = 10.7;
prevGreenVoteShare = 8.9;
prevLeftVoteShare = 9.2;
prevCSUVoteShare = prevCDUVoteShare;

SPDModifier = 1 + ((SPDprediction - prevSPDVoteShare) / prevSPDVoteShare);
CDUModifier = 1 + ((CDUprediction - prevCDUVoteShare) / prevCDUVoteShare);
AfDModifier = 1 + ((AfDprediction - prevAfDVoteShare) / prevAfDVoteShare);
FDPModifier = 1 + ((FDPprediction - prevFDPVoteShare) / prevFDPVoteShare);
GreenModifier = 1 + ((Greenprediction - prevGreenVoteShare) / prevGreenVoteShare);
LeftModifier = 1 + ((Leftprediction - prevLeftVoteShare) / prevLeftVoteShare);
CSUModifier = CDUModifier;


var states = L.geoJson(bundeslandData, {
	style: styleStates,
	onEachFeature: onEachFeatureStates
}).addTo(map);

var constituenciesSH = L.geoJson(constituenciesSH, {
	style: styleConstituencies,
	onEachFeature: onEachFeatureConstituencies
});

var constituenciesMV = L.geoJson(constituenciesMV, {
	style: styleConstituencies,
	onEachFeature: onEachFeatureConstituencies
});

var constituenciesHM = L.geoJson(constituenciesHM, {
	style: styleConstituencies,
	onEachFeature: onEachFeatureConstituencies
});

var constituenciesLS = L.geoJson(constituenciesLS, {
	style: styleConstituencies,
	onEachFeature: onEachFeatureConstituencies
});

var constituenciesBM = L.geoJson(constituenciesBM, {
	style: styleConstituencies,
	onEachFeature: onEachFeatureConstituencies
});

var constituenciesBB = L.geoJson(constituenciesBB, {
	style: styleConstituencies,
	onEachFeature: onEachFeatureConstituencies
});

var constituenciesST = L.geoJson(constituenciesST, {
	style: styleConstituencies,
	onEachFeature: onEachFeatureConstituencies
});

var constituenciesBE = L.geoJson(constituenciesBE, {
	style: styleConstituencies,
	onEachFeature: onEachFeatureConstituencies
});

var constituenciesNRW = L.geoJson(constituenciesNRW, {
	style: styleConstituencies,
	onEachFeature: onEachFeatureConstituencies
});

var constituenciesSA = L.geoJson(constituenciesSA, {
	style: styleConstituencies,
	onEachFeature: onEachFeatureConstituencies
});

var constituenciesHE = L.geoJson(constituenciesHE, {
	style: styleConstituencies,
	onEachFeature: onEachFeatureConstituencies
});

var constituenciesTH = L.geoJson(constituenciesTH, {
	style: styleConstituencies,
	onEachFeature: onEachFeatureConstituencies
});

var constituenciesRP = L.geoJson(constituenciesRP, {
	style: styleConstituencies,
	onEachFeature: onEachFeatureConstituencies
});

var constituenciesBY = L.geoJson(constituenciesBY, {
	style: styleConstituencies,
	onEachFeature: onEachFeatureConstituencies
});

var constituenciesBW = L.geoJson(constituenciesBW, {
	style: styleConstituencies,
	onEachFeature: onEachFeatureConstituencies
});

var constituenciesSL = L.geoJson(constituenciesSL, {
	style: styleConstituencies,
	onEachFeature: onEachFeatureConstituencies
});


prevResultsSH = fillStateArrays(constituenciesSH, false, true);
prevResultsMV = fillStateArrays(constituenciesMV, false, true);
prevResultsHM = fillStateArrays(constituenciesHM, false, true);
prevResultsLS = fillStateArrays(constituenciesLS, false, true);
prevResultsBM = fillStateArrays(constituenciesBM, false, true);
prevResultsBB = fillStateArrays(constituenciesBB, false, true);
prevResultsST = fillStateArrays(constituenciesST, false, true);
prevResultsBE = fillStateArrays(constituenciesBE, false, true);
prevResultsNRW = fillStateArrays(constituenciesNRW, false, true);
prevResultsSA = fillStateArrays(constituenciesSA, false, true);
prevResultsHE = fillStateArrays(constituenciesHE, false, true);
prevResultsTH = fillStateArrays(constituenciesTH, false, true);
prevResultsRP = fillStateArrays(constituenciesRP, false, true);
prevResultsBY = fillStateArrays(constituenciesBY, true, true);
prevResultsBW = fillStateArrays(constituenciesBW, false, true);
prevResultsSL = fillStateArrays(constituenciesSL, false, true);

currResultsSH = fillStateArrays(constituenciesSH, false, false);
currResultsMV = fillStateArrays(constituenciesMV, false, false);
currResultsHM = fillStateArrays(constituenciesHM, false, false);
currResultsLS = fillStateArrays(constituenciesLS, false, false);
currResultsBM = fillStateArrays(constituenciesBM, false, false);
currResultsBB = fillStateArrays(constituenciesBB, false, false);
currResultsST = fillStateArrays(constituenciesST, false, false);
currResultsBE = fillStateArrays(constituenciesBE, false, false);
currResultsNRW = fillStateArrays(constituenciesNRW, false, false);
currResultsSA = fillStateArrays(constituenciesSA, false, false);
currResultsHE = fillStateArrays(constituenciesHE, false, false);
currResultsTH = fillStateArrays(constituenciesTH, false, false);
currResultsRP = fillStateArrays(constituenciesRP, false, false);
currResultsBY = fillStateArrays(constituenciesBY, true, false);
currResultsBW = fillStateArrays(constituenciesBW, false, false);
currResultsSL = fillStateArrays(constituenciesSL, false, false);

var currFederalResults;
prevFederalResults = fillFederalArray();

var CDUThreshold = true, SPDThreshold = true, AfDThreshold = true, FDPThreshold = true, GreenThreshold = true, LeftThreshold = true;
seatCalculation(true); 

function sortFunctionA(a, b) {
	if (a[2] === b[2]) {
		return 0;
	}
	else {
		return (a[2] > b[2]) ? -1 : 1;
	}
}
function sortFunctionB(a, b) {
	if (a[3] === b[3]) {
		return 0;
	}
	else {
		return (a[3] > b[3]) ? -1 : 1;
	}
}	
function sortFunctionC(a, b) {
	if (a[0] === b[0]) {
		return 0;
	}
	else {
		return (a[0] < b[0]) ? -1 : 1;
	}
}

function initialStateSainteLague(listOfResults, noOfSeats, initialisation){
	
	var cleanListOfResults = new Array(listOfResults.length);
	for (var i = 0; i < listOfResults.length; i++) {
		cleanListOfResults[i] = new Array(4); //Loop through depending on how many districts there are and create new fields.
		cleanListOfResults[i][0] = listOfResults[i][0];
		cleanListOfResults[i][1] = listOfResults[i][1];
		cleanListOfResults[i][2] = 0;
		cleanListOfResults[i][3] = listOfResults[i][4];;
	}
	
	for (i = 0; i < noOfSeats; i++) {
		cleanListOfResults.sort(sortFunctionB);
		cleanListOfResults[0][2] = cleanListOfResults[0][2] + 1;
		cleanListOfResults[0][3] = cleanListOfResults[0][1] / (1 + (2*cleanListOfResults[0][2]));
	}
	listOfResults.sort(sortFunctionC);
	cleanListOfResults.sort(sortFunctionC);
	

	for (i = 0; i < listOfResults.length; i++) {
		if (listOfResults[i][2] < cleanListOfResults[i][2]){
			listOfResults[i][3] = (cleanListOfResults[i][2] - listOfResults[i][2]);
		}
		else {
			listOfResults[i][3] = 0;
		}
		
	}
	if (initialisation){
		prevFederalResults.sort(sortFunctionC);
	
		for (var i = 0; i < listOfResults.length; i++){
			prevFederalResults[i][3] = prevFederalResults[i][3] + listOfResults[i][3];
		}
		
	}
	else {
		currFederalResults.sort(sortFunctionC);
	
		for (var i = 0; i < listOfResults.length; i++){
			currFederalResults[i][3] = currFederalResults[i][3] + listOfResults[i][3];
		}
	}
		
}

function federalOverhangEqualisation(listOfFederalResults, BavarianResults) {
	
	var arrayOfLowerDivisors = new Array(listOfFederalResults.length);
	var arrayOfHigherDivisors = new Array(listOfFederalResults.length);
	var tempSeatsArray = new Array(listOfFederalResults.length);
	listOfFederalResults.sort(sortFunctionC);
	BavarianResults.sort(sortFunctionC);
	
	
	newCDUVotes = listOfFederalResults[1][1] - BavarianResults[1][1];
	newCDUSeats = ((listOfFederalResults[1][2] + listOfFederalResults[1][3]) - (BavarianResults[1][2] + BavarianResults[1][3]));
	newCSUVotes = BavarianResults[1][1];
	newCSUSeats = (BavarianResults[1][2] + BavarianResults[1][3]);
	

	
	if (AfDThreshold){
		arrayOfLowerDivisors[0] = listOfFederalResults[0][1] / ((listOfFederalResults[0][2] + listOfFederalResults[0][3]) - 0.5);
	}
	else {
		arrayOfLowerDivisors[0] = 99999999999;
	}
	if (FDPThreshold){
		arrayOfLowerDivisors[1] = listOfFederalResults[2][1] / ((listOfFederalResults[2][2] + listOfFederalResults[2][3]) - 0.5);
	}
	else {
		arrayOfLowerDivisors[1] = 99999999999;
	}
	if (GreenThreshold){
		arrayOfLowerDivisors[2] = listOfFederalResults[3][1] / ((listOfFederalResults[3][2] + listOfFederalResults[3][3]) - 0.5);
	}
	else {
		arrayOfLowerDivisors[2] = 99999999999;
	}
	if (SPDThreshold){
		arrayOfLowerDivisors[3] = listOfFederalResults[4][1] / ((listOfFederalResults[4][2] + listOfFederalResults[4][3]) - 0.5);
	}
	else {
		arrayOfLowerDivisors[3] = 99999999999;
	}
	if (LeftThreshold){
		arrayOfLowerDivisors[4] = listOfFederalResults[5][1] / ((listOfFederalResults[5][2] + listOfFederalResults[5][3]) - 0.5);
	}
	else {
		arrayOfLowerDivisors[4] = 99999999999;
	}
	if (CDUThreshold){
		arrayOfLowerDivisors[5] = newCDUVotes / (newCDUSeats - 0.5);
		arrayOfLowerDivisors[6] = newCSUVotes / (newCSUSeats - 0.5);
	}
	else{
		arrayOfLowerDivisors[5] = 99999999999;
		arrayOfLowerDivisors[6] = 99999999999;
	}
	
	
	
	arrayOfLowerDivisors.sort();
	
	divisor1 = arrayOfLowerDivisors[0];
	
	for (var i = 0; i < listOfFederalResults.length + 1; i++){
		tempSeatsArray[i] = new Array(2);
	}
	
	tempSeatsArray[0][0] = listOfFederalResults[0][0];
	newSeats = parseInt(Math.round(listOfFederalResults[0][1] / divisor1));
	(AfDThreshold) ? tempSeatsArray[0][1] = newSeats : tempSeatsArray[0][1] = 0;
	
	tempSeatsArray[1][0] = listOfFederalResults[2][0];
	newSeats = parseInt(Math.round(listOfFederalResults[2][1] / divisor1));
	(FDPThreshold) ? tempSeatsArray[1][1] = newSeats : tempSeatsArray[1][1] = 0;
	
	tempSeatsArray[2][0] = listOfFederalResults[3][0];
	newSeats = parseInt(Math.round(listOfFederalResults[3][1] / divisor1));
	(GreenThreshold) ? tempSeatsArray[2][1] = newSeats : tempSeatsArray[2][1] = 0;
	
	tempSeatsArray[3][0] = listOfFederalResults[4][0];
	newSeats = parseInt(Math.round(listOfFederalResults[4][1] / divisor1));
	(SPDThreshold) ? tempSeatsArray[3][1] = newSeats : tempSeatsArray[3][1] = 0;
	
	tempSeatsArray[4][0] = listOfFederalResults[5][0];
	newSeats = parseInt(Math.round(listOfFederalResults[5][1] / divisor1));
	(LeftThreshold) ? tempSeatsArray[4][1] = newSeats : tempSeatsArray[4][1] = 0;
	
	tempSeatsArray[5][0] = "CDU";
	newSeats = parseInt(Math.round(newCDUVotes / divisor1));
	(CDUThreshold) ? tempSeatsArray[5][1] = newSeats : tempSeatsArray[5][1] = 0;
	
	tempSeatsArray[6][0] = "CSU";
	newSeats = parseInt(Math.round(newCSUVotes / divisor1));
	(CDUThreshold) ? tempSeatsArray[6][1] = newSeats : tempSeatsArray[6][1] = 0;

	
	if (AfDThreshold){
		arrayOfHigherDivisors[0] = listOfFederalResults[0][1] / ((tempSeatsArray[0][1]) + 0.5);
	}
	else {
		arrayOfHigherDivisors[0] = 0;
	}
	if (FDPThreshold){
		arrayOfHigherDivisors[1] = listOfFederalResults[2][1] / ((tempSeatsArray[1][1]) + 0.5);
	}
	else {
		arrayOfHigherDivisors[1] = 0;
	}
	if (GreenThreshold){
		arrayOfHigherDivisors[2] = listOfFederalResults[3][1] / ((tempSeatsArray[2][1]) + 0.5);
	}
	else {
		arrayOfHigherDivisors[2] = 0;
	}
	if (SPDThreshold){
		arrayOfHigherDivisors[3] = listOfFederalResults[4][1] / ((tempSeatsArray[3][1]) + 0.5);
	}
	else {
		arrayOfHigherDivisors[3] = 0;
	}
	if (LeftThreshold){
		arrayOfHigherDivisors[4] = listOfFederalResults[5][1] / ((tempSeatsArray[4][1]) + 0.5);
	}
	else {
		arrayOfHigherDivisors[4] = 0;
	}
	if (CDUThreshold){
		arrayOfHigherDivisors[5] = newCDUVotes / (tempSeatsArray[5][1] + 0.5);
		arrayOfHigherDivisors[6] = newCSUVotes / (tempSeatsArray[6][1] + 0.5);
	}
	else{
		arrayOfHigherDivisors[5] = 0;
		arrayOfHigherDivisors[6] = 0;
	}
	
	arrayOfHigherDivisors.sort();
	
	
	divisor2 = arrayOfHigherDivisors[6];
	
	finalDivisor = parseInt(Math.round((divisor1 + divisor2) / 2));
	
	console.log(listOfFederalResults);
	
	if (CDUThreshold){
		CSUFederalSeats = BavarianResults[1][1] / finalDivisor;
		CSUFederalSeats = Math.round(CSUFederalSeats);
		CSUFederalSeats = parseInt(CSUFederalSeats);	
	}
	else{
		CSUFederalSeats = 0;
	}
	

	if (AfDThreshold){
		newSeats = listOfFederalResults[0][1] / finalDivisor;
		newSeats = Math.round(newSeats);
		newSeats = parseInt(newSeats);
		listOfFederalResults[0][3] = (newSeats - listOfFederalResults[0][2]);
	}
	if (CDUThreshold){
		newSeats = listOfFederalResults[1][1] / finalDivisor;
		newSeats = Math.round(newSeats);
		newSeats = parseInt(newSeats);
		listOfFederalResults[1][3] = (newSeats - listOfFederalResults[1][2]);
	}
	if (FDPThreshold){
		newSeats = listOfFederalResults[2][1] / finalDivisor;
		newSeats = Math.round(newSeats);
		newSeats = parseInt(newSeats);
		listOfFederalResults[2][3] = (newSeats - listOfFederalResults[2][2]);
	}
	if (GreenThreshold){
		newSeats = listOfFederalResults[3][1] / finalDivisor;
		newSeats = Math.round(newSeats);
		newSeats = parseInt(newSeats);
		listOfFederalResults[3][3] = (newSeats - listOfFederalResults[3][2]);
	}
	if (SPDThreshold){
		newSeats = listOfFederalResults[4][1] / finalDivisor;
		newSeats = Math.round(newSeats);
		newSeats = parseInt(newSeats);
		listOfFederalResults[4][3] = (newSeats - listOfFederalResults[4][2]);
	}
	if (LeftThreshold){
		newSeats = listOfFederalResults[5][1] / finalDivisor;
		newSeats = Math.round(newSeats);
		newSeats = parseInt(newSeats);
		listOfFederalResults[5][3] = (newSeats - listOfFederalResults[5][2]);
	}
		
	

}

function applyPartyStateDivisor(array, index, divisor, initialisation){
	
	if (initialisation){
		prevResultsSH[index][3] = (parseInt(Math.round(prevResultsSH[index][1] / divisor)) > prevResultsSH[index][2]) ? parseInt(Math.round(prevResultsSH[index][1] / divisor)) - prevResultsSH[index][2] : 0;
		prevResultsHM[index][3] = (parseInt(Math.round(prevResultsHM[index][1] / divisor)) > prevResultsHM[index][2]) ? parseInt(Math.round(prevResultsHM[index][1] / divisor)) - prevResultsHM[index][2] : 0;
		prevResultsLS[index][3] = (parseInt(Math.round(prevResultsLS[index][1] / divisor)) > prevResultsLS[index][2]) ? parseInt(Math.round(prevResultsLS[index][1] / divisor)) - prevResultsLS[index][2] : 0;
		prevResultsBM[index][3] = (parseInt(Math.round(prevResultsBM[index][1] / divisor)) > prevResultsBM[index][2]) ? parseInt(Math.round(prevResultsBM[index][1] / divisor)) - prevResultsBM[index][2] : 0;
		prevResultsNRW[index][3] = (parseInt(Math.round(prevResultsNRW[index][1] / divisor)) > prevResultsNRW[index][2]) ? parseInt(Math.round(prevResultsNRW[index][1] / divisor)) - prevResultsNRW[index][2] : 0;
		prevResultsHE[index][3] = (parseInt(Math.round(prevResultsHE[index][1] / divisor)) > prevResultsHE[index][2]) ? parseInt(Math.round(prevResultsHE[index][1] / divisor)) - prevResultsHE[index][2] : 0;
		prevResultsRP[index][3] = (parseInt(Math.round(prevResultsRP[index][1] / divisor)) > prevResultsRP[index][2]) ? parseInt(Math.round(prevResultsRP[index][1] / divisor)) - prevResultsRP[index][2] : 0;
		prevResultsBW[index][3] = (parseInt(Math.round(prevResultsBW[index][1] / divisor)) > prevResultsBW[index][2]) ? parseInt(Math.round(prevResultsBW[index][1] / divisor)) - prevResultsBW[index][2] : 0;
		prevResultsBY[index][3] = (parseInt(Math.round(prevResultsBY[index][1] / divisor)) > prevResultsBY[index][2]) ? parseInt(Math.round(prevResultsBY[index][1] / divisor)) - prevResultsBY[index][2] : 0;
		prevResultsSL[index][3] = (parseInt(Math.round(prevResultsSL[index][1] / divisor)) > prevResultsSL[index][2]) ? parseInt(Math.round(prevResultsSL[index][1] / divisor)) - prevResultsSL[index][2] : 0;
		prevResultsBE[index][3] = (parseInt(Math.round(prevResultsBE[index][1] / divisor)) > prevResultsBE[index][2]) ? parseInt(Math.round(prevResultsBE[index][1] / divisor)) - prevResultsBE[index][2] : 0;
		prevResultsBB[index][3] = (parseInt(Math.round(prevResultsBB[index][1] / divisor)) > prevResultsBB[index][2]) ? parseInt(Math.round(prevResultsBB[index][1] / divisor)) - prevResultsBB[index][2] : 0;
		prevResultsMV[index][3] = (parseInt(Math.round(prevResultsMV[index][1] / divisor)) > prevResultsMV[index][2]) ? parseInt(Math.round(prevResultsMV[index][1] / divisor)) - prevResultsMV[index][2] : 0;
		prevResultsSA[index][3] = (parseInt(Math.round(prevResultsSA[index][1] / divisor)) > prevResultsSA[index][2]) ? parseInt(Math.round(prevResultsSA[index][1] / divisor)) - prevResultsSA[index][2] : 0;
		prevResultsST[index][3] = (parseInt(Math.round(prevResultsST[index][1] / divisor)) > prevResultsST[index][2]) ? parseInt(Math.round(prevResultsST[index][1] / divisor)) - prevResultsST[index][2] : 0;
		prevResultsTH[index][3] = (parseInt(Math.round(prevResultsTH[index][1] / divisor)) > prevResultsTH[index][2]) ? parseInt(Math.round(prevResultsTH[index][1] / divisor)) - prevResultsTH[index][2] : 0;
		
	}
	else {
		currResultsSH[index][3] = (parseInt(Math.round(currResultsSH[index][1] / divisor)) > currResultsSH[index][2]) ? parseInt(Math.round(currResultsSH[index][1] / divisor)) - currResultsSH[index][2] : 0;
		currResultsHM[index][3] = (parseInt(Math.round(currResultsHM[index][1] / divisor)) > currResultsHM[index][2]) ? parseInt(Math.round(currResultsHM[index][1] / divisor)) - currResultsHM[index][2] : 0;
		currResultsLS[index][3] = (parseInt(Math.round(currResultsLS[index][1] / divisor)) > currResultsLS[index][2]) ? parseInt(Math.round(currResultsLS[index][1] / divisor)) - currResultsLS[index][2] : 0;
		currResultsBM[index][3] = (parseInt(Math.round(currResultsBM[index][1] / divisor)) > currResultsBM[index][2]) ? parseInt(Math.round(currResultsBM[index][1] / divisor)) - currResultsBM[index][2] : 0;
		currResultsNRW[index][3] = (parseInt(Math.round(currResultsNRW[index][1] / divisor)) > currResultsNRW[index][2]) ? parseInt(Math.round(currResultsNRW[index][1] / divisor)) - currResultsNRW[index][2] : 0;
		currResultsHE[index][3] = (parseInt(Math.round(currResultsHE[index][1] / divisor)) > currResultsHE[index][2]) ? parseInt(Math.round(currResultsHE[index][1] / divisor)) - currResultsHE[index][2] : 0;
		currResultsRP[index][3] = (parseInt(Math.round(currResultsRP[index][1] / divisor)) > currResultsRP[index][2]) ? parseInt(Math.round(currResultsRP[index][1] / divisor)) - currResultsRP[index][2] : 0;
		currResultsBW[index][3] = (parseInt(Math.round(currResultsBW[index][1] / divisor)) > currResultsBW[index][2]) ? parseInt(Math.round(currResultsBW[index][1] / divisor)) - currResultsBW[index][2] : 0;
		currResultsBY[index][3] = (parseInt(Math.round(currResultsBY[index][1] / divisor)) > currResultsBY[index][2]) ? parseInt(Math.round(currResultsBY[index][1] / divisor)) - currResultsBY[index][2] : 0;
		currResultsSL[index][3] = (parseInt(Math.round(currResultsSL[index][1] / divisor)) > currResultsSL[index][2]) ? parseInt(Math.round(currResultsSL[index][1] / divisor)) - currResultsSL[index][2] : 0;
		currResultsBE[index][3] = (parseInt(Math.round(currResultsBE[index][1] / divisor)) > currResultsBE[index][2]) ? parseInt(Math.round(currResultsBE[index][1] / divisor)) - currResultsBE[index][2] : 0;
		currResultsBB[index][3] = (parseInt(Math.round(currResultsBB[index][1] / divisor)) > currResultsBB[index][2]) ? parseInt(Math.round(currResultsBB[index][1] / divisor)) - currResultsBB[index][2] : 0;
		currResultsMV[index][3] = (parseInt(Math.round(currResultsMV[index][1] / divisor)) > currResultsMV[index][2]) ? parseInt(Math.round(currResultsMV[index][1] / divisor)) - currResultsMV[index][2] : 0;
		currResultsSA[index][3] = (parseInt(Math.round(currResultsSA[index][1] / divisor)) > currResultsSA[index][2]) ? parseInt(Math.round(currResultsSA[index][1] / divisor)) - currResultsSA[index][2] : 0;
		currResultsST[index][3] = (parseInt(Math.round(currResultsST[index][1] / divisor)) > currResultsST[index][2]) ? parseInt(Math.round(currResultsST[index][1] / divisor)) - currResultsST[index][2] : 0;
		currResultsTH[index][3] = (parseInt(Math.round(currResultsTH[index][1] / divisor)) > currResultsTH[index][2]) ? parseInt(Math.round(currResultsTH[index][1] / divisor)) - currResultsTH[index][2] : 0;
	}

	
	
}

function sainteLague(listOfResults, targetSeats, partyVotes){
	
	partySeats = 0;
	divisor = parseInt(Math.round(partyVotes / targetSeats));
	
	while (partySeats != targetSeats)
	{
		partySeats = 0;
		for (var i = 0; i < listOfResults.length; i++)
		{
			newSeats = parseInt(Math.round(listOfResults[i][1] / divisor));
			if (listOfResults[i][2] > newSeats)
			{
				partySeats = partySeats + listOfResults[i][2];
			}
			else
			{
				partySeats = partySeats + newSeats;
			}
		}
	
		if (partySeats > targetSeats)
		{
			//divisor = increaseDivisor();
			divisor = divisor + (divisor *0.01);
		}
		else if (partySeats < targetSeats)
		{
			//divisor = decreaseDivisor();
			divisor = divisor - (divisor *0.01);
		}	
	
	}
	return divisor;
	
}

function federalResultsToStateLevel(initialisation) {
	
	if (initialisation)
	{
		prevResultsSH.sort(sortFunctionC);
		prevResultsHM.sort(sortFunctionC);
		prevResultsLS.sort(sortFunctionC);
		prevResultsBM.sort(sortFunctionC);
		prevResultsNRW.sort(sortFunctionC);
		prevResultsHE.sort(sortFunctionC);
		prevResultsRP.sort(sortFunctionC);
		prevResultsBW.sort(sortFunctionC);
		prevResultsBY.sort(sortFunctionC);
		prevResultsSL.sort(sortFunctionC);
		prevResultsBE.sort(sortFunctionC);
		prevResultsBB.sort(sortFunctionC);
		prevResultsMV.sort(sortFunctionC);
		prevResultsSA.sort(sortFunctionC);
		prevResultsST.sort(sortFunctionC);
		prevResultsTH.sort(sortFunctionC);
		prevFederalResults.sort(sortFunctionC);
		
		
		var AfDArray  = [["SH",prevResultsSH[0][1], prevResultsSH[0][2]],
					["HM",prevResultsHM[0][1], prevResultsHM[0][2]],
					["LS",prevResultsLS[0][1], prevResultsLS[0][2]],
					["BM",prevResultsBM[0][1], prevResultsBM[0][2]],
					["NRW",prevResultsNRW[0][1], prevResultsNRW[0][2]],
					["HE",prevResultsHE[0][1], prevResultsHE[0][2]],
					["RP",prevResultsRP[0][1], prevResultsRP[0][2]],
					["BW",prevResultsBW[0][1], prevResultsBW[0][2]],
					["BY",prevResultsBY[0][1], prevResultsBY[0][2]],
					["SL",prevResultsSL[0][1], prevResultsSL[0][2]],
					["BE",prevResultsBE[0][1], prevResultsBE[0][2]],
					["BB",prevResultsBB[0][1], prevResultsBB[0][2]],
					["MV",prevResultsMV[0][1], prevResultsMV[0][2]],
					["SA",prevResultsSA[0][1], prevResultsSA[0][2]],
					["ST",prevResultsST[0][1], prevResultsST[0][2]],
					["TH",prevResultsTH[0][1], prevResultsTH[0][2]]];
					
		var CDUArray  = [["SH",prevResultsSH[1][1], prevResultsSH[1][2]],
					["HM",prevResultsHM[1][1], prevResultsHM[1][2]],
					["LS",prevResultsLS[1][1], prevResultsLS[1][2]],
					["BM",prevResultsBM[1][1], prevResultsBM[1][2]],
					["NRW",prevResultsNRW[1][1], prevResultsNRW[1][2]],
					["HE",prevResultsHE[1][1], prevResultsHE[1][2]],
					["RP",prevResultsRP[1][1], prevResultsRP[1][2]],
					["BW",prevResultsBW[1][1], prevResultsBW[1][2]],
					["SL",prevResultsSL[1][1], prevResultsSL[1][2]],
					["BE",prevResultsBE[1][1], prevResultsBE[1][2]],
					["BB",prevResultsBB[1][1], prevResultsBB[1][2]],
					["MV",prevResultsMV[1][1], prevResultsMV[1][2]],
					["SA",prevResultsSA[1][1], prevResultsSA[1][2]],
					["ST",prevResultsST[1][1], prevResultsST[1][2]],
					["TH",prevResultsTH[1][1], prevResultsTH[1][2]]];
		
		var FDPArray  = [["SH",prevResultsSH[2][1], prevResultsSH[2][2]],
					["HM",prevResultsHM[2][1], prevResultsHM[2][2]],
					["LS",prevResultsLS[2][1], prevResultsLS[2][2]],
					["BM",prevResultsBM[2][1], prevResultsBM[2][2]],
					["NRW",prevResultsNRW[2][1], prevResultsNRW[2][2]],
					["HE",prevResultsHE[2][1], prevResultsHE[2][2]],
					["RP",prevResultsRP[2][1], prevResultsRP[2][2]],
					["BW",prevResultsBW[2][1], prevResultsBW[2][2]],
					["BY",prevResultsBY[2][1], prevResultsBY[2][2]],
					["SL",prevResultsSL[2][1], prevResultsSL[2][2]],
					["BE",prevResultsBE[2][1], prevResultsBE[2][2]],
					["BB",prevResultsBB[2][1], prevResultsBB[2][2]],
					["MV",prevResultsMV[2][1], prevResultsMV[2][2]],
					["SA",prevResultsSA[2][1], prevResultsSA[2][2]],
					["ST",prevResultsST[2][1], prevResultsST[2][2]],
					["TH",prevResultsTH[2][1], prevResultsTH[2][2]]];
					
		var GreenArray  = [["SH",prevResultsSH[3][1], prevResultsSH[3][2]],
					["HM",prevResultsHM[3][1], prevResultsHM[3][2]],
					["LS",prevResultsLS[3][1], prevResultsLS[3][2]],
					["BM",prevResultsBM[3][1], prevResultsBM[3][2]],
					["NRW",prevResultsNRW[3][1], prevResultsNRW[3][2]],
					["HE",prevResultsHE[3][1], prevResultsHE[3][2]],
					["RP",prevResultsRP[3][1], prevResultsRP[3][2]],
					["BW",prevResultsBW[3][1], prevResultsBW[3][2]],
					["BY",prevResultsBY[3][1], prevResultsBY[3][2]],
					["SL",prevResultsSL[3][1], prevResultsSL[3][2]],
					["BE",prevResultsBE[3][1], prevResultsBE[3][2]],
					["BB",prevResultsBB[3][1], prevResultsBB[3][2]],
					["MV",prevResultsMV[3][1], prevResultsMV[3][2]],
					["SA",prevResultsSA[3][1], prevResultsSA[3][2]],
					["ST",prevResultsST[3][1], prevResultsST[3][2]],
					["TH",prevResultsTH[3][1], prevResultsTH[3][2]]];
		
		var SPDArray  = [["SH",prevResultsSH[4][1], prevResultsSH[4][2]],
					["HM",prevResultsHM[4][1], prevResultsHM[4][2]],
					["LS",prevResultsLS[4][1], prevResultsLS[4][2]],
					["BM",prevResultsBM[4][1], prevResultsBM[4][2]],
					["NRW",prevResultsNRW[4][1], prevResultsNRW[4][2]],
					["HE",prevResultsHE[4][1], prevResultsHE[4][2]],
					["RP",prevResultsRP[4][1], prevResultsRP[4][2]],
					["BW",prevResultsBW[4][1], prevResultsBW[4][2]],
					["BY",prevResultsBY[4][1], prevResultsBY[4][2]],
					["SL",prevResultsSL[4][1], prevResultsSL[4][2]],
					["BE",prevResultsBE[4][1], prevResultsBE[4][2]],
					["BB",prevResultsBB[4][1], prevResultsBB[4][2]],
					["MV",prevResultsMV[4][1], prevResultsMV[4][2]],
					["SA",prevResultsSA[4][1], prevResultsSA[4][2]],
					["ST",prevResultsST[4][1], prevResultsST[4][2]],
					["TH",prevResultsTH[4][1], prevResultsTH[4][2]]];
					
		var LeftArray  = [["SH",prevResultsSH[5][1], prevResultsSH[5][2]],
					["HM",prevResultsHM[5][1], prevResultsHM[5][2]],
					["LS",prevResultsLS[5][1], prevResultsLS[5][2]],
					["BM",prevResultsBM[5][1], prevResultsBM[5][2]],
					["NRW",prevResultsNRW[5][1], prevResultsNRW[5][2]],
					["HE",prevResultsHE[5][1], prevResultsHE[5][2]],
					["RP",prevResultsRP[5][1], prevResultsRP[5][2]],
					["BW",prevResultsBW[5][1], prevResultsBW[5][2]],
					["BY",prevResultsBY[5][1], prevResultsBY[5][2]],
					["SL",prevResultsSL[5][1], prevResultsSL[5][2]],
					["BE",prevResultsBE[5][1], prevResultsBE[5][2]],
					["BB",prevResultsBB[5][1], prevResultsBB[5][2]],
					["MV",prevResultsMV[5][1], prevResultsMV[5][2]],
					["SA",prevResultsSA[5][1], prevResultsSA[5][2]],
					["ST",prevResultsST[5][1], prevResultsST[5][2]],
					["TH",prevResultsTH[5][1], prevResultsTH[5][2]]];
		
		var CSUArray  = ["BY",prevResultsBY[1][1], prevResultsBY[1][2]];
		
		
		
		var divisorArray = [((AfDThreshold) ? sainteLague(AfDArray, (prevFederalResults[0][2] + prevFederalResults[0][3]), prevFederalResults[0][1]) : 0),
		((CDUThreshold) ? sainteLague(CDUArray, ((prevFederalResults[1][2] + prevFederalResults[1][3]) - CSUFederalSeats), prevFederalResults[1][1] - prevResultsBY[1][1]) : 0),
		((FDPThreshold) ? sainteLague(FDPArray, (prevFederalResults[2][2] + prevFederalResults[2][3]), prevFederalResults[2][1]) : 0),
		((GreenThreshold) ? sainteLague(GreenArray, (prevFederalResults[3][2] + prevFederalResults[3][3]), prevFederalResults[3][1]) : 0),
		((SPDThreshold) ? sainteLague(SPDArray, (prevFederalResults[4][2] + prevFederalResults[4][3]), prevFederalResults[4][1]) : 0),
		((LeftThreshold) ? sainteLague(LeftArray, (prevFederalResults[5][2] + prevFederalResults[5][3]), prevFederalResults[5][1]) : 0)];
		
		if (CDUThreshold){
			var CSUDivisor = parseInt(Math.round(prevResultsBY[1][1] / CSUFederalSeats));
			prevResultsBY[1][3] = (parseInt(Math.round(prevResultsBY[1][1] / CSUDivisor)) > prevResultsBY[1][2]) ? parseInt(Math.round(prevResultsBY[1][1] / CSUDivisor)) - prevResultsBY[1][2] : 0;	
		}
		
		
		
		for (var i = 0; i < divisorArray.length; i++){
			applyPartyStateDivisor(prevResultsSH, i, divisorArray[i], initialisation);
			applyPartyStateDivisor(prevResultsHM, i, divisorArray[i], initialisation);
			applyPartyStateDivisor(prevResultsLS, i, divisorArray[i], initialisation);
			applyPartyStateDivisor(prevResultsBM, i, divisorArray[i], initialisation);
			applyPartyStateDivisor(prevResultsNRW, i, divisorArray[i], initialisation);
			applyPartyStateDivisor(prevResultsHE, i, divisorArray[i], initialisation);
			applyPartyStateDivisor(prevResultsRP, i, divisorArray[i], initialisation);
			applyPartyStateDivisor(prevResultsBW, i, divisorArray[i], initialisation);
			applyPartyStateDivisor(prevResultsBY, i, divisorArray[i], initialisation);
			applyPartyStateDivisor(prevResultsSL, i, divisorArray[i], initialisation);
			applyPartyStateDivisor(prevResultsBE, i, divisorArray[i], initialisation);
			applyPartyStateDivisor(prevResultsBB, i, divisorArray[i], initialisation);
			applyPartyStateDivisor(prevResultsMV, i, divisorArray[i], initialisation);
			applyPartyStateDivisor(prevResultsSA, i, divisorArray[i], initialisation);
			applyPartyStateDivisor(prevResultsST, i, divisorArray[i], initialisation);
			applyPartyStateDivisor(prevResultsTH, i, divisorArray[i], initialisation);	
			
		}
		
		
		
	}
	else
	{
		currResultsSH.sort(sortFunctionC);
		currResultsHM.sort(sortFunctionC);
		currResultsLS.sort(sortFunctionC);
		currResultsBM.sort(sortFunctionC);
		currResultsNRW.sort(sortFunctionC);
		currResultsHE.sort(sortFunctionC);
		currResultsRP.sort(sortFunctionC);
		currResultsBW.sort(sortFunctionC);
		currResultsBY.sort(sortFunctionC);
		currResultsSL.sort(sortFunctionC);
		currResultsBE.sort(sortFunctionC);
		currResultsBB.sort(sortFunctionC);
		currResultsMV.sort(sortFunctionC);
		currResultsSA.sort(sortFunctionC);
		currResultsST.sort(sortFunctionC);
		currResultsTH.sort(sortFunctionC);
		currFederalResults.sort(sortFunctionC);
		
		var AfDArray  = [["SH",currResultsSH[0][1], currResultsSH[0][2]],
					["HM",currResultsHM[0][1], currResultsHM[0][2]],
					["LS",currResultsLS[0][1], currResultsLS[0][2]],
					["BM",currResultsBM[0][1], currResultsBM[0][2]],
					["NRW",currResultsNRW[0][1], currResultsNRW[0][2]],
					["HE",currResultsHE[0][1], currResultsHE[0][2]],
					["RP",currResultsRP[0][1], currResultsRP[0][2]],
					["BW",currResultsBW[0][1], currResultsBW[0][2]],
					["BY",currResultsBY[0][1], currResultsBY[0][2]],
					["SL",currResultsSL[0][1], currResultsSL[0][2]],
					["BE",currResultsBE[0][1], currResultsBE[0][2]],
					["BB",currResultsBB[0][1], currResultsBB[0][2]],
					["MV",currResultsMV[0][1], currResultsMV[0][2]],
					["SA",currResultsSA[0][1], currResultsSA[0][2]],
					["ST",currResultsST[0][1], currResultsST[0][2]],
					["TH",currResultsTH[0][1], currResultsTH[0][2]]];
					
		var CDUArray  = [["SH",currResultsSH[1][1], currResultsSH[1][2]],
					["HM",currResultsHM[1][1], currResultsHM[1][2]],
					["LS",currResultsLS[1][1], currResultsLS[1][2]],
					["BM",currResultsBM[1][1], currResultsBM[1][2]],
					["NRW",currResultsNRW[1][1], currResultsNRW[1][2]],
					["HE",currResultsHE[1][1], currResultsHE[1][2]],
					["RP",currResultsRP[1][1], currResultsRP[1][2]],
					["BW",currResultsBW[1][1], currResultsBW[1][2]],
					["SL",currResultsSL[1][1], currResultsSL[1][2]],
					["BE",currResultsBE[1][1], currResultsBE[1][2]],
					["BB",currResultsBB[1][1], currResultsBB[1][2]],
					["MV",currResultsMV[1][1], currResultsMV[1][2]],
					["SA",currResultsSA[1][1], currResultsSA[1][2]],
					["ST",currResultsST[1][1], currResultsST[1][2]],
					["TH",currResultsTH[1][1], currResultsTH[1][2]]];
		
		var FDPArray  = [["SH",currResultsSH[2][1], currResultsSH[2][2]],
					["HM",currResultsHM[2][1], currResultsHM[2][2]],
					["LS",currResultsLS[2][1], currResultsLS[2][2]],
					["BM",currResultsBM[2][1], currResultsBM[2][2]],
					["NRW",currResultsNRW[2][1], currResultsNRW[2][2]],
					["HE",currResultsHE[2][1], currResultsHE[2][2]],
					["RP",currResultsRP[2][1], currResultsRP[2][2]],
					["BW",currResultsBW[2][1], currResultsBW[2][2]],
					["BY",currResultsBY[2][1], currResultsBY[2][2]],
					["SL",currResultsSL[2][1], currResultsSL[2][2]],
					["BE",currResultsBE[2][1], currResultsBE[2][2]],
					["BB",currResultsBB[2][1], currResultsBB[2][2]],
					["MV",currResultsMV[2][1], currResultsMV[2][2]],
					["SA",currResultsSA[2][1], currResultsSA[2][2]],
					["ST",currResultsST[2][1], currResultsST[2][2]],
					["TH",currResultsTH[2][1], currResultsTH[2][2]]];
					
		var GreenArray  = [["SH",currResultsSH[3][1], currResultsSH[3][2]],
					["HM",currResultsHM[3][1], currResultsHM[3][2]],
					["LS",currResultsLS[3][1], currResultsLS[3][2]],
					["BM",currResultsBM[3][1], currResultsBM[3][2]],
					["NRW",currResultsNRW[3][1], currResultsNRW[3][2]],
					["HE",currResultsHE[3][1], currResultsHE[3][2]],
					["RP",currResultsRP[3][1], currResultsRP[3][2]],
					["BW",currResultsBW[3][1], currResultsBW[3][2]],
					["BY",currResultsBY[3][1], currResultsBY[3][2]],
					["SL",currResultsSL[3][1], currResultsSL[3][2]],
					["BE",currResultsBE[3][1], currResultsBE[3][2]],
					["BB",currResultsBB[3][1], currResultsBB[3][2]],
					["MV",currResultsMV[3][1], currResultsMV[3][2]],
					["SA",currResultsSA[3][1], currResultsSA[3][2]],
					["ST",currResultsST[3][1], currResultsST[3][2]],
					["TH",currResultsTH[3][1], currResultsTH[3][2]]];
		
		var SPDArray  = [["SH",currResultsSH[4][1], currResultsSH[4][2]],
					["HM",currResultsHM[4][1], currResultsHM[4][2]],
					["LS",currResultsLS[4][1], currResultsLS[4][2]],
					["BM",currResultsBM[4][1], currResultsBM[4][2]],
					["NRW",currResultsNRW[4][1], currResultsNRW[4][2]],
					["HE",currResultsHE[4][1], currResultsHE[4][2]],
					["RP",currResultsRP[4][1], currResultsRP[4][2]],
					["BW",currResultsBW[4][1], currResultsBW[4][2]],
					["BY",currResultsBY[4][1], currResultsBY[4][2]],
					["SL",currResultsSL[4][1], currResultsSL[4][2]],
					["BE",currResultsBE[4][1], currResultsBE[4][2]],
					["BB",currResultsBB[4][1], currResultsBB[4][2]],
					["MV",currResultsMV[4][1], currResultsMV[4][2]],
					["SA",currResultsSA[4][1], currResultsSA[4][2]],
					["ST",currResultsST[4][1], currResultsST[4][2]],
					["TH",currResultsTH[4][1], currResultsTH[4][2]]];
					
		var LeftArray  = [["SH",currResultsSH[5][1], currResultsSH[5][2]],
					["HM",currResultsHM[5][1], currResultsHM[5][2]],
					["LS",currResultsLS[5][1], currResultsLS[5][2]],
					["BM",currResultsBM[5][1], currResultsBM[5][2]],
					["NRW",currResultsNRW[5][1], currResultsNRW[5][2]],
					["HE",currResultsHE[5][1], currResultsHE[5][2]],
					["RP",currResultsRP[5][1], currResultsRP[5][2]],
					["BW",currResultsBW[5][1], currResultsBW[5][2]],
					["BY",currResultsBY[5][1], currResultsBY[5][2]],
					["SL",currResultsSL[5][1], currResultsSL[5][2]],
					["BE",currResultsBE[5][1], currResultsBE[5][2]],
					["BB",currResultsBB[5][1], currResultsBB[5][2]],
					["MV",currResultsMV[5][1], currResultsMV[5][2]],
					["SA",currResultsSA[5][1], currResultsSA[5][2]],
					["ST",currResultsST[5][1], currResultsST[5][2]],
					["TH",currResultsTH[5][1], currResultsTH[5][2]]];
		
		var CSUArray  = ["BY",currResultsBY[1][1], currResultsBY[1][2]];


		
		var divisorArray = [((AfDThreshold) ? sainteLague(AfDArray, (currFederalResults[0][2] + currFederalResults[0][3]), currFederalResults[0][1]) : 0),
		((CDUThreshold) ? sainteLague(CDUArray, ((currFederalResults[1][2] + currFederalResults[1][3]) - CSUFederalSeats), currFederalResults[1][1] - currResultsBY[1][1]) : 0),
		((FDPThreshold) ? sainteLague(FDPArray, (currFederalResults[2][2] + currFederalResults[2][3]), currFederalResults[2][1]) : 0),
		((GreenThreshold) ? sainteLague(GreenArray, (currFederalResults[3][2] + currFederalResults[3][3]), currFederalResults[3][1]) : 0),
		((SPDThreshold) ? sainteLague(SPDArray, (currFederalResults[4][2] + currFederalResults[4][3]), currFederalResults[4][1]) : 0),
		((LeftThreshold) ? sainteLague(LeftArray, (currFederalResults[5][2] + currFederalResults[5][3]), currFederalResults[5][1]) : 0)];
		
		if (CDUThreshold){
			var CSUDivisor = parseInt(Math.round(currResultsBY[1][1] / CSUFederalSeats));
			currResultsBY[1][3] = (parseInt(Math.round(currResultsBY[1][1] / CSUDivisor)) > currResultsBY[1][2]) ? parseInt(Math.round(currResultsBY[1][1] / CSUDivisor)) - currResultsBY[1][2] : 0;	
		}
		
		
		for (var i = 0; i < divisorArray.length; i++){
			applyPartyStateDivisor(currResultsSH, i, divisorArray[i], initialisation);
			applyPartyStateDivisor(currResultsHM, i, divisorArray[i], initialisation);
			applyPartyStateDivisor(currResultsLS, i, divisorArray[i], initialisation);
			applyPartyStateDivisor(currResultsBM, i, divisorArray[i], initialisation);
			applyPartyStateDivisor(currResultsNRW, i, divisorArray[i], initialisation);
			applyPartyStateDivisor(currResultsHE, i, divisorArray[i], initialisation);
			applyPartyStateDivisor(currResultsRP, i, divisorArray[i], initialisation);
			applyPartyStateDivisor(currResultsBW, i, divisorArray[i], initialisation);
			applyPartyStateDivisor(currResultsBY, i, divisorArray[i], initialisation);
			applyPartyStateDivisor(currResultsSL, i, divisorArray[i], initialisation);
			applyPartyStateDivisor(currResultsBE, i, divisorArray[i], initialisation);
			applyPartyStateDivisor(currResultsBB, i, divisorArray[i], initialisation);
			applyPartyStateDivisor(currResultsMV, i, divisorArray[i], initialisation);
			applyPartyStateDivisor(currResultsSA, i, divisorArray[i], initialisation);
			applyPartyStateDivisor(currResultsST, i, divisorArray[i], initialisation);
			applyPartyStateDivisor(currResultsTH, i, divisorArray[i], initialisation);	
			
		}
		
		currResultsBY[1][3] = (parseInt(Math.round(currResultsBY[1][1] / CSUDivisor)) > currResultsBY[1][2]) ? parseInt(Math.round(currResultsBY[1][1] / CSUDivisor)) - currResultsBY[1][2] : 0;
		
	}
	
	
}

function seatCalculation(initialisation) {
	
	if (initialisation){
		states.eachLayer(function(currentLayer){
			((currentLayer.feature.properties.Name == "Schleswig-Holstein") ? initialStateSainteLague(prevResultsSH, currentLayer.feature.properties.StateSeats, initialisation)
			: (currentLayer.feature.properties.Name == "Hamburg") ? initialStateSainteLague(prevResultsHM, currentLayer.feature.properties.StateSeats, initialisation)
			: (currentLayer.feature.properties.Name == "Lower Saxony") ? initialStateSainteLague(prevResultsLS, currentLayer.feature.properties.StateSeats, initialisation)
			: (currentLayer.feature.properties.Name == "Bremen") ? initialStateSainteLague(prevResultsBM, currentLayer.feature.properties.StateSeats, initialisation)
			: (currentLayer.feature.properties.Name == "North Rhine-Westphalia") ? initialStateSainteLague(prevResultsNRW, currentLayer.feature.properties.StateSeats, initialisation)
			: (currentLayer.feature.properties.Name == "Hesse") ? initialStateSainteLague(prevResultsHE, currentLayer.feature.properties.StateSeats, initialisation)
			: (currentLayer.feature.properties.Name == "Rheinland-Palatinate") ? initialStateSainteLague(prevResultsRP, currentLayer.feature.properties.StateSeats, initialisation)
			: (currentLayer.feature.properties.Name == "Baden-Wurttemberg") ? initialStateSainteLague(prevResultsBW, currentLayer.feature.properties.StateSeats, initialisation)
			: (currentLayer.feature.properties.Name == "Bavaria") ? initialStateSainteLague(prevResultsBY, currentLayer.feature.properties.StateSeats, initialisation)
			: (currentLayer.feature.properties.Name == "Saarland") ? initialStateSainteLague(prevResultsSL, currentLayer.feature.properties.StateSeats, initialisation)
			: (currentLayer.feature.properties.Name == "Berlin") ? initialStateSainteLague(prevResultsBE, currentLayer.feature.properties.StateSeats, initialisation)
			: (currentLayer.feature.properties.Name == "Brandenburg") ? initialStateSainteLague(prevResultsBB, currentLayer.feature.properties.StateSeats, initialisation)
			: (currentLayer.feature.properties.Name == "Mecklenburg-Vorpommern") ? initialStateSainteLague(prevResultsMV, currentLayer.feature.properties.StateSeats, initialisation)
			: (currentLayer.feature.properties.Name == "Saxony") ? initialStateSainteLague(prevResultsSA, currentLayer.feature.properties.StateSeats, initialisation)
			: (currentLayer.feature.properties.Name == "Saxony-Anhalt") ? initialStateSainteLague(prevResultsST, currentLayer.feature.properties.StateSeats, initialisation)
			: initialStateSainteLague(prevResultsTH, currentLayer.feature.properties.StateSeats, initialisation));
		});
		
		federalOverhangEqualisation(prevFederalResults, prevResultsBY);
		federalResultsToStateLevel(initialisation);
		
	}
	else {
		states.eachLayer(function(currentLayer){
			((currentLayer.feature.properties.Name == "Schleswig-Holstein") ? initialStateSainteLague(currResultsSH, currentLayer.feature.properties.StateSeats, initialisation)
			: (currentLayer.feature.properties.Name == "Hamburg") ? initialStateSainteLague(currResultsHM, currentLayer.feature.properties.StateSeats, initialisation)
			: (currentLayer.feature.properties.Name == "Lower Saxony") ? initialStateSainteLague(currResultsLS, currentLayer.feature.properties.StateSeats, initialisation)
			: (currentLayer.feature.properties.Name == "Bremen") ? initialStateSainteLague(currResultsBM, currentLayer.feature.properties.StateSeats, initialisation)
			: (currentLayer.feature.properties.Name == "North Rhine-Westphalia") ? initialStateSainteLague(currResultsNRW, currentLayer.feature.properties.StateSeats, initialisation)
			: (currentLayer.feature.properties.Name == "Hesse") ? initialStateSainteLague(currResultsHE, currentLayer.feature.properties.StateSeats, initialisation)
			: (currentLayer.feature.properties.Name == "Rheinland-Palatinate") ? initialStateSainteLague(currResultsRP, currentLayer.feature.properties.StateSeats, initialisation)
			: (currentLayer.feature.properties.Name == "Baden-Wurttemberg") ? initialStateSainteLague(currResultsBW, currentLayer.feature.properties.StateSeats, initialisation)
			: (currentLayer.feature.properties.Name == "Bavaria") ? initialStateSainteLague(currResultsBY, currentLayer.feature.properties.StateSeats, initialisation)
			: (currentLayer.feature.properties.Name == "Saarland") ? initialStateSainteLague(currResultsSL, currentLayer.feature.properties.StateSeats, initialisation)
			: (currentLayer.feature.properties.Name == "Berlin") ? initialStateSainteLague(currResultsBE, currentLayer.feature.properties.StateSeats, initialisation)
			: (currentLayer.feature.properties.Name == "Brandenburg") ? initialStateSainteLague(currResultsBB, currentLayer.feature.properties.StateSeats, initialisation)
			: (currentLayer.feature.properties.Name == "Mecklenburg-Vorpommern") ? initialStateSainteLague(currResultsMV, currentLayer.feature.properties.StateSeats, initialisation)
			: (currentLayer.feature.properties.Name == "Saxony") ? initialStateSainteLague(currResultsSA, currentLayer.feature.properties.StateSeats, initialisation)
			: (currentLayer.feature.properties.Name == "Saxony-Anhalt") ? initialStateSainteLague(currResultsST, currentLayer.feature.properties.StateSeats, initialisation)
			: initialStateSainteLague(currResultsTH, currentLayer.feature.properties.StateSeats, initialisation));
		});
		
		federalOverhangEqualisation(currFederalResults, currResultsBY);
		federalResultsToStateLevel(initialisation);
	}
	
	
}



/*
console.log(SPDModifier);
console.log(CDUModifier);
console.log(AfDModifier);
console.log(FDPModifier);
console.log(GreenModifier);
console.log(LeftModifier);
console.log(CSUModifier);
*/
//borders

function constituencyWinner(currentLayer, currentStateResults, currentParty) {
	SPDVotes = currentLayer.feature.properties.SPDVote1 * SPDModifier;
	CDUVotes = currentLayer.feature.properties.CDUVote1 * CDUModifier;
	AfDVotes = currentLayer.feature.properties.AfDVote1 * AfDModifier;
	FDPVotes = currentLayer.feature.properties.FDPVote1 * FDPModifier;
	GreenVotes = currentLayer.feature.properties.GreenVote1 * GreenModifier;
	LeftVotes = currentLayer.feature.properties.LeftVote1 * LeftModifier;
	CSUVotes = currentLayer.feature.properties.CSUVote1 * CDUModifier;
	
	
	if ((SPDVotes > CDUVotes) && (SPDVotes > AfDVotes) && (SPDVotes > FDPVotes) && (SPDVotes > GreenVotes) && (SPDVotes > LeftVotes) && (SPDVotes > CSUVotes)){
		if (currentParty == "SPD")
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	if ((CDUVotes > SPDVotes) && (CDUVotes > AfDVotes) && (CDUVotes > FDPVotes) && (CDUVotes > GreenVotes) && (CDUVotes > LeftVotes) && (CDUVotes > CSUVotes)) {
		if (currentParty == "CDU")
		{
			return true;
		}
		else
		{
			return false;
		}
		
	}
	if ((AfDVotes > SPDVotes) && (AfDVotes > CDUVotes) && (AfDVotes > FDPVotes) && (AfDVotes > GreenVotes) && (AfDVotes > LeftVotes) && (AfDVotes > CSUVotes)) {
		if (currentParty == "AfD")
		{
			return true;
		}
		else
		{
			return false;
		}
		
	}
	if ((FDPVotes > SPDVotes) && (FDPVotes > CDUVotes) && (FDPVotes > AfDVotes) && (FDPVotes > GreenVotes) && (FDPVotes > LeftVotes) && (FDPVotes > CSUVotes)) {
		if (currentParty == "FDP")
		{
			return true;
		}
		else
		{
			return false;
		}
		
	}
	if ((GreenVotes > SPDVotes) && (GreenVotes > CDUVotes) && (GreenVotes > FDPVotes) && (GreenVotes > AfDVotes) && (GreenVotes > LeftVotes) && (GreenVotes > CSUVotes)) {
		if (currentParty == "Green")
		{
			return true;
		}
		else
		{
			return false;
		}
		
	}
	if ((LeftVotes > SPDVotes) && (LeftVotes > CDUVotes) && (LeftVotes > FDPVotes) && (LeftVotes > GreenVotes) && (LeftVotes > AfDVotes) && (LeftVotes > CSUVotes)){
		if (currentParty == "The Left")
		{
			return true;
		}
		else
		{
			return false;
		}
		
	}
	if ((CSUVotes > SPDVotes) && (CSUVotes > CDUVotes) && (CSUVotes > FDPVotes) && (CSUVotes > GreenVotes) && (CSUVotes > AfDVotes) && (CSUVotes > LeftVotes)) {
		if (currentParty == "CSU")
		{
			return true;
		}
		else
		{
			return false;
		}
		
	}
}

function styleConstituencies(feature) {
	SPDVotes = feature.properties.SPDVote1 * SPDModifier;
	CDUVotes = feature.properties.CDUVote1 * CDUModifier;
	AfDVotes = feature.properties.AfDVote1 * AfDModifier;
	FDPVotes = feature.properties.FDPVote1 * FDPModifier;
	GreenVotes = feature.properties.GreenVote1 * GreenModifier;
	LeftVotes = feature.properties.LeftVote1 * LeftModifier;
	CSUVotes = feature.properties.CSUVote1 * CSUModifier;
	

	if ((SPDVotes > CDUVotes) && (SPDVotes > AfDVotes) && (SPDVotes > FDPVotes) && (SPDVotes > GreenVotes) && (SPDVotes > LeftVotes) && (SPDVotes > CSUVotes)){
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#eb001f'
			
		};
	}
	if ((CDUVotes > SPDVotes) && (CDUVotes > AfDVotes) && (CDUVotes > FDPVotes) && (CDUVotes > GreenVotes) && (CDUVotes > LeftVotes) && (CDUVotes > CSUVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#000000'
			
		};
	}
	if ((AfDVotes > SPDVotes) && (AfDVotes > CDUVotes) && (AfDVotes > FDPVotes) && (AfDVotes > GreenVotes) && (AfDVotes > LeftVotes) && (AfDVotes > CSUVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#009ee0'
			
		};
	}
	if ((FDPVotes > SPDVotes) && (FDPVotes > CDUVotes) && (FDPVotes > AfDVotes) && (FDPVotes > GreenVotes) && (FDPVotes > LeftVotes) && (FDPVotes > CSUVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#ffed00'
			
		};
	}
	if ((GreenVotes > SPDVotes) && (GreenVotes > CDUVotes) && (GreenVotes > FDPVotes) && (GreenVotes > AfDVotes) && (GreenVotes > LeftVotes) && (GreenVotes > CSUVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#64a12d'
			
		};
	}
	if ((LeftVotes > SPDVotes) && (LeftVotes > CDUVotes) && (LeftVotes > FDPVotes) && (LeftVotes > GreenVotes) && (LeftVotes > AfDVotes) && (LeftVotes > CSUVotes)){
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#be3075'
			
		};
	}
	if ((CSUVotes > SPDVotes) && (CSUVotes > CDUVotes) && (CSUVotes > FDPVotes) && (CSUVotes > GreenVotes) && (CSUVotes > AfDVotes) && (CSUVotes > LeftVotes)) {
		return {
				weight: 1,
				opacity: 1,
				color: 'white',
				dashArray: '0',
				fillOpacity: 0.9,
				
				fillColor: '#000000'
				
			};
	}
}

function styleStates(feature) {
	SPDVotes = feature.properties.SPDVote * SPDModifier;
	CDUVotes = feature.properties.CDUVote * CDUModifier;
	AfDVotes = feature.properties.AfDVote * AfDModifier;
	FDPVotes = feature.properties.FDPVote * FDPModifier;
	GreenVotes = feature.properties.GreenVote * GreenModifier;
	LeftVotes = feature.properties.LeftVote * LeftModifier;
	CSUVotes = feature.properties.CSUVote * CSUModifier;

	if ((SPDVotes > CDUVotes) && (SPDVotes > AfDVotes) && (SPDVotes > FDPVotes) && (SPDVotes > GreenVotes) && (SPDVotes > LeftVotes) && (SPDVotes > CSUVotes)){
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#eb001f'
			
		};
	}
	if ((CDUVotes > SPDVotes) && (CDUVotes > AfDVotes) && (CDUVotes > FDPVotes) && (CDUVotes > GreenVotes) && (CDUVotes > LeftVotes) && (CDUVotes > CSUVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#000000'
			
		};
	}
	if ((AfDVotes > SPDVotes) && (AfDVotes > CDUVotes) && (AfDVotes > FDPVotes) && (AfDVotes > GreenVotes) && (AfDVotes > LeftVotes) && (AfDVotes > CSUVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#009ee0'
			
		};
	}
	if ((FDPVotes > SPDVotes) && (FDPVotes > CDUVotes) && (FDPVotes > AfDVotes) && (FDPVotes > GreenVotes) && (FDPVotes > LeftVotes) && (FDPVotes > CSUVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#ffed00'
			
		};
	}
	if ((GreenVotes > SPDVotes) && (GreenVotes > CDUVotes) && (GreenVotes > FDPVotes) && (GreenVotes > AfDVotes) && (GreenVotes > LeftVotes) && (GreenVotes > CSUVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#64a12d'
			
		};
	}
	if ((LeftVotes > SPDVotes) && (LeftVotes > CDUVotes) && (LeftVotes > FDPVotes) && (LeftVotes > GreenVotes) && (LeftVotes > AfDVotes) && (LeftVotes > CSUVotes)){
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#be3075'
			
		};
	}
	if ((CSUVotes > SPDVotes) && (CSUVotes > CDUVotes) && (CSUVotes > FDPVotes) && (CSUVotes > GreenVotes) && (CSUVotes > AfDVotes) && (CSUVotes > LeftVotes)) {
		return {
				weight: 1,
				opacity: 1,
				color: 'white',
				dashArray: '0',
				fillOpacity: 0.9,
				
				fillColor: '#000000'
				
			};
	}
}

function fillStateArrays(stateCollection, isBavaria, initialisation) {
	let noOfParties = 6;
	
	if (initialisation)
	{
		SPDModifier = 1;
		CDUModifier = 1;
		AfDModifier = 1;
		FDPModifier = 1;
		GreenModifier = 1;
		LeftModifier = 1;
		CSUModifier = CDUModifier;
	}


	var results = new Array(noOfParties);
	for (var i = 0; i < results.length; i++) {
		results[i] = new Array(5); //Loop through depending on how many districts there are and create new fields.
		results[i][1] = 0;
		results[i][2] = 0;
		results[i][3] = 0;
		results[i][4] = 0;
	}

	var index = 0; //Default index to 0 as this is the standard starting point for any array.
	if (isBavaria)
	{
		var parties = ["SPD","CSU","AfD","FDP","The Left","Green"];
		
		stateCollection.eachLayer(function(currentLayer){
		for (var i = 0; i < parties.length; i++){
			results[index][0] = parties[i]; 
			results[index][1] = results[index][1] + ((parties[i] == "SPD") ? Math.round(((currentLayer.feature.properties.SPDVote2 * SPDModifier) * 1) / 1)
			: (parties[i] == "CSU") ? Math.round(((currentLayer.feature.properties.CSUVote2 * CDUModifier) * 1) / 1)
			: (parties[i] == "AfD") ? Math.round(((currentLayer.feature.properties.AfDVote2 * AfDModifier) * 1) / 1)
			: (parties[i] == "FDP") ? Math.round(((currentLayer.feature.properties.FDPVote2 * FDPModifier) * 1) / 1)
			: (parties[i] == "The Left") ? Math.round(((currentLayer.feature.properties.LeftVote2 * LeftModifier) * 1) / 1)
			: Math.round(((currentLayer.feature.properties.GreenVote2 * GreenModifier) * 1) / 1));
			results[index][2] = (constituencyWinner(currentLayer, results, parties[i]) ? results[index][2] = results[index][2] + 1 : results[index][2]);
			results[index][3] = 0;
			results[index][4] = results[index][1];
			index++;
		}
		index = 0;
	
		});	
	}
	else
	{
		var parties = ["SPD","CDU","AfD","FDP","The Left","Green"];
		
		stateCollection.eachLayer(function(currentLayer){
		for (var i = 0; i < parties.length; i++){
			results[index][0] = parties[i]; 
			results[index][1] = results[index][1] + ((parties[i] == "SPD") ? Math.round(((currentLayer.feature.properties.SPDVote2 * SPDModifier) * 1) / 1)
			: (parties[i] == "CDU") ? Math.round(((currentLayer.feature.properties.CDUVote2 * CDUModifier) * 1) / 1)
			: (parties[i] == "AfD") ? Math.round(((currentLayer.feature.properties.AfDVote2 * AfDModifier) * 1) / 1)
			: (parties[i] == "FDP") ? Math.round(((currentLayer.feature.properties.FDPVote2 * FDPModifier) * 1) / 1)
			: (parties[i] == "The Left") ? Math.round(((currentLayer.feature.properties.LeftVote2 * LeftModifier) * 1) / 1)
			: Math.round(((currentLayer.feature.properties.GreenVote2 * GreenModifier) * 1) / 1));
			results[index][2] = (constituencyWinner(currentLayer, results, parties[i]) ? results[index][2] = results[index][2] + 1 : results[index][2]);
			results[index][3] = 0;
			results[index][4] = results[index][1];
			index++;
		}
		index = 0;
	
		});	;	
	}

	return results;
}

function fillFederalArrayByState(currentArray, results){
	
	for (var i = 0; i < currentArray.length; i++) {
		if (currentArray[i][0] == "SPD")
		{
			results[0][1] = results[0][1] + currentArray[i][1];
			results[0][2] = results[0][2] + currentArray[i][2];
			results[0][3] = results[0][3] + currentArray[i][3];
			results[0][4] = results[0][4] + currentArray[i][1];
		}
		if ((currentArray[i][0] == "CDU") || (currentArray[i][0] == "CSU"))
		{
			results[1][1] = results[1][1] + currentArray[i][1];
			results[1][2] = results[1][2] + currentArray[i][2];
			results[1][3] = results[1][3] + currentArray[i][3];
			results[1][4] = results[1][4] + currentArray[i][1];
		}
		if (currentArray[i][0] == "AfD")
		{
			results[2][1] = results[2][1] + currentArray[i][1];
			results[2][2] = results[2][2] + currentArray[i][2];
			results[2][3] = results[2][3] + currentArray[i][3];
			results[2][4] = results[2][4] + currentArray[i][1];
		}
		if (currentArray[i][0] == "FDP")
		{
			results[3][1] = results[3][1] + currentArray[i][1];
			results[3][2] = results[3][2] + currentArray[i][2];
			results[3][3] = results[3][3] + currentArray[i][3];
			results[3][4] = results[2][4] + currentArray[i][1];
		}
		if (currentArray[i][0] == "The Left")
		{
			results[4][1] = results[4][1] + currentArray[i][1];
			results[4][2] = results[4][2] + currentArray[i][2];
			results[4][3] = results[4][3] + currentArray[i][3];
			results[4][4] = results[4][4] + currentArray[i][1];
		}
		if (currentArray[i][0] == "Green")
		{
			results[5][1] = results[5][1] + currentArray[i][1];
			results[5][2] = results[5][2] + currentArray[i][2];
			results[5][3] = results[5][3] + currentArray[i][3];
			results[5][4] = results[5][4] + currentArray[i][1];
		}		
	}
	
	return results;
	
}

function fillFederalArray() {
	let noOfParties = 6;

	var parties = ["SPD","CDU/CSU","AfD","FDP","The Left","Green"];
	var results = new Array(noOfParties);
	for (var i = 0; i < results.length; i++) {
		results[i] = new Array(5); //Loop through depending on how many districts there are and create new fields.
		results[i][0] = parties[i];
		results[i][1] = 0;
		results[i][2] = 0;
		results[i][3] = 0;
		results[i][4] = 0;
	}
	
	results = fillFederalArrayByState(currResultsSH, results);
	results = fillFederalArrayByState(currResultsMV, results);
	results = fillFederalArrayByState(currResultsHM, results);
	results = fillFederalArrayByState(currResultsLS, results);
	results = fillFederalArrayByState(currResultsBM, results);
	results = fillFederalArrayByState(currResultsBB, results);
	results = fillFederalArrayByState(currResultsST, results);
	results = fillFederalArrayByState(currResultsBE, results);
	results = fillFederalArrayByState(currResultsNRW, results);
	results = fillFederalArrayByState(currResultsSA, results);
	results = fillFederalArrayByState(currResultsHE, results);
	results = fillFederalArrayByState(currResultsTH, results);
	results = fillFederalArrayByState(currResultsRP, results);
	results = fillFederalArrayByState(currResultsBY, results);
	results = fillFederalArrayByState(currResultsBW, results);
	results = fillFederalArrayByState(currResultsSL, results);
	return results;
	
}

function highlightFeatureStates(e) {
	var layer = e.target;

	layer.setStyle({
		weight: 3,
		color: '#666',
		dashArray: '',
		fillOpacity: 1
	});

	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
		layer.bringToFront();
	}
}

//Return information on mouse over, also highlight borders
function highlightFeatureConstituency(e) {
	var layer = e.target;

	layer.setStyle({
		weight: 3,
		color: '#666',
		dashArray: '',
		fillOpacity: 1
	});

	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
		layer.bringToFront();
	}
}

function sortFunction(a, b) {
	if (a[1] === b[1]) {
		return 0;
	}
	else {
		return (a[1] > b[1]) ? -1 : 1;
	}
}

function displayVoteShareTable() {
	var cols = document.getElementsByClassName('vote-share-table-container');
	for (var i = 0; i < cols.length; i++)
    {
        cols[i].style["visibility"] = "visible";
		cols[i].style["display"] = "revert";
    }	
}

function hideVoteShareTable() {
	var cols = document.getElementsByClassName('vote-share-table-container');
	for (var i = 0; i < cols.length; i++)
    {
        cols[i].style["visibility"] = "hidden";
		cols[i].style["display"] = "none";
    }	
}

function displayCurrentProjection() {
	document.getElementById("CDUInput").value = CDUprediction;
	document.getElementById("SPDInput").value = SPDprediction;
	document.getElementById("AfDInput").value = AfDprediction;
	document.getElementById("FDPInput").value = FDPprediction;
	document.getElementById("LeftInput").value = Leftprediction;
	document.getElementById("GreenInput").value = Greenprediction;
	
	calculateUserPrediction();
}

function displayPrevResults() {
	document.getElementById("CDUInput").value = prevCDUVoteShare;
	document.getElementById("SPDInput").value = prevSPDVoteShare;
	document.getElementById("AfDInput").value = prevAfDVoteShare;
	document.getElementById("FDPInput").value = prevFDPVoteShare;
	document.getElementById("LeftInput").value = prevLeftVoteShare;
	document.getElementById("GreenInput").value = prevGreenVoteShare;
	
	calculateUserPrediction();
}

function thresholdChecker(index, currentVoteShare){

	if ((currentVoteShare >= 5) || (currFederalResults[index][2] >= 3)){
		return true;
	}
	else {
		return false;
	}

}

function thresholdImplementor(index, partyThreshold) {
	if (!partyThreshold){
		currResultsSH[index][4] = 0;
		currResultsHM[index][4] = 0;
		currResultsLS[index][4] = 0;
		currResultsBM[index][4] = 0;
		currResultsNRW[index][4] = 0;
		currResultsHE[index][4] = 0;
		currResultsRP[index][4] = 0;
		currResultsBW[index][4] = 0;
		currResultsBY[index][4] = 0;
		currResultsSL[index][4] = 0;
		currResultsBE[index][4] = 0;
		currResultsBB[index][4] = 0;
		currResultsMV[index][4] = 0;
		currResultsSA[index][4] = 0;
		currResultsST[index][4] = 0;
		currResultsTH[index][4] = 0;
		currFederalResults[index][4] = 0;
	}
	
}

function calculateUserPrediction() {
	
	SPDModifier = 1 + ((document.getElementById("SPDInput").value - prevSPDVoteShare) / prevSPDVoteShare);
	CDUModifier = 1 + ((document.getElementById("CDUInput").value - prevCDUVoteShare) / prevCDUVoteShare);
	AfDModifier = 1 + ((document.getElementById("AfDInput").value - prevAfDVoteShare) / prevAfDVoteShare);
	FDPModifier = 1 + ((document.getElementById("FDPInput").value - prevFDPVoteShare) / prevFDPVoteShare);
	GreenModifier = 1 + ((document.getElementById("GreenInput").value - prevGreenVoteShare) / prevGreenVoteShare);
	LeftModifier = 1 + ((document.getElementById("LeftInput").value - prevLeftVoteShare) / prevLeftVoteShare);
	CSUModifier = CDUModifier;

	
	currResultsSH = fillStateArrays(constituenciesSH, false, false);
	currResultsMV = fillStateArrays(constituenciesMV, false, false);
	currResultsHM = fillStateArrays(constituenciesHM, false, false);
	currResultsLS = fillStateArrays(constituenciesLS, false, false);
	currResultsBM = fillStateArrays(constituenciesBM, false, false);
	currResultsBB = fillStateArrays(constituenciesBB, false, false);
	currResultsST = fillStateArrays(constituenciesST, false, false);
	currResultsBE = fillStateArrays(constituenciesBE, false, false);
	currResultsNRW = fillStateArrays(constituenciesNRW, false, false);
	currResultsSA = fillStateArrays(constituenciesSA, false, false);
	currResultsHE = fillStateArrays(constituenciesHE, false, false);
	currResultsTH = fillStateArrays(constituenciesTH, false, false);
	currResultsRP = fillStateArrays(constituenciesRP, false, false);
	currResultsBY = fillStateArrays(constituenciesBY, true, false);
	currResultsBW = fillStateArrays(constituenciesBW, false, false);
	currResultsSL = fillStateArrays(constituenciesSL, false, false);

	currFederalResults = fillFederalArray();
	currResultsSH.sort(sortFunctionC);
	currResultsHM.sort(sortFunctionC);
	currResultsLS.sort(sortFunctionC);
	currResultsBM.sort(sortFunctionC);
	currResultsNRW.sort(sortFunctionC);
	currResultsHE.sort(sortFunctionC);
	currResultsRP.sort(sortFunctionC);
	currResultsBW.sort(sortFunctionC);
	currResultsBY.sort(sortFunctionC);
	currResultsSL.sort(sortFunctionC);
	currResultsBE.sort(sortFunctionC);
	currResultsBB.sort(sortFunctionC);
	currResultsMV.sort(sortFunctionC);
	currResultsSA.sort(sortFunctionC);
	currResultsST.sort(sortFunctionC);
	currResultsTH.sort(sortFunctionC);
	currFederalResults.sort(sortFunctionC);
	
	
	AfDThreshold = thresholdChecker(0, document.getElementById("AfDInput").value);
	CDUThreshold = thresholdChecker(1, document.getElementById("CDUInput").value);
	FDPThreshold = thresholdChecker(2, document.getElementById("FDPInput").value);
	GreenThreshold = thresholdChecker(3, document.getElementById("GreenInput").value);
	SPDThreshold = thresholdChecker(4, document.getElementById("SPDInput").value);
	LeftThreshold = thresholdChecker(5, document.getElementById("LeftInput").value);
	
	thresholdImplementor(0, AfDThreshold);
	thresholdImplementor(1, CDUThreshold);
	thresholdImplementor(2, FDPThreshold);
	thresholdImplementor(3, GreenThreshold);
	thresholdImplementor(4, SPDThreshold);
	thresholdImplementor(5, LeftThreshold);
	
	
	states.eachLayer(function(layer){ //Iterate through each layer in a collection
		states.resetStyle(layer);
	});
	constituenciesSH.eachLayer(function(layer){ //Iterate through each layer in a collection
		constituenciesSH.resetStyle(layer);
	});
	constituenciesMV.eachLayer(function(layer){ //Iterate through each layer in a collection
		constituenciesMV.resetStyle(layer);
	});
	constituenciesHM.eachLayer(function(layer){ //Iterate through each layer in a collection
		constituenciesHM.resetStyle(layer);
	});
	constituenciesLS.eachLayer(function(layer){ //Iterate through each layer in a collection
		constituenciesLS.resetStyle(layer);
	});
	constituenciesBM.eachLayer(function(layer){ //Iterate through each layer in a collection
		constituenciesBM.resetStyle(layer);
	});
	constituenciesBB.eachLayer(function(layer){ //Iterate through each layer in a collection
		constituenciesBB.resetStyle(layer);
	});
	constituenciesST.eachLayer(function(layer){ //Iterate through each layer in a collection
		constituenciesST.resetStyle(layer);
	});
	constituenciesBE.eachLayer(function(layer){ //Iterate through each layer in a collection
		constituenciesBE.resetStyle(layer);
	});
	constituenciesNRW.eachLayer(function(layer){ //Iterate through each layer in a collection
		constituenciesNRW.resetStyle(layer);
	});
	constituenciesSA.eachLayer(function(layer){ //Iterate through each layer in a collection
		constituenciesSA.resetStyle(layer);
	});
	constituenciesHE.eachLayer(function(layer){ //Iterate through each layer in a collection
		constituenciesHE.resetStyle(layer);
	});
	constituenciesTH.eachLayer(function(layer){ //Iterate through each layer in a collection
		constituenciesTH.resetStyle(layer);
	});
	constituenciesRP.eachLayer(function(layer){ //Iterate through each layer in a collection
		constituenciesRP.resetStyle(layer);
	});
	constituenciesBY.eachLayer(function(layer){ //Iterate through each layer in a collection
		constituenciesBY.resetStyle(layer);
	});
	constituenciesBW.eachLayer(function(layer){ //Iterate through each layer in a collection
		constituenciesBW.resetStyle(layer);
	});
	constituenciesSL.eachLayer(function(layer){ //Iterate through each layer in a collection
		constituenciesSL.resetStyle(layer);
	});

	//Seat Calculation Here
	
	seatCalculation(false);
 
	//Update Table
	currFederalResults.sort(sortFunction);
	updateResultsTable(currFederalResults, prevFederalResults);
}

function resetHighlightStates(e) {
	states.resetStyle(e.target);
}

function resetHighlightConstituencies(e) {
	constituenciesSH.resetStyle(e.target);
}

function resetMap() {
	constituenciesSH.remove();
	constituenciesMV.remove();
	constituenciesHM.remove();
	constituenciesLS.remove();
	constituenciesBM.remove();
	constituenciesBB.remove();
	constituenciesST.remove();
	constituenciesBE.remove();
	constituenciesNRW.remove();
	constituenciesSA.remove();
	constituenciesHE.remove();
	constituenciesTH.remove();
	constituenciesRP.remove();
	constituenciesBY.remove();
	constituenciesBW.remove();
	constituenciesSL.remove();
	
	stateMode = true;
	federalLevel = true;
	
	displayVoteShareTable();
	document.getElementById("ResultsTableTitle").value = "Federal Level";
	
	currFederalResults.sort(sortFunction);
	updateResultsTable(currFederalResults, prevFederalResults);

	map.addLayer(states);
	resetHighlightStates(states);
	map.setView(new L.LatLng(51.5, 8), 6);
	
}

function switchDisplay() {

	if (stateMode == true)
	{
		states.remove();
		
		map.addLayer(constituenciesSH);
		map.addLayer(constituenciesMV);
		map.addLayer(constituenciesHM);
		map.addLayer(constituenciesLS);
		map.addLayer(constituenciesBM);
		map.addLayer(constituenciesBB);
		map.addLayer(constituenciesST);
		map.addLayer(constituenciesBE);
		map.addLayer(constituenciesNRW);
		map.addLayer(constituenciesSA);
		map.addLayer(constituenciesHE);
		map.addLayer(constituenciesTH);
		map.addLayer(constituenciesRP);
		map.addLayer(constituenciesBY);
		map.addLayer(constituenciesBW);
		map.addLayer(constituenciesSL);
		resetHighlightConstituencies(constituenciesSH);	
		
		displayVoteShareTable();
		document.getElementById("ResultsTableTitle").value = "Federal Level";
		
		currFederalResults.sort(sortFunction);
		updateResultsTable(currFederalResults, prevFederalResults);
		
		federalLevel = true;
		stateMode = false;
	}	
	else
	{
		constituenciesSH.remove();
		constituenciesMV.remove();
		constituenciesHM.remove();
		constituenciesLS.remove();
		constituenciesBM.remove();
		constituenciesBB.remove();
		constituenciesST.remove();
		constituenciesBE.remove();
		constituenciesNRW.remove();
		constituenciesSA.remove();
		constituenciesHE.remove();
		constituenciesTH.remove();
		constituenciesRP.remove();
		constituenciesBY.remove();
		constituenciesBW.remove();
		constituenciesSL.remove();
		
		
		map.addLayer(states);
		resetHighlightStates(states);
		
		displayVoteShareTable();
		document.getElementById("ResultsTableTitle").value = "Federal Level";
		
		currFederalResults.sort(sortFunction);
		updateResultsTable(currFederalResults, prevFederalResults);
		
		federalLevel = true;
		stateMode = true;
	}
	
	
}

//Zoom in when user clicks on state/region
function zoomToFeatureConstituencyToConstituency(e) {
	map.fitBounds(e.target.getBounds());
	displayPopup(e);
}

function zoomToFeatureStatesToConstituencies(e) {
	stateMode = false;
	federalLevel = false;
	
	hideVoteShareTable();

	map.fitBounds(e.target.getBounds());
	states.remove();
	
	
	((e.target.feature.properties.Name == "Schleswig-Holstein") ? map.addLayer(constituenciesSH)
	: (e.target.feature.properties.Name == "Hamburg") ? map.addLayer(constituenciesHM)
	: (e.target.feature.properties.Name == "Lower Saxony") ? map.addLayer(constituenciesLS)
	: (e.target.feature.properties.Name == "Bremen") ? map.addLayer(constituenciesBM)
	: (e.target.feature.properties.Name == "North Rhine-Westphalia") ? map.addLayer(constituenciesNRW)
	: (e.target.feature.properties.Name == "Hesse") ? map.addLayer(constituenciesHE)
	: (e.target.feature.properties.Name == "Rheinland-Palatinate") ? map.addLayer(constituenciesRP)
	: (e.target.feature.properties.Name == "Baden-Wurttemberg") ? map.addLayer(constituenciesBW)
	: (e.target.feature.properties.Name == "Bavaria") ? map.addLayer(constituenciesBY)
	: (e.target.feature.properties.Name == "Saarland") ? map.addLayer(constituenciesSL)
	: (e.target.feature.properties.Name == "Berlin") ? map.addLayer(constituenciesBE)
	: (e.target.feature.properties.Name == "Brandenburg") ? map.addLayer(constituenciesBB)
	: (e.target.feature.properties.Name == "Mecklenburg-Vorpommern") ? map.addLayer(constituenciesMV)
	: (e.target.feature.properties.Name == "Saxony") ? map.addLayer(constituenciesSA)
	: (e.target.feature.properties.Name == "Saxony-Anhalt") ? map.addLayer(constituenciesST)
	: map.addLayer(constituenciesTH));
	
	document.getElementById("ResultsTableTitle").value = e.target.feature.properties.Name;
	
	((e.target.feature.properties.Name == "Schleswig-Holstein") ? currResultsSH.sort(sortFunction)
	: (e.target.feature.properties.Name == "Hamburg") ? currResultsHM.sort(sortFunction)
	: (e.target.feature.properties.Name == "Lower Saxony") ? currResultsLS.sort(sortFunction)
	: (e.target.feature.properties.Name == "Bremen") ? currResultsBM.sort(sortFunction)
	: (e.target.feature.properties.Name == "North Rhine-Westphalia") ? currResultsNRW.sort(sortFunction)
	: (e.target.feature.properties.Name == "Hesse") ? currResultsHE.sort(sortFunction)
	: (e.target.feature.properties.Name == "Rheinland-Palatinate") ? currResultsRP.sort(sortFunction)
	: (e.target.feature.properties.Name == "Baden-Wurttemberg") ? currResultsBW.sort(sortFunction)
	: (e.target.feature.properties.Name == "Bavaria") ? currResultsBY.sort(sortFunction)
	: (e.target.feature.properties.Name == "Saarland") ? currResultsSL.sort(sortFunction)
	: (e.target.feature.properties.Name == "Berlin") ? currResultsBE.sort(sortFunction)
	: (e.target.feature.properties.Name == "Brandenburg") ? currResultsBB.sort(sortFunction)
	: (e.target.feature.properties.Name == "Mecklenburg-Vorpommern") ? currResultsMV.sort(sortFunction)
	: (e.target.feature.properties.Name == "Saxony") ? currResultsSA.sort(sortFunction)
	: (e.target.feature.properties.Name == "Saxony-Anhalt") ? currResultsST.sort(sortFunction)
	: currResultsTH.sort(sortFunction));
	
	((e.target.feature.properties.Name == "Schleswig-Holstein") ? updateResultsTable(currResultsSH, prevResultsSH)
	: (e.target.feature.properties.Name == "Hamburg") ? updateResultsTable(currResultsHM, prevResultsHM)
	: (e.target.feature.properties.Name == "Lower Saxony") ? updateResultsTable(currResultsLS, prevResultsLS)
	: (e.target.feature.properties.Name == "Bremen") ? updateResultsTable(currResultsBM, prevResultsBM)
	: (e.target.feature.properties.Name == "North Rhine-Westphalia") ? updateResultsTable(currResultsNRW, prevResultsNRW)
	: (e.target.feature.properties.Name == "Hesse") ? updateResultsTable(currResultsHE, prevResultsHE)
	: (e.target.feature.properties.Name == "Rheinland-Palatinate") ? updateResultsTable(currResultsRP, prevResultsRP)
	: (e.target.feature.properties.Name == "Baden-Wurttemberg") ? updateResultsTable(currResultsBW, prevResultsBW)
	: (e.target.feature.properties.Name == "Bavaria") ? updateResultsTable(currResultsBY, prevResultsBY)
	: (e.target.feature.properties.Name == "Saarland") ? updateResultsTable(currResultsSL, prevResultsSL)
	: (e.target.feature.properties.Name == "Berlin") ? updateResultsTable(currResultsBE, prevResultsBE)
	: (e.target.feature.properties.Name == "Brandenburg") ? updateResultsTable(currResultsBB, prevResultsBB)
	: (e.target.feature.properties.Name == "Mecklenburg-Vorpommern") ? updateResultsTable(currResultsMV, prevResultsMV)
	: (e.target.feature.properties.Name == "Saxony") ? updateResultsTable(currResultsSA, prevResultsSA)
	: (e.target.feature.properties.Name == "Saxony-Anhalt") ? updateResultsTable(currResultsST, prevResultsST)
	: updateResultsTable(currResultsTH, prevResultsTH));

}

function onEachFeatureStates(feature, layer) {
	layer.on({
		mouseover: highlightFeatureStates,
		mouseout: resetHighlightStates,
		click: zoomToFeatureStatesToConstituencies
	});
}

function onEachFeatureConstituencies(feature, layer) {
	layer.on({
		mouseover: highlightFeatureConstituency,
		mouseout: resetHighlightConstituencies,
		click: zoomToFeatureConstituencyToConstituency
	});
}
//On opening page

function displayPopup(e) {
		
	var layer = e.target;
	
	
	var popup = L.popup();
	
	//Set up rank system
	
	
	
	var prevArray = [["SPD",parseInt(layer.feature.properties.SPDVote1, 10), parseInt(layer.feature.properties.SPDVote2, 10)],
	["AfD",parseInt(layer.feature.properties.AfDVote1, 10), parseInt(layer.feature.properties.AfDVote2, 10)],
	["CDU",parseInt(layer.feature.properties.CDUVote1, 10), parseInt(layer.feature.properties.CDUVote2, 10)],
	["FDP",parseInt(layer.feature.properties.FDPVote1, 10), parseInt(layer.feature.properties.FDPVote2, 10)],
	["Green",parseInt(layer.feature.properties.GreenVote1, 10), parseInt(layer.feature.properties.GreenVote2, 10)],
	["Left",parseInt(layer.feature.properties.LeftVote1, 10), parseInt(layer.feature.properties.LeftVote2, 10)],
	["CSU",parseInt(layer.feature.properties.CSUVote1, 10), parseInt(layer.feature.properties.CSUVote2, 10)]];
	prevArray.sort(sortFunction);
	
	var currArray = [["SPD",parseInt(layer.feature.properties.SPDVote1 * SPDModifier, 10), parseInt(layer.feature.properties.SPDVote2 * SPDModifier, 10)],
	["AfD",parseInt(layer.feature.properties.AfDVote1 * AfDModifier, 10), parseInt(layer.feature.properties.AfDVote2 * AfDModifier, 10)],
	["CDU",parseInt(layer.feature.properties.CDUVote1 * CDUModifier, 10), parseInt(layer.feature.properties.CDUVote2 * CDUModifier, 10)],
	["FDP",parseInt(layer.feature.properties.FDPVote1 * FDPModifier, 10), parseInt(layer.feature.properties.FDPVote2 * FDPModifier, 10)],
	["Green",parseInt(layer.feature.properties.GreenVote1 * GreenModifier, 10), parseInt(layer.feature.properties.GreenVote2 * GreenModifier, 10)],
	["Left",parseInt(layer.feature.properties.LeftVote1 * LeftModifier, 10), parseInt(layer.feature.properties.LeftVote2 * LeftModifier, 10)],
	["CSU",parseInt(layer.feature.properties.CSUVote1 * CSUModifier, 10), parseInt(layer.feature.properties.CSUVote2 * CSUModifier, 10)]];
	currArray.sort(sortFunction);
	
	var firstVoteTotalPrev = 0,
	secondVoteTotalPrev = 0,
	firstVoteTotalCurr = 0,
	secondVoteTotalCurr = 0;
	
	for (var i = 0; i < prevArray.length; i++) {
		firstVoteTotalPrev = firstVoteTotalPrev + prevArray[i][1];
		secondVoteTotalPrev = secondVoteTotalPrev + prevArray[i][2];
		firstVoteTotalCurr = firstVoteTotalCurr + currArray[i][1];
		secondVoteTotalCurr = secondVoteTotalCurr + currArray[i][2];
	}

	   
	var list = "<b>" + layer.feature.properties.Name + "</b></br>" 
	+ " Party | 1st Vote | 2nd Vote </br>"
	+ "</br>"
	+ " Previous Results (2017): </br>"
	+ prevArray[0][0] + "  |  " + prevArray[0][1] + ", " + Math.round((((prevArray[0][1] / firstVoteTotalPrev) * 100)) * 10) / 10  + "%  |  " + prevArray[0][2] + ", " + Math.round((((prevArray[0][2] / secondVoteTotalPrev) * 100)) * 10) / 10 + "% </br>"
	+ prevArray[1][0] + "  |  " + prevArray[1][1] + ", " + Math.round((((prevArray[1][1] / firstVoteTotalPrev) * 100)) * 10) / 10  + "%  |  " + prevArray[1][2] + ", " + Math.round((((prevArray[1][2] / secondVoteTotalPrev) * 100)) * 10) / 10 + "% </br>"
	+ prevArray[2][0] + "  |  " + prevArray[2][1] + ", " + Math.round((((prevArray[2][1] / firstVoteTotalPrev) * 100)) * 10) / 10  + "%  |  " + prevArray[2][2] + ", " + Math.round((((prevArray[2][2] / secondVoteTotalPrev) * 100)) * 10) / 10 + "% </br>"
	+ prevArray[3][0] + "  |  " + prevArray[3][1] + ", " + Math.round((((prevArray[3][1] / firstVoteTotalPrev) * 100)) * 10) / 10  + "%  |  " + prevArray[3][2] + ", " + Math.round((((prevArray[3][2] / secondVoteTotalPrev) * 100)) * 10) / 10 + "% </br>"
	+ prevArray[4][0] + "  |  " + prevArray[4][1] + ", " + Math.round((((prevArray[4][1] / firstVoteTotalPrev) * 100)) * 10) / 10  + "%  |  " + prevArray[4][2] + ", " + Math.round((((prevArray[4][2] / secondVoteTotalPrev) * 100)) * 10) / 10 + "% </br>"
	+ prevArray[5][0] + "  |  " + prevArray[5][1] + ", " + Math.round((((prevArray[5][1] / firstVoteTotalPrev) * 100)) * 10) / 10  + "%  |  " + prevArray[5][2] + ", " + Math.round((((prevArray[5][2] / secondVoteTotalPrev) * 100)) * 10) / 10 + "% </br>"
	+ " </br>"
	+ " Current Prediction: </br>"
	+ currArray[0][0] + "  |  " + currArray[0][1] + ", " + Math.round((((currArray[0][1] / firstVoteTotalCurr) * 100)) * 10) / 10  + "%  |  " + currArray[0][2] + ", " + Math.round((((currArray[0][2] / secondVoteTotalCurr) * 100)) * 10) / 10 + "% </br>"
	+ currArray[1][0] + "  |  " + currArray[1][1] + ", " + Math.round((((currArray[1][1] / firstVoteTotalCurr) * 100)) * 10) / 10  + "%  |  " + currArray[1][2] + ", " + Math.round((((currArray[1][2] / secondVoteTotalCurr) * 100)) * 10) / 10 + "% </br>"
	+ currArray[2][0] + "  |  " + currArray[2][1] + ", " + Math.round((((currArray[2][1] / firstVoteTotalCurr) * 100)) * 10) / 10  + "%  |  " + currArray[2][2] + ", " + Math.round((((currArray[2][2] / secondVoteTotalCurr) * 100)) * 10) / 10 + "% </br>"
	+ currArray[3][0] + "  |  " + currArray[3][1] + ", " + Math.round((((currArray[3][1] / firstVoteTotalCurr) * 100)) * 10) / 10  + "%  |  " + currArray[3][2] + ", " + Math.round((((currArray[3][2] / secondVoteTotalCurr) * 100)) * 10) / 10 + "% </br>"
	+ currArray[4][0] + "  |  " + currArray[4][1] + ", " + Math.round((((currArray[4][1] / firstVoteTotalCurr) * 100)) * 10) / 10  + "%  |  " + currArray[4][2] + ", " + Math.round((((currArray[4][2] / secondVoteTotalCurr) * 100)) * 10) / 10 + "% </br>"
	+ currArray[5][0] + "  |  " + currArray[5][1] + ", " + Math.round((((currArray[5][1] / firstVoteTotalCurr) * 100)) * 10) / 10  + "%  |  " + currArray[5][2] + ", " + Math.round((((currArray[5][2] / secondVoteTotalCurr) * 100)) * 10) / 10 + "% </br>";
	   
	popup.setContent(list);
	layer.bindPopup(popup);
	layer.openPopup();

}

function updateResultsTable(currResults, prevResults) {
	

	var indexs = new Array(6);
	index = 0;
	
	for (var i = 0; i < currResults.length; i++) {
		for (var j = 0; j < prevResults.length; j++){
			if (prevResults[j][0] == currResults[i][0]) {
				indexs[index] = j;
				index++;
			}
		}
	}

	
	var totalVotesCurr = 0, currTotalSeats = 0, totalVotesPrev = 0, totalDirectSeats = 0, prevTotalSeats = 0;
	for (i = 0; i < currResults.length; i++){
		totalVotesCurr = totalVotesCurr + currResults[i][1]
		currTotalSeats = currTotalSeats + currResults[i][2] + currResults[i][3]
		prevTotalSeats = prevTotalSeats + prevResults[i][2] + prevResults[i][3]
		totalDirectSeats = totalDirectSeats + currResults[i][2]
		totalVotesPrev = totalVotesPrev + prevResults[i][1]
	}

	
	document.getElementById("Party1Name").value = currResults[0][0];
	document.getElementById("Party1Votes").value = currResults[0][1];
	document.getElementById("Party1VoteShare").value = Math.round((currResults[0][1] / totalVotesCurr * 100) * 10) / 10;
	document.getElementById("Party1Swing").value = ((Math.round(((currResults[0][1] / totalVotesCurr * 100) - (prevResults[indexs[0]][1] / totalVotesPrev * 100)) * 10) / 10) > 0 ? "+"+(Math.round(((currResults[0][1] / totalVotesCurr * 100) - (prevResults[indexs[0]][1] / totalVotesPrev * 100)) * 10) / 10) : (Math.round(((currResults[0][1] / totalVotesCurr * 100) - (prevResults[indexs[0]][1] / totalVotesPrev * 100)) * 10) / 10));
	document.getElementById("Party1DirectSeats").value = currResults[0][2];
	document.getElementById("Party1Seats").value = currResults[0][2] + currResults[0][3];
	document.getElementById("Party1SeatChange").value = ((currResults[0][2] + currResults[0][3]) - (prevResults[indexs[0]][2] + prevResults[indexs[0]][3]) > 0 ? "+"+((currResults[0][2] + currResults[0][3]) - (prevResults[indexs[0]][2] + prevResults[indexs[0]][3])) : ((currResults[0][2] + currResults[0][3]) - (prevResults[indexs[0]][2] + prevResults[indexs[0]][3])));
	document.getElementById("Party1SeatShare").value = Math.round(((currResults[0][2] + currResults[0][3]) / currTotalSeats * 100) * 10) / 10;
	
	document.getElementById("Party2Name").value = currResults[1][0];
	document.getElementById("Party2Votes").value = currResults[1][1];
	document.getElementById("Party2VoteShare").value = Math.round((currResults[1][1] / totalVotesCurr * 100) * 10) / 10;
	document.getElementById("Party2Swing").value = ((Math.round(((currResults[1][1] / totalVotesCurr * 100) - (prevResults[indexs[1]][1] / totalVotesPrev * 100)) * 10) / 10) > 0 ? "+"+(Math.round(((currResults[1][1] / totalVotesCurr * 100) - (prevResults[indexs[1]][1] / totalVotesPrev * 100)) * 10) / 10) : (Math.round(((currResults[1][1] / totalVotesCurr * 100) - (prevResults[indexs[1]][1] / totalVotesPrev * 100)) * 10) / 10));
	document.getElementById("Party2DirectSeats").value = currResults[1][2];
	document.getElementById("Party2Seats").value = currResults[1][2] + currResults[1][3];
	document.getElementById("Party2SeatChange").value = ((currResults[1][2] + currResults[1][3]) - (prevResults[indexs[1]][2] + prevResults[indexs[1]][3]) > 0 ? "+"+((currResults[1][2] + currResults[1][3]) - (prevResults[indexs[1]][2] + prevResults[indexs[1]][3])) : ((currResults[1][2] + currResults[1][3]) - (prevResults[indexs[1]][2] + prevResults[indexs[1]][3])));
	document.getElementById("Party2SeatShare").value = Math.round(((currResults[1][2] + currResults[1][3]) / currTotalSeats * 100) * 10) / 10;

	document.getElementById("Party3Name").value = currResults[2][0];
	document.getElementById("Party3Votes").value = currResults[2][1];
	document.getElementById("Party3VoteShare").value = Math.round((currResults[2][1] / totalVotesCurr * 100) * 10) / 10;
	document.getElementById("Party3Swing").value = ((Math.round(((currResults[2][1] / totalVotesCurr * 100) - (prevResults[indexs[2]][1] / totalVotesPrev * 100)) * 10) / 10) > 0 ? "+"+(Math.round(((currResults[2][1] / totalVotesCurr * 100) - (prevResults[indexs[2]][1] / totalVotesPrev * 100)) * 10) / 10) : (Math.round(((currResults[2][1] / totalVotesCurr * 100) - (prevResults[indexs[2]][1] / totalVotesPrev * 100)) * 10) / 10));
	document.getElementById("Party3DirectSeats").value = currResults[2][2];
	document.getElementById("Party3Seats").value = currResults[2][2] + currResults[2][3];
	document.getElementById("Party3SeatChange").value = ((currResults[2][2] + currResults[2][3]) - (prevResults[indexs[2]][2] + prevResults[indexs[2]][3]) > 0 ? "+"+((currResults[2][2] + currResults[2][3]) - (prevResults[indexs[2]][2] + prevResults[indexs[2]][3])) : ((currResults[2][2] + currResults[2][3]) - (prevResults[indexs[2]][2] + prevResults[indexs[2]][3])));
	document.getElementById("Party3SeatShare").value = Math.round(((currResults[2][2] + currResults[2][3]) / currTotalSeats * 100) * 10) / 10;

	document.getElementById("Party4Name").value = currResults[3][0];
	document.getElementById("Party4Votes").value = currResults[3][1];
	document.getElementById("Party4VoteShare").value = Math.round((currResults[3][1] / totalVotesCurr * 100) * 10) / 10;
	document.getElementById("Party4Swing").value = ((Math.round(((currResults[3][1] / totalVotesCurr * 100) - (prevResults[indexs[3]][1] / totalVotesPrev * 100)) * 10) / 10) > 0 ? "+"+(Math.round(((currResults[3][1] / totalVotesCurr * 100) - (prevResults[indexs[3]][1] / totalVotesPrev * 100)) * 10) / 10) : (Math.round(((currResults[3][1] / totalVotesCurr * 100) - (prevResults[indexs[3]][1] / totalVotesPrev * 100)) * 10) / 10));
	document.getElementById("Party4DirectSeats").value = currResults[3][2];
	document.getElementById("Party4Seats").value = currResults[3][2] + currResults[3][3];
	document.getElementById("Party4SeatChange").value = ((currResults[3][2] + currResults[3][3]) - (prevResults[indexs[3]][2] + prevResults[indexs[3]][3]) > 0 ? "+"+((currResults[3][2] + currResults[3][3]) - (prevResults[indexs[3]][2] + prevResults[indexs[3]][3])) : ((currResults[3][2] + currResults[3][3]) - (prevResults[indexs[3]][2] + prevResults[indexs[3]][3])));
	document.getElementById("Party4SeatShare").value = Math.round(((currResults[3][2] + currResults[3][3]) / currTotalSeats * 100) * 10) / 10;
	
	document.getElementById("Party5Name").value = currResults[4][0];
	document.getElementById("Party5Votes").value = currResults[4][1];
	document.getElementById("Party5VoteShare").value = Math.round((currResults[4][1] / totalVotesCurr * 100) * 10) / 10;
	document.getElementById("Party5Swing").value = ((Math.round(((currResults[4][1] / totalVotesCurr * 100) - (prevResults[indexs[4]][1] / totalVotesPrev * 100)) * 10) / 10) > 0 ? "+"+(Math.round(((currResults[4][1] / totalVotesCurr * 100) - (prevResults[indexs[4]][1] / totalVotesPrev * 100)) * 10) / 10) : (Math.round(((currResults[4][1] / totalVotesCurr * 100) - (prevResults[indexs[4]][1] / totalVotesPrev * 100)) * 10) / 10));
	document.getElementById("Party5DirectSeats").value = currResults[4][2];
	document.getElementById("Party5Seats").value = currResults[4][2] + currResults[4][3];
	document.getElementById("Party5SeatChange").value = ((currResults[4][2] + currResults[4][3]) - (prevResults[indexs[4]][2] + prevResults[indexs[4]][3]) > 0 ? "+"+((currResults[4][2] + currResults[4][3]) - (prevResults[indexs[4]][2] + prevResults[indexs[4]][3])) : ((currResults[4][2] + currResults[4][3]) - (prevResults[indexs[4]][2] + prevResults[indexs[4]][3])));
	document.getElementById("Party5SeatShare").value = Math.round(((currResults[4][2] + currResults[4][3]) / currTotalSeats * 100) * 10) / 10;
	
	document.getElementById("Party6Name").value = currResults[5][0];
	document.getElementById("Party6Votes").value = currResults[5][1];
	document.getElementById("Party6VoteShare").value = Math.round((currResults[5][1] / totalVotesCurr * 100) * 10) / 10;
	document.getElementById("Party6Swing").value = ((Math.round(((currResults[5][1] / totalVotesCurr * 100) - (prevResults[indexs[5]][1] / totalVotesPrev * 100)) * 10) / 10) > 0 ? "+"+(Math.round(((currResults[5][1] / totalVotesCurr * 100) - (prevResults[indexs[5]][1] / totalVotesPrev * 100)) * 10) / 10) : (Math.round(((currResults[5][1] / totalVotesCurr * 100) - (prevResults[indexs[5]][1] / totalVotesPrev * 100)) * 10) / 10));
	document.getElementById("Party6DirectSeats").value = currResults[5][2];
	document.getElementById("Party6Seats").value = currResults[5][2] + currResults[5][3];
	document.getElementById("Party6SeatChange").value = ((currResults[5][2] + currResults[5][3]) - (prevResults[indexs[5]][2] + prevResults[indexs[5]][3]) > 0 ? "+"+((currResults[5][2] + currResults[5][3]) - (prevResults[indexs[5]][2] + prevResults[indexs[5]][3])) : ((currResults[5][2] + currResults[5][3]) - (prevResults[indexs[5]][2] + prevResults[indexs[5]][3])));
	document.getElementById("Party6SeatShare").value = Math.round(((currResults[5][2] + currResults[5][3]) / currTotalSeats * 100) * 10) / 10;	
	
	document.getElementById("TotalName").value = "TOTAL";
	document.getElementById("TotalVotes").value = totalVotesCurr;
	document.getElementById("TotalVoteShare").value = "100%";
	document.getElementById("TotalSwing").value = "N/A";
	document.getElementById("TotalDirectSeats").value = totalDirectSeats;
	document.getElementById("TotalSeats").value = currTotalSeats;
	document.getElementById("TotalSeatChange").value = ((currTotalSeats) - (prevTotalSeats) > 0 ? "+"+((currTotalSeats) - (prevTotalSeats)) : ((currTotalSeats) - (prevTotalSeats)));
	document.getElementById("TotalSeatShare").value = "100%";	

}

displayCurrentProjection();

