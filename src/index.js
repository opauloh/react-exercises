import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CharacterLimit from './exercises/CharacterLimit';
import WaitDelay from './exercises/WaitDelay';
import ApiRequests from './exercises/ApiRequests';
import HooksHover from './exercises/HooksHover';
import CustomUseWait from './exercises/CustomUseWait';
import CustomUseWindowDimensions from './exercises/CustomUseWindowDimensions';
import CustomUseFetch from './exercises/CustomUseFetch';
import RefactorUseFetch from './exercises/RefactorUseFetch';
import ComplexForm from './exercises/ComplexForm';
import ClickGame from './exercises/ClickGame';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path='/character-limit' exact={true} component={CharacterLimit} />
        <Route path='/wait-delay' exact={true} component={WaitDelay} />
        <Route path='/api-requests' exact={true} component={ApiRequests} />
        <Route path='/hooks-hover' exact={true} component={HooksHover} />
        <Route path='/use-wait' exact={true} component={CustomUseWait} />
        <Route path='/use-window-dimensions' exact={true} component={CustomUseWindowDimensions} />
        <Route path='/use-fetch' exact={true} component={CustomUseFetch} />
        <Route path='/refactor-use-fetch' exact={true} component={RefactorUseFetch} />
        <Route path='/complex-form' exact={true} component={ComplexForm} />
        <Route path='/click-game' exact={true} component={ClickGame} />
        <Route path='/' exact={true} component={App} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

