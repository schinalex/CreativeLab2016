
var Jarvis = angular.module('Jarvis', ['ngMaterial', 'cordovaHTTP'])
// var sendMessage = function () {
//   var url = 'https://hooks.slack.com/services/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'
//   var data = {
//     username: 'Alex',
//     icon_emoji: ':alien:',
//     channel: '#general',
//     text: 'Yo! Biatch!'
//   }
//   var head = { 'Content-type': 'application/json' }
//   var success = function (response) {
//     console.log('success')
//     console.log(response)
//   }
//   var fail = function (response) {
//     console.log('fail')
//     console.log(response)
//   }
//   console.log('trying to send')
//   http.post(url, data, head, success, fail)
// }
Jarvis.controller('mainCtrl', ['$scope', '$log', 'cordovaHTTP', function ($scope, $log, cordovaHTTP) {
  $scope.http = cordovaHTTP
  $scope.sendMessage = function () {
    var url = 'https://hooks.slack.com/services/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'
    var data = {
      username: 'Alex',
      icon_emoji: ':alien:',
      channel: '#general',
      text: 'Yo! Biatch!'
    }
    var head = { 'Content-type': 'application/json' }
    var success = function (response) {
      $log.log('success')
      $log.log(response)
    }
    var fail = function (response) {
      $log.log('fail')
      $log.log(response)
    }
    $log.log('trying to send')
    $scope.http.post(url, data, head, success, fail)
  }
}])
