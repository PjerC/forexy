import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';
import './App.css';
import NavBar from './NavBarModules/NavBar.js'
import DisplayModule from './DisplayModules/DisplayModule.js'
import Footer from './FooterModules/Footer.js'

const App = (props) => {


  // TO_DO  welcome module with initial visiility true 
  const [visibilityHomePage,setVisibilityHomePage] = useState(true);
  const [visibilityStrategy,setVisibilityStrategy] = useState(false);
  const [visibilityMaterial, setVisibilityMaterial] = useState(false);
  const [visibilityTests,setVisibilityTests] = useState(false);
  const [visibilityPositions,setVisibilityPositions] = useState(false);
  const {backgroundColor,setBackgroundColor} = props;

  return (
    <div style={{backgroundColor:backgroundColor? 'rgb(19,23,34)':'white'}} className="d-flex flex-column container-fluid App justify-content-center text-secondary align-items-center">
      
      <NavBar 
              backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor}
              visibilityHomePage={visibilityHomePage} setVisibilityHomePage={setVisibilityHomePage} 
              visibilityStrategy={visibilityStrategy} setVisibilityStrategy={setVisibilityStrategy}
              visibilityMaterial={visibilityMaterial} setVisibilityMaterial={setVisibilityMaterial}
              visibilityTests={visibilityTests} setVisibilityTests={setVisibilityTests}
              visibilityPositions={visibilityPositions} setVisibilityPositions={setVisibilityPositions}
              />
      <DisplayModule  visibilityHomePage={visibilityHomePage} setVisibilityHomePage={setVisibilityHomePage}
                      visibilityStrategy={visibilityStrategy} setVisibilityStrategy={setVisibilityStrategy}
                      visibilityMaterial={visibilityMaterial} setVisibilityMaterial={setVisibilityMaterial}
                      visibilityTests={visibilityTests} setVisibilityTests={setVisibilityTests}
                      visibilityPositions={visibilityPositions} setVisibilityPositions={setVisibilityPositions} 
      />
      <Footer />
    </div>
  );
}

export default App;
