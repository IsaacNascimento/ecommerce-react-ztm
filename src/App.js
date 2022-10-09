import React from "react";
import './categories.styles.scss';

export const App = () => {
  const showpNow = "Shop Now";
  const categories = [
    { id: 1, title: "Hats" },
    { id: 2, title: "Jackets" },
    { id: 3, title: "Sneakers" },
    { id: 4, title: "Womens" },
    { id: 5, title: "Mens" },
  ];

  return (
    <div className="categories-container">
      {categories.map((item) => (
        <div key={item.id} className="category-container">
          <div className="background-image" />
          <div className="category-body-container">
            <h2>{item.title}</h2>
            <p>{showpNow}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
