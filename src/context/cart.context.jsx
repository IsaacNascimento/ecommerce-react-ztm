import { useEffect } from "react";
import { createContext, useState } from "react";

const addCartQuantityItem = (cartItems, productToAdd) => {
  // find if cartItems contains productsToAdd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  // if found, increment quantity
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  // return new array with modifed cartItems/ new cart Item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartQuantityItem = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove?.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem?.quantity === 1) {
    return cartItems.filter(
      (cartItem) => cartItem?.id !== cartItemToRemove?.id
    );
  }

  // return back cartitems with matching cart item with reducer quantity
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove?.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const removeExistingItemEntirely = (cartItems, cartItemToRemove) => {
  // find the cart item to remove
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove?.id
  );

  // If found, remove the completly item
  if (existingCartItem) {
    return cartItems.filter(
      (cartItem) => cartItem?.id !== cartItemToRemove?.id
    );
  }

  return cartItems;
};

export const CartContext = createContext({
  isCartOpen: false,
  cartCount: 0,
  cartItems: [],
  setIsCartOpen: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  removeItemEntirely: () => {},
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (acumulator, current) => acumulator + current?.quantity * current?.price,
      0
    );

    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartQuantityItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (cartItemToRemove) => {
    setCartItems(removeCartQuantityItem(cartItems, cartItemToRemove));
  };

  const removeItemEntirely = (itemRemoved) => {
    setCartItems(removeExistingItemEntirely(cartItems, itemRemoved));
  };

  const values = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    cartItems,
    removeItemEntirely,
    cartTotal,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
