
import Portfolio from './Portfolio';
import './App.css';
import { useState } from 'react';

function getRandomPortfolio(){
  const portfolioArray = ['One','Two','Three','Four','Five','Six','Seven','Eight']
  return portfolioArray[Math.floor(Math.random()*portfolioArray.length)]
}


function App() {
  const [portfolio, setPortfolio] = useState([]);


  const handleClick= ()=>{
    setPortfolio ([...portfolio, getRandomPortfolio()]);
  };
  const portfolioList =portfolio.map((portfolio, index) => {
    return <Portfolio key={index} portfolioName={portfolio} />;
  });

    return ( 
      <div className="App"> 
        <button className="appButton" onClick={handleClick}>We ♥ Baby</button>
        <div className='porfolioList'>{portfolioList}</div>
    </div>   
    );
  }

export default App;
