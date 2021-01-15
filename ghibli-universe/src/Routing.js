import React from 'react'
import LoginComponent from './components/LoginComponent';
import SignupComponent from './components/SignupComponent';
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import {BrowserRouter} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Movie from './pages/Movie';

const Routing = () => {
    return (
        <BrowserRouter>
          <Header />
          <Route exact path='/' component={SignupComponent} />
          <Route path='/logincomponent' component={LoginComponent}/>
          <Route path="/home" component={Home}/>
          <Route path="/films/:id" component={Movie}/>
          <Footer />
        </BrowserRouter>
    );
  }

export default Routing;
