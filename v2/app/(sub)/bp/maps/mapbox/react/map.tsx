import {
  initialZoom,
  MAPBOX_TOKEN,
  mapStyle,
  offices,
} from "@/app/(sub)/bp/maps/config.ts";
import Pin from "@/app/(sub)/bp/maps/mapbox/react/pin.tsx";
import * as React from "react";
import Map, {
  FullscreenControl,
  GeolocateControl,
  Marker,
  NavigationControl,
  ScaleControl,
} from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

export default function TheMap() {
  return (
    <Map
      refreshExpiredTiles
      style={{
        width: "100%",
        height: "640px", // overflow: "hidden",
      }}
      initialViewState={{
        ...offices[0],
        zoom: initialZoom, // bearing: 0,
        // pitch: 0,
      }}
      mapStyle={mapStyle}
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      <GeolocateControl position="top-left" />
      <FullscreenControl position="top-left" />
      <NavigationControl position="top-left" />
      <ScaleControl />

      <Marker
        longitude={offices[0].lng}
        latitude={offices[0].lat}
        anchor="bottom"
        onClick={(e) => {
          // If we let the click event propagates to the map, it will immediately close the popup
          // with `closeOnClick: true`
          e.originalEvent.stopPropagation();
          // setPopupInfo(city);
        }}
      >
        <Pin />
      </Marker>
    </Map>
  );
}
