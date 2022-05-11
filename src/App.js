import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Wallet from './pages/Wallet';

function App() {
  return (
    <Switch>
      <Route exact path="/expensesadministrator" component={ Login } />
      <Route exact path="/expensesadministrator/carteira" component={ Wallet } />
    </Switch>
  );
}

export default App;
