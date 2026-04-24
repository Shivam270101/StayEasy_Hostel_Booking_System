package com.stayeasy.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RoomDTO {
	private Long room_id;
    private String roomNumber;
    private int sharing;
    private double price;
    private boolean available;
    
    
    
	public RoomDTO(Long room_id, String roomNumber, int sharing, double price, boolean available) {
		super();
		this.room_id = room_id;
		this.roomNumber = roomNumber;
		this.sharing = sharing;
		this.price = price;
		this.available = available;
	}
	public Long getRoom_id() {
		return room_id;
	}
	public void setRoom_id(Long room_id) {
		this.room_id = room_id;
	}
	public String getRoomNumber() {
		return roomNumber;
	}
	public void setRoomNumber(String roomNumber) {
		this.roomNumber = roomNumber;
	}
	public int getSharing() {
		return sharing;
	}
	public void setSharing(int sharing) {
		this.sharing = sharing;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public boolean isAvailable() {
		return available;
	}
	public void setAvailable(boolean available) {
		this.available = available;
	}
    
    
}
