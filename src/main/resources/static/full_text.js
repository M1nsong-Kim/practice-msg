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
				break;
			}
			if(current_place = -1){	// 확성기
				current_place = 4;
			}
		}

		msg.place = place[current_place];
		// msg.speaker = full_text[i].substring(index_of_place+1, full_text[i].indexOf(':')).trim();
		msg.speaker = full_text[i].substring(full_text[i].indexOf(' ')+1, full_text[i].indexOf(':')).trim();
		msg.content = full_text[i].substring(full_text[i].indexOf(':')+1).trim();
		
		var code = code = "<div class='text-"+msg.place+"'>"
		if(current_place != 4){	// 확성기 외
			code += "[" + place_korean[current_place] + "] "
				 +  msg.speaker + ": " + msg.content;
		}else{
			code += full_text[i];
		}
		 + "</div>";
		 
		$('.container').append(code);
		$('.container').val('');
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

function full_download(){
	/*
    html2canvas($('#container')[0]).then(function(canvas) {
      saveImg(canvas.toDataURL('image/jpg'), 'image.jpg');
    });
	*/
	html2canvas($('#container').get(0)).then(function (canvas){
		console.log(canvas);
		// saveImg(canvas.toDataURL('image/jpg'), 'image.jpg');
	});
}

function saveImg(dataURL, fileName) {
    var a = document.createElement('a');
    a.href = dataURL;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}