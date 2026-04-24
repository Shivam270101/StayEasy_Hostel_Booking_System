package com.stayeasy.entity;

import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="Booking")
@NoArgsConstructor
@Getter
@Setter

public class Booking {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)

	private Long booking_id;
	
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user; 
	
	@ManyToOne
	@JoinColumn(name = "room_id",nullable=false)
    
	private Room room;
	
	@ManyToOne
	@JoinColumn(name = "hostel_id",nullable=false)
	
	private Hostel hostel;
	
	@ManyToMany 
	@JsonIgnore
    
	@JoinTable(
        name = "booking_users",
        joinColumns = @JoinColumn(name = "booking_id"),
        inverseJoinColumns = @JoinColumn(name = "user_id")
    )
	
	private List<User> users;
	private LocalDateTime bookingDate;
	@JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
	private LocalDateTime checkin;

 @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss")
 	
 	private LocalDateTime checkout;
	@Enumerated(EnumType.STRING)
	@Column(nullable = false)
	private BookingStatus status;
	public void setUser(User user2) {
		// TODO Auto-generated method stub
		
	}
	public Long getBooking_id() {
		return booking_id;
	}
	public void setBooking_id(Long booking_id) {
		this.booking_id = booking_id;
	}
	public Room getRoom() {
		return room;
	}
	public void setRoom(Room room) {
		this.room = room;
	}
	public Hostel getHostel() {
		return hostel;
	}
	public void setHostel(Hostel hostel) {
		this.hostel = hostel;
	}
	public List<User> getUsers() {
		return users;
	}
	public void setUsers(List<User> users) {
		this.users = users;
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
	public BookingStatus getStatus() {
		return status;
	}
	public void setStatus(BookingStatus status) {
		this.status = status;
	}
	public User getUser() {
		return user;
	}
	public void setCheckin(Object checkin2) {
		// TODO Auto-generated method stub
		
	}
	
	
}



