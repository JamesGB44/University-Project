var corner1 = L.latLng(55.877920, -8.571508), 
corner2 = L.latLng(53.676689, -4.984472), 
bounds = L.latLngBounds(corner1, corner2);

var stateMode = true;
var sainteLagueModification = 1.4;

var map = L.map('map', {
	center: [51.5, 8],
	zoom: 8,
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


prevDUPVoteShare = 28.1;
prevSinnFeinVoteShare = 27.9;
prevUUPVoteShare = 12.9;
prevSDLPVoteShare = 11.9;
prevAllianceVoteShare = 9.1;
prevTUVVoteShare = 2.6;
prevGreenVoteShare = 2.3;
prevPBPVoteShare = 1.8;

DUPModifier = 1 + ((DUPprediction - prevDUPVoteShare) / prevDUPVoteShare);
SinnFeinModifier = 1 + ((SinnFeinprediction - prevSinnFeinVoteShare) / prevSinnFeinVoteShare);
UUPModifier = 1 + ((UUPprediction - prevUUPVoteShare) / prevUUPVoteShare);
SDLPModifier = 1 + ((SDLPprediction - prevSDLPVoteShare) / prevSDLPVoteShare);
AllianceModifier = 1 + ((Allianceprediction - prevAllianceVoteShare) / prevAllianceVoteShare);
TUVModifier = 1 + ((TUVprediction - prevTUVVoteShare) / prevTUVVoteShare);
GreenModifier = 1 + ((Greenprediction - prevGreenVoteShare) / prevGreenVoteShare);;
PBPModifier = 1 + ((PBPprediction - prevPBPVoteShare) / prevPBPVoteShare);;


var constituencies = L.geoJson(stormontConstituencies, {
	style: styleConstituencies,
	onEachFeature: onEachFeatureConstituencies
}).addTo(map);







tempArray = new Array(18);
index = 0;

constituencies.eachLayer(function(currentLayer){
	tempArray[index] = fillConstituencyArrays(currentLayer.feature, true);
	index++;
});

prevResultsBLE = tempArray[0];
prevResultsBLN = tempArray[1];
prevResultsBLS = tempArray[2];
prevResultsBLW = tempArray[3];
prevResultsETA = tempArray[4];
prevResultsETL = tempArray[5];
prevResultsFST = tempArray[6];
prevResultsFOY = tempArray[7];
prevResultsLAG = tempArray[8];
prevResultsMDU = tempArray[9];
prevResultsNWA = tempArray[10];
prevResultsNOA = tempArray[11];
prevResultsNOD = tempArray[12];
prevResultsSOA = tempArray[13];
prevResultsSOD = tempArray[14];
prevResultsSTA = tempArray[15];
prevResultsUPB = tempArray[16];
prevResultsWST = tempArray[17];

tempArray = new Array(18);
index = 0;

constituencies.eachLayer(function(currentLayer){
	tempArray[index] = fillConstituencyArrays(currentLayer.feature, false);
	index++;
});


currResultsBLE = tempArray[0];
currResultsBLN = tempArray[1];
currResultsBLS = tempArray[2];
currResultsBLW = tempArray[3];
currResultsETA = tempArray[4];
currResultsETL = tempArray[5];
currResultsFST = tempArray[6];
currResultsFOY = tempArray[7];
currResultsLAG = tempArray[8];
currResultsMDU = tempArray[9];
currResultsNWA = tempArray[10];
currResultsNOA = tempArray[11];
currResultsNOD = tempArray[12];
currResultsSOA = tempArray[13];
currResultsSOD = tempArray[14];
currResultsSTA = tempArray[15];
currResultsUPB = tempArray[16];
currResultsWST = tempArray[17];



var currNationalResults;
prevNationalResults = fillNationalArray();

var DUPThreshold = true, SinnFeinThreshold = true, UUPThreshold = true, SDLPThreshold = true, AllianceThreshold = true, TUVThreshold = true, GreenThreshold = true, PBPThreshold = false;

prevResultsBLE.sort(sortFunctionC);
prevResultsBLN.sort(sortFunctionC);
prevResultsBLS.sort(sortFunctionC);
prevResultsBLW.sort(sortFunctionC);
prevResultsETA.sort(sortFunctionC);
prevResultsETL.sort(sortFunctionC);
prevResultsFST.sort(sortFunctionC);
prevResultsFOY.sort(sortFunctionC);
prevResultsLAG.sort(sortFunctionC);
prevResultsMDU.sort(sortFunctionC);
prevResultsNWA.sort(sortFunctionC);
prevResultsNOA.sort(sortFunctionC);
prevResultsNOD.sort(sortFunctionC);
prevResultsSOA.sort(sortFunctionC);
prevResultsSOD.sort(sortFunctionC);
prevResultsSTA.sort(sortFunctionC);
prevResultsUPB.sort(sortFunctionC);
prevResultsWST.sort(sortFunctionC);

prevNationalResults.sort(sortFunctionC);

thresholdImplementor(0, AllianceThreshold, true);
thresholdImplementor(1, DUPThreshold, true);
thresholdImplementor(2, GreenThreshold, true);
thresholdImplementor(3, PBPThreshold, true);
thresholdImplementor(4, SDLPThreshold, true);
thresholdImplementor(5, SinnFeinThreshold, true);
thresholdImplementor(6, TUVThreshold, true);
thresholdImplementor(7, UUPThreshold, true);
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
	
	//noOfSeats = 5;
	for (i = 0; i < listOfResults.length; i++) {
		listOfResults[i][3] = (listOfResults[i][3] / sainteLagueModification);
	}
	
	
	
	for (i = 0; i < noOfSeats; i++) {
		listOfResults.sort(sortFunctionB);
		listOfResults[0][2] = listOfResults[0][2] + 1;
		listOfResults[0][3] = listOfResults[0][1] / (1 + (2*listOfResults[0][2]));
	}
	listOfResults.sort(sortFunctionC);
	
	

	
	if (initialisation){
		prevNationalResults.sort(sortFunctionC);
	
		for (var i = 0; i < listOfResults.length; i++){
			prevNationalResults[i][2] = prevNationalResults[i][2] + listOfResults[i][2];
		}
		
	}
	else {
		currNationalResults.sort(sortFunctionC);
	
		for (var i = 0; i < listOfResults.length; i++){
			currNationalResults[i][2] = currNationalResults[i][2] + listOfResults[i][2];
		}
	}
		
}

function nationalAdjustmentSeatAllocator(initialisation){
		
	var noOfAdjustmentSeats = 27;
	
	if (initialisation){
		for (i = 0; i < prevNationalResults.length; i++) {
			if (prevNationalResults[i][3] != 0){
				prevNationalResults[i][3] = prevNationalResults[i][1] / (1 + (2*prevNationalResults[i][2]))
			}
			
		}
		
		for (i = 0; i < noOfAdjustmentSeats; i++) {
			prevNationalResults.sort(sortFunctionB);
			prevNationalResults[0][2] = prevNationalResults[0][2] + 1;
			prevNationalResults[0][3] = prevNationalResults[0][1] / (1 + (2*prevNationalResults[0][2]));
		}
		
	}
	else {
		for (i = 0; i < currNationalResults.length; i++) {
			if (currNationalResults[i][3] != 0){
				currNationalResults[i][3] = currNationalResults[i][1] / (1 + (2*currNationalResults[i][2]))
			}
			
		}
		
		for (i = 0; i < noOfAdjustmentSeats; i++) {
			currNationalResults.sort(sortFunctionB);
			currNationalResults[0][2] = currNationalResults[0][2] + 1;
			currNationalResults[0][3] = currNationalResults[0][1] / (1 + (2*currNationalResults[0][2]));
		}
	}
		
}

function nationalResultsToConstituencyLevelCalculation(initialisation, partyArray, partyIndex){
	
	
	if (initialisation)
	{
		var totalDirectSeats = 0;
		for (var i = 0; i < partyArray.length; i++){
			totalDirectSeats = totalDirectSeats + partyArray[i][2];
			
		}
		
		for (var i = 0; i < partyArray.length; i++){
			partyArray[i][3] = (partyArray[i][3] / sainteLagueModification);
			
		}
		for (var i = 0; i < partyArray.length; i++){
			partyArray[i][3] = (partyArray[i][1] / (1 + (2*partyArray[i][2])));
			
		}
		

		adjustmentSeatsToAllocate = prevNationalResults[partyIndex][2] - totalDirectSeats;
		for (var i = 0; i < adjustmentSeatsToAllocate; i++)
		{
			partyArray.sort(sortFunctionB);
			partyArray[0][2] = partyArray[0][2] + 1;
			partyArray[0][3] = partyArray[0][1] / (1 + (2*partyArray[0][2]));
		}
		partyArray.sort(sortFunctionC);
		
		
		prevResultsBLE[partyIndex][2] = partyArray[0][2];
		prevResultsBLN[partyIndex][2] = partyArray[1][2];
		prevResultsBLS[partyIndex][2] = partyArray[2][2];
		prevResultsBLW[partyIndex][2] = partyArray[3][2];
		prevResultsETA[partyIndex][2] = partyArray[4][2];
		prevResultsETL[partyIndex][2] = partyArray[5][2];
		prevResultsFST[partyIndex][2] = partyArray[7][2];
		prevResultsFOY[partyIndex][2] = partyArray[6][2];
		prevResultsLAG[partyIndex][2] = partyArray[8][2];
		prevResultsMDU[partyIndex][2] = partyArray[9][2];
		prevResultsNOA[partyIndex][2] = partyArray[10][2];
		prevResultsNOD[partyIndex][2] = partyArray[11][2];
		prevResultsNWA[partyIndex][2] = partyArray[12][2];
		prevResultsSOA[partyIndex][2] = partyArray[13][2];
		prevResultsSOD[partyIndex][2] = partyArray[14][2];
		prevResultsSTA[partyIndex][2] = partyArray[15][2];
		prevResultsUPB[partyIndex][2] = partyArray[16][2];
		prevResultsWST[partyIndex][2] = partyArray[17][2];
		
	}
	else
	{
		var totalDirectSeats = 0;
		for (var i = 0; i < partyArray.length; i++){
			totalDirectSeats = totalDirectSeats + partyArray[i][2];
			
		}
		for (var i = 0; i < partyArray.length; i++){
			partyArray[i][3] = (partyArray[i][3] / sainteLagueModification);
			
		}
		for (var i = 0; i < partyArray.length; i++){
			partyArray[i][3] = (partyArray[i][1] / (1 + (2*partyArray[i][2])));
			
		}

		adjustmentSeatsToAllocate = currNationalResults[partyIndex][2] - totalDirectSeats;

		for (var i = 0; i < adjustmentSeatsToAllocate; i++)
		{
			partyArray.sort(sortFunctionB);
			partyArray[0][2] = partyArray[0][2] + 1;
			partyArray[0][3] = partyArray[0][1] / (1 + (2*partyArray[0][2]));
		}
		partyArray.sort(sortFunctionC);
		

		currResultsBLE[partyIndex][2] = partyArray[0][2];
		currResultsBLN[partyIndex][2] = partyArray[1][2];
		currResultsBLS[partyIndex][2] = partyArray[2][2];
		currResultsBLW[partyIndex][2] = partyArray[3][2];
		currResultsETA[partyIndex][2] = partyArray[4][2];
		currResultsETL[partyIndex][2] = partyArray[5][2];
		currResultsFST[partyIndex][2] = partyArray[7][2];
		currResultsFOY[partyIndex][2] = partyArray[6][2];
		currResultsLAG[partyIndex][2] = partyArray[8][2];
		currResultsMDU[partyIndex][2] = partyArray[9][2];
		currResultsNOA[partyIndex][2] = partyArray[10][2];
		currResultsNOD[partyIndex][2] = partyArray[11][2];
		currResultsNWA[partyIndex][2] = partyArray[12][2];
		currResultsSOA[partyIndex][2] = partyArray[13][2];
		currResultsSOD[partyIndex][2] = partyArray[14][2];
		currResultsSTA[partyIndex][2] = partyArray[15][2];
		currResultsUPB[partyIndex][2] = partyArray[16][2];
		currResultsWST[partyIndex][2] = partyArray[17][2];

		
	}

}

function nationalResultsToConstituencyLevelInit(initialisation) {
	
	if (initialisation)
	{
		prevResultsBLE.sort(sortFunctionC);
		prevResultsBLN.sort(sortFunctionC);
		prevResultsBLS.sort(sortFunctionC);
		prevResultsBLW.sort(sortFunctionC);
		prevResultsETA.sort(sortFunctionC);
		prevResultsETL.sort(sortFunctionC);
		prevResultsFST.sort(sortFunctionC);
		prevResultsFOY.sort(sortFunctionC);
		prevResultsLAG.sort(sortFunctionC);
		prevResultsMDU.sort(sortFunctionC);
		prevResultsNWA.sort(sortFunctionC);
		prevResultsNOA.sort(sortFunctionC);
		prevResultsNOD.sort(sortFunctionC);
		prevResultsSOA.sort(sortFunctionC);
		prevResultsSOD.sort(sortFunctionC);
		prevResultsSTA.sort(sortFunctionC);
		prevResultsUPB.sort(sortFunctionC);
		prevResultsWST.sort(sortFunctionC);
		prevNationalResults.sort(sortFunctionC);
		
		var AllianceArray  = [["BLE",prevResultsBLE[0][1], prevResultsBLE[0][2], prevResultsBLE[0][1]],
					["BLN",prevResultsBLN[0][1], prevResultsBLN[0][2], prevResultsBLN[0][1]],
					["BLS",prevResultsBLS[0][1], prevResultsBLS[0][2], prevResultsBLS[0][1]],
					["BLW",prevResultsBLW[0][1], prevResultsBLW[0][2], prevResultsBLW[0][1]],
					["ETA",prevResultsETA[0][1], prevResultsETA[0][2], prevResultsETA[0][1]],
					["ETL",prevResultsETL[0][1], prevResultsETL[0][2], prevResultsETL[0][1]],
					["FST",prevResultsFST[0][1], prevResultsFST[0][2], prevResultsFST[0][1]],
					["FOY",prevResultsFOY[0][1], prevResultsFOY[0][2], prevResultsFOY[0][1]],
					["LAG",prevResultsLAG[0][1], prevResultsLAG[0][2], prevResultsLAG[0][1]],
					["MDU",prevResultsMDU[0][1], prevResultsMDU[0][2], prevResultsMDU[0][1]],
					["NWA",prevResultsNWA[0][1], prevResultsNWA[0][2], prevResultsNWA[0][1]],
					["NOA",prevResultsNOA[0][1], prevResultsNOA[0][2], prevResultsNOA[0][1]],
					["NOD",prevResultsNOD[0][1], prevResultsNOD[0][2], prevResultsNOD[0][1]],
					["SOA",prevResultsSOA[0][1], prevResultsSOA[0][2], prevResultsSOA[0][1]],
					["SOD",prevResultsSOD[0][1], prevResultsSOD[0][2], prevResultsSOD[0][1]],
					["STA",prevResultsSTA[0][1], prevResultsSTA[0][2], prevResultsSTA[0][1]],
					["UPB",prevResultsUPB[0][1], prevResultsUPB[0][2], prevResultsUPB[0][1]],
					["WST",prevResultsWST[0][1], prevResultsWST[0][2], prevResultsWST[0][1]]];

		var DUPArray  = [["BLE",prevResultsBLE[1][1], prevResultsBLE[1][2], prevResultsBLE[1][1]],
					["BLN",prevResultsBLN[1][1], prevResultsBLN[1][2], prevResultsBLN[1][1]],
					["BLS",prevResultsBLS[1][1], prevResultsBLS[1][2], prevResultsBLS[1][1]],
					["BLW",prevResultsBLW[1][1], prevResultsBLW[1][2], prevResultsBLW[1][1]],
					["ETA",prevResultsETA[1][1], prevResultsETA[1][2], prevResultsETA[1][1]],
					["ETL",prevResultsETL[1][1], prevResultsETL[1][2], prevResultsETL[1][1]],
					["FST",prevResultsFST[1][1], prevResultsFST[1][2], prevResultsFST[1][1]],
					["FOY",prevResultsFOY[1][1], prevResultsFOY[1][2], prevResultsFOY[1][1]],
					["LAG",prevResultsLAG[1][1], prevResultsLAG[1][2], prevResultsLAG[1][1]],
					["MDU",prevResultsMDU[1][1], prevResultsMDU[1][2], prevResultsMDU[1][1]],
					["NWA",prevResultsNWA[1][1], prevResultsNWA[1][2], prevResultsNWA[1][1]],
					["NOA",prevResultsNOA[1][1], prevResultsNOA[1][2], prevResultsNOA[1][1]],
					["NOD",prevResultsNOD[1][1], prevResultsNOD[1][2], prevResultsNOD[1][1]],
					["SOA",prevResultsSOA[1][1], prevResultsSOA[1][2], prevResultsSOA[1][1]],
					["SOD",prevResultsSOD[1][1], prevResultsSOD[1][2], prevResultsSOD[1][1]],
					["STA",prevResultsSTA[1][1], prevResultsSTA[1][2], prevResultsSTA[1][1]],
					["UPB",prevResultsUPB[1][1], prevResultsUPB[1][2], prevResultsUPB[1][1]],
					["WST",prevResultsWST[1][1], prevResultsWST[1][2], prevResultsWST[1][1]]];

		var GreenArray  = [["BLE",prevResultsBLE[2][1], prevResultsBLE[2][2], prevResultsBLE[2][1]],
					["BLN",prevResultsBLN[2][1], prevResultsBLN[2][2], prevResultsBLN[2][1]],
					["BLS",prevResultsBLS[2][1], prevResultsBLS[2][2], prevResultsBLS[2][1]],
					["BLW",prevResultsBLW[2][1], prevResultsBLW[2][2], prevResultsBLW[2][1]],
					["ETA",prevResultsETA[2][1], prevResultsETA[2][2], prevResultsETA[2][1]],
					["ETL",prevResultsETL[2][1], prevResultsETL[2][2], prevResultsETL[2][1]],
					["FST",prevResultsFST[2][1], prevResultsFST[2][2], prevResultsFST[2][1]],
					["FOY",prevResultsFOY[2][1], prevResultsFOY[2][2], prevResultsFOY[2][1]],
					["LAG",prevResultsLAG[2][1], prevResultsLAG[2][2], prevResultsLAG[2][1]],
					["MDU",prevResultsMDU[2][1], prevResultsMDU[2][2], prevResultsMDU[2][1]],
					["NWA",prevResultsNWA[2][1], prevResultsNWA[2][2], prevResultsNWA[2][1]],
					["NOA",prevResultsNOA[2][1], prevResultsNOA[2][2], prevResultsNOA[2][1]],
					["NOD",prevResultsNOD[2][1], prevResultsNOD[2][2], prevResultsNOD[2][1]],
					["SOA",prevResultsSOA[2][1], prevResultsSOA[2][2], prevResultsSOA[2][1]],
					["SOD",prevResultsSOD[2][1], prevResultsSOD[2][2], prevResultsSOD[2][1]],
					["STA",prevResultsSTA[2][1], prevResultsSTA[2][2], prevResultsSTA[2][1]],
					["UPB",prevResultsUPB[2][1], prevResultsUPB[2][2], prevResultsUPB[2][1]],
					["WST",prevResultsWST[2][1], prevResultsWST[2][2], prevResultsWST[2][1]]];

		var PBPArray  = [["BLE",prevResultsBLE[3][1], prevResultsBLE[3][2], prevResultsBLE[3][1]],
					["BLN",prevResultsBLN[3][1], prevResultsBLN[3][2], prevResultsBLN[3][1]],
					["BLS",prevResultsBLS[3][1], prevResultsBLS[3][2], prevResultsBLS[3][1]],
					["BLW",prevResultsBLW[3][1], prevResultsBLW[3][2], prevResultsBLW[3][1]],
					["ETA",prevResultsETA[3][1], prevResultsETA[3][2], prevResultsETA[3][1]],
					["ETL",prevResultsETL[3][1], prevResultsETL[3][2], prevResultsETL[3][1]],
					["FST",prevResultsFST[3][1], prevResultsFST[3][2], prevResultsFST[3][1]],
					["FOY",prevResultsFOY[3][1], prevResultsFOY[3][2], prevResultsFOY[3][1]],
					["LAG",prevResultsLAG[3][1], prevResultsLAG[3][2], prevResultsLAG[3][1]],
					["MDU",prevResultsMDU[3][1], prevResultsMDU[3][2], prevResultsMDU[3][1]],
					["NWA",prevResultsNWA[3][1], prevResultsNWA[3][2], prevResultsNWA[3][1]],
					["NOA",prevResultsNOA[3][1], prevResultsNOA[3][2], prevResultsNOA[3][1]],
					["NOD",prevResultsNOD[3][1], prevResultsNOD[3][2], prevResultsNOD[3][1]],
					["SOA",prevResultsSOA[3][1], prevResultsSOA[3][2], prevResultsSOA[3][1]],
					["SOD",prevResultsSOD[3][1], prevResultsSOD[3][2], prevResultsSOD[3][1]],
					["STA",prevResultsSTA[3][1], prevResultsSTA[3][2], prevResultsSTA[3][1]],
					["UPB",prevResultsUPB[3][1], prevResultsUPB[3][2], prevResultsUPB[3][1]],
					["WST",prevResultsWST[3][1], prevResultsWST[3][2], prevResultsWST[3][1]]];

		var SDLPArray  = [["BLE",prevResultsBLE[4][1], prevResultsBLE[4][2], prevResultsBLE[4][1]],
					["BLN",prevResultsBLN[4][1], prevResultsBLN[4][2], prevResultsBLN[4][1]],
					["BLS",prevResultsBLS[4][1], prevResultsBLS[4][2], prevResultsBLS[4][1]],
					["BLW",prevResultsBLW[4][1], prevResultsBLW[4][2], prevResultsBLW[4][1]],
					["ETA",prevResultsETA[4][1], prevResultsETA[4][2], prevResultsETA[4][1]],
					["ETL",prevResultsETL[4][1], prevResultsETL[4][2], prevResultsETL[4][1]],
					["FST",prevResultsFST[4][1], prevResultsFST[4][2], prevResultsFST[4][1]],
					["FOY",prevResultsFOY[4][1], prevResultsFOY[4][2], prevResultsFOY[4][1]],
					["LAG",prevResultsLAG[4][1], prevResultsLAG[4][2], prevResultsLAG[4][1]],
					["MDU",prevResultsMDU[4][1], prevResultsMDU[4][2], prevResultsMDU[4][1]],
					["NWA",prevResultsNWA[4][1], prevResultsNWA[4][2], prevResultsNWA[4][1]],
					["NOA",prevResultsNOA[4][1], prevResultsNOA[4][2], prevResultsNOA[4][1]],
					["NOD",prevResultsNOD[4][1], prevResultsNOD[4][2], prevResultsNOD[4][1]],
					["SOA",prevResultsSOA[4][1], prevResultsSOA[4][2], prevResultsSOA[4][1]],
					["SOD",prevResultsSOD[4][1], prevResultsSOD[4][2], prevResultsSOD[4][1]],
					["STA",prevResultsSTA[4][1], prevResultsSTA[4][2], prevResultsSTA[4][1]],
					["UPB",prevResultsUPB[4][1], prevResultsUPB[4][2], prevResultsUPB[4][1]],
					["WST",prevResultsWST[4][1], prevResultsWST[4][2], prevResultsWST[4][1]]];

		var SinnFeinArray  = [["BLE",prevResultsBLE[5][1], prevResultsBLE[5][2], prevResultsBLE[5][1]],
					["BLN",prevResultsBLN[5][1], prevResultsBLN[5][2], prevResultsBLN[5][1]],
					["BLS",prevResultsBLS[5][1], prevResultsBLS[5][2], prevResultsBLS[5][1]],
					["BLW",prevResultsBLW[5][1], prevResultsBLW[5][2], prevResultsBLW[5][1]],
					["ETA",prevResultsETA[5][1], prevResultsETA[5][2], prevResultsETA[5][1]],
					["ETL",prevResultsETL[5][1], prevResultsETL[5][2], prevResultsETL[5][1]],
					["FST",prevResultsFST[5][1], prevResultsFST[5][2], prevResultsFST[5][1]],
					["FOY",prevResultsFOY[5][1], prevResultsFOY[5][2], prevResultsFOY[5][1]],
					["LAG",prevResultsLAG[5][1], prevResultsLAG[5][2], prevResultsLAG[5][1]],
					["MDU",prevResultsMDU[5][1], prevResultsMDU[5][2], prevResultsMDU[5][1]],
					["NWA",prevResultsNWA[5][1], prevResultsNWA[5][2], prevResultsNWA[5][1]],
					["NOA",prevResultsNOA[5][1], prevResultsNOA[5][2], prevResultsNOA[5][1]],
					["NOD",prevResultsNOD[5][1], prevResultsNOD[5][2], prevResultsNOD[5][1]],
					["SOA",prevResultsSOA[5][1], prevResultsSOA[5][2], prevResultsSOA[5][1]],
					["SOD",prevResultsSOD[5][1], prevResultsSOD[5][2], prevResultsSOD[5][1]],
					["STA",prevResultsSTA[5][1], prevResultsSTA[5][2], prevResultsSTA[5][1]],
					["UPB",prevResultsUPB[5][1], prevResultsUPB[5][2], prevResultsUPB[5][1]],
					["WST",prevResultsWST[5][1], prevResultsWST[5][2], prevResultsWST[5][1]]];

		var TUVArray  = [["BLE",prevResultsBLE[6][1], prevResultsBLE[6][2], prevResultsBLE[6][1]],
					["BLN",prevResultsBLN[6][1], prevResultsBLN[6][2], prevResultsBLN[6][1]],
					["BLS",prevResultsBLS[6][1], prevResultsBLS[6][2], prevResultsBLS[6][1]],
					["BLW",prevResultsBLW[6][1], prevResultsBLW[6][2], prevResultsBLW[6][1]],
					["ETA",prevResultsETA[6][1], prevResultsETA[6][2], prevResultsETA[6][1]],
					["ETL",prevResultsETL[6][1], prevResultsETL[6][2], prevResultsETL[6][1]],
					["FST",prevResultsFST[6][1], prevResultsFST[6][2], prevResultsFST[6][1]],
					["FOY",prevResultsFOY[6][1], prevResultsFOY[6][2], prevResultsFOY[6][1]],
					["LAG",prevResultsLAG[6][1], prevResultsLAG[6][2], prevResultsLAG[6][1]],
					["MDU",prevResultsMDU[6][1], prevResultsMDU[6][2], prevResultsMDU[6][1]],
					["NWA",prevResultsNWA[6][1], prevResultsNWA[6][2], prevResultsNWA[6][1]],
					["NOA",prevResultsNOA[6][1], prevResultsNOA[6][2], prevResultsNOA[6][1]],
					["NOD",prevResultsNOD[6][1], prevResultsNOD[6][2], prevResultsNOD[6][1]],
					["SOA",prevResultsSOA[6][1], prevResultsSOA[6][2], prevResultsSOA[6][1]],
					["SOD",prevResultsSOD[6][1], prevResultsSOD[6][2], prevResultsSOD[6][1]],
					["STA",prevResultsSTA[6][1], prevResultsSTA[6][2], prevResultsSTA[6][1]],
					["UPB",prevResultsUPB[6][1], prevResultsUPB[6][2], prevResultsUPB[6][1]],
					["WST",prevResultsWST[6][1], prevResultsWST[6][2], prevResultsWST[6][1]]];

		var UUPArray  = [["BLE",prevResultsBLE[7][1], prevResultsBLE[7][2], prevResultsBLE[7][1]],
					["BLN",prevResultsBLN[7][1], prevResultsBLN[7][2], prevResultsBLN[7][1]],
					["BLS",prevResultsBLS[7][1], prevResultsBLS[7][2], prevResultsBLS[7][1]],
					["BLW",prevResultsBLW[7][1], prevResultsBLW[7][2], prevResultsBLW[7][1]],
					["ETA",prevResultsETA[7][1], prevResultsETA[7][2], prevResultsETA[7][1]],
					["ETL",prevResultsETL[7][1], prevResultsETL[7][2], prevResultsETL[7][1]],
					["FST",prevResultsFST[7][1], prevResultsFST[7][2], prevResultsFST[7][1]],
					["FOY",prevResultsFOY[7][1], prevResultsFOY[7][2], prevResultsFOY[7][1]],
					["LAG",prevResultsLAG[7][1], prevResultsLAG[7][2], prevResultsLAG[7][1]],
					["MDU",prevResultsMDU[7][1], prevResultsMDU[7][2], prevResultsMDU[7][1]],
					["NWA",prevResultsNWA[7][1], prevResultsNWA[7][2], prevResultsNWA[7][1]],
					["NOA",prevResultsNOA[7][1], prevResultsNOA[7][2], prevResultsNOA[7][1]],
					["NOD",prevResultsNOD[7][1], prevResultsNOD[7][2], prevResultsNOD[7][1]],
					["SOA",prevResultsSOA[7][1], prevResultsSOA[7][2], prevResultsSOA[7][1]],
					["SOD",prevResultsSOD[7][1], prevResultsSOD[7][2], prevResultsSOD[7][1]],
					["STA",prevResultsSTA[7][1], prevResultsSTA[7][2], prevResultsSTA[7][1]],
					["UPB",prevResultsUPB[7][1], prevResultsUPB[7][2], prevResultsUPB[7][1]],
					["WST",prevResultsWST[7][1], prevResultsWST[7][2], prevResultsWST[7][1]]];
		
		nationalResultsToConstituencyLevelCalculation(initialisation, AllianceArray, 0);
		nationalResultsToConstituencyLevelCalculation(initialisation, DUPArray, 1);
		nationalResultsToConstituencyLevelCalculation(initialisation, GreenArray, 2);
		nationalResultsToConstituencyLevelCalculation(initialisation, PBPArray, 3);
		nationalResultsToConstituencyLevelCalculation(initialisation, SDLPArray, 4);
		nationalResultsToConstituencyLevelCalculation(initialisation, SinnFeinArray, 5);
		nationalResultsToConstituencyLevelCalculation(initialisation, TUVArray, 6);
		nationalResultsToConstituencyLevelCalculation(initialisation, UUPArray, 7);
	}
	else
	{
		currResultsBLE.sort(sortFunctionC);
		currResultsBLN.sort(sortFunctionC);
		currResultsBLS.sort(sortFunctionC);
		currResultsBLW.sort(sortFunctionC);
		currResultsETA.sort(sortFunctionC);
		currResultsETL.sort(sortFunctionC);
		currResultsFST.sort(sortFunctionC);
		currResultsFOY.sort(sortFunctionC);
		currResultsLAG.sort(sortFunctionC);
		currResultsMDU.sort(sortFunctionC);
		currResultsNWA.sort(sortFunctionC);
		currResultsNOA.sort(sortFunctionC);
		currResultsNOD.sort(sortFunctionC);
		currResultsSOA.sort(sortFunctionC);
		currResultsSOD.sort(sortFunctionC);
		currResultsSTA.sort(sortFunctionC);
		currResultsUPB.sort(sortFunctionC);
		currResultsWST.sort(sortFunctionC);
		currNationalResults.sort(sortFunctionC);
		
		var AllianceArray  = [["BLE",currResultsBLE[0][1], currResultsBLE[0][2], currResultsBLE[0][1]],
					["BLN",currResultsBLN[0][1], currResultsBLN[0][2], currResultsBLN[0][1]],
					["BLS",currResultsBLS[0][1], currResultsBLS[0][2], currResultsBLS[0][1]],
					["BLW",currResultsBLW[0][1], currResultsBLW[0][2], currResultsBLW[0][1]],
					["ETA",currResultsETA[0][1], currResultsETA[0][2], currResultsETA[0][1]],
					["ETL",currResultsETL[0][1], currResultsETL[0][2], currResultsETL[0][1]],
					["FST",currResultsFST[0][1], currResultsFST[0][2], currResultsFST[0][1]],
					["FOY",currResultsFOY[0][1], currResultsFOY[0][2], currResultsFOY[0][1]],
					["LAG",currResultsLAG[0][1], currResultsLAG[0][2], currResultsLAG[0][1]],
					["MDU",currResultsMDU[0][1], currResultsMDU[0][2], currResultsMDU[0][1]],
					["NWA",currResultsNWA[0][1], currResultsNWA[0][2], currResultsNWA[0][1]],
					["NOA",currResultsNOA[0][1], currResultsNOA[0][2], currResultsNOA[0][1]],
					["NOD",currResultsNOD[0][1], currResultsNOD[0][2], currResultsNOD[0][1]],
					["SOA",currResultsSOA[0][1], currResultsSOA[0][2], currResultsSOA[0][1]],
					["SOD",currResultsSOD[0][1], currResultsSOD[0][2], currResultsSOD[0][1]],
					["STA",currResultsSTA[0][1], currResultsSTA[0][2], currResultsSTA[0][1]],
					["UPB",currResultsUPB[0][1], currResultsUPB[0][2], currResultsUPB[0][1]],
					["WST",currResultsWST[0][1], currResultsWST[0][2], currResultsWST[0][1]]];

		var DUPArray  = [["BLE",currResultsBLE[1][1], currResultsBLE[1][2], currResultsBLE[1][1]],
					["BLN",currResultsBLN[1][1], currResultsBLN[1][2], currResultsBLN[1][1]],
					["BLS",currResultsBLS[1][1], currResultsBLS[1][2], currResultsBLS[1][1]],
					["BLW",currResultsBLW[1][1], currResultsBLW[1][2], currResultsBLW[1][1]],
					["ETA",currResultsETA[1][1], currResultsETA[1][2], currResultsETA[1][1]],
					["ETL",currResultsETL[1][1], currResultsETL[1][2], currResultsETL[1][1]],
					["FST",currResultsFST[1][1], currResultsFST[1][2], currResultsFST[1][1]],
					["FOY",currResultsFOY[1][1], currResultsFOY[1][2], currResultsFOY[1][1]],
					["LAG",currResultsLAG[1][1], currResultsLAG[1][2], currResultsLAG[1][1]],
					["MDU",currResultsMDU[1][1], currResultsMDU[1][2], currResultsMDU[1][1]],
					["NWA",currResultsNWA[1][1], currResultsNWA[1][2], currResultsNWA[1][1]],
					["NOA",currResultsNOA[1][1], currResultsNOA[1][2], currResultsNOA[1][1]],
					["NOD",currResultsNOD[1][1], currResultsNOD[1][2], currResultsNOD[1][1]],
					["SOA",currResultsSOA[1][1], currResultsSOA[1][2], currResultsSOA[1][1]],
					["SOD",currResultsSOD[1][1], currResultsSOD[1][2], currResultsSOD[1][1]],
					["STA",currResultsSTA[1][1], currResultsSTA[1][2], currResultsSTA[1][1]],
					["UPB",currResultsUPB[1][1], currResultsUPB[1][2], currResultsUPB[1][1]],
					["WST",currResultsWST[1][1], currResultsWST[1][2], currResultsWST[1][1]]];

		var GreenArray  = [["BLE",currResultsBLE[2][1], currResultsBLE[2][2], currResultsBLE[2][1]],
					["BLN",currResultsBLN[2][1], currResultsBLN[2][2], currResultsBLN[2][1]],
					["BLS",currResultsBLS[2][1], currResultsBLS[2][2], currResultsBLS[2][1]],
					["BLW",currResultsBLW[2][1], currResultsBLW[2][2], currResultsBLW[2][1]],
					["ETA",currResultsETA[2][1], currResultsETA[2][2], currResultsETA[2][1]],
					["ETL",currResultsETL[2][1], currResultsETL[2][2], currResultsETL[2][1]],
					["FST",currResultsFST[2][1], currResultsFST[2][2], currResultsFST[2][1]],
					["FOY",currResultsFOY[2][1], currResultsFOY[2][2], currResultsFOY[2][1]],
					["LAG",currResultsLAG[2][1], currResultsLAG[2][2], currResultsLAG[2][1]],
					["MDU",currResultsMDU[2][1], currResultsMDU[2][2], currResultsMDU[2][1]],
					["NWA",currResultsNWA[2][1], currResultsNWA[2][2], currResultsNWA[2][1]],
					["NOA",currResultsNOA[2][1], currResultsNOA[2][2], currResultsNOA[2][1]],
					["NOD",currResultsNOD[2][1], currResultsNOD[2][2], currResultsNOD[2][1]],
					["SOA",currResultsSOA[2][1], currResultsSOA[2][2], currResultsSOA[2][1]],
					["SOD",currResultsSOD[2][1], currResultsSOD[2][2], currResultsSOD[2][1]],
					["STA",currResultsSTA[2][1], currResultsSTA[2][2], currResultsSTA[2][1]],
					["UPB",currResultsUPB[2][1], currResultsUPB[2][2], currResultsUPB[2][1]],
					["WST",currResultsWST[2][1], currResultsWST[2][2], currResultsWST[2][1]]];

		var PBPArray  = [["BLE",currResultsBLE[3][1], currResultsBLE[3][2], currResultsBLE[3][1]],
					["BLN",currResultsBLN[3][1], currResultsBLN[3][2], currResultsBLN[3][1]],
					["BLS",currResultsBLS[3][1], currResultsBLS[3][2], currResultsBLS[3][1]],
					["BLW",currResultsBLW[3][1], currResultsBLW[3][2], currResultsBLW[3][1]],
					["ETA",currResultsETA[3][1], currResultsETA[3][2], currResultsETA[3][1]],
					["ETL",currResultsETL[3][1], currResultsETL[3][2], currResultsETL[3][1]],
					["FST",currResultsFST[3][1], currResultsFST[3][2], currResultsFST[3][1]],
					["FOY",currResultsFOY[3][1], currResultsFOY[3][2], currResultsFOY[3][1]],
					["LAG",currResultsLAG[3][1], currResultsLAG[3][2], currResultsLAG[3][1]],
					["MDU",currResultsMDU[3][1], currResultsMDU[3][2], currResultsMDU[3][1]],
					["NWA",currResultsNWA[3][1], currResultsNWA[3][2], currResultsNWA[3][1]],
					["NOA",currResultsNOA[3][1], currResultsNOA[3][2], currResultsNOA[3][1]],
					["NOD",currResultsNOD[3][1], currResultsNOD[3][2], currResultsNOD[3][1]],
					["SOA",currResultsSOA[3][1], currResultsSOA[3][2], currResultsSOA[3][1]],
					["SOD",currResultsSOD[3][1], currResultsSOD[3][2], currResultsSOD[3][1]],
					["STA",currResultsSTA[3][1], currResultsSTA[3][2], currResultsSTA[3][1]],
					["UPB",currResultsUPB[3][1], currResultsUPB[3][2], currResultsUPB[3][1]],
					["WST",currResultsWST[3][1], currResultsWST[3][2], currResultsWST[3][1]]];

		var SDLPArray  = [["BLE",currResultsBLE[4][1], currResultsBLE[4][2], currResultsBLE[4][1]],
					["BLN",currResultsBLN[4][1], currResultsBLN[4][2], currResultsBLN[4][1]],
					["BLS",currResultsBLS[4][1], currResultsBLS[4][2], currResultsBLS[4][1]],
					["BLW",currResultsBLW[4][1], currResultsBLW[4][2], currResultsBLW[4][1]],
					["ETA",currResultsETA[4][1], currResultsETA[4][2], currResultsETA[4][1]],
					["ETL",currResultsETL[4][1], currResultsETL[4][2], currResultsETL[4][1]],
					["FST",currResultsFST[4][1], currResultsFST[4][2], currResultsFST[4][1]],
					["FOY",currResultsFOY[4][1], currResultsFOY[4][2], currResultsFOY[4][1]],
					["LAG",currResultsLAG[4][1], currResultsLAG[4][2], currResultsLAG[4][1]],
					["MDU",currResultsMDU[4][1], currResultsMDU[4][2], currResultsMDU[4][1]],
					["NWA",currResultsNWA[4][1], currResultsNWA[4][2], currResultsNWA[4][1]],
					["NOA",currResultsNOA[4][1], currResultsNOA[4][2], currResultsNOA[4][1]],
					["NOD",currResultsNOD[4][1], currResultsNOD[4][2], currResultsNOD[4][1]],
					["SOA",currResultsSOA[4][1], currResultsSOA[4][2], currResultsSOA[4][1]],
					["SOD",currResultsSOD[4][1], currResultsSOD[4][2], currResultsSOD[4][1]],
					["STA",currResultsSTA[4][1], currResultsSTA[4][2], currResultsSTA[4][1]],
					["UPB",currResultsUPB[4][1], currResultsUPB[4][2], currResultsUPB[4][1]],
					["WST",currResultsWST[4][1], currResultsWST[4][2], currResultsWST[4][1]]];

		var SinnFeinArray  = [["BLE",currResultsBLE[5][1], currResultsBLE[5][2], currResultsBLE[5][1]],
					["BLN",currResultsBLN[5][1], currResultsBLN[5][2], currResultsBLN[5][1]],
					["BLS",currResultsBLS[5][1], currResultsBLS[5][2], currResultsBLS[5][1]],
					["BLW",currResultsBLW[5][1], currResultsBLW[5][2], currResultsBLW[5][1]],
					["ETA",currResultsETA[5][1], currResultsETA[5][2], currResultsETA[5][1]],
					["ETL",currResultsETL[5][1], currResultsETL[5][2], currResultsETL[5][1]],
					["FST",currResultsFST[5][1], currResultsFST[5][2], currResultsFST[5][1]],
					["FOY",currResultsFOY[5][1], currResultsFOY[5][2], currResultsFOY[5][1]],
					["LAG",currResultsLAG[5][1], currResultsLAG[5][2], currResultsLAG[5][1]],
					["MDU",currResultsMDU[5][1], currResultsMDU[5][2], currResultsMDU[5][1]],
					["NWA",currResultsNWA[5][1], currResultsNWA[5][2], currResultsNWA[5][1]],
					["NOA",currResultsNOA[5][1], currResultsNOA[5][2], currResultsNOA[5][1]],
					["NOD",currResultsNOD[5][1], currResultsNOD[5][2], currResultsNOD[5][1]],
					["SOA",currResultsSOA[5][1], currResultsSOA[5][2], currResultsSOA[5][1]],
					["SOD",currResultsSOD[5][1], currResultsSOD[5][2], currResultsSOD[5][1]],
					["STA",currResultsSTA[5][1], currResultsSTA[5][2], currResultsSTA[5][1]],
					["UPB",currResultsUPB[5][1], currResultsUPB[5][2], currResultsUPB[5][1]],
					["WST",currResultsWST[5][1], currResultsWST[5][2], currResultsWST[5][1]]];

		var TUVArray  = [["BLE",currResultsBLE[6][1], currResultsBLE[6][2], currResultsBLE[6][1]],
					["BLN",currResultsBLN[6][1], currResultsBLN[6][2], currResultsBLN[6][1]],
					["BLS",currResultsBLS[6][1], currResultsBLS[6][2], currResultsBLS[6][1]],
					["BLW",currResultsBLW[6][1], currResultsBLW[6][2], currResultsBLW[6][1]],
					["ETA",currResultsETA[6][1], currResultsETA[6][2], currResultsETA[6][1]],
					["ETL",currResultsETL[6][1], currResultsETL[6][2], currResultsETL[6][1]],
					["FST",currResultsFST[6][1], currResultsFST[6][2], currResultsFST[6][1]],
					["FOY",currResultsFOY[6][1], currResultsFOY[6][2], currResultsFOY[6][1]],
					["LAG",currResultsLAG[6][1], currResultsLAG[6][2], currResultsLAG[6][1]],
					["MDU",currResultsMDU[6][1], currResultsMDU[6][2], currResultsMDU[6][1]],
					["NWA",currResultsNWA[6][1], currResultsNWA[6][2], currResultsNWA[6][1]],
					["NOA",currResultsNOA[6][1], currResultsNOA[6][2], currResultsNOA[6][1]],
					["NOD",currResultsNOD[6][1], currResultsNOD[6][2], currResultsNOD[6][1]],
					["SOA",currResultsSOA[6][1], currResultsSOA[6][2], currResultsSOA[6][1]],
					["SOD",currResultsSOD[6][1], currResultsSOD[6][2], currResultsSOD[6][1]],
					["STA",currResultsSTA[6][1], currResultsSTA[6][2], currResultsSTA[6][1]],
					["UPB",currResultsUPB[6][1], currResultsUPB[6][2], currResultsUPB[6][1]],
					["WST",currResultsWST[6][1], currResultsWST[6][2], currResultsWST[6][1]]];

		var UUPArray  = [["BLE",currResultsBLE[7][1], currResultsBLE[7][2], currResultsBLE[7][1]],
					["BLN",currResultsBLN[7][1], currResultsBLN[7][2], currResultsBLN[7][1]],
					["BLS",currResultsBLS[7][1], currResultsBLS[7][2], currResultsBLS[7][1]],
					["BLW",currResultsBLW[7][1], currResultsBLW[7][2], currResultsBLW[7][1]],
					["ETA",currResultsETA[7][1], currResultsETA[7][2], currResultsETA[7][1]],
					["ETL",currResultsETL[7][1], currResultsETL[7][2], currResultsETL[7][1]],
					["FST",currResultsFST[7][1], currResultsFST[7][2], currResultsFST[7][1]],
					["FOY",currResultsFOY[7][1], currResultsFOY[7][2], currResultsFOY[7][1]],
					["LAG",currResultsLAG[7][1], currResultsLAG[7][2], currResultsLAG[7][1]],
					["MDU",currResultsMDU[7][1], currResultsMDU[7][2], currResultsMDU[7][1]],
					["NWA",currResultsNWA[7][1], currResultsNWA[7][2], currResultsNWA[7][1]],
					["NOA",currResultsNOA[7][1], currResultsNOA[7][2], currResultsNOA[7][1]],
					["NOD",currResultsNOD[7][1], currResultsNOD[7][2], currResultsNOD[7][1]],
					["SOA",currResultsSOA[7][1], currResultsSOA[7][2], currResultsSOA[7][1]],
					["SOD",currResultsSOD[7][1], currResultsSOD[7][2], currResultsSOD[7][1]],
					["STA",currResultsSTA[7][1], currResultsSTA[7][2], currResultsSTA[7][1]],
					["UPB",currResultsUPB[7][1], currResultsUPB[7][2], currResultsUPB[7][1]],
					["WST",currResultsWST[7][1], currResultsWST[7][2], currResultsWST[7][1]]];
		
		nationalResultsToConstituencyLevelCalculation(initialisation, AllianceArray, 0);
		nationalResultsToConstituencyLevelCalculation(initialisation, DUPArray, 1);
		nationalResultsToConstituencyLevelCalculation(initialisation, GreenArray, 2);
		nationalResultsToConstituencyLevelCalculation(initialisation, PBPArray, 3);
		nationalResultsToConstituencyLevelCalculation(initialisation, SDLPArray, 4);
		nationalResultsToConstituencyLevelCalculation(initialisation, SinnFeinArray, 5);
		nationalResultsToConstituencyLevelCalculation(initialisation, TUVArray, 6);
		nationalResultsToConstituencyLevelCalculation(initialisation, UUPArray, 7);
	}
	
}

function seatCalculation(initialisation) {
	
	if (initialisation){
		constituencies.eachLayer(function(currentLayer){
			((currentLayer.feature.properties.Constituency == "Belfast East") ? initialStateSainteLague(prevResultsBLE, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Belfast North") ? initialStateSainteLague(prevResultsBLN, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Belfast South") ? initialStateSainteLague(prevResultsBLS, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Belfast West") ? initialStateSainteLague(prevResultsBLW, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "East Antrim") ? initialStateSainteLague(prevResultsETA, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "East Londonderry") ? initialStateSainteLague(prevResultsETL, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Fermanagh and South Tyrone") ? initialStateSainteLague(prevResultsFST, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Foyle") ? initialStateSainteLague(prevResultsFOY, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Lagan Valley") ? initialStateSainteLague(prevResultsLAG, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Mid Ulster") ? initialStateSainteLague(prevResultsMDU, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Newry and Armagh") ? initialStateSainteLague(prevResultsNWA, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "North Antrim") ? initialStateSainteLague(prevResultsNOA, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "North Down") ? initialStateSainteLague(prevResultsNOD, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "South Antrim") ? initialStateSainteLague(prevResultsSOA, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "South Down") ? initialStateSainteLague(prevResultsSOD, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Strangford") ? initialStateSainteLague(prevResultsSTA, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Upper Bann") ? initialStateSainteLague(prevResultsUPB, currentLayer.feature.properties.fixedSeats, initialisation)
			: initialStateSainteLague(prevResultsWST, currentLayer.feature.properties.fixedSeats, initialisation));
		});
			
		nationalAdjustmentSeatAllocator(initialisation);
		nationalResultsToConstituencyLevelInit(initialisation);
		
	}
	else {
		constituencies.eachLayer(function(currentLayer){
			((currentLayer.feature.properties.Constituency == "Belfast East") ? initialStateSainteLague(currResultsBLE, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Belfast North") ? initialStateSainteLague(currResultsBLN, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Belfast South") ? initialStateSainteLague(currResultsBLS, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Belfast West") ? initialStateSainteLague(currResultsBLW, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "East Antrim") ? initialStateSainteLague(currResultsETA, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "East Londonderry") ? initialStateSainteLague(currResultsETL, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Fermanagh and South Tyrone") ? initialStateSainteLague(currResultsFST, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Foyle") ? initialStateSainteLague(currResultsFOY, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Lagan Valley") ? initialStateSainteLague(currResultsLAG, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Mid Ulster") ? initialStateSainteLague(currResultsMDU, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Newry and Armagh") ? initialStateSainteLague(currResultsNWA, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "North Antrim") ? initialStateSainteLague(currResultsNOA, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "North Down") ? initialStateSainteLague(currResultsNOD, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "South Antrim") ? initialStateSainteLague(currResultsSOA, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "South Down") ? initialStateSainteLague(currResultsSOD, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Strangford") ? initialStateSainteLague(currResultsSTA, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Upper Bann") ? initialStateSainteLague(currResultsUPB, currentLayer.feature.properties.fixedSeats, initialisation)
			: initialStateSainteLague(currResultsWST, currentLayer.feature.properties.fixedSeats, initialisation));
		});
		
		nationalAdjustmentSeatAllocator(initialisation);
		nationalResultsToConstituencyLevelInit(initialisation);
	}
	
	
}


//borders

function styleConstituencies(feature) {
	DUPVotes = feature.properties.DUP * DUPModifier;
	SinnFeinVotes = feature.properties.SinnFein * SinnFeinModifier;
	UUPVotes = feature.properties.UUP * UUPModifier;
	SDLPVotes = feature.properties.SDLP * SDLPModifier;
	AllianceVotes = feature.properties.Alliance * AllianceModifier;
	TUVVotes = feature.properties.TUV * TUVModifier;
	GreenVotes = feature.properties.Green * GreenModifier;
	PBPVotes = feature.properties.PBP * PBPModifier;

	if ((DUPVotes > SinnFeinVotes) && (DUPVotes > UUPVotes) && (DUPVotes > SDLPVotes) && (DUPVotes > AllianceVotes) && (DUPVotes > TUVVotes) && (DUPVotes > GreenVotes) && (DUPVotes > PBPVotes)){
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#d46a4c'
			
		};
	}
	if ((SinnFeinVotes > DUPVotes) && (SinnFeinVotes > UUPVotes) && (SinnFeinVotes > SDLPVotes) && (SinnFeinVotes > AllianceVotes) && (SinnFeinVotes > TUVVotes) && (SinnFeinVotes > GreenVotes) && (SinnFeinVotes > PBPVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#326760'
			
		};
	}
	if ((UUPVotes > DUPVotes) && (UUPVotes > SinnFeinVotes) && (UUPVotes > SDLPVotes) && (UUPVotes > AllianceVotes) && (UUPVotes > TUVVotes) && (UUPVotes > GreenVotes) && (UUPVotes > PBPVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#48a5ee'
			
		};
	}
	if ((SDLPVotes > DUPVotes) && (SDLPVotes > SinnFeinVotes) && (SDLPVotes > UUPVotes) && (SDLPVotes > AllianceVotes) && (SDLPVotes > TUVVotes) && (SDLPVotes > GreenVotes) && (SDLPVotes > PBPVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#2aa82b'
			
		};
	}
	if ((AllianceVotes > DUPVotes) && (AllianceVotes > SinnFeinVotes) && (AllianceVotes > SDLPVotes) && (AllianceVotes > UUPVotes) && (AllianceVotes > TUVVotes) && (AllianceVotes > GreenVotes) && (AllianceVotes > PBPVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#f6cb2f'
			
		};
	}
	if ((TUVVotes > DUPVotes) && (TUVVotes > SinnFeinVotes) && (TUVVotes > SDLPVotes) && (TUVVotes > AllianceVotes) && (TUVVotes > UUPVotes) && (TUVVotes > GreenVotes) && (TUVVotes > PBPVotes)){
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#0d3a6a'
			
		};
	}
	if ((GreenVotes > DUPVotes) && (GreenVotes > SinnFeinVotes) && (GreenVotes > SDLPVotes) && (GreenVotes > AllianceVotes) && (GreenVotes > UUPVotes) && (GreenVotes > TUVVotes) && (GreenVotes > PBPVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#8dc63e'
				
		};
	}
	if ((PBPVotes > DUPVotes) && (PBPVotes > SinnFeinVotes) && (PBPVotes > SDLPVotes) && (PBPVotes > AllianceVotes) && (PBPVotes > UUPVotes) && (PBPVotes > TUVVotes) && (PBPVotes > GreenVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#e91d50'
				
		};
	}
}

