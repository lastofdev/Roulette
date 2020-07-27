import React from 'react';
import './App.css';
import roulette from "./img/roulette.png"

function App() {
  function start(){
    alert('go!');
    
  }
  return (
 <div className="container">
   <div className="circle">
     <img className="rouletteImg" src={roulette} alt="roulette" />
     <div className="arrow">
     </div>
   </div>
   <div className="buttonStart"
        onClick={() => start()}>
      <span>GO!</span>
   </div>
 </div>
  );
}

export default App;
