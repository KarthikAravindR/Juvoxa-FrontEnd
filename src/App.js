// import logo from './logo.svg';
// import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Toolbar from './shared/Toolbar/Toolbar'
import Juvoxa from './Juvoxa/pages/Juvoxa'
import Transactions from './Juvoxa/pages/Transaction'

function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Route path="/" exact >
          <Toolbar />
          <Juvoxa />
        </Route>
        <Route path="/transactions" exact >
          <Toolbar />
          <Transactions />
        </Route>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
