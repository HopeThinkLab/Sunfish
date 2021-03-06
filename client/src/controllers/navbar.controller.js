'use strict';

app.controller('NavbarCtrl', function($scope, $location) {
    $scope.menu = [{
        'title': 'Home',
        'link': '/'
    },{
        'title': 'Browse',
        'link': '/browse/'
    },{
        'title': 'Search',
        'link': '/search/'
    },{
        'title': 'Upload',
        'link': '/upload/'
    }];

    $scope.isActive = function(pagelink){
        return pagelink == $location.url();
    }

    $scope.toggleTopbar = function(){
      Foundation.libs.topbar.toggle($('.top-bar'));
    };
})
