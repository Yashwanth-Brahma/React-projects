import React, { useState } from "react";
import { v4 } from "uuid";

const Forms = ({ people, setPeople }) => {
  const [data, setData] = useState({
    name: "",
    date: "",
  });
  const { name, date } = data;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    if (name && date) {
      const newp = { ...data, id: v4() };
      setPeople([...people, newp]);
      setData({ name: "", date: "" });
    } else {
      alert("enter value");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="name"
        value={name}
        onChange={handleChange}
      />

      <input
        type="date"
        name="date"
        id="date"
        placeholder="date"
        value={date}
        onChange={handleChange}
      />

      <span>
        <button type="submit">Add</button>
      </span>
    </form>
  );
};

export default Forms;
