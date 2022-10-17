import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebaseUtil";

import { FormInput } from "../form-input/formInputComponent";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const inputMap = [
    {
      uid: "1",
      name: "displayName",
      label: "Display Name",
      type: "text",
      value: displayName,
    },
    { uid: "2", name: "email", label: "Email", type: "email", value: email },
    {
      uid: "3",
      name: "password",
      label: "Password",
      type: "password",
      value: password,
    },
    {
      uid: "4",
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      value: confirmPassword,
    },
  ];

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code) {
        alert("Cannot create, email already in use");
      }
      console.log("User Creation encountered an error ", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        {inputMap.map((item) => (
          <FormInput
            key={item.uid}
            name={item.name}
            label={item.label}
            type={item.type}
            value={item.value}
            required
            onChange={handleChange}
          />
        ))}
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
