// pm2 start npm --name "stickits main" -- start

import React from 'react';
import './App.css';
import Header from './components/Header';
import NoteBoard from './components/NoteBoard';
import Footer from './components/Footer';

function App() {

  return (

    <div className="app">
    
      <Header />

      <NoteBoard />

      <Footer />

    </div>
  );
}

export default App;
