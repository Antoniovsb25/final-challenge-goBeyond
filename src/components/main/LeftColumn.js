import React, { useState } from "react";
import RightColumn from './RightColumn'
import "./LeftColumn.css";
import DUMMY_DATA from "../../dummyData";

const LeftColumn = () => {
  const [selectId, setSelectId] = useState(0);
  const handleBorder1 = () => {
    setSelectId(0);
  };
  const handleBorder2 = () => {
    setSelectId(1);
  };
  const handleBorder3 = () => {
    setSelectId(2);
  };
  const handleBorder4 = () => {
    setSelectId(3);
  };
  return (
    <div className="column-wrapper">
      <section className="left-column">
        <div className="title-and-button">
          <h1 className="title">{DUMMY_DATA[selectId].title}</h1>
          <button className="see-more">veja mais</button>
        </div>
        <div className="card-container">
          <div
            className={selectId === 0 ? "card-active" : "card"}
            onClick={handleBorder1}
          >
            <img src={DUMMY_DATA[0].thumb} alt="thumb" />
          </div>
          <div
            className={selectId === 1 ? "card-active" : "card"}
            onClick={handleBorder2}
          >
            <img src={DUMMY_DATA[1].thumb} alt="thumb" />
          </div>
          <div
            className={selectId === 2 ? "card-active" : "card"}
            onClick={handleBorder3}
          >
            <img src={DUMMY_DATA[2].thumb} alt="thumb" />
          </div>
          <div
            className={selectId === 3 ? "card-active" : "card"}
            onClick={handleBorder4}
          >
            <img src={DUMMY_DATA[3].thumb} alt="thumb" />
          </div>
        </div>
      </section>
      <RightColumn bigCardId={selectId}/>
    </div>
  );
};

export default LeftColumn;
