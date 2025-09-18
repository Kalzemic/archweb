import "../Styles/Page.css"
import '../Styles/Homepage.css'





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
                    <h1>Archweb</h1>
                    <h2>מעלים את החלומות שלכם לרשת</h2>
                </div>
            </div>
        </div>
    );
}



export default HomePage;