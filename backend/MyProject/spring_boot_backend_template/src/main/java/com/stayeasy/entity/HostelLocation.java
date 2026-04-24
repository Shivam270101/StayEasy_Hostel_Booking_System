package com.stayeasy.entity;

import org.geolatte.geom.Point;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "hostel_locations")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

public class HostelLocation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long hostel_location_id;

    @Column(name = "location", columnDefinition = "POINT",nullable=false)
    private Point location;

    @JsonIgnore
    @OneToOne(mappedBy = "location", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Hostel hostel;

	public Long getHostel_location_id() {
		return hostel_location_id;
	}

	public void setHostel_location_id(Long hostel_location_id) {
		this.hostel_location_id = hostel_location_id;
	}

	public Point getLocation() {
		return location;
	}

	public void setLocation(Point location) {
		this.location = location;
	}

	public Hostel getHostel() {
		return hostel;
	}

	public void setHostel(Hostel hostel) {
		this.hostel = hostel;
	}
    
    

    
}
