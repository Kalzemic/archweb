import { useParams } from 'react-router-dom';
import '../Styles/Project.css'



export default function Project() {

    const { project_name } = useParams<{ project_name: string }>();
    const imagePath = `/projects/images/${project_name}.png`

    return (

        <div className='project-showcase-page'>
            <div className='project-showcase-container'>
                <img
                    className='project-showcase-image'
                    src={imagePath}
                    alt={`image showcasing ${project_name}`}
                />
            </div>
            <div className='project-showcase-description'>
                <h1>{project_name}</h1>

            </div>
        </div>
    );
}