function fillConstituencyArrays(constituencyCollection, initialisation) {
	let noOfParties = 8;
	
	if (initialisation)
	{
		DUPModifier = 1;
		SinnFeinModifier = 1;
		UUPModifier = 1;
		SDLPModifier = 1;
		AllianceModifier = 1;
		TUVModifier = 1;
		GreenModifier = 1;
		PBPModifier = 1;
	}


	var results = new Array(noOfParties);
	for (var i = 0; i < results.length; i++) {
		results[i] = new Array(4); //Loop through depending on how many districts there are and create new fields.
		results[i][1] = 0;
		results[i][2] = 0;
		results[i][3] = 0;
	}

	var index = 0; //Default index to 0 as this is the standard starting point for any array.
	
	var parties = ["DUP","Sinn Fein","UUP","SDLP","Alliance","TUV","Green","PBP"];


	for (var i = 0; i < parties.length; i++){
		results[index][0] = parties[i]; 
		results[index][1] = results[index][1] + ((parties[i] == "DUP") ? Math.round(((constituencyCollection.properties.DUP * DUPModifier) * 1) / 1)
		: (parties[i] == "Sinn Fein") ? Math.round(((constituencyCollection.properties.SinnFein * SinnFeinModifier) * 1) / 1)
		: (parties[i] == "UUP") ? Math.round(((constituencyCollection.properties.UUP * UUPModifier) * 1) / 1)
		: (parties[i] == "SDLP") ? Math.round(((constituencyCollection.properties.SDLP * SDLPModifier) * 1) / 1)
		: (parties[i] == "Alliance") ? Math.round(((constituencyCollection.properties.Alliance * AllianceModifier) * 1) / 1)
		: (parties[i] == "TUV") ? Math.round(((constituencyCollection.properties.TUV * TUVModifier) * 1) / 1)
		: (parties[i] == "Green") ? Math.round(((constituencyCollection.properties.Green * GreenModifier) * 1) / 1)
		: Math.round(((constituencyCollection.properties.PBP * PBPModifier) * 1) / 1));
		results[index][2] = 0;
		results[index][3] = results[index][1];
		index++;
	}
	index = 0;



	return results;
}

