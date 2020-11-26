import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import { Home, News, Contact } from "./components";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <section>
          <Route path="/" exact component={Home} />
          <Route path="/news/" component={News} />
          <Route path="/contact/" component={Contact} />
        </section>
      </div>
    </Router>
  );
}

export default App;
