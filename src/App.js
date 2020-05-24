import React from 'react';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <ul>
      <li><NavLink to="/character-limit">Character Limit</NavLink></li>
      <li><NavLink to="/wait-delay">Wait Delay</NavLink></li>
      <li><NavLink to="/api-requests">API Requests</NavLink></li>
      <li><NavLink to="/hooks-hover">Hooks Hover</NavLink></li>
      <li><NavLink to="/use-wait">useWait</NavLink></li>
      <li><NavLink to="/use-window-dimensions">useWindowDimensions</NavLink></li>
      <li><NavLink to="/use-fetch">useFetch</NavLink></li>
    </ul>
  );
}

export default App;
