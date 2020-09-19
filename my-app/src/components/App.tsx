import React from 'react';
import './App.css';
import ClubPage from "./ClubPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import FilteringContainer from "./FilteringContainer";

function App() {
    const test = "Search";
  return (
    <div className="App row">
        <FilteringContainer message={test}/>
        <ClubPage title={"Welcome to Clubby"}/>
    </div>
  );
}

export default App;
