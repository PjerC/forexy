import './App.css';
import NavBar from './NavBar.js'
import DisplayModule from './DisplayModule.js'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <DisplayModule />
    </div>
  );
}

export default App;
