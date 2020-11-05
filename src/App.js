import React from "react";
import axios from 'axios'
import "./style.css";

export default function App() {
  
 const getData = () => {​​​​​ axios.get(`https://ReplitExpress.magneka.repl.co`) .then(result => {​​​​​ console.log(result) }​​​​​) .catch(error => {​​​​​ console.log(error) }​​​​​) }​​​​​ ​
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>

      <button onClick={getData}>Klikk på meg</button>

    </div>
  );
}