function fillNationalArrayByConstituency(currentArray, results){
	
	for (var i = 0; i < currentArray.length; i++) {
		if (currentArray[i][0] == "DUP")
		{
			results[0][1] = results[0][1] + currentArray[i][1];
			results[0][2] = results[0][2] + currentArray[i][2];
			results[0][3] = results[0][3] + currentArray[i][1];
		}
		if (currentArray[i][0] == "Sinn Fein")
		{
			results[1][1] = results[1][1] + currentArray[i][1];
			results[1][2] = results[1][2] + currentArray[i][2];
			results[1][3] = results[1][3] + currentArray[i][1];
		}
		if (currentArray[i][0] == "UUP")
		{
			results[2][1] = results[2][1] + currentArray[i][1];
			results[2][2] = results[2][2] + currentArray[i][2];
			results[2][3] = results[2][3] + currentArray[i][1];
		}
		if (currentArray[i][0] == "SDLP")
		{
			results[3][1] = results[3][1] + currentArray[i][1];
			results[3][2] = results[3][2] + currentArray[i][2];
			results[3][3] = results[3][3] + currentArray[i][1];
		}
		if (currentArray[i][0] == "Alliance")
		{
			results[4][1] = results[4][1] + currentArray[i][1];
			results[4][2] = results[4][2] + currentArray[i][2];
			results[4][3] = results[4][3] + currentArray[i][1];
		}
		if (currentArray[i][0] == "TUV")
		{
			results[5][1] = results[5][1] + currentArray[i][1];
			results[5][2] = results[5][2] + currentArray[i][2];
			results[5][3] = results[5][3] + currentArray[i][1];
		}	
		if (currentArray[i][0] == "Green")
		{
			results[6][1] = results[6][1] + currentArray[i][1];
			results[6][2] = results[6][2] + currentArray[i][2];
			results[6][3] = results[6][3] + currentArray[i][1];
		}
		if (currentArray[i][0] == "PBP")
		{
			results[7][1] = results[7][1] + currentArray[i][1];
			results[7][2] = results[7][2] + currentArray[i][2];
			results[7][3] = results[7][3] + currentArray[i][1];
		}		
	}
	
	return results;
	
}

