import { officePositionArray } from "@/app/(sub)/bp/maps/config.ts";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
//   iconUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
//   shadowUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
// });

const BeijingMap = () => {
  const zoom = 15;

  return (
    <div className="w-full h-[400px]">
      <MapContainer
        center={officePositionArray}
        zoom={zoom}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          className="invert" // 这会创建一个简单的暗色主题效果
        />
        <Marker position={officePositionArray}>
          <Popup>智造大街</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default BeijingMap;
