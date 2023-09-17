import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';
import { App } from './components/App';
// import { GlobalStyles } from "./styles/GlobalStyles.jsx";
import { GlobalStyles, theme } from 'styles';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/advert">
    <ThemeProvider theme={theme}>
    <Global styles={GlobalStyles} />
      <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
