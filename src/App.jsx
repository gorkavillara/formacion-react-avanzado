import { useEffect, useState } from "react";
import categories from "./assets/categories";
import Category from "./components/Category";
import { getDistanceToSS } from "./assets/functions";
import "./App.css";

const App = () => {
  const [dist, setDist] = useState(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setDist(getDistanceToSS(position));
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  return (
    <>
      <div className="App">
        {dist ? (
          <div className="Location">
            Distancia: <span className="km">{dist.toFixed(2)}km</span>
          </div>
        ) : (
          <div>Por favor activa tu ubicación</div>
        )}
        <div className="Categories">
          {categories.map((cat) => (
            <Category key={cat.id} category={cat} />
          ))}
        </div>
      </div>
      <div className="disclaimer">Aplicación de prueba realizada por Gorka Villar para la formación de React Avanzado</div>
    </>
  );
};

export default App;
