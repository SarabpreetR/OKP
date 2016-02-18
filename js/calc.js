
var carButton= document.querySelectorAll('.car-button');

var tw=document.querySelector('.two-wheeler');
var bigCar=document.querySelector('.C1400cc-plus');
var car=document.querySelector('.C1400cc');
var idling=document.querySelector('.idling');
var vehicle=document.querySelector('.vehicle');
var result=document.querySelector('.result');
var gram=document.querySelector('.gram');
var liter=document.querySelector('.liter');



// magic stuffs : 

var a=26.8658;
var b=0;
var resultMagic=0;
var c=0.7665;


// 

var inputRadio=document.querySelectorAll(".idling input");


for (var i = 0; i < carButton.length; i++) {
	carButton[i].addEventListener("click",getVType);
}

for (var i = 0; i < inputRadio.length; i++) {
	inputRadio[i].addEventListener("click",magic);
}

function getVType(){
// this.className=this.className+" selected";

idling.className="row idling highlight-on animated fadeIn";
vehicle.className="row vehicle highlight-off animated fadeInOut";
result.className="row result highlight-off animated fadeIn";

result.style.background="";
result.style.color="";


resetRound();
resetResult();
var type=this.getAttribute('vehicle-type');

if(type=="2") {

	tw.className='car-button two-wheeler selected';
	car.className='car-button C1400cc unselected';
    bigCar.className='car-button C1400cc-plus unselected';
    console.log(2);
    a=26.8658;
    c=0.7665;

}
else if(type=="14"){

	tw.className='car-button two-wheeler unselected';
	car.className='car-button C1400cc selected';
    bigCar.className='car-button C1400cc-plus unselected';
	console.log(14);
	a=87.7515;
	c=3.8325;

}
else if(type=="15") {

	tw.className='car-button two-wheeler unselected';
	car.className='car-button C1400cc unselected';
    bigCar.className='car-button C1400cc-plus selected';
    console.log(15);
    a=98.6486;
    c=5.475;
}


}




function magic(){

result.className="row result highlight-on  animated fadeIn";


result.style.background="#2D303D";
result.style.color="white";

idling.className="row idling highlight-off animated ";



	console.log(this.getAttribute('id'));

	b=this.getAttribute('id');
	var power=Math.pow(b,2);
	console.log(power);
	resultMagic=a*(power);
	resultMagic=parseFloat(resultMagic).toFixed(1);
	d=c*b;
	d=parseFloat(d).toFixed(2);
	// gram.innerHTML=this.getAttribute('id')+"g";
	// liter.innerHTML=this.getAttribute('id')+"lt";
		gram.innerHTML=this.innerHTML=resultMagic+'g';
		liter.innerHTML=this.innerHTML=d+'lt';
}

function resetRound(){

for (var i = 0; i < inputRadio.length; i++) {
	inputRadio[i].checked=false;
}

}

function resetResult(){
		gram.innerHTML=this.innerHTML=0+'g';
		liter.innerHTML=this.innerHTML=0+'lt';

}

