import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { countries, countryCurrencies } from "../../lib/sd";
import DropDown from "../UI/DropDown";
import HotelProfileImg from "../UI/HotelProfileImg";
import Input from "../UI/Input";
import Range from "../UI/Range";

const HotelUpsertForm = () => {
  const hotel = useSelector((state) => state.search.single);

  const [name, setName] = useState({ value: "", hasError: true });
  const nameErrorMessage = "Needs to be atleast 5 chars long";
  const [location, setLocation] = useState("Country");
  const locationErrorMessage = "Please Select a Location.";
  const [nationalcurrency, setNationalcurrency] = useState("");
  const [description, setDescription] = useState({ value: "", hasError: true });
  const descriptionErrorMessage = "Needs to be atleast 5 chars long";
  const [rating, setRating] = useState(hotel === null ? 3.5 : hotel.rating);
  const [url, setUrl] = useState({ value: "", hasError: true });
  const urlErrorMessage = "Needs to be atleast 5 chars long";
  const [validForm, setValidForm] = useState(false);

  useEffect(() => {
    if (
      (name.hasError,
      location.hasError,
      nationalcurrency.hasError,
      description.hasError,
      rating.hasError,
      url.hasError)
    ) {
      setValidForm(false);
    } else {
      console.log("valid");
      setValidForm(true);
    }
  }, [name, location, nationalcurrency, description, url]);

  useEffect(() => {
    identifyCurrency(location);
  }, [location]);

  const identifyCurrency = (selectedCountry) => {
    const filtered = countryCurrencies.filter(
      (data) => data.country === selectedCountry
    );
    setNationalcurrency(filtered[0].currency);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hotel === null) {
      const submitHotel = {
        id: 0,
        name: name.value,
        location: location,
        description: description.value,
        nationalcurrency: nationalcurrency,
        rating: rating,
        url: url.value,
      };
      console.log(submitHotel);
    } else {
      const submitHotel = {
        id: hotel.id === null ? 0 : hotel.id,
        name: name.value,
        location,
        description: description.value,
        nationalcurrency,
        rating: rating,
        url: url.value,
      };
    }
  };

  return (
    <>
      <h1 className="display-3">{hotel === null ? "Add" : "Update"} Hotel</h1>
      <form className="container" onSubmit={handleSubmit}>
        <div className="col-4 m-2">
          <Input
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
          <div className="col-2 pt-2">
            {location === "Country" ? "" : `Currency: (${nationalcurrency})`}
          </div>
        </div>

        <div className="col-4 m-2">
          <Input
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
            type="text"
            label="Url"
            liftupInput={(url) => {
              setUrl(url);
            }}
            minimumChar={1}
          />
        </div>

        <HotelProfileImg url={url.value} />
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

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default HotelUpsertForm;
