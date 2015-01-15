'use strict';

angular.module('xelhark.ngTabcordion', [])
    .directive('tabCordion', function() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                showCloseButton: '@',
                contentAbove: '@'
            },
            controller: function($scope) {
                var panes = $scope.panes = [];

                $scope.select = function(pane) {
                    $scope.close();
                    pane.selected = true;
                };

                $scope.close = function(){
                    for(var i=0;i<$scope.panes.length;i++){
                        $scope.panes[i].selected = false;
                    }
                };

                this.addPane = function(pane) {
                    panes.push(pane);
                };
            },
            template:   "<div class='tabbable'>" +
                "<a ng-if='showCloseButton==\"true\"' ng-click='close()'>close</a>" +
                "<div ng-if='contentAbove==\"true\"' class='tab-content' ng-transclude></div>" +
                "<ul class='nav nav-tabs'>" +
                "<li ng-repeat='pane in panes' ng-class='{active:pane.selected}'>" +
                "<a href='' ng-click='select(pane)'>{{pane.title}}</a>" +
                "</li>" +
                "</ul>" +
                "<div ng-if='contentAbove!=\"true\"' class='tab-content' ng-transclude></div>" +
                "</div>"
        };
    })
    .directive('tabCordionPane', function() {
        return {
            require: '^tabCordion',
            restrict: 'E',
            transclude: true,
            scope: {
                title: '@'
            },
            link: function(scope, element, attrs, tabsCtrl) {
                tabsCtrl.addPane(scope);
            },
            template: "<div class='tab-pane' ng-class='{active: selected}' ng-transclude></div>"
        };
    });

