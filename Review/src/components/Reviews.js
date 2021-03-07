import React, { useState } from "react";
import reviews from "../data";
const Reviews = () => {
  const [i, setI] = useState(0);
  const { name, job, text, image } = reviews[i];

  const checkNum = (num) => {
    if (num > reviews.length - 1) {
      return 0;
    }
    if (num < 0) {
      return reviews.length - 1;
    }
    return num;
  };

  const left = () => {
    setI((i) => {
      let newI = i - 1;
      return checkNum(newI);
    });
  };

  const right = () => {
    setI((i) => {
      let newI = i + 1;
      return checkNum(newI);
    });
  };

  const random = () => {
    let rand = Math.floor(Math.random() * reviews.length);
    if (rand === i) {
      rand = i + 1;
    }
    return setI(checkNum(rand));
  };

  return (
    <div className="container">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <p className="job">{job}</p>
      <p className="text">{text}</p>

      <button className="arrow" onClick={left}>
        <i className="bi bi-caret-left"></i>
      </button>
      <button className="arrow" onClick={right}>
        <i className="bi bi-caret-right"></i>
      </button>
      <br />
      <button id="random" onClick={random}>
        Surprise Me
      </button>
    </div>
  );
};

export default Reviews;
