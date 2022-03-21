const Button = (props) => {
  return (
    <div>
      <button type={props.type} onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
