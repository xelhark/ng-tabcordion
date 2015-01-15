'use strict';
angular.module('xelhark.ngTabcordion', []).directive('tabCordion', function () {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      showCloseButton: '@',
      contentAbove: '@'
    },
    controller: [
      '$scope',
      function ($scope) {
        var panes = $scope.panes = [];
        $scope.select = function (pane) {
          $scope.close();
          pane.selected = true;
        };
        $scope.close = function () {
          for (var i = 0; i < $scope.panes.length; i++) {
            $scope.panes[i].selected = false;
          }
        };
        this.addPane = function (pane) {
          panes.push(pane);
        };
      }
    ],
    templateUrl: 'templates/TabCordion.html'
  };
}).directive('tabCordionPane', function () {
  return {
    require: '^tabCordion',
    restrict: 'E',
    transclude: true,
    scope: { title: '@' },
    link: function (scope, element, attrs, tabsCtrl) {
      tabsCtrl.addPane(scope);
    },
    templateUrl: 'templates/TabPane.html'
  };
});