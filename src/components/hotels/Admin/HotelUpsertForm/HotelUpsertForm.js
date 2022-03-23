import { useState, useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateHotelInCollection } from "../../../../lib/hotelfilters";
import { countries, countryCurrencies } from "../../../../lib/sd";
import { searchActions, searchHotels } from "../../../../store/search-slice";
import Rating from "../../../UI/Rating";
import CityInput from "./CityInput";
import CountryInput from "./CountryInput";
import DescriptionInput from "./DescriptionInput";
import ImagePreview from "./ImagePreview";
import NameInput from "./NameInput";
import RatingInput from "./RatingInput";
import UrlInput from "./UrlInput";

const hotelReducer = (currentHotel, action) => {
  let { id, name, location, city, nationalcurrency, description, rating, url } = currentHotel;
  switch (action.type) {
    case "NAME_INPUT":
      name = action.name;
      return { id, name, location, city, nationalcurrency, description, rating, url };

    case "COUNTRY_INPUT":
      location = action.country;
      nationalcurrency = action.currency;
      return { id, name, location, city, nationalcurrency, description, rating, url };

    case "CITY_INPUT":
      city = action.city;
      return { id, name, location, city, nationalcurrency, description, rating, url };

    case "RATING_INPUT":
      rating = action.rating;
      return { id, name, location, city, nationalcurrency, description, rating, url };

    case "DESCRIPTION_INPUT":
      description = action.description;
      return { id, name, location, city, nationalcurrency, description, rating, url };

    case "URL_INPUT":
      url = action.url;
      return { id, name, location, city, nationalcurrency, description, rating, url };
    default:
      console.log("hotelReducer could not catch this case " + action.type);
  }
};

const hotelInitializer = (hotel) => {
  if (hotel === null) {
    return { id: null, name: "", location: "Country", city: "", nationalcurrency: "", description: "", rating: 3.5, url: "" };
  } else {
    return { id: hotel.id, name: hotel.name, location: hotel.location, city: hotel.city, nationalcurrency: hotel.nationalcurrency, description: hotel.description, rating: hotel.rating, url: hotel.url };
  }
};

const HotelUpsertForm = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initHotel = useSelector((state) => state.search.single);
  const index = useSelector((state) => state.search.lastId);
  const hotels = useSelector((state) => state.search.all);

  const [hotel, dispatchHotel] = useReducer(hotelReducer, initHotel, hotelInitializer);
  const [name, setName] = useState(hotel === null ? { value: "", hasError: true } : { value: hotel.name, hasError: false });

  const [validImg, setValidImg] = useState(hotel === null ? false : true);
  const [validForm, setValidForm] = useState(true);

  const nameErrorMessage = "Needs to be atleast 5 chars long";
  const locationErrorMessage = "Please Select a Location.";

  const handleError = () => {
    setValidImg(false);
  };

  const navigateToTable = () => {
    navigate("/admin/hotels");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validForm) {
      const submitHotel = {
        id: hotel.id === null ? index + 1 : hotel.id,
        name: hotel.name,
        location: hotel.location,
        city: hotel.city,
        description: hotel.description,
        nationalcurrency: hotel.nationalcurrency,
        rating: hotel.rating,
        url: hotel.url,
      };
      if (hotel.id === null) {
        updateHotelInCollection(hotels, submitHotel);
        dispatch(searchActions.addHotel({ hotel: submitHotel }));
      } else {
        const updatedhotels = updateHotelInCollection(hotels, submitHotel);
        dispatch(searchActions.updateHotel({ updatedhotels }));
      }
      navigate("/admin/hotels");
    }
  };
  const identifyCurrency = (selectedCountry) => {
    const filtered = countryCurrencies.filter((data) => data.country === selectedCountry);
    return filtered[0].currency;
  };

  const manageCountry = (country) => {
    const currency = identifyCurrency(country);
    dispatchHotel({ type: "COUNTRY_INPUT", country, currency });
  };
  return (
    <>
      <button className="btn btn-primary" onClick={() => console.log(hotel)}>
        Check out Hotel
      </button>
      <div className="ms-5">
        <h1 className="ms-5 display-3">{hotel.id === null ? "Add" : "Update"} Hotel</h1>
      </div>
      <form className="container" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-5">
            <NameInput value={hotel.name} liftupInput={(name) => dispatchHotel({ type: "NAME_INPUT", name: name.value })} errorMessage={nameErrorMessage} />
            <DescriptionInput value={hotel.description} liftupInput={(description) => dispatchHotel({ type: "DESCRIPTION_INPUT", description: description.value })} />
            <div className="row">
              <CityInput value={hotel.city} liftupInput={(city) => dispatchHotel({ type: "CITY_INPUT", city: city.value })} />
              <CountryInput current={hotel.location} data={countries} handleCountry={(country) => manageCountry(country)} error={locationErrorMessage} currency={hotel.nationalcurrency} />
            </div>
          </div>
          <div className="col-5">
            <UrlInput value={hotel.url} liftupInput={(url) => dispatchHotel({ type: "URL_INPUT", url: url.value })} />
            <ImagePreview isvalid={validImg} url={hotel.url} handleError={handleError} />
            <RatingInput value={hotel.rating} handleRange={(rating) => dispatchHotel({ type: "RATING_INPUT", rating })} />
            <div className="m-4">
            <Rating rating={hotel.rating}/>
            </div>
            <div className="text-end">
              <button
                className="m-4 btn btn-danger w-25"
                type="button"
                onClick={() => {
                  navigate("/admin/hotels");
                }}
              >
                Cancel
              </button>
              <button className="btn btn-primary w-25" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default HotelUpsertForm;
