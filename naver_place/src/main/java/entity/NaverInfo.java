package entity;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;

@Builder
@Data
public class NaverInfo {
	private String id;
	private String password;
	private String email;
	private String name;
	private String cellphone;
}
