import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HotelTable from "./HotelTable";
import { searchHotels } from "../../../store/search-slice";
import { deleteHotel, upsertHotel } from "../../../lib/hotelsapi";

const HotelManagement = () => {
  const fetched = useSelector((state) => state.search.fetched);
  const hotels = useSelector((state) => state.search.all);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!fetched) {
      dispatch(searchHotels());
    }
  }, []);

  const dummyHotel = {
    id: "testId",
    name: "Baka",
    description: "testDescription",
    location: "testLocation",
    rating: 5,
    nationalcurrency: "testCurrency",
    url: "testImg",
  };

  const handleTest = () => {
    const data = upsertHotel(dummyHotel);
    console.log(data);
  };

  const removeTest = () => {
    deleteHotel(dummyHotel);
  };
  return (
    <>
      {fetched && <HotelTable hotels={hotels} />}
      <button onClick={handleTest}>Add Hotel</button>
      <button onClick={removeTest}>Remove Hotel</button>
    </>
  );
};

export default HotelManagement;
