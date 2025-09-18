import "./App.css"
import AboutPage from "./components/AboutPage";
import HomePage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";



const App = () => {

  return (
    <div className="main-container">
      <Navbar />
      <section id="homepage">
        <HomePage />
      </section>
      <section id="about">
        <AboutPage />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">

      </section>
      <section id="reviews">

      </section>
    </div>
  );
}

export default App;