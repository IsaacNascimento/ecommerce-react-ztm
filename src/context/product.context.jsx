import { createContext, useState } from "react";

import mockProducts from "../shop-data.json";

export const ProductContext = createContext({
  products: [] || null,
  // setProducts: () => null,
});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(mockProducts);
  const value = { products };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
