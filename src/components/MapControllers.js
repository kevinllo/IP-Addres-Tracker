import React, { useEffect } from "react";
import { TileLayer, Marker, useMap } from "react-leaflet";

const MapControllers = ({ coordinates }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(coordinates, 13);
  }, [map, coordinates]);
  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordinates}></Marker>
    </>
  );
};
export default MapControllers;
