import classes from "./Confirmation.module.css";

const ConfirmationText = ({ booking }) => {
  return (
    <>
      <p>
        You will be staying at {booking.hotel.name} in {booking.hotel.location}, {booking.hotel.city}.
      </p>
      <p>
        You will check in {booking.details.fromdate} and check out {booking.details.fromdate}({booking.details.timespan} nights).
      </p>
      <p>Description of the hotel: {booking.hotel.description} </p>
      <p>Please take note that {booking.hotel.nationalcurrency} is the national currency used for this location.</p>
      <p>A "{booking.room.class} Class" room will be prepared for you.</p>
      <p>
        The total cost of your stay is {booking.details.totalcost} SEK({booking.room.cost}/SEK per Night).
      </p>
      <p>Thank you for choosing 302-Hotels</p>
    </>
  );
};

export default ConfirmationText;
