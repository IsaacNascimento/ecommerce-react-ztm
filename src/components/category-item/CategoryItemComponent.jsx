import "./categoryItem.styles.scss";
import React from "react";

export const CategoryItem = ({ category }) => {
  console.log(category);
  const showpNow = "Shop Now";
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${category.imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{category.title}</h2>
        <p>{showpNow}</p>
      </div>
    </div>
  );
};
