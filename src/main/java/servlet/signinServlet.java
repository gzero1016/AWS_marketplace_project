package servlet;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.UUID;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import entity.LoginUser;
import entity.NaverInfo;
import repository.naverPlaceRepository;
import utils.JsonParseUtil;
import utils.ResponseUtil;

@WebServlet("/auth/signin")
public class signinServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Map<String, Object> signinUser = JsonParseUtil.toMap(request.getInputStream());
		
		LoginUser loginUser = LoginUser.builder()
				.username((String) signinUser.get("username"))
				.password((String) signinUser.get("password"))
				.build();
		
		if(naverPlaceRepository.getInstance().PwIdcomparison(loginUser)) {
			ResponseUtil.response(response).of(200).body(true);
			return;
		}
		ResponseUtil.response(response).of(200).body(false);
		
		
//		위? 아래? 뭐가 더 좋은코드,,?
//		String username = request.getParameter("username");
//		String password = request.getParameter("password");
//		
//		if(naverPlaceRepository.getInstance().PwIdcomparison(username, password)) {
//			ResponseUtil.response(response).of(200).body(true);
//			return;
//		}
//		ResponseUtil.response(response).of(200).body(false);
		
	}
	
}