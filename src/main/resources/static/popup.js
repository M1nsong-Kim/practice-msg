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
	$('.friendList').append(code);	// 수정 필요
}

function getInNOutMsg(e){
	console.log($(e).attr('name'));
}
