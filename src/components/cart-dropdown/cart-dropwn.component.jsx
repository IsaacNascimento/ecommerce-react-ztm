import React from "react";
import { useContext } from "react";
import { Button } from "../button/button-component";
import { CartContext } from "../../context/cart.context";

import "./cart-dropdown.styles.scss";
import { CartItem } from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";

export const CartDropwn = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    return navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};
