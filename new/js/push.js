
   

var regID = null;

function pushing(){
	var dfd = new jQuery.Deferred();
	var pushData = new Object();
	var count = 1;
	
	var checker = setInterval(function(){
		if(regID){
			clearInterval(checker);
			
			pushData.regId  = regID;
			pushData.status = "success";
			
			dfd.resolve( pushData ); 
			
			//alert("yes got: ");
			
		}else if( count == 40){
			
			pushData.status = "fail";
			clearInterval(checker);
			dfd.resolve( pushData ); 
		
		}
		
		count++;
		
	}, 500);

	
	//alert('push called');
	
	push_register();
	
	
	return dfd.promise();	
	
}	
	
	function push_register(){
		
		try
		{ 
			pushNotification = window.plugins.pushNotification;
			pushNotification.register(successHandler, errorHandler, {"senderID":"305462542058","ecb":"onNotificationGCM"});		// required!
				
			//check for platform
			
			
		}
		catch(err) 
		{ 
			 txt="There was an error on this page.\n\n"; 
			 txt+="Error while gcm registration : description: " + err.message + "\n\n"; 
			 alert(txt); 
		} 
	}	
// result contains any message sent from the plugin call
    function successHandler(result) {
        console.log('Callback Success! Result = '+result);
    }
    function errorHandler(error) {
        console.log(error);
    }
    function onNotificationGCM(e) {
        switch( e.event )
        {
            case 'registered':
                if ( e.regid.length > 0 )
                {
                    regID = e.regid;
                }
                break;

            case 'message':
			
				// alert(e.payload.eventId);
				// alert(JSON.stringify(e));
                // this is the actual push notification. its format depends on the data model from the push server
				var scope = angular.element(document.body).scope();
					scope.$apply(function(){
						scope.event_id = e.payload.eventId;
					})
               
                break;

            case 'error':
                alert('GCM error = '+e.msg);
                break;

            default:
                alert('An unknown GCM event has occurred');
                break;
        }
    }	

	
/*===================================================================================================================*/
	