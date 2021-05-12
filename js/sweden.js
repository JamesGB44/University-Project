var corner1 = L.latLng(70.242375, -2.261923), 
corner2 = L.latLng(52.665722, 36.893351), 
bounds = L.latLngBounds(corner1, corner2);

var stateMode = true;
var sainteLagueModification = 1.2;

var map = L.map('map', {
	center: [51.5, 8],
	zoom: 5,
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


prevSVoteShare = 28.3;
prevMVoteShare = 19.8;
prevSDVoteShare = 17.5;
prevCVoteShare = 8.6;
prevVVoteShare = 8.0;
prevKDVoteShare = 6.3;
prevLVoteShare = 5.5;
prevMPVoteShare = 4.4;

SModifier = 1 + ((Sprediction - prevSVoteShare) / prevSVoteShare);
MModifier = 1 + ((Mprediction - prevMVoteShare) / prevMVoteShare);
SDModifier = 1 + ((SDprediction - prevSDVoteShare) / prevSDVoteShare);
CModifier = 1 + ((Cprediction - prevCVoteShare) / prevCVoteShare);
VModifier = 1 + ((Vprediction - prevVVoteShare) / prevVVoteShare);
KDModifier = 1 + ((KDprediction - prevKDVoteShare) / prevKDVoteShare);
LModifier = 1 + ((Lprediction - prevLVoteShare) / prevLVoteShare);;
MPModifier = 1 + ((MPprediction - prevMPVoteShare) / prevMPVoteShare);;

var constituencies = L.geoJson(riksdagConstituencies, {
	style: styleConstituencies,
	onEachFeature: onEachFeatureConstituencies
}).addTo(map);

var municipalitiesBLE = L.geoJson(municipalitiesBLE, {
	style: styleMunicipalities,
	onEachFeature: onEachFeatureMunicipalities
});

var municipalitiesDAL = L.geoJson(municipalitiesDAL, {
	style: styleMunicipalities,
	onEachFeature: onEachFeatureMunicipalities
});

var municipalitiesGOT = L.geoJson(municipalitiesGOT, {
	style: styleMunicipalities,
	onEachFeature: onEachFeatureMunicipalities
});

var municipalitiesGAV = L.geoJson(municipalitiesGAV, {
	style: styleMunicipalities,
	onEachFeature: onEachFeatureMunicipalities
});

var municipalitiesHAL = L.geoJson(municipalitiesHAL, {
	style: styleMunicipalities,
	onEachFeature: onEachFeatureMunicipalities
});

var municipalitiesJAM = L.geoJson(municipalitiesJAM, {
	style: styleMunicipalities,
	onEachFeature: onEachFeatureMunicipalities
});

var municipalitiesJON = L.geoJson(municipalitiesJON, {
	style: styleMunicipalities,
	onEachFeature: onEachFeatureMunicipalities
});

var municipalitiesKAL = L.geoJson(municipalitiesKAL, {
	style: styleMunicipalities,
	onEachFeature: onEachFeatureMunicipalities
});

var municipalitiesKRO = L.geoJson(municipalitiesKRO, {
	style: styleMunicipalities,
	onEachFeature: onEachFeatureMunicipalities
});

var municipalitiesNOR = L.geoJson(municipalitiesNOR, {
	style: styleMunicipalities,
	onEachFeature: onEachFeatureMunicipalities
});

var municipalitiesMAL = L.geoJson(municipalitiesMAL, {
	style: styleMunicipalities,
	onEachFeature: onEachFeatureMunicipalities
});

var municipalitiesSKN = L.geoJson(municipalitiesSKN, {
	style: styleMunicipalities,
	onEachFeature: onEachFeatureMunicipalities
});

var municipalitiesSKS = L.geoJson(municipalitiesSKS, {
	style: styleMunicipalities,
	onEachFeature: onEachFeatureMunicipalities
});

var municipalitiesSKW = L.geoJson(municipalitiesSKW, {
	style: styleMunicipalities,
	onEachFeature: onEachFeatureMunicipalities
});

var municipalitiesSTH = L.geoJson(municipalitiesSTH, {
	style: styleMunicipalities,
	onEachFeature: onEachFeatureMunicipalities
});

var municipalitiesSTC = L.geoJson(municipalitiesSTC, {
	style: styleMunicipalities,
	onEachFeature: onEachFeatureMunicipalities
});

var municipalitiesSOD = L.geoJson(municipalitiesSOD, {
	style: styleMunicipalities,
	onEachFeature: onEachFeatureMunicipalities
});

var municipalitiesUPP = L.geoJson(municipalitiesUPP, {
	style: styleMunicipalities,
	onEachFeature: onEachFeatureMunicipalities
});

var municipalitiesVAR = L.geoJson(municipalitiesVAR, {
	style: styleMunicipalities,
	onEachFeature: onEachFeatureMunicipalities
});

var municipalitiesVAB = L.geoJson(municipalitiesVAB, {
	style: styleMunicipalities,
	onEachFeature: onEachFeatureMunicipalities
});
var municipalitiesVAN = L.geoJson(municipalitiesVAN, {
	style: styleMunicipalities,
	onEachFeature: onEachFeatureMunicipalities
});

var municipalitiesVAM = L.geoJson(municipalitiesVAM, {
	style: styleMunicipalities,
	onEachFeature: onEachFeatureMunicipalities
});

var municipalitiesGTH = L.geoJson(municipalitiesGTH, {
	style: styleMunicipalities,
	onEachFeature: onEachFeatureMunicipalities
});

var municipalitiesVGE = L.geoJson(municipalitiesVGE, {
	style: styleMunicipalities,
	onEachFeature: onEachFeatureMunicipalities
});

var municipalitiesVGN = L.geoJson(municipalitiesVGN, {
	style: styleMunicipalities,
	onEachFeature: onEachFeatureMunicipalities
});

var municipalitiesVGS = L.geoJson(municipalitiesVGS, {
	style: styleMunicipalities,
	onEachFeature: onEachFeatureMunicipalities
});

var municipalitiesVGW = L.geoJson(municipalitiesVGW, {
	style: styleMunicipalities,
	onEachFeature: onEachFeatureMunicipalities
});

var municipalitiesORE = L.geoJson(municipalitiesORE, {
	style: styleMunicipalities,
	onEachFeature: onEachFeatureMunicipalities
});

var municipalitiesOST = L.geoJson(municipalitiesOST, {
	style: styleMunicipalities,
	onEachFeature: onEachFeatureMunicipalities
});


prevResultsBLE = fillConstituencyArrays(municipalitiesBLE, true);
prevResultsDAL = fillConstituencyArrays(municipalitiesDAL, true);
prevResultsGOT = fillConstituencyArrays(municipalitiesGOT, true);
prevResultsGAV = fillConstituencyArrays(municipalitiesGAV, true);
prevResultsHAL = fillConstituencyArrays(municipalitiesHAL, true);
prevResultsJAM = fillConstituencyArrays(municipalitiesJAM, true);
prevResultsJON = fillConstituencyArrays(municipalitiesJON, true);
prevResultsKAL = fillConstituencyArrays(municipalitiesKAL, true);
prevResultsKRO = fillConstituencyArrays(municipalitiesKRO, true);
prevResultsNOR = fillConstituencyArrays(municipalitiesNOR, true);
prevResultsMAL = fillConstituencyArrays(municipalitiesMAL, true);
prevResultsSKN = fillConstituencyArrays(municipalitiesSKN, true);
prevResultsSKS = fillConstituencyArrays(municipalitiesSKS, true);
prevResultsSKW = fillConstituencyArrays(municipalitiesSKW, true);
prevResultsSTH = fillConstituencyArrays(municipalitiesSTH, true);
prevResultsSTC = fillConstituencyArrays(municipalitiesSTC, true);
prevResultsSOD = fillConstituencyArrays(municipalitiesSOD, true);
prevResultsUPP = fillConstituencyArrays(municipalitiesUPP, true);
prevResultsVAR = fillConstituencyArrays(municipalitiesVAR, true);
prevResultsVAB = fillConstituencyArrays(municipalitiesVAB, true);
prevResultsVAN = fillConstituencyArrays(municipalitiesVAN, true);
prevResultsVAM = fillConstituencyArrays(municipalitiesVAM, true);
prevResultsGTH = fillConstituencyArrays(municipalitiesGTH, true);
prevResultsVGE = fillConstituencyArrays(municipalitiesVGE, true);
prevResultsVGN = fillConstituencyArrays(municipalitiesVGN, true);
prevResultsVGS = fillConstituencyArrays(municipalitiesVGS, true);
prevResultsVGW = fillConstituencyArrays(municipalitiesVGW, true);
prevResultsORE = fillConstituencyArrays(municipalitiesORE, true);
prevResultsOST = fillConstituencyArrays(municipalitiesOST, true);


currResultsBLE = fillConstituencyArrays(municipalitiesBLE, false);
currResultsDAL = fillConstituencyArrays(municipalitiesDAL, false);
currResultsGOT = fillConstituencyArrays(municipalitiesGOT, false);
currResultsGAV = fillConstituencyArrays(municipalitiesGAV, false);
currResultsHAL = fillConstituencyArrays(municipalitiesHAL, false);
currResultsJAM = fillConstituencyArrays(municipalitiesJAM, false);
currResultsJON = fillConstituencyArrays(municipalitiesJON, false);
currResultsKAL = fillConstituencyArrays(municipalitiesKAL, false);
currResultsKRO = fillConstituencyArrays(municipalitiesKRO, false);
currResultsNOR = fillConstituencyArrays(municipalitiesNOR, false);
currResultsMAL = fillConstituencyArrays(municipalitiesMAL, false);
currResultsSKN = fillConstituencyArrays(municipalitiesSKN, false);
currResultsSKS = fillConstituencyArrays(municipalitiesSKS, false);
currResultsSKW = fillConstituencyArrays(municipalitiesSKW, false);
currResultsSTH = fillConstituencyArrays(municipalitiesSTH, false);
currResultsSTC = fillConstituencyArrays(municipalitiesSTC, false);
currResultsSOD = fillConstituencyArrays(municipalitiesSOD, false);
currResultsUPP = fillConstituencyArrays(municipalitiesUPP, false);
currResultsVAR = fillConstituencyArrays(municipalitiesVAR, false);
currResultsVAB = fillConstituencyArrays(municipalitiesVAB, false);
currResultsVAN = fillConstituencyArrays(municipalitiesVAN, false);
currResultsVAM = fillConstituencyArrays(municipalitiesVAM, false);
currResultsGTH = fillConstituencyArrays(municipalitiesGTH, false);
currResultsVGE = fillConstituencyArrays(municipalitiesVGE, false);
currResultsVGN = fillConstituencyArrays(municipalitiesVGN, false);
currResultsVGS = fillConstituencyArrays(municipalitiesVGS, false);
currResultsVGW = fillConstituencyArrays(municipalitiesVGW, false);
currResultsORE = fillConstituencyArrays(municipalitiesORE, false);
currResultsOST = fillConstituencyArrays(municipalitiesOST, false);


var currNationalResults;
prevNationalResults = fillNationalArray();

var SThreshold = true, MThreshold = true, SDThreshold = true, CThreshold = true, VThreshold = true, KDThreshold = true, LThreshold = true, MPThreshold = true;
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
		
	var noOfAdjustmentSeats = 39;
	
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
			partyArray.sort(sortFunctionB)
			partyArray[0][2] = partyArray[0][2] + 1;
			partyArray[0][3] = partyArray[0][1] / (1 + (2*partyArray[0][2]));
		}
		partyArray.sort(sortFunctionC);
		
		prevResultsBLE[partyIndex][2] = partyArray[0][2];
		prevResultsDAL[partyIndex][2] = partyArray[1][2];
		prevResultsGAV[partyIndex][2] = partyArray[2][2];
		prevResultsGOT[partyIndex][2] = partyArray[3][2];
		prevResultsGTH[partyIndex][2] = partyArray[4][2];
		prevResultsHAL[partyIndex][2] = partyArray[5][2];
		prevResultsJAM[partyIndex][2] = partyArray[6][2];
		prevResultsJON[partyIndex][2] = partyArray[7][2];
		prevResultsKAL[partyIndex][2] = partyArray[8][2];
		prevResultsKRO[partyIndex][2] = partyArray[9][2];
		prevResultsMAL[partyIndex][2] = partyArray[10][2];
		prevResultsNOR[partyIndex][2] = partyArray[11][2];
		prevResultsORE[partyIndex][2] = partyArray[12][2];
		prevResultsOST[partyIndex][2] = partyArray[13][2];
		prevResultsSKN[partyIndex][2] = partyArray[14][2];
		prevResultsSKS[partyIndex][2] = partyArray[15][2];
		prevResultsSKW[partyIndex][2] = partyArray[16][2];
		prevResultsSOD[partyIndex][2] = partyArray[17][2];
		prevResultsSTC[partyIndex][2] = partyArray[18][2];
		prevResultsSTH[partyIndex][2] = partyArray[19][2];
		prevResultsUPP[partyIndex][2] = partyArray[20][2];
		prevResultsVAB[partyIndex][2] = partyArray[21][2];
		prevResultsVAM[partyIndex][2] = partyArray[22][2];
		prevResultsVAN[partyIndex][2] = partyArray[23][2];
		prevResultsVAR[partyIndex][2] = partyArray[24][2];
		prevResultsVGE[partyIndex][2] = partyArray[25][2];
		prevResultsVGN[partyIndex][2] = partyArray[26][2];
		prevResultsVGS[partyIndex][2] = partyArray[27][2];
		prevResultsVGW[partyIndex][2] = partyArray[28][2];
		
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
			partyArray.sort(sortFunctionB)
			partyArray[0][2] = partyArray[0][2] + 1;
			partyArray[0][3] = partyArray[0][1] / (1 + (2*partyArray[0][2]));
		}
		partyArray.sort(sortFunctionC);

		currResultsBLE[partyIndex][2] = partyArray[0][2];
		currResultsDAL[partyIndex][2] = partyArray[1][2];
		currResultsGAV[partyIndex][2] = partyArray[2][2];
		currResultsGOT[partyIndex][2] = partyArray[3][2];
		currResultsGTH[partyIndex][2] = partyArray[4][2];
		currResultsHAL[partyIndex][2] = partyArray[5][2];
		currResultsJAM[partyIndex][2] = partyArray[6][2];
		currResultsJON[partyIndex][2] = partyArray[7][2];
		currResultsKAL[partyIndex][2] = partyArray[8][2];
		currResultsKRO[partyIndex][2] = partyArray[9][2];
		currResultsMAL[partyIndex][2] = partyArray[10][2];
		currResultsNOR[partyIndex][2] = partyArray[11][2];
		currResultsORE[partyIndex][2] = partyArray[12][2];
		currResultsOST[partyIndex][2] = partyArray[13][2];
		currResultsSKN[partyIndex][2] = partyArray[14][2];
		currResultsSKS[partyIndex][2] = partyArray[15][2];
		currResultsSKW[partyIndex][2] = partyArray[16][2];
		currResultsSOD[partyIndex][2] = partyArray[17][2];
		currResultsSTC[partyIndex][2] = partyArray[18][2];
		currResultsSTH[partyIndex][2] = partyArray[19][2];
		currResultsUPP[partyIndex][2] = partyArray[20][2];
		currResultsVAB[partyIndex][2] = partyArray[21][2];
		currResultsVAM[partyIndex][2] = partyArray[22][2];
		currResultsVAN[partyIndex][2] = partyArray[23][2];
		currResultsVAR[partyIndex][2] = partyArray[24][2];
		currResultsVGE[partyIndex][2] = partyArray[25][2];
		currResultsVGN[partyIndex][2] = partyArray[26][2];
		currResultsVGS[partyIndex][2] = partyArray[27][2];
		currResultsVGW[partyIndex][2] = partyArray[28][2];
		
	}

}

