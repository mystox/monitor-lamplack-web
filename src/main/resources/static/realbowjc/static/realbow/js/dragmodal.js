//覆盖real.js中下面两个方法，引用这个文件之前必须先引用real.js

RealJs.openModal = function(ev) {
//	$('#myModal').on('hidden.bs.modal', function (e) {
//		$('#myModal .modal-content1').html('');
//	})
	//$("#model").on("hidden.bs.model",function(e){$(this).removeData();});  
	$('#myModal .modal-content1').html('');
    ev.preventDefault();
    var target = $(this).attr("href");
    $('#myModal .modal-content1').load(target, function(response, status) {
    	if (status=="error"){
    		$('#myModal').modal('hide');
    		alert(response);
    	}
    });
    //$('#myModal .modal-content1').show();
}

RealJs.openMonitorModal = function(ev) {
	$('#myModal .modal-content1').html('');
    ev.preventDefault();
    var target = $(this).attr("href");
    
    $('#myModal .modal-content1').load(target,{systemCode:$("#monitorType").val()},function(response, status) {
    	if (status=="error"){
    		$('#myModal').modal('hide');
    		alert(response);
    	}
    });
    //$('#myModal .modal-content1').show();
}

function ModalReload(target){   	 
    $('#myModal .modal-content1').load(target, function(response, status) {
    	if (status=="error"){
    		$('#myModal').modal('hide');
    		alert(response);
    	}
    });
}