$("document").ready(function() {
	$("#tipClose").click(function() {
		$("#tipMessage").hide("slow");
	});

	$("#tipMessageHead").click(function() {
		$("#tipMessageContent").slideToggle("slow");
	});
});

function showTipMessage() {
	$("#tipMessage").slideDown("slow").css("display", "block");
}

window.onload = function() {
	var warmListSize =  $("#tipMessageContent dt").length;
	
	if(warmListSize > 0){
		setTimeout("showTipMessage()", 3000); //3秒后调用显示函数
	}
}