function fillNationalArray() {
	let noOfParties = 8;

	var parties = ["DUP","Sinn Fein","UUP","SDLP","Alliance","TUV","Green","PBP"];
	var results = new Array(noOfParties);
	for (var i = 0; i < results.length; i++) {
		results[i] = new Array(4); //Loop through depending on how many districts there are and create new fields.
		results[i][0] = parties[i];
		results[i][1] = 0;
		results[i][2] = 0;
		results[i][3] = 0;
	}
	
	
	results = fillNationalArrayByConstituency(currResultsBLE, results);
	results = fillNationalArrayByConstituency(currResultsBLN, results);
	results = fillNationalArrayByConstituency(currResultsBLS, results);
	results = fillNationalArrayByConstituency(currResultsBLW, results);
	results = fillNationalArrayByConstituency(currResultsETA, results);
	results = fillNationalArrayByConstituency(currResultsETL, results);
	results = fillNationalArrayByConstituency(currResultsFST, results);
	results = fillNationalArrayByConstituency(currResultsFOY, results);
	results = fillNationalArrayByConstituency(currResultsLAG, results);
	results = fillNationalArrayByConstituency(currResultsMDU, results);
	results = fillNationalArrayByConstituency(currResultsNWA, results);
	results = fillNationalArrayByConstituency(currResultsNOA, results);
	results = fillNationalArrayByConstituency(currResultsNOD, results);
	results = fillNationalArrayByConstituency(currResultsSOA, results);
	results = fillNationalArrayByConstituency(currResultsSOD, results);
	results = fillNationalArrayByConstituency(currResultsSTA, results);
	results = fillNationalArrayByConstituency(currResultsUPB, results);
	results = fillNationalArrayByConstituency(currResultsWST, results);
	

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
	document.getElementById("DUPInput").value = DUPprediction;
	document.getElementById("SinnFeinInput").value = SinnFeinprediction;
	document.getElementById("UUPInput").value = UUPprediction;
	document.getElementById("SDLPInput").value = SDLPprediction;
	document.getElementById("AllianceInput").value = Allianceprediction;
	document.getElementById("TUVInput").value = TUVprediction;
	document.getElementById("GreenInput").value = Greenprediction;
	document.getElementById("PBPInput").value = PBPprediction;
	
	calculateUserPrediction();
}

