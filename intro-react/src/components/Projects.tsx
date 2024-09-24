// Importer Style
// import './styles/grid.css';
import Project from './Project'
import { ProjectProps } from '../types/types'

type ProjectsProps = {
  listOfProjects: ProjectProps[],
};

// evt. state av experience må være her


export default function Projects(props: ProjectsProps) {
    const { listOfProjects = "listOfProjects" } = props;
    return (
      <div className="projectsWrapper">
        {listOfProjects.map((project) => (
          <Project title={project.title} description={project.description} repoLink={project.repoLink} />
        ))}
      </div>
    )
  }