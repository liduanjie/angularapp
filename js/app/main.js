require.config({
	baseUrl: './js',
	paths: {
		lib: 'lib',
		app: 'app'
	}
})

require(['app/custom' ,'lib/jquery',  'lib/angular.min'], function(cus) {
	// 调用类
	var people1 = new cus.people('name', 32);
	var data = people1.print()

	// angular 
	var app = angular.module('myapp', []);
	app.run(function($rootScope) {
		$rootScope.color = 'blue'
	})
	app.controller('myctrl', function($scope){
		$scope.firstname = 'liduanjie',
		$scope.lastname = 'ldiuanji'
	})
	app.controller('xx', function($scope){
		$scope.name1 = 'liduanjie is name'
	})
	app.controller('set', function($scope) {
		$scope.firstname = 'lee';
		$scope.lastname = 'jie';
		$scope.fullname = function () {
			return $scope.firstname + ' ' + $scope.lastname;
		}
	} )
	app.controller('repeat1', function ($scope) {
		$scope.names = [
			{name: 'liduanjie', country: 'country1'},
			{name: 'name2', country: 'country2'},
			{name: 'name3', country: 'country3'}
		]
	})

	app.controller('li', function($scope){
		$scope.currency = 2000;
	})


	app.controller('namesCtrl', function($scope) {
		$scope.names = [
			{name: 'maiios', country: 'sisof'},
			{name: 'sf', country: 'sisosfsff'},
			{name: 'sf', country: 'sissfsfof'},
			{name: 'mdfsfsaiios', country: 'sissfof'},
			{name: 'msfsdfaiios', country: 'sisfsfsof'},
			{name: 'sffsfmaiios', country: 'sisof'}
		];
		$scope.print = function (x) {
			console.log(x)
		}
		$scope.orderByMe = function(x) {
			$scope.myOrderBy = x;
		}
	})

	app.filter('myformat', function () {
		return function(x){
			var i, c, txt = '';
			x = x.split('')
			for(i = 0; i < x.length; i++) {
				c = x[i];
				if (i % 2 == 0) {
					c = c.toUpperCase();
				} 
				txt += c;
			}
			return txt;
		}
	})

	app.controller('ctrl1', function($scope){
		$scope.names = ['siosdiofs', 'sfidfo', 'sifos', 'sioieiw']
	})

	// service a function, object, is available and limit to angularjs
	app.controller('ctrl2', function ($scope, $location){
		myUrl = $location.absUrl()
		console.log(myUrl)
	})

	app.controller('ctrl3', function($scope, $http){
		$http.get('http://www.baidu.com').then(function(respond) {
			$scope.mywelcome = respond.data;
		})
	})

	app.controller('ctrl4', function($scope, $timeout){
		$scope.myheader = 'hello world';
		$timeout(function() {
			$scope.myheader = 'how areyou  today?';
		}, 2000	)	
	})
	app.controller('ctrl5', function($scope, $interval){
		$scope.theTime = new Date().toLocaleTimeString();
		$interval(function() {
			$scope.theTime = new Date().toLocaleTimeString();
		}, 1000)
	})

	app.service('haxafy',function () {
		this.myFun = function (x) {
			return x.toString(16);
		}
	})

	app.controller('ctrl6', function($scope, haxafy){
		$scope.hex = haxafy.myFun(2555);	
	})

	app.filter('myformat1', function() {
		return function (x) {
			return haxafy.myFunc(x);
		}
	})

	app.controller('liduanjie', function($scope) {
		$scope.information = [{
			name: 'liduanie',
			country: 'lsifsofi'
		},{
			name: 'ssdded',
			country: 'lsiffsfsdsofi'
		},{
			name: 'sfsdfsdf',
			country: 'lsdfsfdsifsofi'
		}];
		// $scope.filt = function (x) {
		// 	$scope.filter1 = x;
		// }
	})

	app.controller('ctrl12', function($scope, $http) {
		$http.get('flex.html').then(function (response) {
			$scope.content = response.data;
			$scope.statuscode = response.status;
			$scope.statustext = response.statustext;
		})
	})

	app.controller('anotherctrl', function ($scope, $http) {
		$http.get('http://www.w3schools.com/angular/customers.php').then(function(response) {
			$scope.mydata = response.data.records;
		})
	})
	app.controller('anoctrl', function($scope, $http) {
		$http.get('data.php').then(function(response) {
			$scope.mydata = response.data.record;
		})
	})

	app.controller('click12', function($scope){
		$scope.myfun = function () {
			$scope.count++;
		}
	})

	app.controller('mycc', function ($scope) {
		$scope.showme = false;
		$scope.myfun = !$scope.showme;
	})
})