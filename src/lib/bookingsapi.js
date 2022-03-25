const url = "https://usebookingmanagement-default-rtdb.firebaseio.com/bookings.json";

export const postBooking = async (data) => {
  const response = await fetch(url, {
    method: "Post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
};

const transformData = (data) => {
  const loadedData = [];
  for (const key in data) {
    loadedData.push({ id: key, user: data[key].user, hotel: data[key].hotel, room: data[key].room, details: data[key].details });
  }
  return loadedData;
};

export const getBookings = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return transformData(data);
};

export const filterUserBookings = (data, user) => {
  return data.filter((booking) => booking.user === user.user);
};
