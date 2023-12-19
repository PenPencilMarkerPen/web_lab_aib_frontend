import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import publicRoutes from "../router/routes";
import Navbar from "./UI/Navbar/Navbar";
const Router = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
    { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
    { id: 3, name: "Charlie", age: 28, email: "charlie@example.com" },
    { id: 4, name: "David", age: 22, email: "david@example.com" },
    { id: 5, name: "Ella", age: 35, email: "ella@example.com" },
    { id: 6, name: "Frank", age: 27, email: "frank@example.com" },
    { id: 7, name: "Grace", age: 29, email: "grace@example.com" },
    { id: 8, name: "Hannah", age: 26, email: "hannah@example.com" },
    { id: 9, name: "Ian", age: 32, email: "ian@example.com" },
    { id: 10, name: "Julia", age: 31, email: "julia@example.com" },
  ]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {publicRoutes.map((item) => (
          <Route
            key={item.path}
            path={item.path}
            element={<item.component users={users} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
