import classes from "./SelectionMarker.module.css";

const SelectionMarker = () => {
  return (
    <div className={classes.circle}>
      <i className={`bi bi-check-circle-fill ${classes.checkmark}`}></i>
    </div>
  );
};

export default SelectionMarker;
