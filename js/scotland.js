var corner1 = L.latLng(60.916132, -10.922411), 
corner2 = L.latLng(54.093690, 3.579542), 
bounds = L.latLngBounds(corner1, corner2);

var stateMode = true;
var sainteLagueModification = 1.4;

var map = L.map('map', {
	center: [51.5, 8],
	zoom: 7,
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


prevSNPVoteShare = 40.3;
prevConservativeVoteShare = 23.5;
prevLabourVoteShare = 17.9;
prevGreenVoteShare = 8.1;
prevLibDemVoteShare = 5.1;
prevAlbaVoteShare = 1.7;
prevAFUVoteShare = 0.9;
prevRefUKVoteShare = 0.2;


SNPModifier = 1 + ((SNPprediction - prevSNPVoteShare) / prevSNPVoteShare);
ConservativeModifier = 1 + ((Conservativeprediction - prevConservativeVoteShare) / prevConservativeVoteShare);
LabourModifier = 1 + ((Labourprediction - prevLabourVoteShare) / prevLabourVoteShare);
GreenModifier = 1 + ((Greenprediction - prevGreenVoteShare) / prevGreenVoteShare);
LibDemModifier = 1 + ((LibDemprediction - prevLibDemVoteShare) / prevLibDemVoteShare);
AlbaModifier = 1 + ((Albaprediction - prevAlbaVoteShare) / prevAlbaVoteShare);
AFUModifier = 1 + ((AFUprediction - prevAFUVoteShare) / prevAFUVoteShare);;
RefUKModifier = 1 + ((RefUKprediction - prevRefUKVoteShare) / prevRefUKVoteShare);;


var constituencies = L.geoJson(holyroodConstituencies, {
	style: styleConstituencies,
	onEachFeature: onEachFeatureConstituencies
}).addTo(map);

var districtsHNI = L.geoJson(districtsHNI, {
	style: styleDistricts,
	onEachFeature: onEachFeatureMunicipalities
});

var districtsHSO = L.geoJson(districtsHSO, {
	style: styleDistricts,
	onEachFeature: onEachFeatureMunicipalities
});

var districtsGRA = L.geoJson(districtsGRA, {
	style: styleDistricts,
	onEachFeature: onEachFeatureMunicipalities
});

var districtsTAY = L.geoJson(districtsTAY, {
	style: styleDistricts,
	onEachFeature: onEachFeatureMunicipalities
});

var districtsFOR = L.geoJson(districtsFOR, {
	style: styleDistricts,
	onEachFeature: onEachFeatureMunicipalities
});

var districtsFIF = L.geoJson(districtsFIF, {
	style: styleDistricts,
	onEachFeature: onEachFeatureMunicipalities
});

var districtsEDN = L.geoJson(districtsEDN, {
	style: styleDistricts,
	onEachFeature: onEachFeatureMunicipalities
});

var districtsLOB = L.geoJson(districtsLOB, {
	style: styleDistricts,
	onEachFeature: onEachFeatureMunicipalities
});

var districtsDMG = L.geoJson(districtsDMG, {
	style: styleDistricts,
	onEachFeature: onEachFeatureMunicipalities
});

var districtsAYR = L.geoJson(districtsAYR, {
	style: styleDistricts,
	onEachFeature: onEachFeatureMunicipalities
});

var districtsCLY = L.geoJson(districtsCLY, {
	style: styleDistricts,
	onEachFeature: onEachFeatureMunicipalities
});

var districtsGLA = L.geoJson(districtsGLA, {
	style: styleDistricts,
	onEachFeature: onEachFeatureMunicipalities
});

var districtsLAN = L.geoJson(districtsLAN, {
	style: styleDistricts,
	onEachFeature: onEachFeatureMunicipalities
});


prevResultsHNI = fillConstituencyArrays(districtsHNI, true);
prevResultsHSO = fillConstituencyArrays(districtsHSO, true);
prevResultsGRA = fillConstituencyArrays(districtsGRA, true);
prevResultsTAY = fillConstituencyArrays(districtsTAY, true);
prevResultsFOR = fillConstituencyArrays(districtsFOR, true);
prevResultsFIF = fillConstituencyArrays(districtsFIF, true);
prevResultsEDN = fillConstituencyArrays(districtsEDN, true);
prevResultsLOB = fillConstituencyArrays(districtsLOB, true);
prevResultsDMG = fillConstituencyArrays(districtsDMG, true);
prevResultsAYR = fillConstituencyArrays(districtsAYR, true);
prevResultsCLY = fillConstituencyArrays(districtsCLY, true);
prevResultsGLA = fillConstituencyArrays(districtsGLA, true);
prevResultsLAN = fillConstituencyArrays(districtsLAN, true);



currResultsHNI = fillConstituencyArrays(districtsHNI, false);
currResultsHSO = fillConstituencyArrays(districtsHSO, false);
currResultsGRA = fillConstituencyArrays(districtsGRA, false);
currResultsTAY = fillConstituencyArrays(districtsTAY, false);
currResultsFOR = fillConstituencyArrays(districtsFOR, false);
currResultsFIF = fillConstituencyArrays(districtsFIF, false);
currResultsEDN = fillConstituencyArrays(districtsEDN, false);
currResultsLOB = fillConstituencyArrays(districtsLOB, false);
currResultsDMG = fillConstituencyArrays(districtsDMG, false);
currResultsAYR = fillConstituencyArrays(districtsAYR, false);
currResultsCLY = fillConstituencyArrays(districtsCLY, false);
currResultsGLA = fillConstituencyArrays(districtsGLA, false);
currResultsLAN = fillConstituencyArrays(districtsLAN, false);



var currNationalResults;
prevNationalResults = fillNationalArray();

var SNPThreshold = true, ConservativeThreshold = true, LabourThreshold = true, GreenThreshold = true, LibDemThreshold = true, AlbaThreshold = false, AFUThreshold = false, RefUKThreshold = false;

prevResultsHNI.sort(sortFunctionC);
prevResultsHSO.sort(sortFunctionC);
prevResultsGRA.sort(sortFunctionC);
prevResultsTAY.sort(sortFunctionC);
prevResultsFOR.sort(sortFunctionC);
prevResultsFIF.sort(sortFunctionC);
prevResultsEDN.sort(sortFunctionC);
prevResultsLOB.sort(sortFunctionC);
prevResultsDMG.sort(sortFunctionC);
prevResultsAYR.sort(sortFunctionC);
prevResultsCLY.sort(sortFunctionC);
prevResultsGLA.sort(sortFunctionC);
prevResultsLAN.sort(sortFunctionC);

prevNationalResults.sort(sortFunctionC);

thresholdImplementor(0, AlbaThreshold, true);
thresholdImplementor(1, AFUThreshold, true);
thresholdImplementor(2, ConservativeThreshold, true);
thresholdImplementor(3, GreenThreshold, true);
thresholdImplementor(4, LabourThreshold, true);
thresholdImplementor(5, LibDemThreshold, true);
thresholdImplementor(6, RefUKThreshold, true);
thresholdImplementor(7, SNPThreshold, true);

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
		
	var noOfAdjustmentSeats = 26;
	
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
		
		prevResultsAYR[partyIndex][2] = partyArray[0][2];
		prevResultsCLY[partyIndex][2] = partyArray[1][2];
		prevResultsDMG[partyIndex][2] = partyArray[2][2];
		prevResultsEDN[partyIndex][2] = partyArray[3][2];
		prevResultsFIF[partyIndex][2] = partyArray[4][2];
		prevResultsFOR[partyIndex][2] = partyArray[5][2];
		prevResultsGLA[partyIndex][2] = partyArray[6][2];
		prevResultsGRA[partyIndex][2] = partyArray[7][2];
		prevResultsHNI[partyIndex][2] = partyArray[8][2];
		prevResultsHSO[partyIndex][2] = partyArray[9][2];
		prevResultsLAN[partyIndex][2] = partyArray[10][2];
		prevResultsLOB[partyIndex][2] = partyArray[11][2];
		prevResultsTAY[partyIndex][2] = partyArray[12][2];
		
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
			partyArray[i][3] = (partyArray[i][1] / (2 * partyArray[i][2] + 1));
			
		}

		adjustmentSeatsToAllocate = currNationalResults[partyIndex][2] - totalDirectSeats;

		for (var i = 0; i < adjustmentSeatsToAllocate; i++)
		{
			partyArray.sort(sortFunctionB)
			partyArray[0][2] = partyArray[0][2] + 1;
			partyArray[0][3] = partyArray[0][1] / (2 * partyArray[0][2] + 1);
		}
		partyArray.sort(sortFunctionC);
		
		currResultsAYR[partyIndex][2] = partyArray[0][2];
		currResultsCLY[partyIndex][2] = partyArray[1][2];
		currResultsDMG[partyIndex][2] = partyArray[2][2];
		currResultsEDN[partyIndex][2] = partyArray[3][2];
		currResultsFIF[partyIndex][2] = partyArray[4][2];
		currResultsFOR[partyIndex][2] = partyArray[5][2];
		currResultsGLA[partyIndex][2] = partyArray[6][2];
		currResultsGRA[partyIndex][2] = partyArray[7][2];
		currResultsHNI[partyIndex][2] = partyArray[8][2];
		currResultsHSO[partyIndex][2] = partyArray[9][2];
		currResultsLAN[partyIndex][2] = partyArray[10][2];
		currResultsLOB[partyIndex][2] = partyArray[11][2];
		currResultsTAY[partyIndex][2] = partyArray[12][2];
		
	}

}

