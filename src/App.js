import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import "./App.css";
import { Home, News, Contact, ErrorPage } from "./components";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/news">News</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <section>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/news/" component={News} />
            <Route path="/contact/" component={Contact} />
            <Route component={ErrorPage} />
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
