angular.module('starter.services').factory('Posts', function (serverConfig, $http) {

  return {
    query: function (params) {
      params = params || {};
      return $http.get(serverConfig.url + '/posts', {params: params}).then(function(response){
        return response.data;
      });
    }
  };

});
