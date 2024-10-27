import './styles/style.css'
import About from './components/About'
import { personalInfo, listOfExperiences } from './config/testData';
import Projects from './components/Projects'
import useProjects from './hooks/useProjects'
import ProjectForm from './components/ProjectForm'
import Contactform from './components/ContactForm'
import Layout from './pages/Layout';

function App() {
  // Henter ut data ved hjelp av custom hook
  const { projectsList, setProjectsList, loading, error } = useProjects();

  return (
    <Layout>
        <About personalInfo={personalInfo} listOfExperiences={listOfExperiences}/>
        <Projects listOfProjects={projectsList} setProjectsList={setProjectsList} />
        <div>
          <Contactform />
          <ProjectForm projectsList={projectsList} setProjectsList={setProjectsList}/>
        </div>
    </Layout>
  )
}

export default App