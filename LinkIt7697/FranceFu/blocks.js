document.getElementById("dialog_export_ok").onclick= function(event) {
  try {
	var workspace = Blockly.mainWorkspace;
    var xml = Blockly.Xml.workspaceToDom(workspace);
    var xml_text = Blockly.Xml.domToText(xml);
	  
    var link = document.createElement('a');
    link.download="project.xml";
    link.href="data:application/octet-stream;utf-8," + encodeURIComponent(xml_text);
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (e) {
    window.location.href="data:application/octet-stream;utf-8," + encodeURIComponent(xml_text);
    alert(e);
  }
}

document.getElementById("textarea_import").onclick= function(event) {
    var input=document.createElement('input');
    input.type="file";
	input.accept=".txt,.xml";
	input.onchange = function(event) {
	  try {	
		var file = this.files[0];
		var fr = new FileReader();           
		fr.onload = function (event) {
		  Blockly.mainWorkspace.clear();
		  document.getElementById("textarea_import").value=event.target.result;
		};
		fr.readAsText(file);
	  } catch (e) {
		alert(e);
	  }	
	}
    input.click();
}

Blockly.Blocks['customcode_head'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("String")
        .appendField(Blockly.Msg.FRANCE1_HEAD_SHOW);     
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);    
  }
};

Blockly.Blocks['customcode_code'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("String")
        .appendField(Blockly.Msg.FRANCE1_CODE_SHOW);  
    this.setInputsInline(true);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
  }
};

Blockly.Blocks['customcode_variable'] = {
  init: function() {
    this.appendValueInput("variable")
        .setCheck("String")
        .appendField(Blockly.Msg.FRANCE1_VARIABLE_SHOW);
	this.appendDummyInput() 
		.appendField(" = ");	
    this.appendValueInput("text")
        .setCheck(null);
    this.setInputsInline(true);    
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(200);
  }
};

Blockly.Blocks['customcode_code_input'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("String");   
    this.setInputsInline(true);
    this.setOutput(true, null); 
    this.setColour(20);
  }
};

