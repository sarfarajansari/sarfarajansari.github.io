import "./App.css";
import "./components/typography/typography.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "./components/hero/Hero";
import AnimatedTitle from "./components/animatedTitle/animatedTitle";

function App() {
  return (
    <Router>
      <div id="App-grid" className="App">
        <div id="header">
          <Navbar />
          <div id="banner-sm"></div>
        </div>
        <div id="content">
          <Hero />
          <div className="animated-title-container-outer">
            <AnimatedTitle titleText="ABOUT ME" />
          </div>
          <div style={{ height: 500 }} />
          <Switch></Switch>
        </div>
        <div id="footer"></div>
      </div>
    </Router>
  );
}

export default App;
