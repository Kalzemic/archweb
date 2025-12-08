import { useEffect, useState } from 'react';
import '../Styles/ServicesPage.css'
import { ScrollEffect } from './ScrollEffect';



export default function ServicesPage() {

    const [currentIndex,setCurrentIndex] = useState(0);
    const services = [{url:'landing-pages', name:'דפי נחיתה'},
    {url:'/interactive-websites',name: 'אתרים אינטראקטיבים'},
    {url:'web-applications', name:'אפליקציות רשת'},
    {url:'automation-tools',name: 'כלי אוטומציה'},
    {url:'ai-agents',name: ' סוכני AI'},
    ]
    useEffect(()=>{        
        ScrollEffect({styleClass:'service',effectClass:'in-view'});
    },[])

    useEffect(()=>{
        const interval = setInterval(()=>{
            const service = document.querySelector('.service')
            if(!service) return;
            
            service.classList.add('fade-out')
            setTimeout(() => {
                setCurrentIndex(prev => (prev + 1) % services.length);
                // Fade back in after image change
                service.classList.remove('fade-out');
              }, 1000);
        },3000)
        return ()=> clearInterval(interval);
    },[services.length])


const serviceStyles = {
 
    borderRadius: '10px',
    // backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage:`url('/services/${services[currentIndex].url}.png')`,
}

    return (
        <div className='services-page'>
            <h1>השירותים שלנו</h1>
            <div className='services-slider'>
                <div className='service-buttons'>
                {
                    services.map((service,idx)=>{return(
                        <button 
                        aria-label={`כפתור להציג  ${service.name} על המסך`}
                        className={`service-button-${currentIndex === idx ? 'selected' : ''}`}
                        onClick={()=>setCurrentIndex(idx)}></button>
                    );})
                }
                </div>
                <a aria-label={`כאן ניתן לראות איך אנחנו יוצרים ${services[currentIndex].name} ייחודיים`} href={`/services/${services[currentIndex].url}`}>
                <div className='service' style={serviceStyles}></div>
                </a>
                <h2>{services[currentIndex].name}</h2>
            </div>
        </div>
    );
}

