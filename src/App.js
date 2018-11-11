import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import mainPage from './components/pages/mainPage'
import searchPage from './components/pages/searchPage'



class BooksApp extends React.Component {

  render() {
    return (
      <div>
        <Route exact path="/" component={ mainPage } />
        <Route exact path="/search" component={ searchPage } />
      </div>
    );
  }
}

export default BooksApp