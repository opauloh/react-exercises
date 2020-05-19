import React from 'react';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <ul>
      <li><NavLink to="/character-limit">Character Limit</NavLink></li>
      <li><NavLink to="/wait-delay">Wait Delay</NavLink></li>
    </ul>
  );
}

export default App;