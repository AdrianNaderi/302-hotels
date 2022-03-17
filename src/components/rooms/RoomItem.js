import SelectionMarker from "../UI/SelectionMarker";
import classes from "./RoomItem.module.css";

const RoomItem = (props) => {
  const activecss = classes.active;
  const handleClick = () => {
    props.handleActiveSelection(props.room);
  };

  return (
    <div
      onClick={handleClick}
      className={`col-3 m-5 ${classes.card} ${
        props.activeSelection.id === props.room.id ? activecss : ""
      }`}
    >
      <img className={classes.room} src={props.room.url} alt="Of this room" />
      <h3>Room: {props.room.name}</h3>
      <h3>Comfort: {props.room.class}</h3>
      <h3>{props.room.cost} SEK/Night</h3>
      {props.activeSelection.id === props.room.id && <SelectionMarker />}
      {props.activeSelection.id !== props.room.id && (
        <div className={classes.inactive}></div>
      )}
    </div>
  );
};

export default RoomItem;
