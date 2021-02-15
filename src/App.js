import React from 'react';

import './App.css';
import Feed from './conponents/feed/Feed';
import Header from './conponents/header/Header';
import Sidebar from './conponents/sidebar/Sidebar';

function App() {
  return (
    <div className="app">

      { /* Header */ }
      <Header/>
      { /* App Bar */ }
      <div className="app_body"> 
        <Sidebar /> 
        

      { /* Feed */ }
        <Feed />

      { /* Widgets */ }
      
      </div>
      
    </div>
  );
}

export default App;
