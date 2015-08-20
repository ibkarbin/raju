App.factory("CameraService", function ($rootScope, $q) {
  var deferred = $q.defer();
  
    return {
        open_camera: function () {
			option1 =' success';
            navigator.camera.getPicture( function (imageData) {
					alert('e') ;
					 deferred.resolve(imageData);
			}, onFail, { quality: 50, allowEdit: true,
				destinationType: destinationType.FILE_URI,
				targetWidth: 512,
				targetHeight: 512,
				correctOrientation: true
			});
        },
        onPhotoDataSuccess: function (imageData) {
           // var deferred = $q.defer();
			alert("d");
			var Image = document.getElementById('add-event-image');
			Image.src =  imageData;
			$rootScope.pop_box_status = true; 
			//$('.pop-up-box').hide();

            return deferred.promise;
        },
		onFail: function(){
			alert('failed');

		}
    };
});