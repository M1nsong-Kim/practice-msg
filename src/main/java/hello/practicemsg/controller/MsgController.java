package hello.practicemsg.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

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
		return "popup_opponent";
	}
	
	// 메시지 DB 삽입
	@PostMapping("insertChat")
	public String insertChat() {
		return "";
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
