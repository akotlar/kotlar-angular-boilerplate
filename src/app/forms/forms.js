/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * `src/app/home`, however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a `note` section could have the submodules `note.create`,
 * `note.delete`, `note.edit`, etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 *
 * The dependencies block here is also where component dependencies should be
 * specified, as shown below.
 */
angular.module( 'seqant.forms', [
	'seqant.services',

	/*third party dependencies*/
	'ui.router',
	'localytics.directives',
	'angularFileUpload'
])

/**
 * Each section or module of the site can also have its own routes. AngularJS
 * will handle ensuring they are all available at run-time, but splitting it
 * this way makes each module more "self-contained".
 */
.config(['$stateProvider',function config( $stateProvider ) 
{
  $stateProvider.state( 'sequenceFile', {
    url: '/sequenceFile',
    views: {
      "main": {
        controller: 'SequenceFileFormCtrl',
        templateUrl: 'forms/sequenceFile/sequenceFileForm.tpl.html'
      }
    },
    data:{ pageTitle: 'Sequence File', formType : $stateProvider.state }
  });
}])

.config(['$httpProvider', function($httpProvider) 
{
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}])

/**
 * And of course we define a controller for our routes in separate files
 */

.directive('validFile', function () {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function (scope, el, attrs, ngModel) {
      el.bind('change', function () {
        scope.$apply(function () {
          ngModel.$setViewValue(el.val());
        });
      });
    }
  };
});