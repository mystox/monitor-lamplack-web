$.fn.formtojson = function() {     
	var formid="#"+$(this).attr("id");  
    var obj={};  
    var serializedParams = this.serialize();  
    serializedParams = serializedParams.replace(/\+/g," ");
    serializedParams = decodeURIComponent(serializedParams,true); 
    function evalThem (str) {  
        var attributeName =  str.split("=")[0];  
        var attributeValue = str.split("=")[1];  
        var title = $("input[name='"+attributeName+"']").attr("title");
        var defaultValue = $("input[name='"+attributeName+"']").attr("defaultValue");
        if(!attributeValue || attributeValue==defaultValue || attributeValue==title){  
            attributeValue = '';  
        }  
        
        var array = attributeName.split(".");
        var len = array.length;
        for (var i = 1; i < len; i++) {  
            var tmpArray = Array();  
            tmpArray.push("obj");  
            for (var j = 0; j < i; j++) {  
                tmpArray.push(array[j]);  
            };  
            var evalString = tmpArray.join(".");  
            if(!eval(evalString)){  
                eval(evalString+"={};");                  
            }  
        };  
        
        //alert("obj."+attributeName+"='"+unescape(attributeValue).replace(/'/, "\\'")+"';");
        eval("obj."+attributeName+"='"+unescape(attributeValue).replace(/'/g, "\\'").replace(/\r/g,"\\r").replace(/\n/g,"\\n") +"';");   
  
    };  
    var properties = serializedParams.split("&");  
    for (var i = 0; i < properties.length; i++) {  
        evalThem(properties[i]);  
        //alert(properties[i]);
    };  
    return obj;  
};  

$.fn.formtojson1 = function(){  
  var formid="#"+$(this).attr("id");  
  var json="";  
  var radios="";  
  var checks="";  
  var texts="";  
  var combos="";  
  var textareas="";  
  var selector=formid+" input"; // 找到表单中所有的input标签
  var comboselector=formid+" select";  // 找到表单中所有select combo对象
  var textareaselector=formid+" textarea";  // 找到表单的大文本输入框
  // 处理大文本框
  for(i=0;i<$(textareaselector).length;i++){  
     var textareaelement=textareaselector+":eq("+i+")";  
     var textareaname=$(textareaelement).attr("name");  
     if(textareas.indexOf("'" + textareaname + "'")==-1){  
    	 textareas=(textareas.length==0?"'":textareas+", '")+textareaname+"':'"+  
    	 $(textareaelement).val()+"'";  
     }  
  }  

  // 处理下拉列表框
  for(i=0;i<$(comboselector).length;i++){  
     var comboelement=comboselector+":eq("+i+")";  
	 var comboname=$(comboelement).attr("name");  
	  if(combos.indexOf("'" + comboname + "'")==-1){  
	     combos=(combos.length==0?"'":combos+", '")+comboname+"':'"+  
	     $(comboelement).val()+"'";  
	  }  
  }  
  
  // 处理input对象
  for(i=0;i<$(selector).length;i++)  
  {   
    var element=selector+":eq("+i+")";  
    var etype=$(element).attr("type");  
    // 处理文本框
    if(etype=="text"||etype=="password"||etype=="hidden"){  
    	var tkname=$(element).attr("name");  
    	if(texts.indexOf("'" + tkname + "'")==-1){
    		//var defaultValue = $("input[name='" + tkname + "']").attr("defaultValue");
    		//var value = $("input[name='" + tkname + "']").val();
    		//if (value==defaultValue){
    			//value="";
    		//}
    		texts=(texts.length==0?"'":texts+", '") + tkname + "':'" + $(element).val() + "'";  
    	}  
    }  
    
    // 处理单选框
    if(etype=="radio"){  
    	var rkname=$(element).attr("name");  
    	if(radios.indexOf("'" + rkname + "'")==-1){  
    		var checkedcount=$("input[name='"+rkname+"']:checked").length;  
    		radios=(radios.length==0?"'":radios+", '")+rkname+"':'"+  
    		(checkedcount==0?"":$("input[name='"+rkname+"']:checked").val())+"'";  
    	}  
    }  
    
    // 处理多选框
    if(etype=="checkbox"){  
      var ckname=$(element).attr("name");  
      // alert(ckname);
                  // 1\检查checks是否已经此checkbox
      if(checks.indexOf("'" + ckname + "':")==-1){ // 以前没有找到过
    	  // 2\没有，则将其值存入checks
    	  var tempchecks="";  
     	if($("input[name='"+ckname+"']:checked").length>0){  
     		for(j=0;j<$("input[name='"+ckname+"']:checked").length;j++){  
     			//连接字符由"|" 改为"," "|"连接无法转换为数组
     			tempchecks=(tempchecks.length==0?"":tempchecks+",")+$("input[name='"+ckname+"']:checked:eq("+j+")").val();  
     		}  
     		// alert(tempchecks);
     	}  
     	checks=(checks.length==0?"'":checks+", '")+ckname+"':'"+tempchecks+"'";  
     	// alert(checks);
      }  
 	}  
    
  }  // end for 处理input
  
  
  json=(json.length==0?"":json+",") +(texts.length==0?"":texts+",")+  
       (combos.length==0?"":combos+",")+(radios.length==0?"":radios+",")+  
       (textareas.length==0?"":textareas+",")+(checks.length==0?"":checks+",");  

  var obj={};
  json = json.substr(0,json.length-1);
  return eval("obj={" + json + "}");  
  
}
$.fn.formtojson2 = function(){  
	var formid="#"+$(this).attr("id");  
	var json="";  
	var radios="";  
	var checks="";  
	var texts="";  
	var combos="";  
	var textareas="";  
	var selector=formid+" input"; // 找到表单中所有的input标签
	var comboselector=formid+" select";  // 找到表单中所有select combo对象
	var textareaselector=formid+" textarea";  // 找到表单的大文本输入框
	// 处理大文本框
	for(i=0;i<$(textareaselector).length;i++){
		var textareaelement=textareaselector+":eq("+i+")";  
		var textareaname=$(textareaelement).attr("name");  
		var textareaval = "";
		if(textareas.indexOf("'" + textareaname + "'")==-1){
			textareaval = $(textareaelement).val().replace(/[\r\n]/g, "\\r\\n");
		}   
		textareas=(textareas.length==0?"'":textareas+", '") + textareaname + "':'" + textareaval + "'";
	}  
	
	// 处理下拉列表框
	for(i=0;i<$(comboselector).length;i++){  
		var comboelement=comboselector+":eq("+i+")";  
		var comboname=$(comboelement).attr("name");  
		if(combos.indexOf("'" + comboname + "'")==-1){  
			combos=(combos.length==0?"'":combos+", '")+comboname+"':'"+  
			$(comboelement).val()+"'";  
		}  
	}  
	
	// 处理input对象
	for(i=0;i<$(selector).length;i++)  
	{   
		var element=selector+":eq("+i+")";  
		var etype=$(element).attr("type");  
		// 处理文本框
		if(etype=="text"||etype=="password"||etype=="hidden"){  
			var tkname=$(element).attr("name");  
			if(texts.indexOf("'" + tkname + "'")==-1){
				//var defaultValue = $("input[name='" + tkname + "']").attr("defaultValue");
				//var value = $("input[name='" + tkname + "']").val();
				//if (value==defaultValue){
				//value="";
				//}
				texts=(texts.length==0?"'":texts+", '") + tkname + "':'" + $(element).val() + "'";  
			}  
		}  
		
		// 处理单选框
		if(etype=="radio"){  
			var rkname=$(element).attr("name");  
			if(radios.indexOf("'" + rkname + "'")==-1){  
				var checkedcount=$("input[name='"+rkname+"']:checked").length;  
				radios=(radios.length==0?"'":radios+", '")+rkname+"':'"+  
				(checkedcount==0?"":$("input[name='"+rkname+"']:checked").val())+"'";  
			}  
		}  
		
		// 处理多选框
		if(etype=="checkbox"){  
			var ckname=$(element).attr("name");  
			// alert(ckname);
			// 1\检查checks是否已经此checkbox
			if(checks.indexOf("'" + ckname + "':")==-1){ // 以前没有找到过
				// 2\没有，则将其值存入checks
				var tempchecks="";  
				if($("input[name='"+ckname+"']:checked").length>0){  
					for(j=0;j<$("input[name='"+ckname+"']:checked").length;j++){  
						//连接字符由"|" 改为"," "|"连接无法转换为数组
						tempchecks=(tempchecks.length==0?"":tempchecks+",")+$("input[name='"+ckname+"']:checked:eq("+j+")").val();  
					}  
					// alert(tempchecks);
				}  
				checks=(checks.length==0?"'":checks+", '")+ckname+"':'"+tempchecks+"'";  
				// alert(checks);
			}  
		}  
		
	}  // end for 处理input
	
	
	json=(json.length==0?"":json+",") +(texts.length==0?"":texts+",")+  
	(combos.length==0?"":combos+",")+(radios.length==0?"":radios+",")+  
	(textareas.length==0?"":textareas+",")+(checks.length==0?"":checks+",");  
	
	var obj={};
	json = json.substr(0,json.length-1);
	return eval("obj={" + json + "}");  
	
}

$.fn.clearDefaultValue = function(){  
  var formid="#"+$(this).attr("id");  
  var selector=formid+" input"; // 找到表单中所有的input标签

    // 处理input对象
  for(i=0;i<$(selector).length;i++)  
  {   
    var element=selector+":eq("+i+")";  
    var etype=$(element).attr("type");  
    // 处理文本框
    if(etype=="text"){  
    	var tkname=$(element).attr("name");  
		var input = $("input[name='" + tkname + "']");
    	var defaultValue = input.attr("title");
		if (input.val()==defaultValue){
			input.val("");
		}
    }  
  }
  
}


$.fn.resetDefaultValue = function(){  
  var formid="#"+$(this).attr("id");  
  var selector=formid+" input"; // 找到表单中所有的input标签

    // 处理input对象
  for(i=0;i<$(selector).length;i++)  
  {   
    var element=selector+":eq("+i+")";  
    var etype=$(element).attr("type");  
    // 处理文本框
    if(etype=="text"){  
    	var tkname=$(element).attr("name");  
		var input = $("input[name='" + tkname + "']");
    	var defaultValue = input.attr("title");
		if (input.val()==""){
			input.val(defaultValue);
		}
    }  
  }
  
}