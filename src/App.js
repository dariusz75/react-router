import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { Header, Navigation, PageRouting, Footer } from "./layouts";

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
        <section></section>
      </div>
    </Router>
  );
}

export default App;
