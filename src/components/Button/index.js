import "./Button.scss";

const Button = ({ children, className, href, disabled, text, onClick, primary, secondary, ...rest }) => {
  const classNames = ['button'];
  if (className) classNames.push(className);
  if (disabled) classNames.push("disabled");
  if (primary) classNames.push("primary");
  if (secondary) classNames.push("secondary");
  return (
    <div
      className={classNames.join(" ")}
      {...rest}
      onClick={() => {
        onClick && onClick();
      }}
    >
      <p>
        {text}
        {children}
      </p>
    </div>
  );
};

export default Button;