Blockly.Blocks['customcode_comment'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("String")
        .appendField(Blockly.Msg.FRANCE1_COMMENT_SHOW);     
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['customcode_comment_block'] = {
  init: function() {
    this.appendValueInput("text")
        .setCheck("String")
        .appendField(Blockly.Msg.FRANCE1_COMMENT_BLOCK_SHOW);     
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['customcode_instruction1'] = {
  init: function() {
	  this.appendValueInput("instruction")
		  .setCheck("String")
		  .appendField(Blockly.Msg.FRANCE1_INSTRUCTION_SHOW);   
	  this.appendDummyInput()
		  .appendField("( ");      
	  this.appendValueInput("text")
		  .setCheck(null);  
	  this.appendDummyInput()
		  .appendField(" )");      
	  this.setOutput(true, null);
	  this.setInputsInline(true);
	  this.setColour(20);
  }
};

Blockly.Blocks['customcode_instruction2'] = {
  init: function() {
	  this.appendValueInput("instruction")
		  .setCheck("String")
		  .appendField(Blockly.Msg.FRANCE1_INSTRUCTION_SHOW);
	  this.appendDummyInput()
		  .appendField("( ");    
	  this.appendValueInput("text1")
		  .setCheck(null);  
	  this.appendDummyInput()
		  .appendField(", ");       
	  this.appendValueInput("text2")
		  .setCheck(null);     
	  this.appendDummyInput()
		  .appendField(" )");      
	  this.setOutput(true, null);
	  this.setInputsInline(true);
	  this.setColour(20);
  }
};

Blockly.Blocks['customcode_instruction3'] = {
  init: function() {
	  this.appendDummyInput()
		  .appendField(Blockly.Msg.FRANCE1_INSTRUCTION_SHOW);
	  this.appendValueInput("instruction")
		  .setCheck(null); 
	  this.appendDummyInput()
		  .appendField("( ");
	  this.appendValueInput("text1")
		  .setCheck(null);  
	  this.appendDummyInput()
		  .appendField(", "); 	  
	  this.appendValueInput("text2")
		  .setCheck(null);  
	  this.appendDummyInput()
		  .appendField(", ");       
	  this.appendValueInput("text3")
		  .setCheck(null);     
	  this.appendDummyInput()
		  .appendField(" )");      
	  this.setOutput(true, null);
	  this.setInputsInline(true);
	  this.setColour(20);
  }
};

Blockly.Blocks['customcode_instruction4'] = {
  init: function() {
	  this.appendDummyInput()
		  .appendField(Blockly.Msg.FRANCE1_INSTRUCTION_SHOW);
	  this.appendValueInput("instruction")
		  .setCheck(null); 
	  this.appendDummyInput()
		  .appendField(".");
	  this.appendValueInput("text1")
		  .setCheck(null);       
	  this.setOutput(true, null);
	  this.setInputsInline(true);
	  this.setColour(20);
  }
};

Blockly.Blocks['customcode_instruction5'] = {
  init: function() {
	  this.appendDummyInput()
		  .appendField(Blockly.Msg.FRANCE1_VARIABLE_SHOW);
	  this.appendValueInput("instruction")
		  .setCheck(null); 
	  this.appendDummyInput()
		  .appendField(".");
	  this.appendDummyInput()    
		  .appendField(new Blockly.FieldDropdown([
			["toInt()","toInt()"],
			["toDouble()","toDouble()"],	
			["toFloat()","toFloat()"],
			["toLowerCase()","toLowerCase()"],	
			["toUpperCase()","toUpperCase()"],
			["trim()","trim()"],	
			["c_str()","c_str()"],
			["length()","length()"]		  
	  ]), "type");     
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
  }
};

Blockly.Blocks['customcode_instruction5_get'] = {
  init: function() {
	  this.appendDummyInput()
		  .appendField(Blockly.Msg.FRANCE1_VARIABLE_SHOW);
	  this.appendValueInput("instruction")
		  .setCheck(null); 
	  this.appendDummyInput()
		  .appendField(".");
	  this.appendDummyInput()    
		  .appendField(new Blockly.FieldDropdown([
			["toInt()","toInt()"],
			["toDouble()","toDouble()"],	
			["toFloat()","toFloat()"],
			["toLowerCase()","toLowerCase()"],	
			["toUpperCase()","toUpperCase()"],
			["trim()","trim()"],	
			["c_str()","c_str()"],
			["length()","length()"]		  
	  ]), "type");     
	  this.setOutput(true, null);
	  this.setInputsInline(true);
	  this.setColour(20);
  }
};

Blockly.Blocks['customcode_instruction6'] = {
  init: function() {
	  this.appendDummyInput()    
		  .appendField(new Blockly.FieldDropdown([
			["isAlpha","isAlpha"],
			["isAlphaNumeric","isAlphaNumeric"],
			["isAscii","isAscii"],
			["isControl","isControl"],
			["isDigit","isDigit"],
			["isGraph","isGraph"],
			["isHexadecimalDigit","isHexadecimalDigit"],
			["isLowerCase","isLowerCase"],
			["isPrintable","isPrintable"],
			["isPunct","isPunct"],
			["isSpace","isSpace"],
			["isUpperCase","isUpperCase"],
			["isWhitespace","isWhitespace"]	  
			]), "instruction");    
	  this.appendDummyInput()
		  .appendField("( ");      
	  this.appendValueInput("text")
		  .setCheck(null);  
	  this.appendDummyInput()
		  .appendField(" )");      
	  this.setOutput(true, null);
	  this.setInputsInline(true);
	  this.setColour(20);
  }
};

Blockly.Blocks['tcp_https'] = {
  init: function() {
	this.appendDummyInput() 
		.appendField(Blockly.Msg.FRANCE2_HEAD_HTTPS_SHOW);
    this.appendValueInput("domain")
        .setCheck("String")
        .appendField(Blockly.Msg.FRANCE2_DOMAIN_SHOW);  
    this.appendValueInput("port")
        .setCheck("String")
        .appendField(Blockly.Msg.FRANCE2_PORT_SHOW); 		
    this.appendValueInput("request")
        .setCheck("Number")
        .appendField(Blockly.Msg.FRANCE2_REQUEST_SHOW); 	
    this.appendValueInput("timeout")
        .setCheck("Number")
        .appendField(Blockly.Msg.FRANCE2_TIMEOUT_SHOW)
		.appendField(Blockly.Msg.FRANCE2_SECOND_SHOW);	
	this.setInputsInline(false);
	this.setOutput(true, null);
	this.setColour(20);   
  }
};

Blockly.Blocks['tcp_http'] = {
  init: function() {
	this.appendDummyInput() 
		.appendField(Blockly.Msg.FRANCE2_HEAD_HTTP_SHOW);
    this.appendValueInput("domain")
        .setCheck("String")
        .appendField(Blockly.Msg.FRANCE2_DOMAIN_SHOW);  
    this.appendValueInput("port")
        .setCheck("String")
        .appendField(Blockly.Msg.FRANCE2_PORT_SHOW); 		
    this.appendValueInput("request")
        .setCheck("Number")
        .appendField(Blockly.Msg.FRANCE2_REQUEST_SHOW); 	
    this.appendValueInput("timeout")
        .setCheck("Number")
        .appendField(Blockly.Msg.FRANCE2_TIMEOUT_SHOW)
		.appendField(Blockly.Msg.FRANCE2_SECOND_SHOW);	
	this.setInputsInline(false);
	this.setOutput(true, null);
	this.setColour(20);   
  }
};

Blockly.Blocks['linenotify'] = {
  init: function() {
  this.appendValueInput("linenotify_token")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FRANCE3_HEAD_LINE_SHOW)
      .appendField("Token");  
  this.appendValueInput("linenotify_msg")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Message");
    this.setOutput(true, null);  
    this.setColour(20);
  }
};

Blockly.Blocks['linenotify_text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Line Notify Text");
    this.appendValueInput("value_text")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("text","text");
    this.setOutput(true, null);  
    this.setColour(50);
  }
};

Blockly.Blocks['linenotify_sticker'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Line Notify Sticker");
    this.appendValueInput("value_text")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("text","text");
    this.appendValueInput("value_packageId")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("packageId","packageId");
    this.appendValueInput("value_stickerId")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("stickerId","stickerId");
    this.setOutput(true, null);  
    this.setColour(50);
  }
};

