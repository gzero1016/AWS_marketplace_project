package utils;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import javax.servlet.http.HttpServletRequest;

import com.google.gson.Gson;

public class JsonParseUtil {
	
	public static Map<String, Object> toMap(InputStream inputStream) {
		
		StringBuilder jsonData = new StringBuilder("");
		
		BufferedReader bufferedReader = null;
		
		if(inputStream == null) {
			return null;
		}
		
		bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
		
		while(true) {
			try {
				String data = bufferedReader.readLine();
				if(data == null) {
					break;
				}
				jsonData.append(data);
			} catch (IOException e) {
				return null;
			}
		}
		
		Gson gson = new Gson();
		
		return gson.fromJson(jsonData.toString(), Map.class);
	}
	/* 위코드의 해석
	 * 객체를 맵으로 만드는 메소드를 생성한다.
	 * jsonData의 초기값을 빈값으로함 
	 * bufferedReader의 초기값도 null로잡는다.
	 * 만약 inputStream이 null 일경우 null로 반환
	 * inputStreamReader를 BufferedReader로 읽어서 bufferedReader 안에 넣는다.
	 * bufferedReader를 한줄씩 가져와 data안에 넣고 jsonData에 추가해준다.
	 * 만약 데이터가 null값일경우 멈추며 널포인트 예외처리해준다.
	 * gson을 만들어 gson형태로 jsonData를 toString으로 한줄로 만들고 Map으로 반환해줌*/
	
	public static String toJson(Object object) {
		Gson gson = new Gson();
		
		return gson.toJson(object);
		
		/*gson을 객체로 반환해줌*/
	}
}
