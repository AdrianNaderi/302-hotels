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
