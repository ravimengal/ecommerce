
import './App.css';
import Fetching from './components/Fetching';
import Nav from './components/Nav';
import Home from './components/Home/Home'
import {BrowserRouter as Router , Route , Switch, Link} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route path="/nav" component={Nav} />
          <Route path="/home" component={Home}/>
        </Switch>
        <Fetching />
      </div>
    </Router>
  );
}

export default App;
