import React from 'react'
import './App.css'

import { Switch } from 'react-router-dom'
import { Route } from 'react-router'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import showdown from 'showdown'
import Blog, { loadPosts } from './components/pages/Blog'

import Header from './components/global/Header'
// import Footer from "./components/global/Footer";
import AdminBar from './components/global/AdminBar'
import Konami from './components/global/Konami'

import Portfolio from './components/pages/Portfolio'
import BlogPost from './components/pages/blog/BlogPost'
import About from './components/pages/About'
import Error404 from './components/pages/Error404'
import Login from './components/pages/Login'

import ApiHandler from './api/apiHandler'
import ApiConfig from './api/integratedConfig'
import BlogPostEditor from './components/pages/BlogPostEditor'
export var apiHandler
export var showdownConverter = new showdown.Converter(
  {
    tasklists: true,
    smoothLivePreview: true,
    simpleLineBreaks: true,
    ghMentions: true,
    emoji: true,
    underline: true,
    tables: true,
    strikethrough: true
  }
)


export default class App extends React.Component {
  constructor (props) {
    super(props)

    apiHandler = new ApiHandler(ApiConfig, this.props.cookies, this.props.history)

    loadPosts()
  }

  render () {
    return (
      <div className='App'>
        <Konami history={this.props.history} />
        <AdminBar history={this.props.history} location={this.props.location} />
        <Header location={this.props.location} />

      </div>
    )
  }
}
