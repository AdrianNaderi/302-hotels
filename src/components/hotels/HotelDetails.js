import RoomList from "../rooms/RoomList";
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
        <ServiceSection>
          <p>Place Currency component here</p>
        </ServiceSection>
      </div>
      <RoomList selectRoom={handleRoomSelection} />
      <TimespanContextProvider>
        <CheckOut cancelDetails={handleCancelDetails} room={activeRoom} />
      </TimespanContextProvider>
    </div>
  );
};

export default HotelDetails;
