// import React, { Component } from 'react';
// import GoogleMapReact from 'google-map-react';
 
// const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
// class SimpleMap extends Component {
//   static defaultProps = {
//     center: {
//       lat: 1.23,
//       lng: 36.82
//     },
//     zoom: 11
//   };
 
//   render() {
//     return (
//       // Important! Always set the container height explicitly
//       <div style={{ height: '90vh', width: '90%' , float: 'right'}}>
//         <GoogleMapReact
//         //   bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             lat={59.955413}
//             lng={30.337844}
//             text="My Marker"
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }
 
// export default SimpleMap;


// import React, { Component } from "react";
// import mapboxgl from '!mapbox-gl'; 
// mapboxgl.accessToken =
//   "pk.eyJ1IjoiZG9teWd1cnUiLCJhIjoiY2twYXZtNXFzMHdrNDJ5b2dydzZ5ZDAwcCJ9.y40XwcNDFeh7jM2tScUnKA";

// import React, { Component } from 'react'

// export default class SimpleMap extends Component {
//     render() {
//         return (
//             <div>
//                       <x-div>
//         <x-mapbox>
//           <x-marker id="marker" lnglat="Toronto, Canada" center>
//             Looking For Here?
//           </x-marker>
//         </x-mapbox>
//       </x-div>
                
//             </div>
//         )
//     }
// }

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
