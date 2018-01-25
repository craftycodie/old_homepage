import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { withRouter } from 'react-router';
import { CookiesProvider, withCookies } from 'react-cookie';
import { BrowserRouter } from 'react-router-dom';
import { loadPosts } from "./components/pages/Blog";

const ProppedApp = withCookies(withRouter(App));

loadPosts();
ReactDOM.render(<CookiesProvider><BrowserRouter><ProppedApp /></BrowserRouter></CookiesProvider>, document.getElementById('root'));
registerServiceWorker();
