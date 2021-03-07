import React from "react";

const DisplayMenu = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <img src={item.img} alt={item.title} />
            <div>
              <h3>
                {item.title} <span>{item.price}</span>
              </h3>
              <p> {item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayMenu;
