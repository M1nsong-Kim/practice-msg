package hello.practicemsg.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import hello.practicemsg.domain.Chat;
import hello.practicemsg.domain.Friend;
import hello.practicemsg.service.MsgService;

@Controller
public class MsgController {
	
	@Autowired
	private MsgService service;
	
	@GetMapping("popupInNOut")
	public String popupInNout() {
		return "popup_inNout";
	}
	
	@GetMapping("popupImgDownload")
	public String popupImgDownload() {
		return "popup_imgDownload";
	}
	
	@GetMapping("popupOpponent")
	public String popupOpponent(Model model) {
		// 상대 목록
		List<Friend> friendList = service.selectFriendList();
		model.addAttribute("friendList", friendList);
		System.out.println("MsgController friendList param :: " + friendList);	// 디버깅(추후수정)
		return "popup_opponent";
	}
	
	// 메시지 DB 삽입
	@PostMapping("insertChat")
	@ResponseBody	// java.lang.IllegalArgumentException: Unknown return value type: java.lang.Integer 해결
	public int insertChat(Chat chat) {
		/*
		// 어차피 js에서도 시간 표출해야 함
		if(chat.getCreateDate().equals("")) {
			chat.setCreateDate(null);
		}
		 */
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
