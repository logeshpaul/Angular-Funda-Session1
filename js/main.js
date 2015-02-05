var myApp = angular.module('myApp',[]); // dependencies, -> eg. helperModule

myApp.controller('SimpleController', ['$scope', function($scope) {
	$scope.customers = [
		{ name: 'John Paul', city: 'San Francisco' },
		{ name: 'Mike', city: 'New York' },
		{ name: 'Phil Morle', city: 'Sydney' }
	];
}]);