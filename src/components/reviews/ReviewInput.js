import React, { useState } from "react";
const ReviewInput = (props) => {
  const [text, setText] = useState();

  const submitReview = () => {};

  return (
    <React.Fragment>
      <div>
        <form onSubmit={submitReview}>
          <textarea type="text"></textarea>
        </form>

        <button type="submit"></button>
      </div>
    </React.Fragment>
  );
};
export default ReviewInput;
