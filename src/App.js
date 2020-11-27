import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Header, Navigation, Page, Footer } from "./layouts";
import { Home, News, Contact, ErrorPage } from "./components";

function App() {
  return (
    <Router>
      <div className="app container">
        <header>{<Header />}</header>
        <main>
          <aside>
            {" "}
            <nav>{<Navigation />}</nav>
          </aside>
          <section className="page">
            <Page />
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
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
