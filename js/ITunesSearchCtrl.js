var iTunesSearchApp = angular.module('iTunesSearchApp', ['ngResource']);

<!-- Controller: iTunesSearchCtrl -->
iTunesSearchApp.controller('iTunesSearchCtrl', function($scope, $resource) {
    //http://itunes.apple.com/search?term=<search term>
    $scope.itunes = $resource('http://itunes.apple.com/:action',
                            {action:'search', term:'beyonce', callback:'JSON_CALLBACK'},
                            {get:{method:'JSONP'}});

    $scope.searchItunes=function() {
        console.log("Searching for " + $scope.searchTerm);
        $scope.itResult = $scope.itunes.get({term:$scope.searchTerm});
        $scope.itunes.show = true;
    };

    $scope.clear=function() {
        console.log("Clearing...");
        $scope.searchTerm='';
        $scope.itunes.show = false;
    };

    $scope.itunes.show = false;
});