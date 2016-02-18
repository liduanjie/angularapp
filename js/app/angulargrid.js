require.config({
	baseUrl:'./js',
	paths: {
		app: 'app',
		lib: 'lib'
	}
})

require(['lib/angular.min'], function() {
	var app = angular.module('angulargrid', []);
	app.controller('ctrl1',function($scope){
		$scope.data = {
			sort: [{name:'综合排序', id:1}, {name:'人气',id:2}, {name:'销量', id:3}, {name: '信用', id:4}, {name:'价格', id: 5}]
		}
		$scope.sort = function() {

		}
		$scope.profilter = function(filter) {
			$scope.profilter1 = filter;
		}
		$scope.product = [
			{
				img: 'http://placehold.it/200x200',
				price: '1200',
				title: 'china',
				buyer: '100',
				garuteen: 'true',
				issecondhand: 'true',
				transfertime: '12',
				ispost: true,
				istmall: true,
				isoversea: true,
				isnew: true
			},
			{
				img: 'http://placehold.it/200x200',
				price: '1200',
				title: 'xsfs',
				buyer: '10',
				garuteen: false,
				issecondhand: 'true',
				transfertime: '12',
				ispost: true,
				istmall: true,
				isoversea: false,
				isnew: true
			},
			{
				img: 'http://placehold.it/200x200?text=ssfois',
				price: '1200',
				title: 'siosdfsfiosifosdfisdoi',
				buyer: '100',
				garuteen: true,
				issecondhand: false,
				transfertime: '12',
				ispost: true,
				istmall: true,
				isoversea: true,
				isnew: true
			},
		]
	})
	app.filter('filter11', function() {
		var scope = $scope.sort1
		alert(scope)
		return scope;
	})
})