const filterSearch = (name, search) => {
  return name.toLowerCase().includes(search.toLowerCase());
};

const filterCountry = (countrySelection, country) => {
  return countrySelection.toLowerCase().includes(country.toLowerCase());
};

export const filterHotel = (loadedData, id) => {
  for (const key in loadedData) {
    if (loadedData[key].id === id) {
      return loadedData[key];
    }
  }
};

export const updateHotelInCollection = (collection, hotel) => {
  return collection.map((obj) => (obj.id === hotel.id ? hotel : obj));
};

export const deleteHotelInCollection = (collection, id) => {
  return collection.filter((hotel) => hotel.id != id);
};
export const filterHotels = (loadedData, search, country) => {
  if (search.trim().length === 0 && country === "Country") {
    loadedData = loadedData;
  } else if (search.trim().length === 0 && country !== "Country") {
    loadedData = loadedData.filter((data) => filterCountry(data.location, country));
  } else if (search.trim().length !== 0 && country === "Country") {
    loadedData = loadedData.filter((data) => filterSearch(data.name, search));
  } else {
    loadedData = loadedData.filter((data) => filterCountry(data.location, country) && filterSearch(data.name, search));
  }
  return loadedData;
};