function nationalResultsToConstituencyLevelInit(initialisation) {
	
	if (initialisation)
	{
		prevResultsBLE.sort(sortFunctionC);
		prevResultsDAL.sort(sortFunctionC);
		prevResultsGOT.sort(sortFunctionC);
		prevResultsGAV.sort(sortFunctionC);
		prevResultsHAL.sort(sortFunctionC);
		prevResultsJAM.sort(sortFunctionC);
		prevResultsJON.sort(sortFunctionC);
		prevResultsKAL.sort(sortFunctionC);
		prevResultsKRO.sort(sortFunctionC);
		prevResultsNOR.sort(sortFunctionC);
		prevResultsMAL.sort(sortFunctionC);
		prevResultsSKN.sort(sortFunctionC);
		prevResultsSKS.sort(sortFunctionC);
		prevResultsSKW.sort(sortFunctionC);
		prevResultsSTH.sort(sortFunctionC);
		prevResultsSTC.sort(sortFunctionC);
		prevResultsSOD.sort(sortFunctionC);
		prevResultsUPP.sort(sortFunctionC);
		prevResultsVAR.sort(sortFunctionC);
		prevResultsVAB.sort(sortFunctionC);
		prevResultsVAN.sort(sortFunctionC);
		prevResultsVAM.sort(sortFunctionC);
		prevResultsGTH.sort(sortFunctionC);
		prevResultsVGE.sort(sortFunctionC);
		prevResultsVGN.sort(sortFunctionC);
		prevResultsVGS.sort(sortFunctionC);
		prevResultsVGW.sort(sortFunctionC);
		prevResultsORE.sort(sortFunctionC);
		prevResultsOST.sort(sortFunctionC);
		prevNationalResults.sort(sortFunctionC);
		
		var CArray  = [["BLE",prevResultsBLE[0][1], prevResultsBLE[0][2], prevResultsBLE[0][1]],
					["DAL",prevResultsDAL[0][1], prevResultsDAL[0][2], prevResultsDAL[0][1]],
					["GOT",prevResultsGOT[0][1], prevResultsGOT[0][2], prevResultsGOT[0][1]],
					["GAV",prevResultsGAV[0][1], prevResultsGAV[0][2], prevResultsGAV[0][1]],
					["HAL",prevResultsHAL[0][1], prevResultsHAL[0][2], prevResultsHAL[0][1]],
					["JAM",prevResultsJAM[0][1], prevResultsJAM[0][2], prevResultsJAM[0][1]],
					["JON",prevResultsJON[0][1], prevResultsJON[0][2], prevResultsJON[0][1]],
					["KAL",prevResultsKAL[0][1], prevResultsKAL[0][2], prevResultsKAL[0][1]],
					["KRO",prevResultsKRO[0][1], prevResultsKRO[0][2], prevResultsKRO[0][1]],
					["NOR",prevResultsNOR[0][1], prevResultsNOR[0][2], prevResultsNOR[0][1]],
					["MAL",prevResultsMAL[0][1], prevResultsMAL[0][2], prevResultsMAL[0][1]],
					["SKN",prevResultsSKN[0][1], prevResultsSKN[0][2], prevResultsSKN[0][1]],
					["SKS",prevResultsSKS[0][1], prevResultsSKS[0][2], prevResultsSKS[0][1]],
					["SKW",prevResultsSKW[0][1], prevResultsSKW[0][2], prevResultsSKW[0][1]],
					["STH",prevResultsSTH[0][1], prevResultsSTH[0][2], prevResultsSTH[0][1]],
					["STC",prevResultsSTC[0][1], prevResultsSTC[0][2], prevResultsSTC[0][1]],
					["SOD",prevResultsSOD[0][1], prevResultsSOD[0][2], prevResultsSOD[0][1]],
					["UPP",prevResultsUPP[0][1], prevResultsUPP[0][2], prevResultsUPP[0][1]],
					["VAR",prevResultsVAR[0][1], prevResultsVAR[0][2], prevResultsVAR[0][1]],
					["VAB",prevResultsVAB[0][1], prevResultsVAB[0][2], prevResultsVAB[0][1]],
					["VAN",prevResultsVAN[0][1], prevResultsVAN[0][2], prevResultsVAN[0][1]],
					["VAM",prevResultsVAM[0][1], prevResultsVAM[0][2], prevResultsVAM[0][1]],
					["GTH",prevResultsGTH[0][1], prevResultsGTH[0][2], prevResultsGTH[0][1]],
					["VGE",prevResultsVGE[0][1], prevResultsVGE[0][2], prevResultsVGE[0][1]],
					["VGN",prevResultsVGN[0][1], prevResultsVGN[0][2], prevResultsVGN[0][1]],
					["VGS",prevResultsVGS[0][1], prevResultsVGS[0][2], prevResultsVGS[0][1]],
					["VGW",prevResultsVGW[0][1], prevResultsVGW[0][2], prevResultsVGW[0][1]],
					["ORE",prevResultsORE[0][1], prevResultsORE[0][2], prevResultsORE[0][1]],
					["OST",prevResultsOST[0][1], prevResultsOST[0][2], prevResultsOST[0][1]]];

		var KDArray  = [["BLE",prevResultsBLE[1][1], prevResultsBLE[1][2], prevResultsBLE[1][1]],
					["DAL",prevResultsDAL[1][1], prevResultsDAL[1][2], prevResultsDAL[1][1]],
					["GOT",prevResultsGOT[1][1], prevResultsGOT[1][2], prevResultsGOT[1][1]],
					["GAV",prevResultsGAV[1][1], prevResultsGAV[1][2], prevResultsGAV[1][1]],
					["HAL",prevResultsHAL[1][1], prevResultsHAL[1][2], prevResultsHAL[1][1]],
					["JAM",prevResultsJAM[1][1], prevResultsJAM[1][2], prevResultsJAM[1][1]],
					["JON",prevResultsJON[1][1], prevResultsJON[1][2], prevResultsJON[1][1]],
					["KAL",prevResultsKAL[1][1], prevResultsKAL[1][2], prevResultsKAL[1][1]],
					["KRO",prevResultsKRO[1][1], prevResultsKRO[1][2], prevResultsKRO[1][1]],
					["NOR",prevResultsNOR[1][1], prevResultsNOR[1][2], prevResultsNOR[1][1]],
					["MAL",prevResultsMAL[1][1], prevResultsMAL[1][2], prevResultsMAL[1][1]],
					["SKN",prevResultsSKN[1][1], prevResultsSKN[1][2], prevResultsSKN[1][1]],
					["SKS",prevResultsSKS[1][1], prevResultsSKS[1][2], prevResultsSKS[1][1]],
					["SKW",prevResultsSKW[1][1], prevResultsSKW[1][2], prevResultsSKW[1][1]],
					["STH",prevResultsSTH[1][1], prevResultsSTH[1][2], prevResultsSTH[1][1]],
					["STC",prevResultsSTC[1][1], prevResultsSTC[1][2], prevResultsSTC[1][1]],
					["SOD",prevResultsSOD[1][1], prevResultsSOD[1][2], prevResultsSOD[1][1]],
					["UPP",prevResultsUPP[1][1], prevResultsUPP[1][2], prevResultsUPP[1][1]],
					["VAR",prevResultsVAR[1][1], prevResultsVAR[1][2], prevResultsVAR[1][1]],
					["VAB",prevResultsVAB[1][1], prevResultsVAB[1][2], prevResultsVAB[1][1]],
					["VAN",prevResultsVAN[1][1], prevResultsVAN[1][2], prevResultsVAN[1][1]],
					["VAM",prevResultsVAM[1][1], prevResultsVAM[1][2], prevResultsVAM[1][1]],
					["GTH",prevResultsGTH[1][1], prevResultsGTH[1][2], prevResultsGTH[1][1]],
					["VGE",prevResultsVGE[1][1], prevResultsVGE[1][2], prevResultsVGE[1][1]],
					["VGN",prevResultsVGN[1][1], prevResultsVGN[1][2], prevResultsVGN[1][1]],
					["VGS",prevResultsVGS[1][1], prevResultsVGS[1][2], prevResultsVGS[1][1]],
					["VGW",prevResultsVGW[1][1], prevResultsVGW[1][2], prevResultsVGW[1][1]],
					["ORE",prevResultsORE[1][1], prevResultsORE[1][2], prevResultsORE[1][1]],
					["OST",prevResultsOST[1][1], prevResultsOST[1][2], prevResultsOST[1][1]]];

		var MPArray  = [["BLE",prevResultsBLE[2][1], prevResultsBLE[2][2], prevResultsBLE[2][1]],
					["DAL",prevResultsDAL[2][1], prevResultsDAL[2][2], prevResultsDAL[2][1]],
					["GOT",prevResultsGOT[2][1], prevResultsGOT[2][2], prevResultsGOT[2][1]],
					["GAV",prevResultsGAV[2][1], prevResultsGAV[2][2], prevResultsGAV[2][1]],
					["HAL",prevResultsHAL[2][1], prevResultsHAL[2][2], prevResultsHAL[2][1]],
					["JAM",prevResultsJAM[2][1], prevResultsJAM[2][2], prevResultsJAM[2][1]],
					["JON",prevResultsJON[2][1], prevResultsJON[2][2], prevResultsJON[2][1]],
					["KAL",prevResultsKAL[2][1], prevResultsKAL[2][2], prevResultsKAL[2][1]],
					["KRO",prevResultsKRO[2][1], prevResultsKRO[2][2], prevResultsKRO[2][1]],
					["NOR",prevResultsNOR[2][1], prevResultsNOR[2][2], prevResultsNOR[2][1]],
					["MAL",prevResultsMAL[2][1], prevResultsMAL[2][2], prevResultsMAL[2][1]],
					["SKN",prevResultsSKN[2][1], prevResultsSKN[2][2], prevResultsSKN[2][1]],
					["SKS",prevResultsSKS[2][1], prevResultsSKS[2][2], prevResultsSKS[2][1]],
					["SKW",prevResultsSKW[2][1], prevResultsSKW[2][2], prevResultsSKW[2][1]],
					["STH",prevResultsSTH[2][1], prevResultsSTH[2][2], prevResultsSTH[2][1]],
					["STC",prevResultsSTC[2][1], prevResultsSTC[2][2], prevResultsSTC[2][1]],
					["SOD",prevResultsSOD[2][1], prevResultsSOD[2][2], prevResultsSOD[2][1]],
					["UPP",prevResultsUPP[2][1], prevResultsUPP[2][2], prevResultsUPP[2][1]],
					["VAR",prevResultsVAR[2][1], prevResultsVAR[2][2], prevResultsVAR[2][1]],
					["VAB",prevResultsVAB[2][1], prevResultsVAB[2][2], prevResultsVAB[2][1]],
					["VAN",prevResultsVAN[2][1], prevResultsVAN[2][2], prevResultsVAN[2][1]],
					["VAM",prevResultsVAM[2][1], prevResultsVAM[2][2], prevResultsVAM[2][1]],
					["GTH",prevResultsGTH[2][1], prevResultsGTH[2][2], prevResultsGTH[2][1]],
					["VGE",prevResultsVGE[2][1], prevResultsVGE[2][2], prevResultsVGE[2][1]],
					["VGN",prevResultsVGN[2][1], prevResultsVGN[2][2], prevResultsVGN[2][1]],
					["VGS",prevResultsVGS[2][1], prevResultsVGS[2][2], prevResultsVGS[2][1]],
					["VGW",prevResultsVGW[2][1], prevResultsVGW[2][2], prevResultsVGW[2][1]],
					["ORE",prevResultsORE[2][1], prevResultsORE[2][2], prevResultsORE[2][1]],
					["OST",prevResultsOST[2][1], prevResultsOST[2][2], prevResultsOST[2][1]]];

		var LArray  = [["BLE",prevResultsBLE[3][1], prevResultsBLE[3][2], prevResultsBLE[3][1]],
					["DAL",prevResultsDAL[3][1], prevResultsDAL[3][2], prevResultsDAL[3][1]],
					["GOT",prevResultsGOT[3][1], prevResultsGOT[3][2], prevResultsGOT[3][1]],
					["GAV",prevResultsGAV[3][1], prevResultsGAV[3][2], prevResultsGAV[3][1]],
					["HAL",prevResultsHAL[3][1], prevResultsHAL[3][2], prevResultsHAL[3][1]],
					["JAM",prevResultsJAM[3][1], prevResultsJAM[3][2], prevResultsJAM[3][1]],
					["JON",prevResultsJON[3][1], prevResultsJON[3][2], prevResultsJON[3][1]],
					["KAL",prevResultsKAL[3][1], prevResultsKAL[3][2], prevResultsKAL[3][1]],
					["KRO",prevResultsKRO[3][1], prevResultsKRO[3][2], prevResultsKRO[3][1]],
					["NOR",prevResultsNOR[3][1], prevResultsNOR[3][2], prevResultsNOR[3][1]],
					["MAL",prevResultsMAL[3][1], prevResultsMAL[3][2], prevResultsMAL[3][1]],
					["SKN",prevResultsSKN[3][1], prevResultsSKN[3][2], prevResultsSKN[3][1]],
					["SKS",prevResultsSKS[3][1], prevResultsSKS[3][2], prevResultsSKS[3][1]],
					["SKW",prevResultsSKW[3][1], prevResultsSKW[3][2], prevResultsSKW[3][1]],
					["STH",prevResultsSTH[3][1], prevResultsSTH[3][2], prevResultsSTH[3][1]],
					["STC",prevResultsSTC[3][1], prevResultsSTC[3][2], prevResultsSTC[3][1]],
					["SOD",prevResultsSOD[3][1], prevResultsSOD[3][2], prevResultsSOD[3][1]],
					["UPP",prevResultsUPP[3][1], prevResultsUPP[3][2], prevResultsUPP[3][1]],
					["VAR",prevResultsVAR[3][1], prevResultsVAR[3][2], prevResultsVAR[3][1]],
					["VAB",prevResultsVAB[3][1], prevResultsVAB[3][2], prevResultsVAB[3][1]],
					["VAN",prevResultsVAN[3][1], prevResultsVAN[3][2], prevResultsVAN[3][1]],
					["VAM",prevResultsVAM[3][1], prevResultsVAM[3][2], prevResultsVAM[3][1]],
					["GTH",prevResultsGTH[3][1], prevResultsGTH[3][2], prevResultsGTH[3][1]],
					["VGE",prevResultsVGE[3][1], prevResultsVGE[3][2], prevResultsVGE[3][1]],
					["VGN",prevResultsVGN[3][1], prevResultsVGN[3][2], prevResultsVGN[3][1]],
					["VGS",prevResultsVGS[3][1], prevResultsVGS[3][2], prevResultsVGS[3][1]],
					["VGW",prevResultsVGW[3][1], prevResultsVGW[3][2], prevResultsVGW[3][1]],
					["ORE",prevResultsORE[3][1], prevResultsORE[3][2], prevResultsORE[3][1]],
					["OST",prevResultsOST[3][1], prevResultsOST[3][2], prevResultsOST[3][1]]];

		var MArray  = [["BLE",prevResultsBLE[4][1], prevResultsBLE[4][2], prevResultsBLE[4][1]],
					["DAL",prevResultsDAL[4][1], prevResultsDAL[4][2], prevResultsDAL[4][1]],
					["GOT",prevResultsGOT[4][1], prevResultsGOT[4][2], prevResultsGOT[4][1]],
					["GAV",prevResultsGAV[4][1], prevResultsGAV[4][2], prevResultsGAV[4][1]],
					["HAL",prevResultsHAL[4][1], prevResultsHAL[4][2], prevResultsHAL[4][1]],
					["JAM",prevResultsJAM[4][1], prevResultsJAM[4][2], prevResultsJAM[4][1]],
					["JON",prevResultsJON[4][1], prevResultsJON[4][2], prevResultsJON[4][1]],
					["KAL",prevResultsKAL[4][1], prevResultsKAL[4][2], prevResultsKAL[4][1]],
					["KRO",prevResultsKRO[4][1], prevResultsKRO[4][2], prevResultsKRO[4][1]],
					["NOR",prevResultsNOR[4][1], prevResultsNOR[4][2], prevResultsNOR[4][1]],
					["MAL",prevResultsMAL[4][1], prevResultsMAL[4][2], prevResultsMAL[4][1]],
					["SKN",prevResultsSKN[4][1], prevResultsSKN[4][2], prevResultsSKN[4][1]],
					["SKS",prevResultsSKS[4][1], prevResultsSKS[4][2], prevResultsSKS[4][1]],
					["SKW",prevResultsSKW[4][1], prevResultsSKW[4][2], prevResultsSKW[4][1]],
					["STH",prevResultsSTH[4][1], prevResultsSTH[4][2], prevResultsSTH[4][1]],
					["STC",prevResultsSTC[4][1], prevResultsSTC[4][2], prevResultsSTC[4][1]],
					["SOD",prevResultsSOD[4][1], prevResultsSOD[4][2], prevResultsSOD[4][1]],
					["UPP",prevResultsUPP[4][1], prevResultsUPP[4][2], prevResultsUPP[4][1]],
					["VAR",prevResultsVAR[4][1], prevResultsVAR[4][2], prevResultsVAR[4][1]],
					["VAB",prevResultsVAB[4][1], prevResultsVAB[4][2], prevResultsVAB[4][1]],
					["VAN",prevResultsVAN[4][1], prevResultsVAN[4][2], prevResultsVAN[4][1]],
					["VAM",prevResultsVAM[4][1], prevResultsVAM[4][2], prevResultsVAM[4][1]],
					["GTH",prevResultsGTH[4][1], prevResultsGTH[4][2], prevResultsGTH[4][1]],
					["VGE",prevResultsVGE[4][1], prevResultsVGE[4][2], prevResultsVGE[4][1]],
					["VGN",prevResultsVGN[4][1], prevResultsVGN[4][2], prevResultsVGN[4][1]],
					["VGS",prevResultsVGS[4][1], prevResultsVGS[4][2], prevResultsVGS[4][1]],
					["VGW",prevResultsVGW[4][1], prevResultsVGW[4][2], prevResultsVGW[4][1]],
					["ORE",prevResultsORE[4][1], prevResultsORE[4][2], prevResultsORE[4][1]],
					["OST",prevResultsOST[4][1], prevResultsOST[4][2], prevResultsOST[4][1]]];

		var SArray  = [["BLE",prevResultsBLE[5][1], prevResultsBLE[5][2], prevResultsBLE[5][1]],
					["DAL",prevResultsDAL[5][1], prevResultsDAL[5][2], prevResultsDAL[5][1]],
					["GOT",prevResultsGOT[5][1], prevResultsGOT[5][2], prevResultsGOT[5][1]],
					["GAV",prevResultsGAV[5][1], prevResultsGAV[5][2], prevResultsGAV[5][1]],
					["HAL",prevResultsHAL[5][1], prevResultsHAL[5][2], prevResultsHAL[5][1]],
					["JAM",prevResultsJAM[5][1], prevResultsJAM[5][2], prevResultsJAM[5][1]],
					["JON",prevResultsJON[5][1], prevResultsJON[5][2], prevResultsJON[5][1]],
					["KAL",prevResultsKAL[5][1], prevResultsKAL[5][2], prevResultsKAL[5][1]],
					["KRO",prevResultsKRO[5][1], prevResultsKRO[5][2], prevResultsKRO[5][1]],
					["NOR",prevResultsNOR[5][1], prevResultsNOR[5][2], prevResultsNOR[5][1]],
					["MAL",prevResultsMAL[5][1], prevResultsMAL[5][2], prevResultsMAL[5][1]],
					["SKN",prevResultsSKN[5][1], prevResultsSKN[5][2], prevResultsSKN[5][1]],
					["SKS",prevResultsSKS[5][1], prevResultsSKS[5][2], prevResultsSKS[5][1]],
					["SKW",prevResultsSKW[5][1], prevResultsSKW[5][2], prevResultsSKW[5][1]],
					["STH",prevResultsSTH[5][1], prevResultsSTH[5][2], prevResultsSTH[5][1]],
					["STC",prevResultsSTC[5][1], prevResultsSTC[5][2], prevResultsSTC[5][1]],
					["SOD",prevResultsSOD[5][1], prevResultsSOD[5][2], prevResultsSOD[5][1]],
					["UPP",prevResultsUPP[5][1], prevResultsUPP[5][2], prevResultsUPP[5][1]],
					["VAR",prevResultsVAR[5][1], prevResultsVAR[5][2], prevResultsVAR[5][1]],
					["VAB",prevResultsVAB[5][1], prevResultsVAB[5][2], prevResultsVAB[5][1]],
					["VAN",prevResultsVAN[5][1], prevResultsVAN[5][2], prevResultsVAN[5][1]],
					["VAM",prevResultsVAM[5][1], prevResultsVAM[5][2], prevResultsVAM[5][1]],
					["GTH",prevResultsGTH[5][1], prevResultsGTH[5][2], prevResultsGTH[5][1]],
					["VGE",prevResultsVGE[5][1], prevResultsVGE[5][2], prevResultsVGE[5][1]],
					["VGN",prevResultsVGN[5][1], prevResultsVGN[5][2], prevResultsVGN[5][1]],
					["VGS",prevResultsVGS[5][1], prevResultsVGS[5][2], prevResultsVGS[5][1]],
					["VGW",prevResultsVGW[5][1], prevResultsVGW[5][2], prevResultsVGW[5][1]],
					["ORE",prevResultsORE[5][1], prevResultsORE[5][2], prevResultsORE[5][1]],
					["OST",prevResultsOST[5][1], prevResultsOST[5][2], prevResultsOST[5][1]]];

		var SDArray  = [["BLE",prevResultsBLE[6][1], prevResultsBLE[6][2], prevResultsBLE[6][1]],
					["DAL",prevResultsDAL[6][1], prevResultsDAL[6][2], prevResultsDAL[6][1]],
					["GOT",prevResultsGOT[6][1], prevResultsGOT[6][2], prevResultsGOT[6][1]],
					["GAV",prevResultsGAV[6][1], prevResultsGAV[6][2], prevResultsGAV[6][1]],
					["HAL",prevResultsHAL[6][1], prevResultsHAL[6][2], prevResultsHAL[6][1]],
					["JAM",prevResultsJAM[6][1], prevResultsJAM[6][2], prevResultsJAM[6][1]],
					["JON",prevResultsJON[6][1], prevResultsJON[6][2], prevResultsJON[6][1]],
					["KAL",prevResultsKAL[6][1], prevResultsKAL[6][2], prevResultsKAL[6][1]],
					["KRO",prevResultsKRO[6][1], prevResultsKRO[6][2], prevResultsKRO[6][1]],
					["NOR",prevResultsNOR[6][1], prevResultsNOR[6][2], prevResultsNOR[6][1]],
					["MAL",prevResultsMAL[6][1], prevResultsMAL[6][2], prevResultsMAL[6][1]],
					["SKN",prevResultsSKN[6][1], prevResultsSKN[6][2], prevResultsSKN[6][1]],
					["SKS",prevResultsSKS[6][1], prevResultsSKS[6][2], prevResultsSKS[6][1]],
					["SKW",prevResultsSKW[6][1], prevResultsSKW[6][2], prevResultsSKW[6][1]],
					["STH",prevResultsSTH[6][1], prevResultsSTH[6][2], prevResultsSTH[6][1]],
					["STC",prevResultsSTC[6][1], prevResultsSTC[6][2], prevResultsSTC[6][1]],
					["SOD",prevResultsSOD[6][1], prevResultsSOD[6][2], prevResultsSOD[6][1]],
					["UPP",prevResultsUPP[6][1], prevResultsUPP[6][2], prevResultsUPP[6][1]],
					["VAR",prevResultsVAR[6][1], prevResultsVAR[6][2], prevResultsVAR[6][1]],
					["VAB",prevResultsVAB[6][1], prevResultsVAB[6][2], prevResultsVAB[6][1]],
					["VAN",prevResultsVAN[6][1], prevResultsVAN[6][2], prevResultsVAN[6][1]],
					["VAM",prevResultsVAM[6][1], prevResultsVAM[6][2], prevResultsVAM[6][1]],
					["GTH",prevResultsGTH[6][1], prevResultsGTH[6][2], prevResultsGTH[6][1]],
					["VGE",prevResultsVGE[6][1], prevResultsVGE[6][2], prevResultsVGE[6][1]],
					["VGN",prevResultsVGN[6][1], prevResultsVGN[6][2], prevResultsVGN[6][1]],
					["VGS",prevResultsVGS[6][1], prevResultsVGS[6][2], prevResultsVGS[6][1]],
					["VGW",prevResultsVGW[6][1], prevResultsVGW[6][2], prevResultsVGW[6][1]],
					["ORE",prevResultsORE[6][1], prevResultsORE[6][2], prevResultsORE[6][1]],
					["OST",prevResultsOST[6][1], prevResultsOST[6][2], prevResultsOST[6][1]]];

		var VArray  = [["BLE",prevResultsBLE[7][1], prevResultsBLE[7][2], prevResultsBLE[7][1]],
					["DAL",prevResultsDAL[7][1], prevResultsDAL[7][2], prevResultsDAL[7][1]],
					["GOT",prevResultsGOT[7][1], prevResultsGOT[7][2], prevResultsGOT[7][1]],
					["GAV",prevResultsGAV[7][1], prevResultsGAV[7][2], prevResultsGAV[7][1]],
					["HAL",prevResultsHAL[7][1], prevResultsHAL[7][2], prevResultsHAL[7][1]],
					["JAM",prevResultsJAM[7][1], prevResultsJAM[7][2], prevResultsJAM[7][1]],
					["JON",prevResultsJON[7][1], prevResultsJON[7][2], prevResultsJON[7][1]],
					["KAL",prevResultsKAL[7][1], prevResultsKAL[7][2], prevResultsKAL[7][1]],
					["KRO",prevResultsKRO[7][1], prevResultsKRO[7][2], prevResultsKRO[7][1]],
					["NOR",prevResultsNOR[7][1], prevResultsNOR[7][2], prevResultsNOR[7][1]],
					["MAL",prevResultsMAL[7][1], prevResultsMAL[7][2], prevResultsMAL[7][1]],
					["SKN",prevResultsSKN[7][1], prevResultsSKN[7][2], prevResultsSKN[7][1]],
					["SKS",prevResultsSKS[7][1], prevResultsSKS[7][2], prevResultsSKS[7][1]],
					["SKW",prevResultsSKW[7][1], prevResultsSKW[7][2], prevResultsSKW[7][1]],
					["STH",prevResultsSTH[7][1], prevResultsSTH[7][2], prevResultsSTH[7][1]],
					["STC",prevResultsSTC[7][1], prevResultsSTC[7][2], prevResultsSTC[7][1]],
					["SOD",prevResultsSOD[7][1], prevResultsSOD[7][2], prevResultsSOD[7][1]],
					["UPP",prevResultsUPP[7][1], prevResultsUPP[7][2], prevResultsUPP[7][1]],
					["VAR",prevResultsVAR[7][1], prevResultsVAR[7][2], prevResultsVAR[7][1]],
					["VAB",prevResultsVAB[7][1], prevResultsVAB[7][2], prevResultsVAB[7][1]],
					["VAN",prevResultsVAN[7][1], prevResultsVAN[7][2], prevResultsVAN[7][1]],
					["VAM",prevResultsVAM[7][1], prevResultsVAM[7][2], prevResultsVAM[7][1]],
					["GTH",prevResultsGTH[7][1], prevResultsGTH[7][2], prevResultsGTH[7][1]],
					["VGE",prevResultsVGE[7][1], prevResultsVGE[7][2], prevResultsVGE[7][1]],
					["VGN",prevResultsVGN[7][1], prevResultsVGN[7][2], prevResultsVGN[7][1]],
					["VGS",prevResultsVGS[7][1], prevResultsVGS[7][2], prevResultsVGS[7][1]],
					["VGW",prevResultsVGW[7][1], prevResultsVGW[7][2], prevResultsVGW[7][1]],
					["ORE",prevResultsORE[7][1], prevResultsORE[7][2], prevResultsORE[7][1]],
					["OST",prevResultsOST[7][1], prevResultsOST[7][2], prevResultsOST[7][1]]];
		
		nationalResultsToConstituencyLevelCalculation(initialisation, CArray, 0);
		nationalResultsToConstituencyLevelCalculation(initialisation, KDArray, 1);
		nationalResultsToConstituencyLevelCalculation(initialisation, MPArray, 2);
		nationalResultsToConstituencyLevelCalculation(initialisation, LArray, 3);
		nationalResultsToConstituencyLevelCalculation(initialisation, MArray, 4);
		nationalResultsToConstituencyLevelCalculation(initialisation, SArray, 5);
		nationalResultsToConstituencyLevelCalculation(initialisation, SDArray, 6);
		nationalResultsToConstituencyLevelCalculation(initialisation, VArray, 7);
	}
	else
	{
		currResultsBLE.sort(sortFunctionC);
		currResultsDAL.sort(sortFunctionC);
		currResultsGOT.sort(sortFunctionC);
		currResultsGAV.sort(sortFunctionC);
		currResultsHAL.sort(sortFunctionC);
		currResultsJAM.sort(sortFunctionC);
		currResultsJON.sort(sortFunctionC);
		currResultsKAL.sort(sortFunctionC);
		currResultsKRO.sort(sortFunctionC);
		currResultsNOR.sort(sortFunctionC);
		currResultsMAL.sort(sortFunctionC);
		currResultsSKN.sort(sortFunctionC);
		currResultsSKS.sort(sortFunctionC);
		currResultsSKW.sort(sortFunctionC);
		currResultsSTH.sort(sortFunctionC);
		currResultsSTC.sort(sortFunctionC);
		currResultsSOD.sort(sortFunctionC);
		currResultsUPP.sort(sortFunctionC);
		currResultsVAR.sort(sortFunctionC);
		currResultsVAB.sort(sortFunctionC);
		currResultsVAN.sort(sortFunctionC);
		currResultsVAM.sort(sortFunctionC);
		currResultsGTH.sort(sortFunctionC);
		currResultsVGE.sort(sortFunctionC);
		currResultsVGN.sort(sortFunctionC);
		currResultsVGS.sort(sortFunctionC);
		currResultsVGW.sort(sortFunctionC);
		currResultsORE.sort(sortFunctionC);
		currResultsOST.sort(sortFunctionC);
		currNationalResults.sort(sortFunctionC);
		
		var CArray  = [["BLE",currResultsBLE[0][1], currResultsBLE[0][2], currResultsBLE[0][1]],
					["DAL",currResultsDAL[0][1], currResultsDAL[0][2], currResultsDAL[0][1]],
					["GOT",currResultsGOT[0][1], currResultsGOT[0][2], currResultsGOT[0][1]],
					["GAV",currResultsGAV[0][1], currResultsGAV[0][2], currResultsGAV[0][1]],
					["HAL",currResultsHAL[0][1], currResultsHAL[0][2], currResultsHAL[0][1]],
					["JAM",currResultsJAM[0][1], currResultsJAM[0][2], currResultsJAM[0][1]],
					["JON",currResultsJON[0][1], currResultsJON[0][2], currResultsJON[0][1]],
					["KAL",currResultsKAL[0][1], currResultsKAL[0][2], currResultsKAL[0][1]],
					["KRO",currResultsKRO[0][1], currResultsKRO[0][2], currResultsKRO[0][1]],
					["NOR",currResultsNOR[0][1], currResultsNOR[0][2], currResultsNOR[0][1]],
					["MAL",currResultsMAL[0][1], currResultsMAL[0][2], currResultsMAL[0][1]],
					["SKN",currResultsSKN[0][1], currResultsSKN[0][2], currResultsSKN[0][1]],
					["SKS",currResultsSKS[0][1], currResultsSKS[0][2], currResultsSKS[0][1]],
					["SKW",currResultsSKW[0][1], currResultsSKW[0][2], currResultsSKW[0][1]],
					["STH",currResultsSTH[0][1], currResultsSTH[0][2], currResultsSTH[0][1]],
					["STC",currResultsSTC[0][1], currResultsSTC[0][2], currResultsSTC[0][1]],
					["SOD",currResultsSOD[0][1], currResultsSOD[0][2], currResultsSOD[0][1]],
					["UPP",currResultsUPP[0][1], currResultsUPP[0][2], currResultsUPP[0][1]],
					["VAR",currResultsVAR[0][1], currResultsVAR[0][2], currResultsVAR[0][1]],
					["VAB",currResultsVAB[0][1], currResultsVAB[0][2], currResultsVAB[0][1]],
					["VAN",currResultsVAN[0][1], currResultsVAN[0][2], currResultsVAN[0][1]],
					["VAM",currResultsVAM[0][1], currResultsVAM[0][2], currResultsVAM[0][1]],
					["GTH",currResultsGTH[0][1], currResultsGTH[0][2], currResultsGTH[0][1]],
					["VGE",currResultsVGE[0][1], currResultsVGE[0][2], currResultsVGE[0][1]],
					["VGN",currResultsVGN[0][1], currResultsVGN[0][2], currResultsVGN[0][1]],
					["VGS",currResultsVGS[0][1], currResultsVGS[0][2], currResultsVGS[0][1]],
					["VGW",currResultsVGW[0][1], currResultsVGW[0][2], currResultsVGW[0][1]],
					["ORE",currResultsORE[0][1], currResultsORE[0][2], currResultsORE[0][1]],
					["OST",currResultsOST[0][1], currResultsOST[0][2], currResultsOST[0][1]]];

		var KDArray  = [["BLE",currResultsBLE[1][1], currResultsBLE[1][2], currResultsBLE[1][1]],
					["DAL",currResultsDAL[1][1], currResultsDAL[1][2], currResultsDAL[1][1]],
					["GOT",currResultsGOT[1][1], currResultsGOT[1][2], currResultsGOT[1][1]],
					["GAV",currResultsGAV[1][1], currResultsGAV[1][2], currResultsGAV[1][1]],
					["HAL",currResultsHAL[1][1], currResultsHAL[1][2], currResultsHAL[1][1]],
					["JAM",currResultsJAM[1][1], currResultsJAM[1][2], currResultsJAM[1][1]],
					["JON",currResultsJON[1][1], currResultsJON[1][2], currResultsJON[1][1]],
					["KAL",currResultsKAL[1][1], currResultsKAL[1][2], currResultsKAL[1][1]],
					["KRO",currResultsKRO[1][1], currResultsKRO[1][2], currResultsKRO[1][1]],
					["NOR",currResultsNOR[1][1], currResultsNOR[1][2], currResultsNOR[1][1]],
					["MAL",currResultsMAL[1][1], currResultsMAL[1][2], currResultsMAL[1][1]],
					["SKN",currResultsSKN[1][1], currResultsSKN[1][2], currResultsSKN[1][1]],
					["SKS",currResultsSKS[1][1], currResultsSKS[1][2], currResultsSKS[1][1]],
					["SKW",currResultsSKW[1][1], currResultsSKW[1][2], currResultsSKW[1][1]],
					["STH",currResultsSTH[1][1], currResultsSTH[1][2], currResultsSTH[1][1]],
					["STC",currResultsSTC[1][1], currResultsSTC[1][2], currResultsSTC[1][1]],
					["SOD",currResultsSOD[1][1], currResultsSOD[1][2], currResultsSOD[1][1]],
					["UPP",currResultsUPP[1][1], currResultsUPP[1][2], currResultsUPP[1][1]],
					["VAR",currResultsVAR[1][1], currResultsVAR[1][2], currResultsVAR[1][1]],
					["VAB",currResultsVAB[1][1], currResultsVAB[1][2], currResultsVAB[1][1]],
					["VAN",currResultsVAN[1][1], currResultsVAN[1][2], currResultsVAN[1][1]],
					["VAM",currResultsVAM[1][1], currResultsVAM[1][2], currResultsVAM[1][1]],
					["GTH",currResultsGTH[1][1], currResultsGTH[1][2], currResultsGTH[1][1]],
					["VGE",currResultsVGE[1][1], currResultsVGE[1][2], currResultsVGE[1][1]],
					["VGN",currResultsVGN[1][1], currResultsVGN[1][2], currResultsVGN[1][1]],
					["VGS",currResultsVGS[1][1], currResultsVGS[1][2], currResultsVGS[1][1]],
					["VGW",currResultsVGW[1][1], currResultsVGW[1][2], currResultsVGW[1][1]],
					["ORE",currResultsORE[1][1], currResultsORE[1][2], currResultsORE[1][1]],
					["OST",currResultsOST[1][1], currResultsOST[1][2], currResultsOST[1][1]]];

		var MPArray  = [["BLE",currResultsBLE[2][1], currResultsBLE[2][2], currResultsBLE[2][1]],
					["DAL",currResultsDAL[2][1], currResultsDAL[2][2], currResultsDAL[2][1]],
					["GOT",currResultsGOT[2][1], currResultsGOT[2][2], currResultsGOT[2][1]],
					["GAV",currResultsGAV[2][1], currResultsGAV[2][2], currResultsGAV[2][1]],
					["HAL",currResultsHAL[2][1], currResultsHAL[2][2], currResultsHAL[2][1]],
					["JAM",currResultsJAM[2][1], currResultsJAM[2][2], currResultsJAM[2][1]],
					["JON",currResultsJON[2][1], currResultsJON[2][2], currResultsJON[2][1]],
					["KAL",currResultsKAL[2][1], currResultsKAL[2][2], currResultsKAL[2][1]],
					["KRO",currResultsKRO[2][1], currResultsKRO[2][2], currResultsKRO[2][1]],
					["NOR",currResultsNOR[2][1], currResultsNOR[2][2], currResultsNOR[2][1]],
					["MAL",currResultsMAL[2][1], currResultsMAL[2][2], currResultsMAL[2][1]],
					["SKN",currResultsSKN[2][1], currResultsSKN[2][2], currResultsSKN[2][1]],
					["SKS",currResultsSKS[2][1], currResultsSKS[2][2], currResultsSKS[2][1]],
					["SKW",currResultsSKW[2][1], currResultsSKW[2][2], currResultsSKW[2][1]],
					["STH",currResultsSTH[2][1], currResultsSTH[2][2], currResultsSTH[2][1]],
					["STC",currResultsSTC[2][1], currResultsSTC[2][2], currResultsSTC[2][1]],
					["SOD",currResultsSOD[2][1], currResultsSOD[2][2], currResultsSOD[2][1]],
					["UPP",currResultsUPP[2][1], currResultsUPP[2][2], currResultsUPP[2][1]],
					["VAR",currResultsVAR[2][1], currResultsVAR[2][2], currResultsVAR[2][1]],
					["VAB",currResultsVAB[2][1], currResultsVAB[2][2], currResultsVAB[2][1]],
					["VAN",currResultsVAN[2][1], currResultsVAN[2][2], currResultsVAN[2][1]],
					["VAM",currResultsVAM[2][1], currResultsVAM[2][2], currResultsVAM[2][1]],
					["GTH",currResultsGTH[2][1], currResultsGTH[2][2], currResultsGTH[2][1]],
					["VGE",currResultsVGE[2][1], currResultsVGE[2][2], currResultsVGE[2][1]],
					["VGN",currResultsVGN[2][1], currResultsVGN[2][2], currResultsVGN[2][1]],
					["VGS",currResultsVGS[2][1], currResultsVGS[2][2], currResultsVGS[2][1]],
					["VGW",currResultsVGW[2][1], currResultsVGW[2][2], currResultsVGW[2][1]],
					["ORE",currResultsORE[2][1], currResultsORE[2][2], currResultsORE[2][1]],
					["OST",currResultsOST[2][1], currResultsOST[2][2], currResultsOST[2][1]]];

		var LArray  = [["BLE",currResultsBLE[3][1], currResultsBLE[3][2], currResultsBLE[3][1]],
					["DAL",currResultsDAL[3][1], currResultsDAL[3][2], currResultsDAL[3][1]],
					["GOT",currResultsGOT[3][1], currResultsGOT[3][2], currResultsGOT[3][1]],
					["GAV",currResultsGAV[3][1], currResultsGAV[3][2], currResultsGAV[3][1]],
					["HAL",currResultsHAL[3][1], currResultsHAL[3][2], currResultsHAL[3][1]],
					["JAM",currResultsJAM[3][1], currResultsJAM[3][2], currResultsJAM[3][1]],
					["JON",currResultsJON[3][1], currResultsJON[3][2], currResultsJON[3][1]],
					["KAL",currResultsKAL[3][1], currResultsKAL[3][2], currResultsKAL[3][1]],
					["KRO",currResultsKRO[3][1], currResultsKRO[3][2], currResultsKRO[3][1]],
					["NOR",currResultsNOR[3][1], currResultsNOR[3][2], currResultsNOR[3][1]],
					["MAL",currResultsMAL[3][1], currResultsMAL[3][2], currResultsMAL[3][1]],
					["SKN",currResultsSKN[3][1], currResultsSKN[3][2], currResultsSKN[3][1]],
					["SKS",currResultsSKS[3][1], currResultsSKS[3][2], currResultsSKS[3][1]],
					["SKW",currResultsSKW[3][1], currResultsSKW[3][2], currResultsSKW[3][1]],
					["STH",currResultsSTH[3][1], currResultsSTH[3][2], currResultsSTH[3][1]],
					["STC",currResultsSTC[3][1], currResultsSTC[3][2], currResultsSTC[3][1]],
					["SOD",currResultsSOD[3][1], currResultsSOD[3][2], currResultsSOD[3][1]],
					["UPP",currResultsUPP[3][1], currResultsUPP[3][2], currResultsUPP[3][1]],
					["VAR",currResultsVAR[3][1], currResultsVAR[3][2], currResultsVAR[3][1]],
					["VAB",currResultsVAB[3][1], currResultsVAB[3][2], currResultsVAB[3][1]],
					["VAN",currResultsVAN[3][1], currResultsVAN[3][2], currResultsVAN[3][1]],
					["VAM",currResultsVAM[3][1], currResultsVAM[3][2], currResultsVAM[3][1]],
					["GTH",currResultsGTH[3][1], currResultsGTH[3][2], currResultsGTH[3][1]],
					["VGE",currResultsVGE[3][1], currResultsVGE[3][2], currResultsVGE[3][1]],
					["VGN",currResultsVGN[3][1], currResultsVGN[3][2], currResultsVGN[3][1]],
					["VGS",currResultsVGS[3][1], currResultsVGS[3][2], currResultsVGS[3][1]],
					["VGW",currResultsVGW[3][1], currResultsVGW[3][2], currResultsVGW[3][1]],
					["ORE",currResultsORE[3][1], currResultsORE[3][2], currResultsORE[3][1]],
					["OST",currResultsOST[3][1], currResultsOST[3][2], currResultsOST[3][1]]];

		var MArray  = [["BLE",currResultsBLE[4][1], currResultsBLE[4][2], currResultsBLE[4][1]],
					["DAL",currResultsDAL[4][1], currResultsDAL[4][2], currResultsDAL[4][1]],
					["GOT",currResultsGOT[4][1], currResultsGOT[4][2], currResultsGOT[4][1]],
					["GAV",currResultsGAV[4][1], currResultsGAV[4][2], currResultsGAV[4][1]],
					["HAL",currResultsHAL[4][1], currResultsHAL[4][2], currResultsHAL[4][1]],
					["JAM",currResultsJAM[4][1], currResultsJAM[4][2], currResultsJAM[4][1]],
					["JON",currResultsJON[4][1], currResultsJON[4][2], currResultsJON[4][1]],
					["KAL",currResultsKAL[4][1], currResultsKAL[4][2], currResultsKAL[4][1]],
					["KRO",currResultsKRO[4][1], currResultsKRO[4][2], currResultsKRO[4][1]],
					["NOR",currResultsNOR[4][1], currResultsNOR[4][2], currResultsNOR[4][1]],
					["MAL",currResultsMAL[4][1], currResultsMAL[4][2], currResultsMAL[4][1]],
					["SKN",currResultsSKN[4][1], currResultsSKN[4][2], currResultsSKN[4][1]],
					["SKS",currResultsSKS[4][1], currResultsSKS[4][2], currResultsSKS[4][1]],
					["SKW",currResultsSKW[4][1], currResultsSKW[4][2], currResultsSKW[4][1]],
					["STH",currResultsSTH[4][1], currResultsSTH[4][2], currResultsSTH[4][1]],
					["STC",currResultsSTC[4][1], currResultsSTC[4][2], currResultsSTC[4][1]],
					["SOD",currResultsSOD[4][1], currResultsSOD[4][2], currResultsSOD[4][1]],
					["UPP",currResultsUPP[4][1], currResultsUPP[4][2], currResultsUPP[4][1]],
					["VAR",currResultsVAR[4][1], currResultsVAR[4][2], currResultsVAR[4][1]],
					["VAB",currResultsVAB[4][1], currResultsVAB[4][2], currResultsVAB[4][1]],
					["VAN",currResultsVAN[4][1], currResultsVAN[4][2], currResultsVAN[4][1]],
					["VAM",currResultsVAM[4][1], currResultsVAM[4][2], currResultsVAM[4][1]],
					["GTH",currResultsGTH[4][1], currResultsGTH[4][2], currResultsGTH[4][1]],
					["VGE",currResultsVGE[4][1], currResultsVGE[4][2], currResultsVGE[4][1]],
					["VGN",currResultsVGN[4][1], currResultsVGN[4][2], currResultsVGN[4][1]],
					["VGS",currResultsVGS[4][1], currResultsVGS[4][2], currResultsVGS[4][1]],
					["VGW",currResultsVGW[4][1], currResultsVGW[4][2], currResultsVGW[4][1]],
					["ORE",currResultsORE[4][1], currResultsORE[4][2], currResultsORE[4][1]],
					["OST",currResultsOST[4][1], currResultsOST[4][2], currResultsOST[4][1]]];

		var SArray  = [["BLE",currResultsBLE[5][1], currResultsBLE[5][2], currResultsBLE[5][1]],
					["DAL",currResultsDAL[5][1], currResultsDAL[5][2], currResultsDAL[5][1]],
					["GOT",currResultsGOT[5][1], currResultsGOT[5][2], currResultsGOT[5][1]],
					["GAV",currResultsGAV[5][1], currResultsGAV[5][2], currResultsGAV[5][1]],
					["HAL",currResultsHAL[5][1], currResultsHAL[5][2], currResultsHAL[5][1]],
					["JAM",currResultsJAM[5][1], currResultsJAM[5][2], currResultsJAM[5][1]],
					["JON",currResultsJON[5][1], currResultsJON[5][2], currResultsJON[5][1]],
					["KAL",currResultsKAL[5][1], currResultsKAL[5][2], currResultsKAL[5][1]],
					["KRO",currResultsKRO[5][1], currResultsKRO[5][2], currResultsKRO[5][1]],
					["NOR",currResultsNOR[5][1], currResultsNOR[5][2], currResultsNOR[5][1]],
					["MAL",currResultsMAL[5][1], currResultsMAL[5][2], currResultsMAL[5][1]],
					["SKN",currResultsSKN[5][1], currResultsSKN[5][2], currResultsSKN[5][1]],
					["SKS",currResultsSKS[5][1], currResultsSKS[5][2], currResultsSKS[5][1]],
					["SKW",currResultsSKW[5][1], currResultsSKW[5][2], currResultsSKW[5][1]],
					["STH",currResultsSTH[5][1], currResultsSTH[5][2], currResultsSTH[5][1]],
					["STC",currResultsSTC[5][1], currResultsSTC[5][2], currResultsSTC[5][1]],
					["SOD",currResultsSOD[5][1], currResultsSOD[5][2], currResultsSOD[5][1]],
					["UPP",currResultsUPP[5][1], currResultsUPP[5][2], currResultsUPP[5][1]],
					["VAR",currResultsVAR[5][1], currResultsVAR[5][2], currResultsVAR[5][1]],
					["VAB",currResultsVAB[5][1], currResultsVAB[5][2], currResultsVAB[5][1]],
					["VAN",currResultsVAN[5][1], currResultsVAN[5][2], currResultsVAN[5][1]],
					["VAM",currResultsVAM[5][1], currResultsVAM[5][2], currResultsVAM[5][1]],
					["GTH",currResultsGTH[5][1], currResultsGTH[5][2], currResultsGTH[5][1]],
					["VGE",currResultsVGE[5][1], currResultsVGE[5][2], currResultsVGE[5][1]],
					["VGN",currResultsVGN[5][1], currResultsVGN[5][2], currResultsVGN[5][1]],
					["VGS",currResultsVGS[5][1], currResultsVGS[5][2], currResultsVGS[5][1]],
					["VGW",currResultsVGW[5][1], currResultsVGW[5][2], currResultsVGW[5][1]],
					["ORE",currResultsORE[5][1], currResultsORE[5][2], currResultsORE[5][1]],
					["OST",currResultsOST[5][1], currResultsOST[5][2], currResultsOST[5][1]]];

		var SDArray  = [["BLE",currResultsBLE[6][1], currResultsBLE[6][2], currResultsBLE[6][1]],
					["DAL",currResultsDAL[6][1], currResultsDAL[6][2], currResultsDAL[6][1]],
					["GOT",currResultsGOT[6][1], currResultsGOT[6][2], currResultsGOT[6][1]],
					["GAV",currResultsGAV[6][1], currResultsGAV[6][2], currResultsGAV[6][1]],
					["HAL",currResultsHAL[6][1], currResultsHAL[6][2], currResultsHAL[6][1]],
					["JAM",currResultsJAM[6][1], currResultsJAM[6][2], currResultsJAM[6][1]],
					["JON",currResultsJON[6][1], currResultsJON[6][2], currResultsJON[6][1]],
					["KAL",currResultsKAL[6][1], currResultsKAL[6][2], currResultsKAL[6][1]],
					["KRO",currResultsKRO[6][1], currResultsKRO[6][2], currResultsKRO[6][1]],
					["NOR",currResultsNOR[6][1], currResultsNOR[6][2], currResultsNOR[6][1]],
					["MAL",currResultsMAL[6][1], currResultsMAL[6][2], currResultsMAL[6][1]],
					["SKN",currResultsSKN[6][1], currResultsSKN[6][2], currResultsSKN[6][1]],
					["SKS",currResultsSKS[6][1], currResultsSKS[6][2], currResultsSKS[6][1]],
					["SKW",currResultsSKW[6][1], currResultsSKW[6][2], currResultsSKW[6][1]],
					["STH",currResultsSTH[6][1], currResultsSTH[6][2], currResultsSTH[6][1]],
					["STC",currResultsSTC[6][1], currResultsSTC[6][2], currResultsSTC[6][1]],
					["SOD",currResultsSOD[6][1], currResultsSOD[6][2], currResultsSOD[6][1]],
					["UPP",currResultsUPP[6][1], currResultsUPP[6][2], currResultsUPP[6][1]],
					["VAR",currResultsVAR[6][1], currResultsVAR[6][2], currResultsVAR[6][1]],
					["VAB",currResultsVAB[6][1], currResultsVAB[6][2], currResultsVAB[6][1]],
					["VAN",currResultsVAN[6][1], currResultsVAN[6][2], currResultsVAN[6][1]],
					["VAM",currResultsVAM[6][1], currResultsVAM[6][2], currResultsVAM[6][1]],
					["GTH",currResultsGTH[6][1], currResultsGTH[6][2], currResultsGTH[6][1]],
					["VGE",currResultsVGE[6][1], currResultsVGE[6][2], currResultsVGE[6][1]],
					["VGN",currResultsVGN[6][1], currResultsVGN[6][2], currResultsVGN[6][1]],
					["VGS",currResultsVGS[6][1], currResultsVGS[6][2], currResultsVGS[6][1]],
					["VGW",currResultsVGW[6][1], currResultsVGW[6][2], currResultsVGW[6][1]],
					["ORE",currResultsORE[6][1], currResultsORE[6][2], currResultsORE[6][1]],
					["OST",currResultsOST[6][1], currResultsOST[6][2], currResultsOST[6][1]]];

		var VArray  = [["BLE",currResultsBLE[7][1], currResultsBLE[7][2], currResultsBLE[7][1]],
					["DAL",currResultsDAL[7][1], currResultsDAL[7][2], currResultsDAL[7][1]],
					["GOT",currResultsGOT[7][1], currResultsGOT[7][2], currResultsGOT[7][1]],
					["GAV",currResultsGAV[7][1], currResultsGAV[7][2], currResultsGAV[7][1]],
					["HAL",currResultsHAL[7][1], currResultsHAL[7][2], currResultsHAL[7][1]],
					["JAM",currResultsJAM[7][1], currResultsJAM[7][2], currResultsJAM[7][1]],
					["JON",currResultsJON[7][1], currResultsJON[7][2], currResultsJON[7][1]],
					["KAL",currResultsKAL[7][1], currResultsKAL[7][2], currResultsKAL[7][1]],
					["KRO",currResultsKRO[7][1], currResultsKRO[7][2], currResultsKRO[7][1]],
					["NOR",currResultsNOR[7][1], currResultsNOR[7][2], currResultsNOR[7][1]],
					["MAL",currResultsMAL[7][1], currResultsMAL[7][2], currResultsMAL[7][1]],
					["SKN",currResultsSKN[7][1], currResultsSKN[7][2], currResultsSKN[7][1]],
					["SKS",currResultsSKS[7][1], currResultsSKS[7][2], currResultsSKS[7][1]],
					["SKW",currResultsSKW[7][1], currResultsSKW[7][2], currResultsSKW[7][1]],
					["STH",currResultsSTH[7][1], currResultsSTH[7][2], currResultsSTH[7][1]],
					["STC",currResultsSTC[7][1], currResultsSTC[7][2], currResultsSTC[7][1]],
					["SOD",currResultsSOD[7][1], currResultsSOD[7][2], currResultsSOD[7][1]],
					["UPP",currResultsUPP[7][1], currResultsUPP[7][2], currResultsUPP[7][1]],
					["VAR",currResultsVAR[7][1], currResultsVAR[7][2], currResultsVAR[7][1]],
					["VAB",currResultsVAB[7][1], currResultsVAB[7][2], currResultsVAB[7][1]],
					["VAN",currResultsVAN[7][1], currResultsVAN[7][2], currResultsVAN[7][1]],
					["VAM",currResultsVAM[7][1], currResultsVAM[7][2], currResultsVAM[7][1]],
					["GTH",currResultsGTH[7][1], currResultsGTH[7][2], currResultsGTH[7][1]],
					["VGE",currResultsVGE[7][1], currResultsVGE[7][2], currResultsVGE[7][1]],
					["VGN",currResultsVGN[7][1], currResultsVGN[7][2], currResultsVGN[7][1]],
					["VGS",currResultsVGS[7][1], currResultsVGS[7][2], currResultsVGS[7][1]],
					["VGW",currResultsVGW[7][1], currResultsVGW[7][2], currResultsVGW[7][1]],
					["ORE",currResultsORE[7][1], currResultsORE[7][2], currResultsORE[7][1]],
					["OST",currResultsOST[7][1], currResultsOST[7][2], currResultsOST[7][1]]];
		
		nationalResultsToConstituencyLevelCalculation(initialisation, CArray, 0);
		nationalResultsToConstituencyLevelCalculation(initialisation, KDArray, 1);
		nationalResultsToConstituencyLevelCalculation(initialisation, MPArray, 2);
		nationalResultsToConstituencyLevelCalculation(initialisation, LArray, 3);
		nationalResultsToConstituencyLevelCalculation(initialisation, MArray, 4);
		nationalResultsToConstituencyLevelCalculation(initialisation, SArray, 5);
		nationalResultsToConstituencyLevelCalculation(initialisation, SDArray, 6);
		nationalResultsToConstituencyLevelCalculation(initialisation, VArray, 7);
	}
	
}

