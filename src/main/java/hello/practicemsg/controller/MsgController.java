package hello.practicemsg.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MsgController {
	
	@GetMapping("popupImgDownload")
	public String popupImgDownload() {
		return "popup_imgDownload";
	}
	
	@GetMapping("popupOpponent")
	public String popupOpponent() {
		return "popup_opponent";
	}
	
	@GetMapping("generator")
	public String generator() {
		return "generator";
	}
	
}
