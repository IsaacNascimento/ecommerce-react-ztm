import React, { useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebaseUtil";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      const fields = event.nativeEvent.srcElement;
      const fieldsLenght = event.nativeEvent.srcElement.length;
      const fieldsValues = [];
      for (let i = 0; i < fieldsLenght; i++) {
        fieldsValues.push(fields[i].value);
      }

      const data = {
        email: fieldsValues[1],
        password: fieldsValues[3],
      };

      const value = { ...data };
      if (!value.password || !value.email) return;
      return await createUser(value.email, value.password);
    }
  };

  const createUser = async (email, password) => {
    return await createAuthUserWithEmailAndPassword(email, password);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          type="text"
          required
          onChange={(e) => handleChange(e)}
          name="displayName"
          value={displayName}
        />

        <label>Email</label>
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <label>Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <label>Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
