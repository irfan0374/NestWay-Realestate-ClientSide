import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

const GoogleSearch = () => {
    const [search,setsearch]=useState('')
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiaXJmYW4zNzQiLCJhIjoiY2xwZmlqNzVyMWRuMDJpbmszdGszazMwaCJ9.7wdXsKdpOXmDR9l_ISdIqA';

    const map = new mapboxgl.Map({
      container: 'geocoder-map', // Use a container div (id="geocoder-map") to hold the map
    });

    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
    });

    map.addControl(geocoder);

    // Cleanup when the component unmounts
    return () => map.remove();
  }, []);

  return (
    <div className='-z-10'>
      <div id="geocoder-map" className='-z-10'  />
    </div>
  );
};

export default GoogleSearch;