function displayPrevResults() {
	document.getElementById("DUPInput").value = prevDUPVoteShare;
	document.getElementById("SinnFeinInput").value = prevSinnFeinVoteShare;
	document.getElementById("UUPInput").value = prevUUPVoteShare;
	document.getElementById("SDLPInput").value = prevSDLPVoteShare;
	document.getElementById("AllianceInput").value = prevAllianceVoteShare;
	document.getElementById("TUVInput").value = prevTUVVoteShare;
	document.getElementById("GreenInput").value = prevGreenVoteShare;
	document.getElementById("PBPInput").value = prevPBPVoteShare;
	
	calculateUserPrediction();
}

function thresholdChecker(currentVoteShare){
	if (currentVoteShare >= 2){
		return true;
	}
	else {
		return false;
	}

}

function thresholdImplementor(index, partyThreshold, initialisation) {
	
	if (initialisation){
		if (!partyThreshold){
			prevResultsBLE[index][3] = 0;
			prevResultsBLN[index][3] = 0;
			prevResultsBLS[index][3] = 0;
			prevResultsBLW[index][3] = 0;
			prevResultsETA[index][3] = 0;
			prevResultsETL[index][3] = 0;
			prevResultsFST[index][3] = 0;
			prevResultsFOY[index][3] = 0;
			prevResultsLAG[index][3] = 0;
			prevResultsMDU[index][3] = 0;
			prevResultsNWA[index][3] = 0;
			prevResultsNOA[index][3] = 0;
			prevResultsNOD[index][3] = 0;
			prevResultsSOA[index][3] = 0;
			prevResultsSOD[index][3] = 0;
			prevResultsSTA[index][3] = 0;
			prevResultsUPB[index][3] = 0;
			prevResultsWST[index][3] = 0;
			prevNationalResults[index][3] = 0;
		}
	}
	else {
	
		if (!partyThreshold){
			currResultsBLE[index][3] = 0;
			currResultsBLN[index][3] = 0;
			currResultsBLS[index][3] = 0;
			currResultsBLW[index][3] = 0;
			currResultsETA[index][3] = 0;
			currResultsETL[index][3] = 0;
			currResultsFST[index][3] = 0;
			currResultsFOY[index][3] = 0;
			currResultsLAG[index][3] = 0;
			currResultsMDU[index][3] = 0;
			currResultsNWA[index][3] = 0;
			currResultsNOA[index][3] = 0;
			currResultsNOD[index][3] = 0;
			currResultsSOA[index][3] = 0;
			currResultsSOD[index][3] = 0;
			currResultsSTA[index][3] = 0;
			currResultsUPB[index][3] = 0;
			currResultsWST[index][3] = 0;
			currNationalResults[index][3] = 0;
		}
	}
	
}

