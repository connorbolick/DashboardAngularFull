myApp.controller('deleteController', function($scope, $routeParams, $location, mongooseFactory){

	var mongId = $routeParams.id;
	mongooseFactory.deleteMongoose(mongId, function(data){
		console.log('delete controller,', data);
		$location.path('/');
	});

	// $scope.updateMongoose = function(){
	// 	mongooseFactory.updateMongoose($scope.editMongoose, function(data){
	// 		$location.path('/');
	// 	})
	// }
})