Blockly.Blocks['linenotify_image'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Line Notify Image");
    this.appendValueInput("value_text")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("text","text");
    this.appendValueInput("value_originalContentUrl")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("originalContentUrl","originalContentUrl");
    this.appendValueInput("value_previewImageUrl")
        .setCheck(null)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("previewImageUrl","previewImageUrl");
    this.setOutput(true, null);  
    this.setColour(50);
  }
};

Blockly.Blocks['tcp_https_esp32'] = {
  init: function() {
	this.appendDummyInput() 
		.appendField(Blockly.Msg.FRANCE4_HEAD_HTTPS_SHOW);
    this.appendValueInput("domain")
        .setCheck("String")
        .appendField(Blockly.Msg.FRANCE2_DOMAIN_SHOW);  
    this.appendValueInput("port")
        .setCheck("String")
        .appendField(Blockly.Msg.FRANCE2_PORT_SHOW); 		
    this.appendValueInput("request")
        .setCheck("Number")
        .appendField(Blockly.Msg.FRANCE2_REQUEST_SHOW); 	
    this.appendValueInput("timeout")
        .setCheck("Number")
        .appendField(Blockly.Msg.FRANCE2_TIMEOUT_SHOW)
		.appendField(Blockly.Msg.FRANCE2_SECOND_SHOW);	
	this.setInputsInline(false);
	this.setOutput(true, null);
	this.setColour(20);   
  }
};

