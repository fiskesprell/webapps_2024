// Importer Style
// import './styles/grid.css';
import Project from './Project'
import { ProjectProps } from '../types/types'

type ProjectsProps = {
    projectOne : ProjectProps,
    projectTwo : ProjectProps,
};

// evt. state av experience må være her


export default function Projects({ projectOne, projectTwo }: ProjectsProps) {
    return (
      <div>
            <Project title={projectOne.title} description={projectOne.description} repoLink={projectOne.repoLink} />
            <Project title={projectTwo.title} description={projectTwo.description} repoLink={projectTwo.repoLink} />
      </div>
    )
  }