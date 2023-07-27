package hello.practicemsg.domain;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class User {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)	
	private int useNo;
	
	// 둘 다 빈 값 가능(선택 사항)
	private String name;
	
	private String password;

	public int getUseNo() {
		return useNo;
	}

	public void setUseNo(int useNo) {
		this.useNo = useNo;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
