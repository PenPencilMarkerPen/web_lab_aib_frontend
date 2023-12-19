import React from "react";
import UserItem from "./UserItem";
const UserList = ({ users, title }) => {
  if (!users.length) {
    return <div>Список пользователей пуст</div>;
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
