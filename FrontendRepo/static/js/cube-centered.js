$( document ).ready(function() {
//$(window).on('mousemove', function(event) {
$("#cube-id").on('mousemove', function(){    
	var width = $(window).width();
    var mouseX = event.pageX - (width * 0.5);
    var height = $(window).height();
    var mouseY = event.pageY - (height * 0.5);
	var randX = getRandomInt(width);
	var randY = getRandomInt(height);
	var randZ = getRandomInt()/100;
	
	//    var xAngle = (mouseY / height) * 90;
	//    var yAngle = (mouseX / width) * 90;
	var xAngle = (randY / height) * 360;
	var yAngle = (randX / width) * 360;
	//	var zAngle = randZ * 90;
	//	start(xAngle,yAngle,zAngle);
	console.log(xAngle,yAngle)
	$('.cube')[0].style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
	//    $('.cube-no-preserve')[0].style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";

	//    $('.cube')[0].style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
	//    $('.cube-no-preserve')[0].style.webkitTransform = "rotateX("+xAngle+"deg) rotateY("+yAngle+"deg)";
//	}
}).on('mouseleave', function(){
  //$('.draggable').off('mousemove');
  console.log("stopped");
  stop();
});
//;
/*
$("#cube-id").on('mouseout',function(){
  //$('.draggable').off('mousemove');
  console.log("stopped");
  stop();
});
*/
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//function start(xAngle, yAngle, zAngle) {
//}

function stop() {
	var x=Math.floor(Math.random() * Math.floor(4))*90;
	var y=Math.floor(Math.random() * Math.floor(4))*90;
    var z=Math.floor(Math.random() * Math.floor(4))*90;
	console.log(x,y,z);
	$('.cube')[0].style.webkitTransform = "rotateX("+x+"deg) rotateY("+y+"deg) rotateZ(90deg)";
}
$(window).on('resize', resize);
$(document).ready(resize);

function resize(event) {
    var y = ($(window).height() - 240) * 0.5;
    $('.cube').css('margin-top', y+'px');
}


});
