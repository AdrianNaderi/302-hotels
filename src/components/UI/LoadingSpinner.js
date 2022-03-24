import "./LoadingSpinner.css";
const LoadingSpinner = ({size}) => {
  return (
    <div className={size}>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadingSpinner;
