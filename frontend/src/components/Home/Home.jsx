import React, { useEffect } from 'react';
import Cards from '../layouts/Cards';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../features/product/productSlice";
import Loader from '../layouts/Loader';
import Welcome from './Welcome';
import "./Home.css"
import { Link } from 'react-router-dom';
import Carousel from 'react-material-ui-carousel';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts({ keyword: "", page: 1 }));
  }, [dispatch]);
  const { data, isLoading, isError } = useSelector((state) => state.product);
  
  if (isError) {
    return <h1>Error</h1>;
  }
  return (
    <div>
      <Welcome />
      <div className="smart-div">
        <h5>My Smart Basket</h5>
        <div className="product-container justify-content-center">
          {isLoading ? (<Loader />) : (
            data && data.products.map((products, index) => index < 4 && <Cards product={products} />)
          )}
        </div>
      </div>
      <div className='large-div'>
        <h5>Bank Offers</h5>
        <div className='d-flex'>
          <Link><img src="./images/home/O1.webp" alt="bank-offer" /></Link>
          <Link><img src="./images/home/O2.webp" alt="bank-offer" /></Link>
          <Link><img src="./images/home/O3.webp" alt="bank-offer" /></Link>
          <Link><img src="./images/home/O4.webp" alt="bank-offer" /></Link>
        </div>
      </div>
      <div className="smart-div">
        <h5>Best Sellers</h5>
        <div className="product-container justify-content-center">
          {isLoading ? (<Loader />) : (
            data && data.products.map((products, index) => index < 4 && <Cards product={products} />)
          )}
        </div>
      </div>
      <div className='large-div'>
        <h5>Top Offers</h5>
        <div className='d-flex'>
          <Link><img src="./images/home/TO-1.webp" alt="Top-offer" /></Link>
          <Link><img src="./images/home/TO-2.webp" alt="Top-offer" /></Link>
          <Link><img src="./images/home/TO-3.webp" alt="Top-offer" /></Link>
          <Link><img src="./images/home/TO-4.webp" alt="Top-offer" /></Link>
        </div>
      </div>
      <div className='large-div'>
        <h5>Fruits and Vegetables</h5>
        <div className='d-flex'>
          <Link><img src="./images/home/FV-2.webp" alt="Fruits and Vegetables" /></Link>
          <Link><img src="./images/home/FV-1.webp" alt="Fruits and Vegetables" /></Link>
          <Link><img src="./images/home/FV-3.webp" alt="Fruits and Vegetables" /></Link>
          <Link><img src="./images/home/FV-4.webp" alt="Fruits and Vegetables" /></Link>
        </div>
      </div>
       
      <div className='small-div'>
        <h5>Your Daily Staples</h5>
        <div className='d-flex'>
          <Link><img src="./images/home/YDS-2.webp" alt="Your Daily Staples" /></Link>
          <Link><img src="./images/home/YDS-1.webp" alt="Your Daily Staples" /></Link>
          <Link><img src="./images/home/YDS-3.webp" alt="Your Daily Staples" /></Link>
          <Link><img src="./images/home/YDS-4.webp" alt="Your Daily Staples" /></Link>
          <Link><img src="./images/home/YDS-5.webp" alt="Your Daily Staples" /></Link>
          <Link><img src="./images/home/YDS-6.webp" alt="Your Daily Staples" /></Link>
        </div>
      </div>

      <div className='small-div'>
        <h5>Beverages</h5>
        <div className='d-flex'>
          <Link><img src="./images/home/BV-2.webp" alt="Beverages" /></Link>
          <Link><img src="./images/home/BV-1.webp" alt="Beverages" /></Link>
          <Link><img src="./images/home/BV-3.webp" alt="Beverages" /></Link>
          <Link><img src="./images/home/BV-4.webp" alt="Beverages" /></Link>
          <Link><img src="./images/home/BV-5.webp" alt="Beverages" /></Link>
          <Link><img src="./images/home/BV-6.webp" alt="Beverages" /></Link>
        </div>
      </div>

      <div className='large-div'>
        <h5>Snake Stores</h5>
        <div className='d-flex'>
          <Link><img src="./images/home/SS-2.webp" alt="Snake Stores" /></Link>
          <Link><img src="./images/home/SS-1.webp" alt="Snake Stores" /></Link>
          <Link><img src="./images/home/SS-3.webp" alt="Snake Stores" /></Link>
          <Link><img src="./images/home/SS-4.webp" alt="Snake Stores" /></Link>
        </div>
      </div>

      <div className='large-div'>
        <h5>Cleaning & Household</h5>
        <div className='d-flex'>
          <Link><img src="./images/home/CH-2.webp" alt="leaning & Household" /></Link>
          <Link><img src="./images/home/CH-1.webp" alt="leaning & Household" /></Link>
          <Link><img src="./images/home/CH-3.webp" alt="leaning & Household" /></Link>
          <Link><img src="./images/home/CH-4.webp" alt="leaning & Household" /></Link>
        </div>
      </div>

      <div className='small-div'>
        <h5>Beauty & Hiegine</h5>
        <div className='d-flex'>
          <Link><img src="./images/home/BH-2.webp" alt="Beauty & Hiegine" /></Link>
          <Link><img src="./images/home/BH-1.webp" alt="Beauty & Hiegine" /></Link>
          <Link><img src="./images/home/BH-3.webp" alt="Beauty & Hiegine" /></Link>
          <Link><img src="./images/home/BH-4.webp" alt="Beauty & Hiegine" /></Link>
          <Link><img src="./images/home/BH-5.webp" alt="Beauty & Hiegine" /></Link>
          <Link><img src="./images/home/BH-6.webp" alt="Beauty & Hiegine" /></Link>
        </div>
      </div>

      <div className='small-div'>
        <h5>Home and Kitchen</h5>
        <div className='d-flex'>
          <Link><img src="./images/home/HK-2.webp" alt="Home and Kitchen" /></Link>
          <Link><img src="./images/home/HK-1.webp" alt="Home and Kitchens" /></Link>
          <Link><img src="./images/home/HK-3.webp" alt="Home and Kitchen" /></Link>
          <Link><img src="./images/home/HK-4.webp" alt="Home and Kitchen" /></Link>
          <Link><img src="./images/home/HK-5.webp" alt="Home and Kitchen" /></Link>
          <Link><img src="./images/home/HK-6.webp" alt="Home and Kitchen" /></Link>
        </div>
      </div>

      {/* carosal */}
      <div className="div-bottom">
      <Carousel className="bottom-carousal"
         autoPlay={true}
         animation="slide"
         indicators={true}
         navButtonsAlwaysVisible={true}
         navButtonsProps={{
          className: "caro-nav-button",
        }}>
        <img src="./images/home/CB-1.webp" alt="" />
        <img src="./images/home/CB-2.webp" alt="" />
        <img src="./images/home/CB-3.webp" alt="" />
        <img src="./images/home/CB-4.webp" alt="" />
      </Carousel>
      </div>
      <div className='bottom-details'>
      <h6>bigbasket – online grocery store</h6>
      <p>Did you ever imagine that the freshest of fruits and vegetables, top-quality pulses and food grains, dairy products, and hundreds of branded items could be handpicked and delivered to your home, all at the click of a button? In today's fast-paced world, bigbasket.com, India's pioneering online grocery store, continues to bring a staggering array of over 40,000 products from more than 1,000 brands to the doorsteps of over 10 million satisfied customers. From essential household cleaning products to the latest beauty and makeup trends, bigbasket remains your one-stop shop for daily needs.<br/><br/>In these times, we've eliminated the stress associated with shopping for daily essentials. You can now effortlessly order all your household products and groceries online. Plus, the added convenience of finding all your requirements at a single source, coupled with substantial savings, demonstrates that bigbasket, India's largest online supermarket, has transformed the way we shop for groceries. Online grocery shopping has become second nature. And when it comes to freshness, whether it's fruits and vegetables or dairy and meat, we've got you covered! Easily obtain fresh eggs, meat, fish, and more with just a few clicks.<br/><br/>We now serve 300+ cities and towns across India and ensure swift delivery times, guaranteeing that all your groceries, snacks and branded foods reach you on time.<br/><br/>Slotted Delivery: Choose the most convenient delivery slot to receive your groceries, ranging from early morning delivery for early birds to late-night delivery for those on the night shift. bigbasket caters to every schedule.<br/><br/>Instant delivery from bbnow: In response to the ever-increasing demand for convenience, bbnow by bigbasket offers lightning-fast grocery delivery, ensuring that your essentials are at your doorstep within 15-30 minutes. Our quick delivery service has revolutionized the way you shop for groceries. Choose from 5000+ grocery essentials. bbnow is available only in select cities.<br/><br/>Whether it's a last-minute dinner party or you simply need something urgently, we've got you covered. This service exemplifies our commitment to providing you with not just the widest range of products but also the fastest and most efficient shopping experience, making bigbasket.com the go-to destination for all your immediate grocery needs.</p>
      </div>
    </div>
  )
}

export default Home
