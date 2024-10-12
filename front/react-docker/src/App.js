/*import Axios from "axios";*/

import './App.css';
/*import { useEffect, useState } from "react";*/

function App() {
  /*const [car, setCar] = useState([]);

  useEffect(() => {
    cars();
  }, []);

  const cars = async() => {
    try {
      const response = await Axios.get('http://back-service:3070/cars');
      setCar(response.data);
    } catch (error) {
      console.error('Error when fetching the data :', error);
    }

       <ol>
        {car.map((data) => {
          return(
            <li key={data._id}>
              brand : {data.brand} model : {data.model} years : {data.years} horsepower : {data.horsepower}
            </li>
          )
        })}
      </ol>   
  }*/

  return (
    <div className="App">
      <h1>Fetch Data from the back :</h1>
    </div>
  );
}

export default App;