Blockly.Blocks['tcp_http_esp32'] = {
  init: function() {
	this.appendDummyInput() 
		.appendField(Blockly.Msg.FRANCE4_HEAD_HTTP_SHOW);
    this.appendValueInput("domain")
        .setCheck("String")
        .appendField(Blockly.Msg.FRANCE2_DOMAIN_SHOW);  
    this.appendValueInput("port")
        .setCheck("String")
        .appendField(Blockly.Msg.FRANCE2_PORT_SHOW); 		
    this.appendValueInput("request")
        .setCheck("Number")
        .appendField(Blockly.Msg.FRANCE2_REQUEST_SHOW); 	
    this.appendValueInput("timeout")
        .setCheck("Number")
        .appendField(Blockly.Msg.FRANCE2_TIMEOUT_SHOW)
		.appendField(Blockly.Msg.FRANCE2_SECOND_SHOW);	
	this.setInputsInline(false);
	this.setOutput(true, null);
	this.setColour(20);   
  }
};

Blockly.Blocks['linenotify_esp32'] = {
  init: function() {
  this.appendValueInput("linenotify_token")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.FRANCE5_HEAD_LINE_SHOW)
      .appendField("Token");  
  this.appendValueInput("linenotify_msg")
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Message");
    this.setOutput(true, null);  
    this.setColour(200);
  }
};

Blockly.Blocks['close_powerdog'] = {
  init: function() {
	this.appendDummyInput() 
		.appendField(Blockly.Msg.FRANCE6_CLOSE_POWERDOG_SHOW);    
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(200);
  }
};

Blockly.Blocks['esp32_wifi_wait_until_ready'] = {
  init:function(){
	this.appendDummyInput().appendField(Blockly.Msg.ESP32_SET_WIFI_UNTIL_READY_TITLE);
	this.appendValueInput("SSID")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.LINKIT_SET_WIFI_SSID);
	this.appendValueInput("PASSWORD")
		.setCheck("String")
		.setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.LINKIT_SET_WIFI_PASSWORD);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['showcode'] = {
  init: function() {
  this.appendDummyInput()
      .appendField(Blockly.Msg.FRANCE7_SHOWCODE_SHOW)
      .appendField(new Blockly.FieldCheckbox("FALSE"), "continued");
  this.setColour(200);
  },
  onchange: function (event) {
    if (event.element=="click"&&this.getFieldValue("continued")=="FALSE") {
      if (this.id==event.blockId) {
        var workspace = Blockly.mainWorkspace;
        var code = Blockly.Arduino.workspaceToCode(workspace);
        console.clear();
        console.log(code);
      }
    } else if (this.getFieldValue("continued")=="TRUE") {
      var workspace = Blockly.mainWorkspace;
      var code = Blockly.Arduino.workspaceToCode(workspace);
      console.clear();
      console.log(code);
    }
  }
}; 

Blockly.Blocks['thingspeak_update'] = {
  init: function() {   
  this.appendValueInput("key")
      .setCheck("String")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("ThingSpeak ")
      .appendField("Write API Key");
  this.appendValueInput("field1")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field1");
  this.appendValueInput("field2")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field2");
  this.appendValueInput("field3")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field3");  
  this.appendValueInput("field4")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field4");
  this.appendValueInput("field5")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field5");
  this.appendValueInput("field6")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field6");  
  this.appendValueInput("field7")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field7");
  this.appendValueInput("field8")
      .setCheck("Number")
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField("Field8");  
	this.setOutput(true, null);  
	this.setColour(20);
  }
};

Blockly.Blocks['thingspeak_read1'] = {
  init: function() {  
	this.appendDummyInput()
	  .appendField("ThingSpeak Get a Channel Feed");
	this.appendValueInput("key")
	  .setCheck(null)
	  .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField("https://api.thingspeak.com/channels/");
	this.appendValueInput("count")
	  .setCheck("Number")
	  .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField("/feeds.json?results=");
	this.appendValueInput("api_key")
	  .setCheck(null)
	  .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField("&api_key=");    
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(20);
  }
};

