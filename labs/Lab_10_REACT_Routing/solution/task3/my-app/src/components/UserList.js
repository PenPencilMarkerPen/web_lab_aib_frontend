import React from "react";
import UserItem from "./UserItem";
import Loader from "./Loader/Loader";
const UserList = ({ users, title }) => {
  if (!users.length) {
    return <Loader />;
  } else {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}> {title}</h1>
        {users.map((item) => (
          <UserItem user={item} />
        ))}
      </div>
    );
  }
};
export default UserList;
