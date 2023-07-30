var msgs = [];	// 객체 배열
var timeArr = [];
var time = { speaker: '', time: '' };	// 화자 넣는 이유: 같은 시간에 동일 화자는 맨 마지막 메시지만 시간 표시 

/*
// 제이쿼리 import한 상태에서도 $ is not a function 오류
$("#generator").keyup(function(e){
	if(e.keyCode == 13){
		msgOnBoard();
	} 
});
*/

function pressEnter(){
	if (window.event.keyCode == 13) {	// 13: 엔터
 		msgOnBoard();
    }
}

// 입력한 메시지 창 화면에 띄우기
function msgOnBoard(){
	var msg = {
		speaker: ''
		, content: ''
		, time: ''
	};
	
	msg.speaker = $(":input:radio[name=speaker]:checked").val();
	msg.content = $('#content').val();	// msg.contect를 말풍선으로 감싸기
	var msgBox = 'msgBox';	 // 각 메시지 박스 이름(혹시 몰라 변수로 선언)
	
	console.log(msg.speaker);
	console.log(msg.content);
	console.log(msg.time);
	
	var code = "<li id='" + msgBox + "' name='" + msgBox + "'" + " class='";
	/*
	var code = document.createElement('li');
	code.setAttribute("id", msgBox);
	code.setAttribute("name", msgBox);
	*/
	
	
	if(msg.speaker == 0){	
		// 나 -> 오른쪽
		code += "toTheRight'>"
			 + msg.time + " " + msg.content;
			 
		// 라디오 체크(설정 안 해도 그대로 유지됨)
	}else{
		// 상대 -> 왼쪽
		code += "toTheLeft'>"
			 + msg.content + " " + msg.time;
		
		// 라디오 체크(설정 안 해도 그대로 유지됨)
	}
	code += "</li> <br>";
	
	console.log(code);
	$('#chat').append(code);
	
	// 다 하고 text창 비우기
	$('#content').val('');
}

// 저장 전 이미지 확인 팝업
function popup(){
	
}