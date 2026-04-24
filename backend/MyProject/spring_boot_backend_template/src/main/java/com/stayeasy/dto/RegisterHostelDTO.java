package com.stayeasy.dto;

import java.util.List;
import lombok.Getter;
import lombok.Setter;
//import com.stayeasy.dto.RegisterHostelLoctionDTO;

@Getter
@Setter
public class RegisterHostelDTO {
    private String hostelName;
    private String address;
    private Long ownerId;
    private RegisterHostelLocationDTO location;
    private List<RoomDTO> rooms;
	public RegisterHostelDTO(String hostelName, String address, Long ownerId, RegisterHostelLocationDTO location,
			List<RoomDTO> rooms) {
		super();
		this.hostelName = hostelName;
		this.address = address;
		this.ownerId = ownerId;
		this.location = location;
		this.rooms = rooms;
	}
	public String getHostelName() {
		return hostelName;
	}
	public void setHostelName(String hostelName) {
		this.hostelName = hostelName;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Long getOwnerId() {
		return ownerId;
	}
	public void setOwnerId(Long ownerId) {
		this.ownerId = ownerId;
	}
	public RegisterHostelLocationDTO getLocation() {
		return location;
	}
	public void setLocation(RegisterHostelLocationDTO location) {
		this.location = location;
	}
	public List<RoomDTO> getRooms() {
		return rooms;
	}
	public void setRooms(List<RoomDTO> rooms) {
		this.rooms = rooms;
	}
    
    
}
