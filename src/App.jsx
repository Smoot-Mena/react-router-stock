import {Routes, Route} from "react-router-dom"; 
import './App.css'
import Homepage from "./components/Homepage";
import Stock from "./components/Stock";
import Nav from "./components/Nav";
import About from "./components/About";
import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard";

function App() {

  let apiKey = "ac9ec7b8460e81a39e5c34b0d889bf89";

  const url = `https://financialmodelingprep.com/api/v3/search-ticker?query=AA&limit=30&apikey=${apiKey}`;

  const [stocks, setStocks] = useState(null);

  async function getStocks() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setStocks(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getStocks();
  }, [])

  return (
    <section>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/stocks/" element={<Dashboard stocks={stocks}/>} />
        <Route path="/about/" element={<About />} />
        <Route path="/stocks/:symbol" element={<Stock stocks={stocks}/>} />
      </Routes>
      </section>
  )
}

export default App;