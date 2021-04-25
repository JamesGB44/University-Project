var corner1 = L.latLng(56.121060, 0.739669), 
corner2 = L.latLng(46.920255, 17.747588), 
bounds = L.latLngBounds(corner1, corner2);

var stateMode = true;
var federalLevel = true;

var map = L.map('map', {
	center: [51.5, 8],
	zoom: 6,
	maxBounds: bounds,
zoomControl:  false
});


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 12,
	minZoom: 5,
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
		results[i] = new Array(4); //Loop through depending on how many districts there are and create new fields.
		results[i][1] = 0;
		results[i][2] = 0;
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
		}
		if ((currentArray[i][0] == "CDU") || (currentArray[i][0] == "CSU"))
		{
			results[1][1] = results[1][1] + currentArray[i][1];
			results[1][2] = results[1][2] + currentArray[i][2];
			results[1][3] = results[1][3] + currentArray[i][3];
		}
		if (currentArray[i][0] == "AfD")
		{
			results[2][1] = results[2][1] + currentArray[i][1];
			results[2][2] = results[2][2] + currentArray[i][2];
			results[2][3] = results[2][3] + currentArray[i][3];
		}
		if (currentArray[i][0] == "FDP")
		{
			results[3][1] = results[3][1] + currentArray[i][1];
			results[3][2] = results[3][2] + currentArray[i][2];
			results[3][3] = results[3][3] + currentArray[i][3];
		}
		if (currentArray[i][0] == "The Left")
		{
			results[4][1] = results[4][1] + currentArray[i][1];
			results[4][2] = results[4][2] + currentArray[i][2];
			results[4][3] = results[4][3] + currentArray[i][3];
		}
		if (currentArray[i][0] == "Green")
		{
			results[5][1] = results[5][1] + currentArray[i][1];
			results[5][2] = results[5][2] + currentArray[i][2];
			results[5][3] = results[5][3] + currentArray[i][3];
		}		
	}
	
	return results;
	
}

