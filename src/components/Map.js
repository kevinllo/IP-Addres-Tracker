import React, { useContext } from "react";
import MapControllers from "./MapControllers";
import { MapContainer } from "react-leaflet";
import MapContext from "../context/mapContext";

const Map = () => {
  const mapContext = useContext(MapContext);
  const coordinates = [mapContext.coordinates.lat, mapContext.coordinates.lng];
  return (
    <MapContainer center={coordinates} zoom={13} scrollWheelZoom={true} zoomControl={false}>
      <MapControllers coordinates={coordinates} />
    </MapContainer>
  );
};
export default Map;
