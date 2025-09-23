import "./App.css"
import AboutPage from "./components/AboutPage";
import HomePage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Project from "./components/Project";
import Contactpage from "./components/ContactPage";


const App = () => {

  return (
    <BrowserRouter>
      <div className="main-container">
        <Navbar />
        <Routes>
          <Route path='/' element={

            <>
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
                <Contactpage />
              </section>
              <section id="reviews">

              </section>
            </>
          } />
          <Route path='/projects/:project_name' element={<Project />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;