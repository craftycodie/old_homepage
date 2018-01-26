import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { withRouter } from 'react-router';
import { CookiesProvider, withCookies } from 'react-cookie';
import { BrowserRouter } from 'react-router-dom';

const ProppedApp = withCookies(withRouter(App));

ReactDOM.render(<CookiesProvider><BrowserRouter><ProppedApp /></BrowserRouter></CookiesProvider>, document.getElementById('root'));
registerServiceWorker();
