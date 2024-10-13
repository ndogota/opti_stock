import { useEffect, useState } from "react";

import Axios from "axios";

import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    products();
  }, []);


  const products = async() => {
    try {
      const response = await Axios.get('http://localhost:5157/api/products');
      setData(response.data);
    } catch (error) {
      console.error('Error when fetching the data :', error);
    }
  }

  return (
    <div className="App">
      <h1>Fetch Data from the Back :</h1>
      <ol>
        {data.map((data) => {
          return(
            <li key={data.id}>
              id : {data.id} name : {data.name} price : {data.price} quantity_in_stock : {data.quantity_in_stock} reorder_level : {data.reorder_level} category : {data.category} 
            </li>
          )
        })}
      </ol>  
    </div>
  );
}

export default App;
