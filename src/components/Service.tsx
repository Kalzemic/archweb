import { useParams } from "react-router-dom";
import '../Styles/Service.css'


export default function Service() {
    const { service } = useParams()
    return (
        <div>
            <img className='service-image' src={`/services/${service}.png`} alt={`${service} image`} />
        </div>
    );
}