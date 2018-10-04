import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(React.createElement(App, { trades: [] }), document.getElementById('app'));
