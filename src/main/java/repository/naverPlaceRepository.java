package repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import database.DBConnectionMgr;
import entity.NaverInfo;

public class naverPlaceRepository {

	private static DBConnectionMgr pool;
	private static naverPlaceRepository instance;
	
	private naverPlaceRepository() {
		pool = DBConnectionMgr.getInstance();
	}
	
	public static naverPlaceRepository getInstance() {
		if(instance == null) {
			instance = new naverPlaceRepository();
		}
		
		return instance;
	}
	
	
	public boolean insertNaverInfo(NaverInfo naverInfo) {
	    Connection con = null;
	    PreparedStatement pstmt = null;

	    try {

	        con = pool.getConnection();
	        String sql = "INSERT INTO naver_place (username, password, email, name, cellphone) VALUES (?, ?, ?, ?, ?)";
	        pstmt = con.prepareStatement(sql);

	        pstmt.setString(1, naverInfo.getUsername());
	        pstmt.setString(2, naverInfo.getPassword());
	        pstmt.setString(3, naverInfo.getEmail());
	        pstmt.setString(4, naverInfo.getName());
	        pstmt.setString(5, naverInfo.getCellphone());

	        int rs = pstmt.executeUpdate();

	        if (rs == 1) {
	            return true;
	        }

	    } catch (Exception e) {
	        e.printStackTrace();
	    } finally {
	        pool.freeConnection(con, pstmt);
	    }

	    return false;
	}
	
	public Boolean PwIdcomparison(String username, String password) {
		
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		
		try {
			con = pool.getConnection();
			String sql = "select username, password from naver_place where username = ? and password = ?";
			
			pstmt = con.prepareStatement(sql);
			pstmt.setString(1, username);
			pstmt.setString(2, password);
			rs = pstmt.executeQuery();
			
			if(rs.next()) {
				return true;
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			pool.freeConnection(con, pstmt, rs);
		}
		
		return false;
	}
	
	
	public Boolean UsernameDuplicate (String username) {
	    Connection con = null;
	    PreparedStatement pstmt = null;
	    ResultSet rs = null;

		try {
			con = pool.getConnection();
	        String sql = "select username from naver_place where username = ?";
	       
	        pstmt = con.prepareStatement(sql);
	        pstmt.setString(1, username);
	        rs = pstmt.executeQuery();
			
	        if(rs.next()) {
	        	return true;
	        }
			
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			pool.freeConnection(con, pstmt, rs);
		}	
	
		return false;
	}
	
		
}