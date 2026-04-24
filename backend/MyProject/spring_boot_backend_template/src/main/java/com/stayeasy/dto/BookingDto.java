package com.stayeasy.dto;


import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
public class BookingDto {

private Long roomId;
	
private Long hostelId;

private Long userId;

@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
private LocalDateTime checkin;

@JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
private LocalDateTime checkout;
private String bookstatus;
public Long getUserId() {
	
	return userId;
}
public Long getRoomId() {
	// TODO Auto-generated method stub
	return null;
}
public Long getHostelId() {
	// TODO Auto-generated method stub
	return null;
}
public Object getCheckin() {
	// TODO Auto-generated method stub
	return null;
}
public Object getCheckout() {
	// TODO Auto-generated method stub
	return null;
} 
	
}
