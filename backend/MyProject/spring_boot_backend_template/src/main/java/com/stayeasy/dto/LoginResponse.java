package com.stayeasy.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginResponse {
	private Long user_id;
    private String token;

    private long expiresIn;

    public String getToken() {
        return token;
    }

	public Long getUser_id() {
		return user_id;
	}

	public void setUser_id(Long user_id) {
		this.user_id = user_id;
	}

	public long getExpiresIn() {
		return expiresIn;
	}

	public void setExpiresIn(long expiresIn) {
		this.expiresIn = expiresIn;
	}

	public void setToken(String jwtToken) {
		// TODO Auto-generated method stub
		
	}

	public void setUser_id1(Long userId) {
		// TODO Auto-generated method stub
		
	}

 // Getters and setters...
}