function seatCalculation(initialisation) {
	
	if (initialisation){
		constituencies.eachLayer(function(currentLayer){
			((currentLayer.feature.properties.name == "Blekinge") ? initialStateSainteLague(prevResultsBLE, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Dalarna") ? initialStateSainteLague(prevResultsDAL, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Gotland") ? initialStateSainteLague(prevResultsGOT, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Gävleborg") ? initialStateSainteLague(prevResultsGAV, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Halland") ? initialStateSainteLague(prevResultsHAL, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Jämtland") ? initialStateSainteLague(prevResultsJAM, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Jönköping") ? initialStateSainteLague(prevResultsJON, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Kalmar") ? initialStateSainteLague(prevResultsKAL, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Kronoberg") ? initialStateSainteLague(prevResultsKRO, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Norrbotten") ? initialStateSainteLague(prevResultsNOR, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Malmö") ? initialStateSainteLague(prevResultsMAL, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Skane North and East") ? initialStateSainteLague(prevResultsSKN, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Skane South") ? initialStateSainteLague(prevResultsSKS, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Skane West") ? initialStateSainteLague(prevResultsSKW, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Stockholm City") ? initialStateSainteLague(prevResultsSTH, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Stockholm County") ? initialStateSainteLague(prevResultsSTC, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Södermanland") ? initialStateSainteLague(prevResultsSOD, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Uppsala") ? initialStateSainteLague(prevResultsUPP, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Värmland") ? initialStateSainteLague(prevResultsVAR, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Västerbotten") ? initialStateSainteLague(prevResultsVAB, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Västernorrland") ? initialStateSainteLague(prevResultsVAN, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Västmanland") ? initialStateSainteLague(prevResultsVAM, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Göteborg") ? initialStateSainteLague(prevResultsGTH, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Västra Götaland East") ? initialStateSainteLague(prevResultsVGE, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Västra Götaland North") ? initialStateSainteLague(prevResultsVGN, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Västra Götaland South") ? initialStateSainteLague(prevResultsVGS, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Västra Götaland West") ? initialStateSainteLague(prevResultsVGW, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Örebro") ? initialStateSainteLague(prevResultsORE, currentLayer.feature.properties.fixedSeats, initialisation)
			: initialStateSainteLague(prevResultsOST, currentLayer.feature.properties.fixedSeats, initialisation));
		});
			
		nationalAdjustmentSeatAllocator(initialisation);
		nationalResultsToConstituencyLevelInit(initialisation);
		
	}
	else {
		constituencies.eachLayer(function(currentLayer){
			((currentLayer.feature.properties.name == "Blekinge") ? initialStateSainteLague(currResultsBLE, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Dalarna") ? initialStateSainteLague(currResultsDAL, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Gotland") ? initialStateSainteLague(currResultsGOT, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Gävleborg") ? initialStateSainteLague(currResultsGAV, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Halland") ? initialStateSainteLague(currResultsHAL, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Jämtland") ? initialStateSainteLague(currResultsJAM, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Jönköping") ? initialStateSainteLague(currResultsJON, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Kalmar") ? initialStateSainteLague(currResultsKAL, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Kronoberg") ? initialStateSainteLague(currResultsKRO, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Norrbotten") ? initialStateSainteLague(currResultsNOR, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Malmö") ? initialStateSainteLague(currResultsMAL, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Skane North and East") ? initialStateSainteLague(currResultsSKN, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Skane South") ? initialStateSainteLague(currResultsSKS, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Skane West") ? initialStateSainteLague(currResultsSKW, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Stockholm City") ? initialStateSainteLague(currResultsSTH, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Stockholm County") ? initialStateSainteLague(currResultsSTC, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Södermanland") ? initialStateSainteLague(currResultsSOD, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Uppsala") ? initialStateSainteLague(currResultsUPP, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Värmland") ? initialStateSainteLague(currResultsVAR, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Västerbotten") ? initialStateSainteLague(currResultsVAB, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Västernorrland") ? initialStateSainteLague(currResultsVAN, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Västmanland") ? initialStateSainteLague(currResultsVAM, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Göteborg") ? initialStateSainteLague(currResultsGTH, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Västra Götaland East") ? initialStateSainteLague(currResultsVGE, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Västra Götaland North") ? initialStateSainteLague(currResultsVGN, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Västra Götaland South") ? initialStateSainteLague(currResultsVGS, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Västra Götaland West") ? initialStateSainteLague(currResultsVGW, currentLayer.feature.properties.fixedSeats, initialisation)
			: (currentLayer.feature.properties.name == "Örebro") ? initialStateSainteLague(currResultsORE, currentLayer.feature.properties.fixedSeats, initialisation)
			: initialStateSainteLague(currResultsOST, currentLayer.feature.properties.fixedSeats, initialisation));
		});
		
		nationalAdjustmentSeatAllocator(initialisation);
		nationalResultsToConstituencyLevelInit(initialisation);
	}
	
	
}


//borders



function styleMunicipalities(feature) {
	SVotes = feature.properties.SocialDemocraticVotes * SModifier;
	MVotes = feature.properties.ModerateVotes * MModifier;
	SDVotes = feature.properties.SwedenDemocratsVotes * SDModifier;
	CVotes = feature.properties.CentreVotes * CModifier;
	VVotes = feature.properties.LeftVotes * VModifier;
	KDVotes = feature.properties.ChristianDemocratsVotes * KDModifier;
	LVotes = feature.properties.LiberalVotes * LModifier;
	MPVotes = feature.properties.GreenVotes * MPModifier;

	if ((SVotes > MVotes) && (SVotes > SDVotes) && (SVotes > CVotes) && (SVotes > VVotes) && (SVotes > KDVotes) && (SVotes > LVotes) && (SVotes > MPVotes)){
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#ed1b34'
			
		};
	}
	if ((MVotes > SVotes) && (MVotes > SDVotes) && (MVotes > CVotes) && (MVotes > VVotes) && (MVotes > KDVotes) && (MVotes > LVotes) && (MVotes > MPVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#009cdb'
			
		};
	}
	if ((SDVotes > SVotes) && (SDVotes > MVotes) && (SDVotes > CVotes) && (SDVotes > VVotes) && (SDVotes > KDVotes) && (SDVotes > LVotes) && (SDVotes > MPVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#fedf0b'
			
		};
	}
	if ((CVotes > SVotes) && (CVotes > MVotes) && (CVotes > SDVotes) && (CVotes > VVotes) && (CVotes > KDVotes) && (CVotes > LVotes) && (CVotes > MPVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#016a39'
			
		};
	}
	if ((VVotes > SVotes) && (VVotes > MVotes) && (VVotes > CVotes) && (VVotes > SDVotes) && (VVotes > KDVotes) && (VVotes > LVotes) && (VVotes > MPVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#b00600'
			
		};
	}
	if ((KDVotes > SVotes) && (KDVotes > MVotes) && (KDVotes > CVotes) && (KDVotes > VVotes) && (KDVotes > SDVotes) && (KDVotes > LVotes) && (KDVotes > MPVotes)){
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#004678'
			
		};
	}
	if ((LVotes > SVotes) && (LVotes > MVotes) && (LVotes > CVotes) && (LVotes > VVotes) && (LVotes > SDVotes) && (LVotes > KDVotes) && (LVotes > MPVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#006ab3'
				
		};
	}
	if ((MPVotes > SVotes) && (MPVotes > MVotes) && (MPVotes > CVotes) && (MPVotes > VVotes) && (MPVotes > SDVotes) && (MPVotes > KDVotes) && (MPVotes > LVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#2b912c'
				
		};
	}
}

