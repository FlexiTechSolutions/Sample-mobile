angular.module('starter.controllers')

.controller('PostsCtrl', function ($scope, Posts) {
  
  //get posts
  Posts.query().then(function (posts) {
    $scope.posts = posts;
  });
  
});
