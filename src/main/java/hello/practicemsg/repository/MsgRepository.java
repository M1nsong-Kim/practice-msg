package hello.practicemsg.repository;

import hello.practicemsg.domain.Chat;

public interface MsgRepository {
	Chat insertChat(Chat chat);
}
