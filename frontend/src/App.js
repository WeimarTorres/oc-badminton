import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Navigation from "./components/Navigation";
import ChampionshipList from "./components/ChampionshipList";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";

function App() {
  return (
    <Router>
      <Navigation/>
      <Route path="/" exact component={ChampionshipList}/>
      <Route path="/createUser/:id" component={CreateUser}/>
      <Route path="/editUser/:id" component={EditUser}/>
    </Router>
  );
}

export default App;
