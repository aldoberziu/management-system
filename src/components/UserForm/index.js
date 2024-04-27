import "./UserForm.css";
import Input from "../Input";
import { useEffect, useState } from "react";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { usersActions } from "../../store";
import { useNavigate, useParams } from "react-router-dom";
import Text from "../Text";

const UserForm = ({ action }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const sUsers = useSelector((state) => state.users.users);
  const [currentUser, setCurrentUser] = useState({});

  //still not perfect
  // const generateID = () => {
  //   let id = 1;
  //   for (let user of sUsers) {
  //     if (user.id === id) {
  //       id++;
  //     } else {
  //       break;
  //     }
  //   }
  //   return id;
  // };

  const [user, setUser] = useState({ id: /*generateID()*/ sUsers.length + 1 });

  useEffect(() => {
    if (action === "edit") {
      const user = sUsers.filter((el) => el.id === parseInt(id))[0];
      setCurrentUser(user);
    }
  }, []);

  const handleInput = ({ value, field }) => {
    setUser((state) => ({ ...state, [field]: value }));
  };
  const addUser = () => {
    dispatch(usersActions.addUser(user));
  };
  const editUser = () => {
    const { id, ...editedUser } = user;
    const editingUserID = currentUser.id;
    dispatch(usersActions.editUser({ editedUser, editingUserID }));
  };
  return (
    <div className="formContainer">
      <Text h1 className="h1">
        {action === "add" ? "Add" : "Edit"} User
      </Text>
      <div className="form">
        <Input
          type={"text"}
          name={"name"}
          placeholder={action === "add" ? "Adonis" : currentUser.name}
          value={action === "add" ? null : ""}
          label={"Name"}
          input={handleInput}
        />
        <Input
          type={"email"}
          name={"email"}
          placeholder={action === "add" ? "test@mail.com" : currentUser.email}
          value={action === "add" ? null : ""}
          label={"Email"}
          input={handleInput}
        />
        {action === "add" ? (
          <Button
            primary
            onClick={() => {
              addUser();
              navigate("/");
            }}
            className="formButton"
          >
            Add User
          </Button>
        ) : (
          <Button
            primary
            onClick={() => {
              editUser();
              navigate("/");
            }}
            className="formButton"
          >
            Save User
          </Button>
        )}
      </div>
    </div>
  );
};

export default UserForm;
