import classes from "./HotelTable.module.css";

const HotelTableItem = (props) => {
  const hotel = props.hotel;
  return (
    <tr className={`${classes["tr-row"]}`}>
      <td className={classes["tr-name"]}>{props.hotel.name}</td>
      <td className={classes["tr-description"]}>{`${props.hotel.description.substring(0, 55)}...`}</td>
      <td className={classes["tr-location"]}>
        {props.hotel.location}, {props.hotel.city}
      </td>
      <td className={classes["tr-currency"]}>{props.hotel.nationalcurrency}</td>
      <td className={classes["tr-rating"]}>{props.hotel.rating}</td>
      <td className={classes["tr-empty"]}>
        <div className="btn-group">
          <button className={`${classes["update-button"]} btn`} onClick={() => props.onUpdate(hotel)}>
            UPDATE
          </button>
          <button
            className={`${classes["delete-button"]} btn`}
            onClick={() => {
              props.onDelete(props.hotel.id);
            }}
          >
            -
          </button>
        </div>
      </td>
    </tr>
  );
};
export default HotelTableItem;
