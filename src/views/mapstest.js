
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiZG9teWd1cnUiLCJhIjoiY2twYXZtNXFzMHdrNDJ5b2dydzZ5ZDAwcCJ9.y40XwcNDFeh7jM2tScUnKA';

export default function SimpleMap() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(37.9062);
    const [lat, setLat] = useState(0.0236);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(1));
            setLat(map.current.getCenter().lat.toFixed(1));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <div>
            {/* <div className="sidebar"> */}
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            {/* </div> */}
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}
