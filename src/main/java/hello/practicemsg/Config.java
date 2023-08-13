package hello.practicemsg;

import javax.persistence.EntityManager;
import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import hello.practicemsg.repository.MsgChatRepository;
import hello.practicemsg.repository.MsgRepository;
import hello.practicemsg.service.MsgService;

@Configuration
public class Config {
	private final DataSource dataSource;
	private final EntityManager em;
	
	@Autowired
	public Config(DataSource dataSource, EntityManager em) {
		this.dataSource = dataSource;
		this.em = em;
	}

	@Bean
	public MsgService msgService() {
		return new MsgService(msgRepository());
	}
	
	@Bean
	public MsgRepository msgRepository() {
		return new MsgChatRepository(em);
	}
}
