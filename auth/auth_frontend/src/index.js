import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import {CssBaseline, Container} from '@mui/material'
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline>
      <Router>
      <Container  maxWidth="lg">
          <App />
      </Container>
      </Router>
    </CssBaseline>
  </React.StrictMode>,
  document.getElementById('root')
);