function nationalResultsToConstituencyLevelInit(initialisation) {
	
	if (initialisation)
	{
		prevResultsHNI.sort(sortFunctionC);
		prevResultsHSO.sort(sortFunctionC);
		prevResultsGRA.sort(sortFunctionC);
		prevResultsTAY.sort(sortFunctionC);
		prevResultsFOR.sort(sortFunctionC);
		prevResultsFIF.sort(sortFunctionC);
		prevResultsEDN.sort(sortFunctionC);
		prevResultsLOB.sort(sortFunctionC);
		prevResultsDMG.sort(sortFunctionC);
		prevResultsAYR.sort(sortFunctionC);
		prevResultsCLY.sort(sortFunctionC);
		prevResultsGLA.sort(sortFunctionC);
		prevResultsLAN.sort(sortFunctionC);
		prevNationalResults.sort(sortFunctionC);
		
		var AlbaArray  = [["AYR",prevResultsAYR[0][1], prevResultsAYR[0][2], prevResultsAYR[0][1]],
					["CLY",prevResultsCLY[0][1], prevResultsCLY[0][2], prevResultsCLY[0][1]],
					["DMG",prevResultsDMG[0][1], prevResultsDMG[0][2], prevResultsDMG[0][1]],
					["EDN",prevResultsEDN[0][1], prevResultsEDN[0][2], prevResultsEDN[0][1]],
					["FIF",prevResultsFIF[0][1], prevResultsFIF[0][2], prevResultsFIF[0][1]],
					["FOR",prevResultsFOR[0][1], prevResultsFOR[0][2], prevResultsFOR[0][1]],
					["GLA",prevResultsGLA[0][1], prevResultsGLA[0][2], prevResultsGLA[0][1]],
					["GRA",prevResultsGRA[0][1], prevResultsGRA[0][2], prevResultsGRA[0][1]],
					["HNI",prevResultsHNI[0][1], prevResultsHNI[0][2], prevResultsHNI[0][1]],
					["HSO",prevResultsHSO[0][1], prevResultsHSO[0][2], prevResultsHSO[0][1]],
					["LAN",prevResultsLAN[0][1], prevResultsLAN[0][2], prevResultsLAN[0][1]],
					["LOB",prevResultsLOB[0][1], prevResultsLOB[0][2], prevResultsLOB[0][1]],
					["TAY",prevResultsTAY[0][1], prevResultsTAY[0][2], prevResultsTAY[0][1]]];

		var AFUArray  = [["AYR",prevResultsAYR[1][1], prevResultsAYR[1][2], prevResultsAYR[1][1]],
					["CLY",prevResultsCLY[1][1], prevResultsCLY[1][2], prevResultsCLY[1][1]],
					["DMG",prevResultsDMG[1][1], prevResultsDMG[1][2], prevResultsDMG[1][1]],
					["EDN",prevResultsEDN[1][1], prevResultsEDN[1][2], prevResultsEDN[1][1]],
					["FIF",prevResultsFIF[1][1], prevResultsFIF[1][2], prevResultsFIF[1][1]],
					["FOR",prevResultsFOR[1][1], prevResultsFOR[1][2], prevResultsFOR[1][1]],
					["GLA",prevResultsGLA[1][1], prevResultsGLA[1][2], prevResultsGLA[1][1]],
					["GRA",prevResultsGRA[1][1], prevResultsGRA[1][2], prevResultsGRA[1][1]],
					["HNI",prevResultsHNI[1][1], prevResultsHNI[1][2], prevResultsHNI[1][1]],
					["HSO",prevResultsHSO[1][1], prevResultsHSO[1][2], prevResultsHSO[1][1]],
					["LAN",prevResultsLAN[1][1], prevResultsLAN[1][2], prevResultsLAN[1][1]],
					["LOB",prevResultsLOB[1][1], prevResultsLOB[1][2], prevResultsLOB[1][1]],
					["TAY",prevResultsTAY[1][1], prevResultsTAY[1][2], prevResultsTAY[1][1]]];

		var ConservativeArray  = [["AYR",prevResultsAYR[2][1], prevResultsAYR[2][2], prevResultsAYR[2][1]],
					["CLY",prevResultsCLY[2][1], prevResultsCLY[2][2], prevResultsCLY[2][1]],
					["DMG",prevResultsDMG[2][1], prevResultsDMG[2][2], prevResultsDMG[2][1]],
					["EDN",prevResultsEDN[2][1], prevResultsEDN[2][2], prevResultsEDN[2][1]],
					["FIF",prevResultsFIF[2][1], prevResultsFIF[2][2], prevResultsFIF[2][1]],
					["FOR",prevResultsFOR[2][1], prevResultsFOR[2][2], prevResultsFOR[2][1]],
					["GLA",prevResultsGLA[2][1], prevResultsGLA[2][2], prevResultsGLA[2][1]],
					["GRA",prevResultsGRA[2][1], prevResultsGRA[2][2], prevResultsGRA[2][1]],
					["HNI",prevResultsHNI[2][1], prevResultsHNI[2][2], prevResultsHNI[2][1]],
					["HSO",prevResultsHSO[2][1], prevResultsHSO[2][2], prevResultsHSO[2][1]],
					["LAN",prevResultsLAN[2][1], prevResultsLAN[2][2], prevResultsLAN[2][1]],
					["LOB",prevResultsLOB[2][1], prevResultsLOB[2][2], prevResultsLOB[2][1]],
					["TAY",prevResultsTAY[2][1], prevResultsTAY[2][2], prevResultsTAY[2][1]]];

		var GreenArray  = [["AYR",prevResultsAYR[3][1], prevResultsAYR[3][2], prevResultsAYR[3][1]],
					["CLY",prevResultsCLY[3][1], prevResultsCLY[3][2], prevResultsCLY[3][1]],
					["DMG",prevResultsDMG[3][1], prevResultsDMG[3][2], prevResultsDMG[3][1]],
					["EDN",prevResultsEDN[3][1], prevResultsEDN[3][2], prevResultsEDN[3][1]],
					["FIF",prevResultsFIF[3][1], prevResultsFIF[3][2], prevResultsFIF[3][1]],
					["FOR",prevResultsFOR[3][1], prevResultsFOR[3][2], prevResultsFOR[3][1]],
					["GLA",prevResultsGLA[3][1], prevResultsGLA[3][2], prevResultsGLA[3][1]],
					["GRA",prevResultsGRA[3][1], prevResultsGRA[3][2], prevResultsGRA[3][1]],
					["HNI",prevResultsHNI[3][1], prevResultsHNI[3][2], prevResultsHNI[3][1]],
					["HSO",prevResultsHSO[3][1], prevResultsHSO[3][2], prevResultsHSO[3][1]],
					["LAN",prevResultsLAN[3][1], prevResultsLAN[3][2], prevResultsLAN[3][1]],
					["LOB",prevResultsLOB[3][1], prevResultsLOB[3][2], prevResultsLOB[3][1]],
					["TAY",prevResultsTAY[3][1], prevResultsTAY[3][2], prevResultsTAY[3][1]]];

		var LabourArray  = [["AYR",prevResultsAYR[4][1], prevResultsAYR[4][2], prevResultsAYR[4][1]],
					["CLY",prevResultsCLY[4][1], prevResultsCLY[4][2], prevResultsCLY[4][1]],
					["DMG",prevResultsDMG[4][1], prevResultsDMG[4][2], prevResultsDMG[4][1]],
					["EDN",prevResultsEDN[4][1], prevResultsEDN[4][2], prevResultsEDN[4][1]],
					["FIF",prevResultsFIF[4][1], prevResultsFIF[4][2], prevResultsFIF[4][1]],
					["FOR",prevResultsFOR[4][1], prevResultsFOR[4][2], prevResultsFOR[4][1]],
					["GLA",prevResultsGLA[4][1], prevResultsGLA[4][2], prevResultsGLA[4][1]],
					["GRA",prevResultsGRA[4][1], prevResultsGRA[4][2], prevResultsGRA[4][1]],
					["HNI",prevResultsHNI[4][1], prevResultsHNI[4][2], prevResultsHNI[4][1]],
					["HSO",prevResultsHSO[4][1], prevResultsHSO[4][2], prevResultsHSO[4][1]],
					["LAN",prevResultsLAN[4][1], prevResultsLAN[4][2], prevResultsLAN[4][1]],
					["LOB",prevResultsLOB[4][1], prevResultsLOB[4][2], prevResultsLOB[4][1]],
					["TAY",prevResultsTAY[4][1], prevResultsTAY[4][2], prevResultsTAY[4][1]]];

		var LibDemArray  = [["AYR",prevResultsAYR[5][1], prevResultsAYR[5][2], prevResultsAYR[5][1]],
					["CLY",prevResultsCLY[5][1], prevResultsCLY[5][2], prevResultsCLY[5][1]],
					["DMG",prevResultsDMG[5][1], prevResultsDMG[5][2], prevResultsDMG[5][1]],
					["EDN",prevResultsEDN[5][1], prevResultsEDN[5][2], prevResultsEDN[5][1]],
					["FIF",prevResultsFIF[5][1], prevResultsFIF[5][2], prevResultsFIF[5][1]],
					["FOR",prevResultsFOR[5][1], prevResultsFOR[5][2], prevResultsFOR[5][1]],
					["GLA",prevResultsGLA[5][1], prevResultsGLA[5][2], prevResultsGLA[5][1]],
					["GRA",prevResultsGRA[5][1], prevResultsGRA[5][2], prevResultsGRA[5][1]],
					["HNI",prevResultsHNI[5][1], prevResultsHNI[5][2], prevResultsHNI[5][1]],
					["HSO",prevResultsHSO[5][1], prevResultsHSO[5][2], prevResultsHSO[5][1]],
					["LAN",prevResultsLAN[5][1], prevResultsLAN[5][2], prevResultsLAN[5][1]],
					["LOB",prevResultsLOB[5][1], prevResultsLOB[5][2], prevResultsLOB[5][1]],
					["TAY",prevResultsTAY[5][1], prevResultsTAY[5][2], prevResultsTAY[5][1]]];

		var RefUKArray  = [["AYR",prevResultsAYR[6][1], prevResultsAYR[6][2], prevResultsAYR[6][1]],
					["CLY",prevResultsCLY[6][1], prevResultsCLY[6][2], prevResultsCLY[6][1]],
					["DMG",prevResultsDMG[6][1], prevResultsDMG[6][2], prevResultsDMG[6][1]],
					["EDN",prevResultsEDN[6][1], prevResultsEDN[6][2], prevResultsEDN[6][1]],
					["FIF",prevResultsFIF[6][1], prevResultsFIF[6][2], prevResultsFIF[6][1]],
					["FOR",prevResultsFOR[6][1], prevResultsFOR[6][2], prevResultsFOR[6][1]],
					["GLA",prevResultsGLA[6][1], prevResultsGLA[6][2], prevResultsGLA[6][1]],
					["GRA",prevResultsGRA[6][1], prevResultsGRA[6][2], prevResultsGRA[6][1]],
					["HNI",prevResultsHNI[6][1], prevResultsHNI[6][2], prevResultsHNI[6][1]],
					["HSO",prevResultsHSO[6][1], prevResultsHSO[6][2], prevResultsHSO[6][1]],
					["LAN",prevResultsLAN[6][1], prevResultsLAN[6][2], prevResultsLAN[6][1]],
					["LOB",prevResultsLOB[6][1], prevResultsLOB[6][2], prevResultsLOB[6][1]],
					["TAY",prevResultsTAY[6][1], prevResultsTAY[6][2], prevResultsTAY[6][1]]];

		var SNPArray  = [["AYR",prevResultsAYR[7][1], prevResultsAYR[7][2], prevResultsAYR[7][1]],
					["CLY",prevResultsCLY[7][1], prevResultsCLY[7][2], prevResultsCLY[7][1]],
					["DMG",prevResultsDMG[7][1], prevResultsDMG[7][2], prevResultsDMG[7][1]],
					["EDN",prevResultsEDN[7][1], prevResultsEDN[7][2], prevResultsEDN[7][1]],
					["FIF",prevResultsFIF[7][1], prevResultsFIF[7][2], prevResultsFIF[7][1]],
					["FOR",prevResultsFOR[7][1], prevResultsFOR[7][2], prevResultsFOR[7][1]],
					["GLA",prevResultsGLA[7][1], prevResultsGLA[7][2], prevResultsGLA[7][1]],
					["GRA",prevResultsGRA[7][1], prevResultsGRA[7][2], prevResultsGRA[7][1]],
					["HNI",prevResultsHNI[7][1], prevResultsHNI[7][2], prevResultsHNI[7][1]],
					["HSO",prevResultsHSO[7][1], prevResultsHSO[7][2], prevResultsHSO[7][1]],
					["LAN",prevResultsLAN[7][1], prevResultsLAN[7][2], prevResultsLAN[7][1]],
					["LOB",prevResultsLOB[7][1], prevResultsLOB[7][2], prevResultsLOB[7][1]],
					["TAY",prevResultsTAY[7][1], prevResultsTAY[7][2], prevResultsTAY[7][1]]];
		
		nationalResultsToConstituencyLevelCalculation(initialisation, AlbaArray, 0);
		nationalResultsToConstituencyLevelCalculation(initialisation, AFUArray, 1);
		nationalResultsToConstituencyLevelCalculation(initialisation, ConservativeArray, 2);
		nationalResultsToConstituencyLevelCalculation(initialisation, GreenArray, 3);
		nationalResultsToConstituencyLevelCalculation(initialisation, LabourArray, 4);
		nationalResultsToConstituencyLevelCalculation(initialisation, LibDemArray, 5);
		nationalResultsToConstituencyLevelCalculation(initialisation, RefUKArray, 6);
		nationalResultsToConstituencyLevelCalculation(initialisation, SNPArray, 7);
	}
	else
	{
		currResultsHNI.sort(sortFunctionC);
		currResultsHSO.sort(sortFunctionC);
		currResultsGRA.sort(sortFunctionC);
		currResultsTAY.sort(sortFunctionC);
		currResultsFOR.sort(sortFunctionC);
		currResultsFIF.sort(sortFunctionC);
		currResultsEDN.sort(sortFunctionC);
		currResultsLOB.sort(sortFunctionC);
		currResultsDMG.sort(sortFunctionC);
		currResultsAYR.sort(sortFunctionC);
		currResultsCLY.sort(sortFunctionC);
		currResultsGLA.sort(sortFunctionC);
		currResultsLAN.sort(sortFunctionC);
		currNationalResults.sort(sortFunctionC);
		
		var AlbaArray  = [["AYR",currResultsAYR[0][1], currResultsAYR[0][2], currResultsAYR[0][1]],
					["CLY",currResultsCLY[0][1], currResultsCLY[0][2], currResultsCLY[0][1]],
					["DMG",currResultsDMG[0][1], currResultsDMG[0][2], currResultsDMG[0][1]],
					["EDN",currResultsEDN[0][1], currResultsEDN[0][2], currResultsEDN[0][1]],
					["FIF",currResultsFIF[0][1], currResultsFIF[0][2], currResultsFIF[0][1]],
					["FOR",currResultsFOR[0][1], currResultsFOR[0][2], currResultsFOR[0][1]],
					["GLA",currResultsGLA[0][1], currResultsGLA[0][2], currResultsGLA[0][1]],
					["GRA",currResultsGRA[0][1], currResultsGRA[0][2], currResultsGRA[0][1]],
					["HNI",currResultsHNI[0][1], currResultsHNI[0][2], currResultsHNI[0][1]],
					["HSO",currResultsHSO[0][1], currResultsHSO[0][2], currResultsHSO[0][1]],
					["LAN",currResultsLAN[0][1], currResultsLAN[0][2], currResultsLAN[0][1]],
					["LOB",currResultsLOB[0][1], currResultsLOB[0][2], currResultsLOB[0][1]],
					["TAY",currResultsTAY[0][1], currResultsTAY[0][2], currResultsTAY[0][1]]];

		var AFUArray  = [["AYR",currResultsAYR[1][1], currResultsAYR[1][2], currResultsAYR[1][1]],
					["CLY",currResultsCLY[1][1], currResultsCLY[1][2], currResultsCLY[1][1]],
					["DMG",currResultsDMG[1][1], currResultsDMG[1][2], currResultsDMG[1][1]],
					["EDN",currResultsEDN[1][1], currResultsEDN[1][2], currResultsEDN[1][1]],
					["FIF",currResultsFIF[1][1], currResultsFIF[1][2], currResultsFIF[1][1]],
					["FOR",currResultsFOR[1][1], currResultsFOR[1][2], currResultsFOR[1][1]],
					["GLA",currResultsGLA[1][1], currResultsGLA[1][2], currResultsGLA[1][1]],
					["GRA",currResultsGRA[1][1], currResultsGRA[1][2], currResultsGRA[1][1]],
					["HNI",currResultsHNI[1][1], currResultsHNI[1][2], currResultsHNI[1][1]],
					["HSO",currResultsHSO[1][1], currResultsHSO[1][2], currResultsHSO[1][1]],
					["LAN",currResultsLAN[1][1], currResultsLAN[1][2], currResultsLAN[1][1]],
					["LOB",currResultsLOB[1][1], currResultsLOB[1][2], currResultsLOB[1][1]],
					["TAY",currResultsTAY[1][1], currResultsTAY[1][2], currResultsTAY[1][1]]];

		var ConservativeArray  = [["AYR",currResultsAYR[2][1], currResultsAYR[2][2], currResultsAYR[2][1]],
					["CLY",currResultsCLY[2][1], currResultsCLY[2][2], currResultsCLY[2][1]],
					["DMG",currResultsDMG[2][1], currResultsDMG[2][2], currResultsDMG[2][1]],
					["EDN",currResultsEDN[2][1], currResultsEDN[2][2], currResultsEDN[2][1]],
					["FIF",currResultsFIF[2][1], currResultsFIF[2][2], currResultsFIF[2][1]],
					["FOR",currResultsFOR[2][1], currResultsFOR[2][2], currResultsFOR[2][1]],
					["GLA",currResultsGLA[2][1], currResultsGLA[2][2], currResultsGLA[2][1]],
					["GRA",currResultsGRA[2][1], currResultsGRA[2][2], currResultsGRA[2][1]],
					["HNI",currResultsHNI[2][1], currResultsHNI[2][2], currResultsHNI[2][1]],
					["HSO",currResultsHSO[2][1], currResultsHSO[2][2], currResultsHSO[2][1]],
					["LAN",currResultsLAN[2][1], currResultsLAN[2][2], currResultsLAN[2][1]],
					["LOB",currResultsLOB[2][1], currResultsLOB[2][2], currResultsLOB[2][1]],
					["TAY",currResultsTAY[2][1], currResultsTAY[2][2], currResultsTAY[2][1]]];

		var GreenArray  = [["AYR",currResultsAYR[3][1], currResultsAYR[3][2], currResultsAYR[3][1]],
					["CLY",currResultsCLY[3][1], currResultsCLY[3][2], currResultsCLY[3][1]],
					["DMG",currResultsDMG[3][1], currResultsDMG[3][2], currResultsDMG[3][1]],
					["EDN",currResultsEDN[3][1], currResultsEDN[3][2], currResultsEDN[3][1]],
					["FIF",currResultsFIF[3][1], currResultsFIF[3][2], currResultsFIF[3][1]],
					["FOR",currResultsFOR[3][1], currResultsFOR[3][2], currResultsFOR[3][1]],
					["GLA",currResultsGLA[3][1], currResultsGLA[3][2], currResultsGLA[3][1]],
					["GRA",currResultsGRA[3][1], currResultsGRA[3][2], currResultsGRA[3][1]],
					["HNI",currResultsHNI[3][1], currResultsHNI[3][2], currResultsHNI[3][1]],
					["HSO",currResultsHSO[3][1], currResultsHSO[3][2], currResultsHSO[3][1]],
					["LAN",currResultsLAN[3][1], currResultsLAN[3][2], currResultsLAN[3][1]],
					["LOB",currResultsLOB[3][1], currResultsLOB[3][2], currResultsLOB[3][1]],
					["TAY",currResultsTAY[3][1], currResultsTAY[3][2], currResultsTAY[3][1]]];

		var LabourArray  = [["AYR",currResultsAYR[4][1], currResultsAYR[4][2], currResultsAYR[4][1]],
					["CLY",currResultsCLY[4][1], currResultsCLY[4][2], currResultsCLY[4][1]],
					["DMG",currResultsDMG[4][1], currResultsDMG[4][2], currResultsDMG[4][1]],
					["EDN",currResultsEDN[4][1], currResultsEDN[4][2], currResultsEDN[4][1]],
					["FIF",currResultsFIF[4][1], currResultsFIF[4][2], currResultsFIF[4][1]],
					["FOR",currResultsFOR[4][1], currResultsFOR[4][2], currResultsFOR[4][1]],
					["GLA",currResultsGLA[4][1], currResultsGLA[4][2], currResultsGLA[4][1]],
					["GRA",currResultsGRA[4][1], currResultsGRA[4][2], currResultsGRA[4][1]],
					["HNI",currResultsHNI[4][1], currResultsHNI[4][2], currResultsHNI[4][1]],
					["HSO",currResultsHSO[4][1], currResultsHSO[4][2], currResultsHSO[4][1]],
					["LAN",currResultsLAN[4][1], currResultsLAN[4][2], currResultsLAN[4][1]],
					["LOB",currResultsLOB[4][1], currResultsLOB[4][2], currResultsLOB[4][1]],
					["TAY",currResultsTAY[4][1], currResultsTAY[4][2], currResultsTAY[4][1]]];

		var LibDemArray  = [["AYR",currResultsAYR[5][1], currResultsAYR[5][2], currResultsAYR[5][1]],
					["CLY",currResultsCLY[5][1], currResultsCLY[5][2], currResultsCLY[5][1]],
					["DMG",currResultsDMG[5][1], currResultsDMG[5][2], currResultsDMG[5][1]],
					["EDN",currResultsEDN[5][1], currResultsEDN[5][2], currResultsEDN[5][1]],
					["FIF",currResultsFIF[5][1], currResultsFIF[5][2], currResultsFIF[5][1]],
					["FOR",currResultsFOR[5][1], currResultsFOR[5][2], currResultsFOR[5][1]],
					["GLA",currResultsGLA[5][1], currResultsGLA[5][2], currResultsGLA[5][1]],
					["GRA",currResultsGRA[5][1], currResultsGRA[5][2], currResultsGRA[5][1]],
					["HNI",currResultsHNI[5][1], currResultsHNI[5][2], currResultsHNI[5][1]],
					["HSO",currResultsHSO[5][1], currResultsHSO[5][2], currResultsHSO[5][1]],
					["LAN",currResultsLAN[5][1], currResultsLAN[5][2], currResultsLAN[5][1]],
					["LOB",currResultsLOB[5][1], currResultsLOB[5][2], currResultsLOB[5][1]],
					["TAY",currResultsTAY[5][1], currResultsTAY[5][2], currResultsTAY[5][1]]];

		var RefUKArray  = [["AYR",currResultsAYR[6][1], currResultsAYR[6][2], currResultsAYR[6][1]],
					["CLY",currResultsCLY[6][1], currResultsCLY[6][2], currResultsCLY[6][1]],
					["DMG",currResultsDMG[6][1], currResultsDMG[6][2], currResultsDMG[6][1]],
					["EDN",currResultsEDN[6][1], currResultsEDN[6][2], currResultsEDN[6][1]],
					["FIF",currResultsFIF[6][1], currResultsFIF[6][2], currResultsFIF[6][1]],
					["FOR",currResultsFOR[6][1], currResultsFOR[6][2], currResultsFOR[6][1]],
					["GLA",currResultsGLA[6][1], currResultsGLA[6][2], currResultsGLA[6][1]],
					["GRA",currResultsGRA[6][1], currResultsGRA[6][2], currResultsGRA[6][1]],
					["HNI",currResultsHNI[6][1], currResultsHNI[6][2], currResultsHNI[6][1]],
					["HSO",currResultsHSO[6][1], currResultsHSO[6][2], currResultsHSO[6][1]],
					["LAN",currResultsLAN[6][1], currResultsLAN[6][2], currResultsLAN[6][1]],
					["LOB",currResultsLOB[6][1], currResultsLOB[6][2], currResultsLOB[6][1]],
					["TAY",currResultsTAY[6][1], currResultsTAY[6][2], currResultsTAY[6][1]]];

		var SNPArray  = [["AYR",currResultsAYR[7][1], currResultsAYR[7][2], currResultsAYR[7][1]],
					["CLY",currResultsCLY[7][1], currResultsCLY[7][2], currResultsCLY[7][1]],
					["DMG",currResultsDMG[7][1], currResultsDMG[7][2], currResultsDMG[7][1]],
					["EDN",currResultsEDN[7][1], currResultsEDN[7][2], currResultsEDN[7][1]],
					["FIF",currResultsFIF[7][1], currResultsFIF[7][2], currResultsFIF[7][1]],
					["FOR",currResultsFOR[7][1], currResultsFOR[7][2], currResultsFOR[7][1]],
					["GLA",currResultsGLA[7][1], currResultsGLA[7][2], currResultsGLA[7][1]],
					["GRA",currResultsGRA[7][1], currResultsGRA[7][2], currResultsGRA[7][1]],
					["HNI",currResultsHNI[7][1], currResultsHNI[7][2], currResultsHNI[7][1]],
					["HSO",currResultsHSO[7][1], currResultsHSO[7][2], currResultsHSO[7][1]],
					["LAN",currResultsLAN[7][1], currResultsLAN[7][2], currResultsLAN[7][1]],
					["LOB",currResultsLOB[7][1], currResultsLOB[7][2], currResultsLOB[7][1]],
					["TAY",currResultsTAY[7][1], currResultsTAY[7][2], currResultsTAY[7][1]]];
		
		nationalResultsToConstituencyLevelCalculation(initialisation, AlbaArray, 0);
		nationalResultsToConstituencyLevelCalculation(initialisation, AFUArray, 1);
		nationalResultsToConstituencyLevelCalculation(initialisation, ConservativeArray, 2);
		nationalResultsToConstituencyLevelCalculation(initialisation, GreenArray, 3);
		nationalResultsToConstituencyLevelCalculation(initialisation, LabourArray, 4);
		nationalResultsToConstituencyLevelCalculation(initialisation, LibDemArray, 5);
		nationalResultsToConstituencyLevelCalculation(initialisation, RefUKArray, 6);
		nationalResultsToConstituencyLevelCalculation(initialisation, SNPArray, 7);
	}
	
}

