import {
  initialZoom,
  MAPBOX_TOKEN,
  mapStyle,
  officePositionArray,
  offices,
} from "@/app/(sub)/bp/maps/config.ts";
import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";

import "mapbox-gl/dist/mapbox-gl.css";

function MapboxNative() {
  const mapRef = useRef<mapboxgl.Map>();
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current) return;

    mapboxgl.accessToken = MAPBOX_TOKEN!;
    const map: mapboxgl.Map = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: officePositionArray,
      zoom: initialZoom,
      style: mapStyle,
    })
      .addControl(new mapboxgl.GeolocateControl(), "top-left")
      .addControl(new mapboxgl.NavigationControl(), "top-left")
      .addControl(new mapboxgl.FullscreenControl(), "top-left");

    new mapboxgl.Marker({
      anchor: "bottom",
      color: "red",
    })
      .setLngLat(offices[0])
      .addTo(map);

    mapRef.current = map;

    mapRef.current.on("load", () => {
      mapRef.current!.addSource("maine", {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "Polygon", // These coordinates outline Maine.
            coordinates: [offices.map((o) => [o.lng, o.lat])],
          },
        },
      });

      mapRef.current!.addLayer({
        id: "maine",
        type: "fill",
        source: "maine",
        layout: {},
        paint: {
          "fill-color": "#0080ff",
          "fill-opacity": 0.5,
        },
      });

      mapRef.current!.addLayer({
        id: "outline",
        type: "line",
        source: "maine",
        layout: {},
        paint: {
          "line-color": "#000",
          "line-width": 3,
        },
      });
    });

    return () => {
      if (!mapRef.current) return;
      mapRef.current.remove();
    };
  }, [mapRef.current, mapContainerRef.current]);

  return (
    <>
      {/*<div className="sidebar">*/}
      {/*  Longitude: {center[0]!.toFixed(4)} | Latitude: {center[1]!.toFixed(4)} |*/}
      {/*  Zoom: {zoom.toFixed(2)}*/}
      {/*</div>*/}

      <div
        id="map-container"
        ref={mapContainerRef}
        className={"w-full h-[240px] sm:h-[360px] md:h-[480px] lg:h-[640px]"}
      />
    </>
  );
}

export default MapboxNative;
