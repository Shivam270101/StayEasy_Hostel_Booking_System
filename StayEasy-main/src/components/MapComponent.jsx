import React, { useState, useEffect } from "react";
import { GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";

const MapComponent = ({ selectedHostel }) => {
  const [map, setMap] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [directions, setDirections] = useState(null);
  const [distance, setDistance] = useState(null);
  const [eta, setEta] = useState(null);
  const [watchId, setWatchId] = useState(null);
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    // Get initial user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => console.error("Error getting location", error)
      );
    }
  }, []);

  const startNavigation = () => {
    if (!selectedHostel || !userLocation) return;

    setIsNavigating(true);

    // Track user movement in real-time
    const id = navigator.geolocation.watchPosition(
      (position) => {
        const newLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setUserLocation(newLocation);
        updateDirections(newLocation, selectedHostel);
      },
      (error) => console.error("Error tracking location", error),
      { enableHighAccuracy: true }
    );

    setWatchId(id);
  };

  const stopNavigation = () => {
    setIsNavigating(false);
    if (watchId) navigator.geolocation.clearWatch(watchId);
    setDirections(null);
    setDistance(null);
    setEta(null);
  };

  const updateDirections = (currentLocation, destination) => {
    const directionsService = new window.google.maps.DirectionsService();
    directionsService.route(
      {
        origin: currentLocation,
        destination: { lat: destination.latitude, lng: destination.longitude },
        travelMode: window.google.maps.TravelMode.WALKING,
      },
      (result, status) => {
        if (status === "OK") {
          setDirections(result);
          const route = result.routes[0].legs[0];
          setDistance(route.distance.text);
          setEta(route.duration.text);
        }
      }
    );
  };

  return (
    <div>
      <button onClick={startNavigation} disabled={isNavigating}>
        Start Navigation
      </button>
      <button onClick={stopNavigation} disabled={!isNavigating}>
        Stop Navigation
      </button>

      <div>Distance: {distance}</div>
      <div>ETA: {eta}</div>

      <GoogleMap
        center={userLocation || { lat: 18.6498, lng: 73.7808 }}
        zoom={15}
        onLoad={(map) => setMap(map)}
        mapContainerStyle={{ width: "100%", height: "500px" }}
      >
        {userLocation && <Marker position={userLocation} />}
        {selectedHostel && (
          <Marker
            position={{
              lat: selectedHostel.latitude,
              lng: selectedHostel.longitude,
            }}
          />
        )}
        {directions && (
          <DirectionsRenderer
            directions={directions}
            options={{ polylineOptions: { strokeColor: "#1E3A8A" } }}
          />
        )}
      </GoogleMap>
    </div>
  );
};

export default MapComponent;
