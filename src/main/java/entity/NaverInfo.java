package entity;

import lombok.Builder;
import lombok.Data;
import lombok.Getter;

@Builder
@Data
public class NaverInfo {
	private int id;
	private String username;
	private String password;
	private String email;
	private String name;
	private String cellphone;
}
