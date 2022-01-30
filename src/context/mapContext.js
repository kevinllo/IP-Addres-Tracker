import React, { createContext, useState } from "react";
const MapContext = createContext(null);

export const MapProvider = ({children}) => {
    const [coordinates, setCoordinates] = useState({
        lat: 37.38605,
        lng: -122.08385,
    });
    return(<MapContext.Provider value={{coordinates, setCoordinates}}>{children}</MapContext.Provider>)

};

export default MapContext;