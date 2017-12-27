import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { withRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const RoutedApp = withRouter(App);

ReactDOM.render(<BrowserRouter><RoutedApp /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
