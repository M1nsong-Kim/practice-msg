package hello.practicemsg;

import javax.persistence.EntityManager;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import hello.practicemsg.repository.MsgChatRepository;
import hello.practicemsg.repository.MsgRepository;

@Configuration
public class Config {
	private EntityManager em;
	
	private final MsgRepository msgRepository;
	
	public Config(MsgRepository msgRepository) {
		this.msgRepository = msgRepository;
	}
	
	/*
	@Bean
	public MsgService msgService() {
		return new MsgService(msgRepository);
	}
	 */
	
	@Bean
	public MsgRepository msgRepository() {
		return new MsgChatRepository(em);
	}
}
