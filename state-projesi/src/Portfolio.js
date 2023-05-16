import One from './images/1.jpg';
import Two from './images/2.jpg';
import Three from './images/3.jpg';
import Four from './images/4.jpg';
import Five from './images/5.jpg';
import Six from './images/6.jpg';
import Seven from './images/7.jpg';
import Eight from './images/8.jpg';
import Nine from './images/9.jpg';

import './Portfolio.css';


const portfolioMap ={
    One,
    Two,
    Three,
    Four,
    Five,
    Four,
    Six,
    Seven,
    Eight,
    Nine,
};

function Portfolio({ portfolioName }) {

    console.log(portfolioMap[portfolioName]);
    return (
    <div className='portfolioDiv'>
        <img className='portfolio' src={portfolioMap[portfolioName]} alt=""/>
    </div>
    ); 
}

export default Portfolio;