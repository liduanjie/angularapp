require.config({
	baseUrl: './js',
	paths: {
		app: 'app',
		lib: 'lib'
	}
})

require(['lib/angular.min'], function () {
	var app = angular.module('myapp', []);
	app.controller('event1', function($scope) {
		$scope.count = 1;
		$scope.myfun = function () {
			$scope.count ++;
		}
		$scope.dec = function() {
			$scope.count --;
		}
		$scope.funx = function() {
			alert()
		}
	})

	app.controller('mycc', function($scope) {
		$scope.showme  = false;
		$scope.myfun = function() {
			$scope.showme = !$scope.showme; 
		}
	})

	app.controller('myccc', function($scope) {
		$scope.myfunc1 = function(my) {
			console.log(my)	
			$scope.x = my.clientX;
			$scope.y = my.clientY;
		}
	})
	app.controller('liduanjie', function ($scope) {
		$scope.count = 0;
		$scope.xx = function (my) {
			if (my.code == 'Backspace') {
				$scope.count --;
			} else {
				$scope.count ++;
			}
		}
	})
	app.controller('formctrl', function($scope) {
		$scope.user = {
			firstname: 'liduanjie',
			lastname: 'lastname'
		};
		$scope.clone = $scope.user;
		$scope.reset = function () {
			$scope.user = $scope.user;
		}	
	})

	app.controller('edittable', function($scope) {
		$scope.data = [{
			edit: 'edit',
			firstname: 'firstname',
			lastname: 'lastname'
		},{
			edit: 'edit',
			firstname: 'firstname',
			lastname: 'lastname'
		}]

	})
})