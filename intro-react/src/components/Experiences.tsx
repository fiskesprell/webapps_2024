// Importer Style
// import './styles/grid.css';
import Experience from './Experience'


export default function Experiences({ experienceOne, experienceTwo }) {
    return (
      <div>
        <Experience description={experienceOne}>
          <a href="#">Link to my blogpost about this experience.</a>
        </Experience>
        <Experience description={experienceTwo}>
          <a href="#">Link to my blogpost about this experience.</a>
        </Experience>
      </div>
    )
  }