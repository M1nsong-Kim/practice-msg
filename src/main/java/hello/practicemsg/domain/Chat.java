package hello.practicemsg.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.DynamicInsert;

@DynamicInsert	// null 아닌 값만 insert
@Entity		// JPA를 사용하긴 위한 ORM
public class Chat {
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)	// PK, DB가 알아서 생성(identity)
	private int idx;
	
	private String category;
	
	// userNo, group 보류
	@Column(name = "use_no", insertable=false)
	private int useNo;

	@Column(insertable=false)	// insert할 때 제외
	private int group;
	
	@Column(name = "from_name")
	private String fromName;
	
	@Column(name = "to_name")
	private String toName;
	
	private String content;
	
	@Column(name = "is_read", insertable=false)	// talk 때 확인 필요
	private int isRead;
	
	private String place;
	
	@Column(name = "create_date")
	private String createDate;

	
	public int getIdx() {
		return idx;
	}

	public void setIdx(int idx) {
		this.idx = idx;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
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

	public int isRead() {
		return isRead;
	}

	public void setRead(int isRead) {
		this.isRead = isRead;
	}

	public String getPlace() {
		return place;
	}

	public void setPlace(String place) {
		this.place = place;
	}

	public String getCreateDate() {
		return createDate;
	}

	public void setCreateDate(String createDate) {
		this.createDate = createDate;
	}
}
