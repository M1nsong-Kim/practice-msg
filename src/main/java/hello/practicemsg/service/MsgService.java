package hello.practicemsg.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;

import hello.practicemsg.domain.Chat;
import hello.practicemsg.repository.MsgRepository;

// @Service
@Transactional
public class MsgService {
	
	final private MsgRepository msgRepository;
	
	@Autowired
	public MsgService(MsgRepository msgRepository) {
		this.msgRepository = msgRepository;
	}
	
	public int insertChat(Chat chat) {
		msgRepository.insertChat(chat);
		return chat.getIdx();
	}
}
