import RoomList from "../rooms/RoomList";
import DateTimePicker from "../UI/DateTimePicker";
import HotelProfileImg from "../UI/HotelProfileImg";
import DisplayHotelDescription from "./DisplayHotelDescription";
import ServiceSection from "../layout/ServiceSection";
import classes from "./HotelDetails.module.css";
import CheckOut from "./CheckOut";
const HotelDetails = (props) => {
  const hotel = props.details;
  const handleCancelDetails = () => {
    props.cancelDetails();
  };

  return (
    <div className={classes.details}>
      <HotelProfileImg url={hotel.url} />
      <DisplayHotelDescription hotel={hotel} />
      <div className={classes.components}>
        <ServiceSection>
          <p>Place Weather component here</p>
        </ServiceSection>
        <ServiceSection>
          <p>Place Currency component here</p>
        </ServiceSection>
      </div>
      <RoomList />
      <CheckOut cancelDetails={handleCancelDetails} />
    </div>
  );
};

export default HotelDetails;
