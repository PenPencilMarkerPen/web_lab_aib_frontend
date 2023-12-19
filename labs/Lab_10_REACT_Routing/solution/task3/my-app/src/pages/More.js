import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Users from "../components/API/Users";
import Loader from "../components/Loader/Loader";

const More = (props) => {
  const { id } = useParams();
  const [user, setUser] = useState([0]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Users.getById(id);
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    console.log(user);
  }, []);
  if (user == 0) {
    return <Loader />;
  } else {
    return (
      <>
        <p>Имя: {user.name}</p>
        <p>Рост: {user.height}</p>
        <p>Вес: {user.mass}</p>
        <p>Цвет волос: {user.hair_color}</p>
        <p>Цвет кожи: {user.skin_color}</p>
        <p>Цвет глаз: {user.eye_color}</p>
      </>
    );
  }
};

export default More;
