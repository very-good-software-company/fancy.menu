import React from 'react';
import Routes from './Routes';
import { Auth } from './state/auth';
import { Business } from './state/business';
import { Menus } from './state/menus';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#4f5b62',
      main: '#263238',
      dark: '#000a12',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fffd61',
      main: '#ffca28',
      dark: '#c79a00',
      contrastText: '#000',
    },
    delete: {
      main: '#e53935'
    }
  },
});



function App() {
  return (

    
    <ThemeProvider theme={theme}>

      <Auth.Provider>
        <Business.Provider>
          <Menus.Provider>
            <Routes />
          </Menus.Provider>
        </Business.Provider>
      </Auth.Provider>

    </ThemeProvider>
      
    
    
  );
}

export default App;
