
  var Jarvis = angular.module('Jarvis', ['ngMaterial', 'cordovaHTTP'])

  Jarvis.controller('mainCtrl', ['$scope', '$log', '', function ($scope, $log) {
    $scope.sendMessage = function () {
      var url = 'https://hooks.slack.com/services/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'
      var data = {
        username: 'Alex',
        icon_emoji: ':ghost:',
        text: 'Yo! Biatch!'
      }
      var head = { 'Content-type': 'application/json' }
      var successCallback = function () {
        console.log('success')
      }
      var failCallback = function () {
        console.log('fail')
      }
      cordovaHTTP.post(url, data, head)
    }
  }])