function calculateUserPrediction() {
	
	DUPModifier = 1 + ((document.getElementById("DUPInput").value - prevDUPVoteShare) / prevDUPVoteShare);
	SinnFeinModifier = 1 + ((document.getElementById("SinnFeinInput").value - prevSinnFeinVoteShare) / prevSinnFeinVoteShare);
	UUPModifier = 1 + ((document.getElementById("UUPInput").value - prevUUPVoteShare) / prevUUPVoteShare);
	SDLPModifier = 1 + ((document.getElementById("SDLPInput").value - prevSDLPVoteShare) / prevSDLPVoteShare);
	AllianceModifier = 1 + ((document.getElementById("AllianceInput").value - prevAllianceVoteShare) / prevAllianceVoteShare);
	TUVModifier = 1 + ((document.getElementById("TUVInput").value - prevTUVVoteShare) / prevTUVVoteShare);
	GreenModifier = 1 + ((document.getElementById("GreenInput").value - prevGreenVoteShare) / prevGreenVoteShare);;
	PBPModifier = 1 + ((document.getElementById("PBPInput").value - prevPBPVoteShare) / prevPBPVoteShare);
	
	
	
	tempArray = new Array(18);
	index = 0;

	constituencies.eachLayer(function(currentLayer){
		tempArray[index] = fillConstituencyArrays(currentLayer.feature, false);
		index++;
	});


	currResultsBLE = tempArray[0];
	currResultsBLN = tempArray[1];
	currResultsBLS = tempArray[2];
	currResultsBLW = tempArray[3];
	currResultsETA = tempArray[4];
	currResultsETL = tempArray[5];
	currResultsFST = tempArray[6];
	currResultsFOY = tempArray[7];
	currResultsLAG = tempArray[8];
	currResultsMDU = tempArray[9];
	currResultsNWA = tempArray[10];
	currResultsNOA = tempArray[11];
	currResultsNOD = tempArray[12];
	currResultsSOA = tempArray[13];
	currResultsSOD = tempArray[14];
	currResultsSTA = tempArray[15];
	currResultsUPB = tempArray[16];
	currResultsWST = tempArray[17];

	currNationalResults = fillNationalArray();
	currResultsBLE.sort(sortFunctionC);
	currResultsBLN.sort(sortFunctionC);
	currResultsBLS.sort(sortFunctionC);
	currResultsBLW.sort(sortFunctionC);
	currResultsETA.sort(sortFunctionC);
	currResultsETL.sort(sortFunctionC);
	currResultsFST.sort(sortFunctionC);
	currResultsFOY.sort(sortFunctionC);
	currResultsLAG.sort(sortFunctionC);
	currResultsMDU.sort(sortFunctionC);
	currResultsNWA.sort(sortFunctionC);
	currResultsNOA.sort(sortFunctionC);
	currResultsNOD.sort(sortFunctionC);
	currResultsSOA.sort(sortFunctionC);
	currResultsSOD.sort(sortFunctionC);
	currResultsSTA.sort(sortFunctionC);
	currResultsUPB.sort(sortFunctionC);
	currResultsWST.sort(sortFunctionC);

	currNationalResults.sort(sortFunctionC);
	
	
	
	
	AllianceThreshold = thresholdChecker(document.getElementById("AllianceInput").value);
	DUPThreshold = thresholdChecker(document.getElementById("DUPInput").value);
	GreenThreshold = thresholdChecker(document.getElementById("GreenInput").value);
	PBPThreshold = thresholdChecker(document.getElementById("PBPInput").value);
	SDLPThreshold = thresholdChecker(document.getElementById("SDLPInput").value);
	SinnFeinThreshold = thresholdChecker(document.getElementById("SinnFeinInput").value);
	TUVThreshold = thresholdChecker(document.getElementById("TUVInput").value);
	UUPThreshold = thresholdChecker(document.getElementById("UUPInput").value);
	
	thresholdImplementor(0, AllianceThreshold, false);
	thresholdImplementor(1, DUPThreshold, false);
	thresholdImplementor(2, GreenThreshold, false);
	thresholdImplementor(3, PBPThreshold, false);
	thresholdImplementor(4, SDLPThreshold, false);
	thresholdImplementor(5, SinnFeinThreshold, false);
	thresholdImplementor(6, TUVThreshold, false);
	thresholdImplementor(7, UUPThreshold, false);
	
	
	
	constituencies.eachLayer(function(layer){ //Iterate through each layer in a collection
		constituencies.resetStyle(layer);
	});
	

	//Seat Calculation Here
	
	seatCalculation(false);
 
	//Update Table
	currNationalResults.sort(sortFunction);
	updateResultsTable(currNationalResults, prevNationalResults);
}

function resetHighlightStates(e) {
	constituencies.resetStyle(e.target);
}

function resetHighlightConstituencies(e) {
	municipalitiesBLE.resetStyle(e.target);
}

