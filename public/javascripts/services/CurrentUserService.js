app.factory('Partner', ['$http', '$location,' function($http, $location) {

    return {

        get: function($http, $location) {
          if (localStorage.getItem('token')) {
            console.log(localStorage.getItem('token'),
              'token from config resolve');
            const config = {
              headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(
                  'token')
              }
            };
            return $http.get('/verify', config)
              .then(function(response) {
                return response.data;
              })

            .catch(function(error) {
              console.log(error, 'resolve error');
              localStorage.clear();
              return null;
            });
          }
        }
    }

}]);;
