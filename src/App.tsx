import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./router";
import { Home } from "./pages";

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
      </div>
    </Router>
  );
}

export default App;
