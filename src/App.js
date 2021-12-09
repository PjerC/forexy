//import { useState } from 'react';
import './App.css';
import NavBar from './NavBar.js'
import DisplayModule from './DisplayModule.js'
import Footer from './Footer.js'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = (props) => {

  const {backgroundColor} = props;

  return (
    <div style={{backgroundColor:backgroundColor}} className="App">
      <NavBar/>
      <DisplayModule />
      <Footer />
    </div>
  );
}

export default App;
