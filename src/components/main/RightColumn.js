import React from "react";
import "./RightColumn.css";

const RightColumn = (props) => {
  const wichCard = props.bigCardId;
  const array = props.arrivedData

  return (
    <section className="right-column">
      <div className="big-card-container">
        <div className="big-card">
          <img src={array[wichCard]?.imgUrl} alt="bigcard" />
        </div>
      </div>
    </section>
  );
};

export default RightColumn;