function styleConstituencies(feature) {
	SVotes = feature.properties.SocialDemocraticVotes * SModifier;
	MVotes = feature.properties.ModerateVotes * MModifier;
	SDVotes = feature.properties.SwedenDemocratsVotes * SDModifier;
	CVotes = feature.properties.CentreVotes * CModifier;
	VVotes = feature.properties.LeftVotes * VModifier;
	KDVotes = feature.properties.ChristianDemocratsVotes * KDModifier;
	LVotes = feature.properties.LiberalVotes * LModifier;
	MPVotes = feature.properties.GreenVotes * MPModifier;

	if ((SVotes > MVotes) && (SVotes > SDVotes) && (SVotes > CVotes) && (SVotes > VVotes) && (SVotes > KDVotes) && (SVotes > LVotes) && (SVotes > MPVotes)){
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#ed1b34'
			
		};
	}
	if ((MVotes > SVotes) && (MVotes > SDVotes) && (MVotes > CVotes) && (MVotes > VVotes) && (MVotes > KDVotes) && (MVotes > LVotes) && (MVotes > MPVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#009cdb'
			
		};
	}
	if ((SDVotes > SVotes) && (SDVotes > MVotes) && (SDVotes > CVotes) && (SDVotes > VVotes) && (SDVotes > KDVotes) && (SDVotes > LVotes) && (SDVotes > MPVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#fedf0b'
			
		};
	}
	if ((CVotes > SVotes) && (CVotes > MVotes) && (CVotes > SDVotes) && (CVotes > VVotes) && (CVotes > KDVotes) && (CVotes > LVotes) && (CVotes > MPVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#016a39'
			
		};
	}
	if ((VVotes > SVotes) && (VVotes > MVotes) && (VVotes > CVotes) && (VVotes > SDVotes) && (VVotes > KDVotes) && (VVotes > LVotes) && (VVotes > MPVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#b00600'
			
		};
	}
	if ((KDVotes > SVotes) && (KDVotes > MVotes) && (KDVotes > CVotes) && (KDVotes > VVotes) && (KDVotes > SDVotes) && (KDVotes > LVotes) && (KDVotes > MPVotes)){
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#004678'
			
		};
	}
	if ((LVotes > SVotes) && (LVotes > MVotes) && (LVotes > CVotes) && (LVotes > VVotes) && (LVotes > SDVotes) && (LVotes > KDVotes) && (LVotes > MPVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#006ab3'
				
		};
	}
	if ((MPVotes > SVotes) && (MPVotes > MVotes) && (MPVotes > CVotes) && (MPVotes > VVotes) && (MPVotes > SDVotes) && (MPVotes > KDVotes) && (MPVotes > LVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#2b912c'
				
		};
	}
}

