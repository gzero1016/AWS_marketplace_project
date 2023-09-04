package servlet;

import java.io.IOException;
import java.util.List;
import java.util.Objects;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import entity.NaverInfo;
import repository.naverPlaceRepository;
import utils.ResponseUtil;


@WebServlet("/auth/signup/duplicate/username")
public class DuplicateUsername extends HttpServlet {
	private static final long serialVersionUID = 1L;
    
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {		
		String username = request.getParameter("username");
//		String password = request.getParameter("password");
//		String email = request.getParameter("email");
//		String name = request.getParameter("name");
//		String birthday = request.getParameter("birthday");
//		String cellphone = request.getParameter("cellphone");
		
        naverPlaceRepository repository = naverPlaceRepository.getInstance();
        List<NaverInfo> naverInfoList = repository.getNaverInfoListAll();

        for (NaverInfo naverInfo : naverInfoList) {
            if (naverInfo.getId().equals(username)) {
                ResponseUtil.response(response).of(400).body(true);
                return;
            }
        }

        ResponseUtil.response(response).of(200).body(false);
    }
}
