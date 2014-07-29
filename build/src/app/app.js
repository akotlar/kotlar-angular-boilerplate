angular.module( 'seqant', 
	[
		'templates-app',
		'templates-common',

		/*other portions of the site*/ 
		'seqant.services',
		'seqant.home',
		'seqant.about',
		'seqant.forms',

		/*third-party dependencies*/
		'ui.router'
	]
)

.config(['$httpProvider', function($httpProvider) 
{
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
])

.config(['$stateProvider','$urlRouterProvider',function myAppConfig ( $stateProvider, $urlRouterProvider ) 
{
  $urlRouterProvider.otherwise( '/home' );
}])

.run( function run () 
{
})

.controller( 'AppCtrl', ['$scope','$location', function AppCtrl ( $scope, $location ) 
{
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams)
  {
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | seqant' ;
    }
  });
}]);

