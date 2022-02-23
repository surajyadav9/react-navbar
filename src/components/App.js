import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        {/* <Body />
        <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
