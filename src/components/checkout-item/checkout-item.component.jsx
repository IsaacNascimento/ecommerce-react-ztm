import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout-item.styles.scss";

export const CheckoutItem = ({ cartItem }) => {
  const { removeItemEntirely, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;

  const clearItem = () => removeItemEntirely(cartItem);
  const removeItem = () => removeItemFromCart(cartItem);
  const addItem = () => addItemToCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name"> {name} </span>
      <span className="quantity">
        <div className="arrow" onClick={removeItem}>
          <span className="value">&#10094;</span>
        </div>
        {quantity}
        <div className="arrow" onClick={addItem}>
          <span className="value">&#10095;</span>
        </div>
      </span>
      <span className="price"> {price} </span>
      <div className="remove-button" onClick={clearItem}>
        &#10005;
      </div>
    </div>
  );
};
