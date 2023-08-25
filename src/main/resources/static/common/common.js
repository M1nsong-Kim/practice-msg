var talk_msgs = [{
		speaker: ''
		, content: ''
		, time: ''
	}];	// 객체 배열
var game_msg = [];
// var timeArr = [];
// var time = { speaker: '', time: '' };	// 화자 넣는 이유: 같은 시간에 동일 화자는 맨 마지막 메시지만 시간 표시 
var idx = 0;

function pressEnter(e){
	if (window.event.keyCode == 13) {	// 13: 엔터
 		if($(e).attr('class').indexOf('talk') != -1){			 
	 		msgOnTalk();
		 }else if($(e).attr('class').indexOf('game') != -1){
			 msgOnGame();
		 }
    }
}

function differentDT(e){
	var arr = ['date', 'time'];
	var text = "";
	
	for(let i = 0; i < arr.length; i++){
		var form = ['year', 'month', 'day', '년', '월', '일'];
		if(i == 1){	// 시간: 오전 오후 고민 ☆★☆
			form[0] = 'hour';
			form[1] = 'min';
			form[3] = '시';
			form[4] = '분';
		}
		
		if($(e).attr('id') == arr[i]){	// 직접 입력
			$('#df_'+arr[i]).html('');	// 비우기
			text += "<input type='number' id='" + form[0] + "'>" + form[3]
				 + "<input type='number' id='" + form[1] + "'>" + form[4]
			if(i == 0){				
				text += "<input type='number' id='" + form[2] + "'>" + form[5];
			}
			$('#df_'+arr[i]).append(text);
			break;
		}else if($(e).attr('id') == 'current_' + arr[i]){	// 현재 기준
			$('#df_'+arr[i]).html('');	// 비우기
			break;
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
	
	idx = talk_msgs.length;
	
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var day = date.getDate();
	var hour = date.getHours();
	var min = date.getMinutes();
	// var getCurrentDate = false;
	if($('#year').val() != undefined){
		year = $('#year').val();
		month = $('#month').val();
		day = $('#day').val();
	}else if($('#hour').val() != undefined){
		hour = $('#hour').val();
		min = $('#min').val();
	}
	if(hour > 12){
		hour -= 12;
		ampm = '오후';
	}else if(hour == 12){
		ampm = '오후';
	}else if(hour < 12){
		ampm = '오전';
	}
	month = month<10?'0'+month:month;
	day = day<10?'0'+day:day;
	hour = hour<10?'0'+hour:hour;
	min = min<10?'0'+min:min;


	msg.speaker = $(":input:radio[name=speaker]:checked").val();
	msg.content = $('#content').val();	// msg.contect를 말풍선으로 감싸기
	msg.time = year + '-' + month + '-' + day + ' ' + hour + ':' + min;
	// var msgBox = 'msgBox';	 // 각 메시지 박스 이름(혹시 몰라 변수로 선언)
	
	if(msg.content.trim() == ''){
		alert('공백 입력 불가');
		return;
	}

	var code = "";
	var time = ampm + ' ' +msg.time.substr(11);
	if(idx == 0 || talk_msgs[idx-1].speaker != msg.speaker){
		console.log('시간 적기');
	}else{
		talk_msgs[idx-1].time == msg.time ? time = ' ' : time;
	}

	if(msg.speaker == 0){	
		// 나 -> 오른쪽
		code += "<div class='chat right'>" + "<div class='chat-space'"
			 + "<span class='time'>" + time + "</span>"
			 + "<div class='box'> <div class='bubble-right'> <span class='text'>" + msg.content + "</span> </div> </div>";
			 
		// 라디오 체크(설정 안 해도 그대로 유지됨)
	}else{
		// 상대 -> 왼쪽
		code += "<span class='opponent'>" + msg.speaker + "</span>"	// 상대 저장명
			 + "<div class='chat left'>" + "<div class='chat-space'"
			 + "<div class='box'> <div class='bubble-left'> <span class='text'>" + msg.content + "</span> </div> </div>"
			 + "<span class='time'>" + time + "<span>";
		
		// 라디오 체크(설정 안 해도 그대로 유지됨)
	}
	code += "</div> </div>";
	
	// console.log(code);
	$('.container').append(code);
	
	// 다 하고 text창 비우기
	$('#content').val('');

	// 객체에 추가 (말풍선 꼬리, 시간 등 처리 위함) / DB 삽입보다 우선
	talk_msgs.push(msg);
	
	// DB 삽입
	$.ajax({
		url: '/insertChat'
		, method: 'POST'
		, async: true	// 비동기
		, data: { category: 'talk'
			, fromName: msg.speaker
			// , toName: 
			, content: msg.content
			, createDate: msg.time
			// , createDate: msg.time 작성 시간으로
		}
		, success: function(data) {
			// alert('success : ' + data);
		}
		, error: function(data){
			alert('error : ' + data);
		}
	});
	
}

function msgOnGame(){
	var msg = {
		place: ''
		, speaker: ''
		, content: ''
	};
	var place = ['all', 'party', 'guild', 'union', 'megaphone', 'system'];
	var place_korean = ['전체', '파티', '길드', '연합', '확성기', '안내'];
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

	game_msgs.push(msg);	// DB 삽입보다 우선
	
	// DB 삽입
	$.ajax({
		url: '/insertChat'
		, method: 'POST'
		, async: true	// 비동기
		, data: { category: 'game'
			, fromName: msg.speaker
			, content: msg.content
			, place: place_korean[current_place]
			, createDate: msg.time	// 초 안 넣어도 문제 없을까?
		}
		, success: function(data) {
			// alert('success : ' + data);
		}
		, error: function(data){
			alert('error : ' + data);
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