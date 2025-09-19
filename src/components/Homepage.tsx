import "../Styles/Page.css"
import '../Styles/Homepage.css'
import { motion } from "framer-motion";





const HomePage = () => {
    return (

        // <div className='hero-video-container'>
        //     <video autoPlay muted loop playsInline className='hero-video' >
        //         <source src='archweb_hero_video.webm' type='video/webm' />
        //     </video>
        //     <div className='hero-text'>
        //         <h1>Archweb</h1>
        //     </div>
        // </div>
        <div className='hero-page'>
            <div className='hero-img-container'>
                <img src='/archweb_logo.PNG' alt='archweb logo' className='hero-img' />
            </div>
            <div className='hero-text'>
                <div className='hero-title'>
                    <h1>ArchWeb</h1>
                    <h2>מעלים את המותג שלכם לרשת העולמית</h2>
                </div>
                <motion.button
                    initial={{
                        boxShadow: "0 0 10px rgba(0, 195, 255, 0.9)",
                        background:
                            "linear-gradient(to right, rgba(246, 192, 117, 0.6), rgba(196, 94, 237, 0.6))",
                        backgroundSize: "200% 200%",
                    }}
                    animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                        // boxShadow: ["0 0 10px rgba(0, 195, 255, 0.9)",
                        //     "0 0 15px rgba(0, 195, 255, 0.9)",
                        //     "0 0 20px rgba(0, 195, 255, 0.9)",
                        //     "0 0 25px rgba(0, 195, 255, 0.9)",
                        //     "0 0 30px rgba(0, 195, 255, 0.9)",
                        //     "0 0 35px rgba(0, 195, 255, 0.9)",
                        //     "0 0 40px rgba(0, 195, 255, 0.9)",
                        //     "0 0 45px rgba(0, 195, 255, 0.9)",
                        //     "0 0 50px rgba(0, 195, 255, 0.9)",
                        //     "0 0 45px rgba(0, 195, 255, 0.9)",
                        //     "0 0 40px rgba(0, 195, 255, 0.9)",
                        //     "0 0 35px rgba(0, 195, 255, 0.9)",
                        //     "0 0 30px rgba(0, 195, 255, 0.9)",
                        //     "0 0 25px rgba(0, 195, 255, 0.9)",
                        //     "0 0 20px rgba(0, 195, 255, 0.9)",
                        //     "0 0 15px rgba(0, 195, 255, 0.9)",
                        //     "0 0 10px rgba(0, 195, 255, 0.9) ",
                        // ],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeIn",
                    }}
                >בואו נתחיל</motion.button>
            </div>
        </div >
    );
}



export default HomePage;