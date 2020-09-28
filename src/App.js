import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar.component";
import RecordsList from "./components/records-list.component";
import EditRecord from "./components/edit-record.component";
import CreateRecord from "./components/create-record.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={RecordsList} />
      <Route path="/edit/:id" component={EditRecord} />
      <Route path="/create" component={CreateRecord} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
