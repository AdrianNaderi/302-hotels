const url =
  "https://usebookingmanagement-default-rtdb.firebaseio.com/hotels.json";

const transformData = (data) => {
  const loadedData = [];
  for (const key in data) {
    loadedData.push({
      id: key,
      name: data[key].name,
      description: data[key].description,
      location: data[key].location,
      rating: data[key].rating,
      nationalcurrency: data[key].nationalcurrency,
      url: data[key].url,
    });
  }
  return loadedData;
};

export const getHotels = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return transformData(data);
};
