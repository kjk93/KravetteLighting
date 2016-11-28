angular.module('KravetteLighting', [
    
    'ngRoute',
    'ngMaterial',

    //Components
    'app.home',
    'app.header',
    'app.common'
])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/home', {
                templateUrl: 'app/home/views/home.tpl.html',
                controller: 'HomeCtrl',
                controllerAs: 'home'
            })
            .otherwise({
                redirectTo: '/home'
            });
    }]);   