import "./UserForm.css";
import Input from "../Input";
import { useEffect, useState } from "react";
import Button from "../Button";
import { useDispatch, useSelector } from "react-redux";
import { usersActions } from "../../store";
import { useNavigate, useParams } from "react-router-dom";

const UserForm = ({ action }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const sUsers = useSelector((state) => state.users.users);

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
  const [editingUserID, setEditingUserID] = useState(0);

  useEffect(() => {
    if (action === "edit") {
      const user = sUsers.filter((el) => el.id === parseInt(id))[0];
      setEditingUserID(user.id);
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
    dispatch(usersActions.editUser({ editedUser, editingUserID }));
  };
  return (
    <div className="form">
      <Input
        type={"text"}
        name={"name"}
        placeholder={action === "add" ? "Adonis" : "user.name"}
        value={action === "add" ? null : ""}
        label={"Name"}
        input={handleInput}
      />
      <Input
        type={"email"}
        name={"email"}
        placeholder={action === "add" ? "test@mail.com" : "user.email"}
        value={action === "add" ? null : ""}
        label={"Email"}
        input={handleInput}
      />
      {action === "add" ? (
        <Button primary
          onClick={() => {
            addUser();
            navigate("/");
          }}
          className="formButton"
        >
          Add User
        </Button>
      ) : (
        <Button primary
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
  );
};

export default UserForm;
