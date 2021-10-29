import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import pevents from "./pages/pevents";
import fevents from "./pages/fevents";
import About from "./pages/About.js";
function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
        </div>
        <div>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/pevents" exact component={pevents} />
            <Route path="/fevents" exact component={fevents} />
            <Route path="/About" exact component={About} />
          </Switch>
        </div>
        <div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
