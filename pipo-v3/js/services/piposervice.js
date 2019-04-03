app.factory('piposervice', ['$http', function($http) {
	return $http.get('https://spreadsheets.google.com/feeds/cells/1dRyglHfXkPc-x-xMcd1kibl-4vPbyKpyMvgtV5xznd0/od6/public/full?alt=json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);