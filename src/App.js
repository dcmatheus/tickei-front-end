import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './Routes';
import './App.css';

function App() {
  return (
    <Provider>
      <BrowserRouter store={ store }>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
