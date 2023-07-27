package hello.practicemsg.domain;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Friend {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)	
	private int idx;
	
	private int use_no;
	
	private String name;

	public int getIdx() {
		return idx;
	}

	public void setIdx(int idx) {
		this.idx = idx;
	}

	public int getUse_no() {
		return use_no;
	}

	public void setUse_no(int use_no) {
		this.use_no = use_no;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
