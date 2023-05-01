import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// app.use(express.static('static'));

app.listen(PORT, () => {
  console.log('Server is listening on port ${PORT}');
});
