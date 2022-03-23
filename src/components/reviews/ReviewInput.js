import React, { useRef } from "react";
const ReviewInput = (props) => {
  const textRef = useRef("");
  const submitReview = (event) => {
    console.log(textRef);
    event.preventDefault();
    let review = {
      user: "user",
      hotell: "ID",
      text: textRef.current.value,
      date: Date.now(),
    };

    props.addReview(review);
  };

  return (
    <React.Fragment>
      <div>
        <form onSubmit={submitReview}>
          <textarea type="text" ref={textRef}></textarea>
          <button type="submit">Submit Review</button>
        </form>
      </div>
    </React.Fragment>
  );
};
export default ReviewInput;