function fillFederalArray() {
	let noOfParties = 6;

	var parties = ["SPD","CDU/CSU","AfD","FDP","The Left","Green"];
	var results = new Array(noOfParties);
	for (var i = 0; i < results.length; i++) {
		results[i] = new Array(4); //Loop through depending on how many districts there are and create new fields.
		results[i][0] = parties[i];
		results[i][1] = 0;
		results[i][2] = 0;
		results[i][3] = 0;
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

	
	var totalVotesCurr = 0, totalSeats = 0, totalVotesPrev = 0;
	for (i = 0; i < currResults.length; i++){
		totalVotesCurr = totalVotesCurr + currResults[i][1]
		totalSeats = totalSeats + currResults[i][2] + currResults[i][3]
		totalVotesPrev = totalVotesPrev + prevResults[i][1]
	}

	
	document.getElementById("Party1Name").value = currResults[0][0];
	document.getElementById("Party1Votes").value = currResults[0][1];
	document.getElementById("Party1VoteShare").value = Math.round((currResults[0][1] / totalVotesCurr * 100) * 10) / 10;
	document.getElementById("Party1Swing").value = Math.round(((currResults[0][1] / totalVotesCurr * 100) - (prevResults[indexs[0]][1] / totalVotesPrev * 100)) * 10) / 10;
	document.getElementById("Party1DirectSeats").value = currResults[0][2];
	document.getElementById("Party1Seats").value = currResults[0][2] + currResults[0][3];
	document.getElementById("Party1SeatChange").value = (currResults[0][2] + currResults[0][3]) - (prevResults[indexs[0]][2] + prevResults[indexs[0]][3]);
	document.getElementById("Party1SeatShare").value = Math.round(((currResults[0][2] + currResults[0][3]) / totalSeats * 100) * 10) / 10;
	
	document.getElementById("Party2Name").value = currResults[1][0];
	document.getElementById("Party2Votes").value = currResults[1][1];
	document.getElementById("Party2VoteShare").value = Math.round((currResults[1][1] / totalVotesCurr * 100) * 10) / 10;
	document.getElementById("Party2Swing").value = Math.round(((currResults[1][1] / totalVotesCurr * 100) - (prevResults[indexs[1]][1] / totalVotesPrev * 100)) * 10) / 10;
	document.getElementById("Party2DirectSeats").value = currResults[1][2];
	document.getElementById("Party2Seats").value = currResults[1][2] + currResults[1][3];
	document.getElementById("Party2SeatChange").value = (currResults[1][2] + currResults[1][3]) - (prevResults[indexs[1]][2] + prevResults[indexs[1]][3]);
	document.getElementById("Party2SeatShare").value = Math.round(((currResults[1][2] + currResults[1][3]) / totalSeats * 100) * 10) / 10;

	document.getElementById("Party3Name").value = currResults[2][0];
	document.getElementById("Party3Votes").value = currResults[2][1];
	document.getElementById("Party3VoteShare").value = Math.round((currResults[2][1] / totalVotesCurr * 100) * 10) / 10;
	document.getElementById("Party3Swing").value = Math.round(((currResults[2][1] / totalVotesCurr * 100) - (prevResults[indexs[2]][1] / totalVotesPrev * 100)) * 10) / 10;
	document.getElementById("Party3DirectSeats").value = currResults[2][2];
	document.getElementById("Party3Seats").value = currResults[2][2] + currResults[2][3];
	document.getElementById("Party3SeatChange").value = (currResults[2][2] + currResults[2][3]) - (prevResults[indexs[2]][2] + prevResults[indexs[2]][3]);
	document.getElementById("Party3SeatShare").value = Math.round(((currResults[2][2] + currResults[2][3]) / totalSeats * 100) * 10) / 10;

	document.getElementById("Party4Name").value = currResults[3][0];
	document.getElementById("Party4Votes").value = currResults[3][1];
	document.getElementById("Party4VoteShare").value = Math.round((currResults[3][1] / totalVotesCurr * 100) * 10) / 10;
	document.getElementById("Party4Swing").value = Math.round(((currResults[3][1] / totalVotesCurr * 100) - (prevResults[indexs[3]][1] / totalVotesPrev * 100)) * 10) / 10;
	document.getElementById("Party4DirectSeats").value = currResults[3][2];
	document.getElementById("Party4Seats").value = currResults[3][2] + currResults[3][3];
	document.getElementById("Party4SeatChange").value = (currResults[3][2] + currResults[3][3]) - (prevResults[indexs[3]][2] + prevResults[indexs[3]][3]);
	document.getElementById("Party4SeatShare").value = Math.round(((currResults[3][2] + currResults[3][3]) / totalSeats * 100) * 10) / 10;
	
	document.getElementById("Party5Name").value = currResults[4][0];
	document.getElementById("Party5Votes").value = currResults[4][1];
	document.getElementById("Party5VoteShare").value = Math.round((currResults[4][1] / totalVotesCurr * 100) * 10) / 10;
	document.getElementById("Party5Swing").value = Math.round(((currResults[4][1] / totalVotesCurr * 100) - (prevResults[indexs[4]][1] / totalVotesPrev * 100)) * 10) / 10;
	document.getElementById("Party5DirectSeats").value = currResults[4][2];
	document.getElementById("Party5Seats").value = currResults[4][2] + currResults[4][3];
	document.getElementById("Party5SeatChange").value = (currResults[4][2] + currResults[4][3]) - (prevResults[indexs[4]][2] + prevResults[indexs[4]][3]);
	document.getElementById("Party5SeatShare").value = Math.round(((currResults[4][2] + currResults[4][3]) / totalSeats * 100) * 10) / 10;
	
	document.getElementById("Party6Name").value = currResults[5][0];
	document.getElementById("Party6Votes").value = currResults[5][1];
	document.getElementById("Party6VoteShare").value = Math.round((currResults[5][1] / totalVotesCurr * 100) * 10) / 10;
	document.getElementById("Party6Swing").value = Math.round(((currResults[5][1] / totalVotesCurr * 100) - (prevResults[indexs[5]][1] / totalVotesPrev * 100)) * 10) / 10;
	document.getElementById("Party6DirectSeats").value = currResults[5][2];
	document.getElementById("Party6Seats").value = currResults[5][2] + currResults[5][3];
	document.getElementById("Party6SeatChange").value = (currResults[5][2] + currResults[5][3]) - (prevResults[indexs[5]][2] + prevResults[indexs[5]][3]);
	document.getElementById("Party6SeatShare").value = Math.round(((currResults[5][2] + currResults[5][3]) / totalSeats * 100) * 10) / 10;	

}

displayCurrentProjection();

