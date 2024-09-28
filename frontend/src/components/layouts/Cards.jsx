import React from 'react'
import { Link } from 'react-router-dom'
import "./Cards.css";

const Cards = ({ product }) => {

  return (
    <Link className='productCard'to={`/product/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />
      <Link ><p className='catogary'>{product.category}</p></Link>
      <p className='name'>{product.name}</p>
      <div className='div-rat'>
        <span className='rating'><p>{product.rating}</p><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="rgba(71, 111, 0, 1)" class="bi bi-star-fill" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
        </svg></span>
        <p className='no-rating'>{product.numOfReviewers} Ratings</p>
      </div>
      <div className='size'> 72 pc</div>
      <span>₹{product.price}</span>
      <div className="button">
        <button className='save'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
        </svg></button>
        <button type="button" class="add btn btn-outline-danger">Add</button>
      </div>
    </Link>
  )
}

export default Cards
