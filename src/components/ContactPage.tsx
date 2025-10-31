
import { useState } from 'react';
import '../Styles/ContactPage.css'
import { motion } from 'framer-motion';


export default function Contactpage() {

    // const handleSumbit = (e: React.FormEvent) => {
    //     e.preventDefault()

    // }


    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [body, setBody] = useState("")

    return (
        <div className='contact-page'>
            <div className='contact-title'>
                <h1>דברו איתנו</h1>
            </div>
            <form className='contact-form'>
                <div className='contact-segment'>
                    <label htmlFor='shem'>שם:</label>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        id='shem' type='text' />
                </div>
                <div className='contact-segment'>
                    <label htmlFor='phone'>טלפון: </label>
                    <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        id='phone' type='text' />
                </div>
                <div className='contact-segment'>
                    <label htmlFor='email'>מייל:</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id='email' type='text' />
                </div>
                <div className='contact-segment'>
                    <label htmlFor='body'> פרטים נוספים: </label>
                    <textarea
                        id='body'
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        rows={10}
                        cols={35}
                        className='contact-textarea'
                    />
                </div>
                <div className='contact-segment'>
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

                        whileHover={{
                            boxShadow: [
                                "0 0 10px rgba(0, 195, 255, 0.9)",
                                "0 0 20px rgba(0, 195, 255, 0.9)",
                                "0 0 30px rgba(0, 195, 255, 0.9)",
                                "0 0 20px rgba(0, 195, 255, 0.9)",
                                "0 0 10px rgba(0, 195, 255, 0.9)"

                            ]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeIn",
                        }}


                        className='submit-button' type='submit'>שליחה</motion.button>
                </div>

            </form>
        </div>
    );
}