var msgs = [];	// 객체 배열
var timeArr = [];
var time = { speaker: '', time: '' };	// 화자 넣는 이유: 같은 시간에 동일 화자는 맨 마지막 메시지만 시간 표시 

// 입력한 메시지 창 화면에 띄우기
function msgOnBoard(){
	var msg = {
		speaker: ''
		, content: ''
		, time: ''
	};
	
	msg.speaker = $(":input:radio[name=speaker]:checked").val();
	msg.content = $('#content').val();
	var msgBox = 'msgBox';	 // 각 메시지 박스 이름(혹시 몰라 변수로 선언)
	var code = "";
	
	console.log(msg.speaker);
	console.log(msg.content);
	console.log(msg.time);
	
	code += "<div id='" + msgBox + "' name='" + msgBox + "'" + " class='";
	// var code = document.createElement('div');
	
	if(msg.speaker == 0){	
		// 나 -> 오른쪽
		code += "toTheRight'>"
			 + msg.time + " " + msg.content;	// msg.contect를 말풍선으로 감싸기
			 
		// 라디오 체크(설정 안 해도 그대로 유지됨)
	}else{
		// 상대 -> 왼쪽
		code += "toTheLeft'>"
			 + msg.content + " " + msg.time;
		
		// 라디오 체크(설정 안 해도 그대로 유지됨)
	}
	code += "</div>";
	
	console.log(code);
	$('#chat').innetHTML(code);
	
	// 다 하고 text창 비우기
	$('#content').val('');
}

// 저장 전 이미지 확인 팝업
function popup(){
	
}