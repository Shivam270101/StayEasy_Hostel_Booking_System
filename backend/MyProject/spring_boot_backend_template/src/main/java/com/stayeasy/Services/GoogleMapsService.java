package com.stayeasy.Services;

import com.google.maps.DistanceMatrixApi;
import com.google.maps.GeoApiContext;
import com.google.maps.GeocodingApi;
import com.google.maps.model.DistanceMatrix;
import com.google.maps.model.DistanceMatrixElement;
import com.google.maps.model.DistanceMatrixRow;
import com.google.maps.model.GeocodingResult;
import com.google.maps.model.TravelMode;
import com.stayeasy.dao.HostelDao;
import com.stayeasy.dto.HostelDTO;
import com.stayeasy.dto.LocationCoordinates;
import com.stayeasy.entity.Hostel;

import jakarta.transaction.Transactional;
import org.geolatte.geom.Point;
import org.geolatte.geom.codec.Wkt;
import org.geolatte.geom.crs.CoordinateReferenceSystems;
//import org.locationtech.jts.geom.Point;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.math.BigInteger;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class GoogleMapsService {
    @Autowired
    private final GeoApiContext context;
    @Autowired
    private  HostelDao hostelRepository;

    @Value("${google.maps.api.key}")
    private String googleApiKey;

    @Autowired
    public GoogleMapsService(HostelDao hostelRepository) {
        this.hostelRepository = hostelRepository;
        this.context = new GeoApiContext.Builder()
                .apiKey(googleApiKey)  // Use the API key injected from application.properties
                .build();
    }
    public List<HostelDTO> getNearbyHostels(double userLat, double userLng, double searchedLat, double searchedLng) {
        // ✅ Convert latitude & longitude to POINT format
        String currentPoint = "POINT(" + userLng + " " + userLat + ")";
        String searchedPoint = "POINT(" + searchedLng + " " + searchedLat + ")";

        // ✅ Fetch hostels from the repository
        List<Object[]> getSearchHostels = hostelRepository.findHostelsByLocation(currentPoint, searchedPoint);

        // ✅ Convert query results to DTO list
        return getSearchHostels.stream().map(obj -> {
            Long hostelId = ((Number) obj[0]).longValue();  // ✅ Hostel ID
            String hostelName = (String) obj[1];  // ✅ Name
            String address = (String) obj[2];  // ✅ Address
            Point<?> location = (Point<?>) obj[3];  // ✅ Location as WKT String
            double distance = ((Number) obj[4]).doubleValue();  // ✅ Distance

            // ✅ Extract lat/lon from the WKT format (POINT(lon lat))
            double lat = location.getPosition().getCoordinate(1);  // Y -> Latitude
            double lon = location.getPosition().getCoordinate(0);  // X -> Longitude

            return new HostelDTO(hostelId, hostelName, address, lat, lon, distance);
        }).collect(Collectors.toList());
    }

    
    
    public List<HostelDTO> getHostelsNearUser(double latitude, double longitude) {
        String userLocation = "POINT(" + longitude + " " + latitude + ")";

        List<Object[]> results = hostelRepository.findNearbyHostels(userLocation);

        return results.stream().map(obj -> {
            Long hostelId = ((Number) obj[0]).longValue();  // ✅ Correct handling
            String hostelName = (String) obj[1];
            String address = (String) obj[2];
            Point<?> location = (Point<?>) obj[3];  // ✅ Use Geolatte Point
            double distance = ((Number) obj[4]).doubleValue(); 

            // ✅ Extract coordinates correctly
            double lat = location.getPosition().getCoordinate(1);  // Y -> Latitude
            double lon = location.getPosition().getCoordinate(0);  // X -> Longitude

            return new HostelDTO(hostelId, hostelName, address, lat, lon, distance);
        }).collect(Collectors.toList());
    }

    
    public LocationCoordinates getCoordinatesFromLocation(String location) {
        try {
            GeocodingResult[] results = GeocodingApi.geocode(context, location).await();
            
            if (results != null && results.length > 0) {
                // Get the first result's location coordinates
                double latitude = results[0].geometry.location.lat;
                double longitude = results[0].geometry.location.lng;
                return new LocationCoordinates(latitude, longitude);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null; // Return null if location not found or error occurs
    }
    
    

}