function resetMap() {


	

	displayVoteShareTable();
	document.getElementById("ResultsTableTitle").value = "National Level";

	currNationalResults.sort(sortFunction);
	updateResultsTable(currNationalResults, prevNationalResults);

	map.addLayer(constituencies);
	resetHighlightStates(constituencies);
	map.setView(new L.LatLng(51.5, 8), 8);
	
}



//Zoom in when user clicks on state/region
function zoomToFeatureMunicipalityToMunicipality(e) {
	map.fitBounds(e.target.getBounds());
	displayPopup(e);
}

function zoomToFeatureConstituencyToMunicipality(e) {
	stateMode = false;
	federalLevel = false;
	
	hideVoteShareTable();

	map.fitBounds(e.target.getBounds());
	
	
	document.getElementById("ResultsTableTitle").value = e.target.feature.properties.Constituency;
	
	((e.target.feature.properties.Constituency == "Belfast East") ? currResultsBLE.sort(sortFunction)
	: (e.target.feature.properties.Constituency == "Belfast North") ? currResultsBLN.sort(sortFunction)
	: (e.target.feature.properties.Constituency == "Belfast South") ? currResultsBLS.sort(sortFunction)
	: (e.target.feature.properties.Constituency == "Belfast West") ? currResultsBLW.sort(sortFunction)
	: (e.target.feature.properties.Constituency == "East Antrim") ? currResultsETA.sort(sortFunction)
	: (e.target.feature.properties.Constituency == "East Londonderry") ? currResultsETL.sort(sortFunction)
	: (e.target.feature.properties.Constituency == "Fermanagh and South Tyrone") ? currResultsFST.sort(sortFunction)
	: (e.target.feature.properties.Constituency == "Foyle") ? currResultsFOY.sort(sortFunction)
	: (e.target.feature.properties.Constituency == "Mid Ulster") ? currResultsMDU.sort(sortFunction)
	: (e.target.feature.properties.Constituency == "Newry and Armagh") ? currResultsNWA.sort(sortFunction)
	: (e.target.feature.properties.Constituency == "Lagan Valley") ? currResultsLAG.sort(sortFunction)
	: (e.target.feature.properties.Constituency == "North Antrim") ? currResultsNOA.sort(sortFunction)
	: (e.target.feature.properties.Constituency == "North Down") ? currResultsNOD.sort(sortFunction)
	: (e.target.feature.properties.Constituency == "South Antrim") ? currResultsSOA.sort(sortFunction)
	: (e.target.feature.properties.Constituency == "South Down") ? currResultsSOD.sort(sortFunction)
	: (e.target.feature.properties.Constituency == "Strangford") ? currResultsSTA.sort(sortFunction)
	: (e.target.feature.properties.Constituency == "Upper Bann") ? currResultsUPB.sort(sortFunction)
	: currResultsWST.sort(sortFunction));
	
	((e.target.feature.properties.Constituency == "Belfast East") ? updateResultsTable(currResultsBLE, prevResultsBLE)
	: (e.target.feature.properties.Constituency == "Belfast North") ? updateResultsTable(currResultsBLN, prevResultsBLN)
	: (e.target.feature.properties.Constituency == "Belfast South") ? updateResultsTable(currResultsBLS, prevResultsBLS)
	: (e.target.feature.properties.Constituency == "Belfast West") ? updateResultsTable(currResultsBLW, prevResultsBLW)
	: (e.target.feature.properties.Constituency == "East Antrim") ? updateResultsTable(currResultsETA, prevResultsETA)
	: (e.target.feature.properties.Constituency == "East Londonderry") ? updateResultsTable(currResultsETL, prevResultsETL)
	: (e.target.feature.properties.Constituency == "Fermanagh and South Tyrone") ? updateResultsTable(currResultsFST, prevResultsFST)
	: (e.target.feature.properties.Constituency == "Foyle") ? updateResultsTable(currResultsFOY, prevResultsFOY)
	: (e.target.feature.properties.Constituency == "Mid Ulster") ? updateResultsTable(currResultsMDU, prevResultsMDU)
	: (e.target.feature.properties.Constituency == "Newry and Armagh") ? updateResultsTable(currResultsNWA, prevResultsNWA)
	: (e.target.feature.properties.Constituency == "Lagan Valley") ? updateResultsTable(currResultsLAG, prevResultsLAG)
	: (e.target.feature.properties.Constituency == "North Antrim") ? updateResultsTable(currResultsNOA, prevResultsNOA)
	: (e.target.feature.properties.Constituency == "North Down") ? updateResultsTable(currResultsNOD, prevResultsNOD)
	: (e.target.feature.properties.Constituency == "South Antrim") ? updateResultsTable(currResultsSOA, prevResultsSOA)
	: (e.target.feature.properties.Constituency == "South Down") ? updateResultsTable(currResultsSOD, prevResultsSOD)
	: (e.target.feature.properties.Constituency == "Strangford") ? updateResultsTable(currResultsSTA, prevResultsSTA)
	: (e.target.feature.properties.Constituency == "Upper Bann") ? updateResultsTable(currResultsUPB, prevResultsUPB)
	: updateResultsTable(currResultsWST, prevResultsWST));
	
	
}

function onEachFeatureConstituencies(feature, layer) {
	layer.on({
		mouseover: highlightFeatureStates,
		mouseout: resetHighlightStates,
		click: zoomToFeatureConstituencyToMunicipality
	});
}

function onEachFeatureMunicipalities(feature, layer) {
	layer.on({
		mouseover: highlightFeatureConstituency,
		mouseout: resetHighlightConstituencies,
		click: zoomToFeatureMunicipalityToMunicipality
	});
}
//On opening page

function displayPopup(e) {
		
	var layer = e.target;
	
	
	var popup = L.popup();
	
	//Set up rank system
	
	
	var prevArray = [["Social Democratic",parseInt(layer.feature.properties.SocialDemocratiSDLPVotes, 10)],
	["Moderate",parseInt(layer.feature.properties.ModerateVotes, 10)],
	["Sweden Democrats",parseInt(layer.feature.properties.SwedenDemocratDUPVotes, 10)],
	["Centre",parseInt(layer.feature.properties.CentreVotes, 10)],
	["The Left",parseInt(layer.feature.properties.LeftVotes, 10)],
	["Christian Democrats",parseInt(layer.feature.properties.ChristianDemocratDUPVotes, 10)],
	["Liberals",parseInt(layer.feature.properties.LiberalVotes, 10)],
	["Green",parseInt(layer.feature.properties.GreenVotes, 10)]];
	prevArray.sort(sortFunction);
	
	var currArray = [["Social Democratic",parseInt(layer.feature.properties.SocialDemocratiSDLPVotes * SModifier, 10)],
	["Moderate",parseInt(layer.feature.properties.ModerateVotes * MModifier, 10)],
	["Sweden Democrats",parseInt(layer.feature.properties.SwedenDemocratDUPVotes * SDModifier, 10)],
	["Centre",parseInt(layer.feature.properties.CentreVotes * CModifier, 10)],
	["The Left",parseInt(layer.feature.properties.LeftVotes * VModifier, 10)],
	["Christian Democrats",parseInt(layer.feature.properties.ChristianDemocratDUPVotes * KDModifier, 10)],
	["Liberals",parseInt(layer.feature.properties.LiberalVotes * LModifier, 10)],
	["Green",parseInt(layer.feature.properties.GreenVotes * MPModifier, 10)]];
	currArray.sort(sortFunction);
	
	var voteTotalPrev = 0, voteTotalCurr = 0;
		

	
	for (var i = 0; i < prevArray.length; i++) {
		voteTotalPrev = voteTotalPrev + prevArray[i][1];
		voteTotalCurr = voteTotalCurr + currArray[i][1];
	}

	   
	var list = "<b>" + layer.feature.properties.name + "</b></br>" 
	+ " Party | Vote, % </br>"
	+ "</br>"
	+ " Previous Results (2018): </br>"
	+ prevArray[0][0] + "  |  " + prevArray[0][1] + ", " + Math.round((((prevArray[0][1] / voteTotalPrev) * 100)) * 10) / 10  + "%</br>"
	+ prevArray[1][0] + "  |  " + prevArray[1][1] + ", " + Math.round((((prevArray[1][1] / voteTotalPrev) * 100)) * 10) / 10  + "%</br>"
	+ prevArray[2][0] + "  |  " + prevArray[2][1] + ", " + Math.round((((prevArray[2][1] / voteTotalPrev) * 100)) * 10) / 10  + "%</br>"
	+ prevArray[3][0] + "  |  " + prevArray[3][1] + ", " + Math.round((((prevArray[3][1] / voteTotalPrev) * 100)) * 10) / 10  + "%</br>"
	+ prevArray[4][0] + "  |  " + prevArray[4][1] + ", " + Math.round((((prevArray[4][1] / voteTotalPrev) * 100)) * 10) / 10  + "%</br>"
	+ prevArray[5][0] + "  |  " + prevArray[5][1] + ", " + Math.round((((prevArray[5][1] / voteTotalPrev) * 100)) * 10) / 10  + "%</br>"
	+ prevArray[6][0] + "  |  " + prevArray[6][1] + ", " + Math.round((((prevArray[6][1] / voteTotalPrev) * 100)) * 10) / 10  + "%</br>"
	+ prevArray[7][0] + "  |  " + prevArray[7][1] + ", " + Math.round((((prevArray[7][1] / voteTotalPrev) * 100)) * 10) / 10  + "%</br>"
	+ " </br>"
	+ " Current Prediction: </br>"
	+ currArray[0][0] + "  |  " + currArray[0][1] + ", " + Math.round((((currArray[0][1] / voteTotalCurr) * 100)) * 10) / 10  + "%</br>"
	+ currArray[1][0] + "  |  " + currArray[1][1] + ", " + Math.round((((currArray[1][1] / voteTotalCurr) * 100)) * 10) / 10  + "%</br>"
	+ currArray[2][0] + "  |  " + currArray[2][1] + ", " + Math.round((((currArray[2][1] / voteTotalCurr) * 100)) * 10) / 10  + "%</br>"
	+ currArray[3][0] + "  |  " + currArray[3][1] + ", " + Math.round((((currArray[3][1] / voteTotalCurr) * 100)) * 10) / 10  + "%</br>"
	+ currArray[4][0] + "  |  " + currArray[4][1] + ", " + Math.round((((currArray[4][1] / voteTotalCurr) * 100)) * 10) / 10  + "%</br>"
	+ currArray[5][0] + "  |  " + currArray[5][1] + ", " + Math.round((((currArray[5][1] / voteTotalCurr) * 100)) * 10) / 10  + "%</br>"
	+ currArray[6][0] + "  |  " + currArray[6][1] + ", " + Math.round((((currArray[6][1] / voteTotalCurr) * 100)) * 10) / 10  + "%</br>"
	+ currArray[7][0] + "  |  " + currArray[7][1] + ", " + Math.round((((currArray[7][1] / voteTotalCurr) * 100)) * 10) / 10  + "%</br>";
	   
	popup.setContent(list);
	layer.bindPopup(popup);
	layer.openPopup();

}