function fillConstituencyArrays(constituencyCollection, initialisation) {
	let noOfParties = 8;
	
	if (initialisation)
	{
		SModifier = 1;
		MModifier = 1;
		SDModifier = 1;
		CModifier = 1;
		VModifier = 1;
		KDModifier = 1;
		LModifier = 1;
		MPModifier = 1;
	}


	var results = new Array(noOfParties);
	for (var i = 0; i < results.length; i++) {
		results[i] = new Array(4); //Loop through depending on how many districts there are and create new fields.
		results[i][1] = 0;
		results[i][2] = 0;
		results[i][3] = 0;
	}

	var index = 0; //Default index to 0 as this is the standard starting point for any array.
	
	var parties = ["Social Democratic","Moderate","Sweden Democrats","Centre","The Left","Christian Democrats","Liberals","Green"];
	
	constituencyCollection.eachLayer(function(currentLayer){
	for (var i = 0; i < parties.length; i++){
		results[index][0] = parties[i]; 
		results[index][1] = results[index][1] + ((parties[i] == "Social Democratic") ? Math.round(((currentLayer.feature.properties.SocialDemocraticVotes * SModifier) * 1) / 1)
		: (parties[i] == "Moderate") ? Math.round(((currentLayer.feature.properties.ModerateVotes * MModifier) * 1) / 1)
		: (parties[i] == "Sweden Democrats") ? Math.round(((currentLayer.feature.properties.SwedenDemocratsVotes * SDModifier) * 1) / 1)
		: (parties[i] == "Centre") ? Math.round(((currentLayer.feature.properties.CentreVotes * CModifier) * 1) / 1)
		: (parties[i] == "The Left") ? Math.round(((currentLayer.feature.properties.LeftVotes * VModifier) * 1) / 1)
		: (parties[i] == "Christian Democrats") ? Math.round(((currentLayer.feature.properties.ChristianDemocratsVotes * KDModifier) * 1) / 1)
		: (parties[i] == "Liberals") ? Math.round(((currentLayer.feature.properties.LiberalVotes * LModifier) * 1) / 1)
		: Math.round(((currentLayer.feature.properties.GreenVotes * MPModifier) * 1) / 1));
		results[index][2] = 0;
		results[index][3] = results[index][1];
		index++;
	}
	index = 0;

	});	


	return results;
}

