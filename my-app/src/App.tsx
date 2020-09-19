import React from 'react';
import './App.css';
import ClubContainer from "./ClubContainer";

function App() {
  return (
    <div className="App">
      <ClubContainer message={"hello"}/>
      <ClubContainer message={"gabe"}/>
      <ClubContainer message={"and"}/>
      <ClubContainer message={"sabreena"}/>
      <ClubContainer message={"welcome!"}/>
    </div>
  );
}

export default App;
