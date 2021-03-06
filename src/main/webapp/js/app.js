var app = angular.module("remindit", ['ngRoute', 'ngCookies', 'Controllers']);

app.config(function ($routeProvider) {
        $routeProvider.when('/', {templateUrl:'templates/home.html', controller:'HomeController'})
        $routeProvider.when('/signin', {templateUrl:'templates/signin.html', controller:'AuthController'})
        $routeProvider.when('/signup', {templateUrl:'templates/signup.html', controller:'AuthController'})
        $routeProvider.otherwise({redirectTo : '/'});

    });

app.run(function($rootScope, $location, $routeParams) {
        $rootScope.$on('$routeChangeSuccess', function(e, current, pre) {
            console.log('Current route name: ' + $location.path());
            // Get all URL parameter
            console.log($routeParams);
        })

    });
