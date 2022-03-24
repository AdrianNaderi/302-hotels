import "./LoadingSpinner.css";
const LoadingSpinner = ({ size, color }) => {
  const rippleColor = { borderColor: color };
  let ripples = "largerp"
  if (size === "small") {
      ripples = "smallrp";
  }
  if (size === "medium") {
    ripples = "mediumrp";
  }
  if (size === "large") {
    ripples = "largerp";
  }

  return (
    <div className={`${size} ${ripples}`} style={rippleColor}>
      <div style={rippleColor}></div>
      <div style={rippleColor}></div>
    </div>
  );
};

export default LoadingSpinner;
