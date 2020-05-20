import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CharacterLimit from './exercises/CharacterLimit';
import WaitDelay from './exercises/WaitDelay';
import ApiRequests from './exercises/ApiRequests';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path='/character-limit' exact={true} component={CharacterLimit} />
        <Route path='/wait-delay' exact={true} component={WaitDelay} />
        <Route path='/api-requests' exact={true} component={ApiRequests} />
        <Route path='/' exact={true} component={App} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

