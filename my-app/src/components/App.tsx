import React from 'react';
import './App.css';
import ClubPage from "./ClubPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import FilteringContainer from "./FilteringContainer";
import {RecoilRoot} from "recoil";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ClubDetails from "./ClubDetails";

function App() {
  return (
    <div className="App row">
        <RecoilRoot>
            <Router>
                <Switch>
                    <Route path={"/club"}>
                        <ClubDetails name={"title"}/>
                    </Route>
                    <Route path={"/"}>
                        <FilteringContainer/>
                        <ClubPage title={"ClubHub"}/>
                    </Route>
                </Switch>
            </Router>
        </RecoilRoot>
    </div>
  );
}

export default App;
