import HotelUpsertForm from "../components/Forms/HotelUpsertForm";

const UpsertHotel = (props) => {
  console.log(props.hotel);
  return (
    <>
      <HotelUpsertForm hotel={props.hotel} returnBack={() => props.returnBack()} />
    </>
  );
};

export default UpsertHotel;