function fillNationalArrayByConstituency(currentArray, results){
	
	for (var i = 0; i < currentArray.length; i++) {
		if (currentArray[i][0] == "Social Democratic")
		{
			results[0][1] = results[0][1] + currentArray[i][1];
			results[0][2] = results[0][2] + currentArray[i][2];
			results[0][3] = results[0][3] + currentArray[i][1];
		}
		if (currentArray[i][0] == "Moderate")
		{
			results[1][1] = results[1][1] + currentArray[i][1];
			results[1][2] = results[1][2] + currentArray[i][2];
			results[1][3] = results[1][3] + currentArray[i][1];
		}
		if (currentArray[i][0] == "Sweden Democrats")
		{
			results[2][1] = results[2][1] + currentArray[i][1];
			results[2][2] = results[2][2] + currentArray[i][2];
			results[2][3] = results[2][3] + currentArray[i][1];
		}
		if (currentArray[i][0] == "Centre")
		{
			results[3][1] = results[3][1] + currentArray[i][1];
			results[3][2] = results[3][2] + currentArray[i][2];
			results[3][3] = results[3][3] + currentArray[i][1];
		}
		if (currentArray[i][0] == "The Left")
		{
			results[4][1] = results[4][1] + currentArray[i][1];
			results[4][2] = results[4][2] + currentArray[i][2];
			results[4][3] = results[4][3] + currentArray[i][1];
		}
		if (currentArray[i][0] == "Christian Democrats")
		{
			results[5][1] = results[5][1] + currentArray[i][1];
			results[5][2] = results[5][2] + currentArray[i][2];
			results[5][3] = results[5][3] + currentArray[i][1];
		}	
		if (currentArray[i][0] == "Liberals")
		{
			results[6][1] = results[6][1] + currentArray[i][1];
			results[6][2] = results[6][2] + currentArray[i][2];
			results[6][3] = results[6][3] + currentArray[i][1];
		}
		if (currentArray[i][0] == "Green")
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

	var parties = ["Social Democratic","Moderate","Sweden Democrats","Centre","The Left","Christian Democrats","Liberals","Green"];
	var results = new Array(noOfParties);
	for (var i = 0; i < results.length; i++) {
		results[i] = new Array(4); //Loop through depending on how many districts there are and create new fields.
		results[i][0] = parties[i];
		results[i][1] = 0;
		results[i][2] = 0;
		results[i][3] = 0;
	}
	
	results = fillNationalArrayByConstituency(currResultsBLE, results);
	
	results = fillNationalArrayByConstituency(currResultsDAL, results);
	results = fillNationalArrayByConstituency(currResultsGOT, results);
	results = fillNationalArrayByConstituency(currResultsGAV, results);
	results = fillNationalArrayByConstituency(currResultsHAL, results);
	results = fillNationalArrayByConstituency(currResultsJAM, results);
	results = fillNationalArrayByConstituency(currResultsJON, results);
	results = fillNationalArrayByConstituency(currResultsKAL, results);
	results = fillNationalArrayByConstituency(currResultsKRO, results);
	results = fillNationalArrayByConstituency(currResultsNOR, results);
	results = fillNationalArrayByConstituency(currResultsMAL, results);
	results = fillNationalArrayByConstituency(currResultsSKN, results);
	results = fillNationalArrayByConstituency(currResultsSKS, results);
	results = fillNationalArrayByConstituency(currResultsSKW, results);
	results = fillNationalArrayByConstituency(currResultsSTH, results);
	results = fillNationalArrayByConstituency(currResultsSTC, results);
	results = fillNationalArrayByConstituency(currResultsSOD, results);
	results = fillNationalArrayByConstituency(currResultsUPP, results);
	results = fillNationalArrayByConstituency(currResultsVAR, results);
	results = fillNationalArrayByConstituency(currResultsVAB, results);
	results = fillNationalArrayByConstituency(currResultsVAN, results);
	results = fillNationalArrayByConstituency(currResultsVAM, results);
	results = fillNationalArrayByConstituency(currResultsGTH, results);
	results = fillNationalArrayByConstituency(currResultsVGE, results);
	results = fillNationalArrayByConstituency(currResultsVGN, results);
	results = fillNationalArrayByConstituency(currResultsVGS, results);
	results = fillNationalArrayByConstituency(currResultsVGW, results);
	results = fillNationalArrayByConstituency(currResultsORE, results);
	results = fillNationalArrayByConstituency(currResultsOST, results);

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
    }	
}

