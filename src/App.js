import React from 'react';
import Routes from './Routes';
import { Auth } from './state/auth';
import { Business } from './state/business';
import { Menus } from './state/menus';

function App() {
  return (
    <Auth.Provider>
      <Business.Provider>
        <Menus.Provider>
          <Routes />
        </Menus.Provider>
      </Business.Provider>
    </Auth.Provider>
  );
}

export default App;
