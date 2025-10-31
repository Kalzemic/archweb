import "./App.css"
import AboutPage from "./components/AboutPage";
import HomePage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Project from "./components/Project";
import Contactpage from "./components/ContactPage";
import TeamPage from "./components/TeamPage";
import Footer from "./components/Footer";
import ServicesPage from "./components/ServicesPage";
import Service from "./components/Service";




const App = () => {


  return (
    <BrowserRouter>
      <div className="main-container">
        <Navbar />
        <Routes>
          <Route path='/' element={

            <>
              <section className='main-segment' id="homepage">
                <HomePage />
              </section>
              <section className='main-segment' id="about">
                <AboutPage />
              </section>
              <section className='main-segment' id='services'>
                <ServicesPage />
              </section>
              <section className='main-segment' id="portfolio">
                <Portfolio />
              </section>
              <section className='main-segment' id="contact">
                <Contactpage />
              </section>
              <section className='main-segment' id="reviews">

              </section>
              <section className='main-segment' id='footer'>
                <Footer />
              </section>
            </>
          } />
          <Route path='/projects/:project_name' element={<Project />} />
          <Route path='team' element={<TeamPage />} />
          <Route path='/services/:service' element={<Service />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;