Blockly.Blocks['thingspeak_read2'] = {
  init: function() {  
	this.appendDummyInput()
	  .appendField("ThingSpeak Get a Channel Feed");
	this.appendValueInput("key")
	  .setCheck(null)
	  .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField("https://api.thingspeak.com/channels/");
	this.appendValueInput("field")
	  .setCheck("Number")
	  .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField("/fields/");    
	this.appendValueInput("count")
	  .setCheck("Number")
	  .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField(".json?results=");
	this.appendValueInput("api_key")
	  .setCheck(null)
	  .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField("&api_key=");     
	this.setInputsInline(true);
	this.setOutput(true, null);  
	this.setColour(20);
  }
};

Blockly.Blocks['thingspeak_read3'] = {
  init: function() {  
	this.appendDummyInput()
	  .appendField("ThingSpeak Get Channel Status Updates");
	this.appendValueInput("key")
	  .setCheck(null)
	  .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField("https://api.thingspeak.com/channels/");
	this.appendDummyInput()
	  .appendField("/status.json"); 
	this.appendValueInput("api_key")
	  .setCheck(null)
	  .setAlign(Blockly.ALIGN_RIGHT)
	  .appendField("?api_key=");     
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};

Blockly.Blocks['thingspeak_format'] = {
  init: function() {  
	this.appendDummyInput()
	  .appendField("ThingSpeak Data to Json");
	this.appendValueInput("text")
	  .setCheck(null);
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(50);
  }
};

Blockly.Blocks['thingspeak_field'] = {
  init: function() {  
	this.appendDummyInput()
	  .appendField("Get ThingSpeak Json Data");
	this.appendValueInput("text")
	  .setCheck(null);
	this.appendDummyInput()
	  .appendField("RecordNumber");
	this.appendValueInput("recordnumber")
	  .setCheck("Number"); 
	this.appendDummyInput()
	  .appendField("FieldName");
	this.appendDummyInput()    
	  .appendField(new Blockly.FieldDropdown([
		["created_at","created_at"],
		["entry_id","entry_id"], 
		["field1","field1"],
		["field2","field2"],
		["field3","field3"],
		["field4","field4"],
		["field5","field5"],
		["field6","field6"],
		["field7","field7"],
		["field8","field8"]	
		]), "fieldname"); 
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(50);
  }
};

Blockly.Blocks['esp32_analogwrite'] = {
  init: function() {  
	this.appendDummyInput()
	  .appendField(Blockly.Msg.ESP32_ANALOGWRITE_SHOW);
	this.appendValueInput("pin")
	  .setCheck("Number");  
	this.appendDummyInput()
	  .appendField(Blockly.Msg.ESP32_ANALOGWRITE_VALUE_SHOW);
	this.appendValueInput("val")
	  .setCheck("Number"); 	
	this.appendDummyInput()
	  .appendField(Blockly.Msg.ESP32_CHANNEL_SHOW);
	this.appendValueInput("channel")
	  .setCheck("Number"); 	
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['esp32_digitalwrite'] = {
  init: function() {  
	this.appendDummyInput()
	  .appendField(Blockly.Msg.ESP32_DIGITALWRITE_SHOW);
	this.appendValueInput("pin")
	  .setCheck("Number");  
	this.appendDummyInput()
	  .appendField(Blockly.Msg.ESP32_DIGITALWRITE_VALUE_SHOW);
	this.appendDummyInput()    
	  .appendField(new Blockly.FieldDropdown([
		["HIGH","1"],
		["LOW","0"]	  
		]), "val"); 
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['linkit7697_myfirmata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_SHOW);
    this.appendValueInput("ssid")
        .setCheck(null)
		.appendField(Blockly.Msg.SERVERMODULE_SSID_SHOW);
    this.appendValueInput("password")
        .setCheck(null)
		.appendField(Blockly.Msg.SERVERMODULE_PASSWORD_SHOW);
    this.appendValueInput("mainpage")
        .setCheck(null)
		.appendField(Blockly.Msg.SERVERMODULE_MAINPAGE_SHOW);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_EXECUTE_SHOW);
    this.appendStatementInput("ExecuteCommand")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_SETUP_SHOW);
    this.appendStatementInput("setup")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_LOOP_SHOW);
    this.appendStatementInput("loop")
        .setCheck(null);
    this.setInputsInline(false);
    this.setColour(210);
  }
};

Blockly.Blocks['esp32_myfirmata'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.ESP32_SERVERMODULE_SHOW);
    this.appendValueInput("ssid")
        .setCheck(null)
		.appendField(Blockly.Msg.SERVERMODULE_SSID_SHOW);
    this.appendValueInput("password")
        .setCheck(null)
		.appendField(Blockly.Msg.SERVERMODULE_PASSWORD_SHOW);
    this.appendValueInput("mainpage")
        .setCheck(null)
		.appendField(Blockly.Msg.SERVERMODULE_MAINPAGE_SHOW);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_EXECUTE_SHOW);
    this.appendStatementInput("ExecuteCommand")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_SETUP_SHOW);
    this.appendStatementInput("setup")
        .setCheck(null);
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_LOOP_SHOW);
    this.appendStatementInput("loop")
        .setCheck(null);
    this.setInputsInline(false);
    this.setColour(210);
  }
};

