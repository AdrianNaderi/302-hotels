import useHttpGet from "../../hooks/useHttpGet";

const HotelSearch = (props) => {
  const { fetchDataHandler } = useHttpGet({
    url: "https://usebookingmanagement-default-rtdb.firebaseio.com/hotels.json",
  });

  const handleSearch = async () => {
    const allHotels = await fetchDataHandler();
    const transformedData = transformData(allHotels);
    console.log(transformedData);
    props.onSearch(transformedData);
  };

  const transformData = (data) => {
    const loadedData = [];
    for (const key in data) {
      loadedData.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        location: data[key].location,
        rating: data[key].rating,
      });
    }
    return loadedData;
  };

  return (
    <div>
      <button onClick={handleSearch}>Get all hotels</button>
    </div>
  );
};

export default HotelSearch;
