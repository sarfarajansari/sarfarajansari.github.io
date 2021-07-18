import './App.css';
import './components/typography/typography.css';
import Navbar from "./components/navbar/Navbar"
import {BrowserRouter as Router, Switch ,Route} from "react-router-dom";
import Hero from './components/hero/Hero';
import LearningPath from './components/learningPath/LearningPath';

function App() {
  return (
    <Router>
      <div id="App-grid" className="App">
        <div id="header"><Navbar/><div id="banner-sm"></div></div>
        <div id="content">
          <Hero/>
          <LearningPath/>
          <Switch>
          </Switch>
        </div>
        <div id="footer"></div>
      </div>
    </Router>
  );
}

export default App;
