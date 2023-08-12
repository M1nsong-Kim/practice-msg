package hello.practicemsg.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import hello.practicemsg.domain.Chat;
import hello.practicemsg.repository.MsgRepository;

// @Service
public class MsgService {
	
	final private MsgRepository msgRepository = new MsgRepository();
	
	@Autowired
	public MsgService(MsgRepository msgRepository) {
		this.msgRepository = msgRepository;
	}
	
	public int insertChat(Chat chat) {
		msgRepository.insertChat(chat);
		return chat.getIdx();
	}
}
