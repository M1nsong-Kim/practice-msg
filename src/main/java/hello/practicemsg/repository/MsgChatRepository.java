package hello.practicemsg.repository;

import java.util.List;

import javax.persistence.EntityManager;

import hello.practicemsg.domain.Chat;
import hello.practicemsg.domain.Friend;

public class MsgChatRepository implements MsgRepository{
	private final EntityManager em;
	
	public MsgChatRepository(EntityManager em) {
		this.em = em;
	}

	@Override
	public List<Friend> selectFriendList() {
		List<Friend> result = em.createQuery("select m from Member m", Friend.class).getResultList(); // 객체를 대상으로 쿼리를 날림
		return result;
	}

	@Override
	public Chat insertChat(Chat chat) {
		em.persist(chat);
		return chat;
	}
	
	
}
