import "./LoadingSpinner.css";
const LoadingSpinner = () => {
  return (
    <div className={"lds-ripple-small"}>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingSpinner;
