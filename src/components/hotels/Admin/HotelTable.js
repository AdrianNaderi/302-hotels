import HotelTableItem from "./HotelTableItem";

const HotelTable = (props) => {
  const tableContent = props.hotels.map((hotel) => (
    <HotelTableItem
      key={hotel.id}
      hotel={hotel}
      onUpdate={(data) => {
        props.onUpdate(data);
      }}
    />
  ));

  console.log(props.hotels);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Location</th>
            <th>Currency</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{tableContent}</tbody>
      </table>
    </>
  );
};

export default HotelTable;
