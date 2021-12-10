import { useState } from 'react';
import './App.css';
import NavBar from './NavBar.js'
import DisplayModule from './DisplayModule.js'
import Footer from './Footer.js'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = (props) => {

  // visibility initial states 
  // add welcome module with initial visiility true 
  const [visibilityStrategy,setVisibilityStrategy] = useState(false);
  const [visibilityMaterial, setVisibilityMaterial] = useState(false);
  const [visibilityTests,setVisibilityTests] = useState(false);
  const [visibilityPositions,setVisibilityPositions] = useState(false);

  const {backgroundColor,setBackgroundColor} = props;

  return (
    <div style={{backgroundColor:backgroundColor}} className="d-flex flex-column container-fluid App justify-content-center align-items-center">
      <NavBar 
              backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} 
              visibilityStrategy={visibilityStrategy} setVisibilityStrategy={setVisibilityStrategy}
              visibilityMaterial={visibilityMaterial} setVisibilityMaterial={setVisibilityMaterial}
              visibilityTests={visibilityTests} setVisibilityTests={setVisibilityTests}
              visibilityPositions={visibilityPositions} setVisibilityPositions={setVisibilityPositions}
              />
      <DisplayModule  visibilityStrategy={visibilityStrategy} setVisibilityStrategy={setVisibilityStrategy}
                      visibilityMaterial={visibilityMaterial} setVisibilityMaterial={setVisibilityMaterial}
                      visibilityTests={visibilityTests} setVisibilityTests={setVisibilityTests}
                      visibilityPositions={visibilityPositions} setVisibilityPositions={setVisibilityPositions} 
      />
      <Footer />
    </div>
  );
}

export default App;