Blockly.Blocks['servermodule_cmd'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_CMD_SHOW);
    this.appendValueInput("text")
        .setCheck(null);   
    this.setInputsInline(true);
    this.setOutput(true, null); 
    this.setColour(20);
  }
};

Blockly.Blocks['servermodule_feedback'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_FEEDBACK_SHOW);
    this.appendValueInput("text")
        .setCheck(null);   
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['servermodule_parameter'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_SET_SHOW);
	this.appendDummyInput()    
	  .appendField(new Blockly.FieldDropdown([
		["P1","P1"],
		["P2","P2"],
		["P3","P3"],	
		["P4","P4"],
		["P5","P5"],
		["P6","P6"],
		["P7","P7"],	
		["P8","P8"],
		["P9","P9"],	  
	]), "parameter"); 
	this.appendDummyInput()
        .appendField(" ");
	this.appendDummyInput()    
	  .appendField(new Blockly.FieldDropdown([
		["toInt()","toInt()"],
		["toDouble()","toDouble()"],	
		["toFloat()","toFloat()"],
		["toLowerCase()","toLowerCase()"],	
		["toUpperCase()","toUpperCase()"],
		["trim()","trim()"],	
		["c_str()","c_str()"],
		["length()","length()"]		  
	]), "type");     
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['servermodule_parameter_variable'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_GET_SHOW);
	this.appendDummyInput()    
	  .appendField(new Blockly.FieldDropdown([
		["P1","P1"],
		["P2","P2"],
		["P3","P3"],	
		["P4","P4"],
		["P5","P5"],
		["P6","P6"],
		["P7","P7"],	
		["P8","P8"],
		["P9","P9"],	  
	]), "parameter"); 
	this.appendDummyInput()
        .appendField(" ");
	this.appendDummyInput()    
	  .appendField(new Blockly.FieldDropdown([
		["toInt()","toInt()"],
		["toDouble()","toDouble()"],	
		["toFloat()","toFloat()"],
		["toLowerCase()","toLowerCase()"],	
		["toUpperCase()","toUpperCase()"],
		["trim()","trim()"],	
		["c_str()","c_str()"],
		["length()","length()"]		  
	]), "type");     
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};

Blockly.Blocks['servermodule_parameter_get'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_GET_SHOW);
	this.appendDummyInput()    
		  .appendField(new Blockly.FieldDropdown([
			["P1","P1"],
			["P2","P2"],
			["P3","P3"],	
			["P4","P4"],
			["P5","P5"],
			["P6","P6"],
			["P7","P7"],	
			["P8","P8"],
			["P9","P9"],	  
	  ]), "parameter");   
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};

