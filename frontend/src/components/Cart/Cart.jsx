import React, { Fragment} from "react";
import CartItemCard from "./CartItemCard";
import { useSelector, useDispatch } from "react-redux";
import { removeItemsFromCart, addItemsToCart } from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const increaseQuantity = (item) => {
    if (item.stock <= item.quantity) return;
    dispatch(addItemsToCart({ item, noOfItems: 1 }));
  };

  const decreaseQuantity = (item) => {
    if (item.quantity <= 1) return;
    dispatch(addItemsToCart({ item, noOfItems: -1 }));
  };

  const deleteCartItems = (id) => {
    dispatch(removeItemsFromCart(id));
  };

  const checkoutHandler = () => {
    // Add checkout functionality here
  };

  return (
    <Fragment>
      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <Link to="/products">View Products</Link>
        </div>
      ) : (
        <Fragment>
          <h1 style={{ textAlign: "center" }}>CART</h1>
          <div className="cartPage">
            <div className="cartHeader">
              <p>Product</p>
              <p>Quantity</p>
              <p>Subtotal</p>
            </div>

            {cartItems.map((item, index) => (
              <div className="cartContainer" key={item._id}>
                <CartItemCard item={item} deleteCartItems={deleteCartItems} />
                <div className="cartInput">
                  <button onClick={() => decreaseQuantity(item)}>-</button>
                  <input type="number" value={item.quantity} readOnly />
                  <button onClick={() => increaseQuantity(item)}>+</button>
                </div>
                <p className="cartSubtotal">{`₹${item.price * item.quantity}`}</p>
              </div>
            ))}

            <div className="cartGrossProfit">
              <div></div>
              <div className="cartGrossProfitBox">
                <p>Gross Total</p>
                <p>₹{totalPrice}</p>
              </div>

              <div></div>
              <div className="checkOutBtn">
                <button onClick={checkoutHandler}>Check Out</button>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Cart;
