import React from "react";
import { SignInForm } from "../../components/sign-in-form/signInFormComponent";
import { SignUp } from "../../components/sign-up-form/signUpFormComponent";
import "./authentication.styles.scss";

export const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUp />
    </div>
  );
};
