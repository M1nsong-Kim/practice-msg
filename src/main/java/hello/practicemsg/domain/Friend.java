package hello.practicemsg.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity		// JPA를 사용하긴 위한 ORM
public class Friend {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)	
	private int idx;
	
	private int useNo;
	
	private String name;
	
	private int beHere;

	public int getIdx() {
		return idx;
	}

	public void setIdx(int idx) {
		this.idx = idx;
	}

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

	public int getBeHere() {
		return beHere;
	}

	public void setBeHere(int beHere) {
		this.beHere = beHere;
	}
}
