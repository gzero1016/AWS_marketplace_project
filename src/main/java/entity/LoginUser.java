package entity;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class LoginUser {
	private String username;
	private String password;
}
