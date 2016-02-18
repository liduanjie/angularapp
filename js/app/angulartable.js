require.config({
	baseUrl: './js',
	paths: {
		'app': 'app',
		'lib': 'lib',
	}
})


require(['lib/angular.min', 'app/angulartable'], function() {
	var app = angular.module('myapp', []);
		app.controller('angulartable', function ($scope) {
			$scope.names = [{
				name: 'liduanjie', 
				country: 'china'
			},{
				name: 'zhnegzhe', 
				country: 'englishs'
			}];
			$scope.sort1 = function(x) {
				$scope.sort = x;
				console.log(x)
			}
		})

	app.controller('selectctrl', function($scope){
		$scope.names = ['namekfo', 'sofios', 'sdsiofi'];
	})
})