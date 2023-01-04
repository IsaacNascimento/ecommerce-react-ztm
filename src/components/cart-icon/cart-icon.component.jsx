import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";
import "./cart-icon.styles.scss";

export const CartIcon = () => {
  const { setIsCartOpen, cartItems } = useContext(CartContext);
  const [count, setCount] = useState(0);
  console.log(cartItems);

  const totalCount = cartItems.reduce(
    (acumulator, current) => acumulator + current?.quantity,
    0
  );

  useEffect(() => {
    setCount(totalCount);
  }, [totalCount]);

  const toggleIsCartOpen = () => setIsCartOpen((prev) => !prev);

  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{count}</span>
    </div>
  );
};
