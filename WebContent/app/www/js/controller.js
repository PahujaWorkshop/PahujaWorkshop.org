function HomeCtrl() {
}

function AboutCtrl() {
}

function MenuCtrl($rootScope, $scope) {

	$scope.setService = function(service) {
		$rootScope.service = service;
	};
}