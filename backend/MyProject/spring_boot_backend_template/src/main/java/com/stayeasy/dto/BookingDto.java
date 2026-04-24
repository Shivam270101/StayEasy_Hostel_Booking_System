package com.stayeasy.dto;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;

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

	public BookingDto(Long roomId, Long hostelId, Long userId, LocalDateTime checkin, LocalDateTime checkout,
			String bookstatus) {
		super();
		this.roomId = roomId;
		this.hostelId = hostelId;
		this.userId = userId;
		this.checkin = checkin;
		this.checkout = checkout;
		this.bookstatus = bookstatus;
	}

	public Long getRoomId() {
		return roomId;
	}

	public void setRoomId(Long roomId) {
		this.roomId = roomId;
	}

	public Long getHostelId() {
		return hostelId;
	}

	public void setHostelId(Long hostelId) {
		this.hostelId = hostelId;
	}

	public Long getUserId() {
		return userId;
	}

	public void setUserId(Long userId) {
		this.userId = userId;
	}

	public LocalDateTime getCheckin() {
		return checkin;
	}

	public void setCheckin(LocalDateTime checkin) {
		this.checkin = checkin;
	}

	public LocalDateTime getCheckout() {
		return checkout;
	}

	public void setCheckout(LocalDateTime checkout) {
		this.checkout = checkout;
	}

	public String getBookstatus() {
		return bookstatus;
	}

	public void setBookstatus(String bookstatus) {
		this.bookstatus = bookstatus;
	}
    
    
}

