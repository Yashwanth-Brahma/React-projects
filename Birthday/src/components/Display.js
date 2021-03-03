import React from "react";

const Display = ({ people }) => {
  return (
    <div className="display">
      <ul>
        {people.map((person) => (
          <li key={person.id}>
            {person.name} : {person.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Display;