function updateResultsTable(currResults, prevResults) {
	

	var indexs = new Array(8);
	index = 0;
	
	for (var i = 0; i < currResults.length; i++) {
		for (var j = 0; j < prevResults.length; j++){
			if (prevResults[j][0] == currResults[i][0]) {
				indexs[index] = j;
				index++;
			}
		}
	}

	var totalVotesCurr = 0, currTotalSeats = 0, totalVotesPrev = 0, prevTotalSeats = 0;
	for (i = 0; i < currResults.length; i++){
		totalVotesCurr = totalVotesCurr + currResults[i][1]
		currTotalSeats = currTotalSeats + currResults[i][2]
		prevTotalSeats = prevTotalSeats + prevResults[i][2]
		totalVotesPrev = totalVotesPrev + prevResults[i][1]
	}
	
	document.getElementById("Party1Name").value = currResults[0][0];
	document.getElementById("Party1Votes").value = currResults[0][1];
	document.getElementById("Party1VoteShare").value = Math.round((currResults[0][1] / totalVotesCurr * 100) * 10) / 10;
	document.getElementById("Party1Swing").value = ((Math.round(((currResults[0][1] / totalVotesCurr * 100) - (prevResults[indexs[0]][1] / totalVotesPrev * 100)) * 10) / 10) > 0 ? "+"+(Math.round(((currResults[0][1] / totalVotesCurr * 100) - (prevResults[indexs[0]][1] / totalVotesPrev * 100)) * 10) / 10) : (Math.round(((currResults[0][1] / totalVotesCurr * 100) - (prevResults[indexs[0]][1] / totalVotesPrev * 100)) * 10) / 10));
	document.getElementById("Party1Seats").value = currResults[0][2];
	document.getElementById("Party1SeatChange").value = ((currResults[0][2]) - (prevResults[indexs[0]][2]) > 0 ? "+"+((currResults[0][2]) - (prevResults[indexs[0]][2])) : ((currResults[0][2]) - (prevResults[indexs[0]][2])));
	document.getElementById("Party1SeatShare").value = Math.round(((currResults[0][2]) / currTotalSeats * 100) * 10) / 10;
	
	document.getElementById("Party2Name").value = currResults[1][0];
	document.getElementById("Party2Votes").value = currResults[1][1];
	document.getElementById("Party2VoteShare").value = Math.round((currResults[1][1] / totalVotesCurr * 100) * 10) / 10;
	document.getElementById("Party2Swing").value = ((Math.round(((currResults[1][1] / totalVotesCurr * 100) - (prevResults[indexs[1]][1] / totalVotesPrev * 100)) * 10) / 10) > 0 ? "+"+(Math.round(((currResults[1][1] / totalVotesCurr * 100) - (prevResults[indexs[1]][1] / totalVotesPrev * 100)) * 10) / 10) : (Math.round(((currResults[1][1] / totalVotesCurr * 100) - (prevResults[indexs[1]][1] / totalVotesPrev * 100)) * 10) / 10));
	document.getElementById("Party2Seats").value = currResults[1][2];
	document.getElementById("Party2SeatChange").value = ((currResults[1][2]) - (prevResults[indexs[1]][2]) > 0 ? "+"+((currResults[1][2]) - (prevResults[indexs[1]][2])) : ((currResults[1][2]) - (prevResults[indexs[1]][2])));
	document.getElementById("Party2SeatShare").value = Math.round(((currResults[1][2]) / currTotalSeats * 100) * 10) / 10;

	document.getElementById("Party3Name").value = currResults[2][0];
	document.getElementById("Party3Votes").value = currResults[2][1];
	document.getElementById("Party3VoteShare").value = Math.round((currResults[2][1] / totalVotesCurr * 100) * 10) / 10;
	document.getElementById("Party3Swing").value = ((Math.round(((currResults[2][1] / totalVotesCurr * 100) - (prevResults[indexs[2]][1] / totalVotesPrev * 100)) * 10) / 10) > 0 ? "+"+(Math.round(((currResults[2][1] / totalVotesCurr * 100) - (prevResults[indexs[2]][1] / totalVotesPrev * 100)) * 10) / 10) : (Math.round(((currResults[2][1] / totalVotesCurr * 100) - (prevResults[indexs[2]][1] / totalVotesPrev * 100)) * 10) / 10));
	document.getElementById("Party3Seats").value = currResults[2][2];
	document.getElementById("Party3SeatChange").value = ((currResults[2][2]) - (prevResults[indexs[2]][2]) > 0 ? "+"+((currResults[2][2]) - (prevResults[indexs[2]][2])) : ((currResults[2][2]) - (prevResults[indexs[2]][2])));
	document.getElementById("Party3SeatShare").value = Math.round(((currResults[2][2]) / currTotalSeats * 100) * 10) / 10;

	document.getElementById("Party4Name").value = currResults[3][0];
	document.getElementById("Party4Votes").value = currResults[3][1];
	document.getElementById("Party4VoteShare").value = Math.round((currResults[3][1] / totalVotesCurr * 100) * 10) / 10;
	document.getElementById("Party4Swing").value = ((Math.round(((currResults[3][1] / totalVotesCurr * 100) - (prevResults[indexs[3]][1] / totalVotesPrev * 100)) * 10) / 10) > 0 ? "+"+(Math.round(((currResults[3][1] / totalVotesCurr * 100) - (prevResults[indexs[3]][1] / totalVotesPrev * 100)) * 10) / 10) : (Math.round(((currResults[3][1] / totalVotesCurr * 100) - (prevResults[indexs[3]][1] / totalVotesPrev * 100)) * 10) / 10));
	document.getElementById("Party4Seats").value = currResults[3][2];
	document.getElementById("Party4SeatChange").value = ((currResults[3][2]) - (prevResults[indexs[3]][2]) > 0 ? "+"+((currResults[3][2]) - (prevResults[indexs[3]][2])) : ((currResults[3][2]) - (prevResults[indexs[3]][2])));
	document.getElementById("Party4SeatShare").value = Math.round(((currResults[3][2]) / currTotalSeats * 100) * 10) / 10;
	
	document.getElementById("Party5Name").value = currResults[4][0];
	document.getElementById("Party5Votes").value = currResults[4][1];
	document.getElementById("Party5VoteShare").value = Math.round((currResults[4][1] / totalVotesCurr * 100) * 10) / 10;
	document.getElementById("Party5Swing").value = ((Math.round(((currResults[4][1] / totalVotesCurr * 100) - (prevResults[indexs[4]][1] / totalVotesPrev * 100)) * 10) / 10) > 0 ? "+"+(Math.round(((currResults[4][1] / totalVotesCurr * 100) - (prevResults[indexs[4]][1] / totalVotesPrev * 100)) * 10) / 10) : (Math.round(((currResults[4][1] / totalVotesCurr * 100) - (prevResults[indexs[4]][1] / totalVotesPrev * 100)) * 10) / 10));
	document.getElementById("Party5Seats").value = currResults[4][2];
	document.getElementById("Party5SeatChange").value = ((currResults[4][2]) - (prevResults[indexs[4]][2]) > 0 ? "+"+((currResults[4][2]) - (prevResults[indexs[4]][2])) : ((currResults[4][2]) - (prevResults[indexs[4]][2])));
	document.getElementById("Party5SeatShare").value = Math.round(((currResults[4][2]) / currTotalSeats * 100) * 10) / 10;
	
	document.getElementById("Party6Name").value = currResults[5][0];
	document.getElementById("Party6Votes").value = currResults[5][1];
	document.getElementById("Party6VoteShare").value = Math.round((currResults[5][1] / totalVotesCurr * 100) * 10) / 10;
	document.getElementById("Party6Swing").value = ((Math.round(((currResults[5][1] / totalVotesCurr * 100) - (prevResults[indexs[5]][1] / totalVotesPrev * 100)) * 10) / 10) > 0 ? "+"+(Math.round(((currResults[5][1] / totalVotesCurr * 100) - (prevResults[indexs[5]][1] / totalVotesPrev * 100)) * 10) / 10) : (Math.round(((currResults[5][1] / totalVotesCurr * 100) - (prevResults[indexs[5]][1] / totalVotesPrev * 100)) * 10) / 10));
	document.getElementById("Party6Seats").value = currResults[5][2];
	document.getElementById("Party6SeatChange").value = ((currResults[5][2]) - (prevResults[indexs[5]][2]) > 0 ? "+"+((currResults[5][2]) - (prevResults[indexs[5]][2])) : ((currResults[5][2]) - (prevResults[indexs[5]][2])));
	document.getElementById("Party6SeatShare").value = Math.round(((currResults[5][2]) / currTotalSeats * 100) * 10) / 10;	

	document.getElementById("Party7Name").value = currResults[6][0];
	document.getElementById("Party7Votes").value = currResults[6][1];
	document.getElementById("Party7VoteShare").value = Math.round((currResults[6][1] / totalVotesCurr * 100) * 10) / 10;
	document.getElementById("Party7Swing").value = ((Math.round(((currResults[6][1] / totalVotesCurr * 100) - (prevResults[indexs[6]][1] / totalVotesPrev * 100)) * 10) / 10) > 0 ? "+"+(Math.round(((currResults[6][1] / totalVotesCurr * 100) - (prevResults[indexs[6]][1] / totalVotesPrev * 100)) * 10) / 10) : (Math.round(((currResults[6][1] / totalVotesCurr * 100) - (prevResults[indexs[6]][1] / totalVotesPrev * 100)) * 10) / 10));
	document.getElementById("Party7Seats").value = currResults[6][2];
	document.getElementById("Party7SeatChange").value = ((currResults[6][2]) - (prevResults[indexs[6]][2]) > 0 ? "+"+((currResults[6][2]) - (prevResults[indexs[6]][2])) : ((currResults[6][2]) - (prevResults[indexs[6]][2])));
	document.getElementById("Party7SeatShare").value = Math.round(((currResults[6][2]) / currTotalSeats * 100) * 10) / 10;	

	document.getElementById("Party8Name").value = currResults[7][0];
	document.getElementById("Party8Votes").value = currResults[7][1];
	document.getElementById("Party8VoteShare").value = Math.round((currResults[7][1] / totalVotesCurr * 100) * 10) / 10;
	document.getElementById("Party8Swing").value = ((Math.round(((currResults[7][1] / totalVotesCurr * 100) - (prevResults[indexs[7]][1] / totalVotesPrev * 100)) * 10) / 10) > 0 ? "+"+(Math.round(((currResults[7][1] / totalVotesCurr * 100) - (prevResults[indexs[7]][1] / totalVotesPrev * 100)) * 10) / 10) : (Math.round(((currResults[7][1] / totalVotesCurr * 100) - (prevResults[indexs[7]][1] / totalVotesPrev * 100)) * 10) / 10));
	document.getElementById("Party8Seats").value = currResults[7][2];
	document.getElementById("Party8SeatChange").value = ((currResults[7][2]) - (prevResults[indexs[7]][2]) > 0 ? "+"+((currResults[7][2]) - (prevResults[indexs[7]][2])) : ((currResults[7][2]) - (prevResults[indexs[7]][2])));
	document.getElementById("Party8SeatShare").value = Math.round(((currResults[7][2]) / currTotalSeats * 100) * 10) / 10;	

	document.getElementById("TotalName").value = "TOTAL";
	document.getElementById("TotalVotes").value = totalVotesCurr;
	document.getElementById("TotalVoteShare").value = "100%";
	document.getElementById("TotalSwing").value = "N/A";
	document.getElementById("TotalSeats").value = currTotalSeats;
	document.getElementById("TotalSeatChange").value = ((currTotalSeats) - (prevTotalSeats) > 0 ? "+"+((currTotalSeats) - (prevTotalSeats)) : ((currTotalSeats) - (prevTotalSeats)));
	document.getElementById("TotalSeatShare").value = "100%";	


}

displayCurrentProjection();


