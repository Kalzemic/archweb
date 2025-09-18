import '../Styles/Navbar.css'
import { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-content">

                    {/* Desktop nav */}
                    <div className="navbar-center desktop-menu">
                        <ul>
                            <li><a href="#homepage">דף הבית</a></li>
                            <li><a href="#about">קצת עלינו</a></li>
                            <li><a href="#portfolio">הפרויקטים שלנו</a></li>
                            <li className="contact-button"><a href="#contact">צרו קשר</a></li>
                        </ul>
                    </div>

                    <div className="navbar-left">
                        <img src="/archweb_logo_no_bg.png" alt="Company Logo" className="logo" />
                    </div>

                    {/* Mobile menu button */}
                    <div className="hamburger-menu" onClick={toggleSidebar}>
                        ☰
                    </div>
                </div>
            </nav>

            {/* Sidebar menu */}
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <ul>
                    <li><a href="#homepage">דף הבית</a></li>
                    <li><a href="#about">קצת עלינו</a></li>
                    <li><a href="#portfolio">הפרויקטים שלנו</a></li>
                    <li className="contact-button"><a href="#contact">צרו קשר</a></li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;
