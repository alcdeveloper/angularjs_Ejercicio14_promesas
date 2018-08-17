var app = angular.module('promesaApp.controladores',[]);

app.controller('mainCtrl',['$scope', '$q', function($scope , $q){
	$scope.miVar = 0 ;


	$scope.sumar = function(num){
		var q = $q.defer();
		var valido = true;
		num++;

		setTimeout(function(){

		if(valido){
			q.resolve(num)
			$scope.miVar = num;
		}else{
			q.reject("error" );
			$scope.miVar = "error" ;
		}

		},2000);

		return q.promise;

	}


	$scope.promise = $scope.sumar(1);
	$scope.promise.then(
		function (valor){
			console.log("promesa cumplida");
			$scope.mirVar = valor;
		},
		function(error){
			console.error(error)
	});
}]);