Blockly.Blocks['servermodule_parameter_set'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PARAMETER_SET_SHOW);
	this.appendDummyInput()    
		  .appendField(new Blockly.FieldDropdown([
			["P1","P1"],
			["P2","P2"],
			["P3","P3"],	
			["P4","P4"],
			["P5","P5"],
			["P6","P6"],
			["P7","P7"],	
			["P8","P8"],
			["P9","P9"],	  
	  ]), "parameter"); 
	this.appendDummyInput()
        .appendField(" = ");
    this.appendValueInput("text")
        .setCheck(null);   
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['servermodule_pinmode'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_SET_SHOW)
        .appendField(Blockly.Msg.SERVERMODULE_PIN_SHOW);
    this.appendValueInput("pin")
        .setCheck("Number");   
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_MODE_SHOW);
	this.appendDummyInput()    
	  .appendField(new Blockly.FieldDropdown([
		["OUTPUT","OUTPUT"],
		["INPUT","INPUT"],	
		["INPUT_PULLUP","INPUT_PULLUP"]	  
	]), "mode");     
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['servermodule_pinwrite'] = {
  init: function() {
	this.appendDummyInput()    
	  .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.SERVERMODULE_DIGITALWRITE_SHOW,"digitalWrite"],
		[Blockly.Msg.SERVERMODULE_ANALOGWRITE_SHOW,"analogWrite"] 
	]), "type");
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PIN_SHOW);
    this.appendValueInput("pin")
        .setCheck("Number");   
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_VALUE_SHOW);
    this.appendValueInput("val")
        .setCheck("Number");     
	this.setInputsInline(true);
	this.setPreviousStatement(!0);
	this.setNextStatement(!0);
	this.setColour(200);
  }
};

Blockly.Blocks['servermodule_pinread'] = {
  init: function() {
	this.appendDummyInput()    
	  .appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.SERVERMODULE_DIGITALREAD_SHOW,"digitalRead"],
		[Blockly.Msg.SERVERMODULE_ANALOGREAD_SHOW,"analogRead"] 
	]), "type");
	this.appendDummyInput()
        .appendField(Blockly.Msg.SERVERMODULE_PIN_SHOW);
    this.appendValueInput("pin")
        .setCheck("Number");   
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};

Blockly.Blocks['MLX90614'] = {
  init: function() {
	this.appendDummyInput()
        .appendField(Blockly.Msg.MLX90614_SHOW);
	this.appendDummyInput()    
		.appendField(new Blockly.FieldDropdown([
		["MLX90615","MLX90615"],
		["MLX90614","MLX90614"]  
		]), "sensor");
    this.appendValueInput("sda")
        .appendField("SDA")
        .setCheck("Number");   
    this.appendValueInput("scl")
        .appendField("SCL")
        .setCheck("Number");
	this.appendDummyInput()    
        .appendField(" ");		
	this.appendDummyInput()    
		.appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.MLX90614_KIND_OBJECT_SHOW,"object"],
		[Blockly.Msg.MLX90614_KIND_AMBIENT_SHOW,"ambient"]  
		]), "kind");
	this.appendDummyInput()    
        .appendField(Blockly.Msg.MLX90614_SCALE_SHOW);
	this.appendDummyInput()    
		.appendField(new Blockly.FieldDropdown([
		[Blockly.Msg.MLX90614_SCALE_CELCIUS_SHOW,"0"],
		[Blockly.Msg.MLX90614_SCALE_FAHRENHEIT_SHOW,"1"],	
		[Blockly.Msg.MLX90614_SCALE_KELVIN_SHOW,"2"]	  
		]), "scale");
	this.appendDummyInput()    
		.appendField(Blockly.Msg.MLX90614_COMPENSATION_SHOW);	
    this.appendValueInput("compensation")
        .setCheck("Number");	
	this.setInputsInline(true);
    this.setOutput(true, null);  
    this.setColour(20);
  }
};