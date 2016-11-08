function sub($scope,$location,apiService){
	$scope.submit = function(){

	apiService.login('http://localhost:4002/login',{
		username:$scope.username,
		userpwd:$scope.userpwd
	},"jsonp")
	.success(function(res){
			if(res.code == 0){
				$location.url('/user')
			}
	})
	}
}

function render($scope,$http){
	$http.post("data/data.json")
		 .success(function(res){
		 	$scope.data=res;
		 })
}
angular.module("myapp")
	   .controller('sub',sub)	
	   .controller("render",render)