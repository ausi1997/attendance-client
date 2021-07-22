
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/navbar';
import {BrowserRouter as Router , Route,Switch} from 'react-router-dom';
import CreateClass from './components/class/createClass';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar>
    <Router>
    <switch>
    <Route path='/createClass'><CreateClass></CreateClass></Route>
    </switch>
    </Router>
    </div>
  );
}

export default App;
