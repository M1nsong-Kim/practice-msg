getFriendList();

function getFriendList(){
	var code = "";
	var code2 = "";
	$.ajax({
		url: '/getFriendList'
		, method: 'POST'
		, async: false	// 동기 -> code에 확실히 처리
		// , data: {}
		, success: function(data) {
			alert('success : ' + data);
			console.log(data);
			for(let i = 0; i < data.length; i++){
				// 수정 필요
				code += "<input type='radio' id='" + data[i].name + "' onclick='exceptInviter(this)'>" + data[i].name;
				code2 += "<input type='checkbox' name='friend' value='" + data[i].name + "'>" + data[i].name;
			}
		}
		, error: function(data){
			alert('error : ' + data);
		}
	});
	// 수정 필요
	$('.friendList').append(code);
	$('.friendList2').append(code2);	
}

function exceptInviter(e){
	$('input:checkbox[name=friend]:checked').each(function(){
		if(this.val() == $(e).attr('id')){
			$(this).prop('disabled', true);
		}
	})
}

function getInNOutMsg(e){
	var idx = $(e).attr('name');
	var inviter = $('input:radio:checked').length;
	var count = $('input:checkbox[name=friend]:checked').length;
	if(idx == 2){	// 퇴장
		// 퇴장은 한 명씩만
		if(count != 1){
			return;
		};
	}else{	// 입장
		// 초대자는 한 명씩만
		if(inviter != 1){
			return;
		}
	}
	return inOutMsg(inviter, user, idx);
}
