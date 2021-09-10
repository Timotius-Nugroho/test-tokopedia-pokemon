import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Users from "./pages/Users";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/users" component={Users}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
