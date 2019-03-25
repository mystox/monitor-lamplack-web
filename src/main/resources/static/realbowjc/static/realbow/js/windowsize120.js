window.onload=window.onresize= function  _doResize() { 
	 var ss = pageSize(); 
	 $("#list").jqGrid('setGridWidth', ss.WinW-0).jqGrid('setGridHeight', ss.WinH-120);
	   }
	   
	 function pageSize() { 
	   var winW, winH; 
	  if(window.innerHeight) {// all except IE 
	   winW = window.innerWidth; 
	   winH = window.innerHeight; 
	  } else if (document.documentElement && document.documentElement.clientHeight) {// IE 6 Strict Mode
	   winW = document.documentElement.clientWidth; 
	   winH = document.documentElement.clientHeight; 
	  } else if (document.body) { // other 
	   winW = document.body.clientWidth; 
	   winH = document.body.clientHeight; 
	  }  // for small pages with total size less then the viewport 
	  return {WinW:winW, WinH:winH}; 
} 
