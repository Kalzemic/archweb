
import '../Styles/ContactPage.css'


export default function Contactpage() {
    return (
        <div className='contact-page'>
            <form className='contact-form'>
                <div className='contact-segment'>
                    <label htmlFor='shem'>שם:</label>
                    <input id='shem' type='text' />
                </div>
                <div className='contact-segment'>
                    <label htmlFor='phone'>טלפון: </label>
                    <input id='phone' type='text' />
                </div>
                <div className='contact-segment'>
                    <label htmlFor='email'>מייל:</label>
                    <input id='email' type='text' />
                </div>


            </form>
        </div>
    );
}