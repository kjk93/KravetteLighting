angular.module('KravetteLighting', [
    
    'ngRoute',
    'ngMaterial',

    //Components
    'app.home',
    'app.header',
    'app.about',
    'app.common'
])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/home', {
                templateUrl: 'app/home/views/home.tpl.html',
                controller: 'HomeCtrl',
                controllerAs: 'home'
            })
            .when('/about', {
                templateUrl: 'app/about/views/about.tpl.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }]);   