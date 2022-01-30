import "./App.css";
import Header from "./components/Header";
import Map from "./components/Map";
import { MapProvider } from "./context/mapContext";

function App() {
  return (
    <div className="App">
      <MapProvider>
        <Header />
        <Map />
      </MapProvider>
    </div>
  );
}

export default App;
