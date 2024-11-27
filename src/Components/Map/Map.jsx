import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for marker icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const MapComponent = () => {
    useEffect(() => {
        // Set the map's center to the marker's coordinates
        const map = L.map('map').setView([12.86694242731469, 77.56786327449373], 15);

        // Set up the tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
        }).addTo(map);

        // Add a centered marker with a popup
        L.marker([12.86694242731469, 77.56786327449373], {
            icon: new L.Icon.Default()
        })
            .addTo(map)
            .bindPopup('1121/A, 5th G Block, Further Extension, BDA Layout, Anjanapura, Bangalore 560108.')
            .openPopup();

        // Clean up the map instance on unmount
        return () => {
            map.remove();
        };
    }, []);

    return <div id="map" className="map-container" style={{ height: '500px', width: '100%' }}></div>;
};

export default MapComponent;
