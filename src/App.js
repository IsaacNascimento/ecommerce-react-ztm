import React from "react";
import { Routes, Route } from "react-router-dom";

import { HomeComponent } from "./routes/home/HomeComponent";
import { NavigationBar } from "./routes/navigation/NavigationBarComponent";
import { Authentication } from "./routes/authentication/authenticationComponent";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<HomeComponent />} />
        <Route path="/shop" element={<p>Shop Component</p>} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};