function seatCalculation(initialisation) {
	
	if (initialisation){
		constituencies.eachLayer(function(currentLayer){
			((currentLayer.feature.properties.Constituency == "Highlands North and Islands") ? initialStateSainteLague(prevResultsHNI, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Highlands South") ? initialStateSainteLague(prevResultsHSO, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Grampian") ? initialStateSainteLague(prevResultsGRA, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Tayside") ? initialStateSainteLague(prevResultsTAY, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Forth") ? initialStateSainteLague(prevResultsFOR, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Fife") ? initialStateSainteLague(prevResultsFIF, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Edinburgh") ? initialStateSainteLague(prevResultsEDN, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Lothian and Borders") ? initialStateSainteLague(prevResultsLOB, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Dumfries and Galloway") ? initialStateSainteLague(prevResultsDMG, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Ayrshire") ? initialStateSainteLague(prevResultsAYR, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Clyde") ? initialStateSainteLague(prevResultsCLY, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Glasgow") ? initialStateSainteLague(prevResultsGLA, currentLayer.feature.properties.DirectSeats, initialisation)
			: initialStateSainteLague(prevResultsLAN, currentLayer.feature.properties.DirectSeats, initialisation));
		});
			
		nationalAdjustmentSeatAllocator(initialisation);
		nationalResultsToConstituencyLevelInit(initialisation);
		
	}
	else {
		constituencies.eachLayer(function(currentLayer){
			((currentLayer.feature.properties.Constituency == "Highlands North and Islands") ? initialStateSainteLague(currResultsHNI, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Highlands South") ? initialStateSainteLague(currResultsHSO, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Grampian") ? initialStateSainteLague(currResultsGRA, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Tayside") ? initialStateSainteLague(currResultsTAY, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Forth") ? initialStateSainteLague(currResultsFOR, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Fife") ? initialStateSainteLague(currResultsFIF, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Edinburgh") ? initialStateSainteLague(currResultsEDN, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Lothian and Borders") ? initialStateSainteLague(currResultsLOB, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Dumfries and Galloway") ? initialStateSainteLague(currResultsDMG, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Ayrshire") ? initialStateSainteLague(currResultsAYR, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Clyde") ? initialStateSainteLague(currResultsCLY, currentLayer.feature.properties.DirectSeats, initialisation)
			: (currentLayer.feature.properties.Constituency == "Glasgow") ? initialStateSainteLague(currResultsGLA, currentLayer.feature.properties.DirectSeats, initialisation)
			: initialStateSainteLague(currResultsLAN, currentLayer.feature.properties.DirectSeats, initialisation));
		});
		
		nationalAdjustmentSeatAllocator(initialisation);
		nationalResultsToConstituencyLevelInit(initialisation);
	}
	
	
}




function resetMap() {

	districtsHNI.remove();
	districtsHSO.remove();
	districtsGRA.remove();
	districtsTAY.remove();
	districtsFOR.remove();
	districtsFIF.remove();
	districtsEDN.remove();
	districtsLOB.remove();
	districtsDMG.remove();
	districtsAYR.remove();
	districtsCLY.remove();
	districtsGLA.remove();
	districtsLAN.remove();


	
	stateMode = true;
	federalLevel = true;
	
	displayVoteShareTable();
	document.getElementById("ResultsTableTitle").value = "National Level";

	currNationalResults.sort(sortFunction);
	updateResultsTable(currNationalResults, prevNationalResults);

	map.addLayer(constituencies);
	resetHighlightStates(constituencies);
	map.setView(new L.LatLng(51.5, 8), 7);
	
}

function switchDisplay() {

	if (stateMode == true)
	{
		constituencies.remove();
		
		map.addLayer(districtsHNI);
		map.addLayer(districtsHSO);
		map.addLayer(districtsGRA);
		map.addLayer(districtsTAY);
		map.addLayer(districtsFOR);
		map.addLayer(districtsFIF);
		map.addLayer(districtsEDN);
		map.addLayer(districtsLOB);
		map.addLayer(districtsDMG);
		map.addLayer(districtsAYR);
		map.addLayer(districtsCLY);
		map.addLayer(districtsGLA);
		map.addLayer(districtsLAN);

		resetHighlightConstituencies(districtsHNI);	
		
		displayVoteShareTable();
		document.getElementById("ResultsTableTitle").value = "National Level";
		
		currNationalResults.sort(sortFunction);
		updateResultsTable(currNationalResults, prevNationalResults);
		
		federalLevel = true;
		stateMode = false;
	}	
	else
	{
		districtsHNI.remove();
		districtsHSO.remove();
		districtsGRA.remove();
		districtsTAY.remove();
		districtsFOR.remove();
		districtsFIF.remove();
		districtsEDN.remove();
		districtsLOB.remove();
		districtsDMG.remove();
		districtsAYR.remove();
		districtsCLY.remove();
		districtsGLA.remove();
		districtsLAN.remove();
		
		
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

function resetHighlightStates(e) {
	constituencies.resetStyle(e.target);
}

function resetHighlightConstituencies(e) {
	districtsHNI.resetStyle(e.target);
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
	

	((e.target.feature.properties.Constituency == "Highlands North and Islands") ? map.addLayer(districtsHNI)
	: (e.target.feature.properties.Constituency == "Highlands South") ? map.addLayer(districtsHSO)
	: (e.target.feature.properties.Constituency == "Grampian") ? map.addLayer(districtsGRA)
	: (e.target.feature.properties.Constituency == "Tayside") ? map.addLayer(districtsTAY)
	: (e.target.feature.properties.Constituency == "Forth") ? map.addLayer(districtsFOR)
	: (e.target.feature.properties.Constituency == "Fife") ? map.addLayer(districtsFIF)
	: (e.target.feature.properties.Constituency == "Edinburgh") ? map.addLayer(districtsEDN)
	: (e.target.feature.properties.Constituency == "Lothian and Borders") ? map.addLayer(districtsLOB)
	: (e.target.feature.properties.Constituency == "Dumfries and Galloway") ? map.addLayer(districtsDMG)
	: (e.target.feature.properties.Constituency == "Ayrshire") ? map.addLayer(districtsAYR)
	: (e.target.feature.properties.Constituency == "Clyde") ? map.addLayer(districtsCLY)
	: (e.target.feature.properties.Constituency == "Glasgow") ? map.addLayer(districtsGLA)
	: map.addLayer(districtsLAN));
	
	document.getElementById("ResultsTableTitle").value = e.target.feature.properties.Constituency;
	
	
	
	((e.target.feature.properties.Constituency == "Highlands North and Islands") ? currResultsHNI.sort(sortFunction)
	: (e.target.feature.properties.Constituency == "Highlands South") ? currResultsHSO.sort(sortFunction)
	: (e.target.feature.properties.Constituency == "Grampian") ? currResultsGRA.sort(sortFunction)
	: (e.target.feature.properties.Constituency == "Tayside") ? currResultsTAY.sort(sortFunction)
	: (e.target.feature.properties.Constituency == "Forth") ? currResultsFOR.sort(sortFunction)
	: (e.target.feature.properties.Constituency == "Fife") ? currResultsFIF.sort(sortFunction)
	: (e.target.feature.properties.Constituency == "Edinburgh") ? currResultsEDN.sort(sortFunction)
	: (e.target.feature.properties.Constituency == "Lothian and Borders") ? currResultsLOB.sort(sortFunction)
	: (e.target.feature.properties.Constituency == "Dumfries and Galloway") ? currResultsDMG.sort(sortFunction)
	: (e.target.feature.properties.Constituency == "Ayrshire") ? currResultsAYR.sort(sortFunction)
	: (e.target.feature.properties.Constituency == "Clyde") ? currResultsCLY.sort(sortFunction)
	: (e.target.feature.properties.Constituency == "Glasgow") ? currResultsGLA.sort(sortFunction)
	: currResultsLAN.sort(sortFunction));
	
	
	
	((e.target.feature.properties.Constituency == "Highlands North and Islands") ? updateResultsTable(currResultsHNI, prevResultsHNI)
	: (e.target.feature.properties.Constituency == "Highlands South") ? updateResultsTable(currResultsHSO, prevResultsHSO)
	: (e.target.feature.properties.Constituency == "Grampian") ? updateResultsTable(currResultsGRA, prevResultsGRA)
	: (e.target.feature.properties.Constituency == "Tayside") ? updateResultsTable(currResultsTAY, prevResultsTAY)
	: (e.target.feature.properties.Constituency == "Forth") ? updateResultsTable(currResultsFOR, prevResultsFOR)
	: (e.target.feature.properties.Constituency == "Fife") ? updateResultsTable(currResultsFIF, prevResultsFIF)
	: (e.target.feature.properties.Constituency == "Edinburgh") ? updateResultsTable(currResultsEDN, prevResultsEDN)
	: (e.target.feature.properties.Constituency == "Lothian and Borders") ? updateResultsTable(currResultsLOB, prevResultsLOB)
	: (e.target.feature.properties.Constituency == "Dumfries and Galloway") ? updateResultsTable(currResultsDMG, prevResultsDMG)
	: (e.target.feature.properties.Constituency == "Ayrshire") ? updateResultsTable(currResultsAYR, prevResultsAYR)
	: (e.target.feature.properties.Constituency == "Clyde") ? updateResultsTable(currResultsCLY, prevResultsCLY)
	: (e.target.feature.properties.Constituency == "Glasgow") ? updateResultsTable(currResultsGLA, prevResultsGLA)
	: updateResultsTable(currResultsLAN, prevResultsLAN));
	
}

function styleDistricts(feature) {
	SNPVotes = feature.properties.SNP * SNPModifier;
	ConservativeVotes = feature.properties.Conservative * ConservativeModifier;
	LabourVotes = feature.properties.Labour * LabourModifier;
	GreenVotes = feature.properties.Green * GreenModifier;
	LibDemVotes = feature.properties.LibDem * LibDemModifier;
	AlbaVotes = feature.properties.Alba * AlbaModifier;
	AFUVotes = feature.properties.AFU * AFUModifier;
	RefUKVotes = feature.properties.RefUK * RefUKModifier;

	if ((SNPVotes > ConservativeVotes) && (SNPVotes > LabourVotes) && (SNPVotes > GreenVotes) && (SNPVotes > LibDemVotes) && (SNPVotes > AlbaVotes) && (SNPVotes > AFUVotes) && (SNPVotes > RefUKVotes)){
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#fdf38e'
			
		};
	}
	if ((ConservativeVotes > SNPVotes) && (ConservativeVotes > LabourVotes) && (ConservativeVotes > GreenVotes) && (ConservativeVotes > LibDemVotes) && (ConservativeVotes > AlbaVotes) && (ConservativeVotes > AFUVotes) && (ConservativeVotes > RefUKVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#0087dc'
			
		};
	}
	if ((LabourVotes > SNPVotes) && (LabourVotes > ConservativeVotes) && (LabourVotes > GreenVotes) && (LabourVotes > LibDemVotes) && (LabourVotes > AlbaVotes) && (LabourVotes > AFUVotes) && (LabourVotes > RefUKVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#e40a3b'
			
		};
	}
	if ((GreenVotes > SNPVotes) && (GreenVotes > ConservativeVotes) && (GreenVotes > LabourVotes) && (GreenVotes > LibDemVotes) && (GreenVotes > AlbaVotes) && (GreenVotes > AFUVotes) && (GreenVotes > RefUKVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#00b140'
			
		};
	}
	if ((LibDemVotes > SNPVotes) && (LibDemVotes > ConservativeVotes) && (LibDemVotes > GreenVotes) && (LibDemVotes > LabourVotes) && (LibDemVotes > AlbaVotes) && (LibDemVotes > AFUVotes) && (LibDemVotes > RefUKVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#faa619'
			
		};
	}
	if ((AlbaVotes > SNPVotes) && (AlbaVotes > ConservativeVotes) && (AlbaVotes > GreenVotes) && (AlbaVotes > LibDemVotes) && (AlbaVotes > LabourVotes) && (AlbaVotes > AFUVotes) && (AlbaVotes > RefUKVotes)){
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#005eb8'
			
		};
	}
	if ((AFUVotes > SNPVotes) && (AFUVotes > ConservativeVotes) && (AFUVotes > GreenVotes) && (AFUVotes > LibDemVotes) && (AFUVotes > LabourVotes) && (AFUVotes > AlbaVotes) && (AFUVotes > RefUKVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#2c5881'
				
		};
	}
	if ((RefUKVotes > SNPVotes) && (RefUKVotes > ConservativeVotes) && (RefUKVotes > GreenVotes) && (RefUKVotes > LibDemVotes) && (RefUKVotes > LabourVotes) && (RefUKVotes > AlbaVotes) && (RefUKVotes > AFUVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#12b6cf'
				
		};
	}
}

function styleConstituencies(feature) {
	SNPVotes = feature.properties.SNP * SNPModifier;
	ConservativeVotes = feature.properties.Conservative * ConservativeModifier;
	LabourVotes = feature.properties.Labour * LabourModifier;
	GreenVotes = feature.properties.Green * GreenModifier;
	LibDemVotes = feature.properties.LibDem * LibDemModifier;
	AlbaVotes = feature.properties.Alba * AlbaModifier;
	AFUVotes = feature.properties.AFU * AFUModifier;
	RefUKVotes = feature.properties.RefUK * RefUKModifier;

	if ((SNPVotes > ConservativeVotes) && (SNPVotes > LabourVotes) && (SNPVotes > GreenVotes) && (SNPVotes > LibDemVotes) && (SNPVotes > AlbaVotes) && (SNPVotes > AFUVotes) && (SNPVotes > RefUKVotes)){
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#fdf38e'
			
		};
	}
	if ((ConservativeVotes > SNPVotes) && (ConservativeVotes > LabourVotes) && (ConservativeVotes > GreenVotes) && (ConservativeVotes > LibDemVotes) && (ConservativeVotes > AlbaVotes) && (ConservativeVotes > AFUVotes) && (ConservativeVotes > RefUKVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#0087dc'
			
		};
	}
	if ((LabourVotes > SNPVotes) && (LabourVotes > ConservativeVotes) && (LabourVotes > GreenVotes) && (LabourVotes > LibDemVotes) && (LabourVotes > AlbaVotes) && (LabourVotes > AFUVotes) && (LabourVotes > RefUKVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#e40a3b'
			
		};
	}
	if ((GreenVotes > SNPVotes) && (GreenVotes > ConservativeVotes) && (GreenVotes > LabourVotes) && (GreenVotes > LibDemVotes) && (GreenVotes > AlbaVotes) && (GreenVotes > AFUVotes) && (GreenVotes > RefUKVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#00b140'
			
		};
	}
	if ((LibDemVotes > SNPVotes) && (LibDemVotes > ConservativeVotes) && (LibDemVotes > GreenVotes) && (LibDemVotes > LabourVotes) && (LibDemVotes > AlbaVotes) && (LibDemVotes > AFUVotes) && (LibDemVotes > RefUKVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#faa619'
			
		};
	}
	if ((AlbaVotes > SNPVotes) && (AlbaVotes > ConservativeVotes) && (AlbaVotes > GreenVotes) && (AlbaVotes > LibDemVotes) && (AlbaVotes > LabourVotes) && (AlbaVotes > AFUVotes) && (AlbaVotes > RefUKVotes)){
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#005eb8'
			
		};
	}
	if ((AFUVotes > SNPVotes) && (AFUVotes > ConservativeVotes) && (AFUVotes > GreenVotes) && (AFUVotes > LibDemVotes) && (AFUVotes > LabourVotes) && (AFUVotes > AlbaVotes) && (AFUVotes > RefUKVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#2c5881'
				
		};
	}
	if ((RefUKVotes > SNPVotes) && (RefUKVotes > ConservativeVotes) && (RefUKVotes > GreenVotes) && (RefUKVotes > LibDemVotes) && (RefUKVotes > LabourVotes) && (RefUKVotes > AlbaVotes) && (RefUKVotes > AFUVotes)) {
		return {
			weight: 1,
			opacity: 1,
			color: 'white',
			dashArray: '0',
			fillOpacity: 0.9,
			
			fillColor: '#12b6cf'
				
		};
	}
}

