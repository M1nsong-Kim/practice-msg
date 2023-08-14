var msgs = [];	// 객체 배열
var timeArr = [];
var time = { speaker: '', time: '' };	// 화자 넣는 이유: 같은 시간에 동일 화자는 맨 마지막 메시지만 시간 표시 

function pressEnter(e){
	if (window.event.keyCode == 13) {	// 13: 엔터
 		if($(e).attr('class').indexOf('talk') != -1){			 
	 		msgOnTalk();
		 }else if($(e).attr('class').indexOf('game') != -1){
			 msgOnGame();
		 }
    }
}

// 입력한 메시지 창 화면에 띄우기)
function msgOnTalk(){
	var msg = {
		speaker: ''
		, content: ''
		, time: ''
	};
	
	msg.speaker = $(":input:radio[name=speaker]:checked").val();
	msg.content = $('#content').val();	// msg.contect를 말풍선으로 감싸기
	var msgBox = 'msgBox';	 // 각 메시지 박스 이름(혹시 몰라 변수로 선언)
	
	if(msg.content.trim() == ''){
		alert('공백 입력 불가');
		return;
	}
	
	var code = "<div " + " class='";
	/*
	var code = document.createElement('li');
	code.setAttribute("id", msgBox);
	code.setAttribute("name", msgBox);
	*/
	
	
	if(msg.speaker == 0){	
		// 나 -> 오른쪽
		code += "chat right'>"
			 + msg.time + " "
			 + "<div class='box'> <div class='bubble-right'> <span class='text'>" + msg.content + "</span> </div> </div>";
			 
		// 라디오 체크(설정 안 해도 그대로 유지됨)
	}else{
		// 상대 -> 왼쪽
		code += "chat left'>"
			 + "<div class='box'> <div class='bubble-left'> <span class='text'>" + msg.content + "</span> </div> </div>"
			 + " " + msg.time;
		
		// 라디오 체크(설정 안 해도 그대로 유지됨)
	}
	code += "</div>";
	
	// console.log(code);
	$('.container').append(code);
	
	// 다 하고 text창 비우기
	$('#content').val('');
}

function msgOnGame(){
	var msg = {
		place: ''
		, speaker: ''
		, content: ''
		, time: ''
	};
	var place = ['all', 'party', 'guild', 'union', 'megaphone'];
	var place_korean = ['전체', '파티', '길드', '연합', '확성기'];
	var current_place = -1;
	
	msg.speaker = $(":input:radio[name=speaker]:checked").val();
	msg.content = $('#content').val();
	
	for(let i = 0; i < place.length; i++){
		if($('#place').val() == place[i]){
			current_place = i;
			msg.place = place[current_place];
			break;
		}
	}
	
	console.log($('#place').val());
	console.log(msg.place);
	console.log(msg.content);
	
	var code = code = "<div class='text-"+msg.place+"'>"
	if(current_place != 4){	
		code += "[" + place_korean[current_place] + "] ";
	}
	code += msg.speaker + ": " + msg.content
		 + "</div>";
		 	
	$('.container').append(code);
	$('#content').val('');
	
	// DB 삽입 (컬럼 정비 후 다시 작성 필요)
	$.ajax({
		url: '/insertChat'
		, method: 'POST'
		, async: true	// 비동기
		, data: {
			fromName: msg.speaker
			, content: msg.content
			, createDate: '2023-08-14'
		}
		, success: function(data) {
			alert('success : ' + data);
		}
	});
}

// 상대방 추가
function popup_opponent(){
	var popup = window.open('/popupOpponent', 'popup_opponent', 'width=700px,height=800px,scrollbars=yes');
}

// 입/퇴장 메시지
function popup_inNout(){
	var popup = window.open('/popupIn&out', 'popup_inNout', 'width=700px,height=800px,scrollbars=yes');
}

// 저장 전 이미지 확인 팝업
function popup_imgDownload(){
	var popup = window.open('/popupImgDownload', 'popup_imgDownload', 'width=700px,height=800px,scrollbars=yes');
}