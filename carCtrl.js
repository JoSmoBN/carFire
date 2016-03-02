app.controller('carCtrl', function($scope, carRef, commentsRef, $firebaseArray, $firebaseObject) {

    $scope.car = $firebaseObject(carRef);
    $scope.comments = $firebaseArray(commentsRef);

});
