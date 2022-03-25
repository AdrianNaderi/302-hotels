import classes from "./BookingList.module.css"

const BookingListItem = ({ id, hotel, room, user, details }) => {
  return (
    <>
      <div className={`row text-start ${classes["table-content"]}`}>
        <div className="col-2">{id}</div>
        <div className="col-2">{hotel.name}</div>
        <div className="col-1">{room.class}</div>
        <div className="col-1">{details.fromdate}</div>
        <div className="col-1">{details.todate}</div>
        <div className="col-1">{details.totalcost} SEK</div>
      </div>
    </>
  );
};

export default BookingListItem;
