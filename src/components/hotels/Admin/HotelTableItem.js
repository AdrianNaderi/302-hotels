const HotelTableItem = (props) => {
  const hotel = props.hotel;
  return (
    <tr>
      <td>{props.hotel.name}</td>
      <td>{`${props.hotel.description.substring(0, 55)}...`}</td>
      <td>
        {props.hotel.location}, {props.hotel.city}
      </td>
      <td>{props.hotel.nationalcurrency}</td>
      <td>{props.hotel.rating}</td>
      <td>
        <div className="btn-group">
          <button className="btn btn-primary" onClick={() => props.onUpdate(hotel)}>
            Update
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              props.onDelete(props.hotel.id);
            }}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};
export default HotelTableItem;
