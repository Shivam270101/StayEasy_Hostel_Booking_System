package com.stayeasy.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.Setter;
import org.geolatte.geom.Point;

@Getter
@Setter
public class HostelLocationDTO {

    private Long hostel_location_id;

    @JsonIgnore
    private Point<?> location;

    @JsonProperty("latitude")
    public double getLatitude() {
        return location.getPosition().getCoordinate(1);  // ✅ Correct way to get latitude
    }

    @JsonProperty("longitude")
    public double getLongitude() {
        return location.getPosition().getCoordinate(0);  // ✅ Correct way to get longitude
    }

	public Long getHostel_location_id() {
		return hostel_location_id;
	}

	public void setHostel_location_id(Long hostel_location_id) {
		this.hostel_location_id = hostel_location_id;
	}

	public Point<?> getLocation() {
		return location;
	}

	public void setLocation(Point<?> location) {
		this.location = location;
	}
    
    
}
