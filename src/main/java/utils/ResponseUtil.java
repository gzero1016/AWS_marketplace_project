package utils;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import utils.ResponseUtil.ResponseUtilBuilder;

public class ResponseUtil {
	
	// ResponseUtil.response 을 호출하면서 매개변수값을 아래 ResponseUtilBuilder에 전달해주며 생성자를 만들고 statuscode를 매개변수로받아서 반환해주며 body를 받아 반환해주는거임
	
	
	// 이 정적(static) 메소드는 HTTP 응답과 관련된 작업을 수행하기 위한 ResponseUtilBuilder 클래스의 인스턴스를 생성하고 반환
	public static ResponseUtilBuilder response(HttpServletResponse response) {
	    // ResponseUtilBuilder 클래스의 생성자에 HttpServletResponse 객체를 전달하여 새로운 인스턴스를 생성
	    return new ResponseUtilBuilder(response);
	}

	// ResponseUtilBuilder 클래스 정의
	public static class ResponseUtilBuilder {
	    // ResponseUtilBuilder 클래스는 HttpServletResponse 객체를 유지하며, 응답 작업을 이 객체를 통해 수행
	    private HttpServletResponse response;
	    
	    // 생성자: ResponseUtilBuilder 객체를 생성하고 HttpServletResponse 객체를 받아 초기화
	    public ResponseUtilBuilder(HttpServletResponse response) {
	        this.response = response;
	    }
	    
	    // HTTP 응답 상태 코드를 설정하고 현재 ResponseUtilBuilder 객체를 반환
	    public ResponseUtilBuilder of(int statusCode) {
	        response.setStatus(statusCode);
	        return this;
	    }
	    
	    // HTTP 응답 본문(body)을 설정하고 인코딩 및 콘텐츠 유형을 지정
	    public void body(Object body) throws IOException {
	        response.setContentType("application/json");
	        response.setCharacterEncoding("UTF-8");
	        response.getWriter().println(body);
	    }
	}
}
