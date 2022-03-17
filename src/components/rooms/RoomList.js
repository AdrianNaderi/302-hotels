import { useState, useEffect, useCallback } from "react";
import useHttpGet from "../../hooks/useHttpGet";
import RoomItem from "./RoomItem";
import classes from "./RoomList.module.css";

const RoomList = (props) => {
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
    console.log(transformedData);
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
  const roomList = rooms.map((room) => (
    <RoomItem
      key={room.id}
      room={room}
      activeSelection={activeSelection}
      handleActiveSelection={handleActiveSelection}
    />
  ));

  return <div className={classes.rooms}>{roomList}</div>;
};

export default RoomList;
