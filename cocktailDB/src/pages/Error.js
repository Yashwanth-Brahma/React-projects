import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error">
      <h3>PAGE DOES NOT EXSIST 😐💩</h3>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </section>
  );
};

export default Error;
