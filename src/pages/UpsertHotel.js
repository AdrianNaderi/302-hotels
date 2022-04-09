import HotelUpsertForm from "../components/CapitalHotels/Admin/HotelUpsertForm/HotelUpsertForm";

const UpsertHotel = (props) => {
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
