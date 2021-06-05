var corner1 = L.latLng(62.557, -12),
corner2 = L.latLng(49.469, 5.67),
bounds = L.latLngBounds(corner1, corner2);

var stateMode = true;
var sainteLagueModification = 1.4;

var map = L.map('map', {
    center: [55.5, -4],
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


prevConservativeVoteShare = 44.7;
prevLabourVoteShare = 33.0;
prevLibDemVoteShare = 11.8;
prevBrexitVoteShare = 2.1;
prevGreenVoteShare = 2.8;
prevSNPVoteShare = 4.0;
prevPlaidVoteShare = 0.5;

ConservativeModifier = 1 + ((ConservativePrediction - prevConservativeVoteShare) / prevConservativeVoteShare);
LabourModifier = 1 + ((LabourPrediction - prevLabourVoteShare) / prevLabourVoteShare);
LibDemModifier = 1 + ((LibDemPrediction - prevLibDemVoteShare) / prevLibDemVoteShare);
BrexitModifier = 1 + ((BrexitPrediction - prevBrexitVoteShare) / prevBrexitVoteShare);
GreenModifier = 1 + ((GreenPrediction - prevGreenVoteShare) / prevGreenVoteShare);
SNPModifier = 1 + ((SNPPrediction - prevSNPVoteShare) / prevSNPVoteShare);
PlaidModifier = 1 + ((PlaidPrediction - prevPlaidVoteShare) / prevPlaidVoteShare);


var constituencies = L.geoJson(westminsterConstituencies, {
	style: styleConstituencies,
	onEachFeature: onEachFeatureConstituencies
}).addTo(map);




tempArray = new Array(18);
index = 0;

constituencies.eachLayer(function(currentLayer){
	tempArray[index] = fillConstituencyArrays(currentLayer.feature, true);
	index++;
});

prevResultsAVO = tempArray[47];
prevResultsBED = tempArray[67];
prevResultsBER = tempArray[50];
prevResultsBUK = tempArray[52];
prevResultsCAM = tempArray[66];
prevResultsCNL = tempArray[63];
prevResultsCHE = tempArray[22];
prevResultsCLW = tempArray[17];
prevResultsCOR = tempArray[43];
prevResultsDUR = tempArray[20];
prevResultsCUM = tempArray[26];
prevResultsDER = tempArray[31];
prevResultsDEV = tempArray[44];
prevResultsDOR = tempArray[45];
prevResultsDYF = tempArray[14];
prevResultsESU = tempArray[54];
prevResultsESS = tempArray[69];
prevResultsFIF = tempArray[4];
prevResultsGLA = tempArray[7];
prevResultsGLO = tempArray[48];
prevResultsGRA = tempArray[2];
prevResultsGMA = tempArray[24];
prevResultsGWE = tempArray[10];
prevResultsGWY = tempArray[16];
prevResultsHAM = tempArray[56];
prevResultsHER = tempArray[36];
prevResultsHET = tempArray[68];
prevResultsHAI = tempArray[1];
prevResultsHUM = tempArray[28];
prevResultsKEN = tempArray[57];
prevResultsLAK = tempArray[6];
prevResultsLAC = tempArray[25];
prevResultsLAR = tempArray[32];
prevResultsLIN = tempArray[33];
prevResultsLOT = tempArray[5];
prevResultsMER = tempArray[23];
prevResultsMGL = tempArray[12];
prevResultsNOR = tempArray[65];
prevResultsNEL = tempArray[59];
prevResultsNLO = tempArray[58];
prevResultsNYK = tempArray[27];
prevResultsNTH = tempArray[34];
prevResultsNIR = tempArray[0];
prevResultsNOU = tempArray[18];
prevResultsNOT = tempArray[35];
prevResultsOXF = tempArray[51];
prevResultsPOW = tempArray[15];
prevResultsSHR = tempArray[37];
prevResultsSOM = tempArray[49];
prevResultsSCL = tempArray[61];
prevResultsSEL = tempArray[60];
prevResultsSGL = tempArray[11];
prevResultsSSC = tempArray[9];
prevResultsSYK = tempArray[30];
prevResultsSTA = tempArray[40];
prevResultsSTR = tempArray[8];
prevResultsSUF = tempArray[64];
prevResultsSUR = tempArray[53];
prevResultsTAY = tempArray[3];
prevResultsTEE = tempArray[21];
prevResultsTYN = tempArray[19];
prevResultsWAR = tempArray[39];
prevResultsWGL = tempArray[13];
prevResultsWLO = tempArray[62];
prevResultsWME = tempArray[41];
prevResultsWMW = tempArray[42];
prevResultsWSU = tempArray[55];
prevResultsWYK = tempArray[29];
prevResultsWIL = tempArray[46];
prevResultsWOR = tempArray[38];


tempArray = new Array(18);
index = 0;

constituencies.eachLayer(function(currentLayer){
	tempArray[index] = fillConstituencyArrays(currentLayer.feature, false);
	index++;
});


currResultsAVO = tempArray[47];
currResultsBED = tempArray[67];
currResultsBER = tempArray[50];
currResultsBUK = tempArray[52];
currResultsCAM = tempArray[66];
currResultsCNL = tempArray[63];
currResultsCHE = tempArray[22];
currResultsCLW = tempArray[17];
currResultsCOR = tempArray[43];
currResultsDUR = tempArray[20];
currResultsCUM = tempArray[26];
currResultsDER = tempArray[31];
currResultsDEV = tempArray[44];
currResultsDOR = tempArray[45];
currResultsDYF = tempArray[14];
currResultsESU = tempArray[54];
currResultsESS = tempArray[69];
currResultsFIF = tempArray[4];
currResultsGLA = tempArray[7];
currResultsGLO = tempArray[48];
currResultsGRA = tempArray[2];
currResultsGMA = tempArray[24];
currResultsGWE = tempArray[10];
currResultsGWY = tempArray[16];
currResultsHAM = tempArray[56];
currResultsHER = tempArray[36];
currResultsHET = tempArray[68];
currResultsHAI = tempArray[1];
currResultsHUM = tempArray[28];
currResultsKEN = tempArray[57];
currResultsLAK = tempArray[6];
currResultsLAC = tempArray[25];
currResultsLAR = tempArray[32];
currResultsLIN = tempArray[33];
currResultsLOT = tempArray[5];
currResultsMER = tempArray[23];
currResultsMGL = tempArray[12];
currResultsNOR = tempArray[65];
currResultsNEL = tempArray[59];
currResultsNLO = tempArray[58];
currResultsNYK = tempArray[27];
currResultsNTH = tempArray[34];
currResultsNIR = tempArray[0];
currResultsNOU = tempArray[18];
currResultsNOT = tempArray[35];
currResultsOXF = tempArray[51];
currResultsPOW = tempArray[15];
currResultsSHR = tempArray[37];
currResultsSOM = tempArray[49];
currResultsSCL = tempArray[61];
currResultsSEL = tempArray[60];
currResultsSGL = tempArray[11];
currResultsSSC = tempArray[9];
currResultsSYK = tempArray[30];
currResultsSTA = tempArray[40];
currResultsSTR = tempArray[8];
currResultsSUF = tempArray[64];
currResultsSUR = tempArray[53];
currResultsTAY = tempArray[3];
currResultsTEE = tempArray[21];
currResultsTYN = tempArray[19];
currResultsWAR = tempArray[39];
currResultsWGL = tempArray[13];
currResultsWLO = tempArray[62];
currResultsWME = tempArray[41];
currResultsWMW = tempArray[42];
currResultsWSU = tempArray[55];
currResultsWYK = tempArray[29];
currResultsWIL = tempArray[46];
currResultsWOR = tempArray[38];

var currNationalResults;
prevNationalResults = fillNationalArray();

var ConservativeThreshold = true, LabourThreshold = true, LibDemThreshold = true, RefUKThreshold = false, GreenThreshold = false, SNPThreshold = true, PlaidThreshold = true;

prevResultsAVO.sort(sortFunctionC);
prevResultsBED.sort(sortFunctionC);
prevResultsBER.sort(sortFunctionC);
prevResultsBUK.sort(sortFunctionC);
prevResultsCAM.sort(sortFunctionC);
prevResultsCNL.sort(sortFunctionC);
prevResultsCHE.sort(sortFunctionC);
prevResultsCLW.sort(sortFunctionC);
prevResultsCOR.sort(sortFunctionC);
prevResultsDUR.sort(sortFunctionC);
prevResultsCUM.sort(sortFunctionC);
prevResultsDER.sort(sortFunctionC);
prevResultsDEV.sort(sortFunctionC);
prevResultsDOR.sort(sortFunctionC);
prevResultsDYF.sort(sortFunctionC);
prevResultsESU.sort(sortFunctionC);
prevResultsESS.sort(sortFunctionC);
prevResultsFIF.sort(sortFunctionC);
prevResultsGLA.sort(sortFunctionC);
prevResultsGLO.sort(sortFunctionC);
prevResultsGRA.sort(sortFunctionC);
prevResultsGMA.sort(sortFunctionC);
prevResultsGWE.sort(sortFunctionC);
prevResultsGWY.sort(sortFunctionC);
prevResultsHAM.sort(sortFunctionC);
prevResultsHER.sort(sortFunctionC);
prevResultsHET.sort(sortFunctionC);
prevResultsHAI.sort(sortFunctionC);
prevResultsHUM.sort(sortFunctionC);
prevResultsKEN.sort(sortFunctionC);
prevResultsLAK.sort(sortFunctionC);
prevResultsLAC.sort(sortFunctionC);
prevResultsLAR.sort(sortFunctionC);
prevResultsLIN.sort(sortFunctionC);
prevResultsLOT.sort(sortFunctionC);
prevResultsMER.sort(sortFunctionC);
prevResultsMGL.sort(sortFunctionC);
prevResultsNOR.sort(sortFunctionC);
prevResultsNEL.sort(sortFunctionC);
prevResultsNLO.sort(sortFunctionC);
prevResultsNYK.sort(sortFunctionC);
prevResultsNTH.sort(sortFunctionC);
prevResultsNIR.sort(sortFunctionC);
prevResultsNOU.sort(sortFunctionC);
prevResultsNOT.sort(sortFunctionC);
prevResultsOXF.sort(sortFunctionC);
prevResultsPOW.sort(sortFunctionC);
prevResultsSHR.sort(sortFunctionC);
prevResultsSOM.sort(sortFunctionC);
prevResultsSCL.sort(sortFunctionC);
prevResultsSEL.sort(sortFunctionC);
prevResultsSGL.sort(sortFunctionC);
prevResultsSSC.sort(sortFunctionC);
prevResultsSYK.sort(sortFunctionC);
prevResultsSTA.sort(sortFunctionC);
prevResultsSTR.sort(sortFunctionC);
prevResultsSUF.sort(sortFunctionC);
prevResultsSUR.sort(sortFunctionC);
prevResultsTAY.sort(sortFunctionC);
prevResultsTEE.sort(sortFunctionC);
prevResultsTYN.sort(sortFunctionC);
prevResultsWAR.sort(sortFunctionC);
prevResultsWGL.sort(sortFunctionC);
prevResultsWLO.sort(sortFunctionC);
prevResultsWME.sort(sortFunctionC);
prevResultsWMW.sort(sortFunctionC);
prevResultsWSU.sort(sortFunctionC);
prevResultsWYK.sort(sortFunctionC);
prevResultsWIL.sort(sortFunctionC);
prevResultsWOR.sort(sortFunctionC);


prevNationalResults.sort(sortFunctionC);

thresholdImplementor(1, ConservativeThreshold, true);
thresholdImplementor(3, GreenThreshold, true);
thresholdImplementor(4, LabourThreshold, true);
thresholdImplementor(5, LibDemThreshold, true);
thresholdImplementor(6, PlaidThreshold, true);
thresholdImplementor(7, RefUKThreshold, true);
thresholdImplementor(9, SNPThreshold, true);
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
	//console.log(noOfSeats);
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
		
	var noOfAdjustmentSeats = 130;
	
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
	
	//a = partyArray;
	//console.log(a);
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
		
		
		prevResultsAVO[partyIndex][2] = partyArray[0][2];
		prevResultsBED[partyIndex][2] = partyArray[1][2];
		prevResultsBER[partyIndex][2] = partyArray[2][2];
		prevResultsBUK[partyIndex][2] = partyArray[3][2];
		prevResultsCAM[partyIndex][2] = partyArray[4][2];
		prevResultsCNL[partyIndex][2] = partyArray[7][2];
		prevResultsCHE[partyIndex][2] = partyArray[5][2];
		prevResultsCLW[partyIndex][2] = partyArray[6][2];
		prevResultsCOR[partyIndex][2] = partyArray[8][2];
		prevResultsDUR[partyIndex][2] = partyArray[13][2];
		prevResultsCUM[partyIndex][2] = partyArray[9][2];
		prevResultsDER[partyIndex][2] = partyArray[10][2];
		prevResultsDEV[partyIndex][2] = partyArray[11][2];
		prevResultsDOR[partyIndex][2] = partyArray[12][2];
		prevResultsDYF[partyIndex][2] = partyArray[14][2];
		prevResultsESU[partyIndex][2] = partyArray[16][2];
		prevResultsESS[partyIndex][2] = partyArray[15][2];
		prevResultsFIF[partyIndex][2] = partyArray[17][2];
		prevResultsGLA[partyIndex][2] = partyArray[18][2];
		prevResultsGLO[partyIndex][2] = partyArray[19][2];
		prevResultsGRA[partyIndex][2] = partyArray[21][2];
		prevResultsGMA[partyIndex][2] = partyArray[20][2];
		prevResultsGWE[partyIndex][2] = partyArray[22][2];
		prevResultsGWY[partyIndex][2] = partyArray[23][2];
		prevResultsHAM[partyIndex][2] = partyArray[25][2];
		prevResultsHER[partyIndex][2] = partyArray[26][2];
		prevResultsHET[partyIndex][2] = partyArray[27][2];
		prevResultsHAI[partyIndex][2] = partyArray[24][2];
		prevResultsHUM[partyIndex][2] = partyArray[28][2];
		prevResultsKEN[partyIndex][2] = partyArray[29][2];
		prevResultsLAK[partyIndex][2] = partyArray[31][2];
		prevResultsLAC[partyIndex][2] = partyArray[30][2];
		prevResultsLAR[partyIndex][2] = partyArray[32][2];
		prevResultsLIN[partyIndex][2] = partyArray[33][2];
		prevResultsLOT[partyIndex][2] = partyArray[34][2];
		prevResultsMER[partyIndex][2] = partyArray[35][2];
		prevResultsMGL[partyIndex][2] = partyArray[36][2];
		prevResultsNOR[partyIndex][2] = partyArray[40][2];
		prevResultsNEL[partyIndex][2] = partyArray[37][2];
		prevResultsNLO[partyIndex][2] = partyArray[39][2];
		prevResultsNYK[partyIndex][2] = partyArray[44][2];
		prevResultsNTH[partyIndex][2] = partyArray[43][2];
		prevResultsNIR[partyIndex][2] = partyArray[38][2];
		prevResultsNOU[partyIndex][2] = partyArray[42][2];
		prevResultsNOT[partyIndex][2] = partyArray[41][2];
		prevResultsOXF[partyIndex][2] = partyArray[45][2];
		prevResultsPOW[partyIndex][2] = partyArray[46][2];
		prevResultsSHR[partyIndex][2] = partyArray[50][2];
		prevResultsSOM[partyIndex][2] = partyArray[51][2];
		prevResultsSCL[partyIndex][2] = partyArray[47][2];
		prevResultsSEL[partyIndex][2] = partyArray[48][2];
		prevResultsSGL[partyIndex][2] = partyArray[49][2];
		prevResultsSSC[partyIndex][2] = partyArray[52][2];
		prevResultsSYK[partyIndex][2] = partyArray[57][2];
		prevResultsSTA[partyIndex][2] = partyArray[53][2];
		prevResultsSTR[partyIndex][2] = partyArray[54][2];
		prevResultsSUF[partyIndex][2] = partyArray[55][2];
		prevResultsSUR[partyIndex][2] = partyArray[56][2];
		prevResultsTAY[partyIndex][2] = partyArray[58][2];
		prevResultsTEE[partyIndex][2] = partyArray[59][2];
		prevResultsTYN[partyIndex][2] = partyArray[60][2];
		prevResultsWAR[partyIndex][2] = partyArray[61][2];
		prevResultsWGL[partyIndex][2] = partyArray[62][2];
		prevResultsWLO[partyIndex][2] = partyArray[64][2];
		prevResultsWME[partyIndex][2] = partyArray[65][2];
		prevResultsWMW[partyIndex][2] = partyArray[66][2];
		prevResultsWSU[partyIndex][2] = partyArray[68][2];
		prevResultsWYK[partyIndex][2] = partyArray[69][2];
		prevResultsWIL[partyIndex][2] = partyArray[63][2];
		prevResultsWOR[partyIndex][2] = partyArray[67][2];
		
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
		
		console.log(partyArray);

		currResultsAVO[partyIndex][2] = partyArray[0][2];
		currResultsBED[partyIndex][2] = partyArray[1][2];
		currResultsBER[partyIndex][2] = partyArray[2][2];
		currResultsBUK[partyIndex][2] = partyArray[3][2];
		currResultsCAM[partyIndex][2] = partyArray[4][2];
		currResultsCNL[partyIndex][2] = partyArray[7][2];
		currResultsCHE[partyIndex][2] = partyArray[5][2];
		currResultsCLW[partyIndex][2] = partyArray[6][2];
		currResultsCOR[partyIndex][2] = partyArray[8][2];
		currResultsDUR[partyIndex][2] = partyArray[13][2];
		currResultsCUM[partyIndex][2] = partyArray[9][2];
		currResultsDER[partyIndex][2] = partyArray[10][2];
		currResultsDEV[partyIndex][2] = partyArray[11][2];
		currResultsDOR[partyIndex][2] = partyArray[12][2];
		currResultsDYF[partyIndex][2] = partyArray[14][2];
		currResultsESU[partyIndex][2] = partyArray[16][2];
		currResultsESS[partyIndex][2] = partyArray[15][2];
		currResultsFIF[partyIndex][2] = partyArray[17][2];
		currResultsGLA[partyIndex][2] = partyArray[18][2];
		currResultsGLO[partyIndex][2] = partyArray[19][2];
		currResultsGRA[partyIndex][2] = partyArray[21][2];
		currResultsGMA[partyIndex][2] = partyArray[20][2];
		currResultsGWE[partyIndex][2] = partyArray[22][2];
		currResultsGWY[partyIndex][2] = partyArray[23][2];
		currResultsHAM[partyIndex][2] = partyArray[25][2];
		currResultsHER[partyIndex][2] = partyArray[26][2];
		currResultsHET[partyIndex][2] = partyArray[27][2];
		currResultsHAI[partyIndex][2] = partyArray[24][2];
		currResultsHUM[partyIndex][2] = partyArray[28][2];
		currResultsKEN[partyIndex][2] = partyArray[29][2];
		currResultsLAK[partyIndex][2] = partyArray[31][2];
		currResultsLAC[partyIndex][2] = partyArray[30][2];
		currResultsLAR[partyIndex][2] = partyArray[32][2];
		currResultsLIN[partyIndex][2] = partyArray[33][2];
		currResultsLOT[partyIndex][2] = partyArray[34][2];
		currResultsMER[partyIndex][2] = partyArray[35][2];
		currResultsMGL[partyIndex][2] = partyArray[36][2];
		currResultsNOR[partyIndex][2] = partyArray[40][2];
		currResultsNEL[partyIndex][2] = partyArray[37][2];
		currResultsNLO[partyIndex][2] = partyArray[39][2];
		currResultsNYK[partyIndex][2] = partyArray[44][2];
		currResultsNTH[partyIndex][2] = partyArray[43][2];
		currResultsNIR[partyIndex][2] = partyArray[38][2];
		currResultsNOU[partyIndex][2] = partyArray[42][2];
		currResultsNOT[partyIndex][2] = partyArray[41][2];
		currResultsOXF[partyIndex][2] = partyArray[45][2];
		currResultsPOW[partyIndex][2] = partyArray[46][2];
		currResultsSHR[partyIndex][2] = partyArray[50][2];
		currResultsSOM[partyIndex][2] = partyArray[51][2];
		currResultsSCL[partyIndex][2] = partyArray[47][2];
		currResultsSEL[partyIndex][2] = partyArray[48][2];
		currResultsSGL[partyIndex][2] = partyArray[49][2];
		currResultsSSC[partyIndex][2] = partyArray[52][2];
		currResultsSYK[partyIndex][2] = partyArray[57][2];
		currResultsSTA[partyIndex][2] = partyArray[53][2];
		currResultsSTR[partyIndex][2] = partyArray[54][2];
		currResultsSUF[partyIndex][2] = partyArray[55][2];
		currResultsSUR[partyIndex][2] = partyArray[56][2];
		currResultsTAY[partyIndex][2] = partyArray[58][2];
		currResultsTEE[partyIndex][2] = partyArray[59][2];
		currResultsTYN[partyIndex][2] = partyArray[60][2];
		currResultsWAR[partyIndex][2] = partyArray[61][2];
		currResultsWGL[partyIndex][2] = partyArray[62][2];
		currResultsWLO[partyIndex][2] = partyArray[64][2];
		currResultsWME[partyIndex][2] = partyArray[65][2];
		currResultsWMW[partyIndex][2] = partyArray[66][2];
		currResultsWSU[partyIndex][2] = partyArray[68][2];
		currResultsWYK[partyIndex][2] = partyArray[69][2];
		currResultsWIL[partyIndex][2] = partyArray[63][2];
		currResultsWOR[partyIndex][2] = partyArray[67][2];

		
	}

}

