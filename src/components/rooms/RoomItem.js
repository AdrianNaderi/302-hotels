const RoomItem = (props) => {
  return (
    <div>
      <hr />
      <h3>{props.room.name}</h3>
      <h3>{props.room.class}</h3>
      <h3>{props.room.cost}</h3>
      <button>Select</button>
      <hr />
    </div>
  );
};

export default RoomItem;
