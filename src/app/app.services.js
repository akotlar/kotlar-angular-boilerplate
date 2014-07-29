angular.module( 'seqant.services',['btford.socket-io']).service('socketIO', function (socketFactory) 
{	
	var myIoSocket = io.connect('http://localhost:8888');

	mySocket = socketFactory({
		ioSocket: myIoSocket
	});

	mySocket.forward('error');

	return mySocket;
});

angular.module( 'seqant.services').service('userAuth', ['$http',function($http) {
  
	this.getSession = function ()
	{
		var promise;
		var myService = 
		{
			async: function() 
			{
				if ( !promise ) 
				{
					// $http returns a promise, which has a then function, which also returns a promise
					promise = $http.get('api/session').then(function (response) 
					{
						// The then function here is an opportunity to modify the response
						console.log(response);
						// The return value gets picked up by the then in the controller.
						return response.data;
					});
				}
				// Return the promise to the controller
				return promise;
			}
		};
		return myService;
	};
  
}]);