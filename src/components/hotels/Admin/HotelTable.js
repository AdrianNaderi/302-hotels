import HotelTableItem from "./HotelTableItem";
import classes from "./HotelTable.module.css";
const HotelTable = (props) => {
  const tableContent = props.hotels.map((hotel) => (
    <HotelTableItem
      key={hotel.id}
      hotel={hotel}
      onDelete={(hotelId) => props.onDelete(hotelId)}
      onUpdate={(data) => {
        props.onUpdate(data);
      }}
    />
  ));

  console.log(props.hotels);
  return (
    <>
      <div className={`${classes.table}`}>
        <table className="text-start">
          <thead className={classes["table-head"]}>
            <tr className={`${classes["tr-row"]}`}>
              <th className={classes["th-name"]}>NAME</th>
              <th className={classes["th-description"]}>DESCRIPTION</th>
              <th className={classes["th-location"]}>LOCATION</th>
              <th className={classes["th-currency"]}>CURRENCY</th>
              <th className={classes["th-rating"]}>RATING</th>
              <th className={classes["th-empty"]}>
                <button className={`${classes["add-btn"]} btn`} onClick={props.goToAdd}>
                  <p className={classes["add-text"]}>+</p>
                </button>
              </th>
            </tr>
          </thead>
          <tbody className={`${classes["table-body"]}`}>{tableContent}</tbody>
        </table>
      </div>
    </>
  );
};

export default HotelTable;
