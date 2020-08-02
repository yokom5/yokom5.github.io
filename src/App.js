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
          <a href='https://www.lancers.jp/profile/nishi_001?ref=side_menu'><Button name='Lancers' /></a>
          <a href='https://crowdworks.jp/public/employees/1496186?ref=mypage_nav1_account'><Button name='CrowdWorks' /></a>
        </div>
      </header>
      <Profile>
      </Profile>
    </div>
  );
}

export default App;
