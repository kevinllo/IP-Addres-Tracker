import React, { useContext } from "react";
import MapControllers from "./MapControllers";
import { MapContainer } from "react-leaflet";
import MapContext from "../context/mapContext";

function Map() {
  const mapContext = useContext(MapContext);
  const coordinates = [mapContext.coordinates.lat, mapContext.coordinates.lng];
  return (
    <MapContainer center={coordinates} zoom={13} scrollWheelZoom={true}>
      <MapControllers />
    </MapContainer>
  );
}
export default Map;
