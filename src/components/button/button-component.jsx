import React from "react";
import "./button.styles.scss";

const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

export const Button = ({
  children,
  buttonType,
  onClick,
  type,
  ...otherProps
}) => {
  // console.log(otherProps);
  return (
    <button
      type={type || "button"}
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
