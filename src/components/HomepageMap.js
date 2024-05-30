// src/components/MapWithMarker.jsx
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon not appearing
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
});

// Custom hook to update map center
const SetMapCenter = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.setView(position);
    }
  }, [position, map]);
  return null;
};

const HomepageMap = ({ address }) => {
  const [position, setPosition] = useState([51.505, -0.09]); // Default position
  const [markerPosition, setMarkerPosition] = useState(null);

  useEffect(() => {
    if (address) {
      const geocodeAddress = async () => {
        try {
          const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`);
          const data = await response.json();
          if (data && data.length > 0) {
            const { lat, lon } = data[0];
            const coordinates = [parseFloat(lat), parseFloat(lon)];
            setMarkerPosition(coordinates);
            setPosition(coordinates);
          } else {
            console.error('Address not found');
          }
        } catch (error) {
          console.error('Error geocoding address:', error);
        }
      };

      geocodeAddress();
    }
  }, [address]);

  return (
    <div className='container homepage-map'>
    <MapContainer center={position} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <SetMapCenter position={markerPosition} />
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markerPosition && (
        <Marker position={markerPosition}>
          <Popup>
            {address}
          </Popup>
        </Marker>
      )}
    </MapContainer>
    </div>
  );
};

export default HomepageMap;
