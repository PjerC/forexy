import { useState } from 'react';
import './App.css';
import NavBar from './NavBar.js'
import DisplayModule from './DisplayModule.js'
import Footer from './Footer.js'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = (props) => {

  const [visibilityStrategy,setVisibilityStrategy] = useState(false);

  const {backgroundColor,setBackgroundColor} = props;

  return (
    <div style={{backgroundColor:backgroundColor}} className="d-flex flex-column container-fluid App justify-content-center align-items-center">
      <NavBar backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} visibilityStrategy={visibilityStrategy} setVisibilityStrategy={setVisibilityStrategy}/>
      <DisplayModule  visibilityStrategy={visibilityStrategy} setVisibilityStrategy={setVisibilityStrategy}/>
      <Footer />
    </div>
  );
}

export default App;
