import React, { useState } from "react";
import text from "../data";
import DisplayText from "./DisplayText";

const Forms = () => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    let d = text.filter((ele, index) => index < value && ele);
    setData(d);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="num">Paragraphs : </label>
      <input
        type="number"
        name="num"
        id="num"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        max="10"
        min="0"
      />
      <button type="submit">GENERATE</button>
      <DisplayText data={data} />
    </form>
  );
};

export default Forms;
