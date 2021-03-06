/*
Author: Chung-Yi Fu (Kaohsiung, Taiwan)   https://www.facebook.com/francefu

Google Script
https://github.com/fustyles/webduino/blob/gs/linebot_push_message.gs
https://github.com/fustyles/webduino/blob/gs/SendCapturedImageToTelegram.gs
*/

+(function (window, document) {

  'use strict';

  function telegram_push_message(token, chatid, msg) {
	if (!document.getElementById("myFormMessage")) {
		var myFormMessage = document.createElement("form");
		myFormMessage.id = "myFormMessage";
		myFormMessage.name = "myFormMessage";
		myFormMessage.method = "POST";
		myFormMessage.target = "myIframe";
		document.body.appendChild(myFormMessage);
	} 
	else {
		var myFormMessage = document.getElementById("myFormMessage");

	}
	myFormMessage.action = "https://api.telegram.org/bot"+token+"/sendMessage";

	if (!document.getElementById("chat_id")) {
		var myChatID = document.createElement("input");
		myChatID.type = "hidden";
		myChatID.id = "chat_id";
		myChatID.name = "chat_id";
		myFormMessage.appendChild(myChatID);
	}
	else {
		var myChatID = document.getElementById("chat_id");
	}
	myChatID.value = chatid;

	if (!document.getElementById("text")) {
		var myText = document.createElement("input");
		myText.type = "hidden";
		myText.id = "text";
		myText.name = "text";
		myFormMessage.appendChild(myText);
	}
	else {
		var myText = document.getElementById("text");
	}
	myText.value = msg;

	if (!document.getElementById("myIframe")) {
		var myIframe = document.createElement('iframe');
		myIframe.id = "myIframe";
		myIframe.name = "myIframe";
		myIframe.style.display = "none";
		document.body.appendChild(myIframe);
	}
	else {
		var myIframe = document.getElementById("myIframe");
	}

	myFormMessage.submit();
  } 
  
  function telegram_push_image(input_script,input_token,input_chatid,input_videoid) {
	var myVideo = document.getElementById(input_videoid);

	if (!document.getElementById("myCanvas")) {
		var myCanvas = document.createElement('canvas');
		myCanvas.id = "myCanvas";
		myCanvas.style.display = "none";
		document.body.appendChild(myCanvas);
	}
	else {
		var myCanvas = document.getElementById("myCanvas");
	}

	if (!document.getElementById("myIframe")) {
		var myIframe = document.createElement('iframe');
		myIframe.id = "myIframe";
		myIframe.name = "myIframe";
		myIframe.style.display = "none";
		document.body.appendChild(myIframe);
	}
	else {
		var myIframe = document.getElementById("myIframe");
	}

	var myContext = myCanvas.getContext('2d');
	myCanvas.setAttribute("width", myVideo.width);
    myCanvas.setAttribute("height", myVideo.height);
	myContext.drawImage(myVideo, 0, 0, myVideo.width, myVideo.height);

	if (!document.getElementById("myForm")) {
		var myForm = document.createElement("form");
		myForm.id = "myForm";
		myForm.name = "myForm";
		myForm.method = "POST";
		myForm.target = "myIframe";
		myForm.action = input_script;
		document.body.appendChild(myForm);
	} 
	else {
		var myForm = document.getElementById("myForm");
	}

	if (!document.getElementById("myToken")) {
		var myToken = document.createElement("input");
		myToken.type = "hidden";
		myToken.id = "myToken";
		myToken.name = "myToken";
		myForm.appendChild(myToken);
	}
	else {
		var myToken = document.getElementById("myToken");
	}
	myToken.value = input_token;

	if (!document.getElementById("myChatID")) {
		var myChatID = document.createElement("input");
		myChatID.type = "hidden";
		myChatID.id = "myChatID";
		myChatID.name = "myChatID";
		myForm.appendChild(myChatID);
	}
	else {
		var myChatID = document.getElementById("myChatID");
	}
	myChatID.value = input_chatid;

	if (!document.getElementById("myFilename")) {
		var myFilename = document.createElement("input");
		myFilename.type = "hidden";
		myFilename.id = "myFilename";
		myFilename.name = "myFilename";
		myForm.appendChild(myFilename);
	}
	else {
		var myFilename = document.getElementById("myFilename");
	}
	var date = new Date();
	myFilename.value = date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()+" "+("0"+date.getHours()).substr(-2,2)+":"+("0"+date.getMinutes()).substr(-2,2)+":"+("0"+date.getSeconds()).substr(-2,2);	

	if (!document.getElementById("myFile")) {
		var myFile = document.createElement("textarea");
		myFile.id = "myFile";
		myFile.name = "myFile";
		myFile.style.display = "none";
		myForm.appendChild(myFile);
	}
	else {
		var myFile = document.getElementById("myFile");
	}
	myFile.value = myCanvas.toDataURL();

    myForm.submit();
  } 

  function telegram_get_id(input_tagname) {
	var list = [];
	var element = document.getElementsByTagName(input_tagname);
	if (element.length>0) {
		for (var i=0;i<element.length;i++) {
			list.push(element[i].id);
		}
	}
	return list;
  }
  
  window.telegram_push_message = telegram_push_message;
  window.telegram_push_image = telegram_push_image;
  window.telegram_get_id = telegram_get_id;

}(window, window.document));
