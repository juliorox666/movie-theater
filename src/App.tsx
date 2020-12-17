import React from 'react';
import { theme } from 'theme/index';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import Content from 'containers/Content';
import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <BrowserRouter>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Content /> {/* <== All Routes here */}
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
