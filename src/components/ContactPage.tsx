
import { useState } from 'react';
import '../Styles/ContactPage.css'


export default function Contactpage() {

    // const handleSumbit = (e: React.FormEvent) => {
    //     e.preventDefault()

    // }


    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    return (
        <div className='contact-page'>
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
                    <button className='submit-button' type='submit'>שליחה</button>
                </div>

            </form>
        </div>
    );
}