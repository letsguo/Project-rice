import React from 'react';
import './App.css';
import ClubPage from "./ClubPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import FilteringContainer from "./FilteringContainer";
import {RecoilRoot} from "recoil";

function App() {
  return (
    <div className="App row">
        <RecoilRoot>
            <FilteringContainer />
            <ClubPage title={"Welcome to Clubby"}/>
        </RecoilRoot>
    </div>
  );
}

export default App;
