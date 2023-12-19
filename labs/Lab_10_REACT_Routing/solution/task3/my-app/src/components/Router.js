import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import publicRoutes from "../router/routes";
import Navbar from "./UI/Navbar/Navbar";
import Users from "./API/Users";
const Router = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Users.getAll();
        const usersDataWithId = response.data.results.map((user, index) => ({
          ...user,
          id: index + 1,
        }));
        setUsers(usersDataWithId);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
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
