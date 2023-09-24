function generate_full_text_game(){
	var msg = {
		place: ''
		, speaker: ''
		, content: ''
	};
		
	var place = ['all', 'party', 'guild', 'union', 'megaphone', 'system'];
	var place_korean = ['전체', '파티', '길드', '연합', '확성기', '안내'];
	var current_place = -1;
	var full_text = $('#full_text').val().split('\n');
	var place = '';

	for(let i = 0; i < full_text.length; i++){
		var index_of_place = full_text[i].indexOf(']');
		place = full_text[i].substring(1, index_of_place);
		
		for(let j = 0; j < place.length; j++){
			if(place == place_korean[j]){	// 여기서 안 걸림
				current_place = j;
				msg.place = place[current_place];	// msg.place 갱신 x
				break;
			}
		}
		
		var code = code = "<div class='text-"+msg.place+"'>"
		console.log('index_of_place : '+index_of_place);
		console.log(msg.place);
		console.log(full_text[i].substring(1, 3));	// 두글자일때 위랑 같아야 되는데 다르게 나옴 -> 확인 필요
		console.log(code);
		$('.container').append(code);
	}
	
	/*
	// 여기부터
	if(current_place != 4){	
		code += "[" + place_korean[current_place] + "] ";
	}
	code += msg.speaker + ": " + msg.content
		 + "</div>";
		 	
	$('#full_text').val('');
	*/
	
	/*
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
	*/
}