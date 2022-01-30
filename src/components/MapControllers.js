import React, { useContext, useEffect } from "react";
import { useMap } from "react-leaflet";
import MapContext from "../context/mapContext";
import { TileLayer, Marker } from "react-leaflet";

function MapControllers() {
  const map = useMap();
  const mapContext = useContext(MapContext);
  const coordinates = [mapContext.coordinates.lat, mapContext.coordinates.lng];
  useEffect(() => {
    map.setView(coordinates, 13);
  }, [coordinates]);
  return (
    <>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordinates}></Marker>
    </>
  );
}

export default MapControllers;
