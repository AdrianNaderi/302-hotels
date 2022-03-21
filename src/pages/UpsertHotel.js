import { Outlet } from "react-router-dom";
import HotelUpsertForm from "../components/Forms/HotelUpsertForm";

const UpsertHotel = (props) => {
  return (
    <>
      <Outlet />
      <HotelUpsertForm hotel={props.hotel}/>
    </>
  );
};

export default UpsertHotel;
