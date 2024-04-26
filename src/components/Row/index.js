import "./Row.css";
import Text from "../Text";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { usersActions } from "../../store";

const Row = ({ user, tableColumns }) => {
  const dispatch = useDispatch();
  const deleteRow = (id) => {
    dispatch(usersActions.deleteUser(id));
  };

  if (tableColumns) {
    return (
      <>
        <div className="header">
          {tableColumns.map((col) => (
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
          <Button secondary>Edit</Button>
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default Row;
