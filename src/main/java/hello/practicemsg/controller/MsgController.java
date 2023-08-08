package hello.practicemsg.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class MsgController {
	
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
	
	@GetMapping("generator/talk")
	public String talkGenerator() {
		return "generator/talk";
	}
	
	@GetMapping("generator/game")
	public String gameGenerator() {
		return "generator/game";
	}
	
}
