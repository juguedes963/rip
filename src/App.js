import React, { useState } from 'react'
import { IntlProvider } from 'react-intl';
import Routes from './Routes'
import './index.scss'
import { Router } from 'react-router-dom'
import history from './services/history';

function App() {
  return (
    <IntlProvider >
      <Router history={history}>
        <Routes />
      </Router>
    </IntlProvider>
  );
}

export default App;
