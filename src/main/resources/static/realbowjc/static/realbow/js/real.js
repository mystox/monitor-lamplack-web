$.ajaxSetup({
	cache : false
});

function gridSize() {
	var winW, winH;
	if (window.innerHeight) {// all except IE
		winW = window.innerWidth;
		winH = window.innerHeight;
	} else if (document.documentElement
			&& document.documentElement.clientHeight) {// IE 6 Strict Mode
		winW = document.documentElement.clientWidth;
		winH = document.documentElement.clientHeight;
	} else if (document.body) { // other
		winW = document.body.clientWidth;
		winH = document.body.clientHeight;
	} // for small pages with total size less then the viewport
	return {
		WinW : winW,
		WinH : winH
	};
}
function errorHandler(xmlHttpRequest) {

	if (xmlHttpRequest.status == '401') { // 无访问权限，后台已处理
		alert(xmlHttpRequest.responseText);
	} else if (xmlHttpRequest.status == '404') {
		alert(xmlHttpRequest.responseText); // 无效请求
		// $('#myModal .modal-content').modal('show');
	} else {
		alert(xmlHttpRequest.responseText);
	}
}

function RealJs() {
}

RealJs.gridResize120 = function(event) {
	// alert(event.data.name);
	var size = gridSize();
	$(event.data.name).jqGrid('setGridWidth', size.WinW - 0).jqGrid(
			'setGridHeight', size.WinH - 120);
};
RealJs.gridResize170 = function(event) {
	// alert(event.data.name);
	var size = gridSize();
	$(event.data.name).jqGrid('setGridWidth', size.WinW - 0).jqGrid(
			'setGridHeight', size.WinH - 170);
};
RealJs.gridReload = function() {
	$("#list").jqGrid('setGridParam', {
		postData : $("#searchForm").formtojson()
	}).trigger("reloadGrid");
};
RealJs.clickSelectBtn = function() {
	var form = $("#searchForm");
	var pageInput = $("#mypage");
	pageInput.val("true");
	
	$("#list").jqGrid('setGridParam', {
		page : 0
	});

	$("#list").jqGrid('setGridParam', {
		postData : $("#searchForm").formtojson()
	}).trigger("reloadGrid");
};

RealJs.gridOnload = function(data) { // 完成服务器请求后，回调函数
	if (data.totalElements == 0 || data.totalCount == 0) {
		var a = $("#norecords");
		if ($("#norecords").html() == null) {
			$("#list").parent().append(
					"<div class='nodata-class' id='norecords'>没有查询记录！</div>");
		}
		$("#norecords").show();
	} else {
		$("#norecords").hide();
	}
}

RealJs.clearTip = function(textInput) {
	if (textInput.value == textInput.defaultValue && textInput.type != 'hidden') {
		textInput.value = '';
		textInput.style.color = '#000';
	}
}

RealJs.showTip = function(textInput) {
	if (!textInput.value) {
		textInput.value = textInput.defaultValue;
		textInput.style.color = '#999';
	}
};

RealJs.openModal = function(ev) {
	$('#myModal').on('hidden.bs.modal', function(e) {
		alert(11);
	});
	$('#myModal .modal-content').html('');
	ev.preventDefault();
	var target = $(this).attr("href");
	$('#myModal .modal-content').load(target, function(response, status) {
		if (status == "error") {
			$('#myModal').modal('hide');
			$.ligerDialog.warn(response);
		}
	});
};

RealJs.openPurifierModal = function(ev) {
	var target = $(this).attr("href")+"/"+($("#corpId").val())+"/"+$("#beginDate").val();
	$('#myModal').on('hidden.bs.modal', function(e) {
		//alert(11);
	});
	$('#myModal.modal-content1').html('');
	ev.preventDefault();
	//var target = $(this).attr("href");
	$('#myModal .modal-content1').load(target, function(response, status) {
		if (status == "error") {
			$('#myModal').modal('hide');
			$.ligerDialog.warn(response);
		}
	});
};

RealJs.openDensityModal = function(ev) {
	var target = $(this).attr("href")+"/"+($("#timeType").val())+"/"+$("#beginDate").val()+"/"+$("#endDate").val()+
	"?corpName="+($("#corpName").val())+"&areaName="+($("#areaName").val())+"&corpId="+($("#corpId").val());
	$('#myModal').on('hidden.bs.modal', function(e) {
		//alert(11);
	});
	$('#myModal .modal-content1').html('');
	ev.preventDefault();
	//var target = $(this).attr("href");
	$('#myModal .modal-content1').load(target, function(response, status) {
		if (status == "error") {
			$('#myModal').modal('hide');
			$.ligerDialog.warn(response);
		}
	});
};

RealJs.openConcModal = function(ev) {
	var target = $(this).attr("href")+"?corpName="+($("#corpName").val())+"&corpId="+($("#corpId").val())+"&timeType="+($("#timeType").val())+"&beginTime="+$("#beginDate").val()+"&endTime="+$("#endDate").val()+"&hour="+$("#hour").val();
	$('#myModal').on('hidden.bs.modal', function(e) {
		//alert(11);
	});
	$('#myModal .modal-content1').html('');
	ev.preventDefault();
	//var target = $(this).attr("href");
	$('#myModal .modal-content1').load(target, function(response, status) {
		if (status == "error") {
			$('#myModal').modal('hide');
			$.ligerDialog.warn(response);
		}
	});
};

