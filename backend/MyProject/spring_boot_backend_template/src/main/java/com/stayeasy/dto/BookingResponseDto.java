package com.stayeasy.dto;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class BookingResponseDto {
    private Long bookingId;
    private String username;
    private LocalDateTime bookingDate;
    private LocalDateTime checkin;
    private LocalDateTime checkout;
    private String bookStatus;
    private String roomNumber;
    private String hostelName;
    
	public BookingResponseDto(Long bookingId, String username, LocalDateTime bookingDate, LocalDateTime checkin,
			LocalDateTime checkout, String bookStatus, String roomNumber, String hostelName) {
		super();
		this.bookingId = bookingId;
		this.username = username;
		this.bookingDate = bookingDate;
		this.checkin = checkin;
		this.checkout = checkout;
		this.bookStatus = bookStatus;
		this.roomNumber = roomNumber;
		this.hostelName = hostelName;
	}

	public Long getBookingId() {
		return bookingId;
	}

	public void setBookingId(Long bookingId) {
		this.bookingId = bookingId;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public LocalDateTime getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(LocalDateTime bookingDate) {
		this.bookingDate = bookingDate;
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

	public String getBookStatus() {
		return bookStatus;
	}

	public void setBookStatus(String bookStatus) {
		this.bookStatus = bookStatus;
	}

	public String getRoomNumber() {
		return roomNumber;
	}

	public void setRoomNumber(String roomNumber) {
		this.roomNumber = roomNumber;
	}

	public String getHostelName() {
		return hostelName;
	}

	public void setHostelName(String hostelName) {
		this.hostelName = hostelName;
	}
	
	
    
    
    
}
