var msg = [];	// 객체 배열

// 입력한 메시지 창 화면에 띄우기
function msgOnBoard(){
	var speaker = $(":input:radio[name=speaker]:checked").val();
	var content = $('#content').val();
	
	console.log(speaker);
	console.log(content);
	
	if(speaker == 0){	// 나 -> 오른쪽
		
	}else{
		
	}
	
	// 다 하고 text창 비우기
	$('#content').val('');
}

// 저장 전 이미지 확인 팝업
function popup(){
	
}