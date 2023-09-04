package servlet;

import java.io.IOException;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import entity.NaverInfo;
import repository.naverPlaceRepository;
import utils.JsonParseUtil;
import utils.ResponseUtil;


@WebServlet("/auth/signup")
public class SignupServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        Map<String, Object> userMap = JsonParseUtil.toMap(request.getInputStream());


        NaverInfo naverInfo = NaverInfo.builder()
                .id((String) userMap.get("id"))
                .password((String) userMap.get("password"))
                .email((String) userMap.get("email"))
                .name((String) userMap.get("name"))
                .cellphone((String) userMap.get("cellphone"))
                .build();

        if (naverPlaceRepository.insertNaverInfo(naverInfo)) {
        	ResponseUtil.response(response).of(200).body("회원가입 완료!!");
        }
    }
}