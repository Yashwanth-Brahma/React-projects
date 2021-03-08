import React from "react";

const DisplayText = ({ data }) => {
  return (
    <div className="para">
      {data.map((ele) => (
        <p>{ele}</p>
      ))}
    </div>
  );
};

export default DisplayText;
