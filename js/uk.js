var corner1 = L.latLng(62.557, -12),
corner2 = L.latLng(49.469, 5.67),
bounds = L.latLngBounds(corner1, corner2);

var map = L.map('map', {
    center: [55.5, -4],
    zoom: 6,
	maxBounds: bounds,
	zoomControl:  false
});

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
	maxZoom: 12,
	minZoom: 5,
	id: 'mapbox/light-v9'
}).addTo(map);


prevConservativeVoteShare = 44.7;
prevLabourVoteShare = 33.0;
prevLibDemVoteShare = 11.8;
prevBrexitVoteShare = 3.5;
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

var constituencies = L.geoJson(constituenciesUK, {
	style: styleConstituencies,
	onEachFeature: onEachFeatureConstituencies
}).addTo(map);




prevNationalResults = fillConstituencyArrays(constituencies, true);

currNationalResults = fillConstituencyArrays(constituencies, false);




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

function constituencyWinner(currentLayer, currentParty) {
	ConservativeVotes = currentLayer.feature.properties.Conservative * ConservativeModifier;
	LabourVotes = currentLayer.feature.properties.Labour * LabourModifier;
	LibDemVotes = currentLayer.feature.properties.LibDem * LibDemModifier;
	BrexitVotes = currentLayer.feature.properties.BrxRef * BrexitModifier;
	GreenVotes = currentLayer.feature.properties.Green * GreenModifier;
	SNPVotes = currentLayer.feature.properties.SNP * SNPModifier;
	PlaidVotes = currentLayer.feature.properties.PlaidCymru * PlaidModifier;
	DUPVotes = currentLayer.feature.properties.DUP;
	SinnFeinVotes = currentLayer.feature.properties.SinnFein;
	UUPVotes = currentLayer.feature.properties.UUP;
	SDLPVotes = currentLayer.feature.properties.SDLP;
	AllianceVotes = currentLayer.feature.properties.Alliance;

	if ((ConservativeVotes > LabourVotes) && (ConservativeVotes > LibDemVotes) && (ConservativeVotes > BrexitVotes) && (ConservativeVotes > GreenVotes) && (ConservativeVotes > SNPVotes) && (ConservativeVotes > PlaidVotes) && (ConservativeVotes > DUPVotes) && (ConservativeVotes > SinnFeinVotes) && (ConservativeVotes > UUPVotes) && (ConservativeVotes > SDLPVotes) && (ConservativeVotes > AllianceVotes)){
		if (currentParty == "Conservative")
		{
			return true;
		}
		else
		{
			return false;
		}

	}
	if ((LabourVotes > ConservativeVotes) && (LabourVotes > LibDemVotes) && (LabourVotes > BrexitVotes) && (LabourVotes > GreenVotes) && (LabourVotes > SNPVotes) && (LabourVotes > PlaidVotes) && (LabourVotes > DUPVotes) && (LabourVotes > SinnFeinVotes) && (LabourVotes > UUPVotes) && (LabourVotes > SDLPVotes) && (LabourVotes > AllianceVotes)) {
		if (currentParty == "Labour")
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	if ((LibDemVotes > ConservativeVotes) && (LibDemVotes > LabourVotes) && (LibDemVotes > BrexitVotes) && (LibDemVotes > GreenVotes) && (LibDemVotes > SNPVotes) && (LibDemVotes > PlaidVotes) && (LibDemVotes > DUPVotes) && (LibDemVotes > SinnFeinVotes) && (LibDemVotes > UUPVotes) && (LibDemVotes > SDLPVotes) && (LibDemVotes > AllianceVotes)) {
		if (currentParty == "Liberal Democrats")
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	if ((BrexitVotes > ConservativeVotes) && (BrexitVotes > LabourVotes) && (BrexitVotes > LibDemVotes) && (BrexitVotes > GreenVotes) && (BrexitVotes > SNPVotes) && (BrexitVotes > PlaidVotes) && (BrexitVotes > DUPVotes) && (BrexitVotes > SinnFeinVotes) && (BrexitVotes > UUPVotes) && (BrexitVotes > SDLPVotes) && (BrexitVotes > AllianceVotes)) {
		if (currentParty == "BRX/REF UK")
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	if ((GreenVotes > ConservativeVotes) && (GreenVotes > LabourVotes) && (GreenVotes > BrexitVotes) && (GreenVotes > LibDemVotes) && (GreenVotes > SNPVotes) && (GreenVotes > PlaidVotes) && (GreenVotes > DUPVotes) && (GreenVotes > SinnFeinVotes) && (GreenVotes > UUPVotes) && (GreenVotes > SDLPVotes) && (GreenVotes > AllianceVotes)) {
		if (currentParty == "Green")
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	if ((SNPVotes > ConservativeVotes) && (SNPVotes > LabourVotes) && (SNPVotes > BrexitVotes) && (SNPVotes > GreenVotes) && (SNPVotes > LibDemVotes) && (SNPVotes > PlaidVotes) && (SNPVotes > DUPVotes) && (SNPVotes > SinnFeinVotes) && (SNPVotes > UUPVotes) && (SNPVotes > SDLPVotes) && (SNPVotes > AllianceVotes)){
		if (currentParty == "SNP")
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	if ((PlaidVotes > ConservativeVotes) && (PlaidVotes > LabourVotes) && (PlaidVotes > BrexitVotes) && (PlaidVotes > GreenVotes) && (PlaidVotes > LibDemVotes) && (PlaidVotes > SNPVotes) && (PlaidVotes > DUPVotes) && (PlaidVotes > SinnFeinVotes) && (PlaidVotes > UUPVotes) && (PlaidVotes > SDLPVotes) && (PlaidVotes > AllianceVotes)) {
		if (currentParty == "Plaid Cymru")
		{
			return true;
		}
		else
		{
			return false;
		}	
	}
	if ((DUPVotes > ConservativeVotes) && (DUPVotes > LabourVotes) && (DUPVotes > BrexitVotes) && (DUPVotes > GreenVotes) && (DUPVotes > LibDemVotes) && (DUPVotes > SNPVotes) && (DUPVotes > PlaidVotes) && (DUPVotes > SinnFeinVotes) && (DUPVotes > UUPVotes) && (DUPVotes > SDLPVotes) && (DUPVotes > AllianceVotes)) {
		if (currentParty == "DUP")
		{
			return true;
		}
		else
		{
			return false;
		}
	}
	if ((SinnFeinVotes > ConservativeVotes) && (SinnFeinVotes > LabourVotes) && (SinnFeinVotes > BrexitVotes) && (SinnFeinVotes > GreenVotes) && (SinnFeinVotes > LibDemVotes) && (SinnFeinVotes > SNPVotes) && (SinnFeinVotes > PlaidVotes) && (SinnFeinVotes > DUPVotes) && (SinnFeinVotes > UUPVotes) && (SinnFeinVotes > SDLPVotes) && (SinnFeinVotes > AllianceVotes)) {
		if (currentParty == "Sinn Fein")
		{
			return true;
		}
		else
		{
			return false;
		}	
	}
	if ((UUPVotes > ConservativeVotes) && (UUPVotes > LabourVotes) && (UUPVotes > BrexitVotes) && (UUPVotes > GreenVotes) && (UUPVotes > LibDemVotes) && (UUPVotes > SNPVotes) && (UUPVotes > PlaidVotes) && (UUPVotes > SinnFeinVotes) && (UUPVotes > DUPVotes) && (UUPVotes > SDLPVotes) && (UUPVotes > AllianceVotes)) {
		if (currentParty == "UUP")
		{
			return true;
		}
		else
		{
			return false;
		}	
	}
	if ((SDLPVotes > ConservativeVotes) && (SDLPVotes > LabourVotes) && (SDLPVotes > BrexitVotes) && (SDLPVotes > GreenVotes) && (SDLPVotes > LibDemVotes) && (SDLPVotes > SNPVotes) && (SDLPVotes > PlaidVotes) && (SDLPVotes > SinnFeinVotes) && (SDLPVotes > UUPVotes) && (SDLPVotes > DUPVotes) && (SDLPVotes > AllianceVotes)) {
		if (currentParty == "SDLP")
		{
			return true;
		}
		else
		{
			return false;
		}	
	}
	if ((AllianceVotes > ConservativeVotes) && (AllianceVotes > LabourVotes) && (AllianceVotes > BrexitVotes) && (AllianceVotes > GreenVotes) && (AllianceVotes > LibDemVotes) && (AllianceVotes > SNPVotes) && (AllianceVotes > PlaidVotes) && (AllianceVotes > SinnFeinVotes) && (AllianceVotes > UUPVotes) && (AllianceVotes > SDLPVotes) && (AllianceVotes > DUPVotes)) {
		if (currentParty == "Alliance")
		{
			return true;
		}
		else
		{
			return false;
		}	
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
	var parties = ["Conservative","Labour","Liberal Democrats","BRX/REF UK","Green","SNP","Plaid Cymru","DUP","Sinn Fein","UUP","SDLP","Alliance"];
	let noOfParties = parties.length;
	var results = new Array(noOfParties);
	for (var i = 0; i < results.length; i++) {
		results[i] = new Array(3); //Loop through depending on how many districts there are and create new fields.
		results[i][1] = 0;
		results[i][2] = 0;
	}

	var index = 0; //Default index to 0 as this is the standard starting point for any array.
	
	
	
	constituencyCollection.eachLayer(function(currentLayer){
	for (var i = 0; i < parties.length; i++){
		results[index][0] = parties[i]; 
		results[index][1] = results[index][1] + ((parties[i] == "Conservative") ? Math.round(((currentLayer.feature.properties.Conservative * ConservativeModifier) * 1) / 1)
		: (parties[i] == "Labour") ? Math.round(((currentLayer.feature.properties.Labour * LabourModifier) * 1) / 1)
		: (parties[i] == "Liberal Democrats") ? Math.round(((currentLayer.feature.properties.LibDem * LibDemModifier) * 1) / 1)
		: (parties[i] == "BRX/REF UK") ? Math.round(((currentLayer.feature.properties.BrxRef * BrexitModifier) * 1) / 1)
		: (parties[i] == "Green") ? Math.round(((currentLayer.feature.properties.Green * GreenModifier) * 1) / 1)
		: (parties[i] == "SNP") ? Math.round(((currentLayer.feature.properties.SNP * SNPModifier) * 1) / 1)
		: (parties[i] == "Plaid Cymru") ? Math.round(((currentLayer.feature.properties.PlaidCymru * PlaidModifier) * 1) / 1)
		: (parties[i] == "DUP") ? Math.round(((currentLayer.feature.properties.DUP) * 1) / 1)
		: (parties[i] == "Sinn Fein") ? Math.round(((currentLayer.feature.properties.SinnFein) * 1) / 1)
		: (parties[i] == "UUP") ? Math.round(((currentLayer.feature.properties.UUP) * 1) / 1)
		: (parties[i] == "SDLP") ? Math.round(((currentLayer.feature.properties.SDLP) * 1) / 1)
		: Math.round(((currentLayer.feature.properties.Alliance) * 1) / 1));
		results[index][2] = (constituencyWinner(currentLayer, parties[i]) ? results[index][2] = results[index][2] + 1 : results[index][2]);
		index++;
	}
	index = 0;

	});	


	return results;
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



function calculateUserPrediction() {
	
	ConservativeModifier = 1 + ((document.getElementById("ConservativeInput").value - prevConservativeVoteShare) / prevConservativeVoteShare);
	LabourModifier = 1 + ((document.getElementById("LabourInput").value - prevLabourVoteShare) / prevLabourVoteShare);
	LibDemModifier = 1 + ((document.getElementById("LibDemInput").value - prevLibDemVoteShare) / prevLibDemVoteShare);
	BrexitModifier = 1 + ((document.getElementById("BrexitInput").value - prevBrexitVoteShare) / prevBrexitVoteShare);
	GreenModifier = 1 + ((document.getElementById("GreenInput").value - prevGreenVoteShare) / prevGreenVoteShare);
	SNPModifier = 1 + ((document.getElementById("SNPInput").value - prevSNPVoteShare) / prevSNPVoteShare);
	PlaidModifier = 1 + ((document.getElementById("PlaidInput").value - prevPlaidVoteShare) / prevPlaidVoteShare);;
	
	
	constituencies.eachLayer(function(layer){ //Iterate through each layer in a collection
		constituencies.resetStyle(layer);
	});

	currNationalResults = fillConstituencyArrays(constituencies, false);
	//Update Table
	currNationalResults.sort(sortFunction);
	updateResultsTable(currNationalResults, prevNationalResults);
}


function resetHighlightConstituencies(e) {
	constituencies.resetStyle(e.target);
}

function resetMap() {
	map.setView(new L.LatLng(51.5, 8), 6);
}


//Zoom in when user clicks on state/region
function zoomToFeatureConstituencyToConstituency(e) {
	map.fitBounds(e.target.getBounds());
	displayPopup(e);
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
	
	
	var prevArray = [["Conservative",parseInt(layer.feature.properties.Conservative, 10)],
	["Labour",parseInt(layer.feature.properties.Labour, 10)],
	["Liberal Democrats",parseInt(layer.feature.properties.LibDem, 10)],
	["BRX/REF UK",parseInt(layer.feature.properties.BrxRef, 10)],
	["Green",parseInt(layer.feature.properties.Green, 10)],
	["SNP",parseInt(layer.feature.properties.SNP, 10)],
	["Plaid Cymru",parseInt(layer.feature.properties.PlaidCymru, 10)],
	["DUP",parseInt(layer.feature.properties.DUP, 10)],
	["Sinn Fein",parseInt(layer.feature.properties.SinnFein, 10)],
	["UUP",parseInt(layer.feature.properties.UUP, 10)],
	["SDLP",parseInt(layer.feature.properties.SDLP, 10)],
	["Alliance",parseInt(layer.feature.properties.Alliance, 10)]];
	prevArray.sort(sortFunction);
	
	var currArray = [["Conservative",parseInt(layer.feature.properties.Conservative * ConservativeModifier, 10)],
	["Labour",parseInt(layer.feature.properties.Labour * LabourModifier, 10)],
	["Liberal Democrats",parseInt(layer.feature.properties.LibDem * LibDemModifier, 10)],
	["BRX/REF UK",parseInt(layer.feature.properties.BrxRef * BrexitModifier, 10)],
	["Green",parseInt(layer.feature.properties.Green * GreenModifier, 10)],
	["SNP",parseInt(layer.feature.properties.SNP * SNPModifier, 10)],
	["Plaid Cymru",parseInt(layer.feature.properties.PlaidCymru * PlaidModifier, 10)],
	["DUP",parseInt(layer.feature.properties.DUP, 10)],
	["Sinn Fein",parseInt(layer.feature.properties.SinnFein, 10)],
	["UUP",parseInt(layer.feature.properties.UUP, 10)],
	["SDLP",parseInt(layer.feature.properties.SDLP, 10)],
	["Alliance",parseInt(layer.feature.properties.Alliance, 10)]];
	currArray.sort(sortFunction);
	
	var voteTotalPrev = 0, voteTotalCurr = 0;
		

	
	for (var i = 0; i < prevArray.length; i++) {
		voteTotalPrev = voteTotalPrev + prevArray[i][1];
		voteTotalCurr = voteTotalCurr + currArray[i][1];
	}

	if (layer.feature.properties.UKNation == "England" || layer.feature.properties.UKNation == "Northern Ireland")
	{
		var list = "<b>" + layer.feature.properties.Constituency + ", "+ layer.feature.properties.UKNation +"</b></br>" 
		+ " Party | Vote, % </br>"
		+ "</br>"
		+ " Previous Results (2019): </br>"
		+ prevArray[0][0] + "  |  " + prevArray[0][1] + ", " + Math.round((((prevArray[0][1] / voteTotalPrev) * 100)) * 10) / 10  + "%</br>"
		+ prevArray[1][0] + "  |  " + prevArray[1][1] + ", " + Math.round((((prevArray[1][1] / voteTotalPrev) * 100)) * 10) / 10  + "%</br>"
		+ prevArray[2][0] + "  |  " + prevArray[2][1] + ", " + Math.round((((prevArray[2][1] / voteTotalPrev) * 100)) * 10) / 10  + "%</br>"
		+ prevArray[3][0] + "  |  " + prevArray[3][1] + ", " + Math.round((((prevArray[3][1] / voteTotalPrev) * 100)) * 10) / 10  + "%</br>"
		+ prevArray[4][0] + "  |  " + prevArray[4][1] + ", " + Math.round((((prevArray[4][1] / voteTotalPrev) * 100)) * 10) / 10  + "%</br>"
		+ " </br>"
		+ " Current Prediction: </br>"
		+ currArray[0][0] + "  |  " + currArray[0][1] + ", " + Math.round((((currArray[0][1] / voteTotalCurr) * 100)) * 10) / 10  + "%</br>"
		+ currArray[1][0] + "  |  " + currArray[1][1] + ", " + Math.round((((currArray[1][1] / voteTotalCurr) * 100)) * 10) / 10  + "%</br>"
		+ currArray[2][0] + "  |  " + currArray[2][1] + ", " + Math.round((((currArray[2][1] / voteTotalCurr) * 100)) * 10) / 10  + "%</br>"
		+ currArray[3][0] + "  |  " + currArray[3][1] + ", " + Math.round((((currArray[3][1] / voteTotalCurr) * 100)) * 10) / 10  + "%</br>"
		+ currArray[4][0] + "  |  " + currArray[4][1] + ", " + Math.round((((currArray[4][1] / voteTotalCurr) * 100)) * 10) / 10  + "%</br>";
	}
	else if (layer.feature.properties.UKNation == "Scotland" || layer.feature.properties.UKNation == "Wales")
	{
		var list = "<b>" + layer.feature.properties.Constituency + ", "+ layer.feature.properties.UKNation +"</b></br>" 
		+ " Party | Vote, % </br>"
		+ "</br>"
		+ " Previous Results (2019): </br>"
		+ prevArray[0][0] + "  |  " + prevArray[0][1] + ", " + Math.round((((prevArray[0][1] / voteTotalPrev) * 100)) * 10) / 10  + "%</br>"
		+ prevArray[1][0] + "  |  " + prevArray[1][1] + ", " + Math.round((((prevArray[1][1] / voteTotalPrev) * 100)) * 10) / 10  + "%</br>"
		+ prevArray[2][0] + "  |  " + prevArray[2][1] + ", " + Math.round((((prevArray[2][1] / voteTotalPrev) * 100)) * 10) / 10  + "%</br>"
		+ prevArray[3][0] + "  |  " + prevArray[3][1] + ", " + Math.round((((prevArray[3][1] / voteTotalPrev) * 100)) * 10) / 10  + "%</br>"
		+ prevArray[4][0] + "  |  " + prevArray[4][1] + ", " + Math.round((((prevArray[4][1] / voteTotalPrev) * 100)) * 10) / 10  + "%</br>"
		+ prevArray[5][0] + "  |  " + prevArray[5][1] + ", " + Math.round((((prevArray[5][1] / voteTotalPrev) * 100)) * 10) / 10  + "%</br>"
		+ " </br>"
		+ " Current Prediction: </br>"
		+ currArray[0][0] + "  |  " + currArray[0][1] + ", " + Math.round((((currArray[0][1] / voteTotalCurr) * 100)) * 10) / 10  + "%</br>"
		+ currArray[1][0] + "  |  " + currArray[1][1] + ", " + Math.round((((currArray[1][1] / voteTotalCurr) * 100)) * 10) / 10  + "%</br>"
		+ currArray[2][0] + "  |  " + currArray[2][1] + ", " + Math.round((((currArray[2][1] / voteTotalCurr) * 100)) * 10) / 10  + "%</br>"
		+ currArray[3][0] + "  |  " + currArray[3][1] + ", " + Math.round((((currArray[3][1] / voteTotalCurr) * 100)) * 10) / 10  + "%</br>"
		+ currArray[4][0] + "  |  " + currArray[4][1] + ", " + Math.round((((currArray[4][1] / voteTotalCurr) * 100)) * 10) / 10  + "%</br>"
		+ currArray[5][0] + "  |  " + currArray[5][1] + ", " + Math.round((((currArray[5][1] / voteTotalCurr) * 100)) * 10) / 10  + "%</br>";
		
	}
	
	popup.setContent(list);
	layer.bindPopup(popup);
	layer.openPopup();

}

function updateResultsTable(currResults, prevResults) {
	
	
	
	var partiesGB = ["Conservative","Labour","Liberal Democrats","BRX/REF UK","Green","SNP","Plaid Cymru"];
	var partiesNI = ["DUP","Sinn Fein","UUP","SDLP","Alliance"];
	
	var prevResultsGB = new Array(partiesGB.length), prevResultsNI = new Array(partiesNI.length);
	var currResultsGB = new Array(partiesGB.length), currResultsNI = new Array(partiesNI.length);

	var indexsGB = new Array(partiesGB.length);
	var indexGB = 0;
	var indexsNI = new Array(partiesNI.length);
	var indexNI = 0;

	
	for (var i = 0; i < partiesGB.length; i++) {
		prevResultsGB[i] = new Array(3); //Loop through depending on how many districts there are and create new fields.
		prevResultsGB[i][1] = 0;
		prevResultsGB[i][2] = 0;
		
		currResultsGB[i] = new Array(3); //Loop through depending on how many districts there are and create new fields.
		currResultsGB[i][1] = 0;
		currResultsGB[i][2] = 0;
	}
	
	for (var i = 0; i < partiesNI.length; i++) {
		prevResultsNI[i] = new Array(3); //Loop through depending on how many districts there are and create new fields.
		prevResultsNI[i][1] = 0;
		prevResultsNI[i][2] = 0;
		
		currResultsNI[i] = new Array(3); //Loop through depending on how many districts there are and create new fields.
		currResultsNI[i][1] = 0;
		currResultsNI[i][2] = 0;
	}
	
	console.log(prevResults);
	
	indexNI = 0;
	indexGB = 0;
	
	for (var i = 0; i < prevResults.length; i++) {
		if ((prevResults[i][0] == partiesNI[0]) || (prevResults[i][0] == partiesNI[1]) || (prevResults[i][0] == partiesNI[2]) || (prevResults[i][0] == partiesNI[3]) || (prevResults[i][0] == partiesNI[4])) 
		{
			prevResultsNI[indexNI][0] = prevResults[i][0];
			prevResultsNI[indexNI][1] = prevResults[i][1];
			prevResultsNI[indexNI][2] = prevResults[i][2];
			indexNI++;
		}
		else
		{
			prevResultsGB[indexGB][0] = prevResults[i][0];
			prevResultsGB[indexGB][1] = prevResults[i][1];
			prevResultsGB[indexGB][2] = prevResults[i][2];
			indexGB++;
		}
	}
	
	indexNI = 0;
	indexGB = 0;
	
	for (var i = 0; i < currResults.length; i++) {
		if ((currResults[i][0] == partiesNI[0]) || (currResults[i][0] == partiesNI[1]) || (currResults[i][0] == partiesNI[2]) || (currResults[i][0] == partiesNI[3]) || (currResults[i][0] == partiesNI[4])) 
		{
			currResultsNI[indexNI][0] = currResults[i][0];
			currResultsNI[indexNI][1] = currResults[i][1];
			currResultsNI[indexNI][2] = currResults[i][2];
			indexNI++;
		}
		else
		{
			currResultsGB[indexGB][0] = currResults[i][0];
			currResultsGB[indexGB][1] = currResults[i][1];
			currResultsGB[indexGB][2] = currResults[i][2];
			indexGB++;
		}
	}

	indexNI = 0;
	indexGB = 0;
	
	for (var i = 0; i < currResultsGB.length; i++) {
		for (var j = 0; j < prevResultsGB.length; j++){
			if (prevResultsGB[j][0] == currResultsGB[i][0]) {
				indexsGB[indexGB] = j;
				indexGB++;
			}
		}
	}
	
	for (var i = 0; i < currResultsNI.length; i++) {
		for (var j = 0; j < prevResultsNI.length; j++){
			if (prevResultsNI[j][0] == currResultsNI[i][0]) {
				indexsNI[indexNI] = j;
				indexNI++;
			}
		}
	}

	var totalVotesCurr = 0, totalSeats = 0, totalVotesPrev = 0;
	for (i = 0; i < currResultsGB.length; i++){
		totalVotesCurr = totalVotesCurr + currResultsGB[i][1]
		totalSeats = totalSeats + currResultsGB[i][2]
		totalVotesPrev = totalVotesPrev + prevResultsGB[i][1]
	}
	for (i = 0; i < currResultsNI.length; i++){
		totalVotesCurr = totalVotesCurr + currResultsNI[i][1]
		totalSeats = totalSeats + currResultsNI[i][2]
		totalVotesPrev = totalVotesPrev + prevResultsNI[i][1]
	}
	
	document.getElementById("Party1Name").value = currResultsGB[0][0];
	document.getElementById("Party1Votes").value = currResultsGB[0][1];
	document.getElementById("Party1VoteShare").value = Math.round((currResultsGB[0][1] / totalVotesCurr * 100) * 10) / 10;
	document.getElementById("Party1Swing").value = ((Math.round(((currResultsGB[0][1] / totalVotesCurr * 100) - (prevResultsGB[indexsGB[0]][1] / totalVotesPrev * 100)) * 10) / 10) > 0 ? "+"+(Math.round(((currResultsGB[0][1] / totalVotesCurr * 100) - (prevResultsGB[indexsGB[0]][1] / totalVotesPrev * 100)) * 10) / 10) : (Math.round(((currResultsGB[0][1] / totalVotesCurr * 100) - (prevResultsGB[indexsGB[0]][1] / totalVotesPrev * 100)) * 10) / 10));
	document.getElementById("Party1Seats").value = currResultsGB[0][2];
	document.getElementById("Party1SeatChange").value = ((currResultsGB[0][2]) - (prevResultsGB[indexsGB[0]][2]) > 0 ? "+"+((currResultsGB[0][2]) - (prevResultsGB[indexsGB[0]][2])) : ((currResultsGB[0][2]) - (prevResultsGB[indexsGB[0]][2])));
	document.getElementById("Party1SeatShare").value = Math.round(((currResultsGB[0][2]) / totalSeats * 100) * 10) / 10;
	
	document.getElementById("Party2Name").value = currResultsGB[1][0];
	document.getElementById("Party2Votes").value = currResultsGB[1][1];
	document.getElementById("Party2VoteShare").value = Math.round((currResultsGB[1][1] / totalVotesCurr * 100) * 10) / 10;
	document.getElementById("Party2Swing").value = ((Math.round(((currResultsGB[1][1] / totalVotesCurr * 100) - (prevResultsGB[indexsGB[1]][1] / totalVotesPrev * 100)) * 10) / 10) > 0 ? "+"+(Math.round(((currResultsGB[1][1] / totalVotesCurr * 100) - (prevResultsGB[indexsGB[1]][1] / totalVotesPrev * 100)) * 10) / 10) : (Math.round(((currResultsGB[1][1] / totalVotesCurr * 100) - (prevResultsGB[indexsGB[1]][1] / totalVotesPrev * 100)) * 10) / 10));
	document.getElementById("Party2Seats").value = currResultsGB[1][2];
	document.getElementById("Party2SeatChange").value = ((currResultsGB[1][2]) - (prevResultsGB[indexsGB[1]][2]) > 0 ? "+"+((currResultsGB[1][2]) - (prevResultsGB[indexsGB[1]][2])) : ((currResultsGB[1][2]) - (prevResultsGB[indexsGB[1]][2])));
	document.getElementById("Party2SeatShare").value = Math.round(((currResultsGB[1][2]) / totalSeats * 100) * 10) / 10;

	document.getElementById("Party3Name").value = currResultsGB[2][0];
	document.getElementById("Party3Votes").value = currResultsGB[2][1];
	document.getElementById("Party3VoteShare").value = Math.round((currResultsGB[2][1] / totalVotesCurr * 100) * 10) / 10;
	document.getElementById("Party3Swing").value = ((Math.round(((currResultsGB[2][1] / totalVotesCurr * 100) - (prevResultsGB[indexsGB[2]][1] / totalVotesPrev * 100)) * 10) / 10) > 0 ? "+"+(Math.round(((currResultsGB[2][1] / totalVotesCurr * 100) - (prevResultsGB[indexsGB[2]][1] / totalVotesPrev * 100)) * 10) / 10) : (Math.round(((currResultsGB[2][1] / totalVotesCurr * 100) - (prevResultsGB[indexsGB[2]][1] / totalVotesPrev * 100)) * 10) / 10));
	document.getElementById("Party3Seats").value = currResultsGB[2][2];
	document.getElementById("Party3SeatChange").value = ((currResultsGB[2][2]) - (prevResultsGB[indexsGB[2]][2]) > 0 ? "+"+((currResultsGB[2][2]) - (prevResultsGB[indexsGB[2]][2])) : ((currResultsGB[2][2]) - (prevResultsGB[indexsGB[2]][2])));
	document.getElementById("Party3SeatShare").value = Math.round(((currResultsGB[2][2]) / totalSeats * 100) * 10) / 10;

	document.getElementById("Party4Name").value = currResultsGB[3][0];
	document.getElementById("Party4Votes").value = currResultsGB[3][1];
	document.getElementById("Party4VoteShare").value = Math.round((currResultsGB[3][1] / totalVotesCurr * 100) * 10) / 10;
	document.getElementById("Party4Swing").value = ((Math.round(((currResultsGB[3][1] / totalVotesCurr * 100) - (prevResultsGB[indexsGB[3]][1] / totalVotesPrev * 100)) * 10) / 10) > 0 ? "+"+(Math.round(((currResultsGB[3][1] / totalVotesCurr * 100) - (prevResultsGB[indexsGB[3]][1] / totalVotesPrev * 100)) * 10) / 10) : (Math.round(((currResultsGB[3][1] / totalVotesCurr * 100) - (prevResultsGB[indexsGB[3]][1] / totalVotesPrev * 100)) * 10) / 10));
	document.getElementById("Party4Seats").value = currResultsGB[3][2];
	document.getElementById("Party4SeatChange").value = ((currResultsGB[3][2]) - (prevResultsGB[indexsGB[3]][2]) > 0 ? "+"+((currResultsGB[3][2]) - (prevResultsGB[indexsGB[3]][2])) : ((currResultsGB[3][2]) - (prevResultsGB[indexsGB[3]][2])));
	document.getElementById("Party4SeatShare").value = Math.round(((currResultsGB[3][2]) / totalSeats * 100) * 10) / 10;
	
	document.getElementById("Party5Name").value = currResultsGB[4][0];
	document.getElementById("Party5Votes").value = currResultsGB[4][1];
	document.getElementById("Party5VoteShare").value = Math.round((currResultsGB[4][1] / totalVotesCurr * 100) * 10) / 10;
	document.getElementById("Party5Swing").value = ((Math.round(((currResultsGB[4][1] / totalVotesCurr * 100) - (prevResultsGB[indexsGB[4]][1] / totalVotesPrev * 100)) * 10) / 10) > 0 ? "+"+(Math.round(((currResultsGB[4][1] / totalVotesCurr * 100) - (prevResultsGB[indexsGB[4]][1] / totalVotesPrev * 100)) * 10) / 10) : (Math.round(((currResultsGB[4][1] / totalVotesCurr * 100) - (prevResultsGB[indexsGB[4]][1] / totalVotesPrev * 100)) * 10) / 10));
	document.getElementById("Party5Seats").value = currResultsGB[4][2];
	document.getElementById("Party5SeatChange").value = ((currResultsGB[4][2]) - (prevResultsGB[indexsGB[4]][2]) > 0 ? "+"+((currResultsGB[4][2]) - (prevResultsGB[indexsGB[4]][2])) : ((currResultsGB[4][2]) - (prevResultsGB[indexsGB[4]][2])));
	document.getElementById("Party5SeatShare").value = Math.round(((currResultsGB[4][2]) / totalSeats * 100) * 10) / 10;
	
	document.getElementById("Party6Name").value = currResultsGB[5][0];
	document.getElementById("Party6Votes").value = currResultsGB[5][1];
	document.getElementById("Party6VoteShare").value = Math.round((currResultsGB[5][1] / totalVotesCurr * 100) * 10) / 10;
	document.getElementById("Party6Swing").value = ((Math.round(((currResultsGB[5][1] / totalVotesCurr * 100) - (prevResultsGB[indexsGB[5]][1] / totalVotesPrev * 100)) * 10) / 10) > 0 ? "+"+(Math.round(((currResultsGB[5][1] / totalVotesCurr * 100) - (prevResultsGB[indexsGB[5]][1] / totalVotesPrev * 100)) * 10) / 10) : (Math.round(((currResultsGB[5][1] / totalVotesCurr * 100) - (prevResultsGB[indexsGB[5]][1] / totalVotesPrev * 100)) * 10) / 10));
	document.getElementById("Party6Seats").value = currResultsGB[5][2];
	document.getElementById("Party6SeatChange").value = ((currResultsGB[5][2]) - (prevResultsGB[indexsGB[5]][2]) > 0 ? "+"+((currResultsGB[5][2]) - (prevResultsGB[indexsGB[5]][2])) : ((currResultsGB[5][2]) - (prevResultsGB[indexsGB[5]][2])));
	document.getElementById("Party6SeatShare").value = Math.round(((currResultsGB[5][2]) / totalSeats * 100) * 10) / 10;	

	document.getElementById("Party7Name").value = currResultsGB[6][0];
	document.getElementById("Party7Votes").value = currResultsGB[6][1];
	document.getElementById("Party7VoteShare").value = Math.round((currResultsGB[6][1] / totalVotesCurr * 100) * 10) / 10;
	document.getElementById("Party7Swing").value = ((Math.round(((currResultsGB[6][1] / totalVotesCurr * 100) - (prevResultsGB[indexsGB[6]][1] / totalVotesPrev * 100)) * 10) / 10) > 0 ? "+"+(Math.round(((currResultsGB[6][1] / totalVotesCurr * 100) - (prevResultsGB[indexsGB[6]][1] / totalVotesPrev * 100)) * 10) / 10) : (Math.round(((currResultsGB[6][1] / totalVotesCurr * 100) - (prevResultsGB[indexsGB[6]][1] / totalVotesPrev * 100)) * 10) / 10));
	document.getElementById("Party7Seats").value = currResultsGB[6][2];
	document.getElementById("Party7SeatChange").value = ((currResultsGB[6][2]) - (prevResultsGB[indexsGB[6]][2]) > 0 ? "+"+((currResultsGB[6][2]) - (prevResultsGB[indexsGB[6]][2])) : ((currResultsGB[6][2]) - (prevResultsGB[indexsGB[6]][2])));
	document.getElementById("Party7SeatShare").value = Math.round(((currResultsGB[6][2]) / totalSeats * 100) * 10) / 10;	

	var prevVotesNI = 0, currVotesNI = 0, prevSeatsNI = 0, currSeatsNI = 0;
	for (i = 0; i < prevResultsNI.length; i++){
		prevVotesNI = prevVotesNI + prevResultsNI[i][1]
		currVotesNI = currVotesNI + currResultsNI[i][1]
		prevSeatsNI = prevSeatsNI + prevResultsNI[i][2]
		currSeatsNI = currSeatsNI + currResultsNI[i][2]
	}
	
	document.getElementById("Party8Name").value = "N Ireland";
	document.getElementById("Party8Votes").value = currVotesNI;
	document.getElementById("Party8VoteShare").value = Math.round((currVotesNI / totalVotesCurr * 100) * 10) / 10;
	document.getElementById("Party8Swing").value = ((Math.round(((currVotesNI / totalVotesCurr * 100) - (prevVotesNI / totalVotesPrev * 100)) * 10) / 10) > 0 ? "+"+(Math.round(((currVotesNI / totalVotesCurr * 100) - (prevVotesNI / totalVotesPrev * 100)) * 10) / 10) : (Math.round(((currVotesNI / totalVotesCurr * 100) - (prevVotesNI / totalVotesPrev * 100)) * 10) / 10));
	document.getElementById("Party8Seats").value = currSeatsNI;
	document.getElementById("Party8SeatChange").value = ((currSeatsNI) - (prevSeatsNI) > 0 ? "+"+((currSeatsNI) - (prevSeatsNI)) : ((currSeatsNI) - (prevSeatsNI)));
	document.getElementById("Party8SeatShare").value = Math.round(((currSeatsNI) / totalSeats * 100) * 10) / 10;	



}

displayCurrentProjection();

