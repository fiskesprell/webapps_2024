// Importer Style
// import './styles/grid.css';
import Experience from './Experience'


export default function Experiences({ experienceOne, experienceTwo }) {
    return (
      <div>
        <Experience description={experienceOne} />
        <Experience description={experienceTwo} />
      </div>
    )
  }