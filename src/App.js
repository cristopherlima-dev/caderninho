// App.js
import React from "react";
import Container from 'react-bootstrap/Container';
import Adicionar from "./components/Adicionar";

const App = () => {
  return (
    <div>
      <br></br>
      <Container>        
        <Adicionar />
      </Container>
      <br></br>
    </div>
  );
};

export default App;
