import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Forms from "./components/Forms";
import Display from "./components/Display";
import "./App.css";
const App = () => {
  const [people, setPeople] = useState([]);

  return (
    <Container fluid className="container">
      <Forms people={people} setPeople={setPeople} />
      <Display people={people} />
    </Container>
  );
};

export default App;
