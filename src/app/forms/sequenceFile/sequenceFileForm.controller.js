angular.module( 'seqant.forms').controller( 'SequenceFileFormCtrl', ['$scope','$http','FileUploader','socketIO','userAuth', function ($scope,  $http, FileUploader, socketIO, userAuth ) {
	"use strict";

	$scope.genomes = 
	[
		{
			id:1,
			name:'Human',
			assemblies:[
				{
					id:1,
					name:'Mar2006 (NCBI36/hg18)',
					value: 'hg18'
				},
				{
					id:2,
					name:'Feb2009 (GRCh37/hg19)',
					value: 'hg19'
				}
			],
			phastConsOptions:[4]
		},
		{
			id:2,
			name:'Mouse',
			assemblies:[
				{
					id:1,
					name:'Jul2007 (NCBI37/mm9)',
					value: 'mm9'
				},
				{
					id:2,
					name:'Dec2011 (GRCm38/mm10)',
					value: 'mm10'
				}
			]
		}
	];

	$scope.referenceFile = null;
	$scope.sequenceFile = null;
	$scope.genomicPositionsFile = null;
	$scope.selectedAssembly = null;
	$scope.selectedGenome = null;
	$scope.phastConsScoreOptionChosen = null;
	$scope.phylopOptionChosen = null;
	$scope.sessionID = null;
	$scope.uploadComplete = null;
	$scope.score = {};
	$scope.annotationStarted = null;
	$scope.seqantForm = {};
	$scope.seqantForm.userEmail = null;
	$scope.userEmail = null;
	$scope.modalDefaults = [{userEmail: ''}];

    $scope.open = function () 
    {

        var modalInstance = $modal.open(
        {
          templateUrl: 'templates/emailModal.html',
          controller: ModalInstanceController,
          resolve:
          {
            modalDefaults: function()
            {
                return $scope.modalDefaults;
            }
          }
        });

        modalInstance.result.then(function (selectedItem) 
        {
          $scope.selected = selectedItem;
          if(selectedItem)
          {
            $scope.userEmail = $scope.selected.userEmail;
          }
          $scope.submitForm();
        }, 
        function () 
        {
            $scope.submitForm();
        });
    };

    $scope.sessionID = userAuth.getSession();
    $scope.inputType = $scope.formType;

    $scope.score["Human"] = ["placental", "primates", "vertebrate"];
    $scope.score["Mouse"] = ["euarchontoglires", "placental", "vertebrate"];


    //socketIO.emit('testing_angular',{somedata: "Sent from angular"})
	socketIO.addListener('angular_test_response', function(socket){
		alert('We got ' + socket.data );
	});


	socketIO.addListener('annotationStarted',function(data){
		$scope.annotationStarted = true;
	});

	socketIO.addListener('annotationComplete',function(data){
		$scope.annotationStarted = false;
	});

	
    
    

    // create a uploader with options
	var uploader = $scope.uploader = new FileUploader(
		{
			scope: $scope,                          // to automatically update the html. Default: $rootScope
			url: 'http://localhost:3000/upload',
			formData: []
		}
	); // NOW
	//test

	$scope.$on('file:add',function(event,item,options) 
	{
		console.log(event);
		console.log(item);
		console.log(event.index);
		console.log(item.index);
	});
   
    
    //Register the form submit handler

    $scope.submitForm = function() 
    {
        var dataToPost = {genome:$scope.selectedAssembly.value,sessionID:$scope.sessionID,inputType : $scope.inputType};
        if( $scope.userEmail )
        {
            dataToPost['userEmail'] = $scope.userEmail;
        }
        console.log("posting data....");
        console.log($scope.selectedAssembly.value);

        $http(
        {
            url:'http://localhost:3000/seqant_form',
            method:"POST",
            data:JSON.stringify(dataToPost)
        })
        .success(function()
        {
           console.log('submission successful'); /*success callback*/
        });
    };

    // REGISTER Upload handlers

    uploader.onAfterAddingFile = function (event, item) {
        console.info('After adding a file', item);
        item.formData.push({fileType : item.id, sessionID : $scope.sessionID, inputType : $scope.inputType } );
        item.file.fileID = item.id;
        console.log(item.file);

    };

    uploader.onWhenAddingFileFailed = function (event, item) {
        console.info('When adding a file failed', item);
    };

    uploader.onAfterAddingAll = function (event, items) {
        console.info('After adding all files', items);
    };

    uploader.onBeforeUpload = function (event, item) {
        console.info('Before upload', item);
    };

    uploader.onProgress = function (event, item, progress) {
        console.info('Progress: ' + progress, item);
    };

    uploader.onSuccess = function (event, xhr, item, response) {
        console.info('Success', xhr, item, response);
        $scope[item.id] = true;
    };

    uploader.onCancel = function (event, xhr, item) {
        console.info('Cancel', xhr, item);
    };

    uploader.onError = function (event, xhr, item, response) {
        console.info('Error', xhr, item, response);
        console.log(event);
        console.log(xhr);
        console.log(response);
    };

    uploader.onComplete = function (event, xhr, item, response) {
        console.info('Complete', xhr, item, response);
    };

    uploader.onProgressAll = function (event, progress) {
        console.info('Total progress: ' + progress);
    };

    uploader.onCompleteAll = function (event, items) {
        console.info('Complete all', items);
    };


}]);