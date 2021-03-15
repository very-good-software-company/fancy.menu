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
      light: '#8e8e8e',
      main: '#616161',
      dark: '#373737',
      contrastText: '#fff',
    },
    secondary: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
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
