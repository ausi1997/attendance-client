
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/navbar';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import CreateClass from './components/class/createClass';
import Home from './components/home/home';

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar></Navbar>
    <switch>
    <Route exact path="/" component={Home}></Route>
    <Route path='/createClass' component={CreateClass}></Route>
    </switch>
    </Router>
    </div>
  );
}

export default App;
