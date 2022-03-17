import { useState, useEffect } from "react";
import useHttpGet from "../../hooks/useHttpGet";
import RoomItem from "./RoomItem";

const RoomList = (props) => {
  const [rooms, setRooms] = useState([]);
  const { fetchDataHandler } = useHttpGet({
    url: "https://usebookingmanagement-default-rtdb.firebaseio.com/rooms.json",
  });

  const handleSearch = async () => {
    const allRooms = await fetchDataHandler();
    const transformedData = transformData(allRooms);
    setRooms(transformedData);
    console.log(transformedData);
  };

  useEffect(() => {
    handleSearch();
  }, []);

  const transformData = (data) => {
    const loadedData = [];
    for (const key in data) {
      loadedData.push({
        id: key,
        class: data[key].class,
        cost: data[key].cost,
        name: data[key].name,
      });
    }
    return loadedData;
  };
  const roomList = rooms.map((room) => <RoomItem key={room.id} room={room} />);

  return <div>{roomList}</div>;
};

export default RoomList;
