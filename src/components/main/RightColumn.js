import React from "react";
import "./RightColumn.css";
import DUMMY_DATA from "../../dummyData";

const RightColumn = (props) => {
  let wichCard = props.bigCardId;
  let DUMMY_DATA_FILTERED = DUMMY_DATA.filter(element => element.id === wichCard)
  const array = [];

  for (const key in DUMMY_DATA_FILTERED){
    array.push(DUMMY_DATA_FILTERED[key]);
  }

  return (
    <section className="right-column">
      <div className="big-card-container">
        <div className="big-card">
          <img src={array[0].imgUrl} alt="bigcard" />
        </div>
      </div>
    </section>
  );
};

export default RightColumn;
