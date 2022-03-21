import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HotelTable from "./HotelTable";
import { searchHotels } from "../../../store/search-slice";
import { deleteHotel, upsertHotel } from "../../../lib/hotelsapi";
import { Route, Routes, useNavigate } from "react-router-dom";
import UpsertHotel from "../../../pages/UpsertHotel";

const HotelManagement = () => {
  const fetched = useSelector((state) => state.search.fetched);
  const hotels = useSelector((state) => state.search.all);
  const [hotel, setHotel] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
  };

  const removeTest = () => {
    deleteHotel(dummyHotel);
  };

  const announceSelection = () => {
    console.log(hotel);
  };
  return (
    <>
      {fetched && (
        <HotelTable hotels={hotels} onSelect={(data) => setHotel(data)} />
      )}
      <button onClick={announceSelection}>Announce</button>
      <button onClick={removeTest}>Remove Hotel</button>

      <button onClick={() => navigate("upserthotel")}>Upsert</button>
      <Routes>
        <Route path="upserthotel" element={<UpsertHotel hotel={hotel} />} />
      </Routes>
    </>
  );
};

export default HotelManagement;
