import React, { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchDetailProduct } from "../../features/product/productDetailsSlice";
import { addItemsToCart } from "../../features/cart/cartSlice";
import Loader from '../layouts/Loader';
import ReactImageMagnify from 'react-image-magnify';
import "./ProductDetails.css"
import Description from './Description';
import Reviews from './Reviews';
// import Cards from '../layouts/Cards';

function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { isLoading, details, isError } = useSelector((state) => state.productDetails);
  const [quantity, setQuantity] = useState(1);
  const [curImage, setImage] = useState('');
  const [indexb, setIndexb] = useState({});
  const [isAddedToBasket, setIsAddedToBasket] = useState(false);
  const borderStyle = {
    border: '0.5px solid black',
  };
  useEffect(() => {
    if (id) {
      dispatch(fetchDetailProduct(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (details && details.products && details.products.images) {
      setImage(details.products.images[0]?.url || '');
    }
  }, [details]);

  if (isError) {
    return <div>Error loading product details.</div>;
  }

  if (!details) {
    return <Loader />;
  }
  const increaseQuantity = () => {
    if (details.products.Stock <= quantity) return;

    const qty = quantity + 1;
    setQuantity(qty);
    addtocartItems();
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
    addtocartItems();

  };
  const addtocartItems = () => {
    setIsAddedToBasket(true);
    dispatch(addItemsToCart({
      item: details.products,
      noOfItems: 1,
    }));
  }

  const scrollUp = () => {
    let box = document.querySelector('.imagesall');
    let height = box.clientHeight;
    box.scrollTop -= height;
  };

  const scrollDown = () => {
    let box = document.querySelector('.imagesall');
    let height = box.clientHeight;
    box.scrollTop += height;
  };
  return (
    <Fragment>
      {isLoading ? (<Loader />) : (<>
        <div className='ProductDetails'>
          <div className='CarouselImagediv'>
            <div className="all-Image">
              <button className='pre-btn' onClick={scrollUp} ><p>&#129053;</p></button>
              <div className="imagesall">
                {details.products.images.map((item, index) =>
                  <img src={item.url} alt={item.id} key={index} style={indexb === index ? borderStyle : {}} onClick={() => {
                    setImage(item.url);
                    setIndexb(index);
                  }
                  } />
                )}
              </div>
              <button className='next-btn' onClick={scrollDown}><p> &#129055;</p></button>
            </div>
            <div className="main-Image">
              <ReactImageMagnify {...{
                smallImage: {
                  alt: 'Product image',
                  isFluidWidth: false,
                  width: 400,
                  height: 400,
                  src: curImage,
                },
                largeImage: {
                  src: curImage,
                  width: 1200,
                  height: 1800,
                },
                imageClassName: 'smallImage',
              }} /></div>

          </div>
          <div className='detaislBlock'>
            <p>{details.products.category}</p>
            <div className='detailsBlock-1'>
              <h2>{details.products.name}</h2>
            </div>
            <div className='detailsBlock-2'>

              <div className='div-rat'>
                {details.products.rating > 0 ? <span className='rating'><p>{details.products.rating}</p><svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" fill="rgba(71, 111, 0, 1)" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg></span> : <></>}
                {details.products.numOfReviewers ? <p className='no-rating'>{details.products.numOfReviewers} Reviewes</p> : <></>}

              </div>

            </div>
            <div className='detailsBlock-3'>
              <h5>{`Price: ₹${details.products.price}`}</h5>
              <p>(inclusive of all taxes)</p>
              <div className="detailsBlock-3-1">
                <div className="detailsBlock-3-1-1" hidden={!isAddedToBasket}>
                  <button className='qt-btn-m' onClick={decreaseQuantity}>-</button>
                  <input readOnly value={quantity} type='number' />
                  <button className='qt-btn-a' onClick={increaseQuantity}>+</button>
                </div>
                {!isAddedToBasket && (
                  <button className='add-btn' onClick={addtocartItems}>Add to basket</button>
                )}
                <button className='save-btn'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                </svg>Save For Later </button>
              </div>
            </div>
          </div>
        </div>
        <hr className='whybigbasket_border' />
        <div className="whybigbasket">
          <h5>Why choose Bigbasket?</h5>
          <div className="basket-block">
            <div className="block">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="lg:w-11 lg:h-11 xl:h-16 xl:w-16"><circle cx="32" cy="32" r="32" fill="#fff"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M30.366 44.507c-.537.993-2.445 3.959-4.737 3.126a.32.32 0 0 0-.217 0c-2.292.833-4.2-2.133-4.736-3.126-.87-1.612-1.891-4.567-.33-6.801 1.725-2.469 4.28-.928 4.99-.451a.33.33 0 0 0 .37 0c.71-.477 3.264-2.018 4.99.451 1.56 2.234.54 5.19-.33 6.8Zm1.655-7.779c-1.192-1.705-2.688-2.063-3.734-2.063-.39 0-.892.053-1.479.227a.343.343 0 0 1-.434-.378c.086-.708.238-1.58.504-2.469a.701.701 0 0 0-.413-.855l-.255-.098a.676.676 0 0 0-.888.45c-.289.962-.497 2.383-.588 3.082a.34.34 0 0 1-.432.289 5.238 5.238 0 0 0-1.548-.248c-1.045 0-2.542.358-3.733 2.063-.933 1.335-1.291 3.01-1.038 4.847.227 1.64.89 3.05 1.266 3.745.524.97 2.459 4.135 5.351 4.135.31 0 .617-.038.92-.11.304.072.611.11.92.11h.001c2.893 0 4.827-3.165 5.351-4.135.375-.694 1.039-2.104 1.266-3.745.254-1.836-.105-3.512-1.037-4.847Z" fill="#606060"></path><mask id="youCanTrust_svg__a" maskUnits="userSpaceOnUse" x="29" y="14" width="15" height="36" style={{ "mask-type": "alpha" }}><path fill-rule="evenodd" clip-rule="evenodd" d="M29.348 14.58h13.916v34.77H29.348V14.58Z" fill="#fff"></path></mask><g mask="url(#youCanTrust_svg__a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M39.29 17.7a.344.344 0 0 1-.34.347h-5.288a.344.344 0 0 1-.34-.347v-1.04c0-.191.152-.346.34-.346h5.288c.188 0 .34.155.34.346v1.04Zm3.935 11.4-3.143-7.107a.353.353 0 0 1-.02-.115V19.78h.25c.376 0 .681-.31.681-.693v-3.813a.687.687 0 0 0-.68-.694H32.3a.687.687 0 0 0-.681.694v3.813c0 .383.305.693.68.693h.25v2.098c0 .04-.006.078-.019.115l-3.143 7.108a.703.703 0 0 0-.039.23v3.893c0 .344.247.635.581.686.078.011.157.025.237.041a.685.685 0 0 0 .817-.679V29.66c0-.039.007-.078.02-.115l3.162-7.164a.35.35 0 0 0 .02-.115v-2.139c0-.191.152-.347.34-.347h3.562c.188 0 .34.156.34.347v2.14c0 .038.007.077.02.114l3.162 7.164c.013.037.02.076.02.115v17.68a.344.344 0 0 1-.34.347H32.13a.676.676 0 0 0-.51.235 10.7 10.7 0 0 1-.232.258c-.411.443-.105 1.17.493 1.17h10.702c.376 0 .68-.31.68-.693V29.331a.706.706 0 0 0-.038-.23Z" fill="#606060"></path></g><path fill-rule="evenodd" clip-rule="evenodd" d="m26.933 21.385 2.396 1.094-2.396 1.095-1.095 2.396-1.095-2.396-2.396-1.095 2.396-1.094 1.095-2.397 1.095 2.397Z" fill="#606060"></path><mask id="youCanTrust_svg__b" maskUnits="userSpaceOnUse" x="16" y="26" width="5" height="6" style={{ "mask-type": "alpha" }}><path fill-rule="evenodd" clip-rule="evenodd" d="M16 26.645h4.394v4.394H16v-4.394Z" fill="#fff"></path></mask><g mask="url(#youCanTrust_svg__b)"><path fill-rule="evenodd" clip-rule="evenodd" d="m18.886 28.153 1.508.689-1.508.689-.689 1.508-.689-1.508L16 28.842l1.508-.689.69-1.508.688 1.508Z" fill="#606060"></path></g><path fill-rule="evenodd" clip-rule="evenodd" d="m18.72 21.347 1.088.498-1.089.497-.498 1.09-.497-1.09-1.09-.497 1.09-.498.497-1.09.498 1.09ZM47.281 25.79l1.09.498-1.09.497-.498 1.09-.497-1.09-1.09-.497 1.09-.498.497-1.09.498 1.09ZM47.717 15.199l.653.299-.653.298-.299.654-.298-.654-.654-.298.654-.3.298-.653.299.654ZM22.527 15.635l1.09.497-1.09.498-.497 1.089-.498-1.09-1.09-.497 1.09-.497.498-1.09.497 1.09ZM44.941 19.879l1.525.696-1.525.697-.696 1.525-.697-1.525-1.525-.697 1.525-.696.697-1.525.696 1.525Z" fill="#606060"></path>
              </svg>
              <h5>Quality</h5>
              <p>You can trust</p>
            </div>
            <div className="block">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="lg:w-11 lg:h-11 xl:h-16 xl:w-16"><circle cx="32" cy="32" r="32" fill="#fff"></circle><path fill-rule="evenodd" clip-rule="evenodd" d="M39.825 47.72c-4.386 0-7.942-3.652-7.942-8.156 0-4.505 3.556-8.157 7.942-8.157s7.94 3.652 7.94 8.157c0 4.504-3.554 8.156-7.94 8.156Zm0-18.047c-5.31 0-9.63 4.437-9.63 9.89 0 5.454 4.32 9.892 9.63 9.892 5.31 0 9.63-4.438 9.63-9.891 0-5.454-4.32-9.891-9.63-9.891Z" fill="#606060"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M31.064 46.586c-8.224-.178-14.834-6.915-14.82-15.195.015-8.39 6.775-15.145 15.154-15.145 8.37 0 15.154 6.793 15.154 15.172v.003c0 .148.064.289.18.381.237.189.466.388.686.595a.485.485 0 0 0 .82-.33 16.772 16.772 0 0 0-4.924-12.58 16.823 16.823 0 0 0-11.916-4.942 16.732 16.732 0 0 0-11.916 4.942 16.772 16.772 0 0 0-4.936 11.931c0 4.48 1.771 8.763 4.936 11.931a16.732 16.732 0 0 0 12.184 4.94.486.486 0 0 0 .354-.814c-.203-.225-.397-.46-.58-.701a.484.484 0 0 0-.377-.188Z" fill="#606060"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M30.896 21.527h-.2c-.277 0-.502-.294-.502-.656v-2.178c0-.363.225-.657.502-.657h.2c.277 0 .502.294.502.657v2.178c0 .362-.224.656-.502.656ZM18.157 30.352v-.194c0-.268.304-.485.679-.485h2.253c.375 0 .679.217.679.485v.194c0 .267-.304.484-.679.484h-2.253c-.375 0-.68-.217-.68-.484ZM37.64 44.58 35.21 41.9a.806.806 0 0 1 0-1.061l.193-.212a.637.637 0 0 1 .963 0l1.516 1.67a.319.319 0 0 0 .482 0l4.921-5.423a.637.637 0 0 1 .964 0l.192.212a.806.806 0 0 1 0 1.062l-5.836 6.432a.637.637 0 0 1-.963 0ZM20.564 25.6c0 .321-.27.582-.602.582a.592.592 0 0 1-.602-.582c0-.321.27-.582.602-.582.333 0 .602.26.602.582ZM20.564 37.236c0 .322-.27.582-.602.582a.592.592 0 0 1-.602-.582c0-.321.27-.582.602-.582.333 0 .602.26.602.582ZM42.232 25.6c0 .321-.27.582-.602.582a.592.592 0 0 1-.602-.582c0-.321.27-.582.602-.582.332 0 .602.26.602.582ZM24.176 20.945c0 .322-.27.582-.602.582a.592.592 0 0 1-.602-.582c0-.32.27-.581.602-.581.332 0 .602.26.602.581ZM25.38 41.89c0 .322-.27.583-.602.583a.592.592 0 0 1-.602-.582c0-.321.27-.582.602-.582.332 0 .601.26.601.582ZM38.62 20.945c0 .322-.269.582-.601.582a.592.592 0 0 1-.602-.582c0-.32.27-.581.602-.581.332 0 .602.26.602.581ZM28.08 27.2l3.162 2.679a.426.426 0 0 0 .532 0l4.147-3.51a.851.851 0 0 1 1.063 0l.213.18a.57.57 0 0 1 0 .9l-5.157 4.365a.851.851 0 0 1-1.063 0l-4.174-3.533a.57.57 0 0 1 0-.9l.213-.18a.851.851 0 0 1 1.063 0Z" fill="#606060"></path></svg>
              <h5>On time</h5>
              <p>Guarantee</p>
            </div>
            <div className="block">
              <svg width="60" height="46" viewBox="0 0 64 50" fill="none" xmlns="http://www.w3.org/2000/svg" class="lg:w-11 lg:h-11 xl:h-16 xl:w-16"><circle cx="32" cy="17" r="15" fill="#fff"></circle><mask id="freeDelivery_svg__a" maskUnits="userSpaceOnUse" x="25" y="8" width="5" height="5" style={{ "mask-type": "luminance" }}><path fill-rule="evenodd" clip-rule="evenodd" d="M25.368 8.818h4.001v3.971h-4V8.82Z" fill="#fff"></path></mask><g mask="url(#freeDelivery_svg__a)"><path fill-rule="evenodd" clip-rule="evenodd" d="m27.325 10.355.74 1.09c.072.108.008.258-.114.272l-1.256.137c-.123.014-.213-.12-.163-.24l.516-1.229a.156.156 0 0 1 .277-.03Zm-.548-1.334-1.38 3.285c-.101.241.08.508.326.481l3.358-.368c.245-.027.372-.328.227-.541L27.33 8.96a.312.312 0 0 0-.553.06Z" fill="#606060"></path></g><path fill-rule="evenodd" clip-rule="evenodd" d="M31.858 9.103a8.005 8.005 0 0 0-3.62.857l.482.667a7.2 7.2 0 0 1 3.066-.714 7.211 7.211 0 0 1 7.301 7.218 7.23 7.23 0 1 1-14.458-.056.337.337 0 0 0-.338-.34h-.135a.338.338 0 0 0-.338.334v.073c0 2.148.836 4.167 2.355 5.685a8.03 8.03 0 0 0 5.685 2.355 7.987 7.987 0 0 0 5.684-2.355 7.987 7.987 0 0 0 2.355-5.685 7.987 7.987 0 0 0-2.355-5.685 7.987 7.987 0 0 0-5.684-2.354Z" fill="#606060"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M34.073 20.383h-3.81c-.679 0-1.252-.486-1.337-1.134l-.5-3.129a.165.165 0 0 1 .167-.183h7.15c.1 0 .18.086.166.183l-.5 3.129c-.085.648-.658 1.134-1.336 1.134Zm-1.906-6.173c.475 0 .872.323.967.753.023.1-.058.196-.165.196h-1.603c-.107 0-.188-.095-.165-.196a.982.982 0 0 1 .966-.753Zm2.107.949a.334.334 0 0 1-.332-.275c-.139-.823-.882-1.453-1.774-1.453-.893 0-1.636.63-1.774 1.453a.334.334 0 0 1-.333.275h-2.195a.33.33 0 0 0-.334.365l.606 3.937c.129.972.988 1.7 2.006 1.7h4.047c1.018 0 1.877-.728 2.006-1.7l.606-3.937a.329.329 0 0 0-.334-.365h-2.195Z" fill="#606060"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M32.09 19.306h-.154c-.214 0-.387-.156-.387-.348v-1.777c0-.193.173-.349.387-.349h.154c.214 0 .387.156.387.349v1.777c0 .192-.173.348-.387.348M33.636 19.306h-.154c-.214 0-.387-.156-.387-.348v-1.777c0-.193.173-.349.387-.349h.154c.214 0 .387.156.387.349v1.777c0 .192-.173.348-.387.348M30.853 19.306H30.7c-.214 0-.387-.156-.387-.348v-1.777c0-.193.173-.349.387-.349h.154c.214 0 .387.156.387.349v1.777c0 .192-.173.348-.387.348" fill="#606060"></path><path d="M2.71 45h1.17v-2.88h3.33v-1.03H3.88v-1.73h3.4v-1.03H2.71V45Zm5.585 0h1.05v-3.29c.21-.34.8-.64 1.24-.64.13 0 .24.01.33.03v-1.04c-.63 0-1.21.36-1.57.82v-.71h-1.05V45Zm3.167-2.42c0 1.53 1.08 2.54 2.53 2.54.77 0 1.48-.24 1.96-.7l-.48-.69c-.34.34-.9.53-1.37.53-.91 0-1.46-.6-1.54-1.33h3.73v-.25c0-1.52-.93-2.63-2.38-2.63-1.43 0-2.45 1.13-2.45 2.53Zm2.45-1.67c.95 0 1.34.71 1.36 1.28h-2.72c.05-.59.46-1.28 1.36-1.28Zm3.116 1.67c0 1.53 1.08 2.54 2.53 2.54.77 0 1.48-.24 1.96-.7l-.48-.69c-.34.34-.9.53-1.37.53-.91 0-1.46-.6-1.54-1.33h3.73v-.25c0-1.52-.93-2.63-2.38-2.63-1.43 0-2.45 1.13-2.45 2.53Zm2.45-1.67c.95 0 1.34.71 1.36 1.28h-2.72c.05-.59.46-1.28 1.36-1.28ZM25.493 45h2.48c2.08 0 3.49-1.37 3.49-3.33s-1.41-3.34-3.49-3.34h-2.48V45Zm1.17-1.03v-4.61h1.31c1.49 0 2.29 1.02 2.29 2.31 0 1.26-.84 2.3-2.29 2.3h-1.31Zm5.6-1.39c0 1.53 1.08 2.54 2.53 2.54.77 0 1.48-.24 1.96-.7l-.48-.69c-.34.34-.9.53-1.37.53-.91 0-1.46-.6-1.54-1.33h3.73v-.25c0-1.52-.93-2.63-2.38-2.63-1.43 0-2.45 1.13-2.45 2.53Zm2.45-1.67c.95 0 1.34.71 1.36 1.28h-2.72c.05-.59.46-1.28 1.36-1.28ZM38.129 45h1.05v-6.67h-1.05V45Zm2.932-5.63c.36 0 .65-.29.65-.65 0-.36-.29-.65-.65-.65-.35 0-.65.29-.65.65 0 .36.3.65.65.65Zm-.52 5.63h1.05v-4.83h-1.05V45Zm3.682 0h1.13l1.97-4.83h-1.13l-1.41 3.62-1.41-3.62h-1.12l1.97 4.83Zm3.46-2.42c0 1.53 1.08 2.54 2.53 2.54.77 0 1.48-.24 1.96-.7l-.48-.69c-.34.34-.9.53-1.37.53-.91 0-1.46-.6-1.54-1.33h3.73v-.25c0-1.52-.93-2.63-2.38-2.63-1.43 0-2.45 1.13-2.45 2.53Zm2.45-1.67c.95 0 1.34.71 1.36 1.28h-2.72c.05-.59.46-1.28 1.36-1.28ZM53.549 45h1.05v-3.29c.21-.34.8-.64 1.24-.64.13 0 .24.01.33.03v-1.04c-.63 0-1.21.36-1.57.82v-.71h-1.05V45Zm3.417.95-.16.94c.15.04.44.07.59.07.75-.01 1.33-.27 1.66-1.09l2.33-5.7h-1.13l-1.41 3.62-1.41-3.62h-1.12l1.98 4.89-.24.55c-.14.32-.36.42-.69.42-.12 0-.29-.03-.4-.08Z" fill="#303030"></path></svg>
              <h5>Free</h5>
              <p>Delivery</p>
            </div>
            <div className="block">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="lg:w-11 lg:h-11 xl:h-16 xl:w-16"><circle cx="32" cy="32" r="32" fill="#fff"></circle><mask id="returnPolicy_svg__a" maskUnits="userSpaceOnUse" x="17" y="14" width="10" height="10" style={{ "mask-type": "alpha" }}><path fill-rule="evenodd" clip-rule="evenodd" d="M17.853 14.545h8.535v8.472h-8.535v-8.472Z" fill="#fff"></path></mask><g mask="url(#returnPolicy_svg__a)"><path fill-rule="evenodd" clip-rule="evenodd" d="m22.027 17.824 1.577 2.327c.155.228.02.549-.243.578l-2.678.293c-.262.029-.455-.256-.347-.512l1.1-2.621a.333.333 0 0 1 .59-.065Zm-1.17-2.847-2.943 7.01c-.216.514.17 1.083.695 1.026l7.163-.786c.525-.057.794-.699.485-1.155l-4.219-6.224c-.309-.456-.965-.384-1.18.13Z" fill="#606060"></path></g><path fill-rule="evenodd" clip-rule="evenodd" d="M31.697 15.152c-2.728 0-5.359.633-7.724 1.829l1.03 1.424a15.358 15.358 0 0 1 6.54-1.523A15.384 15.384 0 0 1 47.12 32.28c.013 8.529-6.897 15.446-15.422 15.446-8.518 0-15.423-6.905-15.423-15.422v-.144a.72.72 0 0 0-.719-.727h-.288a.72.72 0 0 0-.72.714l-.002.157c0 4.58 1.784 8.888 5.024 12.127a17.131 17.131 0 0 0 12.128 5.024c4.58 0 8.888-1.785 12.127-5.024a17.039 17.039 0 0 0 5.023-12.127c0-4.582-1.784-8.889-5.023-12.128a17.039 17.039 0 0 0-12.127-5.023Z" fill="#606060"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M36.421 39.217h-8.128c-1.447 0-2.67-1.036-2.852-2.42l-1.066-6.674a.351.351 0 0 1 .357-.39h15.251c.217 0 .384.183.357.39l-1.067 6.675c-.182 1.383-1.404 2.419-2.852 2.419Zm-4.064-13.17c1.012 0 1.86.69 2.063 1.608.047.214-.125.417-.352.417h-3.421c-.228 0-.4-.203-.352-.417.203-.917 1.05-1.607 2.062-1.607Zm4.495 2.025a.713.713 0 0 1-.71-.587c-.296-1.755-1.88-3.099-3.785-3.099-1.904 0-3.488 1.344-3.784 3.1a.713.713 0 0 1-.71.586H23.18c-.433 0-.768.366-.713.78l1.294 8.397c.274 2.075 2.107 3.63 4.278 3.63h8.635c2.17 0 4.004-1.555 4.278-3.63l1.294-8.398c.055-.413-.28-.78-.713-.78h-4.682Z" fill="#606060"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M32.192 36.92h-.33c-.455 0-.824-.333-.824-.743v-3.791c0-.41.37-.743.825-.743h.33c.455 0 .824.332.824.743v3.791c0 .41-.37.743-.825.743ZM35.49 36.92h-.329c-.455 0-.825-.333-.825-.743v-3.791c0-.41.37-.743.825-.743h.33c.455 0 .825.332.825.743v3.791c0 .41-.37.743-.825.743ZM29.554 36.92h-.33c-.456 0-.825-.333-.825-.743v-3.791c0-.41.37-.743.825-.743h.33c.455 0 .824.332.824.743v3.791c0 .41-.369.743-.824.743Z" fill="#606060"></path></svg>
              <h5>Return Policy</h5>
              <p>No Question asked</p>
            </div>
          </div>
        </div>
        <hr className='whybigbasket_border' />

        {/* description */}
        <Description products={details.products} />

        {/*Reviews */}
        <Reviews products={details.products} />

        {/* Simlar products */}
        {/* <div className="smart-div">
        <h5>Best Sellers</h5>
        <div className="product-container justify-content-center">
          {isLoading ? (<Loader />) : (
            details.products && details.products.map((products, index) => index < 4 && <Cards product={products} />)
          )}
        </div>
      </div> */}

      </>)}

    </Fragment>
  );
}

export default ProductDetails;