RealJs.modalSave = function() {
	var data = $("#inputForm").formtojson1();
	$.ajax({
		type : "POST",
		url : $("#inputForm").attr("action"),
		data : data,
		dataType : "text",
		beforeSend : function() {
			return $("#inputForm").valid();
		},
		error : function(xmlHttpRequest) {
			$('#myModal').modal('hide');
			errorHandler(xmlHttpRequest);
		},
		success : function(msg) {
			// alert(msg);
			$('#myModal').modal('hide');
			$("#list").trigger("reloadGrid");
		}
	});
}

RealJs.modalSave2 = function() {
	var data = $("#inputForm").formtojson1();
	$.ajax({
		type : "POST",
		url : $("#inputForm").attr("action"),
		data : data,
		dataType : "text",
		beforeSend : function() {
			return $("#inputForm").valid();
		},
		error : function(xmlHttpRequest) {
			$('#myModal').modal('hide');
			errorHandler(xmlHttpRequest);
		},
		success : function(msg) {
			// alert(msg);
			$('#myModal').modal('hide');
			$("#list").trigger("reloadGrid");
		}
	});
}

RealJs.modalSave3= function() {
	var data = $("#inputForm").formtojson1();
	$.ajax({
		type : "POST",
		url : $("#inputForm").attr("action"),
		data : data,
		dataType : "text",
		beforeSend : function() {
			return $("#inputForm").valid();
		},
		error : function(xmlHttpRequest) {
			$('#myModal').modal('hide');
			errorHandler(xmlHttpRequest);
		},
		success : function(msg) {
			// alert(msg);
			$('#myModal').modal('hide');
			$("#list").trigger("reloadGrid")
		}
	});
}

RealJs.modalSaveForRole = function() {
	var data = $("#inputForm").formtojson1();
	$.ajax({
		type : "POST",
		url : $("#inputForm").attr("action"),
		data : data,
		dataType : "text",
		beforeSend : function() {
			return $("#inputForm").valid();
		},
		error : function(xmlHttpRequest) {
			$('#myModal').modal('hide');
			errorHandler(xmlHttpRequest);
		},
		success : function(msg) {
			if (msg=='success')
				alert('保存成功！');
			/*$('#myModal').modal('hide');*/
			$("#list").trigger("reloadGrid");
		}
	});
}

RealJs.deleteOne = function(ev) {
	ev.preventDefault();
	var field = $(this);

	$.ligerDialog.confirm('你真的确定要删除吗?', function(yes) {
		if (yes) {
			var target = field.attr("href");
			$.ajax({
				type : "POST",
				data : {},
				url : target,
				error : errorHandler,
				success : function(msg) {
					$("#list").trigger("reloadGrid")
				}
			});
		}
	});

}
RealJs.deleteSmokeCorp = function(ev) {
	ev.preventDefault();
	var field = $(this);
	
	$.ligerDialog.confirm('你真的确定要删除吗?', function(yes) {
		if (yes) {
			var target = field.attr("href");
			$.ajax({
				type : "POST",
				data : {},
				url : target,
				error : errorHandler,
				success : function(msg) {
					if(msg == 'EXIST_MONITOR'){
						$.ligerDialog.warn('企业存在关联监控仪，不能删除！');
					}
					$("#list").trigger("reloadGrid")
				}
			});
		}
	});
	
}
RealJs.deleteBatchSmokeCorp = function(ev) {

	ev.preventDefault();
	var field = $(this);
	var rows = $("#list").jqGrid("getGridParam", "selarrrow");

	if (!rows || rows.length == 0) {
		// 确认对话框
		$.ligerDialog.warn('对不起，请您选择要删除的行！');
		return;
	}

	$.ligerDialog.confirm('您真的确定要删除吗?', function(yes) {
		if (yes) {
			var target = field.attr("href");

			if (!rows || rows.length == 0) {
				return;
			}
			$.ajax({
				type : "POST",
				data : {
					ids : rows.toString()
				},
				url : target,
				error : errorHandler,
				success : function(msg) {
					if(msg == 'EXIST_MONITOR'){
						$.ligerDialog.warn('企业存在关联监控仪，不能删除！');
					}
					$("#list").trigger("reloadGrid")
				}
			});
		}
	});
}
//删除净化器信息：单条删除
RealJs.deletePurDeviceInfo = function(ev) {
	ev.preventDefault();
	var field = $(this);
	
	$.ligerDialog.confirm('你真的确定要删除吗?', function(yes) {
		if (yes) {
			var target = field.attr("href");
			$.ajax({
				type : "POST",
				data : {},
				url : target,
				error : errorHandler,
				success : function(msg) {
					$("#list").trigger("reloadGrid")
				}
			});
		}
	});
	
}
//净化器基本信息：批量删除
RealJs.deleteBatchPurDeviceInfo = function(ev) {
	ev.preventDefault();
	var field = $(this);
	var rows = $("#list").jqGrid("getGridParam", "selarrrow");

	if (!rows || rows.length == 0) {
		// 确认对话框
		$.ligerDialog.warn('对不起，请您选择要删除的行！');
		return;
	}
	$.ligerDialog.confirm('您真的确定要删除吗?', function(yes) {
		if (yes) {
			var target = field.attr("href");

			if (!rows || rows.length == 0) {
				return;
			}
			$.ajax({
				type : "POST",
				data : {
					ids : rows.toString()
				},
				url : target,
				error : errorHandler,
				success : function(msg) {
					if(msg == 'EXIST_MONITOR'){
						$.ligerDialog.warn('企业存在关联监控仪，不能删除！');
					}
					$("#list").trigger("reloadGrid")
				}
			});
		}
	});
}
//风机基本信息：批量删除
RealJs.deleteBatchFunDeviceInfo = function(ev) {
	ev.preventDefault();
	var field = $(this);
	var rows = $("#list").jqGrid("getGridParam", "selarrrow");

	if (!rows || rows.length == 0) {
		// 确认对话框
		$.ligerDialog.warn('对不起，请您选择要删除的行！');
		return;
	}
	$.ligerDialog.confirm('您真的确定要删除吗?', function(yes) {
		if (yes) {
			var target = field.attr("href");

			if (!rows || rows.length == 0) {
				return;
			}
			$.ajax({
				type : "POST",
				data : {
					ids : rows.toString()
				},
				url : target,
				error : errorHandler,
				success : function(msg) {
					if(msg == 'EXIST_MONITOR'){
						$.ligerDialog.warn('企业存在关联监控仪，不能删除！');
					}
					$("#list").trigger("reloadGrid")
				}
			});
		}
	});
}
// 退出系统
RealJs.btnLogOut = function(ev) {
	ev.preventDefault();
	$.ligerDialog.confirm('您确定要退出系统吗？', function(yes) {
		if (yes) {
			var hl = $("#logout").attr("href");
			window.location = hl;
		}
	});
}

