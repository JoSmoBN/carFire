var app = angular.module('carFire', ['ui.router', 'firebase']);

app.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('cars', {
            url: '/cars',
            templateUrl: '/templates/cars.html',
            controller: 'carsCtrl',
            resolve: {
                carsRef: function(carService) {
                    return carService.getCars();
                }
            }
    })
        .state('car', {
            url: '/cars/:carId',
            templateUrl: '/templates/car.html',
            resolve: {
                carRef: function(carService, $stateParams) {
                    return carService.getCar($stateParams.carId);
                },
                commentsRef: function(carService, $stateParams) {
                    return carService.getComments($stateParams.carId);
                }
            }
        });




    $urlRouterProvider.otherwise('/cars');

})
