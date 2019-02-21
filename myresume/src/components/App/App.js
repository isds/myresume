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
      // <div className="container-fluid">
      <div>
        {/* <header className="row"> */}
        <header>
          <Header />
          {/* <SideDrawer /> */}
        </header>
        {/* <div className="row justify-content-center"> */}
        {/* <div> */}
          <Body />
        {/* </div> */}
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;