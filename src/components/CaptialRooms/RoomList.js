import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import useHttpGet from "../../hooks/useHttpGet";
import RoomItem from "./RoomItem";

const RoomList = (props) => {
  const loggedin = useSelector((state) => state.auth.loggedIn);
  const [rooms, setRooms] = useState([]);
  const { fetchDataHandler } = useHttpGet({
    url: "https://usebookingmanagement-default-rtdb.firebaseio.com/rooms.json",
  });
  const [activeSelection, setActiveSelection] = useState("");
  const handleActiveSelection = (room) => {
    setActiveSelection(room);
    props.selectRoom(room);
  };

  const handleSearch = useCallback(async () => {
    const allRooms = await fetchDataHandler();
    const transformedData = transformData(allRooms);
    setRooms(transformedData);
  }, [fetchDataHandler]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  const transformData = (data) => {
    const loadedData = [];
    for (const key in data) {
      loadedData.push({
        id: key,
        class: data[key].class,
        cost: data[key].cost,
        name: data[key].name,
        url: data[key].url,
      });
    }
    return loadedData;
  };
  const roomList = rooms.map((room) => <RoomItem key={room.id} room={room} activeSelection={activeSelection} handleActiveSelection={handleActiveSelection} />);

  return (
    <>
      {loggedin && <p className="lead fw-bold">Select a room</p>}
      {!loggedin && <p className="lead fw-bold">Login to select a room</p>}
      {roomList}
    </>
  );
};

export default RoomList;
