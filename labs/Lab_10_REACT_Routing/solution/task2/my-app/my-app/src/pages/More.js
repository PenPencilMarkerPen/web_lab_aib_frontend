import { useParams } from "react-router-dom";
import UserList from "../components/UserList";
const More = (props) => {
  const { id } = useParams();
  const user = props.users.find((user) => user.id === parseInt(id, 10));

  return (
    <>
      <p>{user.id}</p>
      <p>{user.name}</p>
      <p>{user.age}</p>
      <p>{user.email}</p>
    </>
  );
};

export default More;
