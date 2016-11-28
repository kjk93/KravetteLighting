angular.module('common.directives.bgImg', [])
    .directive('bgImg', bgImg);

    function bgImg($log){
        var directive = {
            Restrict: 'A',
            link: link
        };

        return directive;

        function link(scope, elem, attr){
            $log.log(attr.bgImg);
            elem.css('background-image', 'url('+ attr.bgImg + ')');
            $log.log(elem);
        }
    }