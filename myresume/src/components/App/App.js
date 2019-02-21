import React, { Component } from 'react';

import Body from '../Body/Body';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../SideDrawer/SideDrawer';

import './App.css';
import SideDrawer from '../SideDrawer/SideDrawer';


class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <Body />

        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;