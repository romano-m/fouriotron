app.controller('MainController', ['$scope', 'piposervice', function($scope, piposervice) {
	$scope.title = 'I\'m not an on-demand trolling machine !! Wait a minute...';
	$scope.phrase = "";
	$scope.pipos = [
		{
			id: 1,
			'content': [],
			'current': "",
			'currentId': "",
			'currentHashtag': false
		},
		{
			id: 2,
			'content': [],
			'current': "",
			'currentId': "",
			'currentHashtag': false
		},
		{
			id: 3,
			'content': [],
			'current': "",
			'currentId': "",
			'currentHashtag': false
		},
		{
			id: 4,
			'content': [],
			'current': "",
			'currentId': "",
			'currentHashtag': false
		}
	]

	piposervice.success(function(data) { 
		$scope.pipodata = data.feed.entry;
		for (var i = 0; i < $scope.pipodata.length; i++) {
			for (var j = 0; j < 5; j++) {
				if (($scope.pipodata[i].gs$cell.col == j) && ($scope.pipodata[i].gs$cell.row != 1)) {
				$scope.pipos[j-1].content.push($scope.pipodata[i].gs$cell.inputValue);
				}
			}
		}
		$scope.selectPipo(true);
	});

	$scope.selectPipo = function(launch) {
		$scope.phrase = "";
		for (var i=1; i < 5; i++) {
			$scope.selectPipoN(i, launch);
		}

	};

	$scope.generatePhrase = function() {
		$scope.phrase = "";
		for (var i=1; i < 5; i++) {
			$scope.phrase = $scope.phrase + " " + $scope.pipos[i-1].current;
		}
		console.log($scope.phrase);
	}

	$scope.selectPipoN = function(idpipo, launch) {
		for (var i = 0; i < $scope.pipos.length; i++) {
			var pipo = $scope.pipos[i];
			if (pipo.id == idpipo) {
				var j = Math.floor(Math.random() * pipo.content.length);
				$scope.pipos[i].current = pipo.content[j];
				$scope.pipos[i].currentId = j;
				console.log("Pipo added : " + $scope.pipos[i].current);
			};
		};
		$scope.generatePhrase();
	};



}])