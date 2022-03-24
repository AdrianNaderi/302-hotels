import SelectionMarker from "../UI/SelectionMarker";
import classes from "./RoomItem.module.css";

const RoomItem = (props) => {
  const handleClick = () => {
    props.handleActiveSelection(props.room);
  };

  return (
    <div>
      <div onClick={handleClick} className={`${classes.card} ${props.activeSelection.id === props.room.id ? classes.active : ""}`}>
        <h3 className={`lead fw-bolder ${classes.titletext}`}>{props.room.name}</h3>
        <p className={`lead ${classes.comforttext}`}>{props.room.class}</p>

        <div className={classes.img}>
          <img className={classes.room} src={props.room.url} alt="Of this room" />
        </div>
        <p className={`${classes.pricetext}`}>{props.room.cost} SEK/Night</p>
        {props.activeSelection.id === props.room.id && <SelectionMarker />}
      </div>
    </div>
  );
};

export default RoomItem;
