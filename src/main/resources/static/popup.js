getFriendList();

function getFriendList(){
	var code = "";
	$.ajax({
		url: '/getFriendList'
		, method: 'POST'
		, async: false	// 동기 -> code에 확실히 처리
		// , data: {}
		, success: function(data) {
			alert('success : ' + data);
			console.log(data);
			for(let i = 0; i < data.length; i++){
				code += "<input type='checkbox'>" + data[i].name;
			}
		}
		, error: function(data){
			alert('error : ' + data);
		}
	});
	console.log(code);
	$('.friendList').append(code);	// 수정 필요
}

function getInNOutMsg(e){
	var idx = $(e).attr('name');
	if(idx == 2){	// 퇴장
		// 퇴장은 한 명씩만
		if($('input:checkbox').length != 1){
		return;
		};
	}else{	// 입장
		
	}
	return inOutMsg(user, idx);
}
