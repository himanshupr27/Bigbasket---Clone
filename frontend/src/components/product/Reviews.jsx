import React from 'react'
import ReviewsCard from './ReviewsCard';
import "./Reviews.css";
import { Link } from 'react-router-dom';
const Reviews = ({products}) => {
  return (
    <div>
       <div className="reviews-div">
        <h3 className='reviewsHeading'>Rating and Reviews</h3>
        { products.reviews &&  products.reviews[0] ? (
          <div className="reviews">
          <div className="rating-cards">
            <span>
              <h1>{ products.rating}</h1>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="rgb(107, 167, 2)" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
            </span> 
            <p>{products.numOfReviewers} reviews & ratings</p>
            <hr/>
          </div>
          <div className="reviews-cards">
            <h5>Product Reviews</h5>
            <hr/>
            { products.reviews &&  products.reviews.map((reviews) => <ReviewsCard reviews={reviews} />)}
          <Link to=""><span className='view_all_reviews'><h6>View All Reviews &#129170; </h6></span></Link>
          </div>
          </div>
        ) : (
          <div className='noreview'>  
          <img src='../images/reviews2.png' alt="no reviews"/>
          <p style={{"color":"grey","fontSize":"1vmax"}}>Want to rate this product?</p>     
            <p>You can rate or review this product only after</p>
            <p>purchasing from bigbasket</p>
          </div>


        )}
        </div>
    </div>
  )
}

export default Reviews
