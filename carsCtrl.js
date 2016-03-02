app.controller('carsCtrl', function($scope, carsRef, $firebaseArray) {

    $scope.cars = $firebaseArray(carsRef);

    $scope.addCar = function(carObj) {
        $scope.cars.$add(carObj)
            .then(function(ref) {
                console.log('Car added!');
            })
    }

});
