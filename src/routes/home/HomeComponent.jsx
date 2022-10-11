import React from "react";
import "../../categories.styles.scss";
import { Directory } from "../../components/directory/DirectoryComponent";

export const HomeComponent = () => {
  return (
    <div className="categories-container">
      <Directory />
    </div>
  );
};
