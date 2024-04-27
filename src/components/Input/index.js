import "./Input.css";
import Text from "../Text";

const Input = ({ label, type, name, placeholder, input }) => {
  const handleValue = (e) => {
    input({ value: e.target.value, field: name });
  };
  return (
    <div className="inputContainer">
      <Text sh2 bold>
        {label}
      </Text>
      <input type={type} name={name} placeholder={placeholder} onChange={handleValue} />
    </div>
  );
};

export default Input;
