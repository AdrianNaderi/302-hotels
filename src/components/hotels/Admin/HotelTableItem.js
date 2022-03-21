const HotelTableItem = (props) => {
  return (
    <tr>
      <td>{props.hotel.name}</td>
      <td>{`${props.hotel.description.substring(0, 55)}...`}</td>
      <td>{props.hotel.nationalcurrency}</td>
      <td>{props.hotel.rating}</td>
      <td>
        <button>Update</button>
        <button>Delete</button>
      </td>
    </tr>
  );
};
export default HotelTableItem;