function nationalResultsToConstituencyLevelInit(initialisation) {
	
	if (initialisation)
	{
		prevResultsAVO.sort(sortFunctionC);
		prevResultsBED.sort(sortFunctionC);
		prevResultsBER.sort(sortFunctionC);
		prevResultsBUK.sort(sortFunctionC);
		prevResultsCAM.sort(sortFunctionC);
		prevResultsCNL.sort(sortFunctionC);
		prevResultsCHE.sort(sortFunctionC);
		prevResultsCLW.sort(sortFunctionC);
		prevResultsCOR.sort(sortFunctionC);
		prevResultsDUR.sort(sortFunctionC);
		prevResultsCUM.sort(sortFunctionC);
		prevResultsDER.sort(sortFunctionC);
		prevResultsDEV.sort(sortFunctionC);
		prevResultsDOR.sort(sortFunctionC);
		prevResultsDYF.sort(sortFunctionC);
		prevResultsESU.sort(sortFunctionC);
		prevResultsESS.sort(sortFunctionC);
		prevResultsFIF.sort(sortFunctionC);
		prevResultsGLA.sort(sortFunctionC);
		prevResultsGLO.sort(sortFunctionC);
		prevResultsGRA.sort(sortFunctionC);
		prevResultsGMA.sort(sortFunctionC);
		prevResultsGWE.sort(sortFunctionC);
		prevResultsGWY.sort(sortFunctionC);
		prevResultsHAM.sort(sortFunctionC);
		prevResultsHER.sort(sortFunctionC);
		prevResultsHET.sort(sortFunctionC);
		prevResultsHAI.sort(sortFunctionC);
		prevResultsHUM.sort(sortFunctionC);
		prevResultsKEN.sort(sortFunctionC);
		prevResultsLAK.sort(sortFunctionC);
		prevResultsLAC.sort(sortFunctionC);
		prevResultsLAR.sort(sortFunctionC);
		prevResultsLIN.sort(sortFunctionC);
		prevResultsLOT.sort(sortFunctionC);
		prevResultsMER.sort(sortFunctionC);
		prevResultsMGL.sort(sortFunctionC);
		prevResultsNOR.sort(sortFunctionC);
		prevResultsNEL.sort(sortFunctionC);
		prevResultsNLO.sort(sortFunctionC);
		prevResultsNYK.sort(sortFunctionC);
		prevResultsNTH.sort(sortFunctionC);
		prevResultsNIR.sort(sortFunctionC);
		prevResultsNOU.sort(sortFunctionC);
		prevResultsNOT.sort(sortFunctionC);
		prevResultsOXF.sort(sortFunctionC);
		prevResultsPOW.sort(sortFunctionC);
		prevResultsSHR.sort(sortFunctionC);
		prevResultsSOM.sort(sortFunctionC);
		prevResultsSCL.sort(sortFunctionC);
		prevResultsSEL.sort(sortFunctionC);
		prevResultsSGL.sort(sortFunctionC);
		prevResultsSSC.sort(sortFunctionC);
		prevResultsSYK.sort(sortFunctionC);
		prevResultsSTA.sort(sortFunctionC);
		prevResultsSTR.sort(sortFunctionC);
		prevResultsSUF.sort(sortFunctionC);
		prevResultsSUR.sort(sortFunctionC);
		prevResultsTAY.sort(sortFunctionC);
		prevResultsTEE.sort(sortFunctionC);
		prevResultsTYN.sort(sortFunctionC);
		prevResultsWAR.sort(sortFunctionC);
		prevResultsWGL.sort(sortFunctionC);
		prevResultsWLO.sort(sortFunctionC);
		prevResultsWME.sort(sortFunctionC);
		prevResultsWMW.sort(sortFunctionC);
		prevResultsWSU.sort(sortFunctionC);
		prevResultsWYK.sort(sortFunctionC);
		prevResultsWIL.sort(sortFunctionC);
		prevResultsWOR.sort(sortFunctionC);
		prevNationalResults.sort(sortFunctionC);
		
		var AllianceArray  = [["AVO",prevResultsAVO[0][1], prevResultsAVO[0][2], prevResultsAVO[0][1]],
					["BED",prevResultsBED[0][1], prevResultsBED[0][2], prevResultsBED[0][1]],
					["BER",prevResultsBER[0][1], prevResultsBER[0][2], prevResultsBER[0][1]],
					["BUK",prevResultsBUK[0][1], prevResultsBUK[0][2], prevResultsBUK[0][1]],
					["CAM",prevResultsCAM[0][1], prevResultsCAM[0][2], prevResultsCAM[0][1]],
					["CNL",prevResultsCNL[0][1], prevResultsCNL[0][2], prevResultsCNL[0][1]],
					["CHE",prevResultsCHE[0][1], prevResultsCHE[0][2], prevResultsCHE[0][1]],
					["CLW",prevResultsCLW[0][1], prevResultsCLW[0][2], prevResultsCLW[0][1]],
					["COR",prevResultsCOR[0][1], prevResultsCOR[0][2], prevResultsCOR[0][1]],
					["DUR",prevResultsDUR[0][1], prevResultsDUR[0][2], prevResultsDUR[0][1]],
					["CUM",prevResultsCUM[0][1], prevResultsCUM[0][2], prevResultsCUM[0][1]],
					["DER",prevResultsDER[0][1], prevResultsDER[0][2], prevResultsDER[0][1]],
					["DEV",prevResultsDEV[0][1], prevResultsDEV[0][2], prevResultsDEV[0][1]],
					["DOR",prevResultsDOR[0][1], prevResultsDOR[0][2], prevResultsDOR[0][1]],
					["DYF",prevResultsDYF[0][1], prevResultsDYF[0][2], prevResultsDYF[0][1]],
					["ESU",prevResultsESU[0][1], prevResultsESU[0][2], prevResultsESU[0][1]],
					["ESS",prevResultsESS[0][1], prevResultsESS[0][2], prevResultsESS[0][1]],
					["FIF",prevResultsFIF[0][1], prevResultsFIF[0][2], prevResultsFIF[0][1]],
					["GLA",prevResultsGLA[0][1], prevResultsGLA[0][2], prevResultsGLA[0][1]],
					["GLO",prevResultsGLO[0][1], prevResultsGLO[0][2], prevResultsGLO[0][1]],
					["GRA",prevResultsGRA[0][1], prevResultsGRA[0][2], prevResultsGRA[0][1]],
					["GMA",prevResultsGMA[0][1], prevResultsGMA[0][2], prevResultsGMA[0][1]],
					["GWE",prevResultsGWE[0][1], prevResultsGWE[0][2], prevResultsGWE[0][1]],
					["GWY",prevResultsGWY[0][1], prevResultsGWY[0][2], prevResultsGWY[0][1]],
					["HAM",prevResultsHAM[0][1], prevResultsHAM[0][2], prevResultsHAM[0][1]],
					["HER",prevResultsHER[0][1], prevResultsHER[0][2], prevResultsHER[0][1]],
					["HET",prevResultsHET[0][1], prevResultsHET[0][2], prevResultsHET[0][1]],
					["HAI",prevResultsHAI[0][1], prevResultsHAI[0][2], prevResultsHAI[0][1]],
					["HUM",prevResultsHUM[0][1], prevResultsHUM[0][2], prevResultsHUM[0][1]],
					["KEN",prevResultsKEN[0][1], prevResultsKEN[0][2], prevResultsKEN[0][1]],
					["LAK",prevResultsLAK[0][1], prevResultsLAK[0][2], prevResultsLAK[0][1]],
					["LAC",prevResultsLAC[0][1], prevResultsLAC[0][2], prevResultsLAC[0][1]],
					["LAR",prevResultsLAR[0][1], prevResultsLAR[0][2], prevResultsLAR[0][1]],
					["LIN",prevResultsLIN[0][1], prevResultsLIN[0][2], prevResultsLIN[0][1]],
					["LOT",prevResultsLOT[0][1], prevResultsLOT[0][2], prevResultsLOT[0][1]],
					["MER",prevResultsMER[0][1], prevResultsMER[0][2], prevResultsMER[0][1]],
					["MGL",prevResultsMGL[0][1], prevResultsMGL[0][2], prevResultsMGL[0][1]],
					["NOR",prevResultsNOR[0][1], prevResultsNOR[0][2], prevResultsNOR[0][1]],
					["NEL",prevResultsNEL[0][1], prevResultsNEL[0][2], prevResultsNEL[0][1]],
					["NLO",prevResultsNLO[0][1], prevResultsNLO[0][2], prevResultsNLO[0][1]],
					["NYK",prevResultsNYK[0][1], prevResultsNYK[0][2], prevResultsNYK[0][1]],
					["NTH",prevResultsNTH[0][1], prevResultsNTH[0][2], prevResultsNTH[0][1]],
					["NIR",prevResultsNIR[0][1], prevResultsNIR[0][2], prevResultsNIR[0][1]],
					["NOU",prevResultsNOU[0][1], prevResultsNOU[0][2], prevResultsNOU[0][1]],
					["NOT",prevResultsNOT[0][1], prevResultsNOT[0][2], prevResultsNOT[0][1]],
					["OXF",prevResultsOXF[0][1], prevResultsOXF[0][2], prevResultsOXF[0][1]],
					["POW",prevResultsPOW[0][1], prevResultsPOW[0][2], prevResultsPOW[0][1]],
					["SHR",prevResultsSHR[0][1], prevResultsSHR[0][2], prevResultsSHR[0][1]],
					["SOM",prevResultsSOM[0][1], prevResultsSOM[0][2], prevResultsSOM[0][1]],
					["SCL",prevResultsSCL[0][1], prevResultsSCL[0][2], prevResultsSCL[0][1]],
					["SEL",prevResultsSEL[0][1], prevResultsSEL[0][2], prevResultsSEL[0][1]],
					["SGL",prevResultsSGL[0][1], prevResultsSGL[0][2], prevResultsSGL[0][1]],
					["SSC",prevResultsSSC[0][1], prevResultsSSC[0][2], prevResultsSSC[0][1]],
					["SYK",prevResultsSYK[0][1], prevResultsSYK[0][2], prevResultsSYK[0][1]],
					["STA",prevResultsSTA[0][1], prevResultsSTA[0][2], prevResultsSTA[0][1]],
					["STR",prevResultsSTR[0][1], prevResultsSTR[0][2], prevResultsSTR[0][1]],
					["SUF",prevResultsSUF[0][1], prevResultsSUF[0][2], prevResultsSUF[0][1]],
					["SUR",prevResultsSUR[0][1], prevResultsSUR[0][2], prevResultsSUR[0][1]],
					["TAY",prevResultsTAY[0][1], prevResultsTAY[0][2], prevResultsTAY[0][1]],
					["TEE",prevResultsTEE[0][1], prevResultsTEE[0][2], prevResultsTEE[0][1]],
					["TYN",prevResultsTYN[0][1], prevResultsTYN[0][2], prevResultsTYN[0][1]],
					["WAR",prevResultsWAR[0][1], prevResultsWAR[0][2], prevResultsWAR[0][1]],
					["WGL",prevResultsWGL[0][1], prevResultsWGL[0][2], prevResultsWGL[0][1]],
					["WLO",prevResultsWLO[0][1], prevResultsWLO[0][2], prevResultsWLO[0][1]],
					["WME",prevResultsWME[0][1], prevResultsWME[0][2], prevResultsWME[0][1]],
					["WMW",prevResultsWMW[0][1], prevResultsWMW[0][2], prevResultsWMW[0][1]],
					["WSU",prevResultsWSU[0][1], prevResultsWSU[0][2], prevResultsWSU[0][1]],
					["WYK",prevResultsWYK[0][1], prevResultsWYK[0][2], prevResultsWYK[0][1]],
					["WIL",prevResultsWIL[0][1], prevResultsWIL[0][2], prevResultsWIL[0][1]],
					["WOR",prevResultsWOR[0][1], prevResultsWOR[0][2], prevResultsWOR[0][1]]];

		var ConservativeArray  = [["AVO",prevResultsAVO[1][1], prevResultsAVO[1][2], prevResultsAVO[1][1]],
					["BED",prevResultsBED[1][1], prevResultsBED[1][2], prevResultsBED[1][1]],
					["BER",prevResultsBER[1][1], prevResultsBER[1][2], prevResultsBER[1][1]],
					["BUK",prevResultsBUK[1][1], prevResultsBUK[1][2], prevResultsBUK[1][1]],
					["CAM",prevResultsCAM[1][1], prevResultsCAM[1][2], prevResultsCAM[1][1]],
					["CNL",prevResultsCNL[1][1], prevResultsCNL[1][2], prevResultsCNL[1][1]],
					["CHE",prevResultsCHE[1][1], prevResultsCHE[1][2], prevResultsCHE[1][1]],
					["CLW",prevResultsCLW[1][1], prevResultsCLW[1][2], prevResultsCLW[1][1]],
					["COR",prevResultsCOR[1][1], prevResultsCOR[1][2], prevResultsCOR[1][1]],
					["DUR",prevResultsDUR[1][1], prevResultsDUR[1][2], prevResultsDUR[1][1]],
					["CUM",prevResultsCUM[1][1], prevResultsCUM[1][2], prevResultsCUM[1][1]],
					["DER",prevResultsDER[1][1], prevResultsDER[1][2], prevResultsDER[1][1]],
					["DEV",prevResultsDEV[1][1], prevResultsDEV[1][2], prevResultsDEV[1][1]],
					["DOR",prevResultsDOR[1][1], prevResultsDOR[1][2], prevResultsDOR[1][1]],
					["DYF",prevResultsDYF[1][1], prevResultsDYF[1][2], prevResultsDYF[1][1]],
					["ESU",prevResultsESU[1][1], prevResultsESU[1][2], prevResultsESU[1][1]],
					["ESS",prevResultsESS[1][1], prevResultsESS[1][2], prevResultsESS[1][1]],
					["FIF",prevResultsFIF[1][1], prevResultsFIF[1][2], prevResultsFIF[1][1]],
					["GLA",prevResultsGLA[1][1], prevResultsGLA[1][2], prevResultsGLA[1][1]],
					["GLO",prevResultsGLO[1][1], prevResultsGLO[1][2], prevResultsGLO[1][1]],
					["GRA",prevResultsGRA[1][1], prevResultsGRA[1][2], prevResultsGRA[1][1]],
					["GMA",prevResultsGMA[1][1], prevResultsGMA[1][2], prevResultsGMA[1][1]],
					["GWE",prevResultsGWE[1][1], prevResultsGWE[1][2], prevResultsGWE[1][1]],
					["GWY",prevResultsGWY[1][1], prevResultsGWY[1][2], prevResultsGWY[1][1]],
					["HAM",prevResultsHAM[1][1], prevResultsHAM[1][2], prevResultsHAM[1][1]],
					["HER",prevResultsHER[1][1], prevResultsHER[1][2], prevResultsHER[1][1]],
					["HET",prevResultsHET[1][1], prevResultsHET[1][2], prevResultsHET[1][1]],
					["HAI",prevResultsHAI[1][1], prevResultsHAI[1][2], prevResultsHAI[1][1]],
					["HUM",prevResultsHUM[1][1], prevResultsHUM[1][2], prevResultsHUM[1][1]],
					["KEN",prevResultsKEN[1][1], prevResultsKEN[1][2], prevResultsKEN[1][1]],
					["LAK",prevResultsLAK[1][1], prevResultsLAK[1][2], prevResultsLAK[1][1]],
					["LAC",prevResultsLAC[1][1], prevResultsLAC[1][2], prevResultsLAC[1][1]],
					["LAR",prevResultsLAR[1][1], prevResultsLAR[1][2], prevResultsLAR[1][1]],
					["LIN",prevResultsLIN[1][1], prevResultsLIN[1][2], prevResultsLIN[1][1]],
					["LOT",prevResultsLOT[1][1], prevResultsLOT[1][2], prevResultsLOT[1][1]],
					["MER",prevResultsMER[1][1], prevResultsMER[1][2], prevResultsMER[1][1]],
					["MGL",prevResultsMGL[1][1], prevResultsMGL[1][2], prevResultsMGL[1][1]],
					["NOR",prevResultsNOR[1][1], prevResultsNOR[1][2], prevResultsNOR[1][1]],
					["NEL",prevResultsNEL[1][1], prevResultsNEL[1][2], prevResultsNEL[1][1]],
					["NLO",prevResultsNLO[1][1], prevResultsNLO[1][2], prevResultsNLO[1][1]],
					["NYK",prevResultsNYK[1][1], prevResultsNYK[1][2], prevResultsNYK[1][1]],
					["NTH",prevResultsNTH[1][1], prevResultsNTH[1][2], prevResultsNTH[1][1]],
					["NIR",prevResultsNIR[1][1], prevResultsNIR[1][2], prevResultsNIR[1][1]],
					["NOU",prevResultsNOU[1][1], prevResultsNOU[1][2], prevResultsNOU[1][1]],
					["NOT",prevResultsNOT[1][1], prevResultsNOT[1][2], prevResultsNOT[1][1]],
					["OXF",prevResultsOXF[1][1], prevResultsOXF[1][2], prevResultsOXF[1][1]],
					["POW",prevResultsPOW[1][1], prevResultsPOW[1][2], prevResultsPOW[1][1]],
					["SHR",prevResultsSHR[1][1], prevResultsSHR[1][2], prevResultsSHR[1][1]],
					["SOM",prevResultsSOM[1][1], prevResultsSOM[1][2], prevResultsSOM[1][1]],
					["SCL",prevResultsSCL[1][1], prevResultsSCL[1][2], prevResultsSCL[1][1]],
					["SEL",prevResultsSEL[1][1], prevResultsSEL[1][2], prevResultsSEL[1][1]],
					["SGL",prevResultsSGL[1][1], prevResultsSGL[1][2], prevResultsSGL[1][1]],
					["SSC",prevResultsSSC[1][1], prevResultsSSC[1][2], prevResultsSSC[1][1]],
					["SYK",prevResultsSYK[1][1], prevResultsSYK[1][2], prevResultsSYK[1][1]],
					["STA",prevResultsSTA[1][1], prevResultsSTA[1][2], prevResultsSTA[1][1]],
					["STR",prevResultsSTR[1][1], prevResultsSTR[1][2], prevResultsSTR[1][1]],
					["SUF",prevResultsSUF[1][1], prevResultsSUF[1][2], prevResultsSUF[1][1]],
					["SUR",prevResultsSUR[1][1], prevResultsSUR[1][2], prevResultsSUR[1][1]],
					["TAY",prevResultsTAY[1][1], prevResultsTAY[1][2], prevResultsTAY[1][1]],
					["TEE",prevResultsTEE[1][1], prevResultsTEE[1][2], prevResultsTEE[1][1]],
					["TYN",prevResultsTYN[1][1], prevResultsTYN[1][2], prevResultsTYN[1][1]],
					["WAR",prevResultsWAR[1][1], prevResultsWAR[1][2], prevResultsWAR[1][1]],
					["WGL",prevResultsWGL[1][1], prevResultsWGL[1][2], prevResultsWGL[1][1]],
					["WLO",prevResultsWLO[1][1], prevResultsWLO[1][2], prevResultsWLO[1][1]],
					["WME",prevResultsWME[1][1], prevResultsWME[1][2], prevResultsWME[1][1]],
					["WMW",prevResultsWMW[1][1], prevResultsWMW[1][2], prevResultsWMW[1][1]],
					["WSU",prevResultsWSU[1][1], prevResultsWSU[1][2], prevResultsWSU[1][1]],
					["WYK",prevResultsWYK[1][1], prevResultsWYK[1][2], prevResultsWYK[1][1]],
					["WIL",prevResultsWIL[1][1], prevResultsWIL[1][2], prevResultsWIL[1][1]],
					["WOR",prevResultsWOR[1][1], prevResultsWOR[1][2], prevResultsWOR[1][1]]];
					
		var DUPArray  = [["AVO",prevResultsAVO[2][1], prevResultsAVO[2][2], prevResultsAVO[2][1]],
					["BED",prevResultsBED[2][1], prevResultsBED[2][2], prevResultsBED[2][1]],
					["BER",prevResultsBER[2][1], prevResultsBER[2][2], prevResultsBER[2][1]],
					["BUK",prevResultsBUK[2][1], prevResultsBUK[2][2], prevResultsBUK[2][1]],
					["CAM",prevResultsCAM[2][1], prevResultsCAM[2][2], prevResultsCAM[2][1]],
					["CNL",prevResultsCNL[2][1], prevResultsCNL[2][2], prevResultsCNL[2][1]],
					["CHE",prevResultsCHE[2][1], prevResultsCHE[2][2], prevResultsCHE[2][1]],
					["CLW",prevResultsCLW[2][1], prevResultsCLW[2][2], prevResultsCLW[2][1]],
					["COR",prevResultsCOR[2][1], prevResultsCOR[2][2], prevResultsCOR[2][1]],
					["DUR",prevResultsDUR[2][1], prevResultsDUR[2][2], prevResultsDUR[2][1]],
					["CUM",prevResultsCUM[2][1], prevResultsCUM[2][2], prevResultsCUM[2][1]],
					["DER",prevResultsDER[2][1], prevResultsDER[2][2], prevResultsDER[2][1]],
					["DEV",prevResultsDEV[2][1], prevResultsDEV[2][2], prevResultsDEV[2][1]],
					["DOR",prevResultsDOR[2][1], prevResultsDOR[2][2], prevResultsDOR[2][1]],
					["DYF",prevResultsDYF[2][1], prevResultsDYF[2][2], prevResultsDYF[2][1]],
					["ESU",prevResultsESU[2][1], prevResultsESU[2][2], prevResultsESU[2][1]],
					["ESS",prevResultsESS[2][1], prevResultsESS[2][2], prevResultsESS[2][1]],
					["FIF",prevResultsFIF[2][1], prevResultsFIF[2][2], prevResultsFIF[2][1]],
					["GLA",prevResultsGLA[2][1], prevResultsGLA[2][2], prevResultsGLA[2][1]],
					["GLO",prevResultsGLO[2][1], prevResultsGLO[2][2], prevResultsGLO[2][1]],
					["GRA",prevResultsGRA[2][1], prevResultsGRA[2][2], prevResultsGRA[2][1]],
					["GMA",prevResultsGMA[2][1], prevResultsGMA[2][2], prevResultsGMA[2][1]],
					["GWE",prevResultsGWE[2][1], prevResultsGWE[2][2], prevResultsGWE[2][1]],
					["GWY",prevResultsGWY[2][1], prevResultsGWY[2][2], prevResultsGWY[2][1]],
					["HAM",prevResultsHAM[2][1], prevResultsHAM[2][2], prevResultsHAM[2][1]],
					["HER",prevResultsHER[2][1], prevResultsHER[2][2], prevResultsHER[2][1]],
					["HET",prevResultsHET[2][1], prevResultsHET[2][2], prevResultsHET[2][1]],
					["HAI",prevResultsHAI[2][1], prevResultsHAI[2][2], prevResultsHAI[2][1]],
					["HUM",prevResultsHUM[2][1], prevResultsHUM[2][2], prevResultsHUM[2][1]],
					["KEN",prevResultsKEN[2][1], prevResultsKEN[2][2], prevResultsKEN[2][1]],
					["LAK",prevResultsLAK[2][1], prevResultsLAK[2][2], prevResultsLAK[2][1]],
					["LAC",prevResultsLAC[2][1], prevResultsLAC[2][2], prevResultsLAC[2][1]],
					["LAR",prevResultsLAR[2][1], prevResultsLAR[2][2], prevResultsLAR[2][1]],
					["LIN",prevResultsLIN[2][1], prevResultsLIN[2][2], prevResultsLIN[2][1]],
					["LOT",prevResultsLOT[2][1], prevResultsLOT[2][2], prevResultsLOT[2][1]],
					["MER",prevResultsMER[2][1], prevResultsMER[2][2], prevResultsMER[2][1]],
					["MGL",prevResultsMGL[2][1], prevResultsMGL[2][2], prevResultsMGL[2][1]],
					["NOR",prevResultsNOR[2][1], prevResultsNOR[2][2], prevResultsNOR[2][1]],
					["NEL",prevResultsNEL[2][1], prevResultsNEL[2][2], prevResultsNEL[2][1]],
					["NLO",prevResultsNLO[2][1], prevResultsNLO[2][2], prevResultsNLO[2][1]],
					["NYK",prevResultsNYK[2][1], prevResultsNYK[2][2], prevResultsNYK[2][1]],
					["NTH",prevResultsNTH[2][1], prevResultsNTH[2][2], prevResultsNTH[2][1]],
					["NIR",prevResultsNIR[2][1], prevResultsNIR[2][2], prevResultsNIR[2][1]],
					["NOU",prevResultsNOU[2][1], prevResultsNOU[2][2], prevResultsNOU[2][1]],
					["NOT",prevResultsNOT[2][1], prevResultsNOT[2][2], prevResultsNOT[2][1]],
					["OXF",prevResultsOXF[2][1], prevResultsOXF[2][2], prevResultsOXF[2][1]],
					["POW",prevResultsPOW[2][1], prevResultsPOW[2][2], prevResultsPOW[2][1]],
					["SHR",prevResultsSHR[2][1], prevResultsSHR[2][2], prevResultsSHR[2][1]],
					["SOM",prevResultsSOM[2][1], prevResultsSOM[2][2], prevResultsSOM[2][1]],
					["SCL",prevResultsSCL[2][1], prevResultsSCL[2][2], prevResultsSCL[2][1]],
					["SEL",prevResultsSEL[2][1], prevResultsSEL[2][2], prevResultsSEL[2][1]],
					["SGL",prevResultsSGL[2][1], prevResultsSGL[2][2], prevResultsSGL[2][1]],
					["SSC",prevResultsSSC[2][1], prevResultsSSC[2][2], prevResultsSSC[2][1]],
					["SYK",prevResultsSYK[2][1], prevResultsSYK[2][2], prevResultsSYK[2][1]],
					["STA",prevResultsSTA[2][1], prevResultsSTA[2][2], prevResultsSTA[2][1]],
					["STR",prevResultsSTR[2][1], prevResultsSTR[2][2], prevResultsSTR[2][1]],
					["SUF",prevResultsSUF[2][1], prevResultsSUF[2][2], prevResultsSUF[2][1]],
					["SUR",prevResultsSUR[2][1], prevResultsSUR[2][2], prevResultsSUR[2][1]],
					["TAY",prevResultsTAY[2][1], prevResultsTAY[2][2], prevResultsTAY[2][1]],
					["TEE",prevResultsTEE[2][1], prevResultsTEE[2][2], prevResultsTEE[2][1]],
					["TYN",prevResultsTYN[2][1], prevResultsTYN[2][2], prevResultsTYN[2][1]],
					["WAR",prevResultsWAR[2][1], prevResultsWAR[2][2], prevResultsWAR[2][1]],
					["WGL",prevResultsWGL[2][1], prevResultsWGL[2][2], prevResultsWGL[2][1]],
					["WLO",prevResultsWLO[2][1], prevResultsWLO[2][2], prevResultsWLO[2][1]],
					["WME",prevResultsWME[2][1], prevResultsWME[2][2], prevResultsWME[2][1]],
					["WMW",prevResultsWMW[2][1], prevResultsWMW[2][2], prevResultsWMW[2][1]],
					["WSU",prevResultsWSU[2][1], prevResultsWSU[2][2], prevResultsWSU[2][1]],
					["WYK",prevResultsWYK[2][1], prevResultsWYK[2][2], prevResultsWYK[2][1]],
					["WIL",prevResultsWIL[2][1], prevResultsWIL[2][2], prevResultsWIL[2][1]],
					["WOR",prevResultsWOR[2][1], prevResultsWOR[2][2], prevResultsWOR[2][1]]];
					
		var GreenArray  = [["AVO",prevResultsAVO[3][1], prevResultsAVO[3][2], prevResultsAVO[3][1]],
					["BED",prevResultsBED[3][1], prevResultsBED[3][2], prevResultsBED[3][1]],
					["BER",prevResultsBER[3][1], prevResultsBER[3][2], prevResultsBER[3][1]],
					["BUK",prevResultsBUK[3][1], prevResultsBUK[3][2], prevResultsBUK[3][1]],
					["CAM",prevResultsCAM[3][1], prevResultsCAM[3][2], prevResultsCAM[3][1]],
					["CNL",prevResultsCNL[3][1], prevResultsCNL[3][2], prevResultsCNL[3][1]],
					["CHE",prevResultsCHE[3][1], prevResultsCHE[3][2], prevResultsCHE[3][1]],
					["CLW",prevResultsCLW[3][1], prevResultsCLW[3][2], prevResultsCLW[3][1]],
					["COR",prevResultsCOR[3][1], prevResultsCOR[3][2], prevResultsCOR[3][1]],
					["DUR",prevResultsDUR[3][1], prevResultsDUR[3][2], prevResultsDUR[3][1]],
					["CUM",prevResultsCUM[3][1], prevResultsCUM[3][2], prevResultsCUM[3][1]],
					["DER",prevResultsDER[3][1], prevResultsDER[3][2], prevResultsDER[3][1]],
					["DEV",prevResultsDEV[3][1], prevResultsDEV[3][2], prevResultsDEV[3][1]],
					["DOR",prevResultsDOR[3][1], prevResultsDOR[3][2], prevResultsDOR[3][1]],
					["DYF",prevResultsDYF[3][1], prevResultsDYF[3][2], prevResultsDYF[3][1]],
					["ESU",prevResultsESU[3][1], prevResultsESU[3][2], prevResultsESU[3][1]],
					["ESS",prevResultsESS[3][1], prevResultsESS[3][2], prevResultsESS[3][1]],
					["FIF",prevResultsFIF[3][1], prevResultsFIF[3][2], prevResultsFIF[3][1]],
					["GLA",prevResultsGLA[3][1], prevResultsGLA[3][2], prevResultsGLA[3][1]],
					["GLO",prevResultsGLO[3][1], prevResultsGLO[3][2], prevResultsGLO[3][1]],
					["GRA",prevResultsGRA[3][1], prevResultsGRA[3][2], prevResultsGRA[3][1]],
					["GMA",prevResultsGMA[3][1], prevResultsGMA[3][2], prevResultsGMA[3][1]],
					["GWE",prevResultsGWE[3][1], prevResultsGWE[3][2], prevResultsGWE[3][1]],
					["GWY",prevResultsGWY[3][1], prevResultsGWY[3][2], prevResultsGWY[3][1]],
					["HAM",prevResultsHAM[3][1], prevResultsHAM[3][2], prevResultsHAM[3][1]],
					["HER",prevResultsHER[3][1], prevResultsHER[3][2], prevResultsHER[3][1]],
					["HET",prevResultsHET[3][1], prevResultsHET[3][2], prevResultsHET[3][1]],
					["HAI",prevResultsHAI[3][1], prevResultsHAI[3][2], prevResultsHAI[3][1]],
					["HUM",prevResultsHUM[3][1], prevResultsHUM[3][2], prevResultsHUM[3][1]],
					["KEN",prevResultsKEN[3][1], prevResultsKEN[3][2], prevResultsKEN[3][1]],
					["LAK",prevResultsLAK[3][1], prevResultsLAK[3][2], prevResultsLAK[3][1]],
					["LAC",prevResultsLAC[3][1], prevResultsLAC[3][2], prevResultsLAC[3][1]],
					["LAR",prevResultsLAR[3][1], prevResultsLAR[3][2], prevResultsLAR[3][1]],
					["LIN",prevResultsLIN[3][1], prevResultsLIN[3][2], prevResultsLIN[3][1]],
					["LOT",prevResultsLOT[3][1], prevResultsLOT[3][2], prevResultsLOT[3][1]],
					["MER",prevResultsMER[3][1], prevResultsMER[3][2], prevResultsMER[3][1]],
					["MGL",prevResultsMGL[3][1], prevResultsMGL[3][2], prevResultsMGL[3][1]],
					["NOR",prevResultsNOR[3][1], prevResultsNOR[3][2], prevResultsNOR[3][1]],
					["NEL",prevResultsNEL[3][1], prevResultsNEL[3][2], prevResultsNEL[3][1]],
					["NLO",prevResultsNLO[3][1], prevResultsNLO[3][2], prevResultsNLO[3][1]],
					["NYK",prevResultsNYK[3][1], prevResultsNYK[3][2], prevResultsNYK[3][1]],
					["NTH",prevResultsNTH[3][1], prevResultsNTH[3][2], prevResultsNTH[3][1]],
					["NIR",prevResultsNIR[3][1], prevResultsNIR[3][2], prevResultsNIR[3][1]],
					["NOU",prevResultsNOU[3][1], prevResultsNOU[3][2], prevResultsNOU[3][1]],
					["NOT",prevResultsNOT[3][1], prevResultsNOT[3][2], prevResultsNOT[3][1]],
					["OXF",prevResultsOXF[3][1], prevResultsOXF[3][2], prevResultsOXF[3][1]],
					["POW",prevResultsPOW[3][1], prevResultsPOW[3][2], prevResultsPOW[3][1]],
					["SHR",prevResultsSHR[3][1], prevResultsSHR[3][2], prevResultsSHR[3][1]],
					["SOM",prevResultsSOM[3][1], prevResultsSOM[3][2], prevResultsSOM[3][1]],
					["SCL",prevResultsSCL[3][1], prevResultsSCL[3][2], prevResultsSCL[3][1]],
					["SEL",prevResultsSEL[3][1], prevResultsSEL[3][2], prevResultsSEL[3][1]],
					["SGL",prevResultsSGL[3][1], prevResultsSGL[3][2], prevResultsSGL[3][1]],
					["SSC",prevResultsSSC[3][1], prevResultsSSC[3][2], prevResultsSSC[3][1]],
					["SYK",prevResultsSYK[3][1], prevResultsSYK[3][2], prevResultsSYK[3][1]],
					["STA",prevResultsSTA[3][1], prevResultsSTA[3][2], prevResultsSTA[3][1]],
					["STR",prevResultsSTR[3][1], prevResultsSTR[3][2], prevResultsSTR[3][1]],
					["SUF",prevResultsSUF[3][1], prevResultsSUF[3][2], prevResultsSUF[3][1]],
					["SUR",prevResultsSUR[3][1], prevResultsSUR[3][2], prevResultsSUR[3][1]],
					["TAY",prevResultsTAY[3][1], prevResultsTAY[3][2], prevResultsTAY[3][1]],
					["TEE",prevResultsTEE[3][1], prevResultsTEE[3][2], prevResultsTEE[3][1]],
					["TYN",prevResultsTYN[3][1], prevResultsTYN[3][2], prevResultsTYN[3][1]],
					["WAR",prevResultsWAR[3][1], prevResultsWAR[3][2], prevResultsWAR[3][1]],
					["WGL",prevResultsWGL[3][1], prevResultsWGL[3][2], prevResultsWGL[3][1]],
					["WLO",prevResultsWLO[3][1], prevResultsWLO[3][2], prevResultsWLO[3][1]],
					["WME",prevResultsWME[3][1], prevResultsWME[3][2], prevResultsWME[3][1]],
					["WMW",prevResultsWMW[3][1], prevResultsWMW[3][2], prevResultsWMW[3][1]],
					["WSU",prevResultsWSU[3][1], prevResultsWSU[3][2], prevResultsWSU[3][1]],
					["WYK",prevResultsWYK[3][1], prevResultsWYK[3][2], prevResultsWYK[3][1]],
					["WIL",prevResultsWIL[3][1], prevResultsWIL[3][2], prevResultsWIL[3][1]],
					["WOR",prevResultsWOR[3][1], prevResultsWOR[3][2], prevResultsWOR[3][1]]];
					
		var LabourArray  = [["AVO",prevResultsAVO[4][1], prevResultsAVO[4][2], prevResultsAVO[4][1]],
					["BED",prevResultsBED[4][1], prevResultsBED[4][2], prevResultsBED[4][1]],
					["BER",prevResultsBER[4][1], prevResultsBER[4][2], prevResultsBER[4][1]],
					["BUK",prevResultsBUK[4][1], prevResultsBUK[4][2], prevResultsBUK[4][1]],
					["CAM",prevResultsCAM[4][1], prevResultsCAM[4][2], prevResultsCAM[4][1]],
					["CNL",prevResultsCNL[4][1], prevResultsCNL[4][2], prevResultsCNL[4][1]],
					["CHE",prevResultsCHE[4][1], prevResultsCHE[4][2], prevResultsCHE[4][1]],
					["CLW",prevResultsCLW[4][1], prevResultsCLW[4][2], prevResultsCLW[4][1]],
					["COR",prevResultsCOR[4][1], prevResultsCOR[4][2], prevResultsCOR[4][1]],
					["DUR",prevResultsDUR[4][1], prevResultsDUR[4][2], prevResultsDUR[4][1]],
					["CUM",prevResultsCUM[4][1], prevResultsCUM[4][2], prevResultsCUM[4][1]],
					["DER",prevResultsDER[4][1], prevResultsDER[4][2], prevResultsDER[4][1]],
					["DEV",prevResultsDEV[4][1], prevResultsDEV[4][2], prevResultsDEV[4][1]],
					["DOR",prevResultsDOR[4][1], prevResultsDOR[4][2], prevResultsDOR[4][1]],
					["DYF",prevResultsDYF[4][1], prevResultsDYF[4][2], prevResultsDYF[4][1]],
					["ESU",prevResultsESU[4][1], prevResultsESU[4][2], prevResultsESU[4][1]],
					["ESS",prevResultsESS[4][1], prevResultsESS[4][2], prevResultsESS[4][1]],
					["FIF",prevResultsFIF[4][1], prevResultsFIF[4][2], prevResultsFIF[4][1]],
					["GLA",prevResultsGLA[4][1], prevResultsGLA[4][2], prevResultsGLA[4][1]],
					["GLO",prevResultsGLO[4][1], prevResultsGLO[4][2], prevResultsGLO[4][1]],
					["GRA",prevResultsGRA[4][1], prevResultsGRA[4][2], prevResultsGRA[4][1]],
					["GMA",prevResultsGMA[4][1], prevResultsGMA[4][2], prevResultsGMA[4][1]],
					["GWE",prevResultsGWE[4][1], prevResultsGWE[4][2], prevResultsGWE[4][1]],
					["GWY",prevResultsGWY[4][1], prevResultsGWY[4][2], prevResultsGWY[4][1]],
					["HAM",prevResultsHAM[4][1], prevResultsHAM[4][2], prevResultsHAM[4][1]],
					["HER",prevResultsHER[4][1], prevResultsHER[4][2], prevResultsHER[4][1]],
					["HET",prevResultsHET[4][1], prevResultsHET[4][2], prevResultsHET[4][1]],
					["HAI",prevResultsHAI[4][1], prevResultsHAI[4][2], prevResultsHAI[4][1]],
					["HUM",prevResultsHUM[4][1], prevResultsHUM[4][2], prevResultsHUM[4][1]],
					["KEN",prevResultsKEN[4][1], prevResultsKEN[4][2], prevResultsKEN[4][1]],
					["LAK",prevResultsLAK[4][1], prevResultsLAK[4][2], prevResultsLAK[4][1]],
					["LAC",prevResultsLAC[4][1], prevResultsLAC[4][2], prevResultsLAC[4][1]],
					["LAR",prevResultsLAR[4][1], prevResultsLAR[4][2], prevResultsLAR[4][1]],
					["LIN",prevResultsLIN[4][1], prevResultsLIN[4][2], prevResultsLIN[4][1]],
					["LOT",prevResultsLOT[4][1], prevResultsLOT[4][2], prevResultsLOT[4][1]],
					["MER",prevResultsMER[4][1], prevResultsMER[4][2], prevResultsMER[4][1]],
					["MGL",prevResultsMGL[4][1], prevResultsMGL[4][2], prevResultsMGL[4][1]],
					["NOR",prevResultsNOR[4][1], prevResultsNOR[4][2], prevResultsNOR[4][1]],
					["NEL",prevResultsNEL[4][1], prevResultsNEL[4][2], prevResultsNEL[4][1]],
					["NLO",prevResultsNLO[4][1], prevResultsNLO[4][2], prevResultsNLO[4][1]],
					["NYK",prevResultsNYK[4][1], prevResultsNYK[4][2], prevResultsNYK[4][1]],
					["NTH",prevResultsNTH[4][1], prevResultsNTH[4][2], prevResultsNTH[4][1]],
					["NIR",prevResultsNIR[4][1], prevResultsNIR[4][2], prevResultsNIR[4][1]],
					["NOU",prevResultsNOU[4][1], prevResultsNOU[4][2], prevResultsNOU[4][1]],
					["NOT",prevResultsNOT[4][1], prevResultsNOT[4][2], prevResultsNOT[4][1]],
					["OXF",prevResultsOXF[4][1], prevResultsOXF[4][2], prevResultsOXF[4][1]],
					["POW",prevResultsPOW[4][1], prevResultsPOW[4][2], prevResultsPOW[4][1]],
					["SHR",prevResultsSHR[4][1], prevResultsSHR[4][2], prevResultsSHR[4][1]],
					["SOM",prevResultsSOM[4][1], prevResultsSOM[4][2], prevResultsSOM[4][1]],
					["SCL",prevResultsSCL[4][1], prevResultsSCL[4][2], prevResultsSCL[4][1]],
					["SEL",prevResultsSEL[4][1], prevResultsSEL[4][2], prevResultsSEL[4][1]],
					["SGL",prevResultsSGL[4][1], prevResultsSGL[4][2], prevResultsSGL[4][1]],
					["SSC",prevResultsSSC[4][1], prevResultsSSC[4][2], prevResultsSSC[4][1]],
					["SYK",prevResultsSYK[4][1], prevResultsSYK[4][2], prevResultsSYK[4][1]],
					["STA",prevResultsSTA[4][1], prevResultsSTA[4][2], prevResultsSTA[4][1]],
					["STR",prevResultsSTR[4][1], prevResultsSTR[4][2], prevResultsSTR[4][1]],
					["SUF",prevResultsSUF[4][1], prevResultsSUF[4][2], prevResultsSUF[4][1]],
					["SUR",prevResultsSUR[4][1], prevResultsSUR[4][2], prevResultsSUR[4][1]],
					["TAY",prevResultsTAY[4][1], prevResultsTAY[4][2], prevResultsTAY[4][1]],
					["TEE",prevResultsTEE[4][1], prevResultsTEE[4][2], prevResultsTEE[4][1]],
					["TYN",prevResultsTYN[4][1], prevResultsTYN[4][2], prevResultsTYN[4][1]],
					["WAR",prevResultsWAR[4][1], prevResultsWAR[4][2], prevResultsWAR[4][1]],
					["WGL",prevResultsWGL[4][1], prevResultsWGL[4][2], prevResultsWGL[4][1]],
					["WLO",prevResultsWLO[4][1], prevResultsWLO[4][2], prevResultsWLO[4][1]],
					["WME",prevResultsWME[4][1], prevResultsWME[4][2], prevResultsWME[4][1]],
					["WMW",prevResultsWMW[4][1], prevResultsWMW[4][2], prevResultsWMW[4][1]],
					["WSU",prevResultsWSU[4][1], prevResultsWSU[4][2], prevResultsWSU[4][1]],
					["WYK",prevResultsWYK[4][1], prevResultsWYK[4][2], prevResultsWYK[4][1]],
					["WIL",prevResultsWIL[4][1], prevResultsWIL[4][2], prevResultsWIL[4][1]],
					["WOR",prevResultsWOR[4][1], prevResultsWOR[4][2], prevResultsWOR[4][1]]];
					
		var LibDemArray  = [["AVO",prevResultsAVO[5][1], prevResultsAVO[5][2], prevResultsAVO[5][1]],
					["BED",prevResultsBED[5][1], prevResultsBED[5][2], prevResultsBED[5][1]],
					["BER",prevResultsBER[5][1], prevResultsBER[5][2], prevResultsBER[5][1]],
					["BUK",prevResultsBUK[5][1], prevResultsBUK[5][2], prevResultsBUK[5][1]],
					["CAM",prevResultsCAM[5][1], prevResultsCAM[5][2], prevResultsCAM[5][1]],
					["CNL",prevResultsCNL[5][1], prevResultsCNL[5][2], prevResultsCNL[5][1]],
					["CHE",prevResultsCHE[5][1], prevResultsCHE[5][2], prevResultsCHE[5][1]],
					["CLW",prevResultsCLW[5][1], prevResultsCLW[5][2], prevResultsCLW[5][1]],
					["COR",prevResultsCOR[5][1], prevResultsCOR[5][2], prevResultsCOR[5][1]],
					["DUR",prevResultsDUR[5][1], prevResultsDUR[5][2], prevResultsDUR[5][1]],
					["CUM",prevResultsCUM[5][1], prevResultsCUM[5][2], prevResultsCUM[5][1]],
					["DER",prevResultsDER[5][1], prevResultsDER[5][2], prevResultsDER[5][1]],
					["DEV",prevResultsDEV[5][1], prevResultsDEV[5][2], prevResultsDEV[5][1]],
					["DOR",prevResultsDOR[5][1], prevResultsDOR[5][2], prevResultsDOR[5][1]],
					["DYF",prevResultsDYF[5][1], prevResultsDYF[5][2], prevResultsDYF[5][1]],
					["ESU",prevResultsESU[5][1], prevResultsESU[5][2], prevResultsESU[5][1]],
					["ESS",prevResultsESS[5][1], prevResultsESS[5][2], prevResultsESS[5][1]],
					["FIF",prevResultsFIF[5][1], prevResultsFIF[5][2], prevResultsFIF[5][1]],
					["GLA",prevResultsGLA[5][1], prevResultsGLA[5][2], prevResultsGLA[5][1]],
					["GLO",prevResultsGLO[5][1], prevResultsGLO[5][2], prevResultsGLO[5][1]],
					["GRA",prevResultsGRA[5][1], prevResultsGRA[5][2], prevResultsGRA[5][1]],
					["GMA",prevResultsGMA[5][1], prevResultsGMA[5][2], prevResultsGMA[5][1]],
					["GWE",prevResultsGWE[5][1], prevResultsGWE[5][2], prevResultsGWE[5][1]],
					["GWY",prevResultsGWY[5][1], prevResultsGWY[5][2], prevResultsGWY[5][1]],
					["HAM",prevResultsHAM[5][1], prevResultsHAM[5][2], prevResultsHAM[5][1]],
					["HER",prevResultsHER[5][1], prevResultsHER[5][2], prevResultsHER[5][1]],
					["HET",prevResultsHET[5][1], prevResultsHET[5][2], prevResultsHET[5][1]],
					["HAI",prevResultsHAI[5][1], prevResultsHAI[5][2], prevResultsHAI[5][1]],
					["HUM",prevResultsHUM[5][1], prevResultsHUM[5][2], prevResultsHUM[5][1]],
					["KEN",prevResultsKEN[5][1], prevResultsKEN[5][2], prevResultsKEN[5][1]],
					["LAK",prevResultsLAK[5][1], prevResultsLAK[5][2], prevResultsLAK[5][1]],
					["LAC",prevResultsLAC[5][1], prevResultsLAC[5][2], prevResultsLAC[5][1]],
					["LAR",prevResultsLAR[5][1], prevResultsLAR[5][2], prevResultsLAR[5][1]],
					["LIN",prevResultsLIN[5][1], prevResultsLIN[5][2], prevResultsLIN[5][1]],
					["LOT",prevResultsLOT[5][1], prevResultsLOT[5][2], prevResultsLOT[5][1]],
					["MER",prevResultsMER[5][1], prevResultsMER[5][2], prevResultsMER[5][1]],
					["MGL",prevResultsMGL[5][1], prevResultsMGL[5][2], prevResultsMGL[5][1]],
					["NOR",prevResultsNOR[5][1], prevResultsNOR[5][2], prevResultsNOR[5][1]],
					["NEL",prevResultsNEL[5][1], prevResultsNEL[5][2], prevResultsNEL[5][1]],
					["NLO",prevResultsNLO[5][1], prevResultsNLO[5][2], prevResultsNLO[5][1]],
					["NYK",prevResultsNYK[5][1], prevResultsNYK[5][2], prevResultsNYK[5][1]],
					["NTH",prevResultsNTH[5][1], prevResultsNTH[5][2], prevResultsNTH[5][1]],
					["NIR",prevResultsNIR[5][1], prevResultsNIR[5][2], prevResultsNIR[5][1]],
					["NOU",prevResultsNOU[5][1], prevResultsNOU[5][2], prevResultsNOU[5][1]],
					["NOT",prevResultsNOT[5][1], prevResultsNOT[5][2], prevResultsNOT[5][1]],
					["OXF",prevResultsOXF[5][1], prevResultsOXF[5][2], prevResultsOXF[5][1]],
					["POW",prevResultsPOW[5][1], prevResultsPOW[5][2], prevResultsPOW[5][1]],
					["SHR",prevResultsSHR[5][1], prevResultsSHR[5][2], prevResultsSHR[5][1]],
					["SOM",prevResultsSOM[5][1], prevResultsSOM[5][2], prevResultsSOM[5][1]],
					["SCL",prevResultsSCL[5][1], prevResultsSCL[5][2], prevResultsSCL[5][1]],
					["SEL",prevResultsSEL[5][1], prevResultsSEL[5][2], prevResultsSEL[5][1]],
					["SGL",prevResultsSGL[5][1], prevResultsSGL[5][2], prevResultsSGL[5][1]],
					["SSC",prevResultsSSC[5][1], prevResultsSSC[5][2], prevResultsSSC[5][1]],
					["SYK",prevResultsSYK[5][1], prevResultsSYK[5][2], prevResultsSYK[5][1]],
					["STA",prevResultsSTA[5][1], prevResultsSTA[5][2], prevResultsSTA[5][1]],
					["STR",prevResultsSTR[5][1], prevResultsSTR[5][2], prevResultsSTR[5][1]],
					["SUF",prevResultsSUF[5][1], prevResultsSUF[5][2], prevResultsSUF[5][1]],
					["SUR",prevResultsSUR[5][1], prevResultsSUR[5][2], prevResultsSUR[5][1]],
					["TAY",prevResultsTAY[5][1], prevResultsTAY[5][2], prevResultsTAY[5][1]],
					["TEE",prevResultsTEE[5][1], prevResultsTEE[5][2], prevResultsTEE[5][1]],
					["TYN",prevResultsTYN[5][1], prevResultsTYN[5][2], prevResultsTYN[5][1]],
					["WAR",prevResultsWAR[5][1], prevResultsWAR[5][2], prevResultsWAR[5][1]],
					["WGL",prevResultsWGL[5][1], prevResultsWGL[5][2], prevResultsWGL[5][1]],
					["WLO",prevResultsWLO[5][1], prevResultsWLO[5][2], prevResultsWLO[5][1]],
					["WME",prevResultsWME[5][1], prevResultsWME[5][2], prevResultsWME[5][1]],
					["WMW",prevResultsWMW[5][1], prevResultsWMW[5][2], prevResultsWMW[5][1]],
					["WSU",prevResultsWSU[5][1], prevResultsWSU[5][2], prevResultsWSU[5][1]],
					["WYK",prevResultsWYK[5][1], prevResultsWYK[5][2], prevResultsWYK[5][1]],
					["WIL",prevResultsWIL[5][1], prevResultsWIL[5][2], prevResultsWIL[5][1]],
					["WOR",prevResultsWOR[5][1], prevResultsWOR[5][2], prevResultsWOR[5][1]]];
					
		var PlaidArray  = [["AVO",prevResultsAVO[6][1], prevResultsAVO[6][2], prevResultsAVO[6][1]],
					["BED",prevResultsBED[6][1], prevResultsBED[6][2], prevResultsBED[6][1]],
					["BER",prevResultsBER[6][1], prevResultsBER[6][2], prevResultsBER[6][1]],
					["BUK",prevResultsBUK[6][1], prevResultsBUK[6][2], prevResultsBUK[6][1]],
					["CAM",prevResultsCAM[6][1], prevResultsCAM[6][2], prevResultsCAM[6][1]],
					["CNL",prevResultsCNL[6][1], prevResultsCNL[6][2], prevResultsCNL[6][1]],
					["CHE",prevResultsCHE[6][1], prevResultsCHE[6][2], prevResultsCHE[6][1]],
					["CLW",prevResultsCLW[6][1], prevResultsCLW[6][2], prevResultsCLW[6][1]],
					["COR",prevResultsCOR[6][1], prevResultsCOR[6][2], prevResultsCOR[6][1]],
					["DUR",prevResultsDUR[6][1], prevResultsDUR[6][2], prevResultsDUR[6][1]],
					["CUM",prevResultsCUM[6][1], prevResultsCUM[6][2], prevResultsCUM[6][1]],
					["DER",prevResultsDER[6][1], prevResultsDER[6][2], prevResultsDER[6][1]],
					["DEV",prevResultsDEV[6][1], prevResultsDEV[6][2], prevResultsDEV[6][1]],
					["DOR",prevResultsDOR[6][1], prevResultsDOR[6][2], prevResultsDOR[6][1]],
					["DYF",prevResultsDYF[6][1], prevResultsDYF[6][2], prevResultsDYF[6][1]],
					["ESU",prevResultsESU[6][1], prevResultsESU[6][2], prevResultsESU[6][1]],
					["ESS",prevResultsESS[6][1], prevResultsESS[6][2], prevResultsESS[6][1]],
					["FIF",prevResultsFIF[6][1], prevResultsFIF[6][2], prevResultsFIF[6][1]],
					["GLA",prevResultsGLA[6][1], prevResultsGLA[6][2], prevResultsGLA[6][1]],
					["GLO",prevResultsGLO[6][1], prevResultsGLO[6][2], prevResultsGLO[6][1]],
					["GRA",prevResultsGRA[6][1], prevResultsGRA[6][2], prevResultsGRA[6][1]],
					["GMA",prevResultsGMA[6][1], prevResultsGMA[6][2], prevResultsGMA[6][1]],
					["GWE",prevResultsGWE[6][1], prevResultsGWE[6][2], prevResultsGWE[6][1]],
					["GWY",prevResultsGWY[6][1], prevResultsGWY[6][2], prevResultsGWY[6][1]],
					["HAM",prevResultsHAM[6][1], prevResultsHAM[6][2], prevResultsHAM[6][1]],
					["HER",prevResultsHER[6][1], prevResultsHER[6][2], prevResultsHER[6][1]],
					["HET",prevResultsHET[6][1], prevResultsHET[6][2], prevResultsHET[6][1]],
					["HAI",prevResultsHAI[6][1], prevResultsHAI[6][2], prevResultsHAI[6][1]],
					["HUM",prevResultsHUM[6][1], prevResultsHUM[6][2], prevResultsHUM[6][1]],
					["KEN",prevResultsKEN[6][1], prevResultsKEN[6][2], prevResultsKEN[6][1]],
					["LAK",prevResultsLAK[6][1], prevResultsLAK[6][2], prevResultsLAK[6][1]],
					["LAC",prevResultsLAC[6][1], prevResultsLAC[6][2], prevResultsLAC[6][1]],
					["LAR",prevResultsLAR[6][1], prevResultsLAR[6][2], prevResultsLAR[6][1]],
					["LIN",prevResultsLIN[6][1], prevResultsLIN[6][2], prevResultsLIN[6][1]],
					["LOT",prevResultsLOT[6][1], prevResultsLOT[6][2], prevResultsLOT[6][1]],
					["MER",prevResultsMER[6][1], prevResultsMER[6][2], prevResultsMER[6][1]],
					["MGL",prevResultsMGL[6][1], prevResultsMGL[6][2], prevResultsMGL[6][1]],
					["NOR",prevResultsNOR[6][1], prevResultsNOR[6][2], prevResultsNOR[6][1]],
					["NEL",prevResultsNEL[6][1], prevResultsNEL[6][2], prevResultsNEL[6][1]],
					["NLO",prevResultsNLO[6][1], prevResultsNLO[6][2], prevResultsNLO[6][1]],
					["NYK",prevResultsNYK[6][1], prevResultsNYK[6][2], prevResultsNYK[6][1]],
					["NTH",prevResultsNTH[6][1], prevResultsNTH[6][2], prevResultsNTH[6][1]],
					["NIR",prevResultsNIR[6][1], prevResultsNIR[6][2], prevResultsNIR[6][1]],
					["NOU",prevResultsNOU[6][1], prevResultsNOU[6][2], prevResultsNOU[6][1]],
					["NOT",prevResultsNOT[6][1], prevResultsNOT[6][2], prevResultsNOT[6][1]],
					["OXF",prevResultsOXF[6][1], prevResultsOXF[6][2], prevResultsOXF[6][1]],
					["POW",prevResultsPOW[6][1], prevResultsPOW[6][2], prevResultsPOW[6][1]],
					["SHR",prevResultsSHR[6][1], prevResultsSHR[6][2], prevResultsSHR[6][1]],
					["SOM",prevResultsSOM[6][1], prevResultsSOM[6][2], prevResultsSOM[6][1]],
					["SCL",prevResultsSCL[6][1], prevResultsSCL[6][2], prevResultsSCL[6][1]],
					["SEL",prevResultsSEL[6][1], prevResultsSEL[6][2], prevResultsSEL[6][1]],
					["SGL",prevResultsSGL[6][1], prevResultsSGL[6][2], prevResultsSGL[6][1]],
					["SSC",prevResultsSSC[6][1], prevResultsSSC[6][2], prevResultsSSC[6][1]],
					["SYK",prevResultsSYK[6][1], prevResultsSYK[6][2], prevResultsSYK[6][1]],
					["STA",prevResultsSTA[6][1], prevResultsSTA[6][2], prevResultsSTA[6][1]],
					["STR",prevResultsSTR[6][1], prevResultsSTR[6][2], prevResultsSTR[6][1]],
					["SUF",prevResultsSUF[6][1], prevResultsSUF[6][2], prevResultsSUF[6][1]],
					["SUR",prevResultsSUR[6][1], prevResultsSUR[6][2], prevResultsSUR[6][1]],
					["TAY",prevResultsTAY[6][1], prevResultsTAY[6][2], prevResultsTAY[6][1]],
					["TEE",prevResultsTEE[6][1], prevResultsTEE[6][2], prevResultsTEE[6][1]],
					["TYN",prevResultsTYN[6][1], prevResultsTYN[6][2], prevResultsTYN[6][1]],
					["WAR",prevResultsWAR[6][1], prevResultsWAR[6][2], prevResultsWAR[6][1]],
					["WGL",prevResultsWGL[6][1], prevResultsWGL[6][2], prevResultsWGL[6][1]],
					["WLO",prevResultsWLO[6][1], prevResultsWLO[6][2], prevResultsWLO[6][1]],
					["WME",prevResultsWME[6][1], prevResultsWME[6][2], prevResultsWME[6][1]],
					["WMW",prevResultsWMW[6][1], prevResultsWMW[6][2], prevResultsWMW[6][1]],
					["WSU",prevResultsWSU[6][1], prevResultsWSU[6][2], prevResultsWSU[6][1]],
					["WYK",prevResultsWYK[6][1], prevResultsWYK[6][2], prevResultsWYK[6][1]],
					["WIL",prevResultsWIL[6][1], prevResultsWIL[6][2], prevResultsWIL[6][1]],
					["WOR",prevResultsWOR[6][1], prevResultsWOR[6][2], prevResultsWOR[6][1]]];
					
		var RefUKArray  = [["AVO",prevResultsAVO[7][1], prevResultsAVO[7][2], prevResultsAVO[7][1]],
					["BED",prevResultsBED[7][1], prevResultsBED[7][2], prevResultsBED[7][1]],
					["BER",prevResultsBER[7][1], prevResultsBER[7][2], prevResultsBER[7][1]],
					["BUK",prevResultsBUK[7][1], prevResultsBUK[7][2], prevResultsBUK[7][1]],
					["CAM",prevResultsCAM[7][1], prevResultsCAM[7][2], prevResultsCAM[7][1]],
					["CNL",prevResultsCNL[7][1], prevResultsCNL[7][2], prevResultsCNL[7][1]],
					["CHE",prevResultsCHE[7][1], prevResultsCHE[7][2], prevResultsCHE[7][1]],
					["CLW",prevResultsCLW[7][1], prevResultsCLW[7][2], prevResultsCLW[7][1]],
					["COR",prevResultsCOR[7][1], prevResultsCOR[7][2], prevResultsCOR[7][1]],
					["DUR",prevResultsDUR[7][1], prevResultsDUR[7][2], prevResultsDUR[7][1]],
					["CUM",prevResultsCUM[7][1], prevResultsCUM[7][2], prevResultsCUM[7][1]],
					["DER",prevResultsDER[7][1], prevResultsDER[7][2], prevResultsDER[7][1]],
					["DEV",prevResultsDEV[7][1], prevResultsDEV[7][2], prevResultsDEV[7][1]],
					["DOR",prevResultsDOR[7][1], prevResultsDOR[7][2], prevResultsDOR[7][1]],
					["DYF",prevResultsDYF[7][1], prevResultsDYF[7][2], prevResultsDYF[7][1]],
					["ESU",prevResultsESU[7][1], prevResultsESU[7][2], prevResultsESU[7][1]],
					["ESS",prevResultsESS[7][1], prevResultsESS[7][2], prevResultsESS[7][1]],
					["FIF",prevResultsFIF[7][1], prevResultsFIF[7][2], prevResultsFIF[7][1]],
					["GLA",prevResultsGLA[7][1], prevResultsGLA[7][2], prevResultsGLA[7][1]],
					["GLO",prevResultsGLO[7][1], prevResultsGLO[7][2], prevResultsGLO[7][1]],
					["GRA",prevResultsGRA[7][1], prevResultsGRA[7][2], prevResultsGRA[7][1]],
					["GMA",prevResultsGMA[7][1], prevResultsGMA[7][2], prevResultsGMA[7][1]],
					["GWE",prevResultsGWE[7][1], prevResultsGWE[7][2], prevResultsGWE[7][1]],
					["GWY",prevResultsGWY[7][1], prevResultsGWY[7][2], prevResultsGWY[7][1]],
					["HAM",prevResultsHAM[7][1], prevResultsHAM[7][2], prevResultsHAM[7][1]],
					["HER",prevResultsHER[7][1], prevResultsHER[7][2], prevResultsHER[7][1]],
					["HET",prevResultsHET[7][1], prevResultsHET[7][2], prevResultsHET[7][1]],
					["HAI",prevResultsHAI[7][1], prevResultsHAI[7][2], prevResultsHAI[7][1]],
					["HUM",prevResultsHUM[7][1], prevResultsHUM[7][2], prevResultsHUM[7][1]],
					["KEN",prevResultsKEN[7][1], prevResultsKEN[7][2], prevResultsKEN[7][1]],
					["LAK",prevResultsLAK[7][1], prevResultsLAK[7][2], prevResultsLAK[7][1]],
					["LAC",prevResultsLAC[7][1], prevResultsLAC[7][2], prevResultsLAC[7][1]],
					["LAR",prevResultsLAR[7][1], prevResultsLAR[7][2], prevResultsLAR[7][1]],
					["LIN",prevResultsLIN[7][1], prevResultsLIN[7][2], prevResultsLIN[7][1]],
					["LOT",prevResultsLOT[7][1], prevResultsLOT[7][2], prevResultsLOT[7][1]],
					["MER",prevResultsMER[7][1], prevResultsMER[7][2], prevResultsMER[7][1]],
					["MGL",prevResultsMGL[7][1], prevResultsMGL[7][2], prevResultsMGL[7][1]],
					["NOR",prevResultsNOR[7][1], prevResultsNOR[7][2], prevResultsNOR[7][1]],
					["NEL",prevResultsNEL[7][1], prevResultsNEL[7][2], prevResultsNEL[7][1]],
					["NLO",prevResultsNLO[7][1], prevResultsNLO[7][2], prevResultsNLO[7][1]],
					["NYK",prevResultsNYK[7][1], prevResultsNYK[7][2], prevResultsNYK[7][1]],
					["NTH",prevResultsNTH[7][1], prevResultsNTH[7][2], prevResultsNTH[7][1]],
					["NIR",prevResultsNIR[7][1], prevResultsNIR[7][2], prevResultsNIR[7][1]],
					["NOU",prevResultsNOU[7][1], prevResultsNOU[7][2], prevResultsNOU[7][1]],
					["NOT",prevResultsNOT[7][1], prevResultsNOT[7][2], prevResultsNOT[7][1]],
					["OXF",prevResultsOXF[7][1], prevResultsOXF[7][2], prevResultsOXF[7][1]],
					["POW",prevResultsPOW[7][1], prevResultsPOW[7][2], prevResultsPOW[7][1]],
					["SHR",prevResultsSHR[7][1], prevResultsSHR[7][2], prevResultsSHR[7][1]],
					["SOM",prevResultsSOM[7][1], prevResultsSOM[7][2], prevResultsSOM[7][1]],
					["SCL",prevResultsSCL[7][1], prevResultsSCL[7][2], prevResultsSCL[7][1]],
					["SEL",prevResultsSEL[7][1], prevResultsSEL[7][2], prevResultsSEL[7][1]],
					["SGL",prevResultsSGL[7][1], prevResultsSGL[7][2], prevResultsSGL[7][1]],
					["SSC",prevResultsSSC[7][1], prevResultsSSC[7][2], prevResultsSSC[7][1]],
					["SYK",prevResultsSYK[7][1], prevResultsSYK[7][2], prevResultsSYK[7][1]],
					["STA",prevResultsSTA[7][1], prevResultsSTA[7][2], prevResultsSTA[7][1]],
					["STR",prevResultsSTR[7][1], prevResultsSTR[7][2], prevResultsSTR[7][1]],
					["SUF",prevResultsSUF[7][1], prevResultsSUF[7][2], prevResultsSUF[7][1]],
					["SUR",prevResultsSUR[7][1], prevResultsSUR[7][2], prevResultsSUR[7][1]],
					["TAY",prevResultsTAY[7][1], prevResultsTAY[7][2], prevResultsTAY[7][1]],
					["TEE",prevResultsTEE[7][1], prevResultsTEE[7][2], prevResultsTEE[7][1]],
					["TYN",prevResultsTYN[7][1], prevResultsTYN[7][2], prevResultsTYN[7][1]],
					["WAR",prevResultsWAR[7][1], prevResultsWAR[7][2], prevResultsWAR[7][1]],
					["WGL",prevResultsWGL[7][1], prevResultsWGL[7][2], prevResultsWGL[7][1]],
					["WLO",prevResultsWLO[7][1], prevResultsWLO[7][2], prevResultsWLO[7][1]],
					["WME",prevResultsWME[7][1], prevResultsWME[7][2], prevResultsWME[7][1]],
					["WMW",prevResultsWMW[7][1], prevResultsWMW[7][2], prevResultsWMW[7][1]],
					["WSU",prevResultsWSU[7][1], prevResultsWSU[7][2], prevResultsWSU[7][1]],
					["WYK",prevResultsWYK[7][1], prevResultsWYK[7][2], prevResultsWYK[7][1]],
					["WIL",prevResultsWIL[7][1], prevResultsWIL[7][2], prevResultsWIL[7][1]],
					["WOR",prevResultsWOR[7][1], prevResultsWOR[7][2], prevResultsWOR[7][1]]];
					
		var SDLPArray  = [["AVO",prevResultsAVO[8][1], prevResultsAVO[8][2], prevResultsAVO[8][1]],
					["BED",prevResultsBED[8][1], prevResultsBED[8][2], prevResultsBED[8][1]],
					["BER",prevResultsBER[8][1], prevResultsBER[8][2], prevResultsBER[8][1]],
					["BUK",prevResultsBUK[8][1], prevResultsBUK[8][2], prevResultsBUK[8][1]],
					["CAM",prevResultsCAM[8][1], prevResultsCAM[8][2], prevResultsCAM[8][1]],
					["CNL",prevResultsCNL[8][1], prevResultsCNL[8][2], prevResultsCNL[8][1]],
					["CHE",prevResultsCHE[8][1], prevResultsCHE[8][2], prevResultsCHE[8][1]],
					["CLW",prevResultsCLW[8][1], prevResultsCLW[8][2], prevResultsCLW[8][1]],
					["COR",prevResultsCOR[8][1], prevResultsCOR[8][2], prevResultsCOR[8][1]],
					["DUR",prevResultsDUR[8][1], prevResultsDUR[8][2], prevResultsDUR[8][1]],
					["CUM",prevResultsCUM[8][1], prevResultsCUM[8][2], prevResultsCUM[8][1]],
					["DER",prevResultsDER[8][1], prevResultsDER[8][2], prevResultsDER[8][1]],
					["DEV",prevResultsDEV[8][1], prevResultsDEV[8][2], prevResultsDEV[8][1]],
					["DOR",prevResultsDOR[8][1], prevResultsDOR[8][2], prevResultsDOR[8][1]],
					["DYF",prevResultsDYF[8][1], prevResultsDYF[8][2], prevResultsDYF[8][1]],
					["ESU",prevResultsESU[8][1], prevResultsESU[8][2], prevResultsESU[8][1]],
					["ESS",prevResultsESS[8][1], prevResultsESS[8][2], prevResultsESS[8][1]],
					["FIF",prevResultsFIF[8][1], prevResultsFIF[8][2], prevResultsFIF[8][1]],
					["GLA",prevResultsGLA[8][1], prevResultsGLA[8][2], prevResultsGLA[8][1]],
					["GLO",prevResultsGLO[8][1], prevResultsGLO[8][2], prevResultsGLO[8][1]],
					["GRA",prevResultsGRA[8][1], prevResultsGRA[8][2], prevResultsGRA[8][1]],
					["GMA",prevResultsGMA[8][1], prevResultsGMA[8][2], prevResultsGMA[8][1]],
					["GWE",prevResultsGWE[8][1], prevResultsGWE[8][2], prevResultsGWE[8][1]],
					["GWY",prevResultsGWY[8][1], prevResultsGWY[8][2], prevResultsGWY[8][1]],
					["HAM",prevResultsHAM[8][1], prevResultsHAM[8][2], prevResultsHAM[8][1]],
					["HER",prevResultsHER[8][1], prevResultsHER[8][2], prevResultsHER[8][1]],
					["HET",prevResultsHET[8][1], prevResultsHET[8][2], prevResultsHET[8][1]],
					["HAI",prevResultsHAI[8][1], prevResultsHAI[8][2], prevResultsHAI[8][1]],
					["HUM",prevResultsHUM[8][1], prevResultsHUM[8][2], prevResultsHUM[8][1]],
					["KEN",prevResultsKEN[8][1], prevResultsKEN[8][2], prevResultsKEN[8][1]],
					["LAK",prevResultsLAK[8][1], prevResultsLAK[8][2], prevResultsLAK[8][1]],
					["LAC",prevResultsLAC[8][1], prevResultsLAC[8][2], prevResultsLAC[8][1]],
					["LAR",prevResultsLAR[8][1], prevResultsLAR[8][2], prevResultsLAR[8][1]],
					["LIN",prevResultsLIN[8][1], prevResultsLIN[8][2], prevResultsLIN[8][1]],
					["LOT",prevResultsLOT[8][1], prevResultsLOT[8][2], prevResultsLOT[8][1]],
					["MER",prevResultsMER[8][1], prevResultsMER[8][2], prevResultsMER[8][1]],
					["MGL",prevResultsMGL[8][1], prevResultsMGL[8][2], prevResultsMGL[8][1]],
					["NOR",prevResultsNOR[8][1], prevResultsNOR[8][2], prevResultsNOR[8][1]],
					["NEL",prevResultsNEL[8][1], prevResultsNEL[8][2], prevResultsNEL[8][1]],
					["NLO",prevResultsNLO[8][1], prevResultsNLO[8][2], prevResultsNLO[8][1]],
					["NYK",prevResultsNYK[8][1], prevResultsNYK[8][2], prevResultsNYK[8][1]],
					["NTH",prevResultsNTH[8][1], prevResultsNTH[8][2], prevResultsNTH[8][1]],
					["NIR",prevResultsNIR[8][1], prevResultsNIR[8][2], prevResultsNIR[8][1]],
					["NOU",prevResultsNOU[8][1], prevResultsNOU[8][2], prevResultsNOU[8][1]],
					["NOT",prevResultsNOT[8][1], prevResultsNOT[8][2], prevResultsNOT[8][1]],
					["OXF",prevResultsOXF[8][1], prevResultsOXF[8][2], prevResultsOXF[8][1]],
					["POW",prevResultsPOW[8][1], prevResultsPOW[8][2], prevResultsPOW[8][1]],
					["SHR",prevResultsSHR[8][1], prevResultsSHR[8][2], prevResultsSHR[8][1]],
					["SOM",prevResultsSOM[8][1], prevResultsSOM[8][2], prevResultsSOM[8][1]],
					["SCL",prevResultsSCL[8][1], prevResultsSCL[8][2], prevResultsSCL[8][1]],
					["SEL",prevResultsSEL[8][1], prevResultsSEL[8][2], prevResultsSEL[8][1]],
					["SGL",prevResultsSGL[8][1], prevResultsSGL[8][2], prevResultsSGL[8][1]],
					["SSC",prevResultsSSC[8][1], prevResultsSSC[8][2], prevResultsSSC[8][1]],
					["SYK",prevResultsSYK[8][1], prevResultsSYK[8][2], prevResultsSYK[8][1]],
					["STA",prevResultsSTA[8][1], prevResultsSTA[8][2], prevResultsSTA[8][1]],
					["STR",prevResultsSTR[8][1], prevResultsSTR[8][2], prevResultsSTR[8][1]],
					["SUF",prevResultsSUF[8][1], prevResultsSUF[8][2], prevResultsSUF[8][1]],
					["SUR",prevResultsSUR[8][1], prevResultsSUR[8][2], prevResultsSUR[8][1]],
					["TAY",prevResultsTAY[8][1], prevResultsTAY[8][2], prevResultsTAY[8][1]],
					["TEE",prevResultsTEE[8][1], prevResultsTEE[8][2], prevResultsTEE[8][1]],
					["TYN",prevResultsTYN[8][1], prevResultsTYN[8][2], prevResultsTYN[8][1]],
					["WAR",prevResultsWAR[8][1], prevResultsWAR[8][2], prevResultsWAR[8][1]],
					["WGL",prevResultsWGL[8][1], prevResultsWGL[8][2], prevResultsWGL[8][1]],
					["WLO",prevResultsWLO[8][1], prevResultsWLO[8][2], prevResultsWLO[8][1]],
					["WME",prevResultsWME[8][1], prevResultsWME[8][2], prevResultsWME[8][1]],
					["WMW",prevResultsWMW[8][1], prevResultsWMW[8][2], prevResultsWMW[8][1]],
					["WSU",prevResultsWSU[8][1], prevResultsWSU[8][2], prevResultsWSU[8][1]],
					["WYK",prevResultsWYK[8][1], prevResultsWYK[8][2], prevResultsWYK[8][1]],
					["WIL",prevResultsWIL[8][1], prevResultsWIL[8][2], prevResultsWIL[8][1]],
					["WOR",prevResultsWOR[8][1], prevResultsWOR[8][2], prevResultsWOR[8][1]]];
					
		var SNPArray  = [["AVO",prevResultsAVO[9][1], prevResultsAVO[9][2], prevResultsAVO[9][1]],
					["BED",prevResultsBED[9][1], prevResultsBED[9][2], prevResultsBED[9][1]],
					["BER",prevResultsBER[9][1], prevResultsBER[9][2], prevResultsBER[9][1]],
					["BUK",prevResultsBUK[9][1], prevResultsBUK[9][2], prevResultsBUK[9][1]],
					["CAM",prevResultsCAM[9][1], prevResultsCAM[9][2], prevResultsCAM[9][1]],
					["CNL",prevResultsCNL[9][1], prevResultsCNL[9][2], prevResultsCNL[9][1]],
					["CHE",prevResultsCHE[9][1], prevResultsCHE[9][2], prevResultsCHE[9][1]],
					["CLW",prevResultsCLW[9][1], prevResultsCLW[9][2], prevResultsCLW[9][1]],
					["COR",prevResultsCOR[9][1], prevResultsCOR[9][2], prevResultsCOR[9][1]],
					["DUR",prevResultsDUR[9][1], prevResultsDUR[9][2], prevResultsDUR[9][1]],
					["CUM",prevResultsCUM[9][1], prevResultsCUM[9][2], prevResultsCUM[9][1]],
					["DER",prevResultsDER[9][1], prevResultsDER[9][2], prevResultsDER[9][1]],
					["DEV",prevResultsDEV[9][1], prevResultsDEV[9][2], prevResultsDEV[9][1]],
					["DOR",prevResultsDOR[9][1], prevResultsDOR[9][2], prevResultsDOR[9][1]],
					["DYF",prevResultsDYF[9][1], prevResultsDYF[9][2], prevResultsDYF[9][1]],
					["ESU",prevResultsESU[9][1], prevResultsESU[9][2], prevResultsESU[9][1]],
					["ESS",prevResultsESS[9][1], prevResultsESS[9][2], prevResultsESS[9][1]],
					["FIF",prevResultsFIF[9][1], prevResultsFIF[9][2], prevResultsFIF[9][1]],
					["GLA",prevResultsGLA[9][1], prevResultsGLA[9][2], prevResultsGLA[9][1]],
					["GLO",prevResultsGLO[9][1], prevResultsGLO[9][2], prevResultsGLO[9][1]],
					["GRA",prevResultsGRA[9][1], prevResultsGRA[9][2], prevResultsGRA[9][1]],
					["GMA",prevResultsGMA[9][1], prevResultsGMA[9][2], prevResultsGMA[9][1]],
					["GWE",prevResultsGWE[9][1], prevResultsGWE[9][2], prevResultsGWE[9][1]],
					["GWY",prevResultsGWY[9][1], prevResultsGWY[9][2], prevResultsGWY[9][1]],
					["HAM",prevResultsHAM[9][1], prevResultsHAM[9][2], prevResultsHAM[9][1]],
					["HER",prevResultsHER[9][1], prevResultsHER[9][2], prevResultsHER[9][1]],
					["HET",prevResultsHET[9][1], prevResultsHET[9][2], prevResultsHET[9][1]],
					["HAI",prevResultsHAI[9][1], prevResultsHAI[9][2], prevResultsHAI[9][1]],
					["HUM",prevResultsHUM[9][1], prevResultsHUM[9][2], prevResultsHUM[9][1]],
					["KEN",prevResultsKEN[9][1], prevResultsKEN[9][2], prevResultsKEN[9][1]],
					["LAK",prevResultsLAK[9][1], prevResultsLAK[9][2], prevResultsLAK[9][1]],
					["LAC",prevResultsLAC[9][1], prevResultsLAC[9][2], prevResultsLAC[9][1]],
					["LAR",prevResultsLAR[9][1], prevResultsLAR[9][2], prevResultsLAR[9][1]],
					["LIN",prevResultsLIN[9][1], prevResultsLIN[9][2], prevResultsLIN[9][1]],
					["LOT",prevResultsLOT[9][1], prevResultsLOT[9][2], prevResultsLOT[9][1]],
					["MER",prevResultsMER[9][1], prevResultsMER[9][2], prevResultsMER[9][1]],
					["MGL",prevResultsMGL[9][1], prevResultsMGL[9][2], prevResultsMGL[9][1]],
					["NOR",prevResultsNOR[9][1], prevResultsNOR[9][2], prevResultsNOR[9][1]],
					["NEL",prevResultsNEL[9][1], prevResultsNEL[9][2], prevResultsNEL[9][1]],
					["NLO",prevResultsNLO[9][1], prevResultsNLO[9][2], prevResultsNLO[9][1]],
					["NYK",prevResultsNYK[9][1], prevResultsNYK[9][2], prevResultsNYK[9][1]],
					["NTH",prevResultsNTH[9][1], prevResultsNTH[9][2], prevResultsNTH[9][1]],
					["NIR",prevResultsNIR[9][1], prevResultsNIR[9][2], prevResultsNIR[9][1]],
					["NOU",prevResultsNOU[9][1], prevResultsNOU[9][2], prevResultsNOU[9][1]],
					["NOT",prevResultsNOT[9][1], prevResultsNOT[9][2], prevResultsNOT[9][1]],
					["OXF",prevResultsOXF[9][1], prevResultsOXF[9][2], prevResultsOXF[9][1]],
					["POW",prevResultsPOW[9][1], prevResultsPOW[9][2], prevResultsPOW[9][1]],
					["SHR",prevResultsSHR[9][1], prevResultsSHR[9][2], prevResultsSHR[9][1]],
					["SOM",prevResultsSOM[9][1], prevResultsSOM[9][2], prevResultsSOM[9][1]],
					["SCL",prevResultsSCL[9][1], prevResultsSCL[9][2], prevResultsSCL[9][1]],
					["SEL",prevResultsSEL[9][1], prevResultsSEL[9][2], prevResultsSEL[9][1]],
					["SGL",prevResultsSGL[9][1], prevResultsSGL[9][2], prevResultsSGL[9][1]],
					["SSC",prevResultsSSC[9][1], prevResultsSSC[9][2], prevResultsSSC[9][1]],
					["SYK",prevResultsSYK[9][1], prevResultsSYK[9][2], prevResultsSYK[9][1]],
					["STA",prevResultsSTA[9][1], prevResultsSTA[9][2], prevResultsSTA[9][1]],
					["STR",prevResultsSTR[9][1], prevResultsSTR[9][2], prevResultsSTR[9][1]],
					["SUF",prevResultsSUF[9][1], prevResultsSUF[9][2], prevResultsSUF[9][1]],
					["SUR",prevResultsSUR[9][1], prevResultsSUR[9][2], prevResultsSUR[9][1]],
					["TAY",prevResultsTAY[9][1], prevResultsTAY[9][2], prevResultsTAY[9][1]],
					["TEE",prevResultsTEE[9][1], prevResultsTEE[9][2], prevResultsTEE[9][1]],
					["TYN",prevResultsTYN[9][1], prevResultsTYN[9][2], prevResultsTYN[9][1]],
					["WAR",prevResultsWAR[9][1], prevResultsWAR[9][2], prevResultsWAR[9][1]],
					["WGL",prevResultsWGL[9][1], prevResultsWGL[9][2], prevResultsWGL[9][1]],
					["WLO",prevResultsWLO[9][1], prevResultsWLO[9][2], prevResultsWLO[9][1]],
					["WME",prevResultsWME[9][1], prevResultsWME[9][2], prevResultsWME[9][1]],
					["WMW",prevResultsWMW[9][1], prevResultsWMW[9][2], prevResultsWMW[9][1]],
					["WSU",prevResultsWSU[9][1], prevResultsWSU[9][2], prevResultsWSU[9][1]],
					["WYK",prevResultsWYK[9][1], prevResultsWYK[9][2], prevResultsWYK[9][1]],
					["WIL",prevResultsWIL[9][1], prevResultsWIL[9][2], prevResultsWIL[9][1]],
					["WOR",prevResultsWOR[9][1], prevResultsWOR[9][2], prevResultsWOR[9][1]]];

		var SinnFeinArray  = [["AVO",prevResultsAVO[10][1], prevResultsAVO[10][2], prevResultsAVO[10][1]],
					["BED",prevResultsBED[10][1], prevResultsBED[10][2], prevResultsBED[10][1]],
					["BER",prevResultsBER[10][1], prevResultsBER[10][2], prevResultsBER[10][1]],
					["BUK",prevResultsBUK[10][1], prevResultsBUK[10][2], prevResultsBUK[10][1]],
					["CAM",prevResultsCAM[10][1], prevResultsCAM[10][2], prevResultsCAM[10][1]],
					["CNL",prevResultsCNL[10][1], prevResultsCNL[10][2], prevResultsCNL[10][1]],
					["CHE",prevResultsCHE[10][1], prevResultsCHE[10][2], prevResultsCHE[10][1]],
					["CLW",prevResultsCLW[10][1], prevResultsCLW[10][2], prevResultsCLW[10][1]],
					["COR",prevResultsCOR[10][1], prevResultsCOR[10][2], prevResultsCOR[10][1]],
					["DUR",prevResultsDUR[10][1], prevResultsDUR[10][2], prevResultsDUR[10][1]],
					["CUM",prevResultsCUM[10][1], prevResultsCUM[10][2], prevResultsCUM[10][1]],
					["DER",prevResultsDER[10][1], prevResultsDER[10][2], prevResultsDER[10][1]],
					["DEV",prevResultsDEV[10][1], prevResultsDEV[10][2], prevResultsDEV[10][1]],
					["DOR",prevResultsDOR[10][1], prevResultsDOR[10][2], prevResultsDOR[10][1]],
					["DYF",prevResultsDYF[10][1], prevResultsDYF[10][2], prevResultsDYF[10][1]],
					["ESU",prevResultsESU[10][1], prevResultsESU[10][2], prevResultsESU[10][1]],
					["ESS",prevResultsESS[10][1], prevResultsESS[10][2], prevResultsESS[10][1]],
					["FIF",prevResultsFIF[10][1], prevResultsFIF[10][2], prevResultsFIF[10][1]],
					["GLA",prevResultsGLA[10][1], prevResultsGLA[10][2], prevResultsGLA[10][1]],
					["GLO",prevResultsGLO[10][1], prevResultsGLO[10][2], prevResultsGLO[10][1]],
					["GRA",prevResultsGRA[10][1], prevResultsGRA[10][2], prevResultsGRA[10][1]],
					["GMA",prevResultsGMA[10][1], prevResultsGMA[10][2], prevResultsGMA[10][1]],
					["GWE",prevResultsGWE[10][1], prevResultsGWE[10][2], prevResultsGWE[10][1]],
					["GWY",prevResultsGWY[10][1], prevResultsGWY[10][2], prevResultsGWY[10][1]],
					["HAM",prevResultsHAM[10][1], prevResultsHAM[10][2], prevResultsHAM[10][1]],
					["HER",prevResultsHER[10][1], prevResultsHER[10][2], prevResultsHER[10][1]],
					["HET",prevResultsHET[10][1], prevResultsHET[10][2], prevResultsHET[10][1]],
					["HAI",prevResultsHAI[10][1], prevResultsHAI[10][2], prevResultsHAI[10][1]],
					["HUM",prevResultsHUM[10][1], prevResultsHUM[10][2], prevResultsHUM[10][1]],
					["KEN",prevResultsKEN[10][1], prevResultsKEN[10][2], prevResultsKEN[10][1]],
					["LAK",prevResultsLAK[10][1], prevResultsLAK[10][2], prevResultsLAK[10][1]],
					["LAC",prevResultsLAC[10][1], prevResultsLAC[10][2], prevResultsLAC[10][1]],
					["LAR",prevResultsLAR[10][1], prevResultsLAR[10][2], prevResultsLAR[10][1]],
					["LIN",prevResultsLIN[10][1], prevResultsLIN[10][2], prevResultsLIN[10][1]],
					["LOT",prevResultsLOT[10][1], prevResultsLOT[10][2], prevResultsLOT[10][1]],
					["MER",prevResultsMER[10][1], prevResultsMER[10][2], prevResultsMER[10][1]],
					["MGL",prevResultsMGL[10][1], prevResultsMGL[10][2], prevResultsMGL[10][1]],
					["NOR",prevResultsNOR[10][1], prevResultsNOR[10][2], prevResultsNOR[10][1]],
					["NEL",prevResultsNEL[10][1], prevResultsNEL[10][2], prevResultsNEL[10][1]],
					["NLO",prevResultsNLO[10][1], prevResultsNLO[10][2], prevResultsNLO[10][1]],
					["NYK",prevResultsNYK[10][1], prevResultsNYK[10][2], prevResultsNYK[10][1]],
					["NTH",prevResultsNTH[10][1], prevResultsNTH[10][2], prevResultsNTH[10][1]],
					["NIR",prevResultsNIR[10][1], prevResultsNIR[10][2], prevResultsNIR[10][1]],
					["NOU",prevResultsNOU[10][1], prevResultsNOU[10][2], prevResultsNOU[10][1]],
					["NOT",prevResultsNOT[10][1], prevResultsNOT[10][2], prevResultsNOT[10][1]],
					["OXF",prevResultsOXF[10][1], prevResultsOXF[10][2], prevResultsOXF[10][1]],
					["POW",prevResultsPOW[10][1], prevResultsPOW[10][2], prevResultsPOW[10][1]],
					["SHR",prevResultsSHR[10][1], prevResultsSHR[10][2], prevResultsSHR[10][1]],
					["SOM",prevResultsSOM[10][1], prevResultsSOM[10][2], prevResultsSOM[10][1]],
					["SCL",prevResultsSCL[10][1], prevResultsSCL[10][2], prevResultsSCL[10][1]],
					["SEL",prevResultsSEL[10][1], prevResultsSEL[10][2], prevResultsSEL[10][1]],
					["SGL",prevResultsSGL[10][1], prevResultsSGL[10][2], prevResultsSGL[10][1]],
					["SSC",prevResultsSSC[10][1], prevResultsSSC[10][2], prevResultsSSC[10][1]],
					["SYK",prevResultsSYK[10][1], prevResultsSYK[10][2], prevResultsSYK[10][1]],
					["STA",prevResultsSTA[10][1], prevResultsSTA[10][2], prevResultsSTA[10][1]],
					["STR",prevResultsSTR[10][1], prevResultsSTR[10][2], prevResultsSTR[10][1]],
					["SUF",prevResultsSUF[10][1], prevResultsSUF[10][2], prevResultsSUF[10][1]],
					["SUR",prevResultsSUR[10][1], prevResultsSUR[10][2], prevResultsSUR[10][1]],
					["TAY",prevResultsTAY[10][1], prevResultsTAY[10][2], prevResultsTAY[10][1]],
					["TEE",prevResultsTEE[10][1], prevResultsTEE[10][2], prevResultsTEE[10][1]],
					["TYN",prevResultsTYN[10][1], prevResultsTYN[10][2], prevResultsTYN[10][1]],
					["WAR",prevResultsWAR[10][1], prevResultsWAR[10][2], prevResultsWAR[10][1]],
					["WGL",prevResultsWGL[10][1], prevResultsWGL[10][2], prevResultsWGL[10][1]],
					["WLO",prevResultsWLO[10][1], prevResultsWLO[10][2], prevResultsWLO[10][1]],
					["WME",prevResultsWME[10][1], prevResultsWME[10][2], prevResultsWME[10][1]],
					["WMW",prevResultsWMW[10][1], prevResultsWMW[10][2], prevResultsWMW[10][1]],
					["WSU",prevResultsWSU[10][1], prevResultsWSU[10][2], prevResultsWSU[10][1]],
					["WYK",prevResultsWYK[10][1], prevResultsWYK[10][2], prevResultsWYK[10][1]],
					["WIL",prevResultsWIL[10][1], prevResultsWIL[10][2], prevResultsWIL[10][1]],
					["WOR",prevResultsWOR[10][1], prevResultsWOR[10][2], prevResultsWOR[10][1]]];
					
		var UUPArray  = [["AVO",prevResultsAVO[11][1], prevResultsAVO[11][2], prevResultsAVO[11][1]],
					["BED",prevResultsBED[11][1], prevResultsBED[11][2], prevResultsBED[11][1]],
					["BER",prevResultsBER[11][1], prevResultsBER[11][2], prevResultsBER[11][1]],
					["BUK",prevResultsBUK[11][1], prevResultsBUK[11][2], prevResultsBUK[11][1]],
					["CAM",prevResultsCAM[11][1], prevResultsCAM[11][2], prevResultsCAM[11][1]],
					["CNL",prevResultsCNL[11][1], prevResultsCNL[11][2], prevResultsCNL[11][1]],
					["CHE",prevResultsCHE[11][1], prevResultsCHE[11][2], prevResultsCHE[11][1]],
					["CLW",prevResultsCLW[11][1], prevResultsCLW[11][2], prevResultsCLW[11][1]],
					["COR",prevResultsCOR[11][1], prevResultsCOR[11][2], prevResultsCOR[11][1]],
					["DUR",prevResultsDUR[11][1], prevResultsDUR[11][2], prevResultsDUR[11][1]],
					["CUM",prevResultsCUM[11][1], prevResultsCUM[11][2], prevResultsCUM[11][1]],
					["DER",prevResultsDER[11][1], prevResultsDER[11][2], prevResultsDER[11][1]],
					["DEV",prevResultsDEV[11][1], prevResultsDEV[11][2], prevResultsDEV[11][1]],
					["DOR",prevResultsDOR[11][1], prevResultsDOR[11][2], prevResultsDOR[11][1]],
					["DYF",prevResultsDYF[11][1], prevResultsDYF[11][2], prevResultsDYF[11][1]],
					["ESU",prevResultsESU[11][1], prevResultsESU[11][2], prevResultsESU[11][1]],
					["ESS",prevResultsESS[11][1], prevResultsESS[11][2], prevResultsESS[11][1]],
					["FIF",prevResultsFIF[11][1], prevResultsFIF[11][2], prevResultsFIF[11][1]],
					["GLA",prevResultsGLA[11][1], prevResultsGLA[11][2], prevResultsGLA[11][1]],
					["GLO",prevResultsGLO[11][1], prevResultsGLO[11][2], prevResultsGLO[11][1]],
					["GRA",prevResultsGRA[11][1], prevResultsGRA[11][2], prevResultsGRA[11][1]],
					["GMA",prevResultsGMA[11][1], prevResultsGMA[11][2], prevResultsGMA[11][1]],
					["GWE",prevResultsGWE[11][1], prevResultsGWE[11][2], prevResultsGWE[11][1]],
					["GWY",prevResultsGWY[11][1], prevResultsGWY[11][2], prevResultsGWY[11][1]],
					["HAM",prevResultsHAM[11][1], prevResultsHAM[11][2], prevResultsHAM[11][1]],
					["HER",prevResultsHER[11][1], prevResultsHER[11][2], prevResultsHER[11][1]],
					["HET",prevResultsHET[11][1], prevResultsHET[11][2], prevResultsHET[11][1]],
					["HAI",prevResultsHAI[11][1], prevResultsHAI[11][2], prevResultsHAI[11][1]],
					["HUM",prevResultsHUM[11][1], prevResultsHUM[11][2], prevResultsHUM[11][1]],
					["KEN",prevResultsKEN[11][1], prevResultsKEN[11][2], prevResultsKEN[11][1]],
					["LAK",prevResultsLAK[11][1], prevResultsLAK[11][2], prevResultsLAK[11][1]],
					["LAC",prevResultsLAC[11][1], prevResultsLAC[11][2], prevResultsLAC[11][1]],
					["LAR",prevResultsLAR[11][1], prevResultsLAR[11][2], prevResultsLAR[11][1]],
					["LIN",prevResultsLIN[11][1], prevResultsLIN[11][2], prevResultsLIN[11][1]],
					["LOT",prevResultsLOT[11][1], prevResultsLOT[11][2], prevResultsLOT[11][1]],
					["MER",prevResultsMER[11][1], prevResultsMER[11][2], prevResultsMER[11][1]],
					["MGL",prevResultsMGL[11][1], prevResultsMGL[11][2], prevResultsMGL[11][1]],
					["NOR",prevResultsNOR[11][1], prevResultsNOR[11][2], prevResultsNOR[11][1]],
					["NEL",prevResultsNEL[11][1], prevResultsNEL[11][2], prevResultsNEL[11][1]],
					["NLO",prevResultsNLO[11][1], prevResultsNLO[11][2], prevResultsNLO[11][1]],
					["NYK",prevResultsNYK[11][1], prevResultsNYK[11][2], prevResultsNYK[11][1]],
					["NTH",prevResultsNTH[11][1], prevResultsNTH[11][2], prevResultsNTH[11][1]],
					["NIR",prevResultsNIR[11][1], prevResultsNIR[11][2], prevResultsNIR[11][1]],
					["NOU",prevResultsNOU[11][1], prevResultsNOU[11][2], prevResultsNOU[11][1]],
					["NOT",prevResultsNOT[11][1], prevResultsNOT[11][2], prevResultsNOT[11][1]],
					["OXF",prevResultsOXF[11][1], prevResultsOXF[11][2], prevResultsOXF[11][1]],
					["POW",prevResultsPOW[11][1], prevResultsPOW[11][2], prevResultsPOW[11][1]],
					["SHR",prevResultsSHR[11][1], prevResultsSHR[11][2], prevResultsSHR[11][1]],
					["SOM",prevResultsSOM[11][1], prevResultsSOM[11][2], prevResultsSOM[11][1]],
					["SCL",prevResultsSCL[11][1], prevResultsSCL[11][2], prevResultsSCL[11][1]],
					["SEL",prevResultsSEL[11][1], prevResultsSEL[11][2], prevResultsSEL[11][1]],
					["SGL",prevResultsSGL[11][1], prevResultsSGL[11][2], prevResultsSGL[11][1]],
					["SSC",prevResultsSSC[11][1], prevResultsSSC[11][2], prevResultsSSC[11][1]],
					["SYK",prevResultsSYK[11][1], prevResultsSYK[11][2], prevResultsSYK[11][1]],
					["STA",prevResultsSTA[11][1], prevResultsSTA[11][2], prevResultsSTA[11][1]],
					["STR",prevResultsSTR[11][1], prevResultsSTR[11][2], prevResultsSTR[11][1]],
					["SUF",prevResultsSUF[11][1], prevResultsSUF[11][2], prevResultsSUF[11][1]],
					["SUR",prevResultsSUR[11][1], prevResultsSUR[11][2], prevResultsSUR[11][1]],
					["TAY",prevResultsTAY[11][1], prevResultsTAY[11][2], prevResultsTAY[11][1]],
					["TEE",prevResultsTEE[11][1], prevResultsTEE[11][2], prevResultsTEE[11][1]],
					["TYN",prevResultsTYN[11][1], prevResultsTYN[11][2], prevResultsTYN[11][1]],
					["WAR",prevResultsWAR[11][1], prevResultsWAR[11][2], prevResultsWAR[11][1]],
					["WGL",prevResultsWGL[11][1], prevResultsWGL[11][2], prevResultsWGL[11][1]],
					["WLO",prevResultsWLO[11][1], prevResultsWLO[11][2], prevResultsWLO[11][1]],
					["WME",prevResultsWME[11][1], prevResultsWME[11][2], prevResultsWME[11][1]],
					["WMW",prevResultsWMW[11][1], prevResultsWMW[11][2], prevResultsWMW[11][1]],
					["WSU",prevResultsWSU[11][1], prevResultsWSU[11][2], prevResultsWSU[11][1]],
					["WYK",prevResultsWYK[11][1], prevResultsWYK[11][2], prevResultsWYK[11][1]],
					["WIL",prevResultsWIL[11][1], prevResultsWIL[11][2], prevResultsWIL[11][1]],
					["WOR",prevResultsWOR[11][1], prevResultsWOR[11][2], prevResultsWOR[11][1]]];


		
		nationalResultsToConstituencyLevelCalculation(initialisation, AllianceArray, 0);
		nationalResultsToConstituencyLevelCalculation(initialisation, ConservativeArray, 1);
		nationalResultsToConstituencyLevelCalculation(initialisation, DUPArray, 2);
		nationalResultsToConstituencyLevelCalculation(initialisation, GreenArray, 3);
		nationalResultsToConstituencyLevelCalculation(initialisation, LabourArray, 4);
		nationalResultsToConstituencyLevelCalculation(initialisation, LibDemArray, 5);
		nationalResultsToConstituencyLevelCalculation(initialisation, PlaidArray, 6);
		nationalResultsToConstituencyLevelCalculation(initialisation, RefUKArray, 7);
		nationalResultsToConstituencyLevelCalculation(initialisation, SDLPArray, 8);
		nationalResultsToConstituencyLevelCalculation(initialisation, SNPArray, 9);
		nationalResultsToConstituencyLevelCalculation(initialisation, SinnFeinArray, 10);
		nationalResultsToConstituencyLevelCalculation(initialisation, UUPArray, 11);
	}
	else
	{
		currResultsAVO.sort(sortFunctionC);
		currResultsBED.sort(sortFunctionC);
		currResultsBER.sort(sortFunctionC);
		currResultsBUK.sort(sortFunctionC);
		currResultsCAM.sort(sortFunctionC);
		currResultsCNL.sort(sortFunctionC);
		currResultsCHE.sort(sortFunctionC);
		currResultsCLW.sort(sortFunctionC);
		currResultsCOR.sort(sortFunctionC);
		currResultsDUR.sort(sortFunctionC);
		currResultsCUM.sort(sortFunctionC);
		currResultsDER.sort(sortFunctionC);
		currResultsDEV.sort(sortFunctionC);
		currResultsDOR.sort(sortFunctionC);
		currResultsDYF.sort(sortFunctionC);
		currResultsESU.sort(sortFunctionC);
		currResultsESS.sort(sortFunctionC);
		currResultsFIF.sort(sortFunctionC);
		currResultsGLA.sort(sortFunctionC);
		currResultsGLO.sort(sortFunctionC);
		currResultsGRA.sort(sortFunctionC);
		currResultsGMA.sort(sortFunctionC);
		currResultsGWE.sort(sortFunctionC);
		currResultsGWY.sort(sortFunctionC);
		currResultsHAM.sort(sortFunctionC);
		currResultsHER.sort(sortFunctionC);
		currResultsHET.sort(sortFunctionC);
		currResultsHAI.sort(sortFunctionC);
		currResultsHUM.sort(sortFunctionC);
		currResultsKEN.sort(sortFunctionC);
		currResultsLAK.sort(sortFunctionC);
		currResultsLAC.sort(sortFunctionC);
		currResultsLAR.sort(sortFunctionC);
		currResultsLIN.sort(sortFunctionC);
		currResultsLOT.sort(sortFunctionC);
		currResultsMER.sort(sortFunctionC);
		currResultsMGL.sort(sortFunctionC);
		currResultsNOR.sort(sortFunctionC);
		currResultsNEL.sort(sortFunctionC);
		currResultsNLO.sort(sortFunctionC);
		currResultsNYK.sort(sortFunctionC);
		currResultsNTH.sort(sortFunctionC);
		currResultsNIR.sort(sortFunctionC);
		currResultsNOU.sort(sortFunctionC);
		currResultsNOT.sort(sortFunctionC);
		currResultsOXF.sort(sortFunctionC);
		currResultsPOW.sort(sortFunctionC);
		currResultsSHR.sort(sortFunctionC);
		currResultsSOM.sort(sortFunctionC);
		currResultsSCL.sort(sortFunctionC);
		currResultsSEL.sort(sortFunctionC);
		currResultsSGL.sort(sortFunctionC);
		currResultsSSC.sort(sortFunctionC);
		currResultsSYK.sort(sortFunctionC);
		currResultsSTA.sort(sortFunctionC);
		currResultsSTR.sort(sortFunctionC);
		currResultsSUF.sort(sortFunctionC);
		currResultsSUR.sort(sortFunctionC);
		currResultsTAY.sort(sortFunctionC);
		currResultsTEE.sort(sortFunctionC);
		currResultsTYN.sort(sortFunctionC);
		currResultsWAR.sort(sortFunctionC);
		currResultsWGL.sort(sortFunctionC);
		currResultsWLO.sort(sortFunctionC);
		currResultsWME.sort(sortFunctionC);
		currResultsWMW.sort(sortFunctionC);
		currResultsWSU.sort(sortFunctionC);
		currResultsWYK.sort(sortFunctionC);
		currResultsWIL.sort(sortFunctionC);
		currResultsWOR.sort(sortFunctionC);
		currNationalResults.sort(sortFunctionC);
		
		var AllianceArray  = [["AVO",currResultsAVO[0][1], currResultsAVO[0][2], currResultsAVO[0][1]],
					["BED",currResultsBED[0][1], currResultsBED[0][2], currResultsBED[0][1]],
					["BER",currResultsBER[0][1], currResultsBER[0][2], currResultsBER[0][1]],
					["BUK",currResultsBUK[0][1], currResultsBUK[0][2], currResultsBUK[0][1]],
					["CAM",currResultsCAM[0][1], currResultsCAM[0][2], currResultsCAM[0][1]],
					["CNL",currResultsCNL[0][1], currResultsCNL[0][2], currResultsCNL[0][1]],
					["CHE",currResultsCHE[0][1], currResultsCHE[0][2], currResultsCHE[0][1]],
					["CLW",currResultsCLW[0][1], currResultsCLW[0][2], currResultsCLW[0][1]],
					["COR",currResultsCOR[0][1], currResultsCOR[0][2], currResultsCOR[0][1]],
					["DUR",currResultsDUR[0][1], currResultsDUR[0][2], currResultsDUR[0][1]],
					["CUM",currResultsCUM[0][1], currResultsCUM[0][2], currResultsCUM[0][1]],
					["DER",currResultsDER[0][1], currResultsDER[0][2], currResultsDER[0][1]],
					["DEV",currResultsDEV[0][1], currResultsDEV[0][2], currResultsDEV[0][1]],
					["DOR",currResultsDOR[0][1], currResultsDOR[0][2], currResultsDOR[0][1]],
					["DYF",currResultsDYF[0][1], currResultsDYF[0][2], currResultsDYF[0][1]],
					["ESU",currResultsESU[0][1], currResultsESU[0][2], currResultsESU[0][1]],
					["ESS",currResultsESS[0][1], currResultsESS[0][2], currResultsESS[0][1]],
					["FIF",currResultsFIF[0][1], currResultsFIF[0][2], currResultsFIF[0][1]],
					["GLA",currResultsGLA[0][1], currResultsGLA[0][2], currResultsGLA[0][1]],
					["GLO",currResultsGLO[0][1], currResultsGLO[0][2], currResultsGLO[0][1]],
					["GRA",currResultsGRA[0][1], currResultsGRA[0][2], currResultsGRA[0][1]],
					["GMA",currResultsGMA[0][1], currResultsGMA[0][2], currResultsGMA[0][1]],
					["GWE",currResultsGWE[0][1], currResultsGWE[0][2], currResultsGWE[0][1]],
					["GWY",currResultsGWY[0][1], currResultsGWY[0][2], currResultsGWY[0][1]],
					["HAM",currResultsHAM[0][1], currResultsHAM[0][2], currResultsHAM[0][1]],
					["HER",currResultsHER[0][1], currResultsHER[0][2], currResultsHER[0][1]],
					["HET",currResultsHET[0][1], currResultsHET[0][2], currResultsHET[0][1]],
					["HAI",currResultsHAI[0][1], currResultsHAI[0][2], currResultsHAI[0][1]],
					["HUM",currResultsHUM[0][1], currResultsHUM[0][2], currResultsHUM[0][1]],
					["KEN",currResultsKEN[0][1], currResultsKEN[0][2], currResultsKEN[0][1]],
					["LAK",currResultsLAK[0][1], currResultsLAK[0][2], currResultsLAK[0][1]],
					["LAC",currResultsLAC[0][1], currResultsLAC[0][2], currResultsLAC[0][1]],
					["LAR",currResultsLAR[0][1], currResultsLAR[0][2], currResultsLAR[0][1]],
					["LIN",currResultsLIN[0][1], currResultsLIN[0][2], currResultsLIN[0][1]],
					["LOT",currResultsLOT[0][1], currResultsLOT[0][2], currResultsLOT[0][1]],
					["MER",currResultsMER[0][1], currResultsMER[0][2], currResultsMER[0][1]],
					["MGL",currResultsMGL[0][1], currResultsMGL[0][2], currResultsMGL[0][1]],
					["NOR",currResultsNOR[0][1], currResultsNOR[0][2], currResultsNOR[0][1]],
					["NEL",currResultsNEL[0][1], currResultsNEL[0][2], currResultsNEL[0][1]],
					["NLO",currResultsNLO[0][1], currResultsNLO[0][2], currResultsNLO[0][1]],
					["NYK",currResultsNYK[0][1], currResultsNYK[0][2], currResultsNYK[0][1]],
					["NTH",currResultsNTH[0][1], currResultsNTH[0][2], currResultsNTH[0][1]],
					["NIR",currResultsNIR[0][1], currResultsNIR[0][2], currResultsNIR[0][1]],
					["NOU",currResultsNOU[0][1], currResultsNOU[0][2], currResultsNOU[0][1]],
					["NOT",currResultsNOT[0][1], currResultsNOT[0][2], currResultsNOT[0][1]],
					["OXF",currResultsOXF[0][1], currResultsOXF[0][2], currResultsOXF[0][1]],
					["POW",currResultsPOW[0][1], currResultsPOW[0][2], currResultsPOW[0][1]],
					["SHR",currResultsSHR[0][1], currResultsSHR[0][2], currResultsSHR[0][1]],
					["SOM",currResultsSOM[0][1], currResultsSOM[0][2], currResultsSOM[0][1]],
					["SCL",currResultsSCL[0][1], currResultsSCL[0][2], currResultsSCL[0][1]],
					["SEL",currResultsSEL[0][1], currResultsSEL[0][2], currResultsSEL[0][1]],
					["SGL",currResultsSGL[0][1], currResultsSGL[0][2], currResultsSGL[0][1]],
					["SSC",currResultsSSC[0][1], currResultsSSC[0][2], currResultsSSC[0][1]],
					["SYK",currResultsSYK[0][1], currResultsSYK[0][2], currResultsSYK[0][1]],
					["STA",currResultsSTA[0][1], currResultsSTA[0][2], currResultsSTA[0][1]],
					["STR",currResultsSTR[0][1], currResultsSTR[0][2], currResultsSTR[0][1]],
					["SUF",currResultsSUF[0][1], currResultsSUF[0][2], currResultsSUF[0][1]],
					["SUR",currResultsSUR[0][1], currResultsSUR[0][2], currResultsSUR[0][1]],
					["TAY",currResultsTAY[0][1], currResultsTAY[0][2], currResultsTAY[0][1]],
					["TEE",currResultsTEE[0][1], currResultsTEE[0][2], currResultsTEE[0][1]],
					["TYN",currResultsTYN[0][1], currResultsTYN[0][2], currResultsTYN[0][1]],
					["WAR",currResultsWAR[0][1], currResultsWAR[0][2], currResultsWAR[0][1]],
					["WGL",currResultsWGL[0][1], currResultsWGL[0][2], currResultsWGL[0][1]],
					["WLO",currResultsWLO[0][1], currResultsWLO[0][2], currResultsWLO[0][1]],
					["WME",currResultsWME[0][1], currResultsWME[0][2], currResultsWME[0][1]],
					["WMW",currResultsWMW[0][1], currResultsWMW[0][2], currResultsWMW[0][1]],
					["WSU",currResultsWSU[0][1], currResultsWSU[0][2], currResultsWSU[0][1]],
					["WYK",currResultsWYK[0][1], currResultsWYK[0][2], currResultsWYK[0][1]],
					["WIL",currResultsWIL[0][1], currResultsWIL[0][2], currResultsWIL[0][1]],
					["WOR",currResultsWOR[0][1], currResultsWOR[0][2], currResultsWOR[0][1]]];

		var ConservativeArray  = [["AVO",currResultsAVO[1][1], currResultsAVO[1][2], currResultsAVO[1][1]],
					["BED",currResultsBED[1][1], currResultsBED[1][2], currResultsBED[1][1]],
					["BER",currResultsBER[1][1], currResultsBER[1][2], currResultsBER[1][1]],
					["BUK",currResultsBUK[1][1], currResultsBUK[1][2], currResultsBUK[1][1]],
					["CAM",currResultsCAM[1][1], currResultsCAM[1][2], currResultsCAM[1][1]],
					["CNL",currResultsCNL[1][1], currResultsCNL[1][2], currResultsCNL[1][1]],
					["CHE",currResultsCHE[1][1], currResultsCHE[1][2], currResultsCHE[1][1]],
					["CLW",currResultsCLW[1][1], currResultsCLW[1][2], currResultsCLW[1][1]],
					["COR",currResultsCOR[1][1], currResultsCOR[1][2], currResultsCOR[1][1]],
					["DUR",currResultsDUR[1][1], currResultsDUR[1][2], currResultsDUR[1][1]],
					["CUM",currResultsCUM[1][1], currResultsCUM[1][2], currResultsCUM[1][1]],
					["DER",currResultsDER[1][1], currResultsDER[1][2], currResultsDER[1][1]],
					["DEV",currResultsDEV[1][1], currResultsDEV[1][2], currResultsDEV[1][1]],
					["DOR",currResultsDOR[1][1], currResultsDOR[1][2], currResultsDOR[1][1]],
					["DYF",currResultsDYF[1][1], currResultsDYF[1][2], currResultsDYF[1][1]],
					["ESU",currResultsESU[1][1], currResultsESU[1][2], currResultsESU[1][1]],
					["ESS",currResultsESS[1][1], currResultsESS[1][2], currResultsESS[1][1]],
					["FIF",currResultsFIF[1][1], currResultsFIF[1][2], currResultsFIF[1][1]],
					["GLA",currResultsGLA[1][1], currResultsGLA[1][2], currResultsGLA[1][1]],
					["GLO",currResultsGLO[1][1], currResultsGLO[1][2], currResultsGLO[1][1]],
					["GRA",currResultsGRA[1][1], currResultsGRA[1][2], currResultsGRA[1][1]],
					["GMA",currResultsGMA[1][1], currResultsGMA[1][2], currResultsGMA[1][1]],
					["GWE",currResultsGWE[1][1], currResultsGWE[1][2], currResultsGWE[1][1]],
					["GWY",currResultsGWY[1][1], currResultsGWY[1][2], currResultsGWY[1][1]],
					["HAM",currResultsHAM[1][1], currResultsHAM[1][2], currResultsHAM[1][1]],
					["HER",currResultsHER[1][1], currResultsHER[1][2], currResultsHER[1][1]],
					["HET",currResultsHET[1][1], currResultsHET[1][2], currResultsHET[1][1]],
					["HAI",currResultsHAI[1][1], currResultsHAI[1][2], currResultsHAI[1][1]],
					["HUM",currResultsHUM[1][1], currResultsHUM[1][2], currResultsHUM[1][1]],
					["KEN",currResultsKEN[1][1], currResultsKEN[1][2], currResultsKEN[1][1]],
					["LAK",currResultsLAK[1][1], currResultsLAK[1][2], currResultsLAK[1][1]],
					["LAC",currResultsLAC[1][1], currResultsLAC[1][2], currResultsLAC[1][1]],
					["LAR",currResultsLAR[1][1], currResultsLAR[1][2], currResultsLAR[1][1]],
					["LIN",currResultsLIN[1][1], currResultsLIN[1][2], currResultsLIN[1][1]],
					["LOT",currResultsLOT[1][1], currResultsLOT[1][2], currResultsLOT[1][1]],
					["MER",currResultsMER[1][1], currResultsMER[1][2], currResultsMER[1][1]],
					["MGL",currResultsMGL[1][1], currResultsMGL[1][2], currResultsMGL[1][1]],
					["NOR",currResultsNOR[1][1], currResultsNOR[1][2], currResultsNOR[1][1]],
					["NEL",currResultsNEL[1][1], currResultsNEL[1][2], currResultsNEL[1][1]],
					["NLO",currResultsNLO[1][1], currResultsNLO[1][2], currResultsNLO[1][1]],
					["NYK",currResultsNYK[1][1], currResultsNYK[1][2], currResultsNYK[1][1]],
					["NTH",currResultsNTH[1][1], currResultsNTH[1][2], currResultsNTH[1][1]],
					["NIR",currResultsNIR[1][1], currResultsNIR[1][2], currResultsNIR[1][1]],
					["NOU",currResultsNOU[1][1], currResultsNOU[1][2], currResultsNOU[1][1]],
					["NOT",currResultsNOT[1][1], currResultsNOT[1][2], currResultsNOT[1][1]],
					["OXF",currResultsOXF[1][1], currResultsOXF[1][2], currResultsOXF[1][1]],
					["POW",currResultsPOW[1][1], currResultsPOW[1][2], currResultsPOW[1][1]],
					["SHR",currResultsSHR[1][1], currResultsSHR[1][2], currResultsSHR[1][1]],
					["SOM",currResultsSOM[1][1], currResultsSOM[1][2], currResultsSOM[1][1]],
					["SCL",currResultsSCL[1][1], currResultsSCL[1][2], currResultsSCL[1][1]],
					["SEL",currResultsSEL[1][1], currResultsSEL[1][2], currResultsSEL[1][1]],
					["SGL",currResultsSGL[1][1], currResultsSGL[1][2], currResultsSGL[1][1]],
					["SSC",currResultsSSC[1][1], currResultsSSC[1][2], currResultsSSC[1][1]],
					["SYK",currResultsSYK[1][1], currResultsSYK[1][2], currResultsSYK[1][1]],
					["STA",currResultsSTA[1][1], currResultsSTA[1][2], currResultsSTA[1][1]],
					["STR",currResultsSTR[1][1], currResultsSTR[1][2], currResultsSTR[1][1]],
					["SUF",currResultsSUF[1][1], currResultsSUF[1][2], currResultsSUF[1][1]],
					["SUR",currResultsSUR[1][1], currResultsSUR[1][2], currResultsSUR[1][1]],
					["TAY",currResultsTAY[1][1], currResultsTAY[1][2], currResultsTAY[1][1]],
					["TEE",currResultsTEE[1][1], currResultsTEE[1][2], currResultsTEE[1][1]],
					["TYN",currResultsTYN[1][1], currResultsTYN[1][2], currResultsTYN[1][1]],
					["WAR",currResultsWAR[1][1], currResultsWAR[1][2], currResultsWAR[1][1]],
					["WGL",currResultsWGL[1][1], currResultsWGL[1][2], currResultsWGL[1][1]],
					["WLO",currResultsWLO[1][1], currResultsWLO[1][2], currResultsWLO[1][1]],
					["WME",currResultsWME[1][1], currResultsWME[1][2], currResultsWME[1][1]],
					["WMW",currResultsWMW[1][1], currResultsWMW[1][2], currResultsWMW[1][1]],
					["WSU",currResultsWSU[1][1], currResultsWSU[1][2], currResultsWSU[1][1]],
					["WYK",currResultsWYK[1][1], currResultsWYK[1][2], currResultsWYK[1][1]],
					["WIL",currResultsWIL[1][1], currResultsWIL[1][2], currResultsWIL[1][1]],
					["WOR",currResultsWOR[1][1], currResultsWOR[1][2], currResultsWOR[1][1]]];
					
		var DUPArray  = [["AVO",currResultsAVO[2][1], currResultsAVO[2][2], currResultsAVO[2][1]],
					["BED",currResultsBED[2][1], currResultsBED[2][2], currResultsBED[2][1]],
					["BER",currResultsBER[2][1], currResultsBER[2][2], currResultsBER[2][1]],
					["BUK",currResultsBUK[2][1], currResultsBUK[2][2], currResultsBUK[2][1]],
					["CAM",currResultsCAM[2][1], currResultsCAM[2][2], currResultsCAM[2][1]],
					["CNL",currResultsCNL[2][1], currResultsCNL[2][2], currResultsCNL[2][1]],
					["CHE",currResultsCHE[2][1], currResultsCHE[2][2], currResultsCHE[2][1]],
					["CLW",currResultsCLW[2][1], currResultsCLW[2][2], currResultsCLW[2][1]],
					["COR",currResultsCOR[2][1], currResultsCOR[2][2], currResultsCOR[2][1]],
					["DUR",currResultsDUR[2][1], currResultsDUR[2][2], currResultsDUR[2][1]],
					["CUM",currResultsCUM[2][1], currResultsCUM[2][2], currResultsCUM[2][1]],
					["DER",currResultsDER[2][1], currResultsDER[2][2], currResultsDER[2][1]],
					["DEV",currResultsDEV[2][1], currResultsDEV[2][2], currResultsDEV[2][1]],
					["DOR",currResultsDOR[2][1], currResultsDOR[2][2], currResultsDOR[2][1]],
					["DYF",currResultsDYF[2][1], currResultsDYF[2][2], currResultsDYF[2][1]],
					["ESU",currResultsESU[2][1], currResultsESU[2][2], currResultsESU[2][1]],
					["ESS",currResultsESS[2][1], currResultsESS[2][2], currResultsESS[2][1]],
					["FIF",currResultsFIF[2][1], currResultsFIF[2][2], currResultsFIF[2][1]],
					["GLA",currResultsGLA[2][1], currResultsGLA[2][2], currResultsGLA[2][1]],
					["GLO",currResultsGLO[2][1], currResultsGLO[2][2], currResultsGLO[2][1]],
					["GRA",currResultsGRA[2][1], currResultsGRA[2][2], currResultsGRA[2][1]],
					["GMA",currResultsGMA[2][1], currResultsGMA[2][2], currResultsGMA[2][1]],
					["GWE",currResultsGWE[2][1], currResultsGWE[2][2], currResultsGWE[2][1]],
					["GWY",currResultsGWY[2][1], currResultsGWY[2][2], currResultsGWY[2][1]],
					["HAM",currResultsHAM[2][1], currResultsHAM[2][2], currResultsHAM[2][1]],
					["HER",currResultsHER[2][1], currResultsHER[2][2], currResultsHER[2][1]],
					["HET",currResultsHET[2][1], currResultsHET[2][2], currResultsHET[2][1]],
					["HAI",currResultsHAI[2][1], currResultsHAI[2][2], currResultsHAI[2][1]],
					["HUM",currResultsHUM[2][1], currResultsHUM[2][2], currResultsHUM[2][1]],
					["KEN",currResultsKEN[2][1], currResultsKEN[2][2], currResultsKEN[2][1]],
					["LAK",currResultsLAK[2][1], currResultsLAK[2][2], currResultsLAK[2][1]],
					["LAC",currResultsLAC[2][1], currResultsLAC[2][2], currResultsLAC[2][1]],
					["LAR",currResultsLAR[2][1], currResultsLAR[2][2], currResultsLAR[2][1]],
					["LIN",currResultsLIN[2][1], currResultsLIN[2][2], currResultsLIN[2][1]],
					["LOT",currResultsLOT[2][1], currResultsLOT[2][2], currResultsLOT[2][1]],
					["MER",currResultsMER[2][1], currResultsMER[2][2], currResultsMER[2][1]],
					["MGL",currResultsMGL[2][1], currResultsMGL[2][2], currResultsMGL[2][1]],
					["NOR",currResultsNOR[2][1], currResultsNOR[2][2], currResultsNOR[2][1]],
					["NEL",currResultsNEL[2][1], currResultsNEL[2][2], currResultsNEL[2][1]],
					["NLO",currResultsNLO[2][1], currResultsNLO[2][2], currResultsNLO[2][1]],
					["NYK",currResultsNYK[2][1], currResultsNYK[2][2], currResultsNYK[2][1]],
					["NTH",currResultsNTH[2][1], currResultsNTH[2][2], currResultsNTH[2][1]],
					["NIR",currResultsNIR[2][1], currResultsNIR[2][2], currResultsNIR[2][1]],
					["NOU",currResultsNOU[2][1], currResultsNOU[2][2], currResultsNOU[2][1]],
					["NOT",currResultsNOT[2][1], currResultsNOT[2][2], currResultsNOT[2][1]],
					["OXF",currResultsOXF[2][1], currResultsOXF[2][2], currResultsOXF[2][1]],
					["POW",currResultsPOW[2][1], currResultsPOW[2][2], currResultsPOW[2][1]],
					["SHR",currResultsSHR[2][1], currResultsSHR[2][2], currResultsSHR[2][1]],
					["SOM",currResultsSOM[2][1], currResultsSOM[2][2], currResultsSOM[2][1]],
					["SCL",currResultsSCL[2][1], currResultsSCL[2][2], currResultsSCL[2][1]],
					["SEL",currResultsSEL[2][1], currResultsSEL[2][2], currResultsSEL[2][1]],
					["SGL",currResultsSGL[2][1], currResultsSGL[2][2], currResultsSGL[2][1]],
					["SSC",currResultsSSC[2][1], currResultsSSC[2][2], currResultsSSC[2][1]],
					["SYK",currResultsSYK[2][1], currResultsSYK[2][2], currResultsSYK[2][1]],
					["STA",currResultsSTA[2][1], currResultsSTA[2][2], currResultsSTA[2][1]],
					["STR",currResultsSTR[2][1], currResultsSTR[2][2], currResultsSTR[2][1]],
					["SUF",currResultsSUF[2][1], currResultsSUF[2][2], currResultsSUF[2][1]],
					["SUR",currResultsSUR[2][1], currResultsSUR[2][2], currResultsSUR[2][1]],
					["TAY",currResultsTAY[2][1], currResultsTAY[2][2], currResultsTAY[2][1]],
					["TEE",currResultsTEE[2][1], currResultsTEE[2][2], currResultsTEE[2][1]],
					["TYN",currResultsTYN[2][1], currResultsTYN[2][2], currResultsTYN[2][1]],
					["WAR",currResultsWAR[2][1], currResultsWAR[2][2], currResultsWAR[2][1]],
					["WGL",currResultsWGL[2][1], currResultsWGL[2][2], currResultsWGL[2][1]],
					["WLO",currResultsWLO[2][1], currResultsWLO[2][2], currResultsWLO[2][1]],
					["WME",currResultsWME[2][1], currResultsWME[2][2], currResultsWME[2][1]],
					["WMW",currResultsWMW[2][1], currResultsWMW[2][2], currResultsWMW[2][1]],
					["WSU",currResultsWSU[2][1], currResultsWSU[2][2], currResultsWSU[2][1]],
					["WYK",currResultsWYK[2][1], currResultsWYK[2][2], currResultsWYK[2][1]],
					["WIL",currResultsWIL[2][1], currResultsWIL[2][2], currResultsWIL[2][1]],
					["WOR",currResultsWOR[2][1], currResultsWOR[2][2], currResultsWOR[2][1]]];
					
		var GreenArray  = [["AVO",currResultsAVO[3][1], currResultsAVO[3][2], currResultsAVO[3][1]],
					["BED",currResultsBED[3][1], currResultsBED[3][2], currResultsBED[3][1]],
					["BER",currResultsBER[3][1], currResultsBER[3][2], currResultsBER[3][1]],
					["BUK",currResultsBUK[3][1], currResultsBUK[3][2], currResultsBUK[3][1]],
					["CAM",currResultsCAM[3][1], currResultsCAM[3][2], currResultsCAM[3][1]],
					["CNL",currResultsCNL[3][1], currResultsCNL[3][2], currResultsCNL[3][1]],
					["CHE",currResultsCHE[3][1], currResultsCHE[3][2], currResultsCHE[3][1]],
					["CLW",currResultsCLW[3][1], currResultsCLW[3][2], currResultsCLW[3][1]],
					["COR",currResultsCOR[3][1], currResultsCOR[3][2], currResultsCOR[3][1]],
					["DUR",currResultsDUR[3][1], currResultsDUR[3][2], currResultsDUR[3][1]],
					["CUM",currResultsCUM[3][1], currResultsCUM[3][2], currResultsCUM[3][1]],
					["DER",currResultsDER[3][1], currResultsDER[3][2], currResultsDER[3][1]],
					["DEV",currResultsDEV[3][1], currResultsDEV[3][2], currResultsDEV[3][1]],
					["DOR",currResultsDOR[3][1], currResultsDOR[3][2], currResultsDOR[3][1]],
					["DYF",currResultsDYF[3][1], currResultsDYF[3][2], currResultsDYF[3][1]],
					["ESU",currResultsESU[3][1], currResultsESU[3][2], currResultsESU[3][1]],
					["ESS",currResultsESS[3][1], currResultsESS[3][2], currResultsESS[3][1]],
					["FIF",currResultsFIF[3][1], currResultsFIF[3][2], currResultsFIF[3][1]],
					["GLA",currResultsGLA[3][1], currResultsGLA[3][2], currResultsGLA[3][1]],
					["GLO",currResultsGLO[3][1], currResultsGLO[3][2], currResultsGLO[3][1]],
					["GRA",currResultsGRA[3][1], currResultsGRA[3][2], currResultsGRA[3][1]],
					["GMA",currResultsGMA[3][1], currResultsGMA[3][2], currResultsGMA[3][1]],
					["GWE",currResultsGWE[3][1], currResultsGWE[3][2], currResultsGWE[3][1]],
					["GWY",currResultsGWY[3][1], currResultsGWY[3][2], currResultsGWY[3][1]],
					["HAM",currResultsHAM[3][1], currResultsHAM[3][2], currResultsHAM[3][1]],
					["HER",currResultsHER[3][1], currResultsHER[3][2], currResultsHER[3][1]],
					["HET",currResultsHET[3][1], currResultsHET[3][2], currResultsHET[3][1]],
					["HAI",currResultsHAI[3][1], currResultsHAI[3][2], currResultsHAI[3][1]],
					["HUM",currResultsHUM[3][1], currResultsHUM[3][2], currResultsHUM[3][1]],
					["KEN",currResultsKEN[3][1], currResultsKEN[3][2], currResultsKEN[3][1]],
					["LAK",currResultsLAK[3][1], currResultsLAK[3][2], currResultsLAK[3][1]],
					["LAC",currResultsLAC[3][1], currResultsLAC[3][2], currResultsLAC[3][1]],
					["LAR",currResultsLAR[3][1], currResultsLAR[3][2], currResultsLAR[3][1]],
					["LIN",currResultsLIN[3][1], currResultsLIN[3][2], currResultsLIN[3][1]],
					["LOT",currResultsLOT[3][1], currResultsLOT[3][2], currResultsLOT[3][1]],
					["MER",currResultsMER[3][1], currResultsMER[3][2], currResultsMER[3][1]],
					["MGL",currResultsMGL[3][1], currResultsMGL[3][2], currResultsMGL[3][1]],
					["NOR",currResultsNOR[3][1], currResultsNOR[3][2], currResultsNOR[3][1]],
					["NEL",currResultsNEL[3][1], currResultsNEL[3][2], currResultsNEL[3][1]],
					["NLO",currResultsNLO[3][1], currResultsNLO[3][2], currResultsNLO[3][1]],
					["NYK",currResultsNYK[3][1], currResultsNYK[3][2], currResultsNYK[3][1]],
					["NTH",currResultsNTH[3][1], currResultsNTH[3][2], currResultsNTH[3][1]],
					["NIR",currResultsNIR[3][1], currResultsNIR[3][2], currResultsNIR[3][1]],
					["NOU",currResultsNOU[3][1], currResultsNOU[3][2], currResultsNOU[3][1]],
					["NOT",currResultsNOT[3][1], currResultsNOT[3][2], currResultsNOT[3][1]],
					["OXF",currResultsOXF[3][1], currResultsOXF[3][2], currResultsOXF[3][1]],
					["POW",currResultsPOW[3][1], currResultsPOW[3][2], currResultsPOW[3][1]],
					["SHR",currResultsSHR[3][1], currResultsSHR[3][2], currResultsSHR[3][1]],
					["SOM",currResultsSOM[3][1], currResultsSOM[3][2], currResultsSOM[3][1]],
					["SCL",currResultsSCL[3][1], currResultsSCL[3][2], currResultsSCL[3][1]],
					["SEL",currResultsSEL[3][1], currResultsSEL[3][2], currResultsSEL[3][1]],
					["SGL",currResultsSGL[3][1], currResultsSGL[3][2], currResultsSGL[3][1]],
					["SSC",currResultsSSC[3][1], currResultsSSC[3][2], currResultsSSC[3][1]],
					["SYK",currResultsSYK[3][1], currResultsSYK[3][2], currResultsSYK[3][1]],
					["STA",currResultsSTA[3][1], currResultsSTA[3][2], currResultsSTA[3][1]],
					["STR",currResultsSTR[3][1], currResultsSTR[3][2], currResultsSTR[3][1]],
					["SUF",currResultsSUF[3][1], currResultsSUF[3][2], currResultsSUF[3][1]],
					["SUR",currResultsSUR[3][1], currResultsSUR[3][2], currResultsSUR[3][1]],
					["TAY",currResultsTAY[3][1], currResultsTAY[3][2], currResultsTAY[3][1]],
					["TEE",currResultsTEE[3][1], currResultsTEE[3][2], currResultsTEE[3][1]],
					["TYN",currResultsTYN[3][1], currResultsTYN[3][2], currResultsTYN[3][1]],
					["WAR",currResultsWAR[3][1], currResultsWAR[3][2], currResultsWAR[3][1]],
					["WGL",currResultsWGL[3][1], currResultsWGL[3][2], currResultsWGL[3][1]],
					["WLO",currResultsWLO[3][1], currResultsWLO[3][2], currResultsWLO[3][1]],
					["WME",currResultsWME[3][1], currResultsWME[3][2], currResultsWME[3][1]],
					["WMW",currResultsWMW[3][1], currResultsWMW[3][2], currResultsWMW[3][1]],
					["WSU",currResultsWSU[3][1], currResultsWSU[3][2], currResultsWSU[3][1]],
					["WYK",currResultsWYK[3][1], currResultsWYK[3][2], currResultsWYK[3][1]],
					["WIL",currResultsWIL[3][1], currResultsWIL[3][2], currResultsWIL[3][1]],
					["WOR",currResultsWOR[3][1], currResultsWOR[3][2], currResultsWOR[3][1]]];
					
		var LabourArray  = [["AVO",currResultsAVO[4][1], currResultsAVO[4][2], currResultsAVO[4][1]],
					["BED",currResultsBED[4][1], currResultsBED[4][2], currResultsBED[4][1]],
					["BER",currResultsBER[4][1], currResultsBER[4][2], currResultsBER[4][1]],
					["BUK",currResultsBUK[4][1], currResultsBUK[4][2], currResultsBUK[4][1]],
					["CAM",currResultsCAM[4][1], currResultsCAM[4][2], currResultsCAM[4][1]],
					["CNL",currResultsCNL[4][1], currResultsCNL[4][2], currResultsCNL[4][1]],
					["CHE",currResultsCHE[4][1], currResultsCHE[4][2], currResultsCHE[4][1]],
					["CLW",currResultsCLW[4][1], currResultsCLW[4][2], currResultsCLW[4][1]],
					["COR",currResultsCOR[4][1], currResultsCOR[4][2], currResultsCOR[4][1]],
					["DUR",currResultsDUR[4][1], currResultsDUR[4][2], currResultsDUR[4][1]],
					["CUM",currResultsCUM[4][1], currResultsCUM[4][2], currResultsCUM[4][1]],
					["DER",currResultsDER[4][1], currResultsDER[4][2], currResultsDER[4][1]],
					["DEV",currResultsDEV[4][1], currResultsDEV[4][2], currResultsDEV[4][1]],
					["DOR",currResultsDOR[4][1], currResultsDOR[4][2], currResultsDOR[4][1]],
					["DYF",currResultsDYF[4][1], currResultsDYF[4][2], currResultsDYF[4][1]],
					["ESU",currResultsESU[4][1], currResultsESU[4][2], currResultsESU[4][1]],
					["ESS",currResultsESS[4][1], currResultsESS[4][2], currResultsESS[4][1]],
					["FIF",currResultsFIF[4][1], currResultsFIF[4][2], currResultsFIF[4][1]],
					["GLA",currResultsGLA[4][1], currResultsGLA[4][2], currResultsGLA[4][1]],
					["GLO",currResultsGLO[4][1], currResultsGLO[4][2], currResultsGLO[4][1]],
					["GRA",currResultsGRA[4][1], currResultsGRA[4][2], currResultsGRA[4][1]],
					["GMA",currResultsGMA[4][1], currResultsGMA[4][2], currResultsGMA[4][1]],
					["GWE",currResultsGWE[4][1], currResultsGWE[4][2], currResultsGWE[4][1]],
					["GWY",currResultsGWY[4][1], currResultsGWY[4][2], currResultsGWY[4][1]],
					["HAM",currResultsHAM[4][1], currResultsHAM[4][2], currResultsHAM[4][1]],
					["HER",currResultsHER[4][1], currResultsHER[4][2], currResultsHER[4][1]],
					["HET",currResultsHET[4][1], currResultsHET[4][2], currResultsHET[4][1]],
					["HAI",currResultsHAI[4][1], currResultsHAI[4][2], currResultsHAI[4][1]],
					["HUM",currResultsHUM[4][1], currResultsHUM[4][2], currResultsHUM[4][1]],
					["KEN",currResultsKEN[4][1], currResultsKEN[4][2], currResultsKEN[4][1]],
					["LAK",currResultsLAK[4][1], currResultsLAK[4][2], currResultsLAK[4][1]],
					["LAC",currResultsLAC[4][1], currResultsLAC[4][2], currResultsLAC[4][1]],
					["LAR",currResultsLAR[4][1], currResultsLAR[4][2], currResultsLAR[4][1]],
					["LIN",currResultsLIN[4][1], currResultsLIN[4][2], currResultsLIN[4][1]],
					["LOT",currResultsLOT[4][1], currResultsLOT[4][2], currResultsLOT[4][1]],
					["MER",currResultsMER[4][1], currResultsMER[4][2], currResultsMER[4][1]],
					["MGL",currResultsMGL[4][1], currResultsMGL[4][2], currResultsMGL[4][1]],
					["NOR",currResultsNOR[4][1], currResultsNOR[4][2], currResultsNOR[4][1]],
					["NEL",currResultsNEL[4][1], currResultsNEL[4][2], currResultsNEL[4][1]],
					["NLO",currResultsNLO[4][1], currResultsNLO[4][2], currResultsNLO[4][1]],
					["NYK",currResultsNYK[4][1], currResultsNYK[4][2], currResultsNYK[4][1]],
					["NTH",currResultsNTH[4][1], currResultsNTH[4][2], currResultsNTH[4][1]],
					["NIR",currResultsNIR[4][1], currResultsNIR[4][2], currResultsNIR[4][1]],
					["NOU",currResultsNOU[4][1], currResultsNOU[4][2], currResultsNOU[4][1]],
					["NOT",currResultsNOT[4][1], currResultsNOT[4][2], currResultsNOT[4][1]],
					["OXF",currResultsOXF[4][1], currResultsOXF[4][2], currResultsOXF[4][1]],
					["POW",currResultsPOW[4][1], currResultsPOW[4][2], currResultsPOW[4][1]],
					["SHR",currResultsSHR[4][1], currResultsSHR[4][2], currResultsSHR[4][1]],
					["SOM",currResultsSOM[4][1], currResultsSOM[4][2], currResultsSOM[4][1]],
					["SCL",currResultsSCL[4][1], currResultsSCL[4][2], currResultsSCL[4][1]],
					["SEL",currResultsSEL[4][1], currResultsSEL[4][2], currResultsSEL[4][1]],
					["SGL",currResultsSGL[4][1], currResultsSGL[4][2], currResultsSGL[4][1]],
					["SSC",currResultsSSC[4][1], currResultsSSC[4][2], currResultsSSC[4][1]],
					["SYK",currResultsSYK[4][1], currResultsSYK[4][2], currResultsSYK[4][1]],
					["STA",currResultsSTA[4][1], currResultsSTA[4][2], currResultsSTA[4][1]],
					["STR",currResultsSTR[4][1], currResultsSTR[4][2], currResultsSTR[4][1]],
					["SUF",currResultsSUF[4][1], currResultsSUF[4][2], currResultsSUF[4][1]],
					["SUR",currResultsSUR[4][1], currResultsSUR[4][2], currResultsSUR[4][1]],
					["TAY",currResultsTAY[4][1], currResultsTAY[4][2], currResultsTAY[4][1]],
					["TEE",currResultsTEE[4][1], currResultsTEE[4][2], currResultsTEE[4][1]],
					["TYN",currResultsTYN[4][1], currResultsTYN[4][2], currResultsTYN[4][1]],
					["WAR",currResultsWAR[4][1], currResultsWAR[4][2], currResultsWAR[4][1]],
					["WGL",currResultsWGL[4][1], currResultsWGL[4][2], currResultsWGL[4][1]],
					["WLO",currResultsWLO[4][1], currResultsWLO[4][2], currResultsWLO[4][1]],
					["WME",currResultsWME[4][1], currResultsWME[4][2], currResultsWME[4][1]],
					["WMW",currResultsWMW[4][1], currResultsWMW[4][2], currResultsWMW[4][1]],
					["WSU",currResultsWSU[4][1], currResultsWSU[4][2], currResultsWSU[4][1]],
					["WYK",currResultsWYK[4][1], currResultsWYK[4][2], currResultsWYK[4][1]],
					["WIL",currResultsWIL[4][1], currResultsWIL[4][2], currResultsWIL[4][1]],
					["WOR",currResultsWOR[4][1], currResultsWOR[4][2], currResultsWOR[4][1]]];
					
		var LibDemArray  = [["AVO",currResultsAVO[5][1], currResultsAVO[5][2], currResultsAVO[5][1]],
					["BED",currResultsBED[5][1], currResultsBED[5][2], currResultsBED[5][1]],
					["BER",currResultsBER[5][1], currResultsBER[5][2], currResultsBER[5][1]],
					["BUK",currResultsBUK[5][1], currResultsBUK[5][2], currResultsBUK[5][1]],
					["CAM",currResultsCAM[5][1], currResultsCAM[5][2], currResultsCAM[5][1]],
					["CNL",currResultsCNL[5][1], currResultsCNL[5][2], currResultsCNL[5][1]],
					["CHE",currResultsCHE[5][1], currResultsCHE[5][2], currResultsCHE[5][1]],
					["CLW",currResultsCLW[5][1], currResultsCLW[5][2], currResultsCLW[5][1]],
					["COR",currResultsCOR[5][1], currResultsCOR[5][2], currResultsCOR[5][1]],
					["DUR",currResultsDUR[5][1], currResultsDUR[5][2], currResultsDUR[5][1]],
					["CUM",currResultsCUM[5][1], currResultsCUM[5][2], currResultsCUM[5][1]],
					["DER",currResultsDER[5][1], currResultsDER[5][2], currResultsDER[5][1]],
					["DEV",currResultsDEV[5][1], currResultsDEV[5][2], currResultsDEV[5][1]],
					["DOR",currResultsDOR[5][1], currResultsDOR[5][2], currResultsDOR[5][1]],
					["DYF",currResultsDYF[5][1], currResultsDYF[5][2], currResultsDYF[5][1]],
					["ESU",currResultsESU[5][1], currResultsESU[5][2], currResultsESU[5][1]],
					["ESS",currResultsESS[5][1], currResultsESS[5][2], currResultsESS[5][1]],
					["FIF",currResultsFIF[5][1], currResultsFIF[5][2], currResultsFIF[5][1]],
					["GLA",currResultsGLA[5][1], currResultsGLA[5][2], currResultsGLA[5][1]],
					["GLO",currResultsGLO[5][1], currResultsGLO[5][2], currResultsGLO[5][1]],
					["GRA",currResultsGRA[5][1], currResultsGRA[5][2], currResultsGRA[5][1]],
					["GMA",currResultsGMA[5][1], currResultsGMA[5][2], currResultsGMA[5][1]],
					["GWE",currResultsGWE[5][1], currResultsGWE[5][2], currResultsGWE[5][1]],
					["GWY",currResultsGWY[5][1], currResultsGWY[5][2], currResultsGWY[5][1]],
					["HAM",currResultsHAM[5][1], currResultsHAM[5][2], currResultsHAM[5][1]],
					["HER",currResultsHER[5][1], currResultsHER[5][2], currResultsHER[5][1]],
					["HET",currResultsHET[5][1], currResultsHET[5][2], currResultsHET[5][1]],
					["HAI",currResultsHAI[5][1], currResultsHAI[5][2], currResultsHAI[5][1]],
					["HUM",currResultsHUM[5][1], currResultsHUM[5][2], currResultsHUM[5][1]],
					["KEN",currResultsKEN[5][1], currResultsKEN[5][2], currResultsKEN[5][1]],
					["LAK",currResultsLAK[5][1], currResultsLAK[5][2], currResultsLAK[5][1]],
					["LAC",currResultsLAC[5][1], currResultsLAC[5][2], currResultsLAC[5][1]],
					["LAR",currResultsLAR[5][1], currResultsLAR[5][2], currResultsLAR[5][1]],
					["LIN",currResultsLIN[5][1], currResultsLIN[5][2], currResultsLIN[5][1]],
					["LOT",currResultsLOT[5][1], currResultsLOT[5][2], currResultsLOT[5][1]],
					["MER",currResultsMER[5][1], currResultsMER[5][2], currResultsMER[5][1]],
					["MGL",currResultsMGL[5][1], currResultsMGL[5][2], currResultsMGL[5][1]],
					["NOR",currResultsNOR[5][1], currResultsNOR[5][2], currResultsNOR[5][1]],
					["NEL",currResultsNEL[5][1], currResultsNEL[5][2], currResultsNEL[5][1]],
					["NLO",currResultsNLO[5][1], currResultsNLO[5][2], currResultsNLO[5][1]],
					["NYK",currResultsNYK[5][1], currResultsNYK[5][2], currResultsNYK[5][1]],
					["NTH",currResultsNTH[5][1], currResultsNTH[5][2], currResultsNTH[5][1]],
					["NIR",currResultsNIR[5][1], currResultsNIR[5][2], currResultsNIR[5][1]],
					["NOU",currResultsNOU[5][1], currResultsNOU[5][2], currResultsNOU[5][1]],
					["NOT",currResultsNOT[5][1], currResultsNOT[5][2], currResultsNOT[5][1]],
					["OXF",currResultsOXF[5][1], currResultsOXF[5][2], currResultsOXF[5][1]],
					["POW",currResultsPOW[5][1], currResultsPOW[5][2], currResultsPOW[5][1]],
					["SHR",currResultsSHR[5][1], currResultsSHR[5][2], currResultsSHR[5][1]],
					["SOM",currResultsSOM[5][1], currResultsSOM[5][2], currResultsSOM[5][1]],
					["SCL",currResultsSCL[5][1], currResultsSCL[5][2], currResultsSCL[5][1]],
					["SEL",currResultsSEL[5][1], currResultsSEL[5][2], currResultsSEL[5][1]],
					["SGL",currResultsSGL[5][1], currResultsSGL[5][2], currResultsSGL[5][1]],
					["SSC",currResultsSSC[5][1], currResultsSSC[5][2], currResultsSSC[5][1]],
					["SYK",currResultsSYK[5][1], currResultsSYK[5][2], currResultsSYK[5][1]],
					["STA",currResultsSTA[5][1], currResultsSTA[5][2], currResultsSTA[5][1]],
					["STR",currResultsSTR[5][1], currResultsSTR[5][2], currResultsSTR[5][1]],
					["SUF",currResultsSUF[5][1], currResultsSUF[5][2], currResultsSUF[5][1]],
					["SUR",currResultsSUR[5][1], currResultsSUR[5][2], currResultsSUR[5][1]],
					["TAY",currResultsTAY[5][1], currResultsTAY[5][2], currResultsTAY[5][1]],
					["TEE",currResultsTEE[5][1], currResultsTEE[5][2], currResultsTEE[5][1]],
					["TYN",currResultsTYN[5][1], currResultsTYN[5][2], currResultsTYN[5][1]],
					["WAR",currResultsWAR[5][1], currResultsWAR[5][2], currResultsWAR[5][1]],
					["WGL",currResultsWGL[5][1], currResultsWGL[5][2], currResultsWGL[5][1]],
					["WLO",currResultsWLO[5][1], currResultsWLO[5][2], currResultsWLO[5][1]],
					["WME",currResultsWME[5][1], currResultsWME[5][2], currResultsWME[5][1]],
					["WMW",currResultsWMW[5][1], currResultsWMW[5][2], currResultsWMW[5][1]],
					["WSU",currResultsWSU[5][1], currResultsWSU[5][2], currResultsWSU[5][1]],
					["WYK",currResultsWYK[5][1], currResultsWYK[5][2], currResultsWYK[5][1]],
					["WIL",currResultsWIL[5][1], currResultsWIL[5][2], currResultsWIL[5][1]],
					["WOR",currResultsWOR[5][1], currResultsWOR[5][2], currResultsWOR[5][1]]];
					
		var PlaidArray  = [["AVO",currResultsAVO[6][1], currResultsAVO[6][2], currResultsAVO[6][1]],
					["BED",currResultsBED[6][1], currResultsBED[6][2], currResultsBED[6][1]],
					["BER",currResultsBER[6][1], currResultsBER[6][2], currResultsBER[6][1]],
					["BUK",currResultsBUK[6][1], currResultsBUK[6][2], currResultsBUK[6][1]],
					["CAM",currResultsCAM[6][1], currResultsCAM[6][2], currResultsCAM[6][1]],
					["CNL",currResultsCNL[6][1], currResultsCNL[6][2], currResultsCNL[6][1]],
					["CHE",currResultsCHE[6][1], currResultsCHE[6][2], currResultsCHE[6][1]],
					["CLW",currResultsCLW[6][1], currResultsCLW[6][2], currResultsCLW[6][1]],
					["COR",currResultsCOR[6][1], currResultsCOR[6][2], currResultsCOR[6][1]],
					["DUR",currResultsDUR[6][1], currResultsDUR[6][2], currResultsDUR[6][1]],
					["CUM",currResultsCUM[6][1], currResultsCUM[6][2], currResultsCUM[6][1]],
					["DER",currResultsDER[6][1], currResultsDER[6][2], currResultsDER[6][1]],
					["DEV",currResultsDEV[6][1], currResultsDEV[6][2], currResultsDEV[6][1]],
					["DOR",currResultsDOR[6][1], currResultsDOR[6][2], currResultsDOR[6][1]],
					["DYF",currResultsDYF[6][1], currResultsDYF[6][2], currResultsDYF[6][1]],
					["ESU",currResultsESU[6][1], currResultsESU[6][2], currResultsESU[6][1]],
					["ESS",currResultsESS[6][1], currResultsESS[6][2], currResultsESS[6][1]],
					["FIF",currResultsFIF[6][1], currResultsFIF[6][2], currResultsFIF[6][1]],
					["GLA",currResultsGLA[6][1], currResultsGLA[6][2], currResultsGLA[6][1]],
					["GLO",currResultsGLO[6][1], currResultsGLO[6][2], currResultsGLO[6][1]],
					["GRA",currResultsGRA[6][1], currResultsGRA[6][2], currResultsGRA[6][1]],
					["GMA",currResultsGMA[6][1], currResultsGMA[6][2], currResultsGMA[6][1]],
					["GWE",currResultsGWE[6][1], currResultsGWE[6][2], currResultsGWE[6][1]],
					["GWY",currResultsGWY[6][1], currResultsGWY[6][2], currResultsGWY[6][1]],
					["HAM",currResultsHAM[6][1], currResultsHAM[6][2], currResultsHAM[6][1]],
					["HER",currResultsHER[6][1], currResultsHER[6][2], currResultsHER[6][1]],
					["HET",currResultsHET[6][1], currResultsHET[6][2], currResultsHET[6][1]],
					["HAI",currResultsHAI[6][1], currResultsHAI[6][2], currResultsHAI[6][1]],
					["HUM",currResultsHUM[6][1], currResultsHUM[6][2], currResultsHUM[6][1]],
					["KEN",currResultsKEN[6][1], currResultsKEN[6][2], currResultsKEN[6][1]],
					["LAK",currResultsLAK[6][1], currResultsLAK[6][2], currResultsLAK[6][1]],
					["LAC",currResultsLAC[6][1], currResultsLAC[6][2], currResultsLAC[6][1]],
					["LAR",currResultsLAR[6][1], currResultsLAR[6][2], currResultsLAR[6][1]],
					["LIN",currResultsLIN[6][1], currResultsLIN[6][2], currResultsLIN[6][1]],
					["LOT",currResultsLOT[6][1], currResultsLOT[6][2], currResultsLOT[6][1]],
					["MER",currResultsMER[6][1], currResultsMER[6][2], currResultsMER[6][1]],
					["MGL",currResultsMGL[6][1], currResultsMGL[6][2], currResultsMGL[6][1]],
					["NOR",currResultsNOR[6][1], currResultsNOR[6][2], currResultsNOR[6][1]],
					["NEL",currResultsNEL[6][1], currResultsNEL[6][2], currResultsNEL[6][1]],
					["NLO",currResultsNLO[6][1], currResultsNLO[6][2], currResultsNLO[6][1]],
					["NYK",currResultsNYK[6][1], currResultsNYK[6][2], currResultsNYK[6][1]],
					["NTH",currResultsNTH[6][1], currResultsNTH[6][2], currResultsNTH[6][1]],
					["NIR",currResultsNIR[6][1], currResultsNIR[6][2], currResultsNIR[6][1]],
					["NOU",currResultsNOU[6][1], currResultsNOU[6][2], currResultsNOU[6][1]],
					["NOT",currResultsNOT[6][1], currResultsNOT[6][2], currResultsNOT[6][1]],
					["OXF",currResultsOXF[6][1], currResultsOXF[6][2], currResultsOXF[6][1]],
					["POW",currResultsPOW[6][1], currResultsPOW[6][2], currResultsPOW[6][1]],
					["SHR",currResultsSHR[6][1], currResultsSHR[6][2], currResultsSHR[6][1]],
					["SOM",currResultsSOM[6][1], currResultsSOM[6][2], currResultsSOM[6][1]],
					["SCL",currResultsSCL[6][1], currResultsSCL[6][2], currResultsSCL[6][1]],
					["SEL",currResultsSEL[6][1], currResultsSEL[6][2], currResultsSEL[6][1]],
					["SGL",currResultsSGL[6][1], currResultsSGL[6][2], currResultsSGL[6][1]],
					["SSC",currResultsSSC[6][1], currResultsSSC[6][2], currResultsSSC[6][1]],
					["SYK",currResultsSYK[6][1], currResultsSYK[6][2], currResultsSYK[6][1]],
					["STA",currResultsSTA[6][1], currResultsSTA[6][2], currResultsSTA[6][1]],
					["STR",currResultsSTR[6][1], currResultsSTR[6][2], currResultsSTR[6][1]],
					["SUF",currResultsSUF[6][1], currResultsSUF[6][2], currResultsSUF[6][1]],
					["SUR",currResultsSUR[6][1], currResultsSUR[6][2], currResultsSUR[6][1]],
					["TAY",currResultsTAY[6][1], currResultsTAY[6][2], currResultsTAY[6][1]],
					["TEE",currResultsTEE[6][1], currResultsTEE[6][2], currResultsTEE[6][1]],
					["TYN",currResultsTYN[6][1], currResultsTYN[6][2], currResultsTYN[6][1]],
					["WAR",currResultsWAR[6][1], currResultsWAR[6][2], currResultsWAR[6][1]],
					["WGL",currResultsWGL[6][1], currResultsWGL[6][2], currResultsWGL[6][1]],
					["WLO",currResultsWLO[6][1], currResultsWLO[6][2], currResultsWLO[6][1]],
					["WME",currResultsWME[6][1], currResultsWME[6][2], currResultsWME[6][1]],
					["WMW",currResultsWMW[6][1], currResultsWMW[6][2], currResultsWMW[6][1]],
					["WSU",currResultsWSU[6][1], currResultsWSU[6][2], currResultsWSU[6][1]],
					["WYK",currResultsWYK[6][1], currResultsWYK[6][2], currResultsWYK[6][1]],
					["WIL",currResultsWIL[6][1], currResultsWIL[6][2], currResultsWIL[6][1]],
					["WOR",currResultsWOR[6][1], currResultsWOR[6][2], currResultsWOR[6][1]]];
					
		var RefUKArray  = [["AVO",currResultsAVO[7][1], currResultsAVO[7][2], currResultsAVO[7][1]],
					["BED",currResultsBED[7][1], currResultsBED[7][2], currResultsBED[7][1]],
					["BER",currResultsBER[7][1], currResultsBER[7][2], currResultsBER[7][1]],
					["BUK",currResultsBUK[7][1], currResultsBUK[7][2], currResultsBUK[7][1]],
					["CAM",currResultsCAM[7][1], currResultsCAM[7][2], currResultsCAM[7][1]],
					["CNL",currResultsCNL[7][1], currResultsCNL[7][2], currResultsCNL[7][1]],
					["CHE",currResultsCHE[7][1], currResultsCHE[7][2], currResultsCHE[7][1]],
					["CLW",currResultsCLW[7][1], currResultsCLW[7][2], currResultsCLW[7][1]],
					["COR",currResultsCOR[7][1], currResultsCOR[7][2], currResultsCOR[7][1]],
					["DUR",currResultsDUR[7][1], currResultsDUR[7][2], currResultsDUR[7][1]],
					["CUM",currResultsCUM[7][1], currResultsCUM[7][2], currResultsCUM[7][1]],
					["DER",currResultsDER[7][1], currResultsDER[7][2], currResultsDER[7][1]],
					["DEV",currResultsDEV[7][1], currResultsDEV[7][2], currResultsDEV[7][1]],
					["DOR",currResultsDOR[7][1], currResultsDOR[7][2], currResultsDOR[7][1]],
					["DYF",currResultsDYF[7][1], currResultsDYF[7][2], currResultsDYF[7][1]],
					["ESU",currResultsESU[7][1], currResultsESU[7][2], currResultsESU[7][1]],
					["ESS",currResultsESS[7][1], currResultsESS[7][2], currResultsESS[7][1]],
					["FIF",currResultsFIF[7][1], currResultsFIF[7][2], currResultsFIF[7][1]],
					["GLA",currResultsGLA[7][1], currResultsGLA[7][2], currResultsGLA[7][1]],
					["GLO",currResultsGLO[7][1], currResultsGLO[7][2], currResultsGLO[7][1]],
					["GRA",currResultsGRA[7][1], currResultsGRA[7][2], currResultsGRA[7][1]],
					["GMA",currResultsGMA[7][1], currResultsGMA[7][2], currResultsGMA[7][1]],
					["GWE",currResultsGWE[7][1], currResultsGWE[7][2], currResultsGWE[7][1]],
					["GWY",currResultsGWY[7][1], currResultsGWY[7][2], currResultsGWY[7][1]],
					["HAM",currResultsHAM[7][1], currResultsHAM[7][2], currResultsHAM[7][1]],
					["HER",currResultsHER[7][1], currResultsHER[7][2], currResultsHER[7][1]],
					["HET",currResultsHET[7][1], currResultsHET[7][2], currResultsHET[7][1]],
					["HAI",currResultsHAI[7][1], currResultsHAI[7][2], currResultsHAI[7][1]],
					["HUM",currResultsHUM[7][1], currResultsHUM[7][2], currResultsHUM[7][1]],
					["KEN",currResultsKEN[7][1], currResultsKEN[7][2], currResultsKEN[7][1]],
					["LAK",currResultsLAK[7][1], currResultsLAK[7][2], currResultsLAK[7][1]],
					["LAC",currResultsLAC[7][1], currResultsLAC[7][2], currResultsLAC[7][1]],
					["LAR",currResultsLAR[7][1], currResultsLAR[7][2], currResultsLAR[7][1]],
					["LIN",currResultsLIN[7][1], currResultsLIN[7][2], currResultsLIN[7][1]],
					["LOT",currResultsLOT[7][1], currResultsLOT[7][2], currResultsLOT[7][1]],
					["MER",currResultsMER[7][1], currResultsMER[7][2], currResultsMER[7][1]],
					["MGL",currResultsMGL[7][1], currResultsMGL[7][2], currResultsMGL[7][1]],
					["NOR",currResultsNOR[7][1], currResultsNOR[7][2], currResultsNOR[7][1]],
					["NEL",currResultsNEL[7][1], currResultsNEL[7][2], currResultsNEL[7][1]],
					["NLO",currResultsNLO[7][1], currResultsNLO[7][2], currResultsNLO[7][1]],
					["NYK",currResultsNYK[7][1], currResultsNYK[7][2], currResultsNYK[7][1]],
					["NTH",currResultsNTH[7][1], currResultsNTH[7][2], currResultsNTH[7][1]],
					["NIR",currResultsNIR[7][1], currResultsNIR[7][2], currResultsNIR[7][1]],
					["NOU",currResultsNOU[7][1], currResultsNOU[7][2], currResultsNOU[7][1]],
					["NOT",currResultsNOT[7][1], currResultsNOT[7][2], currResultsNOT[7][1]],
					["OXF",currResultsOXF[7][1], currResultsOXF[7][2], currResultsOXF[7][1]],
					["POW",currResultsPOW[7][1], currResultsPOW[7][2], currResultsPOW[7][1]],
					["SHR",currResultsSHR[7][1], currResultsSHR[7][2], currResultsSHR[7][1]],
					["SOM",currResultsSOM[7][1], currResultsSOM[7][2], currResultsSOM[7][1]],
					["SCL",currResultsSCL[7][1], currResultsSCL[7][2], currResultsSCL[7][1]],
					["SEL",currResultsSEL[7][1], currResultsSEL[7][2], currResultsSEL[7][1]],
					["SGL",currResultsSGL[7][1], currResultsSGL[7][2], currResultsSGL[7][1]],
					["SSC",currResultsSSC[7][1], currResultsSSC[7][2], currResultsSSC[7][1]],
					["SYK",currResultsSYK[7][1], currResultsSYK[7][2], currResultsSYK[7][1]],
					["STA",currResultsSTA[7][1], currResultsSTA[7][2], currResultsSTA[7][1]],
					["STR",currResultsSTR[7][1], currResultsSTR[7][2], currResultsSTR[7][1]],
					["SUF",currResultsSUF[7][1], currResultsSUF[7][2], currResultsSUF[7][1]],
					["SUR",currResultsSUR[7][1], currResultsSUR[7][2], currResultsSUR[7][1]],
					["TAY",currResultsTAY[7][1], currResultsTAY[7][2], currResultsTAY[7][1]],
					["TEE",currResultsTEE[7][1], currResultsTEE[7][2], currResultsTEE[7][1]],
					["TYN",currResultsTYN[7][1], currResultsTYN[7][2], currResultsTYN[7][1]],
					["WAR",currResultsWAR[7][1], currResultsWAR[7][2], currResultsWAR[7][1]],
					["WGL",currResultsWGL[7][1], currResultsWGL[7][2], currResultsWGL[7][1]],
					["WLO",currResultsWLO[7][1], currResultsWLO[7][2], currResultsWLO[7][1]],
					["WME",currResultsWME[7][1], currResultsWME[7][2], currResultsWME[7][1]],
					["WMW",currResultsWMW[7][1], currResultsWMW[7][2], currResultsWMW[7][1]],
					["WSU",currResultsWSU[7][1], currResultsWSU[7][2], currResultsWSU[7][1]],
					["WYK",currResultsWYK[7][1], currResultsWYK[7][2], currResultsWYK[7][1]],
					["WIL",currResultsWIL[7][1], currResultsWIL[7][2], currResultsWIL[7][1]],
					["WOR",currResultsWOR[7][1], currResultsWOR[7][2], currResultsWOR[7][1]]];
					
		var SDLPArray  = [["AVO",currResultsAVO[8][1], currResultsAVO[8][2], currResultsAVO[8][1]],
					["BED",currResultsBED[8][1], currResultsBED[8][2], currResultsBED[8][1]],
					["BER",currResultsBER[8][1], currResultsBER[8][2], currResultsBER[8][1]],
					["BUK",currResultsBUK[8][1], currResultsBUK[8][2], currResultsBUK[8][1]],
					["CAM",currResultsCAM[8][1], currResultsCAM[8][2], currResultsCAM[8][1]],
					["CNL",currResultsCNL[8][1], currResultsCNL[8][2], currResultsCNL[8][1]],
					["CHE",currResultsCHE[8][1], currResultsCHE[8][2], currResultsCHE[8][1]],
					["CLW",currResultsCLW[8][1], currResultsCLW[8][2], currResultsCLW[8][1]],
					["COR",currResultsCOR[8][1], currResultsCOR[8][2], currResultsCOR[8][1]],
					["DUR",currResultsDUR[8][1], currResultsDUR[8][2], currResultsDUR[8][1]],
					["CUM",currResultsCUM[8][1], currResultsCUM[8][2], currResultsCUM[8][1]],
					["DER",currResultsDER[8][1], currResultsDER[8][2], currResultsDER[8][1]],
					["DEV",currResultsDEV[8][1], currResultsDEV[8][2], currResultsDEV[8][1]],
					["DOR",currResultsDOR[8][1], currResultsDOR[8][2], currResultsDOR[8][1]],
					["DYF",currResultsDYF[8][1], currResultsDYF[8][2], currResultsDYF[8][1]],
					["ESU",currResultsESU[8][1], currResultsESU[8][2], currResultsESU[8][1]],
					["ESS",currResultsESS[8][1], currResultsESS[8][2], currResultsESS[8][1]],
					["FIF",currResultsFIF[8][1], currResultsFIF[8][2], currResultsFIF[8][1]],
					["GLA",currResultsGLA[8][1], currResultsGLA[8][2], currResultsGLA[8][1]],
					["GLO",currResultsGLO[8][1], currResultsGLO[8][2], currResultsGLO[8][1]],
					["GRA",currResultsGRA[8][1], currResultsGRA[8][2], currResultsGRA[8][1]],
					["GMA",currResultsGMA[8][1], currResultsGMA[8][2], currResultsGMA[8][1]],
					["GWE",currResultsGWE[8][1], currResultsGWE[8][2], currResultsGWE[8][1]],
					["GWY",currResultsGWY[8][1], currResultsGWY[8][2], currResultsGWY[8][1]],
					["HAM",currResultsHAM[8][1], currResultsHAM[8][2], currResultsHAM[8][1]],
					["HER",currResultsHER[8][1], currResultsHER[8][2], currResultsHER[8][1]],
					["HET",currResultsHET[8][1], currResultsHET[8][2], currResultsHET[8][1]],
					["HAI",currResultsHAI[8][1], currResultsHAI[8][2], currResultsHAI[8][1]],
					["HUM",currResultsHUM[8][1], currResultsHUM[8][2], currResultsHUM[8][1]],
					["KEN",currResultsKEN[8][1], currResultsKEN[8][2], currResultsKEN[8][1]],
					["LAK",currResultsLAK[8][1], currResultsLAK[8][2], currResultsLAK[8][1]],
					["LAC",currResultsLAC[8][1], currResultsLAC[8][2], currResultsLAC[8][1]],
					["LAR",currResultsLAR[8][1], currResultsLAR[8][2], currResultsLAR[8][1]],
					["LIN",currResultsLIN[8][1], currResultsLIN[8][2], currResultsLIN[8][1]],
					["LOT",currResultsLOT[8][1], currResultsLOT[8][2], currResultsLOT[8][1]],
					["MER",currResultsMER[8][1], currResultsMER[8][2], currResultsMER[8][1]],
					["MGL",currResultsMGL[8][1], currResultsMGL[8][2], currResultsMGL[8][1]],
					["NOR",currResultsNOR[8][1], currResultsNOR[8][2], currResultsNOR[8][1]],
					["NEL",currResultsNEL[8][1], currResultsNEL[8][2], currResultsNEL[8][1]],
					["NLO",currResultsNLO[8][1], currResultsNLO[8][2], currResultsNLO[8][1]],
					["NYK",currResultsNYK[8][1], currResultsNYK[8][2], currResultsNYK[8][1]],
					["NTH",currResultsNTH[8][1], currResultsNTH[8][2], currResultsNTH[8][1]],
					["NIR",currResultsNIR[8][1], currResultsNIR[8][2], currResultsNIR[8][1]],
					["NOU",currResultsNOU[8][1], currResultsNOU[8][2], currResultsNOU[8][1]],
					["NOT",currResultsNOT[8][1], currResultsNOT[8][2], currResultsNOT[8][1]],
					["OXF",currResultsOXF[8][1], currResultsOXF[8][2], currResultsOXF[8][1]],
					["POW",currResultsPOW[8][1], currResultsPOW[8][2], currResultsPOW[8][1]],
					["SHR",currResultsSHR[8][1], currResultsSHR[8][2], currResultsSHR[8][1]],
					["SOM",currResultsSOM[8][1], currResultsSOM[8][2], currResultsSOM[8][1]],
					["SCL",currResultsSCL[8][1], currResultsSCL[8][2], currResultsSCL[8][1]],
					["SEL",currResultsSEL[8][1], currResultsSEL[8][2], currResultsSEL[8][1]],
					["SGL",currResultsSGL[8][1], currResultsSGL[8][2], currResultsSGL[8][1]],
					["SSC",currResultsSSC[8][1], currResultsSSC[8][2], currResultsSSC[8][1]],
					["SYK",currResultsSYK[8][1], currResultsSYK[8][2], currResultsSYK[8][1]],
					["STA",currResultsSTA[8][1], currResultsSTA[8][2], currResultsSTA[8][1]],
					["STR",currResultsSTR[8][1], currResultsSTR[8][2], currResultsSTR[8][1]],
					["SUF",currResultsSUF[8][1], currResultsSUF[8][2], currResultsSUF[8][1]],
					["SUR",currResultsSUR[8][1], currResultsSUR[8][2], currResultsSUR[8][1]],
					["TAY",currResultsTAY[8][1], currResultsTAY[8][2], currResultsTAY[8][1]],
					["TEE",currResultsTEE[8][1], currResultsTEE[8][2], currResultsTEE[8][1]],
					["TYN",currResultsTYN[8][1], currResultsTYN[8][2], currResultsTYN[8][1]],
					["WAR",currResultsWAR[8][1], currResultsWAR[8][2], currResultsWAR[8][1]],
					["WGL",currResultsWGL[8][1], currResultsWGL[8][2], currResultsWGL[8][1]],
					["WLO",currResultsWLO[8][1], currResultsWLO[8][2], currResultsWLO[8][1]],
					["WME",currResultsWME[8][1], currResultsWME[8][2], currResultsWME[8][1]],
					["WMW",currResultsWMW[8][1], currResultsWMW[8][2], currResultsWMW[8][1]],
					["WSU",currResultsWSU[8][1], currResultsWSU[8][2], currResultsWSU[8][1]],
					["WYK",currResultsWYK[8][1], currResultsWYK[8][2], currResultsWYK[8][1]],
					["WIL",currResultsWIL[8][1], currResultsWIL[8][2], currResultsWIL[8][1]],
					["WOR",currResultsWOR[8][1], currResultsWOR[8][2], currResultsWOR[8][1]]];
					
		var SNPArray  = [["AVO",currResultsAVO[9][1], currResultsAVO[9][2], currResultsAVO[9][1]],
					["BED",currResultsBED[9][1], currResultsBED[9][2], currResultsBED[9][1]],
					["BER",currResultsBER[9][1], currResultsBER[9][2], currResultsBER[9][1]],
					["BUK",currResultsBUK[9][1], currResultsBUK[9][2], currResultsBUK[9][1]],
					["CAM",currResultsCAM[9][1], currResultsCAM[9][2], currResultsCAM[9][1]],
					["CNL",currResultsCNL[9][1], currResultsCNL[9][2], currResultsCNL[9][1]],
					["CHE",currResultsCHE[9][1], currResultsCHE[9][2], currResultsCHE[9][1]],
					["CLW",currResultsCLW[9][1], currResultsCLW[9][2], currResultsCLW[9][1]],
					["COR",currResultsCOR[9][1], currResultsCOR[9][2], currResultsCOR[9][1]],
					["DUR",currResultsDUR[9][1], currResultsDUR[9][2], currResultsDUR[9][1]],
					["CUM",currResultsCUM[9][1], currResultsCUM[9][2], currResultsCUM[9][1]],
					["DER",currResultsDER[9][1], currResultsDER[9][2], currResultsDER[9][1]],
					["DEV",currResultsDEV[9][1], currResultsDEV[9][2], currResultsDEV[9][1]],
					["DOR",currResultsDOR[9][1], currResultsDOR[9][2], currResultsDOR[9][1]],
					["DYF",currResultsDYF[9][1], currResultsDYF[9][2], currResultsDYF[9][1]],
					["ESU",currResultsESU[9][1], currResultsESU[9][2], currResultsESU[9][1]],
					["ESS",currResultsESS[9][1], currResultsESS[9][2], currResultsESS[9][1]],
					["FIF",currResultsFIF[9][1], currResultsFIF[9][2], currResultsFIF[9][1]],
					["GLA",currResultsGLA[9][1], currResultsGLA[9][2], currResultsGLA[9][1]],
					["GLO",currResultsGLO[9][1], currResultsGLO[9][2], currResultsGLO[9][1]],
					["GRA",currResultsGRA[9][1], currResultsGRA[9][2], currResultsGRA[9][1]],
					["GMA",currResultsGMA[9][1], currResultsGMA[9][2], currResultsGMA[9][1]],
					["GWE",currResultsGWE[9][1], currResultsGWE[9][2], currResultsGWE[9][1]],
					["GWY",currResultsGWY[9][1], currResultsGWY[9][2], currResultsGWY[9][1]],
					["HAM",currResultsHAM[9][1], currResultsHAM[9][2], currResultsHAM[9][1]],
					["HER",currResultsHER[9][1], currResultsHER[9][2], currResultsHER[9][1]],
					["HET",currResultsHET[9][1], currResultsHET[9][2], currResultsHET[9][1]],
					["HAI",currResultsHAI[9][1], currResultsHAI[9][2], currResultsHAI[9][1]],
					["HUM",currResultsHUM[9][1], currResultsHUM[9][2], currResultsHUM[9][1]],
					["KEN",currResultsKEN[9][1], currResultsKEN[9][2], currResultsKEN[9][1]],
					["LAK",currResultsLAK[9][1], currResultsLAK[9][2], currResultsLAK[9][1]],
					["LAC",currResultsLAC[9][1], currResultsLAC[9][2], currResultsLAC[9][1]],
					["LAR",currResultsLAR[9][1], currResultsLAR[9][2], currResultsLAR[9][1]],
					["LIN",currResultsLIN[9][1], currResultsLIN[9][2], currResultsLIN[9][1]],
					["LOT",currResultsLOT[9][1], currResultsLOT[9][2], currResultsLOT[9][1]],
					["MER",currResultsMER[9][1], currResultsMER[9][2], currResultsMER[9][1]],
					["MGL",currResultsMGL[9][1], currResultsMGL[9][2], currResultsMGL[9][1]],
					["NOR",currResultsNOR[9][1], currResultsNOR[9][2], currResultsNOR[9][1]],
					["NEL",currResultsNEL[9][1], currResultsNEL[9][2], currResultsNEL[9][1]],
					["NLO",currResultsNLO[9][1], currResultsNLO[9][2], currResultsNLO[9][1]],
					["NYK",currResultsNYK[9][1], currResultsNYK[9][2], currResultsNYK[9][1]],
					["NTH",currResultsNTH[9][1], currResultsNTH[9][2], currResultsNTH[9][1]],
					["NIR",currResultsNIR[9][1], currResultsNIR[9][2], currResultsNIR[9][1]],
					["NOU",currResultsNOU[9][1], currResultsNOU[9][2], currResultsNOU[9][1]],
					["NOT",currResultsNOT[9][1], currResultsNOT[9][2], currResultsNOT[9][1]],
					["OXF",currResultsOXF[9][1], currResultsOXF[9][2], currResultsOXF[9][1]],
					["POW",currResultsPOW[9][1], currResultsPOW[9][2], currResultsPOW[9][1]],
					["SHR",currResultsSHR[9][1], currResultsSHR[9][2], currResultsSHR[9][1]],
					["SOM",currResultsSOM[9][1], currResultsSOM[9][2], currResultsSOM[9][1]],
					["SCL",currResultsSCL[9][1], currResultsSCL[9][2], currResultsSCL[9][1]],
					["SEL",currResultsSEL[9][1], currResultsSEL[9][2], currResultsSEL[9][1]],
					["SGL",currResultsSGL[9][1], currResultsSGL[9][2], currResultsSGL[9][1]],
					["SSC",currResultsSSC[9][1], currResultsSSC[9][2], currResultsSSC[9][1]],
					["SYK",currResultsSYK[9][1], currResultsSYK[9][2], currResultsSYK[9][1]],
					["STA",currResultsSTA[9][1], currResultsSTA[9][2], currResultsSTA[9][1]],
					["STR",currResultsSTR[9][1], currResultsSTR[9][2], currResultsSTR[9][1]],
					["SUF",currResultsSUF[9][1], currResultsSUF[9][2], currResultsSUF[9][1]],
					["SUR",currResultsSUR[9][1], currResultsSUR[9][2], currResultsSUR[9][1]],
					["TAY",currResultsTAY[9][1], currResultsTAY[9][2], currResultsTAY[9][1]],
					["TEE",currResultsTEE[9][1], currResultsTEE[9][2], currResultsTEE[9][1]],
					["TYN",currResultsTYN[9][1], currResultsTYN[9][2], currResultsTYN[9][1]],
					["WAR",currResultsWAR[9][1], currResultsWAR[9][2], currResultsWAR[9][1]],
					["WGL",currResultsWGL[9][1], currResultsWGL[9][2], currResultsWGL[9][1]],
					["WLO",currResultsWLO[9][1], currResultsWLO[9][2], currResultsWLO[9][1]],
					["WME",currResultsWME[9][1], currResultsWME[9][2], currResultsWME[9][1]],
					["WMW",currResultsWMW[9][1], currResultsWMW[9][2], currResultsWMW[9][1]],
					["WSU",currResultsWSU[9][1], currResultsWSU[9][2], currResultsWSU[9][1]],
					["WYK",currResultsWYK[9][1], currResultsWYK[9][2], currResultsWYK[9][1]],
					["WIL",currResultsWIL[9][1], currResultsWIL[9][2], currResultsWIL[9][1]],
					["WOR",currResultsWOR[9][1], currResultsWOR[9][2], currResultsWOR[9][1]]];

		var SinnFeinArray  = [["AVO",currResultsAVO[10][1], currResultsAVO[10][2], currResultsAVO[10][1]],
					["BED",currResultsBED[10][1], currResultsBED[10][2], currResultsBED[10][1]],
					["BER",currResultsBER[10][1], currResultsBER[10][2], currResultsBER[10][1]],
					["BUK",currResultsBUK[10][1], currResultsBUK[10][2], currResultsBUK[10][1]],
					["CAM",currResultsCAM[10][1], currResultsCAM[10][2], currResultsCAM[10][1]],
					["CNL",currResultsCNL[10][1], currResultsCNL[10][2], currResultsCNL[10][1]],
					["CHE",currResultsCHE[10][1], currResultsCHE[10][2], currResultsCHE[10][1]],
					["CLW",currResultsCLW[10][1], currResultsCLW[10][2], currResultsCLW[10][1]],
					["COR",currResultsCOR[10][1], currResultsCOR[10][2], currResultsCOR[10][1]],
					["DUR",currResultsDUR[10][1], currResultsDUR[10][2], currResultsDUR[10][1]],
					["CUM",currResultsCUM[10][1], currResultsCUM[10][2], currResultsCUM[10][1]],
					["DER",currResultsDER[10][1], currResultsDER[10][2], currResultsDER[10][1]],
					["DEV",currResultsDEV[10][1], currResultsDEV[10][2], currResultsDEV[10][1]],
					["DOR",currResultsDOR[10][1], currResultsDOR[10][2], currResultsDOR[10][1]],
					["DYF",currResultsDYF[10][1], currResultsDYF[10][2], currResultsDYF[10][1]],
					["ESU",currResultsESU[10][1], currResultsESU[10][2], currResultsESU[10][1]],
					["ESS",currResultsESS[10][1], currResultsESS[10][2], currResultsESS[10][1]],
					["FIF",currResultsFIF[10][1], currResultsFIF[10][2], currResultsFIF[10][1]],
					["GLA",currResultsGLA[10][1], currResultsGLA[10][2], currResultsGLA[10][1]],
					["GLO",currResultsGLO[10][1], currResultsGLO[10][2], currResultsGLO[10][1]],
					["GRA",currResultsGRA[10][1], currResultsGRA[10][2], currResultsGRA[10][1]],
					["GMA",currResultsGMA[10][1], currResultsGMA[10][2], currResultsGMA[10][1]],
					["GWE",currResultsGWE[10][1], currResultsGWE[10][2], currResultsGWE[10][1]],
					["GWY",currResultsGWY[10][1], currResultsGWY[10][2], currResultsGWY[10][1]],
					["HAM",currResultsHAM[10][1], currResultsHAM[10][2], currResultsHAM[10][1]],
					["HER",currResultsHER[10][1], currResultsHER[10][2], currResultsHER[10][1]],
					["HET",currResultsHET[10][1], currResultsHET[10][2], currResultsHET[10][1]],
					["HAI",currResultsHAI[10][1], currResultsHAI[10][2], currResultsHAI[10][1]],
					["HUM",currResultsHUM[10][1], currResultsHUM[10][2], currResultsHUM[10][1]],
					["KEN",currResultsKEN[10][1], currResultsKEN[10][2], currResultsKEN[10][1]],
					["LAK",currResultsLAK[10][1], currResultsLAK[10][2], currResultsLAK[10][1]],
					["LAC",currResultsLAC[10][1], currResultsLAC[10][2], currResultsLAC[10][1]],
					["LAR",currResultsLAR[10][1], currResultsLAR[10][2], currResultsLAR[10][1]],
					["LIN",currResultsLIN[10][1], currResultsLIN[10][2], currResultsLIN[10][1]],
					["LOT",currResultsLOT[10][1], currResultsLOT[10][2], currResultsLOT[10][1]],
					["MER",currResultsMER[10][1], currResultsMER[10][2], currResultsMER[10][1]],
					["MGL",currResultsMGL[10][1], currResultsMGL[10][2], currResultsMGL[10][1]],
					["NOR",currResultsNOR[10][1], currResultsNOR[10][2], currResultsNOR[10][1]],
					["NEL",currResultsNEL[10][1], currResultsNEL[10][2], currResultsNEL[10][1]],
					["NLO",currResultsNLO[10][1], currResultsNLO[10][2], currResultsNLO[10][1]],
					["NYK",currResultsNYK[10][1], currResultsNYK[10][2], currResultsNYK[10][1]],
					["NTH",currResultsNTH[10][1], currResultsNTH[10][2], currResultsNTH[10][1]],
					["NIR",currResultsNIR[10][1], currResultsNIR[10][2], currResultsNIR[10][1]],
					["NOU",currResultsNOU[10][1], currResultsNOU[10][2], currResultsNOU[10][1]],
					["NOT",currResultsNOT[10][1], currResultsNOT[10][2], currResultsNOT[10][1]],
					["OXF",currResultsOXF[10][1], currResultsOXF[10][2], currResultsOXF[10][1]],
					["POW",currResultsPOW[10][1], currResultsPOW[10][2], currResultsPOW[10][1]],
					["SHR",currResultsSHR[10][1], currResultsSHR[10][2], currResultsSHR[10][1]],
					["SOM",currResultsSOM[10][1], currResultsSOM[10][2], currResultsSOM[10][1]],
					["SCL",currResultsSCL[10][1], currResultsSCL[10][2], currResultsSCL[10][1]],
					["SEL",currResultsSEL[10][1], currResultsSEL[10][2], currResultsSEL[10][1]],
					["SGL",currResultsSGL[10][1], currResultsSGL[10][2], currResultsSGL[10][1]],
					["SSC",currResultsSSC[10][1], currResultsSSC[10][2], currResultsSSC[10][1]],
					["SYK",currResultsSYK[10][1], currResultsSYK[10][2], currResultsSYK[10][1]],
					["STA",currResultsSTA[10][1], currResultsSTA[10][2], currResultsSTA[10][1]],
					["STR",currResultsSTR[10][1], currResultsSTR[10][2], currResultsSTR[10][1]],
					["SUF",currResultsSUF[10][1], currResultsSUF[10][2], currResultsSUF[10][1]],
					["SUR",currResultsSUR[10][1], currResultsSUR[10][2], currResultsSUR[10][1]],
					["TAY",currResultsTAY[10][1], currResultsTAY[10][2], currResultsTAY[10][1]],
					["TEE",currResultsTEE[10][1], currResultsTEE[10][2], currResultsTEE[10][1]],
					["TYN",currResultsTYN[10][1], currResultsTYN[10][2], currResultsTYN[10][1]],
					["WAR",currResultsWAR[10][1], currResultsWAR[10][2], currResultsWAR[10][1]],
					["WGL",currResultsWGL[10][1], currResultsWGL[10][2], currResultsWGL[10][1]],
					["WLO",currResultsWLO[10][1], currResultsWLO[10][2], currResultsWLO[10][1]],
					["WME",currResultsWME[10][1], currResultsWME[10][2], currResultsWME[10][1]],
					["WMW",currResultsWMW[10][1], currResultsWMW[10][2], currResultsWMW[10][1]],
					["WSU",currResultsWSU[10][1], currResultsWSU[10][2], currResultsWSU[10][1]],
					["WYK",currResultsWYK[10][1], currResultsWYK[10][2], currResultsWYK[10][1]],
					["WIL",currResultsWIL[10][1], currResultsWIL[10][2], currResultsWIL[10][1]],
					["WOR",currResultsWOR[10][1], currResultsWOR[10][2], currResultsWOR[10][1]]];
					
		var UUPArray  = [["AVO",currResultsAVO[11][1], currResultsAVO[11][2], currResultsAVO[11][1]],
					["BED",currResultsBED[11][1], currResultsBED[11][2], currResultsBED[11][1]],
					["BER",currResultsBER[11][1], currResultsBER[11][2], currResultsBER[11][1]],
					["BUK",currResultsBUK[11][1], currResultsBUK[11][2], currResultsBUK[11][1]],
					["CAM",currResultsCAM[11][1], currResultsCAM[11][2], currResultsCAM[11][1]],
					["CNL",currResultsCNL[11][1], currResultsCNL[11][2], currResultsCNL[11][1]],
					["CHE",currResultsCHE[11][1], currResultsCHE[11][2], currResultsCHE[11][1]],
					["CLW",currResultsCLW[11][1], currResultsCLW[11][2], currResultsCLW[11][1]],
					["COR",currResultsCOR[11][1], currResultsCOR[11][2], currResultsCOR[11][1]],
					["DUR",currResultsDUR[11][1], currResultsDUR[11][2], currResultsDUR[11][1]],
					["CUM",currResultsCUM[11][1], currResultsCUM[11][2], currResultsCUM[11][1]],
					["DER",currResultsDER[11][1], currResultsDER[11][2], currResultsDER[11][1]],
					["DEV",currResultsDEV[11][1], currResultsDEV[11][2], currResultsDEV[11][1]],
					["DOR",currResultsDOR[11][1], currResultsDOR[11][2], currResultsDOR[11][1]],
					["DYF",currResultsDYF[11][1], currResultsDYF[11][2], currResultsDYF[11][1]],
					["ESU",currResultsESU[11][1], currResultsESU[11][2], currResultsESU[11][1]],
					["ESS",currResultsESS[11][1], currResultsESS[11][2], currResultsESS[11][1]],
					["FIF",currResultsFIF[11][1], currResultsFIF[11][2], currResultsFIF[11][1]],
					["GLA",currResultsGLA[11][1], currResultsGLA[11][2], currResultsGLA[11][1]],
					["GLO",currResultsGLO[11][1], currResultsGLO[11][2], currResultsGLO[11][1]],
					["GRA",currResultsGRA[11][1], currResultsGRA[11][2], currResultsGRA[11][1]],
					["GMA",currResultsGMA[11][1], currResultsGMA[11][2], currResultsGMA[11][1]],
					["GWE",currResultsGWE[11][1], currResultsGWE[11][2], currResultsGWE[11][1]],
					["GWY",currResultsGWY[11][1], currResultsGWY[11][2], currResultsGWY[11][1]],
					["HAM",currResultsHAM[11][1], currResultsHAM[11][2], currResultsHAM[11][1]],
					["HER",currResultsHER[11][1], currResultsHER[11][2], currResultsHER[11][1]],
					["HET",currResultsHET[11][1], currResultsHET[11][2], currResultsHET[11][1]],
					["HAI",currResultsHAI[11][1], currResultsHAI[11][2], currResultsHAI[11][1]],
					["HUM",currResultsHUM[11][1], currResultsHUM[11][2], currResultsHUM[11][1]],
					["KEN",currResultsKEN[11][1], currResultsKEN[11][2], currResultsKEN[11][1]],
					["LAK",currResultsLAK[11][1], currResultsLAK[11][2], currResultsLAK[11][1]],
					["LAC",currResultsLAC[11][1], currResultsLAC[11][2], currResultsLAC[11][1]],
					["LAR",currResultsLAR[11][1], currResultsLAR[11][2], currResultsLAR[11][1]],
					["LIN",currResultsLIN[11][1], currResultsLIN[11][2], currResultsLIN[11][1]],
					["LOT",currResultsLOT[11][1], currResultsLOT[11][2], currResultsLOT[11][1]],
					["MER",currResultsMER[11][1], currResultsMER[11][2], currResultsMER[11][1]],
					["MGL",currResultsMGL[11][1], currResultsMGL[11][2], currResultsMGL[11][1]],
					["NOR",currResultsNOR[11][1], currResultsNOR[11][2], currResultsNOR[11][1]],
					["NEL",currResultsNEL[11][1], currResultsNEL[11][2], currResultsNEL[11][1]],
					["NLO",currResultsNLO[11][1], currResultsNLO[11][2], currResultsNLO[11][1]],
					["NYK",currResultsNYK[11][1], currResultsNYK[11][2], currResultsNYK[11][1]],
					["NTH",currResultsNTH[11][1], currResultsNTH[11][2], currResultsNTH[11][1]],
					["NIR",currResultsNIR[11][1], currResultsNIR[11][2], currResultsNIR[11][1]],
					["NOU",currResultsNOU[11][1], currResultsNOU[11][2], currResultsNOU[11][1]],
					["NOT",currResultsNOT[11][1], currResultsNOT[11][2], currResultsNOT[11][1]],
					["OXF",currResultsOXF[11][1], currResultsOXF[11][2], currResultsOXF[11][1]],
					["POW",currResultsPOW[11][1], currResultsPOW[11][2], currResultsPOW[11][1]],
					["SHR",currResultsSHR[11][1], currResultsSHR[11][2], currResultsSHR[11][1]],
					["SOM",currResultsSOM[11][1], currResultsSOM[11][2], currResultsSOM[11][1]],
					["SCL",currResultsSCL[11][1], currResultsSCL[11][2], currResultsSCL[11][1]],
					["SEL",currResultsSEL[11][1], currResultsSEL[11][2], currResultsSEL[11][1]],
					["SGL",currResultsSGL[11][1], currResultsSGL[11][2], currResultsSGL[11][1]],
					["SSC",currResultsSSC[11][1], currResultsSSC[11][2], currResultsSSC[11][1]],
					["SYK",currResultsSYK[11][1], currResultsSYK[11][2], currResultsSYK[11][1]],
					["STA",currResultsSTA[11][1], currResultsSTA[11][2], currResultsSTA[11][1]],
					["STR",currResultsSTR[11][1], currResultsSTR[11][2], currResultsSTR[11][1]],
					["SUF",currResultsSUF[11][1], currResultsSUF[11][2], currResultsSUF[11][1]],
					["SUR",currResultsSUR[11][1], currResultsSUR[11][2], currResultsSUR[11][1]],
					["TAY",currResultsTAY[11][1], currResultsTAY[11][2], currResultsTAY[11][1]],
					["TEE",currResultsTEE[11][1], currResultsTEE[11][2], currResultsTEE[11][1]],
					["TYN",currResultsTYN[11][1], currResultsTYN[11][2], currResultsTYN[11][1]],
					["WAR",currResultsWAR[11][1], currResultsWAR[11][2], currResultsWAR[11][1]],
					["WGL",currResultsWGL[11][1], currResultsWGL[11][2], currResultsWGL[11][1]],
					["WLO",currResultsWLO[11][1], currResultsWLO[11][2], currResultsWLO[11][1]],
					["WME",currResultsWME[11][1], currResultsWME[11][2], currResultsWME[11][1]],
					["WMW",currResultsWMW[11][1], currResultsWMW[11][2], currResultsWMW[11][1]],
					["WSU",currResultsWSU[11][1], currResultsWSU[11][2], currResultsWSU[11][1]],
					["WYK",currResultsWYK[11][1], currResultsWYK[11][2], currResultsWYK[11][1]],
					["WIL",currResultsWIL[11][1], currResultsWIL[11][2], currResultsWIL[11][1]],
					["WOR",currResultsWOR[11][1], currResultsWOR[11][2], currResultsWOR[11][1]]];


		
		nationalResultsToConstituencyLevelCalculation(initialisation, AllianceArray, 0);
		nationalResultsToConstituencyLevelCalculation(initialisation, ConservativeArray, 1);
		nationalResultsToConstituencyLevelCalculation(initialisation, DUPArray, 2);
		nationalResultsToConstituencyLevelCalculation(initialisation, GreenArray, 3);
		nationalResultsToConstituencyLevelCalculation(initialisation, LabourArray, 4);
		nationalResultsToConstituencyLevelCalculation(initialisation, LibDemArray, 5);
		nationalResultsToConstituencyLevelCalculation(initialisation, PlaidArray, 6);
		nationalResultsToConstituencyLevelCalculation(initialisation, RefUKArray, 7);
		nationalResultsToConstituencyLevelCalculation(initialisation, SDLPArray, 8);
		nationalResultsToConstituencyLevelCalculation(initialisation, SNPArray, 9);
		nationalResultsToConstituencyLevelCalculation(initialisation, SinnFeinArray, 10);
		nationalResultsToConstituencyLevelCalculation(initialisation, UUPArray, 11);
	}
	
}

