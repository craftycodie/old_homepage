import React from 'react'
import './App.css'
import { Provider } from 'react-redux'

import store from './Core/store'
import Header from './Core/components/Header'
// import Footer from "./components/global/Footer";
import AdminBar from './Core/components/AdminBar'
import Konami from './Core/components/Konami'

import Router from './Core/routes'
import { ConnectedRouter } from 'connected-react-router'

export default class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <Provider store={store}>
          <ConnectedRouter>
            <Konami />
            <AdminBar />
            <Header />
            <Router />
          </ConnectedRouter>
        </Provider>
      </div>
    )
  }
}
