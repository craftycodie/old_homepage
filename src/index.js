import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { withRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { preloadPosts } from "./components/pages/Blog";

const RoutedApp = withRouter(App);

ReactDOM.render(<BrowserRouter><RoutedApp /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
preloadPosts();
