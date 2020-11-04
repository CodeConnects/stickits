// pm2 start npm --name "stickits main" -- start

import React from 'react';
import './App.css';
import Header from './components/Header';
import NoteBoard from './components/NoteBoard';

function App() {

  return (

    <div className="app">
    
      <Header />

      <NoteBoard />

    </div>
  );
}

export default App;
