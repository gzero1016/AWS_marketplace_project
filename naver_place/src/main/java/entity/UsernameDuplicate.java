package entity;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class UsernameDuplicate {
	private String username;
}
