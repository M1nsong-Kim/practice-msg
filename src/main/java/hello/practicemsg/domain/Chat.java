package hello.practicemsg.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity		// JPA를 사용하긴 위한 ORM
public class Chat {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)	// PK, DB가 알아서 생성(identity)
	private int idx;
	
	@Column(name = "use_no")
	private int useNo;

	private int group;
	
	@Column(name = "from_name")
	private String fromName;
	
	@Column(name = "to_name")
	private String toName;
	
	private String content;
	
	@Column(name = "is_read")
	private boolean isRead;
	
	@Column(name = "create_date")
	private String createDate;

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

	public int getGroup() {
		return group;
	}

	public void setGroup(int group) {
		this.group = group;
	}

	public String getFromName() {
		return fromName;
	}

	public void setFromName(String fromName) {
		this.fromName = fromName;
	}

	public String getToName() {
		return toName;
	}

	public void setToName(String toName) {
		this.toName = toName;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public boolean isRead() {
		return isRead;
	}

	public void setRead(boolean isRead) {
		this.isRead = isRead;
	}

	public String getCreateDate() {
		return createDate;
	}

	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}
}
