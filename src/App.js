import React from "react";
import Jumbotron from "./components/Header/Header";
import Table from "./components/Table/Table"; 

function App() {
  return (
    <div>
      <header className="App-header">
        <Jumbotron/>
        <Table />
      </header>
    </div>
  );
}

export default App;