RealJs.handlerBatch = function(ev) {
	var target = $(this).attr("href");
	var rows = $("#list").jqGrid("getGridParam", "selarrrow");
	if (!rows || rows.length == 0) {
		return;
	}
	$.ajax({
		type : "POST",
		data : {
			ids : rows.toString()
		},
		url : target,
		error : errorHandler,
		success : function(msg) {
			$("#list").trigger("reloadGrid")
		}
	});
}

RealJs.deleteBatch = function(ev) {

	ev.preventDefault();
	var field = $(this);
	var rows = $("#list").jqGrid("getGridParam", "selarrrow");

	if (!rows || rows.length == 0) {
		// 确认对话框
		$.ligerDialog.warn('对不起，请您选择要删除的行！');
		return;
	}

	$.ligerDialog.confirm('您真的确定要删除吗?', function(yes) {
		if (yes) {
			var target = field.attr("href");

			if (!rows || rows.length == 0) {
				return;
			}
			$.ajax({
				type : "POST",
				data : {
					ids : rows.toString()
				},
				url : target,
				error : errorHandler,
				success : function(msg) {
					$("#list").trigger("reloadGrid")
				}
			});
		}
	});

	/*
	 * var del=confirm("你真的确定要删除吗?"); if (del==false){ return; }
	 * 
	 * var target = $(this).attr("href"); var rows =
	 * $("#list").jqGrid("getGridParam", "selarrrow"); if(!rows ||
	 * rows.length==0){ return; } $.ajax({ type: "POST", data: {ids:
	 * rows.toString()}, url: target, error: errorHandler, success:
	 * function(msg){ $("#list").trigger("reloadGrid") } });
	 */
}

function setRadio(radioName, enable) {
	$('input[name="' + radioName + '"]').each(function() {
		if (this.value == enable) {
			this.checked = true;
		}
	});
}

function setSelect(selectName, select) {
	$("select[name='" + selectName + "'] option").each(function() {
		if (this.value == select) {
			this.selected = true;
		}
	});
}

function setCheckbox(checkboxName, menuId) {
	$("[name='" + checkboxName + "']:checkbox").each(function() {
		if (this.value == menuId) { // 比较 相等 则选择
			this.checked = true;
		}
	});
}

function ModalReload(target) {
	$('#myModal .modal-content').load(target, function(response, status) {
		if (status == "error") {
			$('#myModal').modal('hide');
			alert(response);
		}
	});
}

function timeFormat(v, options, rData) {
	var type = $("#timeType").val();
	var value = parseInt(v)

	if (type == "d") {
		var hh = value / 60;
		var mm = value % 60;
		var dd = hh / 24;
		hh = hh % 24;

		return Math.floor(dd) + "天" + Math.floor(hh) + "时" + Math.floor(mm)
				+ "分";
	}

	else if (type == "h") {
		var hh = value / 60;
		var mm = value % 60;

		return Math.floor(hh) + "时" + Math.floor(mm) + "分";
	}

	return value + "分";
}

function selectRow(rowId) {
	$("#list").jqGrid('setSelection', rowId);
}