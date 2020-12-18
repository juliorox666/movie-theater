import React from 'react';
import { theme } from 'theme/index';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MovieProvider } from 'context/movieContext';
import { BrowserRouter } from 'react-router-dom';
import AppLayout from 'containers/AppLayout';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <MovieProvider>
            <AppLayout /> {/* <== all routes here */}
          </MovieProvider>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
