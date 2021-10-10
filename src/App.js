
import './App.css';
import Fetching from './components/Fetching';
import Nav from './components/Nav';
import {BrowserRouter as Router , Route , Switch, Link} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/nav" component={Nav} />
           
         
        </Switch>
        <Fetching />
      </div>
    </Router>
  );
}

export default App;
