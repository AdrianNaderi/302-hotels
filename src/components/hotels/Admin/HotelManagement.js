import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HotelTable from "./HotelTable";
import { searchActions, searchHotels } from "../../../store/search-slice";
import { deleteHotel, upsertHotel } from "../../../lib/hotelsapi";
import { Route, Routes, useNavigate } from "react-router-dom";
import UpsertHotel from "../../../pages/UpsertHotel";

const HotelManagement = () => {
  const fetched = useSelector((state) => state.search.fetched);
  const hotels = useSelector((state) => state.search.all);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!fetched) {
      dispatch(searchHotels());
    }
  }, []);

  const goToAdd = () => {
    dispatch(searchActions.clearOne());
    navigate("/admin/upserthotel");
  };

  const goToUpdate = (data) => {
    dispatch(searchActions.storeId({ id: data.id }));
    dispatch(searchActions.storeOne());
    navigate("/admin/upserthotel");
  };

  return (
    <>
      {fetched && (
        <>
          <HotelTable
            hotels={hotels}
            onDelete={(hotelId) => {
              dispatch(searchActions.deleteHotel({ removeid: hotelId }));
            }}
            onUpdate={(data) => goToUpdate(data)}
          />

          {/* <button onClick={removeTest}>Add Hotel</button> */}
          <button onClick={goToAdd}>Go To Upsert</button>
        </>
      )}
    </>
  );
};

export default HotelManagement;
