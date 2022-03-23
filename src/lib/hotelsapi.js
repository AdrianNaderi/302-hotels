const url =
  "https://usebookingmanagement-default-rtdb.firebaseio.com/hotels.json";

const transformData = (data) => {
  const loadedData = [];
  for (const key in data) {
    if (data[key]) {
      loadedData.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        location: data[key].location,
        city:data[key].city,
        rating: data[key].rating,
        nationalcurrency: data[key].nationalcurrency,
        url: data[key].url,
      });
    }
  }
  return loadedData;
};

export const getHotels = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return transformData(data);
};

export const upsertHotel = async (hotel) => {
  const response = await fetch(
    `https://usebookingmanagement-default-rtdb.firebaseio.com/hotels/${hotel.id}.json`,
    {
      method: "PUT",
      body: JSON.stringify({
        id: hotel.id,
        name: hotel.name,
        description: hotel.description,
        location: hotel.location,
        city:hotel.city,
        rating: hotel.rating,
        nationalcurrency: hotel.nationalcurrency,
        url: hotel.url,
      }),
      headers: {
        "Content-Type": "applicatoin/json",
      },
    }
  );
  let data = await response.json();
  return transformData(data);
};

export const deleteHotel = async (hotel) => {
  const response = await fetch(
    `https://usebookingmanagement-default-rtdb.firebaseio.com/hotels/${hotel.id}.json`,
    {
      method: "DELETE",
    }
  );
  let data = await response.json();
  console.log(data);
};
