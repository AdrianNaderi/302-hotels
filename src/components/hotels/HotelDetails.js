import RoomList from "../Rooms/RoomList";
import HotelProfileImg from "../UI/HotelProfileImg";
import DisplayHotelDescription from "./DisplayHotelDescription";
import ServiceSection from "../layout/ServiceSection";
import classes from "./HotelDetails.module.css";
import CheckOut from "./CheckOut";
import { useState } from "react";
import { TimespanContextProvider } from "../../store/timespan-context";

const HotelDetails = (props) => {
  const [activeRoom, setActiveRoom] = useState();
  const hotel = props.details;
  const handleCancelDetails = () => {
    props.cancelDetails();
  };
  const handleRoomSelection = (room) => {
    setActiveRoom(room);
  };
  return (
    <div className={classes.details}>
      <HotelProfileImg url={hotel.url} />
      <DisplayHotelDescription hotel={hotel} />
      <div className={classes.components}>
        <ServiceSection>
          <p>Place Weather component here</p>
        </ServiceSection>
        <ServiceSection></ServiceSection>
      </div>
      <RoomList selectRoom={handleRoomSelection} />
      <TimespanContextProvider>
        <CheckOut
          cancelDetails={handleCancelDetails}
          room={activeRoom}
          hotel={hotel}
          onBooking={(booking) => props.onBooking(booking)}
        />
      </TimespanContextProvider>
    </div>
  );
};

export default HotelDetails;
