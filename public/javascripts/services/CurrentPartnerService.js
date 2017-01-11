app.service('CurrentPartner', ['$http', '$location', function($http, $location) {

    return  function() {
          if (localStorage.getItem('token')) {
            console.log(localStorage.getItem('token'),'token from config resolve');
            const config = {
              headers: {
                'Authorization': 'Bearer ' + localStorage.getItem(
                  'token')
              }
            };
            return $http.get('/verify', config)
              .then(function(response) {
                  console.log(response.data, 'response.data from /verify dot then');
                return response.data;
              })

            .catch(function(error) {
              console.log(error, 'resolve error');
            //   localStorage.clear();
              return null;
            });
        }else{
                $location.path('/')
        }
        }

}]);;
