package servlet;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import entity.NaverInfo;
import repository.naverPlaceRepository;
import utils.JsonParseUtil;
import utils.ResponseUtil;


@WebServlet("/auth/signup/duplicate/username")
public class DuplicateUsername extends HttpServlet {
	private static final long serialVersionUID = 1L;
    
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {				
		String username = request.getParameter("username");
		
			if(naverPlaceRepository.getInstance().UsernameDuplicate(username) == null) {
				ResponseUtil.response(response).of(200).body(false);
				return;
			}
			ResponseUtil.response(response).of(200).body(true);
    }
}