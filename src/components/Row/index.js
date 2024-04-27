import "./Row.css";
import Text from "../Text";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { usersActions } from "../../store";
import { useNavigate } from "react-router-dom";

const Row = ({ user, tableHeaders }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deleteRow = (id) => {
    dispatch(usersActions.deleteUser(id));
  };

  if (tableHeaders) {
    return (
      <>
        <div className="header">
          {tableHeaders.map((col) => (
            <Text sh1 bold>
              {col}
            </Text>
          ))}
        </div>
        <hr></hr>
      </>
    );
  }
  return (
    <>
      <div className="row">
        <Text sh2>{user.id}</Text>
        <Text sh2>{user.name}</Text>
        <Text sh2>{user.email}</Text>
        <div className="displayFlex">
          <Button secondary onClick={() => deleteRow(user.id)}>
            Delete
          </Button>
          <Button secondary onClick={() => navigate(`/edit-user/${user.id}`)}>Edit</Button>
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default Row;
