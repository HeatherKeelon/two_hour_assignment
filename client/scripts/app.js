var myApp=angular.module("myApp", ["ngRoute", "ngAnimate"]);

myApp.config(["$routeProvider", function($routeProvider){
    $routeProvider.
        when('/home', {
            templateUrl: "assets/views/routes/home.html",
            controller: "TestController"
        }).
        when('/about', {
            templateUrl: "assets/views/routes/about.html",
            controller: "TestController"
        }).
        when('/tips', {
            templateUrl: "assets/views/routes/tips.html",
            controller: "TestController"
        }).
        when('/find', {
            templateUrl: "assets/views/routes/find.html",
            controller: "TestController"
        }).
        when('/contact', {
            templateUrl: "assets/views/routes/contact.html",
            controller: "TestController"
        }).
        otherwise({
            redirectTo: 'home'
        })
}]);