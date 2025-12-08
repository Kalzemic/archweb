import { useNavigate } from 'react-router-dom';
import '../Styles/AboutPage.css'
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { ScrollEffect } from './ScrollEffect';

export default function AboutPage() {

    const navigate = useNavigate();
    
    useEffect(()=>{
        ScrollEffect({styleClass:'about-text',effectClass:'in-view'})
        ScrollEffect({styleClass:'about-img',effectClass:'in-view'})
    },[])
    return (


        <div className='about-body'>
            <div className='about-image-container'>
                <img className='about-img' src="/archweb_about.png" alt="no image found" />
            </div>
            <div className='about-text'>
                <h1>מי אנחנו?</h1>
                <h3>צוות מוסמך של מתכנתים המתמחים בתחום פיתוח הרשת  שדואג להעניק למותג שלכם מקום ברשת העולמית!</h3>
                <h3>
                    בין אם זו אפליקציית רשת, דף נחיתה, אתר אינטראקטיבי או כלי אוטומציה מבוססי AI.
                    לרשותכם צוות מתכנתים מומחה בעולם פיתוח הרשת
                    שיודע לענות על כל הדרישות שלכם</h3>
                <h2>שילווה אתכם ויספק מענה לאורך כל הדרך</h2>
                <motion.button
                    initial={{
                        boxShadow: "0 0 10px rgba(0, 195, 255, 0.9)",
                        background:
                            "linear-gradient(to right, rgba(246, 192, 117, 0.6), rgba(196, 94, 237, 0.6))",
                        backgroundSize: "200% 200%",
                    }}
                    animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeIn",
                    }}
                    aria-label='link to read more about the team'
                    className='team-button'
                    onClick={() => { navigate(`/team`) }}>קראו עוד</motion.button>
            </div>
        </div>

    );
}