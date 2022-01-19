
import './App.css';
import Fetching from './components/Fetching';
import Nav from './components/Nav';
import Home from './components/Home/Home'
import About from "./components/About"
import {BrowserRouter as Router , Route , Switch, Link} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route path="/nav" component={Nav} />
          <Route path="/home" component={Fetching}/>
          <Route path="/about" component={About}/>
        </Switch>
       
      </div>
    </Router>
  );
}

export default App;
