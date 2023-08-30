package hello.practicemsg.repository;

import java.util.List;

import hello.practicemsg.domain.Chat;
import hello.practicemsg.domain.Friend;

public interface MsgRepository {
	List<Friend> selectFriendList();
	Chat insertChat(Chat chat);
}
