package repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
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
	
	public List<NaverInfo> getNaverInfoListAll() {
		
		Connection con = null;
		PreparedStatement pstmt = null;
		ResultSet rs = null;
		
		List<NaverInfo> naverInfoList = null;
		
		try {
			con = pool.getConnection();
			String sql = "select * from naver_place";
			
			pstmt = con.prepareStatement(sql);
			rs = pstmt.executeQuery();
			
			naverInfoList = new ArrayList<>();
			
			while(rs.next()) {
				NaverInfo naverInfo = NaverInfo.builder()
						.id(rs.getString(1))
						.password(rs.getString(2))
						.email(rs.getString(3))
						.name(rs.getString(4))
						.cellphone(rs.getString(5))
						.build();
				
				naverInfoList.add(naverInfo);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			pool.freeConnection(con, pstmt, rs);
		}
		
        return naverInfoList;
    }
	
	public static boolean insertNaverInfo(NaverInfo naverInfo) {
	    Connection con = null;
	    PreparedStatement pstmt = null;

	    try {
	        con = pool.getConnection();
	        String sql = "INSERT INTO naver_place VALUES (?, ?, ?, ?, ?)";
	        pstmt = con.prepareStatement(sql);

	        pstmt.setString(1, naverInfo.getId());
	        pstmt.setString(2, naverInfo.getPassword());
	        pstmt.setString(3, naverInfo.getEmail());
	        pstmt.setString(4, naverInfo.getName());
	        pstmt.setString(5, naverInfo.getCellphone());

	        int result = pstmt.executeUpdate();

	        if (result == 1) {
	            return true;
	        }
	    } catch (Exception e) {
	        e.printStackTrace();
	    } finally {
	        pool.freeConnection(con, pstmt);
	    }

	    return true;
	}
}