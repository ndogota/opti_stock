import { useEffect, useState } from "react";

import Axios from "axios";

import Header from "./components/header/Header";
import Dashboard from "./components/Dashboard";

import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    products();
  }, []);

  const products = async() => {
    try {
      const response = await Axios.get('http://20.199.42.62:30070/api/products');
      setData(response.data);
    } catch (error) {
      console.error('Error when fetching the data :', error);
    }
  }

  return (
    <div className="App">
      <Header />
      <Dashboard data={data}/>
    </div>
  );
}

export default App;
