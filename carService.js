app.service('carService', function() {

    var url = 'https://carscarscars.firebaseio.com/cars/';

    this.getCars = function() {
        var carsRef = new Firebase(url);
        return carsRef;
    };


    this.getCar = function(id) {
        var carRef = new Firebase(url + id);
        return carRef;
    };

    this.getComments = function(id) {
        var commentsRef = new Firebase(url + id + 'comments');
        return commentsRef;
    };

});
