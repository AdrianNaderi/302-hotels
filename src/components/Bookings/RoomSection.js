const RoomSection = (props) => {
  return (
    <>
      <p>Room Details</p>
      <p>{props.room.id}</p>
      <p>{props.room.name}</p>
      <p>{props.room.class}</p>
      <p>{props.room.cost}</p>
      <p>{props.room.url}</p>
    </>
  );
};

export default RoomSection;
