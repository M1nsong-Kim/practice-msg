package hello.practicemsg.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MsgController {
	
	@GetMapping("generator")
	public String generator() {
		return "generator";
	}
	
}
