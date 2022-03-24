import Input from "../../../UI/Input";
import Range from "../../../UI/Range";

const RatingInput = (props) => {
  return (
    <>
      <div className="m-4">
        <Range label="Rating" min={0} max={5} step={0.1} value={props.value} handleRange={props.handleRange} />
      </div>
    </>
  );
};

export default RatingInput;
