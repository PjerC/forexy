import { useState } from 'react';
import './App.css';
import NavBar from './NavBar.js'
import DisplayModule from './DisplayModule.js'
import Footer from './Footer.js'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = (props) => {

  const [visibilityStrategy,setVisibilityStrategy] = useState(false);

  const {backgroundColor} = props;

  return (
    <div style={{backgroundColor:backgroundColor}} className="App justify-content-center items-align-center">
      <NavBar visibilityStrategy={visibilityStrategy} setVisibilityStrategy={setVisibilityStrategy}/>
      <DisplayModule  visibilityStrategy={visibilityStrategy} setVisibilityStrategy={setVisibilityStrategy}/>
      <Footer />
    </div>
  );
}

export default App;
