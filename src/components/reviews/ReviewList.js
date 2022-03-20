import React from "react";
const ReviewList = (props) => {
  return (
    <React.Fragment>
      <div>
        
        <h2>{props.Username}</h2>
      </div>
      <div>
        
        <h4>{props.Text}</h4>
      </div>
    </React.Fragment>
  );
};

export default ReviewList;
