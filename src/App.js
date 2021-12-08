import './App.css';
import NavBar from './NavBar.js'
import DisplayModule from './DisplayModule.js'
import Footer from './Footer.js'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <DisplayModule />
      <Footer />
    </div>
  );
}

export default App;
