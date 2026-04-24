package com.stayeasy.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="Hostel")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Hostel {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
private Long hostel_id;
	
	@ManyToOne
    @JoinColumn(name = "owner_id",nullable=false) // Foreign key column in the hostel table
	private User owner;
	
private String hostelname;
private String address;



@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
@JoinColumn(name = "location_id", referencedColumnName = "hostel_location_id")
private HostelLocation location; // Fixed hostel location

@OneToMany(mappedBy = "hostel", cascade = CascadeType.ALL,orphanRemoval = true ,fetch = FetchType.EAGER)
private List<Room> rooms;

public Long getHostel_id() {
	return hostel_id;
}

public void setHostel_id(Long hostel_id) {
	this.hostel_id = hostel_id;
}

public User getOwner() {
	return owner;
}

public void setOwner(User owner) {
	this.owner = owner;
}

public String getHostelname() {
	return hostelname;
}

public void setHostelname(String hostelname) {
	this.hostelname = hostelname;
}

public String getAddress() {
	return address;
}

public void setAddress(String address) {
	this.address = address;
}

public HostelLocation getLocation() {
	return location;
}

public void setLocation(HostelLocation location) {
	this.location = location;
}

public List<Room> getRooms() {
	return rooms;
}

public void setRooms(List<Room> rooms) {
	this.rooms = rooms;
}



}