function seatCalculation(initialisation) {
	
	if (initialisation){
		constituencies.eachLayer(function(currentLayer){
			((currentLayer.feature.properties.Constituency == "Avon") ? initialStateSainteLague(prevResultsAVO, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Bedfordshire") ? initialStateSainteLague(prevResultsBED, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Berkshire") ? initialStateSainteLague(prevResultsBER, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Buckinghamshire") ? initialStateSainteLague(prevResultsBUK, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Cambridgeshire") ? initialStateSainteLague(prevResultsCAM, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Central London") ? initialStateSainteLague(prevResultsCNL, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Cheshire") ? initialStateSainteLague(prevResultsCHE, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Clwyd") ? initialStateSainteLague(prevResultsCLW, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Cornwall") ? initialStateSainteLague(prevResultsCOR, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "County Durham") ? initialStateSainteLague(prevResultsDUR, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Cumbria") ? initialStateSainteLague(prevResultsCUM, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Derbyshire") ? initialStateSainteLague(prevResultsDER, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Devon") ? initialStateSainteLague(prevResultsDEV, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Dorset") ? initialStateSainteLague(prevResultsDOR, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Dyfed") ? initialStateSainteLague(prevResultsDYF, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "East Sussex") ? initialStateSainteLague(prevResultsESU, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Essex") ? initialStateSainteLague(prevResultsESS, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Fife") ? initialStateSainteLague(prevResultsFIF, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Glasgow") ? initialStateSainteLague(prevResultsGLA, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Glouestershire") ? initialStateSainteLague(prevResultsGLO, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Grampian") ? initialStateSainteLague(prevResultsGRA, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Greater Manchester") ? initialStateSainteLague(prevResultsGMA, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Gwent") ? initialStateSainteLague(prevResultsGWE, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Gwynedd") ? initialStateSainteLague(prevResultsGWY, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Hampshire and the Isle of Wight") ? initialStateSainteLague(prevResultsHAM, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Herefordshire") ? initialStateSainteLague(prevResultsHER, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Hertfordshire") ? initialStateSainteLague(prevResultsHET, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Highlands and Islands") ? initialStateSainteLague(prevResultsHAI, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Humberside") ? initialStateSainteLague(prevResultsHUM, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Kent") ? initialStateSainteLague(prevResultsKEN, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Lanarkshire") ? initialStateSainteLague(prevResultsLAK, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Lancashire") ? initialStateSainteLague(prevResultsLAC, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Leicestershire and Rutland") ? initialStateSainteLague(prevResultsLAR, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Lincolnshire") ? initialStateSainteLague(prevResultsLIN, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Lothian") ? initialStateSainteLague(prevResultsLOT, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Merseyside") ? initialStateSainteLague(prevResultsMER, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Mid Glamorgan") ? initialStateSainteLague(prevResultsMGL, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Norfolk") ? initialStateSainteLague(prevResultsNOR, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "North East London") ? initialStateSainteLague(prevResultsNEL, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "North London") ? initialStateSainteLague(prevResultsNLO, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "North Yorkshire") ? initialStateSainteLague(prevResultsNYK, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Northamptonshire") ? initialStateSainteLague(prevResultsNTH, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Northern Ireland") ? initialStateSainteLague(prevResultsNIR, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Northumberland") ? initialStateSainteLague(prevResultsNOU, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Nottinghamshire") ? initialStateSainteLague(prevResultsNOT, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Oxfordshire") ? initialStateSainteLague(prevResultsOXF, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Powys") ? initialStateSainteLague(prevResultsPOW, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Shropshire") ? initialStateSainteLague(prevResultsSHR, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Somerset") ? initialStateSainteLague(prevResultsSOM, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "South Central London") ? initialStateSainteLague(prevResultsSCL, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "South East London") ? initialStateSainteLague(prevResultsSEL, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "South Glamorgan") ? initialStateSainteLague(prevResultsSGL, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "South Scotland") ? initialStateSainteLague(prevResultsSSC, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "South Yorkshire") ? initialStateSainteLague(prevResultsSYK, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Staffordshire") ? initialStateSainteLague(prevResultsSTA, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "West Scotland (Strathclyde)") ? initialStateSainteLague(prevResultsSTR, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Suffolk") ? initialStateSainteLague(prevResultsSUF, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Surrey") ? initialStateSainteLague(prevResultsSUR, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Tayside") ? initialStateSainteLague(prevResultsTAY, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Teeside") ? initialStateSainteLague(prevResultsTEE, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Tyne and Wear") ? initialStateSainteLague(prevResultsTYN, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Warwickshire") ? initialStateSainteLague(prevResultsWAR, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "West Glamorgan") ? initialStateSainteLague(prevResultsWGL, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "West London") ? initialStateSainteLague(prevResultsWLO, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "West Midlands East") ? initialStateSainteLague(prevResultsWME, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "West Midlands West") ? initialStateSainteLague(prevResultsWMW, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "West Sussex") ? initialStateSainteLague(prevResultsWSU, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "West Yorkshire") ? initialStateSainteLague(prevResultsWYK, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Wiltshire") ? initialStateSainteLague(prevResultsWIL, currentLayer.feature.properties.DirectSeats, initialisation)
			: initialStateSainteLague(prevResultsWOR, currentLayer.feature.properties.DirectSeats, initialisation));
		});
			
		nationalAdjustmentSeatAllocator(initialisation);
		nationalResultsToConstituencyLevelInit(initialisation);
		
	}
	else {
		constituencies.eachLayer(function(currentLayer){
			((currentLayer.feature.properties.Constituency == "Avon") ? initialStateSainteLague(currResultsAVO, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Bedfordshire") ? initialStateSainteLague(currResultsBED, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Berkshire") ? initialStateSainteLague(currResultsBER, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Buckinghamshire") ? initialStateSainteLague(currResultsBUK, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Cambridgeshire") ? initialStateSainteLague(currResultsCAM, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Central London") ? initialStateSainteLague(currResultsCNL, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Cheshire") ? initialStateSainteLague(currResultsCHE, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Clwyd") ? initialStateSainteLague(currResultsCLW, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Cornwall") ? initialStateSainteLague(currResultsCOR, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "County Durham") ? initialStateSainteLague(currResultsDUR, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Cumbria") ? initialStateSainteLague(currResultsCUM, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Derbyshire") ? initialStateSainteLague(currResultsDER, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Devon") ? initialStateSainteLague(currResultsDEV, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Dorset") ? initialStateSainteLague(currResultsDOR, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Dyfed") ? initialStateSainteLague(currResultsDYF, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "East Sussex") ? initialStateSainteLague(currResultsESU, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Essex") ? initialStateSainteLague(currResultsESS, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Fife") ? initialStateSainteLague(currResultsFIF, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Glasgow") ? initialStateSainteLague(currResultsGLA, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Glouestershire") ? initialStateSainteLague(currResultsGLO, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Grampian") ? initialStateSainteLague(currResultsGRA, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Greater Manchester") ? initialStateSainteLague(currResultsGMA, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Gwent") ? initialStateSainteLague(currResultsGWE, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Gwynedd") ? initialStateSainteLague(currResultsGWY, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Hampshire and the Isle of Wight") ? initialStateSainteLague(currResultsHAM, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Herefordshire") ? initialStateSainteLague(currResultsHER, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Hertfordshire") ? initialStateSainteLague(currResultsHET, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Highlands and Islands") ? initialStateSainteLague(currResultsHAI, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Humberside") ? initialStateSainteLague(currResultsHUM, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Kent") ? initialStateSainteLague(currResultsKEN, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Lanarkshire") ? initialStateSainteLague(currResultsLAK, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Lancashire") ? initialStateSainteLague(currResultsLAC, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Leicestershire and Rutland") ? initialStateSainteLague(currResultsLAR, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Lincolnshire") ? initialStateSainteLague(currResultsLIN, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Lothian") ? initialStateSainteLague(currResultsLOT, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Merseyside") ? initialStateSainteLague(currResultsMER, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Mid Glamorgan") ? initialStateSainteLague(currResultsMGL, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Norfolk") ? initialStateSainteLague(currResultsNOR, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "North East London") ? initialStateSainteLague(currResultsNEL, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "North London") ? initialStateSainteLague(currResultsNLO, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "North Yorkshire") ? initialStateSainteLague(currResultsNYK, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Northamptonshire") ? initialStateSainteLague(currResultsNTH, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Northern Ireland") ? initialStateSainteLague(currResultsNIR, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Northumberland") ? initialStateSainteLague(currResultsNOU, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Nottinghamshire") ? initialStateSainteLague(currResultsNOT, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Oxfordshire") ? initialStateSainteLague(currResultsOXF, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Powys") ? initialStateSainteLague(currResultsPOW, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Shropshire") ? initialStateSainteLague(currResultsSHR, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Somerset") ? initialStateSainteLague(currResultsSOM, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "South Central London") ? initialStateSainteLague(currResultsSCL, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "South East London") ? initialStateSainteLague(currResultsSEL, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "South Glamorgan") ? initialStateSainteLague(currResultsSGL, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "South Scotland") ? initialStateSainteLague(currResultsSSC, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "South Yorkshire") ? initialStateSainteLague(currResultsSYK, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Staffordshire") ? initialStateSainteLague(currResultsSTA, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "West Scotland (Strathclyde)") ? initialStateSainteLague(currResultsSTR, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Suffolk") ? initialStateSainteLague(currResultsSUF, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Surrey") ? initialStateSainteLague(currResultsSUR, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Tayside") ? initialStateSainteLague(currResultsTAY, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Teeside") ? initialStateSainteLague(currResultsTEE, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Tyne and Wear") ? initialStateSainteLague(currResultsTYN, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Warwickshire") ? initialStateSainteLague(currResultsWAR, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "West Glamorgan") ? initialStateSainteLague(currResultsWGL, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "West London") ? initialStateSainteLague(currResultsWLO, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "West Midlands East") ? initialStateSainteLague(currResultsWME, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "West Midlands West") ? initialStateSainteLague(currResultsWMW, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "West Sussex") ? initialStateSainteLague(currResultsWSU, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "West Yorkshire") ? initialStateSainteLague(currResultsWYK, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Wiltshire") ? initialStateSainteLague(currResultsWIL, currentLayer.feature.properties.DirectSeats, initialisation)
			: initialStateSainteLague(currResultsWOR, currentLayer.feature.properties.DirectSeats, initialisation));
		});
		
		nationalAdjustmentSeatAllocator(initialisation);
		nationalResultsToConstituencyLevelInit(initialisation);
	}
	
	
}


//borders

function styleConstituencies(feature) {
	ConservativeVotes = feature.properties.Conservative * ConservativeModifier;
	LabourVotes = feature.properties.Labour * LabourModifier;
	LibDemVotes = feature.properties.LibDem * LibDemModifier;
	BrexitVotes = feature.properties.BrxRef * BrexitModifier;
	GreenVotes = feature.properties.Green * GreenModifier;
	SNPVotes = feature.properties.SNP * SNPModifier;
	PlaidVotes = feature.properties.PlaidCymru * PlaidModifier;
	DUPVotes = feature.properties.DUP;
	SinnFeinVotes = feature.properties.SinnFein;
	UUPVotes = feature.properties.UUP;
	SDLPVotes = feature.properties.SDLP;
	AllianceVotes = feature.properties.Alliance;

	if ((ConservativeVotes > LabourVotes) && (ConservativeVotes > LibDemVotes) && (ConservativeVotes > BrexitVotes) && (ConservativeVotes > GreenVotes) && (ConservativeVotes > SNPVotes) && (ConservativeVotes > PlaidVotes) && (ConservativeVotes > DUPVotes) && (ConservativeVotes > SinnFeinVotes) && (ConservativeVotes > UUPVotes) && (ConservativeVotes > SDLPVotes) && (ConservativeVotes > AllianceVotes)){
		return {
			weight: 0.75,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#0087dc'
			
		};
	}
	if ((LabourVotes > ConservativeVotes) && (LabourVotes > LibDemVotes) && (LabourVotes > BrexitVotes) && (LabourVotes > GreenVotes) && (LabourVotes > SNPVotes) && (LabourVotes > PlaidVotes) && (LabourVotes > DUPVotes) && (LabourVotes > SinnFeinVotes) && (LabourVotes > UUPVotes) && (LabourVotes > SDLPVotes) && (LabourVotes > AllianceVotes)) {
		return {
			weight: 0.75,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#e4003b'
			
		};
	}
	if ((LibDemVotes > ConservativeVotes) && (LibDemVotes > LabourVotes) && (LibDemVotes > BrexitVotes) && (LibDemVotes > GreenVotes) && (LibDemVotes > SNPVotes) && (LibDemVotes > PlaidVotes) && (LibDemVotes > DUPVotes) && (LibDemVotes > SinnFeinVotes) && (LibDemVotes > UUPVotes) && (LibDemVotes > SDLPVotes) && (LibDemVotes > AllianceVotes)) {
		return {
			weight: 0.75,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#faa61a'
			
		};
	}
	if ((BrexitVotes > ConservativeVotes) && (BrexitVotes > LabourVotes) && (BrexitVotes > LibDemVotes) && (BrexitVotes > GreenVotes) && (BrexitVotes > SNPVotes) && (BrexitVotes > PlaidVotes) && (BrexitVotes > DUPVotes) && (BrexitVotes > SinnFeinVotes) && (BrexitVotes > UUPVotes) && (BrexitVotes > SDLPVotes) && (BrexitVotes > AllianceVotes)) {
		return {
			weight: 0.75,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#12b6cf'
			
		};
	}
	if ((GreenVotes > ConservativeVotes) && (GreenVotes > LabourVotes) && (GreenVotes > BrexitVotes) && (GreenVotes > LibDemVotes) && (GreenVotes > SNPVotes) && (GreenVotes > PlaidVotes) && (GreenVotes > DUPVotes) && (GreenVotes > SinnFeinVotes) && (GreenVotes > UUPVotes) && (GreenVotes > SDLPVotes) && (GreenVotes > AllianceVotes)) {
		return {
			weight: 0.75,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#6ab023'
			
		};
	}
	if ((SNPVotes > ConservativeVotes) && (SNPVotes > LabourVotes) && (SNPVotes > BrexitVotes) && (SNPVotes > GreenVotes) && (SNPVotes > LibDemVotes) && (SNPVotes > PlaidVotes) && (SNPVotes > DUPVotes) && (SNPVotes > SinnFeinVotes) && (SNPVotes > UUPVotes) && (SNPVotes > SDLPVotes) && (SNPVotes > AllianceVotes)){
		return {
			weight: 0.75,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#fdf38e'
			
		};
	}
	if ((PlaidVotes > ConservativeVotes) && (PlaidVotes > LabourVotes) && (PlaidVotes > BrexitVotes) && (PlaidVotes > GreenVotes) && (PlaidVotes > LibDemVotes) && (PlaidVotes > SNPVotes) && (PlaidVotes > DUPVotes) && (PlaidVotes > SinnFeinVotes) && (PlaidVotes > UUPVotes) && (PlaidVotes > SDLPVotes) && (PlaidVotes > AllianceVotes)) {
		return {
			weight: 0.75,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#008142'
				
		};
	}
	if ((DUPVotes > ConservativeVotes) && (DUPVotes > LabourVotes) && (DUPVotes > BrexitVotes) && (DUPVotes > GreenVotes) && (DUPVotes > LibDemVotes) && (DUPVotes > SNPVotes) && (DUPVotes > PlaidVotes) && (DUPVotes > SinnFeinVotes) && (DUPVotes > UUPVotes) && (DUPVotes > SDLPVotes) && (DUPVotes > AllianceVotes)) {
		return {
			weight: 0.75,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#d46a4c'
				
		};
	}
	if ((SinnFeinVotes > ConservativeVotes) && (SinnFeinVotes > LabourVotes) && (SinnFeinVotes > BrexitVotes) && (SinnFeinVotes > GreenVotes) && (SinnFeinVotes > LibDemVotes) && (SinnFeinVotes > SNPVotes) && (SinnFeinVotes > PlaidVotes) && (SinnFeinVotes > DUPVotes) && (SinnFeinVotes > UUPVotes) && (SinnFeinVotes > SDLPVotes) && (SinnFeinVotes > AllianceVotes)) {
		return {
			weight: 0.75,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#326760'
				
		};
	}
	if ((UUPVotes > ConservativeVotes) && (UUPVotes > LabourVotes) && (UUPVotes > BrexitVotes) && (UUPVotes > GreenVotes) && (UUPVotes > LibDemVotes) && (UUPVotes > SNPVotes) && (UUPVotes > PlaidVotes) && (UUPVotes > SinnFeinVotes) && (UUPVotes > DUPVotes) && (UUPVotes > SDLPVotes) && (UUPVotes > AllianceVotes)) {
		return {
			weight: 0.75,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#48a5ee'
				
		};
	}
	if ((SDLPVotes > ConservativeVotes) && (SDLPVotes > LabourVotes) && (SDLPVotes > BrexitVotes) && (SDLPVotes > GreenVotes) && (SDLPVotes > LibDemVotes) && (SDLPVotes > SNPVotes) && (SDLPVotes > PlaidVotes) && (SDLPVotes > SinnFeinVotes) && (SDLPVotes > UUPVotes) && (SDLPVotes > DUPVotes) && (SDLPVotes > AllianceVotes)) {
		return {
			weight: 0.75,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#2aa82c'
				
		};
	}
	if ((AllianceVotes > ConservativeVotes) && (AllianceVotes > LabourVotes) && (AllianceVotes > BrexitVotes) && (AllianceVotes > GreenVotes) && (AllianceVotes > LibDemVotes) && (AllianceVotes > SNPVotes) && (AllianceVotes > PlaidVotes) && (AllianceVotes > SinnFeinVotes) && (AllianceVotes > UUPVotes) && (AllianceVotes > SDLPVotes) && (AllianceVotes > DUPVotes)) {
		return {
			weight: 0.75,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#f6cb2f'
				
		};
	}
}

function fillConstituencyArrays(constituencyCollection, initialisation) {
	
	
	if (initialisation)
	{
		ConservativeModifier = 1;
		LabourModifier = 1;
		LibDemModifier = 1;
		BrexitModifier = 1;
		GreenModifier = 1;
		SNPModifier = 1;
		PlaidModifier = 1;
	}
	var parties = ["Conservative","Labour","Liberal Democrats","Reform UK","Green","SNP","Plaid Cymru","DUP","Sinn Fein","UUP","SDLP","Alliance"];
	let noOfParties = parties.length;
	var results = new Array(noOfParties);
	for (var i = 0; i < results.length; i++) {
		results[i] = new Array(3); //Loop through depending on how many districts there are and create new fields.
		results[i][1] = 0;
		results[i][2] = 0;
		results[i][3] = 0;
	}

	var index = 0; //Default index to 0 as this is the standard starting point for any array.
	
	
	

	for (var i = 0; i < parties.length; i++){
		results[index][0] = parties[i]; 
		results[index][1] = results[index][1] + ((parties[i] == "Conservative") ? Math.round(((constituencyCollection.properties.Conservative * ConservativeModifier) * 1) / 1)
		: (parties[i] == "Labour") ? Math.round(((constituencyCollection.properties.Labour * LabourModifier) * 1) / 1)
		: (parties[i] == "Liberal Democrats") ? Math.round(((constituencyCollection.properties.LibDem * LibDemModifier) * 1) / 1)
		: (parties[i] == "Reform UK") ? Math.round(((constituencyCollection.properties.BrxRef * BrexitModifier) * 1) / 1)
		: (parties[i] == "Green") ? Math.round(((constituencyCollection.properties.Green * GreenModifier) * 1) / 1)
		: (parties[i] == "SNP") ? Math.round(((constituencyCollection.properties.SNP * SNPModifier) * 1) / 1)
		: (parties[i] == "Plaid Cymru") ? Math.round(((constituencyCollection.properties.PlaidCymru * PlaidModifier) * 1) / 1)
		: (parties[i] == "DUP") ? Math.round(((constituencyCollection.properties.DUP) * 1) / 1)
		: (parties[i] == "Sinn Fein") ? Math.round(((constituencyCollection.properties.SinnFein) * 1) / 1)
		: (parties[i] == "UUP") ? Math.round(((constituencyCollection.properties.UUP) * 1) / 1)
		: (parties[i] == "SDLP") ? Math.round(((constituencyCollection.properties.SDLP) * 1) / 1)
		: Math.round(((constituencyCollection.properties.Alliance) * 1) / 1));
		results[index][2] = 0;
		results[index][3] = results[index][1];
		index++;
	}
	index = 0;



	return results;
}

function fillNationalArrayByConstituency(currentArray, results){
	for (var i = 0; i < currentArray.length; i++) {
		if (currentArray[i][0] == "Conservative")
		{
			results[0][1] = results[0][1] + currentArray[i][1];
			results[0][2] = results[0][2] + currentArray[i][2];
			results[0][3] = results[0][3] + currentArray[i][1];
		}
		if (currentArray[i][0] == "Labour")
		{
			results[1][1] = results[1][1] + currentArray[i][1];
			results[1][2] = results[1][2] + currentArray[i][2];
			results[1][3] = results[1][3] + currentArray[i][1];
		}
		if (currentArray[i][0] == "Liberal Democrats")
		{
			results[2][1] = results[2][1] + currentArray[i][1];
			results[2][2] = results[2][2] + currentArray[i][2];
			results[2][3] = results[2][3] + currentArray[i][1];
		}
		if (currentArray[i][0] == "Reform UK")
		{
			results[3][1] = results[3][1] + currentArray[i][1];
			results[3][2] = results[3][2] + currentArray[i][2];
			results[3][3] = results[3][3] + currentArray[i][1];
		}
		if (currentArray[i][0] == "Green")
		{
			results[4][1] = results[4][1] + currentArray[i][1];
			results[4][2] = results[4][2] + currentArray[i][2];
			results[4][3] = results[4][3] + currentArray[i][1];
		}
		if (currentArray[i][0] == "SNP")
		{
			results[5][1] = results[5][1] + currentArray[i][1];
			results[5][2] = results[5][2] + currentArray[i][2];
			results[5][3] = results[5][3] + currentArray[i][1];
		}	
		if (currentArray[i][0] == "Plaid Cymru")
		{
			results[6][1] = results[6][1] + currentArray[i][1];
			results[6][2] = results[6][2] + currentArray[i][2];
			results[6][3] = results[6][3] + currentArray[i][1];
		}
		if (currentArray[i][0] == "DUP")
		{
			results[7][1] = results[7][1] + currentArray[i][1];
			results[7][2] = results[7][2] + currentArray[i][2];
			results[7][3] = results[7][3] + currentArray[i][1];
		}
		if (currentArray[i][0] == "Sinn Fein")
		{
			results[8][1] = results[8][1] + currentArray[i][1];
			results[8][2] = results[8][2] + currentArray[i][2];
			results[8][3] = results[8][3] + currentArray[i][1];
		}
		if (currentArray[i][0] == "UUP")
		{
			results[9][1] = results[9][1] + currentArray[i][1];
			results[9][2] = results[9][2] + currentArray[i][2];
			results[9][3] = results[9][3] + currentArray[i][1];
		}		
		if (currentArray[i][0] == "SDLP")
		{
			results[10][1] = results[10][1] + currentArray[i][1];
			results[10][2] = results[10][2] + currentArray[i][2];
			results[10][3] = results[10][3] + currentArray[i][1];
		}
		if (currentArray[i][0] == "Alliance")
		{
			results[11][1] = results[11][1] + currentArray[i][1];
			results[11][2] = results[11][2] + currentArray[i][2];
			results[11][3] = results[11][3] + currentArray[i][1];
		}
	}
	
	return results;
	
}

function fillNationalArray() {
	let noOfParties = 12;

	var parties = ["Conservative","Labour","Liberal Democrats","Reform UK","Green","SNP","Plaid Cymru","DUP","Sinn Fein","UUP","SDLP","Alliance"];
	var results = new Array(noOfParties);
	for (var i = 0; i < results.length; i++) {
		results[i] = new Array(4); //Loop through depending on how many districts there are and create new fields.
		results[i][0] = parties[i];
		results[i][1] = 0;
		results[i][2] = 0;
		results[i][3] = 0;
	}
	
	a = currResultsNIR;
	console.log(a);
	
	
	results = fillNationalArrayByConstituency(currResultsAVO, results);
	results = fillNationalArrayByConstituency(currResultsBED, results);
	results = fillNationalArrayByConstituency(currResultsBER, results);
	results = fillNationalArrayByConstituency(currResultsBUK, results);
	results = fillNationalArrayByConstituency(currResultsCAM, results);
	results = fillNationalArrayByConstituency(currResultsCNL, results);
	results = fillNationalArrayByConstituency(currResultsCHE, results);
	results = fillNationalArrayByConstituency(currResultsCLW, results);
	results = fillNationalArrayByConstituency(currResultsCOR, results);
	results = fillNationalArrayByConstituency(currResultsDUR, results);
	results = fillNationalArrayByConstituency(currResultsCUM, results);
	results = fillNationalArrayByConstituency(currResultsDER, results);
	results = fillNationalArrayByConstituency(currResultsDEV, results);
	results = fillNationalArrayByConstituency(currResultsDOR, results);
	results = fillNationalArrayByConstituency(currResultsDYF, results);
	results = fillNationalArrayByConstituency(currResultsESU, results);
	results = fillNationalArrayByConstituency(currResultsESS, results);
	results = fillNationalArrayByConstituency(currResultsFIF, results);
	results = fillNationalArrayByConstituency(currResultsGLA, results);
	results = fillNationalArrayByConstituency(currResultsGLO, results);
	results = fillNationalArrayByConstituency(currResultsGRA, results);
	results = fillNationalArrayByConstituency(currResultsGMA, results);
	results = fillNationalArrayByConstituency(currResultsGWE, results);
	results = fillNationalArrayByConstituency(currResultsGWY, results);
	results = fillNationalArrayByConstituency(currResultsHAM, results);
	results = fillNationalArrayByConstituency(currResultsHER, results);
	results = fillNationalArrayByConstituency(currResultsHET, results);
	results = fillNationalArrayByConstituency(currResultsHAI, results);
	results = fillNationalArrayByConstituency(currResultsHUM, results);
	results = fillNationalArrayByConstituency(currResultsKEN, results);
	results = fillNationalArrayByConstituency(currResultsLAK, results);
	results = fillNationalArrayByConstituency(currResultsLAC, results);
	results = fillNationalArrayByConstituency(currResultsLAR, results);
	results = fillNationalArrayByConstituency(currResultsLIN, results);
	results = fillNationalArrayByConstituency(currResultsLOT, results);
	results = fillNationalArrayByConstituency(currResultsMER, results);
	results = fillNationalArrayByConstituency(currResultsMGL, results);
	results = fillNationalArrayByConstituency(currResultsNOR, results);
	results = fillNationalArrayByConstituency(currResultsNEL, results);
	results = fillNationalArrayByConstituency(currResultsNLO, results);
	results = fillNationalArrayByConstituency(currResultsNYK, results);
	results = fillNationalArrayByConstituency(currResultsNTH, results);
	results = fillNationalArrayByConstituency(currResultsNIR, results);
	results = fillNationalArrayByConstituency(currResultsNOU, results);
	results = fillNationalArrayByConstituency(currResultsNOT, results);
	results = fillNationalArrayByConstituency(currResultsOXF, results);
	results = fillNationalArrayByConstituency(currResultsPOW, results);
	results = fillNationalArrayByConstituency(currResultsSHR, results);
	results = fillNationalArrayByConstituency(currResultsSOM, results);
	results = fillNationalArrayByConstituency(currResultsSCL, results);
	results = fillNationalArrayByConstituency(currResultsSEL, results);
	results = fillNationalArrayByConstituency(currResultsSGL, results);
	results = fillNationalArrayByConstituency(currResultsSSC, results);
	results = fillNationalArrayByConstituency(currResultsSYK, results);
	results = fillNationalArrayByConstituency(currResultsSTA, results);
	results = fillNationalArrayByConstituency(currResultsSTR, results);
	results = fillNationalArrayByConstituency(currResultsSUF, results);
	results = fillNationalArrayByConstituency(currResultsSUR, results);
	results = fillNationalArrayByConstituency(currResultsTAY, results);
	results = fillNationalArrayByConstituency(currResultsTEE, results);
	results = fillNationalArrayByConstituency(currResultsTYN, results);
	results = fillNationalArrayByConstituency(currResultsWAR, results);
	results = fillNationalArrayByConstituency(currResultsWGL, results);
	results = fillNationalArrayByConstituency(currResultsWLO, results);
	results = fillNationalArrayByConstituency(currResultsWME, results);
	results = fillNationalArrayByConstituency(currResultsWMW, results);
	results = fillNationalArrayByConstituency(currResultsWSU, results);
	results = fillNationalArrayByConstituency(currResultsWYK, results);
	results = fillNationalArrayByConstituency(currResultsWIL, results);
	results = fillNationalArrayByConstituency(currResultsWOR, results);
	

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
	document.getElementById("ConservativeInput").value = ConservativePrediction;
	document.getElementById("LabourInput").value = LabourPrediction;
	document.getElementById("LibDemInput").value = LibDemPrediction;
	document.getElementById("BrexitInput").value = BrexitPrediction;
	document.getElementById("GreenInput").value = GreenPrediction;
	document.getElementById("SNPInput").value = SNPPrediction;
	document.getElementById("PlaidInput").value = PlaidPrediction;
	
	calculateUserPrediction();
}

function displayPrevResults() {
	document.getElementById("ConservativeInput").value = prevConservativeVoteShare;
	document.getElementById("LabourInput").value = prevLabourVoteShare;
	document.getElementById("LibDemInput").value = prevLibDemVoteShare;
	document.getElementById("BrexitInput").value = prevBrexitVoteShare;
	document.getElementById("GreenInput").value = prevGreenVoteShare;
	document.getElementById("SNPInput").value = prevSNPVoteShare;
	document.getElementById("PlaidInput").value = prevPlaidVoteShare;
	
	calculateUserPrediction();
}

function thresholdChecker(currentVoteShare){
	if (currentVoteShare >= 4){
		return true;
	}
	else {
		return false;
	}

}

function thresholdImplementor(index, partyThreshold, initialisation) {
	
	if (initialisation){
		if (!partyThreshold){
			prevResultsAVO[index][3] = 0;
			prevResultsBED[index][3] = 0;
			prevResultsBER[index][3] = 0;
			prevResultsBUK[index][3] = 0;
			prevResultsCAM[index][3] = 0;
			prevResultsCNL[index][3] = 0;
			prevResultsCHE[index][3] = 0;
			prevResultsCLW[index][3] = 0;
			prevResultsCOR[index][3] = 0;
			prevResultsDUR[index][3] = 0;
			prevResultsCUM[index][3] = 0;
			prevResultsDER[index][3] = 0;
			prevResultsDEV[index][3] = 0;
			prevResultsDOR[index][3] = 0;
			prevResultsDYF[index][3] = 0;
			prevResultsESU[index][3] = 0;
			prevResultsESS[index][3] = 0;
			prevResultsFIF[index][3] = 0;
			prevResultsGLA[index][3] = 0;
			prevResultsGLO[index][3] = 0;
			prevResultsGRA[index][3] = 0;
			prevResultsGMA[index][3] = 0;
			prevResultsGWE[index][3] = 0;
			prevResultsGWY[index][3] = 0;
			prevResultsHAM[index][3] = 0;
			prevResultsHER[index][3] = 0;
			prevResultsHET[index][3] = 0;
			prevResultsHAI[index][3] = 0;
			prevResultsHUM[index][3] = 0;
			prevResultsKEN[index][3] = 0;
			prevResultsLAK[index][3] = 0;
			prevResultsLAC[index][3] = 0;
			prevResultsLAR[index][3] = 0;
			prevResultsLIN[index][3] = 0;
			prevResultsLOT[index][3] = 0;
			prevResultsMER[index][3] = 0;
			prevResultsMGL[index][3] = 0;
			prevResultsNOR[index][3] = 0;
			prevResultsNEL[index][3] = 0;
			prevResultsNLO[index][3] = 0;
			prevResultsNYK[index][3] = 0;
			prevResultsNTH[index][3] = 0;
			prevResultsNIR[index][3] = 0;
			prevResultsNOU[index][3] = 0;
			prevResultsNOT[index][3] = 0;
			prevResultsOXF[index][3] = 0;
			prevResultsPOW[index][3] = 0;
			prevResultsSHR[index][3] = 0;
			prevResultsSOM[index][3] = 0;
			prevResultsSCL[index][3] = 0;
			prevResultsSEL[index][3] = 0;
			prevResultsSGL[index][3] = 0;
			prevResultsSSC[index][3] = 0;
			prevResultsSYK[index][3] = 0;
			prevResultsSTA[index][3] = 0;
			prevResultsSTR[index][3] = 0;
			prevResultsSUF[index][3] = 0;
			prevResultsSUR[index][3] = 0;
			prevResultsTAY[index][3] = 0;
			prevResultsTEE[index][3] = 0;
			prevResultsTYN[index][3] = 0;
			prevResultsWAR[index][3] = 0;
			prevResultsWGL[index][3] = 0;
			prevResultsWLO[index][3] = 0;
			prevResultsWME[index][3] = 0;
			prevResultsWMW[index][3] = 0;
			prevResultsWSU[index][3] = 0;
			prevResultsWYK[index][3] = 0;
			prevResultsWIL[index][3] = 0;
			prevResultsWOR[index][3] = 0;
			prevNationalResults[index][3] = 0;
		}
	}
	else {
	
		if (!partyThreshold){
			currResultsAVO[index][3] = 0;
			currResultsBED[index][3] = 0;
			currResultsBER[index][3] = 0;
			currResultsBUK[index][3] = 0;
			currResultsCAM[index][3] = 0;
			currResultsCNL[index][3] = 0;
			currResultsCHE[index][3] = 0;
			currResultsCLW[index][3] = 0;
			currResultsCOR[index][3] = 0;
			currResultsDUR[index][3] = 0;
			currResultsCUM[index][3] = 0;
			currResultsDER[index][3] = 0;
			currResultsDEV[index][3] = 0;
			currResultsDOR[index][3] = 0;
			currResultsDYF[index][3] = 0;
			currResultsESU[index][3] = 0;
			currResultsESS[index][3] = 0;
			currResultsFIF[index][3] = 0;
			currResultsGLA[index][3] = 0;
			currResultsGLO[index][3] = 0;
			currResultsGRA[index][3] = 0;
			currResultsGMA[index][3] = 0;
			currResultsGWE[index][3] = 0;
			currResultsGWY[index][3] = 0;
			currResultsHAM[index][3] = 0;
			currResultsHER[index][3] = 0;
			currResultsHET[index][3] = 0;
			currResultsHAI[index][3] = 0;
			currResultsHUM[index][3] = 0;
			currResultsKEN[index][3] = 0;
			currResultsLAK[index][3] = 0;
			currResultsLAC[index][3] = 0;
			currResultsLAR[index][3] = 0;
			currResultsLIN[index][3] = 0;
			currResultsLOT[index][3] = 0;
			currResultsMER[index][3] = 0;
			currResultsMGL[index][3] = 0;
			currResultsNOR[index][3] = 0;
			currResultsNEL[index][3] = 0;
			currResultsNLO[index][3] = 0;
			currResultsNYK[index][3] = 0;
			currResultsNTH[index][3] = 0;
			currResultsNIR[index][3] = 0;
			currResultsNOU[index][3] = 0;
			currResultsNOT[index][3] = 0;
			currResultsOXF[index][3] = 0;
			currResultsPOW[index][3] = 0;
			currResultsSHR[index][3] = 0;
			currResultsSOM[index][3] = 0;
			currResultsSCL[index][3] = 0;
			currResultsSEL[index][3] = 0;
			currResultsSGL[index][3] = 0;
			currResultsSSC[index][3] = 0;
			currResultsSYK[index][3] = 0;
			currResultsSTA[index][3] = 0;
			currResultsSTR[index][3] = 0;
			currResultsSUF[index][3] = 0;
			currResultsSUR[index][3] = 0;
			currResultsTAY[index][3] = 0;
			currResultsTEE[index][3] = 0;
			currResultsTYN[index][3] = 0;
			currResultsWAR[index][3] = 0;
			currResultsWGL[index][3] = 0;
			currResultsWLO[index][3] = 0;
			currResultsWME[index][3] = 0;
			currResultsWMW[index][3] = 0;
			currResultsWSU[index][3] = 0;
			currResultsWYK[index][3] = 0;
			currResultsWIL[index][3] = 0;
			currResultsWOR[index][3] = 0;
			currNationalResults[index][3] = 0;
		}
	}
	
}

function calculateUserPrediction() {
	
	ConservativeModifier = 1 + ((document.getElementById("ConservativeInput").value - prevConservativeVoteShare) / prevConservativeVoteShare);
	LabourModifier = 1 + ((document.getElementById("LabourInput").value - prevLabourVoteShare) / prevLabourVoteShare);
	LibDemModifier = 1 + ((document.getElementById("LibDemInput").value - prevLibDemVoteShare) / prevLibDemVoteShare);
	BrexitModifier = 1 + ((document.getElementById("BrexitInput").value - prevBrexitVoteShare) / prevBrexitVoteShare);
	GreenModifier = 1 + ((document.getElementById("GreenInput").value - prevGreenVoteShare) / prevGreenVoteShare);
	SNPModifier = 1 + ((document.getElementById("SNPInput").value - prevSNPVoteShare) / prevSNPVoteShare);
	PlaidModifier = 1 + ((document.getElementById("PlaidInput").value - prevPlaidVoteShare) / prevPlaidVoteShare);;
	

	
	tempArray = new Array(18);
	index = 0;

	constituencies.eachLayer(function(currentLayer){
		tempArray[index] = fillConstituencyArrays(currentLayer.feature, false);
		index++;
	});


	currResultsAVO = tempArray[47];
	currResultsBED = tempArray[67];
	currResultsBER = tempArray[50];
	currResultsBUK = tempArray[52];
	currResultsCAM = tempArray[66];
	currResultsCNL = tempArray[63];
	currResultsCHE = tempArray[22];
	currResultsCLW = tempArray[17];
	currResultsCOR = tempArray[43];
	currResultsDUR = tempArray[20];
	currResultsCUM = tempArray[26];
	currResultsDER = tempArray[31];
	currResultsDEV = tempArray[44];
	currResultsDOR = tempArray[45];
	currResultsDYF = tempArray[14];
	currResultsESU = tempArray[54];
	currResultsESS = tempArray[69];
	currResultsFIF = tempArray[4];
	currResultsGLA = tempArray[7];
	currResultsGLO = tempArray[48];
	currResultsGRA = tempArray[2];
	currResultsGMA = tempArray[24];
	currResultsGWE = tempArray[10];
	currResultsGWY = tempArray[16];
	currResultsHAM = tempArray[56];
	currResultsHER = tempArray[36];
	currResultsHET = tempArray[68];
	currResultsHAI = tempArray[1];
	currResultsHUM = tempArray[28];
	currResultsKEN = tempArray[57];
	currResultsLAK = tempArray[6];
	currResultsLAC = tempArray[25];
	currResultsLAR = tempArray[32];
	currResultsLIN = tempArray[33];
	currResultsLOT = tempArray[5];
	currResultsMER = tempArray[23];
	currResultsMGL = tempArray[12];
	currResultsNOR = tempArray[65];
	currResultsNEL = tempArray[59];
	currResultsNLO = tempArray[58];
	currResultsNYK = tempArray[27];
	currResultsNTH = tempArray[34];
	currResultsNIR = tempArray[0];
	currResultsNOU = tempArray[18];
	currResultsNOT = tempArray[35];
	currResultsOXF = tempArray[51];
	currResultsPOW = tempArray[15];
	currResultsSHR = tempArray[37];
	currResultsSOM = tempArray[49];
	currResultsSCL = tempArray[61];
	currResultsSEL = tempArray[60];
	currResultsSGL = tempArray[11];
	currResultsSSC = tempArray[9];
	currResultsSYK = tempArray[30];
	currResultsSTA = tempArray[40];
	currResultsSTR = tempArray[8];
	currResultsSUF = tempArray[64];
	currResultsSUR = tempArray[53];
	currResultsTAY = tempArray[3];
	currResultsTEE = tempArray[21];
	currResultsTYN = tempArray[19];
	currResultsWAR = tempArray[39];
	currResultsWGL = tempArray[13];
	currResultsWLO = tempArray[62];
	currResultsWME = tempArray[41];
	currResultsWMW = tempArray[42];
	currResultsWSU = tempArray[55];
	currResultsWYK = tempArray[29];
	currResultsWIL = tempArray[46];
	currResultsWOR = tempArray[38];

	currNationalResults = fillNationalArray();
	currResultsAVO.sort(sortFunctionC);
	currResultsBED.sort(sortFunctionC);
	currResultsBER.sort(sortFunctionC);
	currResultsBUK.sort(sortFunctionC);
	currResultsCAM.sort(sortFunctionC);
	currResultsCNL.sort(sortFunctionC);
	currResultsCHE.sort(sortFunctionC);
	currResultsCLW.sort(sortFunctionC);
	currResultsCOR.sort(sortFunctionC);
	currResultsDUR.sort(sortFunctionC);
	currResultsCUM.sort(sortFunctionC);
	currResultsDER.sort(sortFunctionC);
	currResultsDEV.sort(sortFunctionC);
	currResultsDOR.sort(sortFunctionC);
	currResultsDYF.sort(sortFunctionC);
	currResultsESU.sort(sortFunctionC);
	currResultsESS.sort(sortFunctionC);
	currResultsFIF.sort(sortFunctionC);
	currResultsGLA.sort(sortFunctionC);
	currResultsGLO.sort(sortFunctionC);
	currResultsGRA.sort(sortFunctionC);
	currResultsGMA.sort(sortFunctionC);
	currResultsGWE.sort(sortFunctionC);
	currResultsGWY.sort(sortFunctionC);
	currResultsHAM.sort(sortFunctionC);
	currResultsHER.sort(sortFunctionC);
	currResultsHET.sort(sortFunctionC);
	currResultsHAI.sort(sortFunctionC);
	currResultsHUM.sort(sortFunctionC);
	currResultsKEN.sort(sortFunctionC);
	currResultsLAK.sort(sortFunctionC);
	currResultsLAC.sort(sortFunctionC);
	currResultsLAR.sort(sortFunctionC);
	currResultsLIN.sort(sortFunctionC);
	currResultsLOT.sort(sortFunctionC);
	currResultsMER.sort(sortFunctionC);
	currResultsMGL.sort(sortFunctionC);
	currResultsNOR.sort(sortFunctionC);
	currResultsNEL.sort(sortFunctionC);
	currResultsNLO.sort(sortFunctionC);
	currResultsNYK.sort(sortFunctionC);
	currResultsNTH.sort(sortFunctionC);
	currResultsNIR.sort(sortFunctionC);
	currResultsNOU.sort(sortFunctionC);
	currResultsNOT.sort(sortFunctionC);
	currResultsOXF.sort(sortFunctionC);
	currResultsPOW.sort(sortFunctionC);
	currResultsSHR.sort(sortFunctionC);
	currResultsSOM.sort(sortFunctionC);
	currResultsSCL.sort(sortFunctionC);
	currResultsSEL.sort(sortFunctionC);
	currResultsSGL.sort(sortFunctionC);
	currResultsSSC.sort(sortFunctionC);
	currResultsSYK.sort(sortFunctionC);
	currResultsSTA.sort(sortFunctionC);
	currResultsSTR.sort(sortFunctionC);
	currResultsSUF.sort(sortFunctionC);
	currResultsSUR.sort(sortFunctionC);
	currResultsTAY.sort(sortFunctionC);
	currResultsTEE.sort(sortFunctionC);
	currResultsTYN.sort(sortFunctionC);
	currResultsWAR.sort(sortFunctionC);
	currResultsWGL.sort(sortFunctionC);
	currResultsWLO.sort(sortFunctionC);
	currResultsWME.sort(sortFunctionC);
	currResultsWMW.sort(sortFunctionC);
	currResultsWSU.sort(sortFunctionC);
	currResultsWYK.sort(sortFunctionC);
	currResultsWIL.sort(sortFunctionC);
	currResultsWOR.sort(sortFunctionC);

	currNationalResults.sort(sortFunctionC);
	
	ConservativeThreshold = thresholdChecker(document.getElementById("ConservativeInput").value);
	GreenThreshold = thresholdChecker(document.getElementById("GreenInput").value);
	LabourThreshold = thresholdChecker(document.getElementById("LabourInput").value);
	LibDemThreshold = thresholdChecker(document.getElementById("LibDemInput").value);
	PlaidThreshold = thresholdChecker(document.getElementById("PlaidInput").value);
	RefUKThreshold = thresholdChecker(document.getElementById("BrexitInput").value);
	SNPThreshold = thresholdChecker(document.getElementById("SNPInput").value);
	
	thresholdImplementor(1, ConservativeThreshold, false);
	thresholdImplementor(3, GreenThreshold, false);
	thresholdImplementor(4, LabourThreshold, false);
	thresholdImplementor(5, LibDemThreshold, false);
	thresholdImplementor(6, true, false);
	thresholdImplementor(7, RefUKThreshold, false);
	thresholdImplementor(9, true, false);
	
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
	map.setView(new L.LatLng(51.5, 8), 6);
	
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


	
	((e.target.feature.properties.Constituency == "Avon") ? updateResultsTable(currResultsAVO, prevResultsAVO)
	: (e.target.feature.properties.Constituency == "Bedfordshire") ? updateResultsTable(currResultsBED, prevResultsBED)
	: (e.target.feature.properties.Constituency == "Berkshire") ? updateResultsTable(currResultsBER, prevResultsBER)
	: (e.target.feature.properties.Constituency == "Buckinghamshire") ? updateResultsTable(currResultsBUK, prevResultsBUK)
	: (e.target.feature.properties.Constituency == "Cambridgeshire") ? updateResultsTable(currResultsCAM, prevResultsCAM)
	: (e.target.feature.properties.Constituency == "Central London") ? updateResultsTable(currResultsCNL, prevResultsCNL)
	: (e.target.feature.properties.Constituency == "Cheshire") ? updateResultsTable(currResultsCHE, prevResultsCHE)
	: (e.target.feature.properties.Constituency == "Clwyd") ? updateResultsTable(currResultsCLW, prevResultsCLW)
	: (e.target.feature.properties.Constituency == "Cornwall") ? updateResultsTable(currResultsCOR, prevResultsCOR)
	: (e.target.feature.properties.Constituency == "County Durham") ? updateResultsTable(currResultsDUR, prevResultsDUR)
	: (e.target.feature.properties.Constituency == "Cumbria") ? updateResultsTable(currResultsCUM, prevResultsCUM)
	: (e.target.feature.properties.Constituency == "Derbyshire") ? updateResultsTable(currResultsDER, prevResultsDER)
	: (e.target.feature.properties.Constituency == "Devon") ? updateResultsTable(currResultsDEV, prevResultsDEV)
	: (e.target.feature.properties.Constituency == "Dorset") ? updateResultsTable(currResultsDOR, prevResultsDOR)
	: (e.target.feature.properties.Constituency == "Dyfed") ? updateResultsTable(currResultsDYF, prevResultsDYF)
	: (e.target.feature.properties.Constituency == "East Sussex") ? updateResultsTable(currResultsESU, prevResultsESU)
	: (e.target.feature.properties.Constituency == "Essex") ? updateResultsTable(currResultsESS, prevResultsESS)
	: (e.target.feature.properties.Constituency == "Fife") ? updateResultsTable(currResultsFIF, prevResultsFIF)
	: (e.target.feature.properties.Constituency == "Glasgow") ? updateResultsTable(currResultsGLA, prevResultsGLA)
	: (e.target.feature.properties.Constituency == "Glouestershire") ? updateResultsTable(currResultsGLO, prevResultsGLO)
	: (e.target.feature.properties.Constituency == "Grampian") ? updateResultsTable(currResultsGRA, prevResultsGRA)
	: (e.target.feature.properties.Constituency == "Greater Manchester") ? updateResultsTable(currResultsGMA, prevResultsGMA)
	: (e.target.feature.properties.Constituency == "Gwent") ? updateResultsTable(currResultsGWE, prevResultsGWE)
	: (e.target.feature.properties.Constituency == "Gwynedd") ? updateResultsTable(currResultsGWY, prevResultsGWY)
	: (e.target.feature.properties.Constituency == "Hampshire and the Isle of Wight") ? updateResultsTable(currResultsHAM, prevResultsHAM)
	: (e.target.feature.properties.Constituency == "Herefordshire") ? updateResultsTable(currResultsHER, prevResultsHER)
	: (e.target.feature.properties.Constituency == "Hertfordshire") ? updateResultsTable(currResultsHET, prevResultsHET)
	: (e.target.feature.properties.Constituency == "Highlands and Islands") ? updateResultsTable(currResultsHAI, prevResultsHAI)
	: (e.target.feature.properties.Constituency == "Humberside") ? updateResultsTable(currResultsHUM, prevResultsHUM)
	: (e.target.feature.properties.Constituency == "Kent") ? updateResultsTable(currResultsKEN, prevResultsKEN)
	: (e.target.feature.properties.Constituency == "Lanarkshire") ? updateResultsTable(currResultsLAK, prevResultsLAK)
	: (e.target.feature.properties.Constituency == "Lancashire") ? updateResultsTable(currResultsLAC, prevResultsLAC)
	: (e.target.feature.properties.Constituency == "Leicestershire and Rutland") ? updateResultsTable(currResultsLAR, prevResultsLAR)
	: (e.target.feature.properties.Constituency == "Lincolnshire") ? updateResultsTable(currResultsLIN, prevResultsLIN)
	: (e.target.feature.properties.Constituency == "Lothian") ? updateResultsTable(currResultsLOT, prevResultsLOT)
	: (e.target.feature.properties.Constituency == "Merseyside") ? updateResultsTable(currResultsMER, prevResultsMER)
	: (e.target.feature.properties.Constituency == "Mid Glamorgan") ? updateResultsTable(currResultsMGL, prevResultsMGL)
	: (e.target.feature.properties.Constituency == "Norfolk") ? updateResultsTable(currResultsNOR, prevResultsNOR)
	: (e.target.feature.properties.Constituency == "North East London") ? updateResultsTable(currResultsNEL, prevResultsNEL)
	: (e.target.feature.properties.Constituency == "North London") ? updateResultsTable(currResultsNLO, prevResultsNLO)
	: (e.target.feature.properties.Constituency == "North Yorkshire") ? updateResultsTable(currResultsNYK, prevResultsNYK)
	: (e.target.feature.properties.Constituency == "Northamptonshire") ? updateResultsTable(currResultsNTH, prevResultsNTH)
	: (e.target.feature.properties.Constituency == "Northern Ireland") ? updateResultsTable(currResultsNIR, prevResultsNIR)
	: (e.target.feature.properties.Constituency == "Northumberland") ? updateResultsTable(currResultsNOU, prevResultsNOU)
	: (e.target.feature.properties.Constituency == "Nottinghamshire") ? updateResultsTable(currResultsNOT, prevResultsNOT)
	: (e.target.feature.properties.Constituency == "Oxfordshire") ? updateResultsTable(currResultsOXF, prevResultsOXF)
	: (e.target.feature.properties.Constituency == "Powys") ? updateResultsTable(currResultsPOW, prevResultsPOW)
	: (e.target.feature.properties.Constituency == "Shropshire") ? updateResultsTable(currResultsSHR, prevResultsSHR)
	: (e.target.feature.properties.Constituency == "Somerset") ? updateResultsTable(currResultsSOM, prevResultsSOM)
	: (e.target.feature.properties.Constituency == "South Central London") ? updateResultsTable(currResultsSCL, prevResultsSCL)
	: (e.target.feature.properties.Constituency == "South East London") ? updateResultsTable(currResultsSEL, prevResultsSEL)
	: (e.target.feature.properties.Constituency == "South Glamorgan") ? updateResultsTable(currResultsSGL, prevResultsSGL)
	: (e.target.feature.properties.Constituency == "South Scotland") ? updateResultsTable(currResultsSSC, prevResultsSSC)
	: (e.target.feature.properties.Constituency == "South Yorkshire") ? updateResultsTable(currResultsSYK, prevResultsSYK)
	: (e.target.feature.properties.Constituency == "Staffordshire") ? updateResultsTable(currResultsSTA, prevResultsSTA)
	: (e.target.feature.properties.Constituency == "West Scotland (Strathclyde)") ? updateResultsTable(currResultsSTR, prevResultsSTR)
	: (e.target.feature.properties.Constituency == "Suffolk") ? updateResultsTable(currResultsSUF, prevResultsSUF)
	: (e.target.feature.properties.Constituency == "Surrey") ? updateResultsTable(currResultsSUR, prevResultsSUR)
	: (e.target.feature.properties.Constituency == "Tayside") ? updateResultsTable(currResultsTAY, prevResultsTAY)
	: (e.target.feature.properties.Constituency == "Teeside") ? updateResultsTable(currResultsTEE, prevResultsTEE)
	: (e.target.feature.properties.Constituency == "Tyne and Wear") ? updateResultsTable(currResultsTYN, prevResultsTYN)
	: (e.target.feature.properties.Constituency == "Warwickshire") ? updateResultsTable(currResultsWAR, prevResultsWAR)
	: (e.target.feature.properties.Constituency == "West Glamorgan") ? updateResultsTable(currResultsWGL, prevResultsWGL)
	: (e.target.feature.properties.Constituency == "West London") ? updateResultsTable(currResultsWLO, prevResultsWLO)
	: (e.target.feature.properties.Constituency == "West Midlands East") ? updateResultsTable(currResultsWME, prevResultsWME)
	: (e.target.feature.properties.Constituency == "West Midlands West") ? updateResultsTable(currResultsWMW, prevResultsWMW)
	: (e.target.feature.properties.Constituency == "West Sussex") ? updateResultsTable(currResultsWSU, prevResultsWSU)
	: (e.target.feature.properties.Constituency == "West Yorkshire") ? updateResultsTable(currResultsWYK, prevResultsWYK)
	: (e.target.feature.properties.Constituency == "Wiltshire") ? updateResultsTable(currResultsWIL, prevResultsWIL)
	: updateResultsTable(currResultsWOR, prevResultsWOR));
	
	
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
	
	currResults.sort(sortFunction);
	prevResults.sort(sortFunction);
	
	//console.log(currResults);
	//console.log(prevResults);

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
	
	document.getElementById("Party9Name").value = currResults[8][0];
	document.getElementById("Party9Votes").value = currResults[8][1];
	document.getElementById("Party9VoteShare").value = Math.round((currResults[8][1] / totalVotesCurr * 100) * 10) / 10;
	document.getElementById("Party9Swing").value = ((Math.round(((currResults[8][1] / totalVotesCurr * 100) - (prevResults[indexs[8]][1] / totalVotesPrev * 100)) * 10) / 10) > 0 ? "+"+(Math.round(((currResults[8][1] / totalVotesCurr * 100) - (prevResults[indexs[8]][1] / totalVotesPrev * 100)) * 10) / 10) : (Math.round(((currResults[8][1] / totalVotesCurr * 100) - (prevResults[indexs[8]][1] / totalVotesPrev * 100)) * 10) / 10));
	document.getElementById("Party9Seats").value = currResults[8][2];
	document.getElementById("Party9SeatChange").value = ((currResults[8][2]) - (prevResults[indexs[8]][2]) > 0 ? "+"+((currResults[8][2]) - (prevResults[indexs[8]][2])) : ((currResults[8][2]) - (prevResults[indexs[8]][2])));
	document.getElementById("Party9SeatShare").value = Math.round(((currResults[8][2]) / currTotalSeats * 100) * 10) / 10;	
	
	document.getElementById("Party10Name").value = currResults[9][0];
	document.getElementById("Party10Votes").value = currResults[9][1];
	document.getElementById("Party10VoteShare").value = Math.round((currResults[9][1] / totalVotesCurr * 100) * 10) / 10;
	document.getElementById("Party10Swing").value = ((Math.round(((currResults[9][1] / totalVotesCurr * 100) - (prevResults[indexs[9]][1] / totalVotesPrev * 100)) * 10) / 10) > 0 ? "+"+(Math.round(((currResults[9][1] / totalVotesCurr * 100) - (prevResults[indexs[9]][1] / totalVotesPrev * 100)) * 10) / 10) : (Math.round(((currResults[9][1] / totalVotesCurr * 100) - (prevResults[indexs[9]][1] / totalVotesPrev * 100)) * 10) / 10));
	document.getElementById("Party10Seats").value = currResults[9][2];
	document.getElementById("Party10SeatChange").value = ((currResults[9][2]) - (prevResults[indexs[9]][2]) > 0 ? "+"+((currResults[9][2]) - (prevResults[indexs[9]][2])) : ((currResults[9][2]) - (prevResults[indexs[9]][2])));
	document.getElementById("Party10SeatShare").value = Math.round(((currResults[9][2]) / currTotalSeats * 100) * 10) / 10;	
	
	document.getElementById("Party11Name").value = currResults[10][0];
	document.getElementById("Party11Votes").value = currResults[10][1];
	document.getElementById("Party11VoteShare").value = Math.round((currResults[10][1] / totalVotesCurr * 100) * 10) / 10;
	document.getElementById("Party11Swing").value = ((Math.round(((currResults[10][1] / totalVotesCurr * 100) - (prevResults[indexs[10]][1] / totalVotesPrev * 100)) * 10) / 10) > 0 ? "+"+(Math.round(((currResults[10][1] / totalVotesCurr * 100) - (prevResults[indexs[10]][1] / totalVotesPrev * 100)) * 10) / 10) : (Math.round(((currResults[10][1] / totalVotesCurr * 100) - (prevResults[indexs[10]][1] / totalVotesPrev * 100)) * 10) / 10));
	document.getElementById("Party11Seats").value = currResults[10][2];
	document.getElementById("Party11SeatChange").value = ((currResults[10][2]) - (prevResults[indexs[10]][2]) > 0 ? "+"+((currResults[10][2]) - (prevResults[indexs[10]][2])) : ((currResults[10][2]) - (prevResults[indexs[10]][2])));
	document.getElementById("Party11SeatShare").value = Math.round(((currResults[10][2]) / currTotalSeats * 100) * 10) / 10;	
	
	document.getElementById("Party12Name").value = currResults[11][0];
	document.getElementById("Party12Votes").value = currResults[11][1];
	document.getElementById("Party12VoteShare").value = Math.round((currResults[11][1] / totalVotesCurr * 100) * 10) / 10;
	document.getElementById("Party12Swing").value = ((Math.round(((currResults[11][1] / totalVotesCurr * 100) - (prevResults[indexs[11]][1] / totalVotesPrev * 100)) * 10) / 10) > 0 ? "+"+(Math.round(((currResults[11][1] / totalVotesCurr * 100) - (prevResults[indexs[11]][1] / totalVotesPrev * 100)) * 10) / 10) : (Math.round(((currResults[11][1] / totalVotesCurr * 100) - (prevResults[indexs[11]][1] / totalVotesPrev * 100)) * 10) / 10));
	document.getElementById("Party12Seats").value = currResults[11][2];
	document.getElementById("Party12SeatChange").value = ((currResults[11][2]) - (prevResults[indexs[11]][2]) > 0 ? "+"+((currResults[11][2]) - (prevResults[indexs[11]][2])) : ((currResults[11][2]) - (prevResults[indexs[11]][2])));
	document.getElementById("Party12SeatShare").value = Math.round(((currResults[11][2]) / currTotalSeats * 100) * 10) / 10;	
	

	

	document.getElementById("TotalName").value = "TOTAL";
	document.getElementById("TotalVotes").value = totalVotesCurr;
	document.getElementById("TotalVoteShare").value = "100%";
	document.getElementById("TotalSwing").value = "N/A";
	document.getElementById("TotalSeats").value = currTotalSeats;
	document.getElementById("TotalSeatChange").value = ((currTotalSeats) - (prevTotalSeats) > 0 ? "+"+((currTotalSeats) - (prevTotalSeats)) : ((currTotalSeats) - (prevTotalSeats)));
	document.getElementById("TotalSeatShare").value = "100%";	


}

displayCurrentProjection();


