package hello.practicemsg.repository;

import javax.persistence.EntityManager;

import hello.practicemsg.domain.Chat;

public class MsgChatRepository implements MsgRepository{
	private final EntityManager em;
	
	public MsgChatRepository(EntityManager em) {
		this.em = em;
	}

	@Override
	public Chat insertChat(Chat chat) {
		em.persist(chat);
		return chat;
	}
	
	
}
