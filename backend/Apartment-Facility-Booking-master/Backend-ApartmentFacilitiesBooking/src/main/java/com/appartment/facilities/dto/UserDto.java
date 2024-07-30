package com.appartment.facilities.dto;

public class UserDto {
	private Integer id;
	private String userName;
	private String password;
	private String role;
	private String status;
	
	public UserDto() {
		
	}
	public UserDto( String userName, String password, String role, String status) {
		this.userName = userName;
		this.password = password;
		this.role = role;
		this.status = status;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "User [id=" + id + ", userName=" + userName + ", password=" + password + ", role=" + role + ", status="
				+ status + "]";
	}
	
}