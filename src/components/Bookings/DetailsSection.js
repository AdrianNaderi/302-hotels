const DetailsSection = (props) => {
  return (
    <>
      <p>Details</p>
      <p>Checkin Date: {props.details.fromdate}</p>
      <p>Checkout Date: {props.details.todate}</p>
      <p>Nights Booked: {props.details.timespan}</p>
      <p>Total Cost: {props.details.totalcost} SEK</p>
      <p>BookingDate: {props.details.bookingdate}</p>
    </>
  );
};

export default DetailsSection;
