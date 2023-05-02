const React = require('react');
const ReactDOM = require('react-dom');
const App = require('./public/App.js');

ReactDOM.render(
  React.createElement(
    React.StrictMode,
    null,
    React.createElement(App, null)
  ),
  document.getElementById('root')
);
