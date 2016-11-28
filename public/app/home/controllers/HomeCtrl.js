angular.module('home.controllers.HomeCtrl', [])
    .controller('HomeCtrl', HomeCtrl);

    HomeCtrl.$inject = ['SectionModel'];

    function HomeCtrl(SectionModel){
        var vm = this;

        vm.sections = SectionModel.getSections();
    }