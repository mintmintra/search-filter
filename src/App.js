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
      <ul className="row">
        {countries.map((item,index)=>{
          return (
            <li key={index}>
              <div className="card">
                <div className="card-title">
                <img src={item.flag} alt="item.name" />
                </div>
                <div className="card-body">
                  <div className="card-description">
                    <h2>{item.name}</h2>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
