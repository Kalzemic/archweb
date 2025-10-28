import '../Styles/ServicesPage.css'



export default function ServicesPage() {
    return (
        <div className='services-page'>
            <h1>השירותים שלנו</h1>
            <div className='services-grid'>
                {
                    ([['landing-pages', 'דפי נחיתה'],
                    ['interactive-websites', 'אתרים אינטראקטיבים'],
                    ['web-applications', 'אפליקציות רשת'],
                    ['automation-tools', 'כלי אוטומציה'],
                    ['ai-agents', ' סוכני AI']
                    ]).map(([key, value]) => {
                        const path = `/services/${key}.png`
                        return (
                            <div className='service'>
                                <a href={`/services/${key}`}><img
                                    className='service-image'
                                    src={path}
                                    alt={`${key} image `} />
                                    <span>{value}</span>
                                </a>

                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

