import HotelUpsertForm from "../components/Hotels/Admin/HotelUpsertForm/HotelUpsertForm";

const UpsertHotel = (props) => {
  console.log(props.hotel);
  return (
    <>
      <HotelUpsertForm
        hotel={props.hotel}
        returnBack={() => props.returnBack()}
      />
    </>
  );
};

export default UpsertHotel;
