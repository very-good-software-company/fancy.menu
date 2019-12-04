import React from 'react';
import Routes from './Routes';
import { Auth } from './state/auth';

function App() {
  return (
    <Auth.Provider>
      <Routes />
    </Auth.Provider>
  );
}

export default App;
