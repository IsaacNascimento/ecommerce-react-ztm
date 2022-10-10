import React from "react";
import "./categories.styles.scss";
import { Directory } from "./components/directory/directory.component";

export const App = () => {
  return (
    <div className="categories-container">
      <Directory />
    </div>
  );
};
