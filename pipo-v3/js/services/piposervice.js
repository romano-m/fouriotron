app.factory('piposervice', ['$http', function($http) {
	return $http.get('https://spreadsheets.google.com/feeds/cells/1lA48iNtovVljCmJme-QxO2vxFTNnpdwlhT0YtzKUGkk/od6/public/full?alt=json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);