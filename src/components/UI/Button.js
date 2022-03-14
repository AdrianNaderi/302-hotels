const Button = (props) => {
  return (
    <div>
      <button type={props.type}>{props.children}</button>
    </div>
  );
};

export default Button;
