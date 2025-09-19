import '../Styles/Portfolio.css'
import projects from '../assets/projects.json'
import { useNavigate } from "react-router-dom";


export default function Portfolio() {

    const navigate = useNavigate();
    return (
        <div className='portfolio-page'>
            <h1>כמה מהעבודות שלנו</h1>
            <div className='projects-grid'>

                {projects.map((project, index) => {
                    const url = `https://www.${project.name}.co.il`
                    const imagepath = `/projects/images/${project.name}.png`
                    const logopath = `/projects/logos/${project.name}.png`
                    return (
                        <div className='project-card' key={index}>

                            <img className='project-card-background' src={imagepath} alt={`${project.name} project image`} />
                            <img className='project-card-logo' src={logopath} alt={`${project.name} logo image`} />
                            <button className='project-card-button'
                                style={{ backgroundColor: "rgba(0,0,0,0.9)", color: project.color, boxShadow: `0 0 10px ${project.color}` }}
                                onClick={() => { navigate(`/projects/${project.name}`) }}>לצפייה</button>


                        </div>
                    );
                })}

            </div>
        </div>
    );
}