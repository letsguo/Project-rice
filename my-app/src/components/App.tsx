import React from 'react';
import './App.css';
import ClubPage from "./ClubPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import FilteringContainer from "./FilteringContainer";
import {RecoilRoot} from "recoil";

function App() {
    const test = "Search";
  return (
    <div className="App row">
        <RecoilRoot>
            <FilteringContainer message={test}/>
            <ClubPage title={"Welcome to Clubby"}/>
        </RecoilRoot>
    </div>
  );
}

export default App;
