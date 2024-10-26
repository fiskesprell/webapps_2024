import './styles/style.css'
import Header from './components/Header'
import About from './components/About'
import { personalInfo, listOfExperiences } from './config/config';
import Projects from './components/Projects'
import Footer from './components/Footer'
import useProjects from './hooks/useProjects'
import ProjectForm from './components/ProjectForm'
import Contactform from './components/ContactForm'

function App() {
  // Henter ut data ved hjelp av custom hook
  const { projectsList, setProjectsList, loading, error } = useProjects();
  

  // Functions
  function showEmailButton(){
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>{
      alert("Kontakt meg på: " + personalInfo.contactEmail);
    }
    return <button className="showEmailButton" onClick={handleClick}>Vis e-post?</button>
  }

  return (
    <>
      <Header name={personalInfo.name}/>
      <main>
        <About personalInfo={personalInfo} listOfExperiences={listOfExperiences} showEmailButton={showEmailButton}/>
        <Projects listOfProjects={projectsList} setProjectsList={setProjectsList} />
        <div>
          <Contactform />
          <ProjectForm projectsList={projectsList} setProjectsList={setProjectsList}/>
        </div>
      </main>
      <Footer showEmailButton={showEmailButton}/>
    </>
  )
}

export default App