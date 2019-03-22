var posX;
var posY;

var fdivWidth = parseInt($("#win").css("width"));//弹出框宽度
var contentWidth = parseInt($("#win").parent().css("width"));//主窗体宽度

fdiv = document.getElementById("win");
document.getElementById("titledrag").onmousedown = function(e) {
	if (!e)
		e = window.event; //如果是IE
	
//	console.info(e.clientX + " , " + fdiv.style.left + " , " + fdiv.style.top)
	posX = e.clientX - parseInt(fdiv.style.left);
	posY = e.clientY - parseInt(fdiv.style.top);
	
	document.onmousemove = mousemove;
}
document.onmouseup = function() {
	document.onmousemove = null;
}
function mousemove(ev) {
	if (ev == null)
		ev = window.event;//如果是IE
	
	fdiv.style.left = (ev.clientX - posX) + "px";
	fdiv.style.top = (ev.clientY - posY) + "px";
	
	//左侧边界限定
	if(parseInt(fdiv.style.left) < -(parseInt($("#win").parent().css("width"))/2 - parseInt($("#win").css("width"))/2)){
		fdiv.style.left = -(parseInt($("#win").parent().css("width"))/2 - parseInt($("#win").css("width"))/2) + "px";
	}
	
	//上部边界限定
	if(parseInt(fdiv.style.top) < 0){
		fdiv.style.top = "0px";
	}
	//右侧边界限定
	if(parseInt(fdiv.style.left) > (parseInt($("#win").parent().css("width"))/2 - parseInt($("#win").css("width"))/2)){
		fdiv.style.left = (parseInt($("#win").parent().css("width"))/2 - parseInt($("#win").css("width"))/2) + "px";
	}
	//底部边界限定
	if(parseInt(fdiv.style.top) > (document.body.scrollHeight - parseInt($("#win").css("height"))-20)){
		fdiv.style.top = (document.body.scrollHeight - parseInt($("#win").css("height"))-20) +  "px";
	}
}