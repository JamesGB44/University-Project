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
	
	var results = [["SPD",parseInt(layer.feature.properties.SPDVote * SPDModifier, 10)],
	["AfD",parseInt(layer.feature.properties.AfDVote * AfDModifier, 10)],
	["CDU",parseInt(layer.feature.properties.CDUVote * CDUModifier, 10)],
	["FDP",parseInt(layer.feature.properties.FDPVote  * FDPModifier, 10)],
	["Green",parseInt(layer.feature.properties.GreenVote  * GreenModifier, 10)],
	["Left",parseInt(layer.feature.properties.LeftVote * LeftModifier, 10)],
	["CSU",parseInt(layer.feature.properties.CSUVote * CSUModifier, 10)]];
	results.sort(sortFunction);

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
	
	var results = [["SPD",parseInt(layer.feature.properties.SPDVote1 * SPDModifier, 10)],
	["AfD",parseInt(layer.feature.properties.AfDVote1 * AfDModifier, 10)],
	["CDU",parseInt(layer.feature.properties.CDUVote1 * CDUModifier, 10)],
	["FDP",parseInt(layer.feature.properties.FDPVote1  * FDPModifier, 10)],
	["Green",parseInt(layer.feature.properties.GreenVote1  * GreenModifier, 10)],
	["Left",parseInt(layer.feature.properties.LeftVote1 * LeftModifier, 10)],
	["CSU",parseInt(layer.feature.properties.CSUVote1 * CSUModifier, 10)]];
	results.sort(sortFunction);

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
}

function displayPrevResults() {
	document.getElementById("CDUInput").value = prevCDUVoteShare;
	document.getElementById("SPDInput").value = prevSPDVoteShare;
	document.getElementById("AfDInput").value = prevAfDVoteShare;
	document.getElementById("FDPInput").value = prevFDPVoteShare;
	document.getElementById("LeftInput").value = prevLeftVoteShare;
	document.getElementById("GreenInput").value = prevGreenVoteShare;
}

function calculateUserPrediction() {
	
	SPDModifier = 1 + ((document.getElementById("SPDInput").value - prevSPDVoteShare) / prevSPDVoteShare);
	CDUModifier = 1 + ((document.getElementById("CDUInput").value - prevCDUVoteShare) / prevCDUVoteShare);
	AfDModifier = 1 + ((document.getElementById("AfDInput").value - prevAfDVoteShare) / prevAfDVoteShare);
	FDPModifier = 1 + ((document.getElementById("FDPInput").value - prevFDPVoteShare) / prevFDPVoteShare);
	GreenModifier = 1 + ((document.getElementById("GreenInput").value - prevGreenVoteShare) / prevGreenVoteShare);
	LeftModifier = 1 + ((document.getElementById("LeftInput").value - prevLeftVoteShare) / prevLeftVoteShare);
	CSUModifier = CDUModifier;
	
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
	document.getElementById("Party1Name").value = prevCDUVoteShare;
	document.getElementById("Party1Votes").value = prevSPDVoteShare;
	document.getElementById("Party1VoteShare").value = prevAfDVoteShare;
	document.getElementById("Party1Swing").value = prevFDPVoteShare;
	document.getElementById("Party1DirectSeats").value = prevLeftVoteShare;
	document.getElementById("Party1Seats").value = prevGreenVoteShare;
	document.getElementById("Party1SeatChange").value = prevGreenVoteShare;
	document.getElementById("Party1SeatShare").value = prevGreenVoteShare;
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
	
	
	((e.target.feature.properties.Name == "Schleswig-Holstein") ?	map.addLayer(constituenciesSH)
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
	: map.addLayer(constituenciesTH))
	
	//Update Table
	document.getElementById("ResultsTableTitle").value = e.target.feature.properties.Name;
	
	var totalVotes = 0, totalSeats = 0;
	for (i = 0; i < currFederalResults.length; i++){
		totalVotes = totalVotes + currFederalResults[0][1]
		totalSeats = totalSeats + currFederalResults[0][2] + currFederalResults[0][3]
	}
	
	document.getElementById("Party1Name").value = currFederalResults[0][0];
	document.getElementById("Party1Votes").value = currFederalResults[0][1];
	document.getElementById("Party1VoteShare").value = Math.round(((currFederalResults[0][1] / totalVotes * 100) * 10) / 10);
	document.getElementById("Party1Swing").value = (currFederalResults[0][1] / totalVotes * 100) - (prevFederalResults[0][1] / totalVotes * 100);
	document.getElementById("Party1DirectSeats").value = currFederalResults[0][2];
	document.getElementById("Party1Seats").value = currFederalResults[0][2] + currFederalResults[0][3];
	document.getElementById("Party1SeatChange").value = (currFederalResults[0][2] + currFederalResults[0][3]) - (prevFederalResults[0][2] + prevFederalResults[0][3]);
	document.getElementById("Party1SeatShare").value = Math.round(((currFederalResults[0][2] + currFederalResults[0][3]) / totalSeats * 100) * 10) / 10;
	
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

var prevFederalResults = [["CDU/CSU",15317344,231,15],
	["SPD",9539381,59,94],
	["AfD",5878115,3,91],
	["FDP",4999449,0,80],
	["The Left",4297270,5,64],
	["Green",4158400,4,66]];

var currFederalResults = [["CDU/CSU",8748451+2469688,182,45],
	["SPD",6156471,59,94],
	["AfD",5415256,16,67],
	["FDP",5845125,0,90],
	["The Left",3945481,3,61],
	["Green",1051487,48,137]];

displayCurrentProjection();

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
