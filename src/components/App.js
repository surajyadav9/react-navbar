import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import MutualFund from './MutualFund';
import Stocks from './Stocks';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact render={(props) => <Home {...props} />} />
          <Route path="/mutualfund" render={(props) => <MutualFund {...props} />}/>
          <Route path="/stocks" render={(props) => <Stocks {...props} />}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
