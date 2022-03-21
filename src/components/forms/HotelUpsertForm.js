import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countries, countryCurrencies } from "../../lib/sd";
import { searchActions, searchHotels } from "../../store/search-slice";
import DropDown from "../UI/DropDown";
import HotelProfileImg from "../UI/HotelProfileImg";
import Input from "../UI/Input";
import Range from "../UI/Range";

const HotelUpsertForm = (props) => {
  //   const hotel = useSelector((state) => state.search.single);
  const hotel = props.hotel;
  const hotels = useSelector((state) => state.search.all);

  const [name, setName] = useState(
    hotel === null
      ? { value: "", hasError: true }
      : { value: hotel.name, hasError: false }
  );

  const [location, setLocation] = useState("Country");

  const [nationalcurrency, setNationalcurrency] = useState("");

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
  const [validImg, setValidImg] = useState(false);
  const [validForm, setValidForm] = useState(false);
  const nameErrorMessage = "Needs to be atleast 5 chars long";
  const locationErrorMessage = "Please Select a Location.";
  const identifyCurrency = (selectedCountry) => {
    const filtered = countryCurrencies.filter(
      (data) => data.country === selectedCountry
    );
    setNationalcurrency(filtered[0].currency);
  };

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

  useEffect(() => {
    identifyCurrency(location);
  }, [location]);

  useEffect(() => {
    if (hotel === null) {
      setLocation("Country");
    } else {
      setLocation(hotel.location.substring(0, hotel.location.indexOf(",")));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(location);
    console.log(nationalcurrency);
    console.log(description);
    console.log(rating);
    console.log(url);

    if (validForm) {
      const submitHotel = {
        id: hotel === null ? 0 : hotel.id,
        name: name.value,
        location: location,
        description: description.value,
        nationalcurrency: nationalcurrency,
        rating: rating,
        url: url.value,
      };
      if (hotel === null) {
        //send PutRequest - update
      } else {
        //send PostRequest - find last index.
      }
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
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default HotelUpsertForm;
