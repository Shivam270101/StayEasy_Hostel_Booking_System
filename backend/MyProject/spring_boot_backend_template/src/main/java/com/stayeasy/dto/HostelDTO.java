package com.stayeasy.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@Data
@NoArgsConstructor
@AllArgsConstructor
public class HostelDTO {
    private Long hostel_id;
    private String hostelName;
    private String address;
    private double longitude;
    private double latitude;
    private double distance;
	public HostelDTO(Long hostel_id, String hostelName, String address, double longitude, double latitude,
			double distance) {
		super();
		this.hostel_id = hostel_id;
		this.hostelName = hostelName;
		this.address = address;
		this.longitude = longitude;
		this.latitude = latitude;
		this.distance = distance;
	}
	public Long getHostel_id() {
		return hostel_id;
	}
	public void setHostel_id(Long hostel_id) {
		this.hostel_id = hostel_id;
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
	public double getLongitude() {
		return longitude;
	}
	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}
	public double getLatitude() {
		return latitude;
	}
	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}
	public double getDistance() {
		return distance;
	}
	public void setDistance(double distance) {
		this.distance = distance;
	}
    

    
}
