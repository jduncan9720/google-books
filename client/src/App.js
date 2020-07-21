import React from "react";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";
import {BrowserRouter as Router, Route} from "react-router-dom"
function App() {
  return (
    <>
    <Nav />
    <Router>
      <switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/saved" component={Saved} />
      </switch>
    </Router>
  </>
  );
}

export default App;
