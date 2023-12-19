import React from "react";
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import publicRoutes from "../router/routes";
import Navbar from "./UI/Navbar/Navbar";
const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {publicRoutes.map((item) => (
          <Route key={item.path} path={item.path} Component={item.component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
