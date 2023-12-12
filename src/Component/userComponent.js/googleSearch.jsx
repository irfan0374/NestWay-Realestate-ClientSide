import mapboxgl from 'mapbox-gl';

import React, { useEffect, useRef, useState } from 'react';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'; 


const GoogleSearch = ({onLocationSelect}) => {
  const geocoderContainerRef = useRef(null);
  const geocoderRef = useRef(null);
  const [maplocation,setmaplocation]=useState("")


  useEffect(() => {
    if (!geocoderRef.current) {
      geocoderRef.current = new MapboxGeocoder({
        accessToken: 'pk.eyJ1IjoiaXJmYW4zNzQiLCJhIjoiY2xwZmlqNzVyMWRuMDJpbmszdGszazMwaCJ9.7wdXsKdpOXmDR9l_ISdIqA',
        mapboxgl: mapboxgl,
      });

      geocoderRef.current.addTo(geocoderContainerRef.current);

      geocoderRef.current.on('result', (event) => {
        onLocationSelect(event.result);
      });
    }
  }, []);


  return (
    <div className='mt-2'>
    
   
      <div ref={geocoderContainerRef} className="geocoder-container"></div>
    
  </div>

  );
};

export default GoogleSearch;
