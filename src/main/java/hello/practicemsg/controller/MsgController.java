package hello.practicemsg.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import hello.practicemsg.domain.Chat;
import hello.practicemsg.service.MsgService;

@Controller
public class MsgController {
	
	@Autowired
	private MsgService service;
	
	@PostMapping("popupIn&out")
	public String popupInNout() {
		return "popup_in&out";
	}
	
	@PostMapping("popupImgDownload")
	public String popupImgDownload() {
		return "popup_imgDownload";
	}
	
	@PostMapping("popupOpponent")
	public String popupOpponent() {
		return "popup_opponent"
				+ "";
	}
	
	// 메시지 DB 삽입
	@PostMapping("insertChat")
	@ResponseBody	// java.lang.IllegalArgumentException: Unknown return value type: java.lang.Integer 해결
	public int insertChat(Chat chat) {
		int count = service.insertChat(chat);
		System.out.println("MsgController param :: " + chat + ", count : " + count);	// 디버깅(추후수정)
		return count;
	}
	
	@GetMapping("generator/talk")
	public String talkGenerator() {
		return "generator/talk";
	}
	
	@GetMapping("generator/game")
	public String gameGenerator() {
		return "generator/game";
	}
	
}
