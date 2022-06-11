import React from "react";
import './App.css';
import { useState,useEffect } from "react";
function App() {
  const [countries,setCountries] = useState([]);

  useEffect(()=>{
    fetch("https://restcountries.com/v2/all")
    .then(res=>res.json())
    .then(data=>{
      setCountries(data)
    })
  },[])

  return (
    <div className="container">
      <ul>
        {countries.map((item,index)=>{
          return (
            <li key={index}>
              <div>
                <img src={item.flag} alt="item.name" />
                {item.name} | {item.region} | {item.population}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
