// Importer Style
// import './styles/grid.css';
import Project from './Project'
import { ProjectProps } from '../types/types'

type ProjectsProps = {
  listOfProjects: ProjectProps[],
  setProjectsList: React.Dispatch<React.SetStateAction<ProjectProps[]>>
};

export default function Projects(props: ProjectsProps) {
    const { listOfProjects, setProjectsList } = props;

    const removeCurrentProject = (id: string) => {
      setProjectsList((prevProjectsList) => prevProjectsList.filter((project) => project.id !== id))
    }

    return (
      <div className="projectsWrapper">
        {listOfProjects.length === 0 ? ( 
          <article className="noProjectsArticle"><p>Du har ingen prosjekter.</p></article> )
          : (
            ( listOfProjects.map((project) => (
              <div key={project.id}>
                <Project id={project.id} title={project.title} description={project.description} repoLink={project.repoLink}>
                  <button onClick={() => removeCurrentProject(project.id)}> Slett Prosjekt </button>
                </Project>
              </div>
            )))
          )
      }
      </div>
    )
  }