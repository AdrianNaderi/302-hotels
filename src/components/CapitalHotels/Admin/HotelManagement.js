import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HotelTable from "./HotelTable";
import { searchActions } from "../../../store/search-slice";
import { deleteHotel, upsertHotel } from "../../../lib/hotelsapi";
import { Route, Routes, useNavigate } from "react-router-dom";
import UpsertHotel from "../../../pages/UpsertHotel";
import LoadingSpinner from "../../UI/LoadingSpinner";
import classes from "./HotelManagement.module.css";
import { searchHotelsAsync } from "../../../store/http-slice";

const HotelManagement = () => {
  const loading = useSelector((state) => state.http.loading);
  const fetched = useSelector((state) => state.search.fetched);
  const hotels = useSelector((state) => state.search.all);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!fetched) {
      dispatch(searchHotelsAsync());
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
      {loading && (
        <div className={`${classes.spinnerpos} text-center`}>
          <LoadingSpinner size="large" color="#973b50" />
        </div>
      )}
      {fetched && (
        <>

          <br></br>
          <HotelTable
            hotels={hotels}
            goToAdd={goToAdd}
            onDelete={(hotelId) => {
              dispatch(searchActions.deleteHotel({ removeid: hotelId }));
            }}
            onUpdate={(data) => goToUpdate(data)}
          />
        </>
      )}
    </>
  );
};

export default HotelManagement;
