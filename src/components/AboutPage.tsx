import '../Styles/AboutPage.css'

export default function AboutPage() {
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
            </div>
        </div>

    );
}