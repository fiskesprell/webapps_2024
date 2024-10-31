// Importer Style
// import './styles/grid.css';
import Project from './Project'
import { ProjectsProps } from '../types/types'

export default function Projects(props: ProjectsProps) {
    const { listOfProjects, setProjectsList, deleteProject } = props;

    const removeCurrentProject = (id: string) => {
      setProjectsList((prevProjectsList) => prevProjectsList.filter((project) => project.id !== id))
    }

    return (
      <div className="projectsWrapper">
        {listOfProjects.length === 0 ? ( 
          <article className="noProjectsArticle"><p>Du har ingen prosjekter.</p></article> )
          : (
            ( listOfProjects.map((project) => (
              <div key={project.id} className="articleDiv">
                <Project id={project.id} title={project.title} description={project.description} repoLink={project.repoLink} publishedAt={project.publishedAt} tags={project.tags}>
                <button onClick={() => {removeCurrentProject(project.id); deleteProject(project.id);}}>Slett Prosjekt</button>

                </Project>
              </div>
            )))
          )
      }
      </div>
    )
  }