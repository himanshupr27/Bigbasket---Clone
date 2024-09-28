import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';
import "./Welcome.css";
import img1 from "./HC1.webp";
import img2 from "./HC2.webp";
const items = [
  {
      name: "Summer Hair",
      details: "Care",
      image: img2
  },
  {
      name: "Offer On",
      details: "Domex",
      image: img1
  },
];
function Welcome() {
const [currentIndex, setCurrentIndex] = useState(0);

const handleChange = (now, previous) => {
    setCurrentIndex(now);
};

  return (
    <div className="container">
    <div className='welcome'>
      <Carousel className='carousel' 
      animation="slide"
      duration="1000"
      navButtonsAlwaysInvisible="true"
      indicators={false}
      onChange={handleChange}>
        {items.map((item,i)=>(
          <img src={item.image} alt={`${i} Slide`} key={i} />
        ))}
      </Carousel>
      <div className='indexing'>
                {items.map((item, i) => (
                     <div className={`index-box ${i === currentIndex ? 'active' : ''}`}
                     key={i}>
                      <h7>{item.name} </h7>     
                      <p>{item.details}</p>                
                  </div>
                ))}
            </div>
    </div>
    <div className='home-button'>
    <Link to="/"><img src="./images/home/B1.webp" alt="eggs meat and fish"/></Link>
    <Link to="/"><img src="./images/home/B2.webp" alt="neupass"/></Link>
    <Link to="/"><img src="./images/home/B3.webp" alt="ayurveda"/></Link>
    <Link to="/"><img src="./images/home/B4.webp" alt="buy more save more"/></Link>
    <Link to="/"><img src="./images/home/B5.webp" alt="deals of the the week"/></Link>
    <Link to="/"><img src="./images/home/B6.webp" alt="combo store"/></Link>
    </div>
    </div>
      
  )
}


export default Welcome
