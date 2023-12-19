import React, { useState } from "react";
import UserList from "../components/UserList";
const Main = (props) => {
  console.log(props.users);
  return <div>{<UserList users={props.users} />}</div>;
};

export default Main;
