var images = new Array();
var i = 1;
function viewImages() {
	images[i] = 'background-image: url(assets/img/bg-img-0'+i+'.png)';
	document.getElementById("bg-img").style = images[i];
	i++;
	if (i >= 10) {i = 1;}
	setTimeout("viewImages()",200);
}