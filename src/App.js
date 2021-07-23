
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/navbar';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import CreateClass from './components/class/createClass';
import Home from './components/home/home';
import Class from './components/class/class';
import AddStudent from './components/class/addstudent';

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar></Navbar>
    <switch>
    <Route exact path="/" component={Home}></Route>
    <Route path='/createClass' component={CreateClass}></Route>
    <Route path='/class/:classid' component={Class}></Route>
    <Route path='/addstudent' component={AddStudent}></Route>
    </switch>
    </Router>
    </div>
  );
}

export default App;
