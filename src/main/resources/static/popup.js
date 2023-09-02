getFriendList();


function getFriendList(){
	var code = "";
	console.log("${friendList}");
	$('.friendList').append(code);
}

function getInNOutMsg(e){
	console.log($(e).attr('name'));
}
