/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import NavBar from "./components/Navbar";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Detail from "./pages/Detail";
import MyPoke from "./pages/MyPokemon";

export const RootContext = createContext();
const Provider = RootContext.Provider;

function App() {
  const [state, setState] = useState({
    myPokeList: [],
  });

  const dispatch = (action) => {
    if (action.type === "REMOVE_POKE") {
      const newState = {
        ...state,
        myPokeList: state.myPokeList.filter((e) => e.name !== action.data.name),
      };
      localStorage.setItem("mypoke", JSON.stringify(newState.myPokeList));
      return setState(newState);
    }
    if (action.type === "ADD_POKE") {
      const newState = {
        ...state,
        myPokeList: [...state.myPokeList, action.data],
      };
      localStorage.setItem("mypoke", JSON.stringify(newState.myPokeList));
      return setState(newState);
    }
  };

  useEffect(() => {
    const chace = JSON.parse(localStorage.getItem("mypoke"));
    setState({
      ...state,
      myPokeList: chace ? chace : [],
    });
  }, []);

  console.log(state);
  return (
    <div className="App">
      <Provider value={{ state, dispatch }}>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/users" component={Users}></Route>
            <Route path="/my-poke" component={MyPoke}></Route>
            <Route path="/detail" component={Detail}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
