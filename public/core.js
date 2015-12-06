var appTodo = angular.module('appTodo', []);

function mainController($scope, $http) {
  $scope.formData = {}; // clear the form so our user is ready to enter another

  $http.get('/api/todos')
    .success(function(data) {
      $scope.todos = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error:' + data);
    });

// when submitting the add form, send the text to the node API
  $scope.createTodo = function() {
    $http.post('/api/todos', $scope.formData)
      .sucess(function(data) {
        $scope.formData = {};
        $scope.todos = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error:' + data);
      });
  };

  $scope.deleteTodo = function(id) {
    $http.delete('/api/todos' + id)
      .success(function(data) {
        $scope.todos = data;
        console.log(data);
      })
      .error(function(data) {
        console.log('Error:' + data);
      });
  };
}
