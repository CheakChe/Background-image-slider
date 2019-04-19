var images = new Array();
var i = 1;
function viewImages() {
	images[i] = 'url(assets/img/bg-img-0'+i+'.png) ';
	document.getElementById("bg-img").style.background= images[i];
	document.getElementById("bg-img").style.backgroundRepeat= 'no-repeat';
	i++;
	if (i >= 10) {i = 1;}
	setTimeout("viewImages()",200);
}