// export default MyHostelSearch;
import React, { useState, useEffect, useCallback, useRef } from "react";
import "../css/HostelSearch.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript,
  DirectionsRenderer,
} from "@react-google-maps/api";
import axios from "axios";
import _ from "lodash";
import { useNavigate } from "react-router-dom";

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const libraries = ["places"];

const MyHostelSearch = ({ isSidebarOpen }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Use environment variable for security
    libraries,
  });
  const mapRef = useRef(null);
  const navigate = useNavigate();
  const [searchLocation, setSearchLocation] = useState("");
  const [hostels, setHostels] = useState([]);
  const [selectedHostel, setSelectedHostel] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [mapCenter, setMapCenter] = useState({ lat: 20.5937, lng: 78.9629 });
  const [directions, setDirections] = useState(null);
  const [travelInfo, setTravelInfo] = useState(null);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      const id = navigator.geolocation.watchPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setUserLocation(location);
          setMapCenter(location);
          if (isNavigating) {
            fetchNearbyHostels(location);
            if (selectedHostel) {
              getDirections(selectedHostel);
            }
          }
        },
        () => alert("Unable to retrieve your location."),
        { enableHighAccuracy: true }
      );
      return () => navigator.geolocation.clearWatch(id);
    }
  }, [isNavigating, selectedHostel]);

  const fetchNearbyHostels = useCallback(
    _.throttle(async (location) => {
      if (!location) return;
      try {
        console.log("Latitude:", location.lat);
        console.log("Longitude:", location.lng);
        const response = await axios.get(
          "http://localhost:8080/api/hostels/nearby",
          {
            params: { latitude: location.lat, longitude: location.lng },
          }
        );
        setHostels(response.data);
      } catch (error) {
        console.error("Error fetching nearby hostels:", error);
      }
    }, 10000),
    []
  );

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/hostels/search",
        {
          params: {
            location: searchLocation,
            userLat: userLocation?.lat,
            userLng: userLocation?.lng,
          },
        }
      );
      setHostels(response.data);
      if (response.data.length > 0) {
        // Get the first hostel location (assuming sorted results)
        const firstHostel = response.data[0];
        const hostelLocation = {
          lat: firstHostel.latitude,
          lng: firstHostel.longitude,
        };

        // Set new map center
        setMapCenter(hostelLocation);

        // Adjust the map bounds to fit both user and searched hostel
        if (mapRef.current && userLocation) {
          const bounds = new window.google.maps.LatLngBounds();
          bounds.extend(
            new window.google.maps.LatLng(userLocation.lat, userLocation.lng)
          );
          bounds.extend(
            new window.google.maps.LatLng(
              hostelLocation.lat,
              hostelLocation.lng
            )
          );
          mapRef.current.fitBounds(bounds);
        }
      }
    } catch (error) {
      console.error("Error searching hostels:", error);
    }
  };
  const adjustMapBounds = (hostelLocation) => {
    if (mapRef.current && userLocation) {
      const bounds = new window.google.maps.LatLngBounds();
      bounds.extend(userLocation);
      bounds.extend(hostelLocation);
      mapRef.current.fitBounds(bounds); // Adjusts zoom to fit both points
    }
  };

  const getDirections = (hostel) => {
    if (!userLocation) {
      alert("User location not available.");
      return;
    }
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: userLocation,
        destination: { lat: hostel.latitude, lng: hostel.longitude },
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK") {
          setDirections(result);
          setTravelInfo(result.routes[0].legs[0]);
          adjustMapBounds({ lat: hostel.latitude, lng: hostel.longitude });
        } else {
          console.error("Directions request failed due to:", status);
        }
      }
    );
  };

  const handleStartNavigation = () => {
    setIsNavigating(true);
    if (selectedHostel) getDirections(selectedHostel);
  };

  const handleStopNavigation = () => {
    setIsNavigating(false);
    setDirections(null);
    setTravelInfo(null);
  };

  if (loadError) return <p>Error loading maps</p>;
  if (!isLoaded) return <p>Loading maps...</p>;

  return (
    <div
      className="hostel-search-container"
      style={{
        marginLeft: isSidebarOpen ? "250px" : "60px", // Prevent overlap
        padding: "20px",
        transition: "margin-left 0.3s ease-in-out",
      }}
    >
      <div className="search-bar">
        <input
          type="text"
          placeholder="Enter location"
          value={searchLocation}
          onChange={(e) => setSearchLocation(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={() => fetchNearbyHostels(userLocation)}>
          Nearby Hostels
        </button>
      </div>
      <div className="navigation-buttons">
        <button onClick={handleStartNavigation}>Start</button>
        <button onClick={handleStopNavigation}>Stop</button>
      </div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={mapCenter}
        onLoad={(map) => (mapRef.current = map)}
      >
        {userLocation && <Marker position={userLocation} label="You" />}
        {hostels.map((hostel) => (
          <Marker
            key={hostel.hostel_id}
            position={{ lat: hostel.latitude, lng: hostel.longitude }}
            onClick={() => {
              setSelectedHostel(hostel);
              getDirections(hostel);
            }}
          />
        ))}
        {selectedHostel && (
          <InfoWindow
            position={{
              lat: selectedHostel.latitude,
              lng: selectedHostel.longitude,
            }}
            onCloseClick={() => setSelectedHostel(null)}
          >
            <div>
              <h3>{selectedHostel.hostelName}</h3>
              <p>{selectedHostel.address}</p>
              <button onClick={() => getDirections(selectedHostel)}>
                Get Directions
              </button>
              {travelInfo && (
                <div>
                  <p>
                    <strong>Distance:</strong> {travelInfo.distance.text}
                  </p>
                  <p>
                    <strong>Time:</strong> {travelInfo.duration.text}
                  </p>
                </div>
              )}
            </div>
          </InfoWindow>
        )}
        {directions && (
          <DirectionsRenderer
            directions={directions}
            options={{
              polylineOptions: {
                strokeColor: "#00008B",
                strokeOpacity: 1,
                strokeWeight: 4,
              },
            }}
          />
        )}
      </GoogleMap>
      <div className="hostel-list">
        {hostels.map((hostel) => (
          <div className="hostel-card" key={hostel.hostel_id}>
            <h3>{hostel.hostelName}</h3>
            <p>{hostel.address}</p>
            <p>
              <strong>Distance:</strong>{" "}
              {hostel.distance >= 1000
                ? (hostel.distance / 1000).toFixed(2) + " km"
                : hostel.distance.toFixed(2) + " meters"}
            </p>
            <br />
            <button
              className="book-now"
              onClick={() => navigate(`/booking/${parseInt(hostel.hostel_id)}`)}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyHostelSearch;
