// MakeAPICalls
        function makeAPICalls(token,type,loading_element){
			
			$(loading_element).addClass('loading');
			$.mobile.loading('show');
			
			var url = 'https://api.linkedin.com/v1/people::(~):(id,first-name,last-name,email-address,headline,positions:(company,title,summary,start-date,end-date,is-current),industry,location:(name,country:(code)),picture-url,public-profile-url,educations,date-of-birth)?format=json&oauth2_access_token='+token;
			//alert(type);
			var xhr = createCORSRequest('GET', url);
			
			 // Response handlers.
			  xhr.onload = function() {
				  
				var response = xhr.responseText;
				response = JSON.parse(response);
				var data = response.values[0];
				// alert(JSON.stringify(data,null,4));
				
				var pictureUrl;
				
				if (  typeof data.pictureUrl !== 'undefined'  ) {
				
					pictureUrl = data.pictureUrl; 
				
				}else{
					// alert('no');
					
					pictureUrl = null;
				}
			
				if(type == "mentee") {
				  
				  if( pictureUrl != null ){
					 var smallImage = document.getElementById('prof-pic-add');
					 smallImage.src =  pictureUrl;
				  }
				  
				  var appElement = document.querySelector('[ng-form=signUp_form]');
				  var $scope = angular.element(appElement).scope();
				  
				  $scope.$apply(function() {
					  $scope.signUp.Name = data.firstName;
					  $scope.signUp.last_name = data.lastName;
					  $scope.signUp.mail = data.emailAddress;
					  $scope.signUp.address = data.location.name;
					  $scope.signUp.linkedin_id = data.id;
					  $scope.signUp.pictureUrl = pictureUrl;
					  
					  $scope.astd_linkedin_id  = data.id;
					  
				  });
				}
				else if(type == "mentor") {
					
				  if( pictureUrl != null ){
					 var smallImage = document.getElementById('prof-pic-add_m');
					 smallImage.src =  pictureUrl;
				  }
				  
				  var appElement = document.querySelector('[ng-form=signUp_form_m]');
				  var $scope = angular.element(appElement).scope();
				  $scope.$apply(function() {
					  $scope.signUp_m.Name = data.firstName;
					  $scope.signUp_m.last_name = data.lastName;
					  $scope.signUp_m.mail = data.emailAddress;
					  $scope.signUp_m.address = data.location.name;
					  $scope.signUp_m.linkedin_id = data.id;
					  $scope.signUp.pictureUrl = pictureUrl;
					  
					  $scope.astd_linkedin_id  = data.id;
				  
				  });
				}
				else if( type == "associate" ) {
				 
				  var $scope = angular.element(document.body).scope();
				  $scope.$apply(function() {
					$scope.astd_linkedin_id  = data.id;
				  });
				}
				else if(type == "login") {
				  var $scope = angular.element(document.body).scope();
				  $scope.$apply(function() {
					$scope.login_linked_id  = data.id;
				  });
				  	
				}
				else if(type == "edit_associate") {
				  var $scope = angular.element(document.body).scope();
				  $scope.$apply(function() {
					$scope.edit_profile_linked_id  = data.id;
				  });
				  	
				}
				
				
				//$scope.signUp.Name = data.firstName;
        		//$('#first').val(data.firstName);
				//alert('Response from CORS request to ' + url + ': ' + title);
				
				$(loading_element).removeClass('loading');	  
				$.mobile.loading('hide');
			
			  };
			
			  xhr.onerror = function() {
				//alert('Woops, there was an error making the request.');
				$(loading_element).removeClass('loading');	  
				$.mobile.loading('hide');
			
			  };
			
			  xhr.send();
		}
		
		// Create the XHR object.
		function createCORSRequest(method, url) {
		  var xhr = new XMLHttpRequest();
		  if ("withCredentials" in xhr) {
			// XHR for Chrome/Firefox/Opera/Safari.
			xhr.open(method, url, true);
		  } else if (typeof XDomainRequest != "undefined") {
			// XDomainRequest for IE.
			xhr = new XDomainRequest();
			xhr.open(method, url);
		  } else {
			// CORS not supported.
			xhr = null;
		  }
		  return xhr;
		}

		          
// template for new oauth2 service            
       