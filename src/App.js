import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Post from './components/Post'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/:postId' component={Post} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
