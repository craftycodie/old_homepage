import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { withRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const ProppedApp = withRouter(App);

ReactDOM.render(<BrowserRouter><ProppedApp /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
