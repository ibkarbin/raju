var pictureSource;   // picture source
var destinationType;


document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	
// CEHCK NETWORK ON FIRST LOAD	
   if( checkConnection() == 'none' ){
	   localStorage.setItem('network',"false");
	   //alert(localStorage.getItem('network'));
	   $('.net-error').show();
   }else{
	   localStorage.setItem('network',"true");
	   //alert(localStorage.getItem('network'));
	   $('.net-error').hide();
   }
  
/*    PAGES 
 * ========================================================= */
   /*
   document.addEventListener("backbutton", function (e){
		
	   if($.mobile.activePage.is('#home-page')){
           e.preventDefault();
           navigator.app.exitApp();
       }else if($.mobile.activePage.is('#profile-page')) {
           window.location = "index.html#home-page";
       }else {
           navigator.app.backHistory();
       }
    }, false);
  */
  // KEY BOARD
  /*
	 document.addEventListener("hidekeyboard", function() {
              
           alert("hidekey");
               
       }, false);
	*/   
/* CAMERA
========================================*/	
	
	pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType; 
	
           
} // END onDeviceReady();

function checkConnection() {
		
	var networkState = navigator.connection.type;
	return networkState;
}

$(document).ready(function(){
	
/*	
$('#camera').click(function(){
		// Take picture using device camera, allow edit, and retrieve image as base64-encoded string
		navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50, allowEdit: true,
        destinationType: destinationType.FILE_URI,
		targetWidth: 512,
		targetHeight: 512,
		correctOrientation: true
		});
		
		
    });
*/	
$('#prof-pic-add').click( function(){
	
	var source = pictureSource.PHOTOLIBRARY;
		
	navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
		allowEdit: true,
        destinationType: destinationType.FILE_URI,
		targetWidth: 512,
		targetHeight: 512,
		correctOrientation: true,
        sourceType: source });
	
});	



function onPhotoDataSuccess(imageData) {
    var smallImage = document.getElementById('prof-pic-add');
	smallImage.src =  imageData;
	
	var scope = angular.element(document.body).scope();
					scope.$apply(function(){
						scope.signUp.pictureUrl = null;
					});
	
}

$('#prof-pic-add_m').click( function(){
	
	var source = pictureSource.PHOTOLIBRARY;
		
	navigator.camera.getPicture(onPhotoDataSuccess_m, onFail, { quality: 50,
		allowEdit: true,
        destinationType: destinationType.FILE_URI,
		targetWidth: 512,
		targetHeight: 512,
		correctOrientation: true,
        sourceType: source });
	
});	



function onPhotoDataSuccess_m(imageData) {
    var smallImage = document.getElementById('prof-pic-add_m');
	smallImage.src =  imageData;
	
	var scope = angular.element(document.body).scope();
					scope.$apply(function(){
						scope.signUp.pictureUrl = null;
					});
}

$('#prof-pic-edit').click( function(){
	
	var source = pictureSource.PHOTOLIBRARY;
		
	navigator.camera.getPicture(onPhotoDataSuccess_e, onFail, { quality: 50,
		allowEdit: true,
        destinationType: destinationType.FILE_URI,
		targetWidth: 512,
		targetHeight: 512,
		correctOrientation: true,
        sourceType: source });
	
});	



function onPhotoDataSuccess_e(imageData) {
	
	var scope = angular.element(document.body).scope();
					scope.$apply(function(){
						scope.edit_profile.Profile_Pic = imageData;
						scope.edit_profile.images_edit_status = true;
					});
	
}



function onFail(message) {
  // alert('Failed because: ' + message);
}

/*
$('#take-photo-evt').click( function(){  //CAMERA
	// Take picture using device camera, allow edit, and retrieve image as base64-encoded string
		navigator.camera.getPicture(onPhotoDataSuccess_event, onFail, { quality: 50, allowEdit: true,
			destinationType: destinationType.FILE_URI,
			correctOrientation: true
		});
});

 $('#take-gallery-evt').click( function(){
	var source = pictureSource.PHOTOLIBRARY;
		
	navigator.camera.getPicture(onPhotoDataSuccess_event, onFail, { quality: 50,
		allowEdit: true,
        destinationType: destinationType.FILE_URI,
		correctOrientation: true,
        sourceType: source });
			
	
	
	
});

function onPhotoDataSuccess_event(imageData) {
    var smallImage = document.getElementById('event_image');
	smallImage.src =  imageData;
	var scope = angular.element(document.body).scope();
					scope.$apply(function(){
						scope.pop_box_status = true;
					})
	//$('.pop-up-box').hide();
	// alert(imageData);
}	
*/	
	
})


// NO Network
	document.addEventListener("offline", onOffline, false);
    document.addEventListener("online", onOnline, false);

	function onOffline() {
		
		localStorage.setItem('network',"false");
	    
		$('#button').removeClass('loading');
	    $('#profile-page .header').removeClass('loading');
	    $.mobile.loading('hide');
		
		$('.net-error').show();
	}
	function onOnline(){
		localStorage.setItem('network',"true");
	   // alert(localStorage.getItem('network'));
		$('.net-error').hide();
	}
	
	
/* PANEL SWIPE
 * ====================================*/
 
// $( document ).on( "pageinit", "#profile-page", function() {
    // $( document ).on( "swipeleft swiperight", "#profile-page", function( e ) {
        
		 // if ( e.type === "swiperight") {
				// if ( $.mobile.activePage.jqmData( "panel" ) !== "open" ) {
					// $( "#revealPanel" ).panel( "open" );
				// }
         // } else if ( e.type === "swipeleft"  ) {
				// if ( $.mobile.activePage.jqmData( "panel" ) === "open" ){
					// $( "#revealPanel" ).panel( "close" );
				// }
                
         // }
		
    // });
// });	