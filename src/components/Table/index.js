import "./Table.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersActions } from "../../store";
import Row from "../Row";
import Button from "../Button";
import Text from "../Text";

const Table = () => {
  const dispatch = useDispatch();
  const sUsers = useSelector((state) => state.users.users);
  const [users, setUsers] = useState([]);
  const tableColumns = ["ID", "Name", "Email", "Actions"];

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => dispatch(usersActions.addUsers(res)));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <Text h1 className="h1">
        Redux CRUD User app
      </Text>
      <div className="sideButtons">
        <Button primary onClick={fetchUsers}>
          load users
        </Button>
        <Button primary>add user</Button>
      </div>
      <Row tableColumns={tableColumns} />
      {sUsers.length === 0 ? (
        <span>No Users found.</span>
      ) : (
        sUsers.map((user) => <Row user={user} />)
      )}
    </div>
  );
};

export default Table;
