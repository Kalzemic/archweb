import '../Styles/Portfolio.css'
import projects from '../../public/projects/projects.json'
export default function Portfolio() {
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
                                onClick={() => { window.open(url) }}>לצפייה</button>


                        </div>
                    );
                })}

            </div>
        </div>
    );
}