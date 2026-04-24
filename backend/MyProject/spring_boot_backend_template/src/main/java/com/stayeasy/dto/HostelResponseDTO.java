package com.stayeasy.dto;
import java.util.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
@AllArgsConstructor
public class HostelResponseDTO {


	    private Long ownerId;
	    private String hostelName;
	    private String address;
	    private RegisterHostelLocationDTO location;
	    private List<RoomDTO> rooms;
		public HostelResponseDTO(Long ownerId, String hostelName, String address, RegisterHostelLocationDTO location,
				List<RoomDTO> rooms) {
			super();
			this.ownerId = ownerId;
			this.hostelName = hostelName;
			this.address = address;
			this.location = location;
			this.rooms = rooms;
		}
		public Long getOwnerId() {
			return ownerId;
		}
		public void setOwnerId(Long ownerId) {
			this.ownerId = ownerId;
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
