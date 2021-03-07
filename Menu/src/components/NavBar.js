import React, { useState, useEffect } from "react";
import DisplayMenu from "./DisplayMenu";
import menu from "../data";

const NavBar = () => {
  const [category, setCategory] = useState("all");
  const [data, setData] = useState(menu);

  const checkCategory = () => {
    if (category === "all") {
      setData(menu);
    }
    if (category === "breakfast") {
      let breakfast = menu.filter((item) => item.category === category);
      setData(breakfast);
    }
    if (category === "lunch") {
      let lunch = menu.filter((item) => item.category === category);
      setData(lunch);
    }
    if (category === "shakes") {
      let shakes = menu.filter((item) => item.category === category);
      setData(shakes);
    }
  };

  useEffect(() => {
    checkCategory();
  }, [category]);
  console.log(data);
  return (
    <div>
      <button className="btn" onClick={() => setCategory("all")}>
        All
      </button>
      <button className="btn" onClick={() => setCategory("breakfast")}>
        Breakfast
      </button>
      <button className="btn" onClick={() => setCategory("lunch")}>
        Lunch
      </button>
      <button className="btn" onClick={() => setCategory("shakes")}>
        Shakes
      </button>

      <DisplayMenu data={data} />
    </div>
  );
};

export default NavBar;
