var clima = angular.module("clima",[])
clima.controller("weather",function($rootScope,$scope,$http){
	$http({
		method: "GET",
		url: "https://api.openweathermap.org/data/2.5/weather?q=Republic of Guatemala &APPID=96e21bc54acc9a2ec080a471e0155a16"
	}).then(function callbackSuccess(y){
		console.log(y.data)
		$scope.weatherB = [];
		$scope.weatherB.push(y)
	})	
})
