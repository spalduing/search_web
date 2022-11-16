import React from 'react';
import './App.css';

import Search from './components/search/Search';
import Layaout from './components/Layaout';
import Context from './components/Context';

function App() {
  return (
    <div className="App">
      <Context>
        <Layaout />
      </Context>
    </div>
  );
}

export default App;
