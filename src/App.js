import React from 'react';
import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from "styled-components"
import GitHubContainer from './components/GitHubContainer';

const theme = createMuiTheme({      
  typography: {
    button: {
      textTransform: 'none'
    }
  }
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GitHubContainer/>
      </ThemeProvider>
    </>
  );
}

export default App;
