import React, { useState, useEffect } from "react";
import RightColumn from "./RightColumn";
import "./LeftColumn.css";
import DUMMY_DATA from "../../dummyData";

const LeftColumn = () => {
  const [selectId, setSelectId] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedData, setLoadedData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    setSelectId(0)
    fetch(
      `https://my-json-server.typicode.com/Antoniovsb25/api-finalchallenge-gobeyond/dados`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setLoadedData(data);
        console.log(data[selectId])
      });
  }, []);

  const handleBorder1 = () => {
    setSelectId(0);
    console.log(loadedData[0]);
  };
  const handleBorder2 = () => {
    setSelectId(1);
    console.log(loadedData[1]);
  };
  const handleBorder3 = () => {
    setSelectId(2);
    console.log(loadedData[2]);
  };
  const handleBorder4 = () => {
    setSelectId(3);
    console.log(loadedData[3]);
  };

  if (isLoading) {
    return (
      <section>
        <p className="loading-msg">Carregando...</p>
      </section>
    );
  }

  return (
    <div className="column-wrapper">
      <section className="left-column">
        <div className="title-and-button">
          <h1 className="title">{DUMMY_DATA[selectId].title}</h1>
          <a
            href="https://www.corebiz.ag/pt/"
            target="_blank"
            rel="noreferrer"
            className="see-more"
          >
            Veja Mais
          </a>
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
      <RightColumn bigCardId={selectId} arrivedData={loadedData}/>
    </div>
  );
};

export default LeftColumn;
