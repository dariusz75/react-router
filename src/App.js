import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Header, Navigation, PageRouting, Footer } from "./layouts";
import { Products, Contact, Error } from "./components";
import { Home } from "./pages";

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
            <PageRouting />
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
        <section>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/products/" component={Products} />
            <Route path="/contact/" component={Contact} />
            <Route component={Error} />
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
