// Importer Style
// import './styles/grid.css';
import Experience from './Experience'
import { ExperienceProps } from '../types/types'

interface ExperiencesProps {
  listOfExperiences: ExperienceProps[],
}


export default function Experiences(props: ExperiencesProps) {
  const { listOfExperiences = "listOfExperiences" } = props;
  
  return (
      <div className="experiencesWrapper">

        {listOfExperiences.map((experience) => (
          <div key={experience.id} className="singleExperience">
            <Experience id={experience.id} description={experience.description}>
                <a href="#">Link to experience</a>
            </Experience>
          </div>
        ))}
      </div>
    )
  }