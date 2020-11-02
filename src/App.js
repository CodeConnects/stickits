// pm2 start npm --name "stickits main" -- start

import React from 'react';
import './App.css';
import Header from './components/Header';
import NewButton from './components/NewButton';
import SaveButton from './components/SaveButton';
import ClearButton from './components/ClearButton';
import DeleteButton from './components/DeleteButton';
import LoadButton from './components/LoadButton';


function App() {

  return (
    <div className="app">
    
      <Header />

      <section id="primary-content" className="sticky-wrap">

        <NewButton id="new-btn" className="dash-btn" text="+ New Sticky" />
        <SaveButton id="save-btn" className="dash-btn" text="Save Board" />
        <ClearButton id="clear-btn" className="dash-btn" text="Clear All" />
        <DeleteButton id="delete-btn" className="dash-btn" text="Delete All" />
        <LoadButton id="load-btn" className="dash-btn" text="Load Board" />

        <div id="sticky-notes"></div>
        
      </section>

    </div>
  );
}

export default App;
