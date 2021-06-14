import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Header from "./component/Header";
import AddToDo from "./component/AddToDo";
import ToDo from "./component/ToDo";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="">
          <Header />
          <Route exact path="/" component={ToDo} />
          <Route path="/add" component={AddToDo} />
        </div>
      </div>
    </Router>
  );
}

export default App;
