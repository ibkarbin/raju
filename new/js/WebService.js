
 App.service('WebService', function( $http, $q){
  
	/* SIGN UP 
	===========================================*/
	 this.upload = function( link,img_el,post_data ){
		
		// $.mobile.loading('show');
		var url = base_url + link ;
		var result = null;
		
		var deferred = $q.defer();
	    
		var img = document.getElementById(img_el); 
		var imageURI = img.src;
		
			var options = new FileUploadOptions();
			options.fileKey="file";
			options.fileName=imageURI.substr(imageURI.lastIndexOf('/')+1);
			options.mimeType="image/jpeg";
			// var params = new Object();
			// params.value1 = "test";
			// params.value2 = "param";
			
			options.params = post_data;
			options.chunkedMode = false;
			var ft = new FileTransfer();
			
			ft.upload(imageURI, url, 
			function(r){
				deferred.resolve(r.response);	
			}, function(error){
				
				toast_msg = "An unexpected error occurred in network. Please retry";
				
				window.plugins.toast.show( toast_msg , 'long', 'top', 
					function(a){
						// console.log('toast success: ' + a)
					},
					function(b){
						// alert('toast error: ' + b)
					}
				); 
				
				deferred.reject();
			}, options);
		
		return deferred.promise;
	  //alert(result);
	 }

	 /* SEARCH SHOPS 
	  ===============================================*/ 
	 this.send_data = function( link , post_data ){
			var self = this;
			
			var deferred = $q.defer();
			
			var url = base_url + link;
			var result = null;
			
			 var req = {
				 method: 'POST',
				 url: url,
				 data: post_data
			}
			
			$http(req).then( 
				function (data){
					// alert(JSON.stringify(data));
					deferred.resolve(data.data);		
				},function (error){
					
					//alert(error.status +" "+ error.statusText);
					// alert(JSON.stringify(error,null,4));
					self.remove_loading();
					var toast_msg;
					if(error.status == 404){
						toast_msg = "Server is not responding. Please retry";
					}
					else{
						toast_msg = "An unexpected error occurred in network. Please retry";
					}
					
					window.plugins.toast.show( toast_msg , 'long', 'top', 
						function(a){
							// console.log('toast success: ' + a)
						},
						function(b){
							// alert('toast error: ' + b)
						}
					);
					
					
					
					deferred.reject();
				}
			);	
		  
		  return deferred.promise;
		 }
		 
	this.remove_loading = function(){
		 $('.loading').removeClass('loading');
		 $.mobile.loading('hide');
	 } 
 })
 
 