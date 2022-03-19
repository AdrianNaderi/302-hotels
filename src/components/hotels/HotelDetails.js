import RoomList from "../Rooms/RoomList";
import HotelProfileImg from "../UI/HotelProfileImg";
import DisplayHotelDescription from "./DisplayHotelDescription";
import ServiceSection from "../layout/ServiceSection";
import classes from "./HotelDetails.module.css";
import CheckOut from "./CheckOut";
import { useState } from "react";
import { TimespanContextProvider } from "../../store/timespan-context";
import { useSelector } from "react-redux";

const HotelDetails = (props) => {
  const [activeRoom, setActiveRoom] = useState();
  const hotel = useSelector((state) => state.hotels.selection);
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
        <CheckOut room={activeRoom} hotel={hotel} />
      </TimespanContextProvider>
    </div>
  );
};

export default HotelDetails;
