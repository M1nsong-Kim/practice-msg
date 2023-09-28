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
	var place_now = '';

	for(let i = 0; i < full_text.length; i++){
		var index_of_place = full_text[i].indexOf(']');
		place_now = full_text[i].substring(1, index_of_place);
		
		for(let j = 0; j < place.length; j++){
			if(place_now == place_korean[j]){
				current_place = j;
				msg.place = place[current_place];
				break;
			}
		}
		
		var code = code = "<div class='text-"+msg.place+"'>"
		if(current_place != 4){	// 확성기 외
			code += "[" + place_korean[current_place] + "] ";
		}
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