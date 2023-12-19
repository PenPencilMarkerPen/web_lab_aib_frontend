import React from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader/Loader";

const UserItem = (props) => {
  return (
    <div>
      Hello
      <p>{props.user.id}</p>
      <p>{props.user.name}</p>
      <Link to={`/users/${props.user.id}`}>More</Link>
    </div>
  );
};

export default UserItem;
