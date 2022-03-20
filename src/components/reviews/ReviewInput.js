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
      </div>
    </React.Fragment>
  );
};
export default ReviewInput;