function fillConstituencyArrays(constituencyCollection, initialisation) {
	let noOfParties = 8;
	
	if (initialisation)
	{
		SNPModifier = 1;
		ConservativeModifier = 1;
		LabourModifier = 1;
		GreenModifier = 1;
		LibDemModifier = 1;
		AlbaModifier = 1;
		AFUModifier = 1;
		RefUKModifier = 1;
	}


	var results = new Array(noOfParties);
	for (var i = 0; i < results.length; i++) {
		results[i] = new Array(4); //Loop through depending on how many districts there are and create new fields.
		results[i][1] = 0;
		results[i][2] = 0;
		results[i][3] = 0;
	}

	var index = 0; //Default index to 0 as this is the standard starting point for any array.
	
	var parties = ["SNP","Conservative","Labour","Green","Lib Dem","Alba","All 4 Unity","Reform UK"];
	
	constituencyCollection.eachLayer(function(currentLayer){
	for (var i = 0; i < parties.length; i++){
		results[index][0] = parties[i]; 
		results[index][1] = results[index][1] + ((parties[i] == "SNP") ? Math.round(((currentLayer.feature.properties.SNP * SNPModifier) * 1) / 1)
		: (parties[i] == "Conservative") ? Math.round(((currentLayer.feature.properties.Conservative * ConservativeModifier) * 1) / 1)
		: (parties[i] == "Labour") ? Math.round(((currentLayer.feature.properties.Labour * LabourModifier) * 1) / 1)
		: (parties[i] == "Green") ? Math.round(((currentLayer.feature.properties.Green * GreenModifier) * 1) / 1)
		: (parties[i] == "Lib Dem") ? Math.round(((currentLayer.feature.properties.LibDem * LibDemModifier) * 1) / 1)
		: (parties[i] == "Alba") ? Math.round(((currentLayer.feature.properties.Alba * AlbaModifier) * 1) / 1)
		: (parties[i] == "All 4 Unity") ? Math.round(((currentLayer.feature.properties.AFU * AFUModifier) * 1) / 1)
		: Math.round(((currentLayer.feature.properties.RefUK * RefUKModifier) * 1) / 1));
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
		if (currentArray[i][0] == "SNP")
		{
			results[0][1] = results[0][1] + currentArray[i][1];
			results[0][2] = results[0][2] + currentArray[i][2];
			results[0][3] = results[0][3] + currentArray[i][1];
		}
		if (currentArray[i][0] == "Conservative")
		{
			results[1][1] = results[1][1] + currentArray[i][1];
			results[1][2] = results[1][2] + currentArray[i][2];
			results[1][3] = results[1][3] + currentArray[i][1];
		}
		if (currentArray[i][0] == "Labour")
		{
			results[2][1] = results[2][1] + currentArray[i][1];
			results[2][2] = results[2][2] + currentArray[i][2];
			results[2][3] = results[2][3] + currentArray[i][1];
		}
		if (currentArray[i][0] == "Green")
		{
			results[3][1] = results[3][1] + currentArray[i][1];
			results[3][2] = results[3][2] + currentArray[i][2];
			results[3][3] = results[3][3] + currentArray[i][1];
		}
		if (currentArray[i][0] == "Lib Dem")
		{
			results[4][1] = results[4][1] + currentArray[i][1];
			results[4][2] = results[4][2] + currentArray[i][2];
			results[4][3] = results[4][3] + currentArray[i][1];
		}
		if (currentArray[i][0] == "Alba")
		{
			results[5][1] = results[5][1] + currentArray[i][1];
			results[5][2] = results[5][2] + currentArray[i][2];
			results[5][3] = results[5][3] + currentArray[i][1];
		}	
		if (currentArray[i][0] == "All 4 Unity")
		{
			results[6][1] = results[6][1] + currentArray[i][1];
			results[6][2] = results[6][2] + currentArray[i][2];
			results[6][3] = results[6][3] + currentArray[i][1];
		}
		if (currentArray[i][0] == "Reform UK")
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

	var parties = ["SNP","Conservative","Labour","Green","Lib Dem","Alba","All 4 Unity","Reform UK"];
	var results = new Array(noOfParties);
	for (var i = 0; i < results.length; i++) {
		results[i] = new Array(4); //Loop through depending on how many districts there are and create new fields.
		results[i][0] = parties[i];
		results[i][1] = 0;
		results[i][2] = 0;
		results[i][3] = 0;
	}
	
	
	results = fillNationalArrayByConstituency(currResultsHNI, results);
	results = fillNationalArrayByConstituency(currResultsHSO, results);
	results = fillNationalArrayByConstituency(currResultsGRA, results);
	results = fillNationalArrayByConstituency(currResultsTAY, results);
	results = fillNationalArrayByConstituency(currResultsFOR, results);
	results = fillNationalArrayByConstituency(currResultsFIF, results);
	results = fillNationalArrayByConstituency(currResultsEDN, results);
	results = fillNationalArrayByConstituency(currResultsLOB, results);
	results = fillNationalArrayByConstituency(currResultsDMG, results);
	results = fillNationalArrayByConstituency(currResultsAYR, results);
	results = fillNationalArrayByConstituency(currResultsCLY, results);
	results = fillNationalArrayByConstituency(currResultsGLA, results);
	results = fillNationalArrayByConstituency(currResultsLAN, results);


	return results;
	
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
	document.getElementById("SNPInput").value = SNPprediction;
	document.getElementById("ConservativeInput").value = Conservativeprediction;
	document.getElementById("LabourInput").value = Labourprediction;
	document.getElementById("GreenInput").value = Greenprediction;
	document.getElementById("LibDemInput").value = LibDemprediction;
	document.getElementById("AlbaInput").value = Albaprediction;
	document.getElementById("AFUInput").value = AFUprediction;
	document.getElementById("RefUKInput").value = RefUKprediction;
	
	calculateUserPrediction();
}

function displayPrevResults() {
	document.getElementById("SNPInput").value = prevSNPVoteShare;
	document.getElementById("ConservativeInput").value = prevConservativeVoteShare;
	document.getElementById("LabourInput").value = prevLabourVoteShare;
	document.getElementById("GreenInput").value = prevGreenVoteShare;
	document.getElementById("LibDemInput").value = prevLibDemVoteShare;
	document.getElementById("AlbaInput").value = prevAlbaVoteShare;
	document.getElementById("AFUInput").value = prevAFUVoteShare;
	document.getElementById("RefUKInput").value = prevRefUKVoteShare;
	
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
			prevResultsHNI[index][3] = 0;
			prevResultsHSO[index][3] = 0;
			prevResultsGRA[index][3] = 0;
			prevResultsTAY[index][3] = 0;
			prevResultsFOR[index][3] = 0;
			prevResultsFIF[index][3] = 0;
			prevResultsEDN[index][3] = 0;
			prevResultsLOB[index][3] = 0;
			prevResultsDMG[index][3] = 0;
			prevResultsAYR[index][3] = 0;
			prevResultsCLY[index][3] = 0;
			prevResultsGLA[index][3] = 0;
			prevResultsLAN[index][3] = 0;
			prevNationalResults[index][3] = 0;
		}
	}
	else {
		if (!partyThreshold){
			currResultsHNI[index][3] = 0;
			currResultsHSO[index][3] = 0;
			currResultsGRA[index][3] = 0;
			currResultsTAY[index][3] = 0;
			currResultsFOR[index][3] = 0;
			currResultsFIF[index][3] = 0;
			currResultsEDN[index][3] = 0;
			currResultsLOB[index][3] = 0;
			currResultsDMG[index][3] = 0;
			currResultsAYR[index][3] = 0;
			currResultsCLY[index][3] = 0;
			currResultsGLA[index][3] = 0;
			currResultsLAN[index][3] = 0;
			currNationalResults[index][3] = 0;
		}
	}

	
}

function calculateUserPrediction() {
	
	SNPModifier = 1 + ((document.getElementById("SNPInput").value - prevSNPVoteShare) / prevSNPVoteShare);
	ConservativeModifier = 1 + ((document.getElementById("ConservativeInput").value - prevConservativeVoteShare) / prevConservativeVoteShare);
	LabourModifier = 1 + ((document.getElementById("LabourInput").value - prevLabourVoteShare) / prevLabourVoteShare);
	GreenModifier = 1 + ((document.getElementById("GreenInput").value - prevGreenVoteShare) / prevGreenVoteShare);
	LibDemModifier = 1 + ((document.getElementById("LibDemInput").value - prevLibDemVoteShare) / prevLibDemVoteShare);
	AlbaModifier = 1 + ((document.getElementById("AlbaInput").value - prevAlbaVoteShare) / prevAlbaVoteShare);
	AFUModifier = 1 + ((document.getElementById("AFUInput").value - prevAFUVoteShare) / prevAFUVoteShare);;
	RefUKModifier = 1 + ((document.getElementById("RefUKInput").value - prevRefUKVoteShare) / prevRefUKVoteShare);
	
	
	currResultsHNI = fillConstituencyArrays(districtsHNI, false);
	currResultsHSO = fillConstituencyArrays(districtsHSO, false);
	currResultsGRA = fillConstituencyArrays(districtsGRA, false);
	currResultsTAY = fillConstituencyArrays(districtsTAY, false);
	currResultsFOR = fillConstituencyArrays(districtsFOR, false);
	currResultsFIF = fillConstituencyArrays(districtsFIF, false);
	currResultsEDN = fillConstituencyArrays(districtsEDN, false);
	currResultsLOB = fillConstituencyArrays(districtsLOB, false);
	currResultsDMG = fillConstituencyArrays(districtsDMG, false);
	currResultsAYR = fillConstituencyArrays(districtsAYR, false);
	currResultsCLY = fillConstituencyArrays(districtsCLY, false);
	currResultsGLA = fillConstituencyArrays(districtsGLA, false);
	currResultsLAN = fillConstituencyArrays(districtsLAN, false);


	currNationalResults = fillNationalArray();
	currResultsHNI.sort(sortFunctionC);
	currResultsHSO.sort(sortFunctionC);
	currResultsGRA.sort(sortFunctionC);
	currResultsTAY.sort(sortFunctionC);
	currResultsFOR.sort(sortFunctionC);
	currResultsFIF.sort(sortFunctionC);
	currResultsEDN.sort(sortFunctionC);
	currResultsLOB.sort(sortFunctionC);
	currResultsDMG.sort(sortFunctionC);
	currResultsAYR.sort(sortFunctionC);
	currResultsCLY.sort(sortFunctionC);
	currResultsGLA.sort(sortFunctionC);
	currResultsLAN.sort(sortFunctionC);

	currNationalResults.sort(sortFunctionC);
	
	
	
	
	AlbaThreshold = thresholdChecker(document.getElementById("AlbaInput").value);
	AFUThreshold = thresholdChecker(document.getElementById("AFUInput").value);
	ConservativeThreshold = thresholdChecker(document.getElementById("ConservativeInput").value);
	GreenThreshold = thresholdChecker(document.getElementById("GreenInput").value);
	LabourThreshold = thresholdChecker(document.getElementById("LabourInput").value);
	LibDemThreshold = thresholdChecker(document.getElementById("LibDemInput").value);
	RefUKThreshold = thresholdChecker(document.getElementById("RefUKInput").value);
	SNPThreshold = thresholdChecker(document.getElementById("SNPInput").value);
	
	thresholdImplementor(0, AlbaThreshold, false);
	thresholdImplementor(1, AFUThreshold, false);
	thresholdImplementor(2, ConservativeThreshold, false);
	thresholdImplementor(3, GreenThreshold, false);
	thresholdImplementor(4, LabourThreshold, false);
	thresholdImplementor(5, LibDemThreshold, false);
	thresholdImplementor(6, RefUKThreshold, false);
	thresholdImplementor(7, SNPThreshold, false);
	
	
	
	constituencies.eachLayer(function(layer){ //Iterate through each layer in a collection
		constituencies.resetStyle(layer);
	});
	districtsHNI.eachLayer(function(layer){ //Iterate through each layer in a collection
		districtsHNI.resetStyle(layer);
	});
	districtsHSO.eachLayer(function(layer){ //Iterate through each layer in a collection
		districtsHSO.resetStyle(layer);
	});
	districtsGRA.eachLayer(function(layer){ //Iterate through each layer in a collection
		districtsGRA.resetStyle(layer);
	});
	districtsTAY.eachLayer(function(layer){ //Iterate through each layer in a collection
		districtsTAY.resetStyle(layer);
	});
	districtsFOR.eachLayer(function(layer){ //Iterate through each layer in a collection
		districtsFOR.resetStyle(layer);
	});
	districtsFIF.eachLayer(function(layer){ //Iterate through each layer in a collection
		districtsFIF.resetStyle(layer);
	});
	districtsEDN.eachLayer(function(layer){ //Iterate through each layer in a collection
		districtsEDN.resetStyle(layer);
	});
	districtsLOB.eachLayer(function(layer){ //Iterate through each layer in a collection
		districtsLOB.resetStyle(layer);
	});
	districtsDMG.eachLayer(function(layer){ //Iterate through each layer in a collection
		districtsDMG.resetStyle(layer);
	});
	districtsAYR.eachLayer(function(layer){ //Iterate through each layer in a collection
		districtsAYR.resetStyle(layer);
	});
	districtsCLY.eachLayer(function(layer){ //Iterate through each layer in a collection
		districtsCLY.resetStyle(layer);
	});
	districtsGLA.eachLayer(function(layer){ //Iterate through each layer in a collection
		districtsGLA.resetStyle(layer);
	});
	districtsLAN.eachLayer(function(layer){ //Iterate through each layer in a collection
		districtsLAN.resetStyle(layer);
	});


	//Seat Calculation Here
	
	seatCalculation(false);
 
	//Update Table
	currNationalResults.sort(sortFunction);
	updateResultsTable(currNationalResults, prevNationalResults);
}






function displayPopup(e) {
		
	var layer = e.target;
	
	
	var popup = L.popup();
	
	//Set up rank system
	
	
	var prevArray = [["SNP",parseInt(layer.feature.properties.SNP, 10)],
	["Conservative",parseInt(layer.feature.properties.Conservative, 10)],
	["Labour",parseInt(layer.feature.properties.Labour, 10)],
	["Green",parseInt(layer.feature.properties.Green, 10)],
	["Liberal Democrats",parseInt(layer.feature.properties.LibDem, 10)],
	["Alba",parseInt(layer.feature.properties.Alba, 10)],
	["All 4 Unity",parseInt(layer.feature.properties.AFU, 10)],
	["Reform UK",parseInt(layer.feature.properties.RefUK, 10)]];
	prevArray.sort(sortFunction);
	
	var currArray = [["SNP",parseInt(layer.feature.properties.SNP * SNPModifier, 10)],
	["Conservative",parseInt(layer.feature.properties.Conservative * ConservativeModifier, 10)],
	["Labour",parseInt(layer.feature.properties.Labour * LabourModifier, 10)],
	["Green",parseInt(layer.feature.properties.Green * GreenModifier, 10)],
	["Liberal Democrats",parseInt(layer.feature.properties.LibDem * LibDemModifier, 10)],
	["Alba",parseInt(layer.feature.properties.Alba * AlbaModifier, 10)],
	["All 4 Unity",parseInt(layer.feature.properties.AFU * AFUModifier, 10)],
	["Reform UK",parseInt(layer.feature.properties.RefUK * RefUKModifier, 10)]];
	currArray.sort(sortFunction);
	
	var voteTotalPrev = 0, voteTotalCurr = 0;
		

	
	for (var i = 0; i < prevArray.length; i++) {
		voteTotalPrev = voteTotalPrev + prevArray[i][1];
		voteTotalCurr = voteTotalCurr + currArray[i][1];
	}

	   
	var list = "<b>" + layer.feature.properties.District + "</b></br>" 
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
	
	console.log(currResults);
	

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
