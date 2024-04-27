import "./Table.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { usersActions } from "../../store";
import Row from "../Row";
import Button from "../Button";
import Text from "../Text";

const Table = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sUsers = useSelector((state) => state.users.users);
  const tableHeaders = ["ID", "Name", "Email", "Actions"];

  const fetchUsers = (action) => {
    if (action === "click" || sUsers.length === 0) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((res) => dispatch(usersActions.addUsers(res)));
    }
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
        <Button primary onClick={() => fetchUsers("click")}>
          load users
        </Button>
        <Button primary onClick={() => navigate("add-user")}>
          add user
        </Button>
      </div>
      <Row tableHeaders={tableHeaders} />
      {sUsers.length === 0 ? (
        <span>No Users found.</span>
      ) : (
        sUsers.map((user) => <Row key={user.id} user={user} />)
      )}
    </div>
  );
};

export default Table;
