package hello.practicemsg.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;

import hello.practicemsg.domain.Chat;
import hello.practicemsg.domain.Friend;
import hello.practicemsg.repository.MsgRepository;

// @Service
@Transactional
public class MsgService {
	
	final private MsgRepository msgRepository;
	
	@Autowired
	public MsgService(MsgRepository msgRepository) {
		this.msgRepository = msgRepository;
	}
	
	public List<Friend> selectFriendList(){	// 추후 사용자 관련 정보 param으로
		return msgRepository.selectFriendList();
	}
	
	public int insertChat(Chat chat) {
		msgRepository.insertChat(chat);
		return chat.getIdx();
	}
}
