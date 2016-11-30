angular.module('home.controllers.HomeCtrl', [])
    .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['$location', 'SectionModel'];

    function HomeCtrl($location, SectionModel){
        var vm = this;

        vm.sections = SectionModel.getSections();

        vm.routeTo = function(route){
            $location.path('/' + route).replace();
        };
    }