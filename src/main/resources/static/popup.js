getOpponentList();


function getOpponentList(){
	var code = "";
	console.log("${friendList}");
	$('.opponentList').append(code);
}

function getInNOutMsg(e){
	console.log($(e).attr('name'));
}
