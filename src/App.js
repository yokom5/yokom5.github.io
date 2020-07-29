import React from 'react';
import './App.css';
import Button from "./Button";
import Profile from "./Profile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Button-flex">
          <a href="https://github.com/yokotatenaname"><Button name='GitHub' /></a>
          <a href="https://facebook.com"><Button name='Facebook' /></a>
          <a href="https://note.com/redorangex"><Button name='Blog' /></a>
          <a href='https://www.lancers.jp/profile/nishi_001?ref=side_menu'><Button name='Lancers' /></a>
          <a href='https://crowdworks.jp/public/employees/1496186?ref=mypage_nav1_account'><Button name='CrowdWorks' /></a>
        </div>
      </header>
      <Profile>
      </Profile>
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
