const HotelTableItem = (props) => {
  const hotel = props.hotel;
  return (
    <tr>
      <td>{props.hotel.name}</td>
      <td>{`${props.hotel.description.substring(0, 55)}...`}</td>
      <td>{props.hotel.nationalcurrency}</td>
      <td>{props.hotel.rating}</td>
      <td>
        <button onClick={() => props.onSelect(hotel)}>Select</button>
        <button>Update</button>
        <button>Delete</button>
      </td>
    </tr>
  );
};
export default HotelTableItem;
