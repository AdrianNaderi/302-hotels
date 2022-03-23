import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateHotelInCollection } from "../../lib/hotelfilters";
import { countries, countryCurrencies } from "../../lib/sd";
import { searchActions, searchHotels } from "../../store/search-slice";
import DropDown from "../UI/DropDown";
import HotelProfileImg from "../UI/HotelProfileImg";
import Input from "../UI/Input";
import Range from "../UI/Range";

const HotelUpsertForm = (props) => {
  const hotelCopy = useSelector((state) => state.search.single);
  const [hotel, setHotel] = useState(hotelCopy);
  console.log(hotel);
  const index = useSelector((state) => state.search.lastId);
  const hotels = useSelector((state) => state.search.all);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState(
    hotel === null
      ? { value: "", hasError: true }
      : { value: hotel.name, hasError: false }
  );

  const [location, setLocation] = useState(
    hotel === null
      ? "Country"
      : hotel.location);


  const [nationalcurrency, setNationalcurrency] = useState(
    hotel === null ? "" : hotel.nationalcurrency
  );

  const [description, setDescription] = useState(
    hotel === null
      ? { value: "", hasError: true }
      : { value: hotel.description, hasError: false }
  );
  const [rating, setRating] = useState(hotel === null ? 3.5 : hotel.rating);
  const [url, setUrl] = useState(
    hotel === null
      ? { value: "", hasError: true }
      : { value: hotel.url, hasError: false }
  );
  const [validImg, setValidImg] = useState(hotel === null ? false : true);
  const [validForm, setValidForm] = useState(hotel === null ? false : true);
  const nameErrorMessage = "Needs to be atleast 5 chars long";
  const locationErrorMessage = "Please Select a Location.";

  const identifyCurrency = (selectedCountry) => {
    const filtered = countryCurrencies.filter(
      (data) => data.country === selectedCountry
    );
    setNationalcurrency(filtered[0].currency);
  };

  useEffect(() => {
    identifyCurrency(location);
  }, [location]);

  useEffect(() => {
    if (
      name.hasError ||
      location === "Country" ||
      description.hasError ||
      !validImg
    ) {
      setValidForm(false);
    } else {
      console.log("valid");
      setValidForm(true);
    }
  }, [name, location, description, validImg]);

  const handleError = () => {
    setValidImg(false);
  };

  const navigateToTable = () => {
    props.returnBack();
    navigate("/admin/hotels");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validForm) {
      const submitHotel = {
        id: hotel === null ? index + 1 : hotel.id,
        name: name.value,
        location: location,
        description: description.value,
        nationalcurrency,
        rating: rating,
        url: url.value,
      };
      console.log(submitHotel);
      identifyCurrency(hotel.location);
      if (hotel === null) {
        updateHotelInCollection(hotels, submitHotel);
        // dispatch(upsertHotel(submitHotel, "add"));
      } else {
        const updatedhotels = updateHotelInCollection(hotels, submitHotel);
        dispatch(searchActions.updateHotel({ updatedhotels }));
      }
      navigate("/admin/hotels");
    }
  };

  return (
    <>
      <h1 className="display-3">{hotel === null ? "Add" : "Update"} Hotel</h1>
      <form className="container" onSubmit={handleSubmit}>
        <div className="col-4 m-2">
          <Input
            value={name.value}
            type="text"
            label="Hotel Name"
            liftupInput={(name) => {
              setName(name);
            }}
            minimumChar={5}
            errorMessage={nameErrorMessage}
          />
        </div>

        <div className="row">
          <div className="col-4 m-2">
            <DropDown
              style="form-select"
              current={location}
              data={countries}
              handleCountry={(country) => setLocation(country)}
            ></DropDown>
          </div>
          <div className="col-5 pt-2">
            {location === "Country"
              ? `${locationErrorMessage}`
              : `Currency: (${nationalcurrency})`}
          </div>
        </div>

        <div className="col-4 m-2">
          <Input
            value={description.value}
            type="text"
            label="Description"
            liftupInput={(description) => {
              setDescription(description);
            }}
            minimumChar={1}
            errorMessage={nameErrorMessage}
          />
        </div>
        <div className="col-4 m-2">
          <Range
            label="Rating"
            min={0}
            max={5}
            step={0.1}
            init={rating}
            rangevalue={rating}
            handleRange={(val) => setRating(val)}
          />
        </div>
        <div className="col-4 m-2 mb-5">
          <Input
            value={url.value}
            type="text"
            label="Url"
            liftupInput={(url) => {
              setValidImg(true);
              setUrl(url);
            }}
            minimumChar={1}
          />
        </div>

        <HotelProfileImg url={url.value} handleError={handleError} />

        <button
          className="btn btn-danger"
          type="button"
          onClick={() => {
            navigate("/admin/hotels");
          }}
        >
          Back
        </button>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default HotelUpsertForm;
