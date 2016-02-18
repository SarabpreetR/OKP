

// forms controls would go here.. 



		//  address thing goes here..

		var na=document.querySelector('.FORM-name');
		var nu=document.querySelector('.FORM-number');
		var ad=document.querySelector('.textarea');
		var su=document.querySelector('.submit');
		var sc=document.querySelector('.score');
		var scm=document.querySelector('.score-m');
		var ref = new Firebase("https://offkpls.firebaseio.com/");
		var cou = new Firebase("https://offkpls.firebaseio.com/count/");


		
		cou.on('child_added', function(snapshot) {
			var message = snapshot.val();        
			displayData(message);
		});

		function displayData(message) {
			
			
     
     sc.innerHTML=message;
     scm.innerHTML=message;
   
     
 };







 function addOne(){
 	var val;
 	cou.on("value", function(snapshot) {
 		val=snapshot.val();
 		val=val.val;
 		val++;
 	}, function (errorObject) {
 		console.log("The read failed: " + errorObject.code);
 	});
 	cou.set({val});
 }



 ad.style.display="none";
 $(".check-address").change(function() {
 	if(this.checked) {
 		ad.style.display="block";
 		ad.className=" textarea animated pulse check-address";
 	}
 	else {

 		ad.style.display="none";
 		ad.className="pulse check-address"
 	}
 });

// validations would go here...







su.addEventListener("click",validate);



function validate(){


	var Fnu=nu.value;
	var Fna=na.value;
	var Fad=ad.value;
	var Fch=document.querySelector('.check-address');
	var ms= document.querySelector('.paddout');


	if(Fna=="") {
		alert("name is required");
		na.className=".FORM-name error";
		return;
	}
	else if(Fnu=="") {
		nu.className=".FORM-number error";
		return;		
	}

	else if(Fch.checked) {
		if(Fad=="") {
			alert("address must be present here");
			ad.className=".check-address";
			
		}
		else {	
			addOne();
			ms.className="paddout animated tada";
			ms.innerHTML="Sent Sucessfully!";
			ref.push({Name:Fna,Mobile:Fnu,Address:Fad,timestamp:Firebase.ServerValue.TIMESTAMP});
		}

	}
	else {  
		addOne();
		ms.className="animated tada";
		ms.innerHTML="Sent Sucessfully!";
		ref.push({Name:Fna,Mobile:Fnu,timestamp:Firebase.ServerValue.TIMESTAMP});
		

	}


	


}






// scmooth csrolling thing..



 smoothScroll.init();