function hideVoteShareTable() {
	var cols = document.getElementsByClassName('vote-share-table-container');
	for (var i = 0; i < cols.length; i++)
    {
        cols[i].style["visibility"] = "hidden";
    }	
}

function displayCurrentProjection() {
	document.getElementById("SInput").value = Sprediction;
	document.getElementById("MInput").value = Mprediction;
	document.getElementById("SDInput").value = SDprediction;
	document.getElementById("CInput").value = Cprediction;
	document.getElementById("VInput").value = Vprediction;
	document.getElementById("KDInput").value = KDprediction;
	document.getElementById("LInput").value = Lprediction;
	document.getElementById("MPInput").value = MPprediction;
	
	calculateUserPrediction();
}

function displayPrevResults() {
	document.getElementById("SInput").value = prevSVoteShare;
	document.getElementById("MInput").value = prevMVoteShare;
	document.getElementById("SDInput").value = prevSDVoteShare;
	document.getElementById("CInput").value = prevCVoteShare;
	document.getElementById("VInput").value = prevVVoteShare;
	document.getElementById("KDInput").value = prevKDVoteShare;
	document.getElementById("LInput").value = prevLVoteShare;
	document.getElementById("MPInput").value = prevMPVoteShare;
	
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

function thresholdImplementor(index, partyThreshold) {
	if (!partyThreshold){
		currResultsBLE[index][3] = 0;
		currResultsDAL[index][3] = 0;
		currResultsGAV[index][3] = 0;
		currResultsGOT[index][3] = 0;
		currResultsGTH[index][3] = 0;
		currResultsHAL[index][3] = 0;
		currResultsJAM[index][3] = 0;
		currResultsJON[index][3] = 0;
		currResultsKAL[index][3] = 0;
		currResultsKRO[index][3] = 0;
		currResultsMAL[index][3] = 0;
		currResultsNOR[index][3] = 0;
		currResultsORE[index][3] = 0;
		currResultsOST[index][3] = 0;
		currResultsSKN[index][3] = 0;
		currResultsSKS[index][3] = 0;
		currResultsSKW[index][3] = 0;
		currResultsSOD[index][3] = 0;
		currResultsSTC[index][3] = 0;
		currResultsSTH[index][3] = 0;
		currResultsUPP[index][3] = 0;
		currResultsVAB[index][3] = 0;
		currResultsVAM[index][3] = 0;
		currResultsVAN[index][3] = 0;
		currResultsVAR[index][3] = 0;
		currResultsVGE[index][3] = 0;
		currResultsVGN[index][3] = 0;
		currResultsVGS[index][3] = 0;
		currResultsVGW[index][3] = 0
		currNationalResults[index][3] = 0;
	}
	
}

function calculateUserPrediction() {
	
	SModifier = 1 + ((document.getElementById("SInput").value - prevSVoteShare) / prevSVoteShare);
	MModifier = 1 + ((document.getElementById("MInput").value - prevMVoteShare) / prevMVoteShare);
	SDModifier = 1 + ((document.getElementById("SDInput").value - prevSDVoteShare) / prevSDVoteShare);
	CModifier = 1 + ((document.getElementById("CInput").value - prevCVoteShare) / prevCVoteShare);
	VModifier = 1 + ((document.getElementById("VInput").value - prevVVoteShare) / prevVVoteShare);
	KDModifier = 1 + ((document.getElementById("KDInput").value - prevKDVoteShare) / prevKDVoteShare);
	LModifier = 1 + ((document.getElementById("LInput").value - prevLVoteShare) / prevLVoteShare);;
	MPModifier = 1 + ((document.getElementById("MPInput").value - prevMPVoteShare) / prevMPVoteShare);
	
	
	currResultsBLE = fillConstituencyArrays(municipalitiesBLE, false);
	currResultsDAL = fillConstituencyArrays(municipalitiesDAL, false);
	currResultsGOT = fillConstituencyArrays(municipalitiesGOT, false);
	currResultsGAV = fillConstituencyArrays(municipalitiesGAV, false);
	currResultsHAL = fillConstituencyArrays(municipalitiesHAL, false);
	currResultsJAM = fillConstituencyArrays(municipalitiesJAM, false);
	currResultsJON = fillConstituencyArrays(municipalitiesJON, false);
	currResultsKAL = fillConstituencyArrays(municipalitiesKAL, false);
	currResultsKRO = fillConstituencyArrays(municipalitiesKRO, false);
	currResultsNOR = fillConstituencyArrays(municipalitiesNOR, false);
	currResultsMAL = fillConstituencyArrays(municipalitiesMAL, false);
	currResultsSKN = fillConstituencyArrays(municipalitiesSKN, false);
	currResultsSKS = fillConstituencyArrays(municipalitiesSKS, false);
	currResultsSKW = fillConstituencyArrays(municipalitiesSKW, false);
	currResultsSTH = fillConstituencyArrays(municipalitiesSTH, false);
	currResultsSTC = fillConstituencyArrays(municipalitiesSTC, false);
	currResultsSOD = fillConstituencyArrays(municipalitiesSOD, false);
	currResultsUPP = fillConstituencyArrays(municipalitiesUPP, false);
	currResultsVAR = fillConstituencyArrays(municipalitiesVAR, false);
	currResultsVAB = fillConstituencyArrays(municipalitiesVAB, false);
	currResultsVAN = fillConstituencyArrays(municipalitiesVAN, false);
	currResultsVAM = fillConstituencyArrays(municipalitiesVAM, false);
	currResultsGTH = fillConstituencyArrays(municipalitiesGTH, false);
	currResultsVGE = fillConstituencyArrays(municipalitiesVGE, false);
	currResultsVGN = fillConstituencyArrays(municipalitiesVGN, false);
	currResultsVGS = fillConstituencyArrays(municipalitiesVGS, false);
	currResultsVGW = fillConstituencyArrays(municipalitiesVGW, false);
	currResultsORE = fillConstituencyArrays(municipalitiesORE, false);
	currResultsOST = fillConstituencyArrays(municipalitiesOST, false);

	currNationalResults = fillNationalArray();
	currResultsBLE.sort(sortFunctionC);
	currResultsDAL.sort(sortFunctionC);
	currResultsGOT.sort(sortFunctionC);
	currResultsGAV.sort(sortFunctionC);
	currResultsHAL.sort(sortFunctionC);
	currResultsJAM.sort(sortFunctionC);
	currResultsJON.sort(sortFunctionC);
	currResultsKAL.sort(sortFunctionC);
	currResultsKRO.sort(sortFunctionC);
	currResultsNOR.sort(sortFunctionC);
	currResultsMAL.sort(sortFunctionC);
	currResultsSKN.sort(sortFunctionC);
	currResultsSKS.sort(sortFunctionC);
	currResultsSKW.sort(sortFunctionC);
	currResultsSTH.sort(sortFunctionC);
	currResultsSTC.sort(sortFunctionC);
	currResultsSOD.sort(sortFunctionC);
	currResultsUPP.sort(sortFunctionC);
	currResultsVAR.sort(sortFunctionC);
	currResultsVAB.sort(sortFunctionC);
	currResultsVAN.sort(sortFunctionC);
	currResultsVAM.sort(sortFunctionC);
	currResultsGTH.sort(sortFunctionC);
	currResultsVGE.sort(sortFunctionC);
	currResultsVGN.sort(sortFunctionC);
	currResultsVGS.sort(sortFunctionC);
	currResultsVGW.sort(sortFunctionC);
	currResultsORE.sort(sortFunctionC);
	currResultsOST.sort(sortFunctionC);
	currNationalResults.sort(sortFunctionC);
	
	
	
	
	CThreshold = thresholdChecker(document.getElementById("CInput").value);
	KDThreshold = thresholdChecker(document.getElementById("KDInput").value);
	MPThreshold = thresholdChecker(document.getElementById("MPInput").value);
	LThreshold = thresholdChecker(document.getElementById("LInput").value);
	MThreshold = thresholdChecker(document.getElementById("MInput").value);
	SThreshold = thresholdChecker(document.getElementById("SInput").value);
	SDThreshold = thresholdChecker(document.getElementById("SDInput").value);
	VThreshold = thresholdChecker(document.getElementById("VInput").value);
	
	thresholdImplementor(0, CThreshold);
	thresholdImplementor(1, KDThreshold);
	thresholdImplementor(2, MPThreshold);
	thresholdImplementor(3, LThreshold);
	thresholdImplementor(4, MThreshold);
	thresholdImplementor(5, SThreshold);
	thresholdImplementor(6, SDThreshold);
	thresholdImplementor(7, VThreshold);
	
	
	
	constituencies.eachLayer(function(layer){ //Iterate through each layer in a collection
		constituencies.resetStyle(layer);
	});
	municipalitiesBLE.eachLayer(function(layer){ //Iterate through each layer in a collection
		municipalitiesBLE.resetStyle(layer);
	});
	municipalitiesDAL.eachLayer(function(layer){ //Iterate through each layer in a collection
		municipalitiesDAL.resetStyle(layer);
	});
	municipalitiesGOT.eachLayer(function(layer){ //Iterate through each layer in a collection
		municipalitiesGOT.resetStyle(layer);
	});
	municipalitiesGAV.eachLayer(function(layer){ //Iterate through each layer in a collection
		municipalitiesGAV.resetStyle(layer);
	});
	municipalitiesHAL.eachLayer(function(layer){ //Iterate through each layer in a collection
		municipalitiesHAL.resetStyle(layer);
	});
	municipalitiesJAM.eachLayer(function(layer){ //Iterate through each layer in a collection
		municipalitiesJAM.resetStyle(layer);
	});
	municipalitiesJON.eachLayer(function(layer){ //Iterate through each layer in a collection
		municipalitiesJON.resetStyle(layer);
	});
	municipalitiesKAL.eachLayer(function(layer){ //Iterate through each layer in a collection
		municipalitiesKAL.resetStyle(layer);
	});
	municipalitiesKRO.eachLayer(function(layer){ //Iterate through each layer in a collection
		municipalitiesKRO.resetStyle(layer);
	});
	municipalitiesNOR.eachLayer(function(layer){ //Iterate through each layer in a collection
		municipalitiesNOR.resetStyle(layer);
	});
	municipalitiesMAL.eachLayer(function(layer){ //Iterate through each layer in a collection
		municipalitiesMAL.resetStyle(layer);
	});
	municipalitiesSKN.eachLayer(function(layer){ //Iterate through each layer in a collection
		municipalitiesSKN.resetStyle(layer);
	});
	municipalitiesSKS.eachLayer(function(layer){ //Iterate through each layer in a collection
		municipalitiesSKS.resetStyle(layer);
	});
	municipalitiesSKW.eachLayer(function(layer){ //Iterate through each layer in a collection
		municipalitiesSKW.resetStyle(layer);
	});
	municipalitiesSTH.eachLayer(function(layer){ //Iterate through each layer in a collection
		municipalitiesSTH.resetStyle(layer);
	});
	municipalitiesSTC.eachLayer(function(layer){ //Iterate through each layer in a collection
		municipalitiesSTC.resetStyle(layer);
	});
	municipalitiesSOD.eachLayer(function(layer){ //Iterate through each layer in a collection
		municipalitiesSOD.resetStyle(layer);
	});
	municipalitiesUPP.eachLayer(function(layer){ //Iterate through each layer in a collection
		municipalitiesUPP.resetStyle(layer);
	});
	municipalitiesVAR.eachLayer(function(layer){ //Iterate through each layer in a collection
		municipalitiesVAR.resetStyle(layer);
	});
	municipalitiesVAB.eachLayer(function(layer){ //Iterate through each layer in a collection
		municipalitiesVAB.resetStyle(layer);
	});
	municipalitiesVAN.eachLayer(function(layer){ //Iterate through each layer in a collection
		municipalitiesVAN.resetStyle(layer);
	});
	municipalitiesVAM.eachLayer(function(layer){ //Iterate through each layer in a collection
		municipalitiesVAM.resetStyle(layer);
	});
	municipalitiesGTH.eachLayer(function(layer){ //Iterate through each layer in a collection
		municipalitiesGTH.resetStyle(layer);
	});
	municipalitiesVGE.eachLayer(function(layer){ //Iterate through each layer in a collection
		municipalitiesVGE.resetStyle(layer);
	});
	municipalitiesVGN.eachLayer(function(layer){ //Iterate through each layer in a collection
		municipalitiesVGN.resetStyle(layer);
	});
	municipalitiesVGS.eachLayer(function(layer){ //Iterate through each layer in a collection
		municipalitiesVGS.resetStyle(layer);
	});
	municipalitiesVGW.eachLayer(function(layer){ //Iterate through each layer in a collection
		municipalitiesVGW.resetStyle(layer);
	});
	municipalitiesORE.eachLayer(function(layer){ //Iterate through each layer in a collection
		municipalitiesORE.resetStyle(layer);
	});
	municipalitiesOST.eachLayer(function(layer){ //Iterate through each layer in a collection
		municipalitiesOST.resetStyle(layer);
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

	municipalitiesBLE.remove();
	municipalitiesDAL.remove();
	municipalitiesGOT.remove();
	municipalitiesGAV.remove();
	municipalitiesHAL.remove();
	municipalitiesJAM.remove();
	municipalitiesJON.remove();
	municipalitiesKAL.remove();
	municipalitiesKRO.remove();
	municipalitiesNOR.remove();
	municipalitiesMAL.remove();
	municipalitiesSKN.remove();
	municipalitiesSKS.remove();
	municipalitiesSKW.remove();
	municipalitiesSTH.remove();
	municipalitiesSTC.remove();
	municipalitiesSOD.remove();
	municipalitiesUPP.remove();
	municipalitiesVAR.remove();
	municipalitiesVAB.remove();
	municipalitiesVAN.remove();
	municipalitiesVAM.remove();
	municipalitiesGTH.remove();
	municipalitiesVGE.remove();
	municipalitiesVGN.remove();
	municipalitiesVGS.remove();
	municipalitiesVGW.remove();
	municipalitiesORE.remove();
	municipalitiesOST.remove();

	
	stateMode = true;
	federalLevel = true;
	
	displayVoteShareTable();
	document.getElementById("ResultsTableTitle").value = "National Level";

	currNationalResults.sort(sortFunction);
	updateResultsTable(currNationalResults, prevNationalResults);

	map.addLayer(constituencies);
	resetHighlightStates(constituencies);
	map.setView(new L.LatLng(51.5, 8), 5);
	
}

function switchDisplay() {

	if (stateMode == true)
	{
		constituencies.remove();
		
		map.addLayer(municipalitiesBLE);
		map.addLayer(municipalitiesDAL);
		map.addLayer(municipalitiesGOT);
		map.addLayer(municipalitiesGAV);
		map.addLayer(municipalitiesHAL);
		map.addLayer(municipalitiesJAM);
		map.addLayer(municipalitiesJON);
		map.addLayer(municipalitiesKAL);
		map.addLayer(municipalitiesKRO);
		map.addLayer(municipalitiesNOR);
		map.addLayer(municipalitiesMAL);
		map.addLayer(municipalitiesSKN);
		map.addLayer(municipalitiesSKS);
		map.addLayer(municipalitiesSKW);
		map.addLayer(municipalitiesSTH);
		map.addLayer(municipalitiesSTC);
		map.addLayer(municipalitiesSOD);
		map.addLayer(municipalitiesUPP);
		map.addLayer(municipalitiesVAR);
		map.addLayer(municipalitiesVAB);
		map.addLayer(municipalitiesVAN);
		map.addLayer(municipalitiesVAM);
		map.addLayer(municipalitiesGTH);
		map.addLayer(municipalitiesVGE);
		map.addLayer(municipalitiesVGN);
		map.addLayer(municipalitiesVGS);
		map.addLayer(municipalitiesVGW);
		map.addLayer(municipalitiesORE);
		map.addLayer(municipalitiesOST);
		resetHighlightConstituencies(municipalitiesBLE);	
		
		displayVoteShareTable();
		document.getElementById("ResultsTableTitle").value = "National Level";
		
		currNationalResults.sort(sortFunction);
		updateResultsTable(currNationalResults, prevNationalResults);
		
		federalLevel = true;
		stateMode = false;
	}	
	else
	{
		municipalitiesBLE.remove();
		municipalitiesDAL.remove();
		municipalitiesGOT.remove();
		municipalitiesGAV.remove();
		municipalitiesHAL.remove();
		municipalitiesJAM.remove();
		municipalitiesJON.remove();
		municipalitiesKAL.remove();
		municipalitiesKRO.remove();
		municipalitiesNOR.remove();
		municipalitiesMAL.remove();
		municipalitiesSKN.remove();
		municipalitiesSKS.remove();
		municipalitiesSKW.remove();
		municipalitiesSTH.remove();
		municipalitiesSTC.remove();
		municipalitiesSOD.remove();
		municipalitiesUPP.remove();
		municipalitiesVAR.remove();
		municipalitiesVAB.remove();
		municipalitiesVAN.remove();
		municipalitiesVAM.remove();
		municipalitiesGTH.remove();
		municipalitiesVGE.remove();
		municipalitiesVGN.remove();
		municipalitiesVGS.remove();
		municipalitiesVGW.remove();
		municipalitiesORE.remove();
		municipalitiesOST.remove();
		
		
		map.addLayer(constituencies);
		resetHighlightStates(constituencies);
		
		displayVoteShareTable();
		document.getElementById("ResultsTableTitle").value = "National Level";
		
		currNationalResults.sort(sortFunction);
		updateResultsTable(currNationalResults, prevNationalResults);
		
		federalLevel = true;
		stateMode = true;
	}
	
	
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
	constituencies.remove();
	
	
	((e.target.feature.properties.name == "Blekinge") ? map.addLayer(municipalitiesBLE)
	: (e.target.feature.properties.name == "Dalarna") ? map.addLayer(municipalitiesDAL)
	: (e.target.feature.properties.name == "Gotland") ? map.addLayer(municipalitiesGOT)
	: (e.target.feature.properties.name == "Gävleborg") ? map.addLayer(municipalitiesGAV)
	: (e.target.feature.properties.name == "Halland") ? map.addLayer(municipalitiesHAL)
	: (e.target.feature.properties.name == "Jämtland") ? map.addLayer(municipalitiesJAM)
	: (e.target.feature.properties.name == "Jönköping") ? map.addLayer(municipalitiesJON)
	: (e.target.feature.properties.name == "Kalmar") ? map.addLayer(municipalitiesKAL)
	: (e.target.feature.properties.name == "Kronoberg") ? map.addLayer(municipalitiesKRO)
	: (e.target.feature.properties.name == "Norrbotten") ? map.addLayer(municipalitiesNOR)
	: (e.target.feature.properties.name == "Malmö") ? map.addLayer(municipalitiesMAL)
	: (e.target.feature.properties.name == "Skane North and East") ? map.addLayer(municipalitiesSKN)
	: (e.target.feature.properties.name == "Skane South") ? map.addLayer(municipalitiesSKS)
	: (e.target.feature.properties.name == "Skane West") ? map.addLayer(municipalitiesSKW)
	: (e.target.feature.properties.name == "Stockholm City") ? map.addLayer(municipalitiesSTH)
	: (e.target.feature.properties.name == "Stockholm County") ? map.addLayer(municipalitiesSTC)
	: (e.target.feature.properties.name == "Södermanland") ? map.addLayer(municipalitiesSOD)
	: (e.target.feature.properties.name == "Uppsala") ? map.addLayer(municipalitiesUPP)
	: (e.target.feature.properties.name == "Värmland") ? map.addLayer(municipalitiesVAR)
	: (e.target.feature.properties.name == "Västerbotten") ? map.addLayer(municipalitiesVAB)
	: (e.target.feature.properties.name == "Västernorrland") ? map.addLayer(municipalitiesVAN)
	: (e.target.feature.properties.name == "Västmanland") ? map.addLayer(municipalitiesVAM)
	: (e.target.feature.properties.name == "Göteborg") ? map.addLayer(municipalitiesGTH)
	: (e.target.feature.properties.name == "Västra Götaland East") ? map.addLayer(municipalitiesVGE)
	: (e.target.feature.properties.name == "Västra Götaland North") ? map.addLayer(municipalitiesVGN)
	: (e.target.feature.properties.name == "Västra Götaland South") ? map.addLayer(municipalitiesVGS)
	: (e.target.feature.properties.name == "Västra Götaland West") ? map.addLayer(municipalitiesVGW)
	: (e.target.feature.properties.name == "Örebro") ? map.addLayer(municipalitiesORE)
	: map.addLayer(municipalitiesOST));
	
	document.getElementById("ResultsTableTitle").value = e.target.feature.properties.name;
	
	((e.target.feature.properties.name == "Blekinge") ? currResultsBLE.sort(sortFunction)
	: (e.target.feature.properties.name == "Dalarna") ? currResultsDAL.sort(sortFunction)
	: (e.target.feature.properties.name == "Gotland") ? currResultsGOT.sort(sortFunction)
	: (e.target.feature.properties.name == "Gävleborg") ? currResultsGAV.sort(sortFunction)
	: (e.target.feature.properties.name == "Halland") ? currResultsHAL.sort(sortFunction)
	: (e.target.feature.properties.name == "Jämtland") ? currResultsJAM.sort(sortFunction)
	: (e.target.feature.properties.name == "Jönköping") ? currResultsJON.sort(sortFunction)
	: (e.target.feature.properties.name == "Kalmar") ? currResultsKAL.sort(sortFunction)
	: (e.target.feature.properties.name == "Kronoberg") ? currResultsKRO.sort(sortFunction)
	: (e.target.feature.properties.name == "Norrbotten") ? currResultsNOR.sort(sortFunction)
	: (e.target.feature.properties.name == "Malmö") ? currResultsMAL.sort(sortFunction)
	: (e.target.feature.properties.name == "Skane North and East") ? currResultsSKN.sort(sortFunction)
	: (e.target.feature.properties.name == "Skane South") ? currResultsSKS.sort(sortFunction)
	: (e.target.feature.properties.name == "Skane West") ? currResultsSKW.sort(sortFunction)
	: (e.target.feature.properties.name == "Stockholm City") ? currResultsSTH.sort(sortFunction)
	: (e.target.feature.properties.name == "Stockholm County") ? currResultsSTC.sort(sortFunction)
	: (e.target.feature.properties.name == "Södermanland") ? currResultsSOD.sort(sortFunction)
	: (e.target.feature.properties.name == "Uppsala") ? currResultsUPP.sort(sortFunction)
	: (e.target.feature.properties.name == "Värmland") ? currResultsVAR.sort(sortFunction)
	: (e.target.feature.properties.name == "Västerbotten") ? currResultsVAB.sort(sortFunction)
	: (e.target.feature.properties.name == "Västernorrland") ? currResultsVAN.sort(sortFunction)
	: (e.target.feature.properties.name == "Västmanland") ? currResultsVAM.sort(sortFunction)
	: (e.target.feature.properties.name == "Göteborg") ? currResultsGTH.sort(sortFunction)
	: (e.target.feature.properties.name == "Västra Götaland East") ? currResultsVGE.sort(sortFunction)
	: (e.target.feature.properties.name == "Västra Götaland North") ? currResultsVGN.sort(sortFunction)
	: (e.target.feature.properties.name == "Västra Götaland South") ? currResultsVGS.sort(sortFunction)
	: (e.target.feature.properties.name == "Västra Götaland West") ? currResultsVGW.sort(sortFunction)
	: (e.target.feature.properties.name == "Örebro") ? currResultsORE.sort(sortFunction)
	: currResultsOST.sort(sortFunction));
	
	((e.target.feature.properties.name == "Blekinge") ? updateResultsTable(currResultsBLE, prevResultsBLE)
	: (e.target.feature.properties.name == "Dalarna") ? updateResultsTable(currResultsDAL, prevResultsDAL)
	: (e.target.feature.properties.name == "Gotland") ? updateResultsTable(currResultsGOT, prevResultsGOT)
	: (e.target.feature.properties.name == "Gävleborg") ? updateResultsTable(currResultsGAV, prevResultsGAV)
	: (e.target.feature.properties.name == "Halland") ? updateResultsTable(currResultsHAL, prevResultsHAL)
	: (e.target.feature.properties.name == "Jämtland") ? updateResultsTable(currResultsJAM, prevResultsJAM)
	: (e.target.feature.properties.name == "Jönköping") ? updateResultsTable(currResultsJON, prevResultsJON)
	: (e.target.feature.properties.name == "Kalmar") ? updateResultsTable(currResultsKAL, prevResultsKAL)
	: (e.target.feature.properties.name == "Kronoberg") ? updateResultsTable(currResultsKRO, prevResultsKRO)
	: (e.target.feature.properties.name == "Norrbotten") ? updateResultsTable(currResultsNOR, prevResultsNOR)
	: (e.target.feature.properties.name == "Malmö") ? updateResultsTable(currResultsMAL, prevResultsMAL)
	: (e.target.feature.properties.name == "Skane North and East") ? updateResultsTable(currResultsSKN, prevResultsSKN)
	: (e.target.feature.properties.name == "Skane South") ? updateResultsTable(currResultsSKS, prevResultsSKS)
	: (e.target.feature.properties.name == "Skane West") ? updateResultsTable(currResultsSKW, prevResultsSKW)
	: (e.target.feature.properties.name == "Stockholm City") ? updateResultsTable(currResultsSTH, prevResultsSTH)
	: (e.target.feature.properties.name == "Stockholm County") ? updateResultsTable(currResultsSTC, prevResultsSTC)
	: (e.target.feature.properties.name == "Södermanland") ? updateResultsTable(currResultsSOD, prevResultsSOD)
	: (e.target.feature.properties.name == "Uppsala") ? updateResultsTable(currResultsUPP, prevResultsUPP)
	: (e.target.feature.properties.name == "Värmland") ? updateResultsTable(currResultsVAR, prevResultsVAR)
	: (e.target.feature.properties.name == "Västerbotten") ? updateResultsTable(currResultsVAB, prevResultsVAB)
	: (e.target.feature.properties.name == "Västernorrland") ? updateResultsTable(currResultsVAN, prevResultsVAN)
	: (e.target.feature.properties.name == "Västmanland") ? updateResultsTable(currResultsVAM, prevResultsVAM)
	: (e.target.feature.properties.name == "Göteborg") ? updateResultsTable(currResultsGTH, prevResultsGTH)
	: (e.target.feature.properties.name == "Västra Götaland East") ? updateResultsTable(currResultsVGE, prevResultsVGE)
	: (e.target.feature.properties.name == "Västra Götaland North") ? updateResultsTable(currResultsVGN, prevResultsVGN)
	: (e.target.feature.properties.name == "Västra Götaland South") ? updateResultsTable(currResultsVGS, prevResultsVGS)
	: (e.target.feature.properties.name == "Västra Götaland West") ? updateResultsTable(currResultsVGW, prevResultsVGW)
	: (e.target.feature.properties.name == "Örebro") ? updateResultsTable(currResultsORE, prevResultsORE)
	: updateResultsTable(currResultsOST, prevResultsOST));
	
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
	
	
	var prevArray = [["Social Democratic",parseInt(layer.feature.properties.SocialDemocraticVotes, 10)],
	["Moderate",parseInt(layer.feature.properties.ModerateVotes, 10)],
	["Sweden Democrats",parseInt(layer.feature.properties.SwedenDemocratsVotes, 10)],
	["Centre",parseInt(layer.feature.properties.CentreVotes, 10)],
	["The Left",parseInt(layer.feature.properties.LeftVotes, 10)],
	["Christian Democrats",parseInt(layer.feature.properties.ChristianDemocratsVotes, 10)],
	["Liberals",parseInt(layer.feature.properties.LiberalVotes, 10)],
	["Green",parseInt(layer.feature.properties.GreenVotes, 10)]];
	prevArray.sort(sortFunction);
	
	var currArray = [["Social Democratic",parseInt(layer.feature.properties.SocialDemocraticVotes * SModifier, 10)],
	["Moderate",parseInt(layer.feature.properties.ModerateVotes * MModifier, 10)],
	["Sweden Democrats",parseInt(layer.feature.properties.SwedenDemocratsVotes * SDModifier, 10)],
	["Centre",parseInt(layer.feature.properties.CentreVotes * CModifier, 10)],
	["The Left",parseInt(layer.feature.properties.LeftVotes * VModifier, 10)],
	["Christian Democrats",parseInt(layer.feature.properties.ChristianDemocratsVotes * KDModifier, 10)],
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

